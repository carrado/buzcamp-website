import "../styles/globals.css";
import { SnackbarProvider } from "notistack";
import axios from "axios";

axios.get(`${process.env.NEXT_PUBLIC_BUZCAMP_APP_ALLY}/locator/bznai`);

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
