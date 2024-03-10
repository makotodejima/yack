import { Store } from "tauri-plugin-store-api";
import { ChatMessageParams } from "../hooks/useChatCompletion";
import { ApiConfig } from "./config";

export const store =
  process.env.NODE_ENV === "production"
    ? new Store(".data.dat")
    : new Store(".data.dev.dat");

export type TUsage = {
  total_tokens: number;
};

export type THistoryMessageProps = {
  id: string;
  title: string;
  created: number;
};

export type THistory = {
  [key: string]: THistoryMessageProps;
};

export const setOpenAIConfig = async (apiKey: string) => {
  await store.set("provider", "openai");
  await store.set("api_key", apiKey);
  await store.save();
};

export const setAzureOpenAIConfig = async (
  endpoint: string,
  apiKey: string
) => {
  await store.set("provider", "azure_openai");
  await store.set("azure_endpoint", endpoint);
  await store.set("azure_api_key", apiKey);
  await store.save();
};

export const getProvider = async () =>
  await store.get<Promise<ApiConfig["provider"]>>("provider");

export const getApiKey = async () =>
  await store.get<Promise<string>>("api_key");

export const getAzureEndpoint = async () =>
  await store.get<Promise<string>>("azure_endpoint");

export const getAzureApiKey = async () =>
  await store.get<Promise<string>>("azure_api_key");

export const setModel = async (model: string) => {
  await store.set("model", model);
  await store.save();
};

export const getModel = async () => await store.get<Promise<string>>("model");

export const removeConfig = async () => {
  await store.delete("provider");
  await store.delete("api_key");
  await store.delete("azure_api_key");
  await store.delete("azure_endpoint");
  await store.save();
};

export const removeApiKey = async () => {
  await store.delete("api_key");
  await store.save();
};

export const getUsage = async () => await store.get<TUsage>("usage");

export const incrementUsage = async (usage: TUsage) => {
  const currentUsage: TUsage | null = await store.get("usage");

  if (currentUsage) {
    const { total_tokens } = currentUsage;
    await store.set("usage", {
      total_tokens: total_tokens + usage.total_tokens,
    });
  } else {
    await store.set("usage", usage);
  }
  await store.save();
};

export const saveConversation = async (
  conversation: ChatMessageParams[],
  chatId: string
) => {
  await store.set(chatId, conversation);
  await store.save();
};

export const getConversation = async (chatId: string) =>
  await store.get<Promise<ChatMessageParams[]>>(chatId);

// export const onTimeRefactor = async () => {
//   const chatHistory: THistory | null = await store.get("history");
//   if (chatHistory) {
//     const newChatHistory: THistory = {};
//     for (const [key, value] of Object.entries(chatHistory)) {
//       newChatHistory[key] = {
//         ...value,
//         id: key,
//       };
//     }
//     console.log({ newChatHistory });

//     await store.set("history", newChatHistory);
//     await store.save();
//   }
// };

export const saveConversationIDToHistory = async ({
  id,
  title,
  created,
}: THistoryMessageProps) => {
  const chatHistory: THistory | null = await store.get("history");
  if (chatHistory) {
    if (!(id in chatHistory)) {
      await store.set("history", {
        ...chatHistory,
        [id]: {
          title,
          created,
          id,
        },
      });
    }
  } else {
    await store.set("history", {
      [id]: {
        title,
        created,
        id,
      },
    });
  }
  await store.save();
};

export const getHistory = async () => await store.get<THistory>("history");

export const deleteConversationFromHistory = async (id: string) => {
  const chatHistory: THistory | null = await store.get("history");
  if (chatHistory) {
    delete chatHistory[id];
    await store.set("history", chatHistory);
    await store.save();
  }
};

export const saveTheme = async (value: string) => {
  await store.set("theme", value);
  window.localStorage.setItem("theme", value);
  await store.save();
};

export const getSavedTheme = async () => await store.get<string>("theme");
