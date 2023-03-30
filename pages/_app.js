import "../styles/globals.css";
import { SnackbarProvider } from "notistack";

function MyApp({ Component, pageProps }) {
  if (navigator.userAgent.match(/Android/i)
    || navigator.userAgent.match(/webOS/i)
    || navigator.userAgent.match(/iPhone/i)
    || navigator.userAgent.match(/iPad/i)
    || navigator.userAgent.match(/iPod/i)
    || navigator.userAgent.match(/BlackBerry/i)
    || navigator.userAgent.match(/Windows Phone/i)) {    
  } else {
    return (
      <SnackbarProvider anchorOrigin={{ horizontal: 'right', vertical: 'top' }}>
        <Component {...pageProps} />
      </SnackbarProvider>
    );
  }
}

export default MyApp;
