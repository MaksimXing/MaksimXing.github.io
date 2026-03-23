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
  },{id: "nav-publications",
          title: "publications",
          description: "Full list of publications in reverse chronological order. * denotes equal contribution. For a complete list, please visit my Google Scholar profile.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "Selected industry collaborations and academic competitions.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "Teaching assistant for signal processing and machine intelligence courses at Imperial College London.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "news-our-paper-achieving-flexible-fairness-metrics-in-federated-medical-imaging-has-been-published-in-nature-communications",
          title: 'Our paper “Achieving Flexible Fairness Metrics in Federated Medical Imaging” has been published...',
          description: "",
          section: "News",},{id: "news-our-collaboration-report-with-cubic-on-short-ticketing-detection-has-been-published-and-received-wide-media-coverage",
          title: 'Our collaboration report with Cubic on short ticketing detection has been published and...',
          description: "",
          section: "News",},{id: "news-our-paper-demystifying-cnns-has-been-accepted-by-ieee-signal-processing-magazine",
          title: 'Our paper “Demystifying CNNs” has been accepted by IEEE Signal Processing Magazine.',
          description: "",
          section: "News",},{id: "projects-intelligent-electromechanical-system-design",
          title: 'Intelligent Electromechanical System Design',
          description: "National First Prize at the National College Students Intelligent Electromechanical System Innovation Design Competition (Team Leader).",
          section: "Projects",handler: () => {
              window.location.href = "/projects/competition/";
            },},{id: "projects-short-ticketing-detection-with-cubic",
          title: 'Short Ticketing Detection with CUBIC',
          description: "AI-powered fare evasion detection framework analysing 6.5M journey records, with findings widely covered by media and translated into real-world deployment.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/cubic/";
            },},{id: "projects-characteristic-function-surrogates-with-sony",
          title: 'Characteristic Function Surrogates with SONY',
          description: "Characteristic-function-based surrogate modelling for multi-modal neural and behavioural recordings, in collaboration with Sony Japan.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/sony/";
            },},{id: "teachings-adaptive-signal-processing-amp-machine-intelligence",
          title: 'Adaptive Signal Processing &amp;amp; Machine Intelligence',
          description: "An advanced course covering adaptive, multidimensional, spectral and neural estimators for real-world signals and streaming data — from the LMS algorithm to deep learning and tensor networks.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/adaptive-signal-processing-and-machine-intelligence/";
            },},{id: "teachings-statistical-signal-processing-amp-inference",
          title: 'Statistical Signal Processing &amp;amp; Inference',
          description: "A rigorous foundation in statistical estimation theory for the design of signal processing and machine learning algorithms, covering random signals, linear stochastic models, optimal estimators, and adaptive filters.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/statistical-signal-processing-and-inference/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%68.%78%69%6E%67%32%33@%69%6D%70%65%72%69%61%6C.%61%63.%75%6B", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=W4j1qIYAAAAJ", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/MaksimXing", "_blank");
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
