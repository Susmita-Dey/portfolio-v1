import { NextSeo } from "next-seo";
import { useRouter } from "next/router";

import type { ComponentProps } from "react";

export function useSeoProps(
  props: Partial<ComponentProps<typeof NextSeo>> = {}
): Partial<ComponentProps<typeof NextSeo>> {
  const router = useRouter();

  const title = "Susmita ─ developer";
  const description = "Hey 👋 I'm Susmita Dey, a creative web developer";

  return {
    title,
    description,
    canonical: `https://susmita-dey.vercel.app/${router.asPath}`,
    openGraph: {
      title,
      description,
      site_name: "nuro",
      url: `https://susmita-dey.vercel.app/${router.asPath}`,
      type: "website",
      images: [
        {
          url: "https://susmita-dey.vercel.app/logo.png",
          alt: description,
          width: 1280,
          height: 720,
        },
      ],
    },
    twitter: {
      cardType: "summary_large_image",
      handle: "@its_SusmitaDey",
      site: "@its_SusmitaDey",
    },
    ...props,
  };
}
