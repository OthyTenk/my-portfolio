import { HomeCategory } from "@/app/(site)/components";
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
    }`
  );
};

export const revalidate = 10;

const HomePage = async () => {
  const profile = await getProfile();

  return (
    <div className="space-x-5 lg:space-y-10">
      <article>
        <div className="mt-24 items-center space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center pt-8">
            <Image
              width={210}
              height={210}
              src={profile[0].image?.src}
              alt={profile[0].image?.alt}
              className="w-41 h-41 object-cover rounded-full object-top"
            />

            <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">
              {profile[0].fullname}
            </h3>
            <p className="text-gray-500 dark:text-gray-300 text-center">
              {profile[0].headline}
            </p>

            {/* Social Links */}
            <div className="flex space-x-5 mt-6 py-[10px] px-[14px] items-center rounded-3xl bg-slate-300/30 dark:bg-neutral-600">
              <SocialLinkItem
                imgAlt="Visit OkDo's Github"
                imgSrc="/images/socials/github.svg"
                url={profile[0].socialLinks.github}
              />

              <SocialLinkItem
                imgAlt="OkDo Linked-in"
                imgSrc="/images/socials/linkedin-in.svg"
                url={profile[0].socialLinks.linkedin}
              />

              <SocialLinkItem
                imgAlt="Contact to OkDo"
                imgSrc="/images/socials/email.svg"
                url={`mailto:${profile[0].email}`}
              />

              <SocialLinkItem
                imgAlt="OkDo's X (twitter.com)"
                imgSrc="/images/socials/x-twitter.svg"
                url={profile[0].socialLinks.twitter}
              />
            </div>
          </div>

          <div className="prose max-w-none prose-lg pt-8 pb-7 dark:prose-invert xl:col-span-2">
            <PortableText value={profile[0].fullBio} />
          </div>
        </div>
      </article>

      <HomeCategory />
    </div>
  );
};

export default HomePage;
