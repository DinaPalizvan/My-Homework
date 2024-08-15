import AlignedButtons from "./components/1-AlignedButtons/AlignedButtons";
import GridTextFields from "./components/2-GridTextFields/GridTextFields";
import { createTheme, colors, ThemeProvider } from "@mui/material";
import CustomTheme from "./components/3-customTheme/CustomTheme";

const theme = createTheme({
  palette: {
    primary: {
      main: colors.cyan[400],
    },
    secondary: {
      main: colors.pink[500],
      light: colors.pink[100]
    },
    success: {
      main: colors.green["A200"],
    },
  },
});

export default function App() {
  return (
    <div>
      hi
      <AlignedButtons />
      <GridTextFields />
      <ThemeProvider theme={theme}>
        <CustomTheme />
      </ThemeProvider>
    </div>
  );
}
