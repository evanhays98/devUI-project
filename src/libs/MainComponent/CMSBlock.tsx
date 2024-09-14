import React, { useMemo } from 'react';
import { createUseStyles } from 'react-jss';
import { theme, Theme } from '../theme';
import { useCustomStyle } from '../../core/StyleContext';

const useStyles = createUseStyles<string, { style: any }, any>(
  (theme: Theme) => ({
    container: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      width: '100%',
      gap: '@Stheme.marginBase * 3@E',
      ...valueProps?.desktop,

      '&:hover': {
        ...valueProps?.hover,
      },
    },
    '@container (max-width: 768px)': {
      container: {
        ...valueProps?.tablet,
      },
    },
    '@container (max-width: 480px)': {
      container: {
        ...valueProps?.mobile,
      },
    },
  }),
);

type BlockProps = React.HTMLAttributes<HTMLDivElement>;

interface Props {
  children?: React.ReactNode;
}

export const CMSBlock@variant = (props: BlockProps & Props) => {
  const { children, ...rest } = props;
  const { values } = useCustomStyle();

  const dataStyle = useMemo(() => {
    return {
      theme,
      style: values.CMSBlock,
    };
  }, [values]);

  const classes = useStyles({ theme });

  return (
    <div className={classes.container} {...rest}>
      {children}
    </div>
  );
};
