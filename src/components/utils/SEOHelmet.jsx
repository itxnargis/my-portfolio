import { Helmet } from "react-helmet-async"

const SEOHelmet = () => {
  return (
    <Helmet>
      <title>Nargis Khatun | Web Developer</title>
      <meta
        name="description"
        content="Nargis Khatun is a web developer specializing in creating beautiful and user-friendly web experiences."
      />
      <meta name="keywords" content="web developer, frontend developer, react developer, javascript, html, css" />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://nargiskhatun.com/" />
      <meta property="og:title" content="Nargis Khatun | Web Developer" />
      <meta
        property="og:description"
        content="Nargis Khatun is a web developer specializing in creating beautiful and user-friendly web experiences."
      />
      <meta property="og:image" content="/og-image.jpg" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://nargiskhatun.com/" />
      <meta property="twitter:title" content="Nargis Khatun | Web Developer" />
      <meta
        property="twitter:description"
        content="Nargis Khatun is a web developer specializing in creating beautiful and user-friendly web experiences."
      />
      <meta property="twitter:image" content="/og-image.jpg" />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

      {/* Structured data for SEO */}
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org/",
            "@type": "Person",
            "name": "Nargis Khatun",
            "url": "https://nargiskhatun.com/",
            "image": "",
            "jobTitle": "Web Developer",
            "worksFor": {
              "@type": "Organization",
              "name": "Freelance"
            },
            "sameAs": [
              "https://github.com/itxnargis",
              "https://twitter.com/81283nargis",
              "https://www.linkedin.com/in/nargis-khatun-4008ab2a9/"
            ]
          }
        `}
      </script>
    </Helmet>
  )
}

export default SEOHelmet
