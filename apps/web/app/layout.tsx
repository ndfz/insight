import type { Metadata } from "next";
import { ReactNode } from "react";

import { AppWalletProvider } from "@repo/ui/providers";

export const metadata: Metadata = {
  title: "Insight",
  description:
    "Live video translation services powered by #Web3 and #Solana for seamless, decentralized experiences.",

  // todo: implement meta tags and SEO
  //   const metaTitle = "Solana Clicker";
  // const metaDescription =
  //   "Solana Clicker is an open-source game being developed to learn and demonstrate techniques for integrating with Solana programs and Solana NFTs.";
  // const metaAbsoluteUrl = "https://solana-clicker.netlify.app/";
  // const metaImageUrl = "https://solana-clicker.netlify.app/home.png";
  // <Head>
  //   <title>{metaTitle}</title>
  //   <meta name="title" content={metaTitle} />
  //   <meta name="description" content={metaDescription} />

  //   <meta property="og:type" content="website" />
  //   <meta property="og:title" content={metaTitle} />
  //   <meta property="og:url" content={metaAbsoluteUrl} />
  //   <meta property="og:image" content={metaImageUrl} />
  //   <meta property="og:description" content={metaDescription} />

  //   <meta name="twitter:card" content="summary" />
  //   <meta name="twitter:title" content={metaTitle} />
  //   <meta name="twitter:description" content={metaDescription} />
  //   <meta name="twitter:image" content={metaImageUrl} />
  // </Head>
};

export default async function RootLayout({
  children,
  params: { language },
}: Readonly<{
  children: ReactNode;
  params: { language: string };
}>): Promise<JSX.Element> {
  return (
    <html lang={language}>
      <body>
        <AppWalletProvider>{children}</AppWalletProvider>
      </body>
    </html>
  );
}
