import React, { forwardRef, useMemo } from 'react';
import { createUseStyles } from 'react-jss';
import { theme, Theme } from '../theme';

const useStyles = createUseStyles<string, { style: any }, any>(
  (theme: Theme) => (@Start{
    text: {
      fontFamily: 'Montserrat, sans-serif',
      color: '@Stheme.colors.black@E',
      fontWeight: 900,
      fontSize: 20,
      lineHeight: 1.5,
      margin: 0,
      width: 'fit-content',
      borderBottom:
        valueProps?.desktop?.borderBottom ||
        valueProps.desktop?.border ||
        'none',
      borderLeft:
        valueProps?.desktop?.borderLeft ||
        valueProps.desktop?.border ||
        'none',
      borderRight:
        valueProps?.desktop?.borderRight ||
        valueProps.desktop?.border ||
        'none',
      borderTop:
        valueProps?.desktop?.borderTop ||
        valueProps.desktop?.border ||
        'none',
      ...valueProps?.desktop,

      '&:hover': {
        ...valueProps?.hover,
      },
    },
    '@container (max-width: 768px)': {
      text: {
        ...valueProps?.tablet,
      },
    },
    '@container (max-width: 480px)': {
      text: {
        ...valueProps?.mobile,
      },
    },
  }@End),
);

interface Props {
  text: string;
}

type TextProps = React.HTMLAttributes<HTMLHeadingElement>;

export const CMSText3@variant =(
  ({...rest, text}: TextProps & Props) => {


    const classes = useStyles({ theme });

    return (
      <h3 className={classes.text}  {...rest}>
        {text}
      </h3>
    );
  },
);
