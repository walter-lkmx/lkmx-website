import Head from 'next/head';
import siteMetadata from '@/meta/siteMetadata';
import { useRouter } from 'next/router'


const HeadSeo = ({
  title,
  description,
  canonicalUrl,
  ogTwitterImage,
  ogImageUrl,
}) => {
  const router = useRouter()
  // console.log(router)
  // console.log(router.locale+router.asPath)
  return (
    <Head>

      <title>{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={description} />

      <meta name="twitter:card" content="summary_large_image"></meta>
      <meta name="twitter:site" content={siteMetadata.twitterHandle} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogTwitterImage} />

      <link rel="canonical" href={siteMetadata.siteUrl+'/'+router.locale+router.asPath} />

      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content={siteMetadata.companyName} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:url" content={siteMetadata.siteUrl+'/'+router.locale+router.asPath} />
      <meta property="og:type" content={siteMetadata.ogType} />
    </Head>
  );
};

export default HeadSeo;
