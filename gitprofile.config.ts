// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'erfanrasti', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/portfolio/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        display: false,
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 2, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['erfanrasti/dotfiles', 'erfanrasti/arch-setup'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title:
            'Access Point Selection techniques in Cell-Free Massive MIMO Networks',
          description:
            'In this project, we assign access points to users to maximize the total throughput and energy efficiency of the network.',
          imageUrl: '',
          link: '',
        },
        {
          title:
            'Access Point Location Determination in Cell-Free Massive MIMO Networks',
          description:
            "In this project, we've placed access points according to the distribution of users' positions to maximize the network's total throughput.",
          imageUrl: '',
          link: '',
        },
        {
          title:
            'Reconfigurable Intelligent Surface Assisted Multiuser MISO Systems',
          description:
            'In this project, we tune the angle of RIS elements to maximize the total throughput of the network using a deep reinforcement learning model.',
          imageUrl: '',
          link: '',
        },
        {
          title:
            'A User-Centric Energy-Saving Method for Dynamic 5G Heterogeneous Networks Using Deep Reinforcement Learning',
          description:
            'In this project, we design a user-centric algorithm utilizing deep reinforcement learning to minimize the total power consumption of the network while also considering the optimality of the aggregate delay.',
          imageUrl: '',
          link: '',
        },
        {
          title:
            'MRI and CT-Scan Image Classification and Clustering using Deep Learning',
          description:
            'In this project, I designed a deep convolutional neural network using depthwise separable convolution to classify malicious 2D cut MRI images and cluster them based on their similarity to a test sample.',
          imageUrl: '',
          link: '',
        },
        {
          title: 'Ecotourism Recommender System Based on Machine Learning',
          description:
            "In this project, as an advisor, I collaborated on an ecotourism recommender system that provides ecotourism recommendations based on users' previous history and interests, using some matrix factorization methods.",
          imageUrl: '',
          link: '',
        },
      ],
    },
  },
  seo: { title: '', description: '', imageURL: '' },
  social: {
    email: 'erfanrasty@gmail.com',
    linkedin: 'erfan-rasti-6a80561a1',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: 'erfanrasti', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    discord: '',
    telegram: '',
    website: 'https://erfanrasti.github.io',
    phone: '',
  },
  resume: {
    fileUrl: 'https://erfanrasti.github.io/uploads/resume.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'Linux',
    'MATLAB',
    'PyToch',
    'TensorFlow',
    'Hyprland',
    'VS Code',
    'Neovim',
    'Git',
    'GitHub',
    'Bash Script',
    'LATEX',
    'Conda',
    'Jupyter Notebook',
    'GNOME',
    'Markdown',
    'scikit-learn',
  ],
  experiences: [
    {
      company: 'AUT-Wireless Research Lab.',
      position: 'Wireless Communication Engineer',
      from: 'Dec 2022',
      to: 'Present',
      companyLink: '',
    },
    {
      company: 'AUT Internship',
      position: 'Computer Vision Engineer',
      from: 'Jun 2022',
      to: 'Jan 2023',
      companyLink: '',
    },
  ],
  certifications: [{}],
  educations: [
    {
      institution: 'Amirkabir University of Technology',
      degree: 'BS Electrical Engineering (Communication Focus)',
      from: '2019',
      to: '2024',
    },
    {
      institution:
        'National Organization for Development of Exceptional Talents (Sampad)',
      degree: 'HS Diploma (Mathematics & Physics)',
      from: '2013',
      to: '2019',
    },
  ],
  publications: [
    {
      title:
        'A User-Centric Energy-Saving Method for Dynamic 5G Heterogeneous Networks Using Deep Reinforcement Learning',
      conferenceName: '',
      journalName: 'IEEE Transactions on Mobile Computing',
      authors: 'Mohammad Ali Arami, Erfan Rasti, Abbas Mohammadi',
      link: 'https://ieeexplore.ieee.org/document/11049041',
      description:
        'Energy consumption (EC) represents a significant challenge for 5G and 6G mobile networks, necessitating a primary focus on optimizing energy savings (ES). This paper illustrates the practical benefits of a user-centric deep reinforcement learning (DRL) models in achieving a green cellular network. The primary objective is to optimize energy usage in a heterogeneous network (HetNet). The optimization of power consumption (PC) in such networks is a non-convex and NP-hard problem. To address this challenge, we propose using reinforcement learning (RL). Due to the extensive state and action space, classical RL approaches are unsuitable. Therefore, the adoption of DRL methods, notably the deep Q-network (DQN) and deep deterministic policy gradient (DDPG) methods, is necessary. The proposed approach entails a user-centric connection establishment, whereby small base stations (SBSs) are switched to an on mode. The mode switching determined by the DRL methods is controlled by an anti-abrupt transition mechanism, which prevents unnecessary oscillations in the network. The results are benchmarked against existing approaches, specifically genetic algorithm (GA) and particle swarm optimization (PSO) for ES. The proposed methods outperform both GA and PSO optimization techniques in terms of ES and significantly reduce time consumption, enhancing its practical implementation feasibility.',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'erfanrasti', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'procyon',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: true,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'caramellatte',
      'abyss',
      'silk',
      'procyon',
    ],
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️ | Modified by Erfan Rasti`,

  enablePWA: true,
};

export default CONFIG;
