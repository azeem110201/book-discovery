import { createTheme } from "@mui/material";
import React from "react";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    heading1: React.CSSProperties;
    heading2: React.CSSProperties;
    caption1: React.CSSProperties;
    subtitle1: React.CSSProperties;
    subtitle2: React.CSSProperties;
    body1: React.CSSProperties;
    body2: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    heading1: React.CSSProperties;
    heading2: React.CSSProperties;
    caption1: React.CSSProperties;
    subtitle1: React.CSSProperties;
    subtitle2: React.CSSProperties;
    body1: React.CSSProperties;
    body2: React.CSSProperties;
  }

  interface Palette {
    structural: Palette["primary"];
    greyColors: Palette["primary"];
    accent: Palette["primary"];
    textColor: Palette["primary"];
  }

  interface PaletteOptions {
    structural?: PaletteOptions["primary"];
    greyColors?: PaletteOptions["primary"];
    accent?: PaletteOptions["primary"];
    textColor?: PaletteOptions["primary"];
  }

  interface PaletteColor {
    main400?: string;
    main500?: string;
    main300?: string;
    main200?: string;
    main100?: string;
    highEmphasis?: string;
    mediumEmphasis?: string;
    lowEmphasis?: string;
    white?: string;
    linear1?: string;
    linear2?: string;
    color1?: string;
    color2?: string;
    color3?: string;
    color4?: string;
    color5?: string;
    color6?: string;
    color7?: string;
    color8?: string;
    color9?: string;
    color10?: string;
  }

  interface SimplePaletteColorOptions {
    main400?: string;
    main500?: string;
    main300?: string;
    main200?: string;
    main100?: string;
    highEmphasis?: string;
    mediumEmphasis?: string;
    lowEmphasis?: string;
    white?: string;
    linear1?: string;
    linear2?: string;
    color1?: string;
    color2?: string;
    color3?: string;
    color4?: string;
    color5?: string;
    color6?: string;
    color7?: string;
    color8?: string;
    color9?: string;
    color10?: string;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    heading1: true;
    heading2: true;
    caption1: true;
    caption2: true;
  }
}

const theme = createTheme({
  typography: {
    fontFamily: "Roboto",
    heading1: {
      fontSize: "24px",
      fontWeight: 500,
      lineHeight: "36px",
      textTransform: "none",
      fontFamily: "Roboto",
    },

    heading2: {
      fontSize: "24px",
      fontWeight: 700,
      lineHeight: "36px",
      textTransform: "none",
      fontFamily: "Roboto",
    },

    subtitle1: {
      fontSize: "16px",
      fontWeight: 400,
      lineHeight: "24px",
      textTransform: "none",
      fontFamily: "Roboto",
    },

    subtitle2: {
      fontSize: "16px",
      fontWeight: 500,
      lineHeight: "24px",
      textTransform: "none",
      fontFamily: "Roboto",
    },

    body1: {
      fontSize: "14px",
      fontWeight: 400,
      lineHeight: "22px",
      textTransform: "none",
      fontFamily: "Roboto",
    },

    body2: {
      fontSize: "14px",
      fontWeight: 500,
      lineHeight: "22px",
      textTransform: "none",
      fontFamily: "Roboto",
    },

    caption1: {
      fontSize: "12px",
      fontWeight: 400,
      lineHeight: "16px",
      textTransform: "none",
      fontFamily: "Roboto",
    },
  },

  palette: {
    primary: {
      main: "#0B6D62",
      main500: "#FF725E",
    },

    textColor: {
      main: "#000000",
      highEmphasis: "#171717",
      mediumEmphasis: "#606060",
      lowEmphasis: "#898989",
    },

    greyColors: {
      main: "#D6D6D6",
      main300: "686868",
      main200: "#989898",
      main100: "#E3E3E3",
    },

    structural: {
      main: "#FFFFFF",
      linear1: "linear-gradient(90.14deg, #8C52C6 0.95%, #683799 100%)",
      white: "FFFFFF",
      color1: "#FFD6CC",
      color2: "#FBFAFF",
      color3: "#FAFAFA",
      color4: "#EFFFFD",
      color5: "E7FFE7",
      color7: "E7FFF6",
      color8: "E7FFFE",
      color9: "FFE7FA",
      color10: "FFE7EB",
    },

    accent: {
      main: "#FFFFFF",
      color1: "#FFB500",
      color2: "#0095FF",
      color3: "#11D1C5",
      color4: "#07ED02",
      color5: "#FF00C8",
      color6: "#04D387",
      color7: "#FF002F",
    },
  },
});

export default theme;