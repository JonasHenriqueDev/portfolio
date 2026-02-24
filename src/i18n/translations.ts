export type Locale = 'pt' | 'en'

export type ExperienceItem = {
  period: string
  company: string
  role: string
  highlights: string[]
  tags: string[]
}

export type ProjectItem = {
  title: string
  description: string
  tags: string[]
  href?: string
  repo?: string
  featured?: boolean
}

export type SkillGroup = {
  group: string
  items: string[]
}

export type Translations = {
  nav: {
    brand: string
    links: { href: string; label: string }[]
    contact: string
    toggleShort: string
    toggleAriaLabel: string
  }
  header: {
    kicker: string
    name: string
    summary: string
    ctaProjects: string
    ctaExperience: string
    photoAlt: string
    stackLine: string
  }
  about: {
    kicker: string
    title: string
    p1: string
    p2: string
    info: {
      locationLabel: string
      locationValue: string
      emailLabel: string
      emailValue: string
      educationLabel: string
      educationValue: string
      languagesLabel: string
      languagesValue: string
    }
  }
  experience: {
    kicker: string
    title: string
    items: ExperienceItem[]
  }
  skills: {
    kicker: string
    title: string
    groups: SkillGroup[]
  }
  projects: {
    kicker: string
    title: string
    featuredBadge: string
    items: ProjectItem[]
    contact: {
      kicker: string
      title: string
      description: string
      emailCta: string
      linkedinCta: string
    }
  }
  footer: {
    rightsTemplate: string
  }
}

