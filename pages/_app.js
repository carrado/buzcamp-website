import "../styles/globals.css";
//import { SnackbarProvider } from "notistack";
import { ThemeProvider} from "@material-tailwind/react";

function MyApp({ Component, pageProps }) {
  let vertical = "top";
  let horizontal = "right";

  return (
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
  );
}

export default MyApp;
