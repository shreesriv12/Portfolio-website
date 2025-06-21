export const navLinks = [
    {
      id: 1,
      name: 'Home',
      href: '#home',
    },
    {
      id: 2,
      name: 'About',
      href: '#about',
    },
    {
      id: 3,
      name: 'Work',
      href: '#work',
    },
    {
      id: 4,
      name: 'Contact',
      href: '#contact',
    },
    {
      id: 5,
      name: 'Resume',
      href: 'https://drive.google.com/file/d/1okMhpKw2oWbUfBuVHbj-l-co-Mxm2JsB/view?usp=sharing',
    },
    {
      id: 6,
      name: 'Coding Stats',
      href: '#coding',
    }
  ];
  
  export const achievementslist = [
    {
      id: 1,
      name: 'Softhathlon',
      position: '2nd position in first year',
      review:'An Event Aimed At Simulating The Software profile-based Recruitment Procedure For undergraduates. It Consists Of A Series Of written And Coding Rounds Testing Thetechnical Prowess Of The Candidate.interview Rounds Also Form An Integral Part Of The Event In Which The Students Are judged On The Knowledge And Confidence They Exude.',

    },
    {
      id: 2,
      name: 'Techmaiden',
      position: '1st rank in first year',
      review:
        'This Exclusive Event Aims Atproviding Ardent Females Like You With Overall Development as a Techie. The Event Consists of a Coding+technical Round Followed by Interviews.',
    },
    {
      id: 3,
      name: 'Devjam',
      position: 'One of the top 8 teams', 
      review:
        'A week-long development event for freshers to dive into the vast,exciting world of tech.',
    },
  ];
  
  export const myProjects = [
    {
      title: 'Uber Clone',
      desc: 'An Uber clone ride-hailing application replicating the core features of Uber. It includes a Rider App for booking rides, viewing ride history, real-time tracking, payments, and driver ratings. The Driver App allows accepting/rejecting requests, route navigation, earnings tracking, and profile management.',
      subdesc: 'Built with React.js, Tailwind CSS, JavaScript, Node.js, Express.js, and GSAP animation.',
      href: 'https://github.com/shreesriv12/Uber-Clone-',
      texture: '/textures/project/project1.mp4',
      logo: '/assets/project-logo1.png',
      logoStyle: {
        backgroundColor: '#2A1816',
        border: '0.2px solid #36201D',
        boxShadow: '0px 0px 60px 0px #AA3C304D',
      },
      spotlight: '/assets/spotlight1.png',
      tags: [
        { id: 1, name: 'React.js', path: '/assets/react.svg' },
        { id: 2, name: 'TailwindCSS', path: '/assets/tailwindcss.png' },
        { id: 3, name: 'JavaScript', path: '/assets/javascript.png' },
        { id: 4, name: 'Express.js', path: '/assets/express.png' },
      ],
    },
    {
      title: 'Devjam project - Assignify',
      desc: 'Assignify is a platform designed for students to efficiently manage their assignments, deadlines, and communication.',
      subdesc: 'Created using the MERN stack, it integrates task tracking, file uploads, and messaging to simplify academic workflows and boost productivity.',
      href: 'https://github.com/shreesriv12/DevJam',
      texture: '/textures/project/project2.mp4',
      logo: '/assets/project-logo2.png',
      logoStyle: {
        backgroundColor: '#13202F',
        border: '0.2px solid #17293E',
        boxShadow: '0px 0px 60px 0px #2F6DB54D',
      },
      spotlight: '/assets/spotlight2.png',
      tags: [
        { id: 1, name: 'React.js', path: '/assets/react.svg' },
        { id: 2, name: 'TailwindCSS', path: '/assets/tailwindcss.png' },
        { id: 3, name: 'JavaScript', path: '/assets/javascript.png' },
        { id: 4, name: 'Express.js', path: '/assets/express.png' },
        { id: 5, name: 'MongoDB', path: '/assets/mongodb.png' },
      ],
    },
    {
      title: 'Mediconnect',
      desc: 'MediConnect is a healthcare platform that connects doctors and clients for appointment scheduling, real-time consultations, and access to medical resources. It includes features like form integration and SMS notifications.',
      subdesc: 'Built using React.js, Twilio, Nodemailer, and Express.js, it enhances operational workflows.',
      href: 'https://github.com/shreesriv12/MediConnect',
      texture: '/textures/project/project3.mp4',
      logo: '/assets/project-logo3.png',
      logoStyle: {
        backgroundColor: '#60f5a1',
        background: 'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
        border: '0.2px solid rgba(208, 213, 221, 1)',
        boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
      },
      spotlight: '/assets/spotlight3.png',
      tags: [
        { id: 1, name: 'React.js', path: '/assets/react.svg' },
        { id: 2, name: 'TailwindCSS', path: '/assets/tailwindcss.png' },
        { id: 3, name: 'TypeScript', path: '/assets/typescript.png' },
        { id: 4, name: 'Framer Motion', path: '/assets/framer.png' },
        { id: 5, name: 'Express.js', path: '/assets/express.png' },
        { id: 6, name: 'MongoDB', path: '/assets/mongodb.png' },
      ],
    },
    {
  title: 'CryptoCred',
  desc: 'CryptoCred is a Blockchain-Based Academic Certificate Storage and Verification Platform that eliminates fake degrees and ensures secure, tamper-proof credentials using IPFS and blockchain.',
  subdesc: 'Built by team "npm -D coders" at Hack36 using Next.js, Solidity, Polygon, IPFS, Express.js, and MongoDB for decentralized certificate verification.',
  href: 'https://github.com/shreesriv12/CryptoCred', // ← change this to actual repo URL if different
  texture: '/textures/project/project5.mp4',       // ← replace with actual video texture path
  logo: '/assets/crypto.jpg',       // ← replace with actual logo image
  logoStyle: {
    backgroundColor: '#9b59b6',
    background: 'linear-gradient(0deg, #9B59B650, #9B59B650), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
    border: '0.2px solid rgba(208, 213, 221, 1)',
    boxShadow: '0px 0px 60px 0px rgba(155, 89, 182, 0.4)'
  },
  spotlight: '/assets/spotlight-cryptocred.png',      // ← optional preview image
  tags: [
    { id: 1, name: 'Next.js', path: '/assets/next.svg' },
    { id: 2, name: 'TailwindCSS', path: '/assets/tailwindcss.png' },
    { id: 3, name: 'Solidity', path: '/assets/solidity.svg' },
    { id: 4, name: 'Blockchain', path: '/assets/blockchain.svg' },
    { id: 5, name: 'Express.js', path: '/assets/express.png' },
    { id: 6, name: 'MongoDB', path: '/assets/mongodb.png' },
  ]
},
    {
      title: 'Webster project - Diddys Party',
      desc: 'Diddys Party is a platform for music creators to manage their creative process, from lyric drafts to project concepts. It helps in sketching albums, planning singles, and organizing collaborations.',
      subdesc: 'Built with HTML, CSS, and JavaScript, it was my first-ever project.',
      href: 'https://github.com/shreesriv12/Team-WebWizards-Team-Id-691',
      texture: '/textures/project/project4.mp4',
      logo: '/assets/project-logo5.png',
      logoStyle: {
        backgroundColor: '#1C1A43',
        border: '0.2px solid #252262',
        boxShadow: '0px 0px 60px 0px #635BFF4D',
      },
      spotlight: '/assets/spotlight5.png',
      tags: [
        { id: 1, name: 'HTML', path: '/assets/html.png' },
        { id: 2, name: 'CSS', path: '/assets/css.png' },
        { id: 3, name: 'JavaScript', path: '/assets/javascript.png' },
      ],
    },
    {
  title: 'YouTube AI Transcript Assistant',
  desc: 'A Chrome Extension + AI Backend that allows users to ask questions about any YouTube video by fetching, chunking, embedding transcripts, and generating AI-powered answers using Gemini.',
  subdesc: 'Built using Chrome Extension (HTML, JS, CSS), FastAPI, yt-dlp, sentence-transformers, FAISS, and Gemini via LangChain for context-aware transcript Q&A.',
  href: 'https://github.com/shreesriv12/Youtube-ChatBot-using-Langchain', // replace if different
  texture: '/textures/project/project6.mp4', // update with your actual path
  logo: '/assets/project-logo-ytai.png', // add your logo file here
  logoStyle: {
    backgroundColor: '#ff6b6b',
    background: 'linear-gradient(0deg, #FF6B6B50, #FF6B6B50), linear-gradient(180deg, rgba(255,255,255,0.9) 0%, rgba(208,213,221,0.8) 100%)',
    border: '0.2px solid rgba(208, 213, 221, 1)',
    boxShadow: '0px 0px 60px 0px rgba(255, 107, 107, 0.3)'
  },
  spotlight: '/assets/spotlight-ytai.png', // optional demo thumbnail
  tags: [
    { id: 1, name: 'Chrome Extension', path: 'https://img.icons8.com/?size=100&id=63785&format=png&color=000000' },
    { id: 2, name: 'FastAPI', path: 'https://img.icons8.com/?size=100&id=21888&format=png&color=000000' },
    { id: 3, name: 'Python', path: 'https://img.icons8.com/?size=100&id=l75OEUJkPAk4&format=png&color=000000' },
    { id: 6, name: 'Gemini', path: 'https://img.icons8.com/?size=100&id=MTnnE7FNiELB&format=png&color=000000' },
  ]
},
{
  title: 'Recommendation Systems',
  desc: 'Explore implementations of Content-Based, Collaborative, and Hybrid Recommendation Systems applied to real-world scenarios like movie suggestions.',
  subdesc: 'Built with Streamlit, Scikit-Learn, NLTK, and Python, this project provides personalized movie recommendations using NLP and similarity models.',
  href: 'https://github.com/shree_sriv12/movie-recommender-system',
  texture: '/textures/project/project7.mp4', // Replace with actual video or GIF path
  logo: '/assets/project-logo-recsys.png',   // Add your project logo asset
  logoStyle: {
    backgroundColor: '#ffa534',
    background: 'linear-gradient(0deg, #FFA53450, #FFA53450), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
    border: '0.2px solid rgba(208, 213, 221, 1)',
    boxShadow: '0px 0px 60px 0px rgba(255, 165, 52, 0.3)'
  },
  spotlight: '/assets/spotlight-recsys.png', // Optional image of app preview
  tags: [
    { id: 1, name: 'Python', path: 'https://img.icons8.com/?size=100&id=l75OEUJkPAk4&format=png&color=000000' },
    { id: 2, name: 'Streamlit', path: 'https://img.icons8.com/?size=100&id=Rffi8qeb2fK5&format=png&color=000000' },
    { id: 3, name: 'NLP', path: '/https://img.icons8.com/?size=100&id=aHClp8f4SBQL&format=png&color=000000' },
  ]
},
  ];
  
  export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
      deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
      deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
      cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
      reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
      ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
      targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
  };
  
  export const workExperiences = [
    {
      id: 1,
      name: 'Framer',
      pos: 'Lead Web Developer',
      duration: '2022 - Present',
      title: "Framer serves as my go-to tool for creating interactive prototypes. I use it to bring designs to  life, allowing stakeholders to experience the user flow and interactions before development.",
      icon: '/assets/framer.svg',
      animation: 'victory',
    },
    {
      id: 2,
      name: 'Figma',
      pos: 'Web Developer',
      duration: '2020 - 2022',
      title: "Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations. Its cloud-based.",
      icon: '/assets/figma.svg',
      animation: 'clapping',
    },
    {
      id: 3,
      name: 'Notion',
      pos: 'Junior Web Developer',
      duration: '2019 - 2020',
      title: "Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.",
      icon: '/assets/notion.svg',
      animation: 'salute',
    },
  ];