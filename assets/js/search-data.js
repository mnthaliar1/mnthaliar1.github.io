// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-research",
          title: "research",
          description: "My PhD research on hidden poverty in Bogotá, Colombia.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/research/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "Publications in reverse chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "Teaching, supervision and mentoring.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-notes-from-the-field-notas-de-campo",
          title: "Notes from the field / Notas de campo",
          description: "Reflections on hidden poverty research in Colombian cities.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "post-why-disposable-cameras-on-participatory-photography-as-a-research-tool",
        
          title: "Why disposable cameras? On participatory photography as a research tool",
        
        description: "Explaining the inverted photovoice methodology at the heart of our fieldwork.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/disposable-cameras/";
          
        },
      },{id: "post-hidden-poverty-vs-vulnerability-why-the-distinction-matters",
        
          title: "Hidden poverty vs vulnerability — why the distinction matters",
        
        description: "A key conceptual distinction with enormous implications for social protection policy.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/hidden-vs-vulnerability/";
          
        },
      },{id: "post-reading-sisbén-iv-what-the-score-doesn-39-t-tell-you",
        
          title: "Reading Sisbén IV: what the score doesn&#39;t tell you",
        
        description: "How Colombia&#39;s targeting system produces structural blind spots — and why that matters for hidden poverty.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/sisben-score/";
          
        },
      },{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/CV_Ramirez_Chaparro.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%72%61%6D%69%72%65%7A@%6D%65%72%69%74.%75%6E%75.%65%64%75", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
