import React from 'react';
import { createUseStyles } from 'react-jss';
import { theme, Theme } from '../theme';

const useStyles = createUseStyles<string, {}, any>(
  (theme: Theme) => (@Start{
  container: {
    minHeight: 'calc(100vh - 110px)',
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
}@End),
);

interface Props {
  children?: React.ReactNode;
}

type BlockProps = React.HTMLAttributes<HTMLDivElement>;

export const CMSPage@variant = (
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
  },
);
