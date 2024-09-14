import React, { forwardRef, useMemo } from 'react';
import { createUseStyles } from 'react-jss';
import { theme, Theme } from '../theme';
import { useCustomStyle } from '../../core/StyleContext';
import { v4 as uuidv4 } from 'uuid';

const useStyles = createUseStyles<string, { style: any }, any>(
  (theme: Theme) => (@Start{
    text: {
      fontFamily: 'Montserrat, sans-serif',
      color: '@Stheme.colors.black@E',
      fontWeight: 900,
      fontSize: 30,
      lineHeight: 1.5,
      margin: 0,
      width: 'fit-content',
      borderBottom:
        valueProps.style?.desktop?.borderBottom ||
        valueProps.style.desktop?.border ||
        'none',
      borderLeft:
        valueProps.style?.desktop?.borderLeft ||
        valueProps.style.desktop?.border ||
        'none',
      borderRight:
        valueProps.style?.desktop?.borderRight ||
        valueProps.style.desktop?.border ||
        'none',
      borderTop:
        valueProps.style?.desktop?.borderTop ||
        valueProps.style.desktop?.border ||
        'none',
      ...valueProps.style?.desktop,

      '&:hover': {
        ...valueProps.style?.hover,
      },
    },
    '@container (max-width: 768px)': {
      text:{
        ...valueProps.style?.tablet,
      },
    },
    '@container (max-width: 480px)': {
      text: {
        ...valueProps.style?.mobile,
      }
    },
  }@End),
);

interface Props {
  text: string;
  variant?: string;
  uniqueid?: string;
}

type TextProps = React.HTMLAttributes<HTMLHeadingElement>;

export const CMSText2@variant =(
  ({...rest, text}: TextProps & Props) => {


    const classes = useStyles({theme});

    return (
      <h2 className={classes.text} {...rest}>
        {text}
      </h2>
    );
  },
);
