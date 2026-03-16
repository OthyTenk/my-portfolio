import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Odonbaatar Lhkamtseren",
    short_name: "Odonbaatar",
    description: "Full Stack Developer Portfolio",
    start_url: "/",
    display: "standalone",
    background_color: "#1f1f1f",
    theme_color: "#f97316",
    icons: [
      {
        src: "/icon.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
