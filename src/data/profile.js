export const profile = {
  name: 'Kedar Venkatesh Kumar Veeramallu',
  shortName: 'Kedar Venkatesh Kumar Veeramallu',
  title: 'Java Full Stack Developer | Software Engineer',
  location: 'Vijayawada, Andhra Pradesh',
  phone: '+91-9182959023',
  email: 'kedarvenkateshkumar.veeramallu@gmail.com',
  resumeFile: '/Kedar_Venkatesh_Kumar_Veeramallu_Resume.pdf',
  socials: {
    github: 'https://github.com/kedarvenkateshkumar',
    linkedin: 'https://www.linkedin.com/in/venkatesh-veeramallu-820431322/',
    leetcode: 'https://leetcode.com/kedarvenkatesh',
  },
  heroIntro:
    'Computer Science undergraduate focused on Java backend development, object-oriented design, and full-stack web applications with Spring Boot and React.',
  about: [
    'I am a Computer Science undergraduate specializing in Java backend development, with hands-on experience in Spring Boot, REST APIs, relational databases, and React.',
    'I enjoy designing backend services that are structured, secure, and easy to integrate — from JPA entity modeling and API design to JWT authentication and role-based access control. I have applied this approach while building ShopPlus, a full-stack e-commerce platform that connects a Spring Boot REST API with a React frontend.',
    'I approach software as a craft: break problems into clear modules, write maintainable code, and keep learning. I have solved 100+ DSA problems on LeetCode and continue to deepen my skills across the Java ecosystem and software engineering fundamentals.',
  ],
  highlights: [
    { label: 'Focus', value: 'Java · Spring Boot · REST' },
    { label: 'Education', value: 'B.Tech CSE · 2024–2027' },
    { label: 'DSA', value: '100+ LeetCode problems' },
    { label: 'Based in', value: 'Vijayawada, AP' },
  ],
  skills: [
    {
      id: 'languages',
      title: 'Programming Languages',
      items: ['Java', 'C', 'Python', 'JavaScript'],
    },
    {
      id: 'backend',
      title: 'Backend Technologies',
      items: ['Spring Boot', 'Spring Security', 'REST APIs', 'JPA', 'JWT', 'Microservices', 'API Development'],
    },
    {
      id: 'frontend',
      title: 'Frontend Technologies',
      items: ['React', 'HTML5', 'CSS3'],
    },
    {
      id: 'databases',
      title: 'Databases',
      items: ['MySQL', 'PostgreSQL', 'MongoDB'],
    },
    {
      id: 'tools',
      title: 'Development Tools',
      items: ['Git', 'GitHub', 'Maven'],
    },
    {
      id: 'cs',
      title: 'Core Computer Science Concepts',
      items: ['OOP', 'Collections', 'DBMS', 'Data Structures & Algorithms'],
    },
  ],
  projects: [
    {
      featured: true,
      name: 'ShopPlus',
      subtitle: 'Full-Stack E-Commerce Application',
      description:
        'A complete e-commerce platform built with React.js, Spring Boot, and PostgreSQL. The frontend integrates with RESTful backend services covering authentication, catalog, cart, orders, and user workflows.',
      architecture: [
        'React.js client integrated with a Spring Boot REST backend',
        'PostgreSQL persistence through Spring Data JPA and Hibernate',
        '31 REST API mappings across core store operations',
        '11 JPA entity mappings and 11 PostgreSQL tables for domain data',
        'JWT authentication with Spring Security and USER / ADMIN role-based access',
      ],
      features: [
        'Authentication, product and inventory management',
        'Cart operations, order processing, and user profiles',
        'Image uploads and email/phone verification',
        'Product search, category filtering, and pagination',
        'Stock management and centralized exception handling',
      ],
      tech: ['React.js', 'Spring Boot', 'PostgreSQL', 'Spring Security', 'JWT', 'Spring Data JPA', 'Hibernate', 'REST APIs'],
      githubUrl: '',
      liveUrl: '',
    },
  ],
  education: [
    {
      degree: 'B.Tech in Computer Science & Engineering',
      institution: 'Sasi Institute of Technology and Engineering, Andhra Pradesh',
      period: '2024 – 2027',
      cgpa: '',
      coursework: [
        'Data Structures & Algorithms',
        'DBMS',
        'OS',
        'Compiler Design',
        'Cloud Computing',
        'Machine Learning',
        'Cryptography',
      ],
    },
  ],
  certifications: [
    'Java Programming — CodeChef',
    'Spring Boot Development — CodeChef',
    'SQL Certification — HackerRank',
  ],
  achievements: [
    'Solved 100+ problems on LeetCode, demonstrating a strong understanding of Data Structures and Algorithms.',
    'Participated in a Hackathon conducted by Google at NIT Andhra Pradesh.',
  ],
  languages: [
    { name: 'Telugu', level: 'Native' },
    { name: 'English', level: 'Professional proficiency' },
    { name: 'Hindi', level: 'Conversational' },
  ],
  closing:
    'I am seeking Software Engineer and Java Developer roles where I can contribute, learn, and grow in a fast-paced engineering environment. If you are hiring for backend or full-stack Java positions, I would welcome a conversation.',
}
