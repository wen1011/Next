import '@/styles/globals.css';

import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import Head from 'next/head';
import { ThemeProvider } from 'next-themes';
import '@/styles/prism-duotone-sea.css';
import '@/styles/prism-plus.css';
import LayoutWrapper from '@/components/LayoutWrapper';
import { siteConfigs } from '@/configs/siteConfigs';
function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
    <DefaultSeo
      titleTemplate={`%s | ${siteConfigs.titleShort}`}
      defaultTitle={siteConfigs.title}
      description={siteConfigs.description}
      canonical={siteConfigs.fqdn}
      openGraph={{
        title: siteConfigs.title,
        description: siteConfigs.description,
        url: siteConfigs.fqdn,
        images: [
          {
            url: siteConfigs.bannerUrl,
          },
        ],
        site_name: siteConfigs.title,
        type: 'website',
      }}
      twitter={{
        handle: siteConfigs.twitterID,
        site: siteConfigs.twitterID,
        cardType: 'summary_large_image',
      }}
      additionalMetaTags={[
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1',
        },
      ]}
      additionalLinkTags={[
        {
          rel: 'icon',
          href: siteConfigs.logoPath,
        },
          // 加入下面這兩個 link tag
          {
            rel: 'alternate',
            type: 'application/rss+xml',
            href: '/feed.xml',
          },
          {
            rel: 'alternate',
            type: 'application/atom+xml',
            href: '/atom.xml',
          },
      ]}
    
    />

    <LayoutWrapper>
      <Component {...pageProps} />
    </LayoutWrapper>
  </ThemeProvider>
  );
}

export default App;