import classnames from 'classnames';
import React from 'react';
import { createUseStyles } from 'react-jss';
import { theme, Theme } from '../theme';

const useStyles = createUseStyles<string, {}, any>(
  (theme: Theme) => (@Start{
  blockColor: {
    background: '#22778e',
      minWidth: '@Stheme.marginBase * 10@E',
      borderRadius: '@Stheme.borderRadius.std@E',
      '@S...theme.fonts.label@E',
      color: '@Stheme.colors.background@E',
      fontWeight: 'bold',
      display: 'flex',
      border: 0,
      cursor: 'pointer',
      alignItems: 'center',
      alignContent: 'center',
      justifyContent: 'center',
      gap: '@Stheme.marginBase@E',
      transition: 'all 0.3s ease',
      width: 'fit-content',
  ...valueProps?.desktop,

      '&:hover': {
    ...valueProps?.hover,
    },
  },
  '@container (max-width: 768px)': {
    blockColor: {
    ...valueProps?.tablet,
    },
  },
  '@container (max-width: 480px)': {
    blockColor: {
    ...valueProps?.mobile,
    },
  },
  full: {
    width: '100%',
  },
}@End),
);

interface BaseButtonProps {
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  full?: boolean;
}

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const CMSButton@variant = (props: BaseButtonProps & ButtonProps) => {
  const { className, onClick, type, full, children, ...rest } = props;

  const classes = useStyles({ theme });

  return (
    <button
      className={classnames(
        classes.blockColor,
        {
          [classes.full]: full,
        },
        className,
      )}
      onClick={onClick}
      onSubmit={onClick}
      type={type}
      {...rest}
    >
      {children}
    </button>
  );
};
