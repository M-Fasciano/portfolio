import React from 'react'
import { Helmet } from 'react-helmet'
import metaImg from '../../images/meta-image.jpg'
<<<<<<< HEAD
=======
import favicon from '../../images/favicon.ico'
>>>>>>> 1bb4c769f9f8f62543ba1f3f7e135b25bdcf5385

const SEO = () => {
  return (
    <Helmet>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <meta name="description" content="Front-end web developer based in London with passion for responsive websites." />
      <link rel="apple-touch-icon" href="logo192.png" />

      <title>Michele Fasciano | Portfolio</title>

      {/* Open Graph tags */}
      <meta property="og:url" content="https://m-fasciano.github.io/" />
      <meta property="og:type" content="webiste" />
      <meta property="og:title" content="Michele Fasciano | Portfolio" />
      <meta property="og:description" content="Front-end web developer based in London with passion for responsive websites." />
      <meta property="og:image" content={metaImg} />

      {/* Twitter tags */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@webmf" />
      <meta name="twitter:creator" content="@webmf" />
      <meta property="og:url" content="https://m-fasciano.github.io/" />
      <meta property="og:title" content="Michele Fasciano | Portfolio" />
      <meta property="og:description" content="Front-end web developer based in London with passion for responsive websites." />
      <meta property="og:image" content={metaImg} />

      <link rel="shortcut icon" href={favicon} />
    </Helmet>
  )
}

export default SEO
