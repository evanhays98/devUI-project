import classnames from 'classnames';
import React, { forwardRef, useMemo } from 'react';
import { createUseStyles } from 'react-jss';
import { theme, Theme } from '../theme';
import { useCustomStyle } from '../../core/StyleContext';
import { v4 as uuidv4 } from 'uuid';

const useStyles = createUseStyles<string, { style: any }, any>(
  (theme: Theme) => ({
    blockColor: (props) => ({
      background: '#22778e',
      minWidth: theme.marginBase * 10,
      borderRadius: theme.borderRadius.std,
      ...theme.fonts.label,
      color: theme.colors.background,
      fontWeight: 'bold',
      display: 'flex',
      border: 0,
      cursor: 'pointer',
      alignItems: 'center',
      alignContent: 'center',
      justifyContent: 'center',
      gap: theme.marginBase,
      transition: 'all 0.3s ease',
      width: 'fit-content',

      ...props.style?.desktop,

      '&:hover': {
        ...props.style?.hover,
      },
    }),
    '@container (max-width: 768px)': {
      text: (props) => ({
        ...props.style?.tablet,
      }),
    },
    '@container (max-width: 480px)': {
      text: (props) => ({
        ...props.style?.mobile,
      }),
    },
    full: {
      width: '100%',
    },
  }),
);

interface BaseButtonProps {
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  full?: boolean;
  variant?: string;
  uniqueid?: string;
}

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

type GenericButtonProps = ButtonProps;

export const CMSButton = forwardRef<
  HTMLButtonElement,
  BaseButtonProps & GenericButtonProps
>((props, ref) => {
  const { color, uniqueid, className, onClick, type, full, variant, ...rest } =
    props;

  const { values } = useCustomStyle();

  const dataStyle = useMemo(() => {
    return {
      theme,
      style: {
        ...(variant ? values[variant] : values.CMSButton),
      },
      id: uniqueid || uuidv4(),
    };
  }, [uniqueid, values, variant]);

  const classes = useStyles(dataStyle);

  return (
    <button
      ref={ref}
      key={uniqueid}
      className={classnames(
        classes.blockColor,
        {
          [classes.full]: props.full,
        },
        className,
      )}
      onClick={onClick}
      onSubmit={onClick}
      type={type}
      {...rest}
    >
      {props.children}
    </button>
  );
});
