import { BrowserView, MobileView } from 'react-device-detect';
import Home from "./home";
import Mobile from './home/mobile';

export default function App() {
  return (
    <>
      <BrowserView>
        <Mobile />
      </BrowserView>
      <MobileView>
        <Home />
      </MobileView>
    </>
  );
}
