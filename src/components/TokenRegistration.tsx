// import { useRouter } from "next/router";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  incrementUsage,
  setOpenAIConfig,
  setAzureOpenAIConfig,
  removeConfig,
} from "../helpers/store";
import { DownChevron } from "../svg";
import { ApiConfig, getGptModels } from "../helpers/config";

const TokenRegistration = () => {
  const [token, setToken] = useState("");
  const [azureApiKey, setAzureApiKey] = useState("");
  const [azureEndpoint, setAzureEndpoint] = useState("");
  const [provider, setProvider] = useState<ApiConfig["provider"]>("openai");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    if (provider === "openai") {
      await setOpenAIConfig(token);
    } else if (provider === "azure_openai") {
      await setAzureOpenAIConfig(azureEndpoint, azureApiKey);
    }

    await incrementUsage({
      total_tokens: 0,
    });

    try {
      await getGptModels();
      navigate("/chat/new");
    } catch (error: any) {
      setError(error.message);
      await removeConfig();
    } finally {
      setIsSubmitting(false);
    }
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Escape") {
      e.preventDefault();
      if (token) {
        setToken("");
        e.stopPropagation();
      }
    }
  };

  return (
    <section className="flex w-full flex-col p-4">
      <div className="mt-3 flex flex-col">
        <label
          htmlFor="provider"
          className="mb-1 text-base font-normal text-secondary"
        >
          Provider
        </label>
        <div className="relative flex items-center self-start">
          <select
            id="provider"
            value={provider}
            onChange={(e) =>
              setProvider(e.target.value as ApiConfig["provider"])
            }
            className="appearance-none rounded border border-primary bg-transparent py-1.5 pl-2 pr-8 text-primary focus-within:border-secondary hover:bg-primaryBtnHover"
          >
            <option value="openai">OpenAI</option>
            <option value="azure_openai">Azure OpenAI</option>
          </select>
          <DownChevron className="pointer-events-none absolute right-2 h-4 w-4 text-white" />
        </div>
      </div>
      <div className="mb-4 mt-6 border border-dashed border-primary" />

      {provider === "openai" ? (
        <React.Fragment>
          <form className="mt-3 flex w-full flex-col" onSubmit={handleSubmit}>
            <label
              htmlFor="token"
              className="mb-1 text-base font-normal text-secondary"
            >
              OpenAI API Key
            </label>
            <div className="flex w-full flex-col gap-2 sm:flex-row md:items-center">
              <input
                type="text"
                id="token"
                name="token"
                value={token}
                onChange={(e) => setToken(e.target.value)}
                className={`h-fit w-[460px] rounded-md border border-primary bg-primary px-4 py-2 font-sans text-base text-primary placeholder:text-placeholder focus-within:border-secondary hover:border-secondary`}
                placeholder="sk-xxxxxxxxxxxxxxxxxxxxx"
                disabled={isSubmitting}
                autoCapitalize="none"
                autoComplete="off"
                autoCorrect="off"
                autoFocus
                onKeyDown={onKeyDown}
              />
              <button
                type="submit"
                className={`w-fit rounded-md border border-primary bg-secondary px-3 py-2 text-base font-medium text-primary focus-visible:border-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500 ${
                  isSubmitting || !token
                    ? "cursor-not-allowed"
                    : "cursor-default hover:bg-action"
                }  duration-75`}
                disabled={isSubmitting || !token}
              >
                Get Started
              </button>
            </div>
            {error && (
              <p className="mt-2 text-sm font-normal text-err">{error}</p>
            )}
          </form>

          <p className="mt-8 text-base text-secondary">
            The OpenAI API uses API keys for authentication. Visit your{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://platform.openai.com/account/api-keys"
              className="text-cyan-400 hover:text-cyan-300"
            >
              API Keys page
            </a>{" "}
            to retrieve the API key you'll use in your requests.
          </p>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <form className="mt-3 flex w-full flex-col" onSubmit={handleSubmit}>
            <label
              htmlFor="endpoint"
              className="mb-1 text-base font-normal text-secondary"
            >
              Azure Endpoint
            </label>
            <div className="mb-2 flex w-full flex-col gap-2 sm:flex-row md:items-center">
              <input
                type="text"
                id="endpoint"
                name="endpoint"
                value={azureEndpoint}
                onChange={(e) => setAzureEndpoint(e.target.value)}
                className={`h-fit w-[460px] rounded-md border border-primary bg-primary px-4 py-2 font-sans text-base text-primary placeholder:text-placeholder focus-within:border-secondary hover:border-secondary`}
                placeholder="https://example.openai.azure.com"
                disabled={isSubmitting}
                autoCapitalize="none"
                autoComplete="off"
                autoCorrect="off"
                autoFocus
                onKeyDown={onKeyDown}
              />
            </div>
            <label
              htmlFor="azure-api-key"
              className="mb-1 text-base font-normal text-secondary"
            >
              Azure API Key
            </label>
            <div className="mb-4 flex w-full flex-col gap-2 sm:flex-row md:items-center">
              <input
                type="text"
                id="azure-api-key"
                name="azure-api-key"
                value={azureApiKey}
                onChange={(e) => setAzureApiKey(e.target.value)}
                className={`h-fit w-[460px] rounded-md border border-primary bg-primary px-4 py-2 font-sans text-base text-primary placeholder:text-placeholder focus-within:border-secondary hover:border-secondary`}
                placeholder="xxxxxxxxxxxxxxxxxxxxx"
                disabled={isSubmitting}
                autoCapitalize="none"
                autoComplete="off"
                autoCorrect="off"
                onKeyDown={onKeyDown}
              />
            </div>
            <button
              type="submit"
              className={`w-fit rounded-md border border-primary bg-secondary px-3 py-2 text-base font-medium text-primary focus-visible:border-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500 ${
                isSubmitting || !azureApiKey || !azureEndpoint
                  ? "cursor-not-allowed"
                  : "cursor-default hover:bg-action"
              }  duration-75`}
              disabled={isSubmitting || !azureApiKey || !azureEndpoint}
            >
              Get Started
            </button>
            {error && (
              <p className="mt-2 text-sm font-normal text-err">{error}</p>
            )}
          </form>

          <p className="mt-8 text-base text-secondary">
            The Azure OpenAI API uses the endpoint and the API keys for
            authentication.
          </p>
        </React.Fragment>
      )}
      <div className="my-4 border border-dashed border-primary" />
      <h2 className="text-xl font-bold text-primary">Disclaimer</h2>
      <ul className="mt-2 text-base text-secondary">
        <li>
          We do not store your API key on our servers.{" "}
          <i>Hell I don't even have a server.</i>
        </li>
        <li>
          We do not share your API key with anyone. <i>Not in that business.</i>
        </li>{" "}
        <li>
          We do not sell your API key to anyone.{" "}
          <i>Not in that business as well.</i>
        </li>{" "}
      </ul>
      <div className="my-4 border border-dashed border-primary" />
      <p className="mt-6 text-base text-secondary">
        Yack is merely a wrapper around the ChatGPT API, all your questions and
        answers are either stored on your device or on OpenAI's servers.
      </p>
    </section>
  );
};

export default TokenRegistration;
