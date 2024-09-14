import React, { forwardRef, useMemo } from 'react';
import { createUseStyles } from 'react-jss';
import { theme, Theme } from '../../theme';
import { useCustomStyle } from '../../core/StyleContext';
import { v4 as uuidv4 } from 'uuid';

const useStyles = createUseStyles<string, { style: any }, any>(
  (theme: Theme) => ({
    text: (props) => ({
      fontFamily: 'Montserrat, sans-serif',
      color: theme.colors.black,
      fontWeight: 300,
      fontSize: 13,
      lineHeight: 1.5,
      margin: 0,
      width: 'fit-content',
      borderBottom:
        props.style?.desktop?.borderBottom ||
        props.style.desktop?.border ||
        'none',
      borderLeft:
        props.style?.desktop?.borderLeft ||
        props.style.desktop?.border ||
        'none',
      borderRight:
        props.style?.desktop?.borderRight ||
        props.style.desktop?.border ||
        'none',
      borderTop:
        props.style?.desktop?.borderTop ||
        props.style.desktop?.border ||
        'none',
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
  }),
);

interface Props {
  text: string;
  variant?: string;
  uniqueid?: string;
}

type TextProps = React.HTMLAttributes<HTMLHeadingElement>;

export const CMSCaption = forwardRef<HTMLHeadingElement, TextProps & Props>(
  ({ text, variant, uniqueid, ...rest }, ref) => {
    const { values } = useCustomStyle();

    const dataStyle = useMemo(() => {
      return {
        theme,
        style: {
          ...(variant ? values[variant] : values.CMSCaption),
        },
        id: uniqueid || uuidv4(),
      };
    }, [uniqueid, values, variant]);

    const classes = useStyles(dataStyle);

    return (
      <p className={classes.text} key={uniqueid} ref={ref} {...rest}>
        {text}
      </p>
    );
  },
);
