import { createClient, type ClientConfig } from "next-sanity";

const config: ClientConfig = {
  dataset: "production",
  projectId: "c5g75h7y",
  apiVersion: "2021-10-21",
  useCdn: true,
};

export const client = createClient(config)