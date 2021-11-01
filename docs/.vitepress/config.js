let ogprefix = "og: http://ogp.me/ns#";
let title = "Domain (www.prime-websites.com) for Sale";
let description = "Domain (www.prime-websites.com) for Sale";
let color = "#f42525";
let author = "Dirk Raschke";
let email = "draschke@googlemail.com";

module.exports = {
  lang: "en-US",
  title: "Domain (www.prime-websites.com) for Sale",
  description: "Domain (www.prime-websites.com) for Sale",
  // base: "/bp-rating/",
  head: [
    // ["link", { rel: "icon", href: `/assets/favicon.ico` }],
    ["meta", {
      name: "theme-color",
      content: color
    }],
    ["meta", {
      prefix: ogprefix,
      property: "og:title",
      content: title
    }],
    ["meta", {
      prefix: ogprefix,
      property: "og:type",
      content: "article"
    }],
    ["meta", {
      prefix: ogprefix,
      property: "og:url",
      content: "https://draschke.github.io/bp-rating/"
    }],
    ["meta", {
      prefix: ogprefix,
      property: "og:description",
      content: description
    }],
    ["meta", {
      prefix: ogprefix,
      property: "og:article:author",
      content: author
    }],
    ["meta", {
      prefix: ogprefix,
      property: "og:site_name",
      content: title
    }],
    ["meta", {
      prefix: ogprefix,
      property: "og:locale",
      content: "en_US"
    }],
    ["meta", {
      prefix: ogprefix,
      property: "og:locale:alternate",
      content: "en_GB"
    }],
    ["meta", {
      prefix: ogprefix,
      property: "og:image",
      content: "https://draschke.github.io/bp-rating/bp-rating-clinic-1200_627.jpg"
    }],
    ["meta", {
      prefix: ogprefix,
      property: "og:image:width",
      content: "1200"
    }],
    ["meta", {
      prefix: ogprefix,
      property: "og:image:height",
      content: "627"
    }],
    ["meta", {
      prefix: ogprefix,
      property: "og:image",
      content: "https://draschke.github.io/bp-rating/bp-rating-clinic-600_314.jpg"
    }],
    ["meta", {
      prefix: ogprefix,
      property: "og:image:width",
      content: "600"
    }],
    ["meta", {
      prefix: ogprefix,
      property: "og:image:height",
      content: "314"
    }],
    // 3 unspecified
    ["meta", {
      prefix: ogprefix,
      property: "og:image",
      content: "https://draschke.github.io/bp-rating/bp-rating-clinic-1200_627.jpg"
    }],
    ["meta", {
      prefix: ogprefix,
      property: "og:image:alt",
      content: title
    }],
    ["meta", {
      name: "twitter:title",
      content: title
    }],
    ["meta", {
      name: "twitter:card",
      content: "summary_large_image"
    }],
    ["meta", {
      name: "twitter:description",
      content: description
    }],
    ["meta", {
      name: "twitter:creator",
      content: author
    }],
    ["meta", {
      name: "twitter:site",
      content: email
    }],
    ["meta", {
      name: "twitter:image:alt",
      content: title
    }],
    ["meta", {
      name: "twitter:image",
      content: "https://draschke.github.io/bp-rating/bp-rating-clinic-1200_627.jpg"
    }],
    ["meta", {
      name: "description",
      content: description
    }],
    ["meta", {
      name: "keywords",
      content: "prime-websites, prime websites, prime-websites.com, prime-websites.com for sale"
    }],
    ["meta", {
      name: "author",
      content: author
    }],
    ["meta", {
      name: "google-site-verification",
      content: "fIcc0ZHuxODrjX67vMWV1Bm0JM-eGz04Fm4Fy6jAez0"
    }],

  ],
  markdown: {
    lineNumbers: true,
  },
  themeConfig: {
    repo: "draschke/bp-rating",
    docsDir: "docs",

    editLinks: false,
    // editLinkText: "Edit this page on GitHub",
    // lastUpdated: "Last Updated",

    nav: [{
        text: "Home",
        link: "/"
      }
      // {
      //   text: "Release Notes",
      //   link: "https://github.com/draschke/bp-rating/releases",
      // },
    ],

  },
};