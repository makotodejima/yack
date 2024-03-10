import { Fragment, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TokenRegistration from "../components/TokenRegistration";
import { getProvider } from "../helpers/store";
import { LogoIcon } from "../svg";

function Index() {
  const navigate = useNavigate();

  useEffect(() => {
    async function checkConfig() {
      const provider = await getProvider();

      if (provider) {
        navigate("/chat/new");
      }
    }

    checkConfig();
  }, []);

  return (
    <Fragment>
      <header
        className="flex flex-col border-b border-primary bg-secondary px-4 py-2"
        data-tauri-drag-region
      >
        <div className="flex items-center">
          <LogoIcon className="h-10 w-20 text-primary" />{" "}
        </div>
        <p className="text-base font-normal text-secondary">
          Instantly access ChatGPT on your Mac - get quick answers to anything
          with just a few taps on your keyboard!
        </p>
      </header>
      <TokenRegistration />
    </Fragment>
  );
}

export default Index;
