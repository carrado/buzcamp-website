import "../styles/globals.css";
import { SnackbarProvider } from "notistack";

function MyApp({ Component, pageProps }) {
  let vertical = "top";
  let horizontal = "right";

  return (
    <SnackbarProvider
      maxSnack={3}
      anchorOrigin={{ vertical, horizontal }}
      preventDuplicate
      hideIconVariant={true}
    >
      <Component {...pageProps} />
    </SnackbarProvider>
  );
}

export default MyApp;
