export default defineAppConfig({
  alpine: {
    title: 'Waranga News',
    description: 'Serving the community for 40 years',
    image: {
      src: '/wnews-masthead.png',
      alt: 'An image showcasing my project.',
      width: 400,
      height: 300
    },
    header: {
      position: 'right', // possible value are : | 'left' | 'center' | 'right'
      logo: {
        path: '/wnews_p5.png', // path of the logo
        pathDark: '/logo-dark.svg', // path of the logo in dark mode, leave this empty if you want to use the same logo
        alt: 'Waranga News logo' // alt of the logo
      }
    },
    footer: {
      credits: {
        // possible value are : true | false
        enabled: true,

        // our github repository
        repository: 'https://www.github.com/nuxt-themes/alpine',

        text: 'Copyright 2024 - Waranga News Inc.'
      },
      navigation: true, // possible value are : true | false
      alignment: 'center', // possible value are : 'none' | 'left' | 'center' | 'right'
      message: 'Follow me on' // string that will be displayed in the footer (leave empty or delete to disable)
    },
    socials: {
      twitter: 'WarangaNews',
      instagram: '',
      linkedin: {
        icon: 'uil:linkedin',
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/company/nuxtlabs'
      }
    },
    form: {
      successMessage: 'Message sent. Thank you!'
    }
  }
})