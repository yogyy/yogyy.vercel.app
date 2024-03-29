import { NextSeo } from 'next-seo';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { useRouter } from 'next/router';
import SEO from 'next-seo.config';
import { isProd } from '@/constants/env';
import { Navbar, Footer } from '.';

interface SeoProps extends React.HTMLAttributes<HTMLElement> {
  title?: string;
  desc?: string;
}

export const RootLayout = ({ children, title, desc }: SeoProps) => {
  const { asPath } = useRouter();

  return (
    <>
      <NextSeo
        {...SEO}
        title={title}
        description={desc || SEO.openGraph?.description}
        openGraph={{
          ...SEO.openGraph,
          title: title || SEO.openGraph?.title,
          description: desc || SEO.openGraph?.description,
        }}
        canonical={isProd ? `https://yogyy.vercel.app${asPath}` : `localhost:3000${asPath}`}
        defaultTitle={SEO.openGraph?.title}
      />
      <Navbar className={`${GeistSans.variable} ${GeistMono.variable} font-sans`} />
      <main id="skip-nav" className={`${GeistSans.variable} ${GeistMono.variable} font-sans`}>
        {children}
      </main>
      <Footer className={`${GeistSans.variable} ${GeistMono.variable} font-sans`} />
    </>
  );
};
