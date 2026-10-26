// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/unveiling-hidden-poverty/";
    },
  },{id: "nav-research",
          title: "research",
          description: "My PhD research on hidden poverty in Bogotá, Colombia.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/unveiling-hidden-poverty/research/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "Publications in reverse chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/unveiling-hidden-poverty/publications/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "Teaching, supervision and mentoring.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/unveiling-hidden-poverty/teaching/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/unveiling-hidden-poverty/cv/";
          },
        },{id: "nav-notes-from-the-field-notas-de-campo",
          title: "Notes from the field / Notas de campo",
          description: "Reflections on hidden poverty research in Colombian cities.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/unveiling-hidden-poverty/blog/";
          },
        },{id: "post-why-disposable-cameras-on-participatory-photography-as-a-research-tool",
        
          title: "Why disposable cameras? On participatory photography as a research tool",
        
        description: "Explaining the inverted photovoice methodology at the heart of our fieldwork.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/unveiling-hidden-poverty/blog/2026/disposable-cameras/";
          
        },
      },{id: "post-hidden-poverty-vs-vulnerability-why-the-distinction-matters",
        
          title: "Hidden poverty vs vulnerability — why the distinction matters",
        
        description: "A key conceptual distinction with enormous implications for social protection policy.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/unveiling-hidden-poverty/blog/2026/hidden-vs-vulnerability/";
          
        },
      },{id: "post-reading-sisbén-iv-what-the-score-doesn-39-t-tell-you",
        
          title: "Reading Sisbén IV: what the score doesn&#39;t tell you",
        
        description: "How Colombia&#39;s targeting system produces structural blind spots — and why that matters for hidden poverty.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/unveiling-hidden-poverty/blog/2026/sisben-score/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/unveiling-hidden-poverty/books/the_godfather/";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/unveiling-hidden-poverty/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/unveiling-hidden-poverty/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/unveiling-hidden-poverty/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/unveiling-hidden-poverty/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/unveiling-hidden-poverty/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/unveiling-hidden-poverty/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/unveiling-hidden-poverty/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/unveiling-hidden-poverty/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/unveiling-hidden-poverty/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/unveiling-hidden-poverty/projects/9_project/";
            },},{id: "teachings-data-science-fundamentals",
          title: 'Data Science Fundamentals',
          description: "This course covers the foundational aspects of data science, including data collection, cleaning, analysis, and visualization. Students will learn practical skills for working with real-world datasets.",
          section: "Teachings",handler: () => {
              window.location.href = "/unveiling-hidden-poverty/teachings/data-science-fundamentals/";
            },},{id: "teachings-introduction-to-machine-learning",
          title: 'Introduction to Machine Learning',
          description: "This course provides an introduction to machine learning concepts, algorithms, and applications. Students will learn about supervised and unsupervised learning, model evaluation, and practical implementations.",
          section: "Teachings",handler: () => {
              window.location.href = "/unveiling-hidden-poverty/teachings/introduction-to-machine-learning/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/unveiling-hidden-poverty/assets/pdf/CV_Ramirez_Chaparro.pdf", "_blank");
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
          window.open("/unveiling-hidden-poverty/feed.xml", "_blank");
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
