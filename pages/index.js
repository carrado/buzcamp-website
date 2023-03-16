import { BrowserView, MobileView } from "react-device-detect";
import Home from "./home";
import Mobile from "./home/mobile";

export default function App() {
  return (
    <>
      <BrowserView>
        <Home />
      </BrowserView>
      <MobileView>
        <Mobile />
      </MobileView>
    </>
  );
}
