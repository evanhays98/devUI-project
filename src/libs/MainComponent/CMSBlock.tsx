import React, { useMemo } from 'react';
import { createUseStyles } from 'react-jss';
import { theme, Theme } from '../theme';

const useStyles = createUseStyles<string, { style: any }, any>(
  (theme: Theme) => (@Start{
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
  }@End),
);

type BlockProps = React.HTMLAttributes<HTMLDivElement>;

interface Props {
  children?: React.ReactNode;
}

export const CMSBlock@variant = (props: BlockProps & Props) => {
  const { children, ...rest } = props;
  const classes = useStyles({ theme });

  return (
    <div className={classes.container} {...rest}>
      {children}
    </div>
  );
};
