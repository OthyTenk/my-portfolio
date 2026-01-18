import { ProfileType } from "@/app/types";
import { url } from "@/app/utils/constants";

export const StructuredData = ({ profile }: { profile: ProfileType }) => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.fullname,
    jobTitle: profile.headline,
    url: url,
    image: profile.image.src,
    email: profile.email,
    telephone: profile.phone,
    sameAs: [
      profile.socialLinks.github,
      profile.socialLinks.linkedin,
      profile.socialLinks.twitter,
    ].filter(Boolean),
    knowsAbout: [
      "Full Stack Development",
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Sanity CMS",
      "Headless WordPress",
      "Tailwind CSS",
      "Shadcn UI",
      "Express.js",
      "Hono",
      "Prisma",
      "PostgreSQL",
      "MongoDB",
      "Zustand",
      "React Query",
      "TanStack Router",
      "Vite",
      "GraphQL",
      "Apollo Client",
      "URQL",
      "Pothos",
      "C#",
      ".NET",
      "WinForms",
      "NLog",
    ],
    description: profile.headline,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};
