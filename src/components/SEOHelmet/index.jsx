import { HelmetProvider, Helmet } from "react-helmet-async";

export default function SEOHelmet({ title, content }) {
  return (
    <HelmetProvider>
      <Helmet>
        <link rel="icon" type="image/svg+xml" href="/dist/faviconME.png" />
        <link rel="stylesheet" href="https://use.typekit.net/uln7czn.css" />
        <meta name="description" content={content}></meta>
        <title>Mathilde Elinor | {title}</title>
      </Helmet>
    </HelmetProvider>
  );
}
