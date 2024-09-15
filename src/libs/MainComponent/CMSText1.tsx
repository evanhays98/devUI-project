import React, { forwardRef, useMemo } from 'react';
import { createUseStyles } from 'react-jss';
import { theme, Theme } from '../theme';

const useStyles = createUseStyles<string, {}, any>(
  (theme: Theme) => (@Start{
    text:{
      fontFamily: 'Montserrat, sans-serif',
      color: '@Stheme.colors.black@E',
      fontWeight: 900,
      fontSize: 40,
      lineHeight: 1.5,
      margin: 0,
      width: 'fit-content',
      transition: 'all 0.2s ease-in-out',
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
        valueProps?.border ||
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
    '@media (max-width: 768px)': {
      text: {
        fontSize: 30,
        ...valueProps?.tablet,
      },
    },
    '@media (max-width: 480px)': {
      text: {
        ...valueProps?.mobile,
      },
    },
  }@End),
);

type TextProps = React.HTMLAttributes<HTMLHeadingElement>;
interface Props {
  text: string;
}

export const CMSText1@variant =
  ({text, ...rest}: TextProps & Props) => {

    const classes = useStyles({theme});

    return (
      <h1 className={classes.text} {...rest}>
        {text}
      </h1>
    );
  };