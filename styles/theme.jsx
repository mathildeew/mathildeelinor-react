import { ThemeProvider } from "styled-components";

const theme = {
  color: {
    primary: `var(--color-primary)`,
    secondary: `var(--color-secondary)`,
  },
  font: {
    primary: "Montserrat, sans-serif",
    secondary: "Fromage, serif",
  },
};

export const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
