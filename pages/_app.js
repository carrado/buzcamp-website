import "../styles/globals.css";
import { SnackbarProvider } from "notistack";
import { isMobile } from 'react-device-detect';

function MyApp({ Component, pageProps }) {
  if (isMobile) {
    window.location.href = "mobile.buzcamp.com";
  }
  else {
    return (
      <SnackbarProvider anchorOrigin={{ horizontal: 'right', vertical: 'top' }}>
        <Component {...pageProps} />
      </SnackbarProvider>
    );
  }
}

export default MyApp;
