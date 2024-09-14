import React from 'react';
import { createUseStyles } from 'react-jss';
import { theme, Theme } from '../theme';

const useStyles = createUseStyles<string, {}, any>(
  (theme: Theme) => (@Start{
  text: {
    fontFamily: 'Montserrat, sans-serif',
      color: '@Stheme.colors.black@E',
      fontWeight: 300,
      fontSize: 13,
      lineHeight: 1.5,
      margin: 0,
      width: 'fit-content',
      borderBottom:
    theme?.desktop?.borderBottom ||
    theme.desktop?.border ||
    'none',
      borderLeft:
    theme?.desktop?.borderLeft ||
    theme.desktop?.border ||
    'none',
      borderRight:
    theme?.desktop?.borderRight ||
    theme.desktop?.border ||
    'none',
      borderTop:
    theme?.desktop?.borderTop ||
    theme.desktop?.border ||
    'none',
  ...theme?.desktop,

      '&:hover': {
    ...theme?.hover,
    },
  },
  '@container (max-width: 768px)': {
    text: {
    ...theme?.tablet,
    },
  },
  '@container (max-width: 480px)': {
    text: {
    ...theme?.mobile,
    },
  },
}@End),
);

interface Props {
  text: string;
}

type TextProps = React.HTMLAttributes<HTMLParagraphElement>;

export const CMSCaption@variant = (
  ({ text, ...rest }: TextProps & Props) => {
    const classes = useStyles({ theme });

    return (
      <p className={classes.text} {...rest}>
        {text}
      </p>
    );
  },
);
