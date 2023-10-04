import { HelmetProvider, Helmet } from "react-helmet-async";

export default function SEOHelmet({ title }, { content }) {
  return (
    <HelmetProvider>
      <Helmet>
        <link rel="icon" type="image/svg+xml" href="public/favicon.png" />
        <link rel="stylesheet" href="https://use.typekit.net/uln7czn.css" />
        <meta name="description" content={content}></meta>
        <title>Mathilde Elinor | {title}</title>
      </Helmet>
    </HelmetProvider>
  );
}

{
  /* <meta
name="description"
content="Mathilde Elinor is a frontend developer based in Oslo, Norway."
/> */
}
