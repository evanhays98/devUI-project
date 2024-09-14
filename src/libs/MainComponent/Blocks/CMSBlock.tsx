import React, { forwardRef, useMemo } from 'react';
import { createUseStyles } from 'react-jss';
import { theme, Theme } from '../../theme';
import { useCustomStyle } from '../../core/StyleContext';
import { v4 as uuidv4 } from 'uuid';

const useStyles = createUseStyles<string, { style: any }, any>(
  (theme: Theme) => ({
    container: (props) => ({
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      width: '100%',
      gap: theme.marginBase * 3,
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

type BlockProps = React.HTMLAttributes<HTMLDivElement>;

interface Props {
  children?: React.ReactNode;
  style?: React.CSSProperties;
  variant?: string;
  uniqueid?: string;
}

export const CMSBlock = forwardRef<HTMLDivElement, BlockProps & Props>(
  ({ children, style, variant, uniqueid, ...rest }, ref) => {
    const { values } = useCustomStyle();

    const dataStyle = useMemo(() => {
      return {
        theme,
        style: {
          ...(variant ? values[variant] : values.CMSBlock),
        },
        id: uniqueid || uuidv4(),
      };
    }, [uniqueid, values, variant]);

    const classes = useStyles(dataStyle);
    return (
      <div
        className={classes.container}
        style={style}
        key={uniqueid}
        ref={ref}
        {...rest}
      >
        {children}
      </div>
    );
  },
);
