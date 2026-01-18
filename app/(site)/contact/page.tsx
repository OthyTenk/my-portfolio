import { groq } from "next-sanity";
import { ProfileType } from "../../types";
import { client } from "../../utils/sanity.client";
import { PageHeader, ContactForm } from "../components";
import { Metadata } from "next";
import { url } from "@/app/utils/constants";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with me for collaborations, projects, or just to say hi.",
  alternates: {
    canonical: `${url}/contact`,
  },
};

const getProfile = async (): Promise<ProfileType[]> => {
  return client.fetch(
    groq`*[_type == "profile" ]{
      _id,
      fullname,
      headline,
      email,
      phone,
      location,
      socialLinks
    }`,
  );
};

export const revalidate = 10;

const ContactPage = async () => {
  const profile = await getProfile();
  const data = profile[0];

  const contactItems = [
    {
      name: "Email",
      value: data.email,
      href: `mailto:${data.email}`,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
          />
        </svg>
      ),
    },
    {
      name: "Phone",
      value: data.phone || "Not provided",
      href: data.phone ? `tel:${data.phone}` : "#",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
          />
        </svg>
      ),
    },
    {
      name: "Location",
      value: data.location || "Ulaanbaatar, Mongolia",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
          />
        </svg>
      ),
    },
  ];

  const socialItems = [
    {
      name: "LinkedIn",
      href: data.socialLinks.linkedin,
      label: "View Profile",
      icon: "/images/socials/linkedin-in.svg",
    },
    {
      name: "X (Twitter)",
      href: data.socialLinks.twitter,
      label: "Follow me",
      icon: "/images/socials/x-twitter.svg",
    },
    {
      name: "GitHub",
      href: data.socialLinks.github,
      label: "See my code",
      icon: "/images/socials/github.svg",
    },
  ];

  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <PageHeader title="Contact" />

      <div className="pt-10 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Side: Contact Form */}
          <ContactForm />

          {/* Right Side: Contact Information & Socials */}
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-serif text-gray-900 dark:text-white mb-4">
                Let&apos;s get in touch
              </h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-md text-lg">
                I&apos;m always open to discussing new projects, creative ideas
                or opportunities to be part of your visions.
              </p>
            </div>

            <div className="space-y-10">
              <div className="space-y-6">
                <h3 className="text-xl font-bold dark:text-white">
                  Contact Info
                </h3>
                {contactItems.map((item) => (
                  <div key={item.name} className="flex items-start gap-4">
                    <div className="p-3 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-2xl">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        {item.name}
                      </h4>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-lg font-semibold text-gray-900 dark:text-white hover:text-orange-500 transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-lg font-semibold text-gray-900 dark:text-white">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-bold dark:text-white">
                  Social Channels
                </h3>
                <div className="grid grid-cols-1 gap-4">
                  {socialItems.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-4 rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-slate-100/50 dark:bg-neutral-900/50 hover:border-orange-500 transition-all group"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 flex items-center justify-center bg-white dark:bg-neutral-800 rounded-xl shadow-sm">
                          <img
                            src={social.icon}
                            alt={social.name}
                            className="w-6 h-6 dark:invert"
                          />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 dark:text-white">
                            {social.name}
                          </h4>
                          <p className="text-xs text-gray-500">
                            {social.label}
                          </p>
                        </div>
                      </div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-5 h-5 text-gray-400 group-hover:text-orange-500 group-hover:translate-x-1 transition-all"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                        />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
