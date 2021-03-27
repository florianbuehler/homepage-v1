import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

type MetaObject = {
  property: string
  content: string
}

type SEOProps = {
  lang?: string
  description?: string
  meta: MetaObject[]
  keywords: string[]
  title: string
  addSuffixToPageTitle?: boolean
}

const SEO = (props: SEOProps): React.ReactElement => {
  const { description, lang, meta, keywords, title, addSuffixToPageTitle } = props

  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            titleSuffix
            description
            author
            url
            image
          }
        }
      }
    `
  )

  const seo = {
    // we add the titleSuffix here and not in the titleTemplate,
    // as the suffix in the title template is not included when sharing via social media, ...
    title: addSuffixToPageTitle ? `${title} | ${site.siteMetadata.titleSuffix}` : `${title}`,
    metaDescription: description,
    image: `${site.siteMetadata.url}${site.siteMetadata.image}`,
    url: site.siteMetadata.url,
    author: site.siteMetadata.author
  }

  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
      title={seo.title}
      titleTemplate={`%s`}
      meta={[
        {
          name: `image`,
          content: seo.image
        },
        {
          name: `description`,
          content: seo.metaDescription
        },
        {
          property: `og:url`,
          content: seo.url
        },
        {
          property: `og:title`,
          content: seo.title
        },
        {
          property: `og:description`,
          content: seo.metaDescription
        },
        {
          property: `og:type`,
          content: `website`
        },
        {
          property: `og:image`,
          content: seo.image
        },
        {
          name: `twitter:card`,
          content: `summary`
        },
        {
          name: `twitter:creator`,
          content: seo.author
        },
        {
          name: `twitter:title`,
          content: seo.title
        },
        {
          name: `twitter:description`,
          content: seo.metaDescription
        },
        {
          name: `twitter:image`,
          content: seo.image
        }
      ]
        .concat(keywords.length > 0 ? { name: `keywords`, content: keywords.join(`, `) } : [])
        .concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `eng`,
  meta: [],
  keywords: [],
  addTitleSuffix: true
}

export default SEO
