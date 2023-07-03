const siteMetadata = {
  title: 'Financial Gurkha',
  author: 'Kanchan Sharma',
  headerTitle: 'Financial Gurkha',
  description: 'Financial Gurkhs provides the best financial signals and actionable insights',
  language: 'en-us',
  siteUrl: 'https://financialgurkha.com',
  siteRepo: 'https://github.com/dayvoid97/financialgurkha',
  image: '/static/img/avatar.png',
  socialBanner: '/logo.svg',
  email: 'contact@kanchanksharma.com',
  github: 'https://github.com/dayvoid97/',
  twitter: 'https://twitter.com/FinancialGurkha',
  linkedin: 'https://www.linkedin.com/in/sharmakanchan3154/',
  locale: 'en-US',
  analytics: {
    // supports plausible, simpleAnalytics or googleAnalytics
    // plausibleDataDomain: false, // e.g. tailwind-nextjs-starter-blog.vercel.app
    // simpleAnalytics: false, // true or false
    googleAnalyticsId: 'G-1NDRE7GK9K',
  },
  newsletter: {
    // Please add your .env file and modify it according to your selection
    provider: 'emailOctopus',
  },
  comment: {
    provider: '', // supported providers: giscus, utterances, disqus
    giscusConfig: {
      repo: '', // username/repoName
      // Visit the link below, enter your repo in the configuration section and copy the script data parameters
      // Before that you should create a new Github discussions category with the Announcements type so that new discussions can only be created by maintainers and giscus
      // https://giscus.app/
      repositoryId: '',
      category: '',
      categoryId: '',
      mapping: '', // supported options: pathname, url, title
      reactions: '', // Emoji reactions: 1 = enable / 0 = disable
      // Send discussion metadata periodically to the parent window: 1 = enable / 0 = disable
      metadata: '',
      // theme example: light, dark, dark_dimmed, dark_high_contrast
      // transparent_dark, preferred_color_scheme, custom
      theme: '',
      // theme when dark mode
      darkTheme: '',
      // If the theme option above is set to 'custom`
      // please provide a link below to your custom theme css file.
      // example: https://giscus.app/themes/custom_example.css
      themeURL: '',
    },
    utterancesConfig: {
      repo: '', // username/repoName
      issueTerm: '', // supported options: pathname, url, title
      label: '', // label (optional): Comment 💬
      // theme example: github-light, github-dark, preferred-color-scheme
      // github-dark-orange, icy-dark, dark-blue, photon-dark, boxy-light
      theme: '',
      // theme when dark mode
      darkTheme: '',
    },
    disqus: {
      // https://help.disqus.com/en/articles/1717111-what-s-a-shortname
      shortname: '',
    },
  },
}

module.exports = siteMetadata
