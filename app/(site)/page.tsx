import { HomeCategory, StructuredData } from "@/app/(site)/components";
import { PortableText } from "@portabletext/react";
import { groq } from "next-sanity";
import Image from "next/image";
import { ProfileType } from "../types";
import { client } from "../utils/sanity.client";
import SocialLinkItem from "./components/SocialLinkItem";

const getProfile = async (): Promise<ProfileType[]> => {
  return client.fetch(
    groq`*[_type == "profile" ]{
      _id,
      fullname,
        headline,
        fullBio,
        image {alt, "src":asset->url},
        email,
        socialLinks
    }`,
  );
};

export const revalidate = 10;

const HomePage = async () => {
  const profile = await getProfile();
  const data = profile[0];

  return (
    <div className="space-y-16 animate-fade-in">
      <StructuredData profile={data} />

      {/* Hero Section */}
      <section className="relative py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-sm font-medium border border-primary-100 dark:border-primary-800 animate-slide-up">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
              </span>
              Available for projects
            </div>

            <h1 className="text-5xl lg:text-7xl font-display font-bold tracking-tight text-slate-900 dark:text-white leading-[1.1] animate-slide-up [animation-delay:100ms]">
              {data.fullname}
            </h1>

            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-lg leading-relaxed animate-slide-up [animation-delay:200ms]">
              {data.headline}
            </p>

            <div className="flex flex-wrap gap-4 animate-slide-up [animation-delay:300ms]">
              <div className="flex items-center gap-3 p-2 bg-white/50 dark:bg-white/5 backdrop-blur-sm border border-slate-200 dark:border-white/10 rounded-2xl shadow-sm">
                <SocialLinkItem
                  imgAlt="Github"
                  imgSrc="/images/socials/github.svg"
                  url={data.socialLinks.github}
                />
                <SocialLinkItem
                  imgAlt="LinkedIn"
                  imgSrc="/images/socials/linkedin-in.svg"
                  url={data.socialLinks.linkedin}
                />
                <SocialLinkItem
                  imgAlt="X"
                  imgSrc="/images/socials/x-twitter.svg"
                  url={data.socialLinks.twitter}
                />
                <div className="w-px h-6 bg-slate-200 dark:bg-white/10" />
                <a
                  href={`mailto:${data.email}`}
                  className="px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-xl transition-all font-medium text-sm shadow-lg shadow-primary-500/25"
                >
                  Hire Me
                </a>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-in [animation-delay:400ms]">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative">
                <Image
                  width={400}
                  height={400}
                  src={data.image?.src}
                  alt={data.image?.alt}
                  className="w-64 h-64 lg:w-80 lg:h-80 object-cover rounded-full border-4 border-white dark:border-slate-800 shadow-2xl relative z-10"
                  priority
                />
                {/* Decorative Elements */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent-500/10 backdrop-blur-xl rounded-2xl -z-10 animate-pulse-slow" />
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary-500/10 backdrop-blur-xl rounded-full -z-10 animate-pulse-slow [animation-delay:1s]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <div
            className="prose prose-lg dark:prose-invert prose-slate dark:prose-slate max-w-none 
            prose-headings:font-display prose-headings:font-bold prose-p:leading-relaxed prose-a:text-primary-500"
          >
            <PortableText value={data.fullBio} />
          </div>
        </div>
      </section>

      <HomeCategory />
    </div>
  );
};

export default HomePage;
