export default function robots() {
  const baseUrl = 'https://aadharinstitutehmr.com';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}