export const translations: Record<Locale, Translations> = {
  pt: {
    nav: {
      brand: 'Jonas Santos',
      links: [
        { href: '#sobre', label: 'Resumo' },
        { href: '#experiencia', label: 'Experiências' },
        { href: '#skills', label: 'Skills' },
        { href: '#projetos', label: 'Projetos' },
      ],
      contact: 'Contato',
      toggleShort: 'EN',
      toggleAriaLabel: 'Mudar idioma para inglês',
    },
    header: {
      kicker: 'Desenvolvedor de Software',
      name: 'Jonas Santos',
      summary:
        '+3 anos construindo e evoluindo sistemas com Laravel e React. Experiência com Redis, AWS e performance.',
      ctaProjects: 'Ver projetos',
      ctaExperience: 'Experiências',
      photoAlt: 'Foto de Jonas Santos',
      stackLine:
        'Laravel • PHP • NestJS • React • Tailwind • Vite • PostgreSQL • Redis • Docker • AWS',
    },
    about: {
      kicker: 'Resumo',
      title: 'Backend com experiência em sistemas críticos',
      p1:
        'Desenvolvedor Backend com mais de 3 anos de experiência na construção e evolução de sistemas ERP e APIs REST escaláveis utilizando Laravel e NestJS. No front, trabalho com React usando Tailwind CSS e Vite. Experiência com arquitetura de software, idempotência com Redis e infraestrutura em AWS.',
      p2:
        'Atuação em sistemas que suportam mais de 250 usuários, com foco em performance, confiabilidade e redução de custos operacionais.',
      info: {
        locationLabel: 'Local',
        locationValue: 'Garanhuns, PE — Brasil',
        emailLabel: 'Email',
        emailValue: 'jonashssantos@gmail.com',
        educationLabel: 'Formação',
        educationValue: 'Engenharia de Software — UPE (2022–2026)',
        languagesLabel: 'Idiomas',
        languagesValue: 'PT (nativo) • EN (B2)',
      },
    },
    experience: {
      kicker: 'Experiências',
      title: 'Experiência profissional',
      items: [
        {
          period: 'jan/2025 — dez/2025',
          company: 'Wolf Code Solutions',
          role: 'Desenvolvedor de Software — Full Stack',
          highlights: [
            'Desenvolvimento e evolução de ERP em Laravel para construção civil, suportando +250 funcionários.',
            'Implementação de módulos financeiros, gestão de funcionários e controle de estoque.',
            'Otimização de queries e melhorias de performance, reduzindo o tempo de resposta em mais de 70%.',
            'Sistema de idempotência com Redis (cache distribuído) para prevenir inconsistências por requisições repetidas.',
            'API REST em NestJS com arquitetura hexagonal, facilitando testes e evolução sem impacto em módulos.',
            'Docker e documentação com Swagger para padronização de ambiente e integração do time.',
          ],
          tags: ['Laravel', 'PHP', 'NestJS', 'PostgreSQL', 'Redis', 'Docker', 'Swagger', 'AWS'],
        },
        {
          period: 'abr/2024 — dez/2024',
          company: 'Freelancer',
          role: 'Desenvolvedor Backend — Plataforma de Videoaulas',
          highlights: [
            'Backend completo (API REST) em Laravel para playlists, usuários e permissões (+150 usuários ativos).',
            'Autenticação e autorização com Laravel Sanctum e RBAC.',
            'Integração com Amazon S3 para armazenamento e gerenciamento de imagens.',
            'Containerização com Docker e deploy/infra na AWS com AWS Lambda (redução de custo ~50%).',
          ],
          tags: ['Laravel', 'PHP', 'PostgreSQL', 'Sanctum', 'RBAC', 'Amazon S3', 'AWS Lambda', 'Docker'],
        },
        {
          period: 'jan/2023 — fev/2024',
          company: 'UFAPE (Laboratório Multidisciplinar de Tecnologias Sociais)',
          role: 'Desenvolvedor de Software — Full Stack',
          highlights: [
            'ERP acadêmico em Laravel para gestão de estágios e editais (duas universidades).',
            'Digitalização de processos administrativos, reduzindo retrabalho e aumentando eficiência.',
            'Modelagem de banco e implementação de regras de negócio para fluxos acadêmicos.',
            'Relatórios e exportação de documentos com PHPOffice.',
            'Manutenção evolutiva e corretiva garantindo estabilidade do projeto.',
          ],
          tags: ['Laravel', 'PHP', 'MySQL', 'Redis', 'Bootstrap', 'PHPOffice'],
        },
      ],
    },
    skills: {
      kicker: 'Skills',
      title: 'Tecnologias e práticas',
      groups: [
        {
          group: 'Backend & Frontend',
          items: [
            'Laravel / PHP',
            'React.js / TypeScript',
            'Tailwind CSS',
            'Vite',
            'NestJS / Node.js',
            'APIs REST',
          ],
        },
        {
          group: 'Dados & Cache',
          items: ['PostgreSQL', 'MySQL', 'Redis (idempotência)', 'Otimização de queries'],
        },
        {
          group: 'Infra & Ferramentas',
          items: ['Docker', 'AWS (S3 / Lambda)', 'Swagger', 'GitHub / CI'],
        },
      ],
    },
    projects: {
      kicker: 'Projetos',
      title: 'Em destaque',
      featuredBadge: 'Destaque',
      items: [
        {
          title: 'Sistema de Gestão de Pedidos e Estoque',
          description:
            'Sistema full stack para gerenciamento de pedidos, produtos e usuários. Autenticação JWT, RBAC, processamento assíncrono com filas/Redis e testes no backend (Pest). CI com GitHub Actions e frontend em React + Vite + Tailwind.',
          tags: [
            'Laravel',
            'PHP',
            'PostgreSQL',
            'Redis',
            'Horizon',
            'React',
            'Vite',
            'Tailwind',
            'JWT',
            'GitHub Actions',
            'Pest',
          ],
          repo: 'https://github.com/jonashenriquedev/order-mananger-crud',
          featured: true,
        },
      ],
      contact: {
        kicker: 'Contato',
        title: 'Vamos conversar',
        description: 'Quer falar sobre um projeto, vaga ou parceria? Me chame no email ou LinkedIn.',
        emailCta: 'Email',
        linkedinCta: 'LinkedIn',
      },
    },
    footer: {
      rightsTemplate: '© {year} Jonas. Todos os direitos reservados.',
    },
  },
  en: {
    nav: {
      brand: 'Jonas Santos',
      links: [
        { href: '#sobre', label: 'About' },
        { href: '#experiencia', label: 'Experience' },
        { href: '#skills', label: 'Skills' },
        { href: '#projetos', label: 'Projects' },
      ],
      contact: 'Contact',
      toggleShort: 'PT',
      toggleAriaLabel: 'Switch language to Portuguese',
    },
    header: {
      kicker: 'Software Developer',
      name: 'Jonas Santos',
      summary:
        '3+ years building and evolving systems with Laravel and React. Experience with Redis, AWS, and performance optimization.',
      ctaProjects: 'View projects',
      ctaExperience: 'Experience',
      photoAlt: 'Photo of Jonas Santos',
      stackLine:
        'Laravel • PHP • NestJS • React • Tailwind • Vite • PostgreSQL • Redis • Docker • AWS',
    },
    about: {
      kicker: 'About',
      title: 'Backend experience with mission-critical systems',
      p1:
        'Backend developer with 3+ years of experience building and evolving ERP systems and scalable REST APIs using Laravel and NestJS. On the frontend, I work with React using Tailwind CSS and Vite. Experienced in software architecture, Redis-based idempotency, and AWS infrastructure.',
      p2:
        'Worked on systems supporting 250+ users, focusing on performance, reliability, and reducing operational costs.',
      info: {
        locationLabel: 'Location',
        locationValue: 'Garanhuns, PE — Brazil',
        emailLabel: 'Email',
        emailValue: 'jonashssantos@gmail.com',
        educationLabel: 'Education',
        educationValue: 'Software Engineering — UPE (2022–2026)',
        languagesLabel: 'Languages',
        languagesValue: 'PT (native) • EN (B2)',
      },
    },
    experience: {
      kicker: 'Experience',
      title: 'Professional experience',
      items: [
        {
          period: 'Jan 2025 — Dec 2025',
          company: 'Wolf Code Solutions',
          role: 'Software Developer — Full Stack',
          highlights: [
            'Built and evolved a Laravel ERP for the construction industry, supporting 250+ employees.',
            'Implemented financial modules, employee management, and inventory control, improving data traceability and organization.',
            'Optimized queries and performance, reducing response times by 70%+.',
            'Implemented an idempotency system using Redis as a distributed cache layer, increasing API reliability and preventing repeated-request inconsistencies.',
            'Developed a NestJS REST API using hexagonal architecture, enabling safer evolution and easier automated testing.',
            'Containerized with Docker and documented APIs with Swagger, standardizing environments and team integration.',
          ],
          tags: ['Laravel', 'PHP', 'NestJS', 'PostgreSQL', 'Redis', 'Docker', 'Swagger', 'AWS'],
        },
        {
          period: 'Apr 2024 — Dec 2024',
          company: 'Freelancer',
          role: 'Backend Developer — Video Lessons Platform',
          highlights: [
            'Built the complete Laravel backend (REST API) for a video lessons platform with playlists, users, and permissions (150+ active users).',
            'Implemented authentication and authorization with Laravel Sanctum and RBAC.',
            'Integrated Amazon S3 for image storage and management.',
            'Containerized with Docker and deployed on AWS using AWS Lambda, reducing hosting costs by ~50%.',
          ],
          tags: ['Laravel', 'PHP', 'PostgreSQL', 'Sanctum', 'RBAC', 'Amazon S3', 'AWS Lambda', 'Docker'],
        },
        {
          period: 'Jan 2023 — Feb 2024',
          company: 'UFAPE (Multidisciplinary Social Technologies Lab)',
          role: 'Software Developer — Full Stack',
          highlights: [
            'Developed an academic Laravel ERP to manage internships and calls for applications (used by two universities).',
            'Digitized manual administrative processes, reducing rework and increasing efficiency.',
            'Designed database models and implemented business rules for academic workflows.',
            'Generated reports and exported documents using PHPOffice.',
            'Provided ongoing maintenance to ensure stability and continuity.',
          ],
          tags: ['Laravel', 'PHP', 'MySQL', 'Redis', 'Bootstrap', 'PHPOffice'],
        },
      ],
    },
    skills: {
      kicker: 'Skills',
      title: 'Tech stack',
      groups: [
        {
          group: 'Backend & Frontend',
          items: [
            'Laravel / PHP',
            'React.js / TypeScript',
            'Tailwind CSS',
            'Vite',
            'NestJS / Node.js',
            'REST APIs',
          ],
        },
        {
          group: 'Data & Caching',
          items: ['PostgreSQL', 'MySQL', 'Redis (idempotency)', 'Query optimization'],
        },
        {
          group: 'Infra & Tools',
          items: ['Docker', 'AWS (S3 / Lambda)', 'Swagger', 'GitHub / CI'],
        },
      ],
    },
    projects: {
      kicker: 'Projects',
      title: 'Featured',
      featuredBadge: 'Featured',
      items: [
        {
          title: 'Orders & Inventory Management System',
          description:
            'Full-stack system for managing orders, products, and users. JWT auth, RBAC, async processing with queues/Redis, and backend tests (Pest). CI with GitHub Actions and a React + Vite + Tailwind frontend.',
          tags: [
            'Laravel',
            'PHP',
            'PostgreSQL',
            'Redis',
            'Horizon',
            'React',
            'Vite',
            'Tailwind',
            'JWT',
            'GitHub Actions',
            'Pest',
          ],
          repo: 'https://github.com/jonashenriquedev/order-mananger-crud',
          featured: true,
        },
      ],
      contact: {
        kicker: 'Contact',
        title: "Let's talk",
        description: 'Want to discuss a project, role, or partnership? Reach me by email or LinkedIn.',
        emailCta: 'Email',
        linkedinCta: 'LinkedIn',
      },
    },
    footer: {
      rightsTemplate: '© {year} Jonas. All rights reserved.',
    },
  },
}

