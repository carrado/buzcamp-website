import "../styles/globals.css";
import { SnackbarProvider } from "notistack";

function MyApp({ Component, pageProps }) {
  let vertical = "top";
  let horizontal = "right";

  return (
    <SnackbarProvider>
        <Component {...pageProps} />
      </SnackbarProvider>
  );
}

export default MyApp;
