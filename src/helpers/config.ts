import { MODELS_API } from "../constants/API";
import {
  getApiKey,
  getAzureApiKey,
  getAzureEndpoint,
  getModel,
  getProvider,
} from "./store";

const OPENAI_CHAT_COMPLETIONS_URL =
  "https://api.openai.com/v1/chat/completions";
const OPENAI_MODELS_URL = MODELS_API;

const AZURE_CHAT_COMPLETIONS_URL =
  "{endpoint}/openai/deployments/{deployment-id}/chat/completions?api-version=2023-05-15";
const AZURE_MODELS_URL = "{endpoint}/openai/models?api-version=2023-05-15";

type OpenAIConfig = {
  provider: "openai";
  endpoint: string;
  apiKey: string;
  model: string;
};

type AzureOpenAIConfig = {
  provider: "azure_openai";
  endpoint: string;
  apiKey: string;
  model: string;
};

export type ApiConfig = OpenAIConfig | AzureOpenAIConfig;

export async function getConfig(): Promise<ApiConfig> {
  const provider = await getProvider();

  if (provider === "openai") {
    const apiKey = await getApiKey();

    if (!apiKey) {
      throw new Error("openai: missing apiKey");
    }

    const model = (await getModel()) || "gpt-3.5-turbo";

    return { provider, endpoint: OPENAI_CHAT_COMPLETIONS_URL, apiKey, model };
  } else if (provider === "azure_openai") {
    const baseUrl = await getAzureEndpoint();
    const apiKey = await getAzureApiKey();

    if (!baseUrl || !apiKey) {
      throw new Error("azure_openai: missing apiKey or endpoint");
    }

    const model = "gpt-4-32k";

    return {
      provider,
      endpoint: AZURE_CHAT_COMPLETIONS_URL.replace(
        "{endpoint}",
        baseUrl
      ).replace("{deployment-id}", model),
      apiKey,
      model,
    };
  }
  throw new Error("unknown provider");
}

export async function getGptModels(): Promise<{ id: string }[]> {
  const provider = await getProvider();

  if (provider === "openai") {
    const apiKey = await getApiKey();

    if (!apiKey) {
      throw new Error("No token found");
    }

    const res = await fetch(OPENAI_MODELS_URL, {
      headers: { Authorization: `Bearer ${apiKey}` },
    });

    const json = await res.json();
    if (!res.ok) {
      throw new Error(json.error.message);
    }

    const gptModels = json?.data?.filter((model: { id: string }) =>
      model.id.startsWith("gpt")
    );

    return gptModels;
  } else if (provider === "azure_openai") {
    const baseUrl = await getAzureEndpoint();
    const apiKey = await getAzureApiKey();

    if (!baseUrl || !apiKey) {
      throw new Error("azure_openai: missing apiKey or endpoint");
    }

    const res = await fetch(AZURE_MODELS_URL.replace("{endpoint}", baseUrl), {
      headers: { "api-key": `${apiKey}` },
    });

    const json = await res.json();
    if (!res.ok) {
      throw new Error(json.error.message);
    }

    const gptModels = json?.data?.filter((model: { id: string }) =>
      model.id.startsWith("gpt")
    );

    return gptModels;
  }
  throw new Error("GetModels: unknown provider");
}
