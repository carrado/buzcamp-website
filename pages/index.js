import Head from "next/head";
import WifiOffIcon from '@mui/icons-material/WifiOff';
import Home from "./home";

export default function App() {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Socio-academic Website Buzcamp buzcamp social media academic universities schools"
        />
        <meta name="og:title" content="Buzcamp" />
        <meta
          property="og:description"
          content="A Socio-academic platform connecting students across various institutions"
        />
        <meta property="og:image" content="https://buzcamp.com/" />
        <title>BuzCamp</title>
        <link rel="icon" href="/bzcmp.png" />
      </Head>
      <Home />
    </>
  );
}
