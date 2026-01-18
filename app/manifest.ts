import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Odonbaatar Portfolio",
    short_name: "Odonbaatar",
    description: "Full Stack Developer Portfolio",
    start_url: "/",
    display: "standalone",
    background_color: "#1f1f1f",
    theme_color: "#f97316",
    icons: [
      {
        src: "/icon.png",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
