import React from 'react';
import { createUseStyles } from 'react-jss';
import { theme, Theme } from '../theme';

const useStyles = createUseStyles<string, {}, any>(
  (theme: Theme) => (@Start{
  container: {
    minHeight: '100vh',
  ...valueProps?.desktop,
      '&:hover': {
    ...valueProps?.hover,
    },
  },
  '@media (max-width: 768px)': {
    container: {
    ...valueProps?.tablet,
    },
  },
  '@media (max-width: 480px)': {
    container: {
    ...valueProps?.mobile,
    },
  },
}@End),
);

interface Props {
  children?: React.ReactNode;
}

type BlockProps = React.HTMLAttributes<HTMLDivElement>;

export const CMSPage@variant =
  ({ children, ...rest }: BlockProps & Props) => {
    const classes = useStyles({ theme });

    return (
      <div
        className={classes.container}
        {...rest}
      >
        {children}
      </div>
    );
  };
