import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  path?: string;
}

export default function SEOHead({ title, description, keywords, path = "" }: SEOHeadProps) {
  const url = `https://www.rktechcrush.com${path}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <link rel="canonical" href={url} />
    </Helmet>
  );
}
