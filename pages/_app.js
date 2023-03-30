import "../styles/globals.css";
import { SnackbarProvider } from "notistack";

function MyApp({ Component, pageProps }) {
  let desktopView = false;
  if (typeof window !== 'undefined') {
    if (window.navigator.userAgent.match(/Android/i)
      || window.navigator.userAgent.match(/webOS/i)
      || window.navigator.userAgent.match(/iPhone/i)
      || window.navigator.userAgent.match(/iPad/i)
      || window.navigator.userAgent.match(/iPod/i)
      || window.navigator.userAgent.match(/BlackBerry/i)
      || window.navigator.userAgent.match(/Windows Phone/i)) {
      // window.location.href = "https://mobile.buzcamp.com";
      window.location.href = "https://delicate-semolina-e1a6a1.netlify.app/"
    }
    else {
      desktopView = true;
    }
  }

  if(desktopView) {
      return (
        <SnackbarProvider anchorOrigin={{ horizontal: 'right', vertical: 'top' }}>
          <Component {...pageProps} />
        </SnackbarProvider>
      );
    }
}

export default MyApp;
