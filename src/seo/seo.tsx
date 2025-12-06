import { Helmet } from 'react-helmet-async';
import type { FC } from 'react';
import { useLocation } from 'react-router-dom';

interface SeoProps {
  title: string;
  description?: string;
  name?: string;
  type?: string;
  image?: string;
  noIndex?: boolean;
}

const SEO: FC<SeoProps> = ({
  title,
  description = "Modern web teknolojileriyle (React, Next.js, TypeScript) hızlı ve ölçeklenebilir arayüzler geliştiren Frontend Developer Ali Okhan'ın kişisel portfolyosu.",
  name = 'Ali Okhan',
  type = 'website',
  image = '/og-image.jpg',
  noIndex = false,
}) => {
  const location = useLocation();
  const siteUrl = 'https://www.aliokhan.com';
  const currentUrl = `${siteUrl}${location.pathname}`;

  // --- STRUCTURED DATA (JSON-LD) ---
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: name,
    url: siteUrl,
    jobTitle: 'Frontend Developer',
    image: `${siteUrl}${image}`,
    sameAs: ['https://www.linkedin.com/in/aliokhan', 'https://github.com/aliokhan'],
    description: description,
  };

  return (
    <Helmet>
      {noIndex && <meta name="robots" content="noindex, nofollow" />}

      {/* 1. Standart Metadata */}
      <title>{title} | Ali Okhan - Frontend Developer</title>
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content="Ali Okhan, Frontend Developer, React, Web Tasarım, Portfolio"
      />
      <meta name="author" content={name} />

      {/* 2. Canonical URL */}
      {!noIndex && <link rel="canonical" href={currentUrl} />}

      {/* 3. Open Graph (Sosyal Medya) */}
      <meta property="og:site_name" content="Ali Okhan Portfolio" />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={`${title} | Ali Okhan`} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${siteUrl}${image}`} />
      <meta property="og:url" content={currentUrl} />

      {/* 4. Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={name} />
      <meta name="twitter:title" content={`${title} | Ali Okhan`} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}${image}`} />

      {!noIndex && <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>}
    </Helmet>
  );
};

export default SEO;
