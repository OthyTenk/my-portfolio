import { createClient, type ClientConfig } from "next-sanity";

const config: ClientConfig = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2026-01-17",
  useCdn: true,
};

export const client = createClient(config);
