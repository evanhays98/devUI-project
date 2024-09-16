const basicColors = {
@colors
};

export type Colors = keyof typeof basicColors;

export const theme = {
  colors: basicColors,
  marginBase: 8,
  basicFlex: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 8,
  },
  media: {
    mobile: '@media (max-width: 768px)',
    tablet: '@media (max-width: 1024px)',
    desktop: '@media (max-width: 1440px)',
  },
  boxShadow: {
  },
  icon: {
    large: 24,
    normal: 20,
    low: 16,
  },
  borderRadius: {
    std: 8,
    large: 16,
  },
  boxWidth: {
    large: 1440,
    normal: 1024,
    small: 768,
    tiny: 530,
  },
  fonts: {
    h1: {
      fontFamily: 'Montserrat, sans-serif',
      color: basicColors.black,
      fontWeight: 900,
      fontSize: 30,
      lineHeight: 1.5,
    },
    h2: {
      fontFamily: 'Montserrat, sans-serif',
      color: basicColors.black,
      fontWeight: 900,
      fontSize: 25,
      lineHeight: 1.5,
    },
    h3: {
      fontFamily: 'Montserrat, sans-serif',
      color: basicColors.black,
      fontWeight: 900,
      fontSize: 20,
      lineHeight: 1.5,
    },
    h4: {
      fontFamily: 'Montserrat, sans-serif',
      color: basicColors.black,
      fontWeight: 700,
      fontSize: 18,
      lineHeight: 1.5,
    },
    h5: {
      fontFamily: 'Montserrat, sans-serif',
      color: basicColors.black,
      fontWeight: 700,
      fontSize: 16,
      lineHeight: 1.5,
    },
    body: {
      fontFamily: 'Montserrat, sans-serif',
      color: basicColors.black,
      fontWeight: 400,
      fontSize: 13,
      lineHeight: 1.5,
    },
    caption: {
      fontFamily: 'Montserrat, sans-serif',
      color: basicColors.black,
      fontWeight: 300,
      fontSize: 14,
      lineHeight: 1.5,
    },
    caption2: {
      fontFamily: 'Montserrat, sans-serif',
      color: basicColors.black,
      fontWeight: 500,
      fontSize: 12,
      lineHeight: 1.5,
    },
    label: {
      fontFamily: 'Montserrat, sans-serif',
      color: basicColors.black,
      fontWeight: 700,
      lineHeight: '20px',
      fontSize: 13,
    },
    calendarText: {
      fontFamily: 'Montserrat, sans-serif',
      color: basicColors.black,
      fontWeight: 400,
      fontSize: 12,
      lineHeight: 1.5,
    },
  },
};

export type Theme = typeof theme;
