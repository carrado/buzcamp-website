import AppBlock from "../../components/appBlock";
import BzLink from "../../components/BzLink";

export default function Home() {
    return (
      <>
        <AppBlock title="BuzCamp">
          <div className="bz-flex bz-flex-col bz-p-3 bz-text-lg bz-text-blueCrayola bz-font-semibold">
            <span className="bz-my-1">Connect with fellow students</span>
            <span className="bz-my-1">Share and gain knowlege</span>
            <span className="bz-my-1">Chat and have fun</span>
          </div>

          <div className="bz-flex bz-w-auto bz-text-blueCrayola bz-mt-10 bz-p-3">
            <span className="bz-text-7xl bz-mr-3">Join</span>
            <span className="bz-text-7xl bz-font-bold bz-mr-1">Buzcamp</span>
          </div>
          <div className="bz-flex bz-text-blueCrayola bz-p-3">
            <span className="bz-text-7xl bz-mr-3">Today</span>
            <span className="bz-text-7xl bz-font-bold bz-mr-1 bz-mt-1">!</span>
          </div>

          <div className="bz-flex bz-w-full bz-mt-20">
            <div className="bz-flex bz-w-1/2 bz-flex-grow">
              <BzLink
                bgColor="bz-bg-primary-black"
                text="Sign in"
                class="bz-text-white bz-rounded-3xl bz-font-bold"
                linkedTo={"/login"}
              />
            </div>
            <div className="bz-flex bz-w-1/2 bz-flex-grow">
              <BzLink
                bgColor="bz-bg-primary-black"
                text="Sign up"
                class="bz-text-white bz-rounded-3xl bz-font-bold"
                linkedTo={"/signup"}
              />
            </div>
          </div>

          <div className="bz-flex bz-w-auto bz-text-blueCrayola bz-mt-20">
            <span className="bz-flex bz-w-20">
              <a href="#top" className="bz-text-current bz-no-underline">
                About us
              </a>
            </span>
            <span className="bz-flex bz-w-20">
              <a href="#top" className="bz-text-current bz-no-underline">
                Help center
              </a>
            </span>
            <span className="bz-flex bz-w-1/4">
              <a href="#top" className="bz-text-current bz-no-underline">
                Terms & Condition
              </a>
            </span>
            <span className="bz-flex bz-w-20">
              <a href="#top" className="bz-text-current bz-no-underline">
                Privacy Policy
              </a>
            </span>
            <span className="bz-flex bz-w-20">
              <a href="#top" className="bz-text-current bz-no-underline">
                Cookie Policy
              </a>
            </span>
          </div>

          <div className="bz-flex bz-w-full bz-justify-center bz-text-blueCrayola bz-mt-7">
            <span className="bz-flex bz-w-auto bz-justify-center">
              © {new Date().getFullYear()} Carrado.
            </span>
          </div>
        </AppBlock>
      </>
    );
}
