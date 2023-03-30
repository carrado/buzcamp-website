import "../styles/globals.css";
import { SnackbarProvider } from "notistack";
import { isMobile } from 'react-device-detect';

if (isMobile) {
  window.location.href = "https://mobile.buzcamp.com";
}
else {
function MyApp({ Component, pageProps }) {
    return (
      <SnackbarProvider anchorOrigin={{ horizontal: 'right', vertical: 'top' }}>
        <Component {...pageProps} />
      </SnackbarProvider>
    );
  }
}

export default MyApp;
