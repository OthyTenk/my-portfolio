import { ProfileType } from "@/app/types";
import { url } from "@/app/utils/constants";

export const StructuredData = ({ profile }: { profile: ProfileType }) => {
  const personSchema = {
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

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Odonbaatar Portfolio",
    alternateName: ["Odonbaatar", "OthyTenk"],
    url: url,
  };

  const siteNavigationSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: [
      {
        "@type": "SiteNavigationElement",
        position: 1,
        name: "Home",
        url: url,
      },
      {
        "@type": "SiteNavigationElement",
        position: 2,
        name: "Projects",
        url: `${url}/projects`,
      },
      {
        "@type": "SiteNavigationElement",
        position: 3,
        name: "Contact",
        url: `${url}/contact`,
      },
      {
        "@type": "SiteNavigationElement",
        position: 4,
        name: "Tech Stacks",
        url: `${url}/tech-stacks`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(siteNavigationSchema),
        }}
      />
    </>
  );
};

