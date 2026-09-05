// Central content for the site, in English and Spanish.
// Keep the two objects structurally identical — same keys, same array lengths —
// so the language toggle can swap between them safely.
//
// This file is also the natural place to adapt copy per job application
// (your future job-hunt pipeline can generate variants of this object).

export type Lang = "en" | "es";

export interface CompetencyItem {
  title: string;
  description: string;
}

export interface ExperienceRole {
  title: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
}

export interface ToolCategory {
  category: string;
  tools: string[];
}

export interface EducationItem {
  title: string;
  subtitle: string;
  institution: string;
  year: string;
}

export interface LanguageEntry {
  language: string;
  level: string;
}

export interface SkillsBlock {
  heading: string;
  subtitle: string;
  items: string[];
}

export interface SiteContent {
  // Drives the document title and description tags; see lib/documentMeta.ts.
  meta: {
    title: string;
    description: string;
  };
  hero: {
    greeting: string;
    role: string;
    summary: string;
    location: string;
  };
  competencies: {
    heading: string;
    subtitle: string;
    items: CompetencyItem[]; // order must match the icon array in Competencies.tsx
  };
  skills: SkillsBlock;
  experience: {
    heading: string;
    subtitle: string;
    roles: ExperienceRole[];
  };
  tools: {
    heading: string;
    subtitle: string;
    categories: ToolCategory[];
  };
  education: {
    heading: string;
    items: EducationItem[]; // order must match the icon array in Education.tsx
    languagesHeading: string;
    languages: LanguageEntry[];
  };
  contact: {
    heading: string;
    subtitle: string;
    locationLabel: string;
    rights: string;
  };
}

export const content: Record<Lang, SiteContent> = {
  en: {
    meta: {
      title: "Christian Rodriguez | IT Project Coordinator",
      description:
        "Christian Rodriguez — IT Project Coordinator and Software Delivery Specialist with more than 10 years of experience in banking, public sector, and automotive industries.",
    },
    hero: {
      greeting: "Hello, I'm",
      role: "Project Coordinator & PMO Specialist",
      summary:
        "More than 10 years coordinating software delivery across banking, public sector, and automotive — from PMO portfolio tracking and executive reporting to stakeholder alignment and delivery governance. Detail-driven, compliance-minded, and comfortable in both Agile and Waterfall.",
      location: "Valparaíso, Chile",
    },
    competencies: {
      heading: "Core Competencies",
      subtitle:
        "A proven track record of delivering results through structured project management and stakeholder collaboration",
      items: [
        {
          title: "Project Coordination",
          description:
            "End-to-end ownership of scope, schedule, risk, and cross-project dependencies across complex portfolios",
        },
        {
          title: "PMO Reporting",
          description:
            "Clear, consistent reporting — milestone tracking, KPIs, and executive-level visibility into delivery status",
        },
        {
          title: "Stakeholder Management",
          description:
            "Trusted liaison between clients, leadership, and cross-functional teams, keeping expectations aligned throughout delivery",
        },
        {
          title: "Project Management Methodologies",
          description:
            "Fluent across hybrid delivery models, adapting Agile and Waterfall practices to fit each project and its stakeholders",
        },
        {
          title: "Documentation & Governance",
          description:
            "Rigorous project documentation and governance that keep delivery auditable, compliant, and transparent",
        },
        {
          title: "Process Improvement",
          description:
            "Continuous improvement that leverages core Lean principles to raise delivery quality, consistency, and efficiency",
        },
      ],
    },
    skills: {
      heading: "Personal Skills",
      subtitle: "Complementary strengths that translate across teams, industries, and roles",
      items: [
        "Analytical Thinking",
        "Problem Solving",
        "Attention to Detail",
        "Strong Multitasking & Prioritization Skills",
        "Teamwork and Collaboration",
        "Excellent Interpersonal Skills",
        "Highly Versatile and Adaptable",
        "Goal-Oriented",
      ],
    },
    experience: {
      heading: "Professional Experience",
      subtitle: "A decade of coordinating software delivery across banking, public sector, and automotive",
      roles: [
        {
          title: "Relocation to Chile",
          company: "Open to new opportunities — Project Coordination, PMO & beyond",
          location: "Valparaíso, Chile",
          period: "Nov 2025 – Present",
          highlights: [
            "Relocated from Canada to Chile. Open to on-site roles in Chile & Canada (open to relocation), and to remote roles worldwide English & Spanish.",
          ],
        },
        {
          title: "Quality Control Specialist",
          company: "Toyota Boshoku Canada",
          location: "Woodstock, ON, Canada",
          period: "Aug 2022 – Nov 2025",
          highlights: [
            "Conducted scheduled compliance audits against local and international safety standards, documenting findings and tracking each issue through to closure",
            "Contributed to Lean continuous-improvement initiatives — standardized work, waste reduction, and process discipline",
            "Owned quality documentation and reporting for critical safety processes — applying professional PMO governance and issue-tracking discipline",
            "Managed corrective-action follow-up end to end — escalating non-conformities and verifying resolution through structured RAID and issue-management practices",
            "Facilitated comprehensive training and integration of new team members on internal methodologies and testing standards for inspection and regulatory compliance",
          ],
        },
        {
          title: "Project Coordinator — PMO",
          company: "Optimisa S.A.",
          location: "Santiago, Chile",
          period: "Feb 2012 – Jul 2021",
          highlights: [
            "Coordinated an average portfolio of 20+ concurrent software projects within the PMO, plus 5-10 recurring, ongoing services, maintaining single-source visibility over delivery status, risks, and cross-project dependencies",
            "Portfolio included mission-critical, customer-facing systems — including nationwide ATM and POS networks — relied on daily by the country's entire banked population",
            "Produced periodic milestone, status, and KPI reporting for stakeholders and clients, supporting a 95%+ project success rate across the portfolio",
            "Served as primary liaison between clients and internal delivery teams, translating business needs into clear scope and managing expectations across the delivery cycle",
            "Maintained RAID logs and delivery documentation, standardizing status tracking and issue escalation across the PMO",
            "Partnered with project leaders on planning, prioritization, and resource allocation to keep delivery on schedule and within budget",
          ],
        },
        {
          title: "Junior Project Manager",
          company: "Chilean Health Ministry — IT Department",
          location: "Santiago, Chile",
          period: "Apr 2011 – Dec 2011",
          highlights: [
            "Coordinated delivery of software projects across multiple government health entities, aligning timelines and deliverables among distributed teams",
            "Managed communication across interdisciplinary public-sector stakeholders, keeping all parties aligned on scope, status, and dependencies",
            "Improved planning, tracking, and documentation practices to strengthen delivery reliability and reporting transparency",
          ],
        },
        {
          title: "Project Manager Assistant",
          company: "TInet Informatics Solutions",
          location: "Santiago, Chile",
          period: "Sep 2010 – Mar 2011",
          highlights: [
            "Supported a vendor adjudication process for a major bank, running documentation reviews and compliance checks against tender requirements",
            "Consolidated findings into structured summaries and issue logs to support procurement decision-making",
          ],
        },
      ],
    },
    tools: {
      heading: "Tools & Methods",
      subtitle: "Proficient in industry-standard tools and methodologies for effective project delivery",
      categories: [
        {
          category: "PM / Collaboration",
          tools: ["Jira", "Confluence", "Trello", "Slack", "MS Teams", "MS Project"],
        },
        {
          category: "Modeling / Documentation",
          tools: ["Visio", "UML", "Mermaid", "PlantUML"],
        },
        {
          category: "Delivery Practices",
          tools: ["Agile/Scrum", "Waterfall", "Lean", "Milestone Tracking", "RAID Logs", "KPI Reporting"],
        },
      ],
    },
    education: {
      heading: "Education & Training",
      items: [
        {
          title: "B.Sc. Computer Science Engineering",
          subtitle: "Software Engineering",
          institution: "Pontificia Universidad Católica de Valparaíso (Chile)",
          year: "2010",
        },
        {
          title: "IT Project Management",
          subtitle: "Certification",
          institution: "Universidad Técnica Federico Santa María (Chile)",
          year: "2018",
        },
        {
          title: "Scrum & Agile Methodologies Workshop",
          subtitle: "Certification",
          institution: "Optimisa S.A.",
          year: "2019",
        },
      ],
      languagesHeading: "Languages",
      languages: [
        { language: "Spanish", level: "Native" },
        { language: "English", level: "Professional working proficiency\nIELTS 2021" },
      ],
    },
    contact: {
      heading: "Let's Connect",
      subtitle:
        "Open to new opportunities across any field — my coordination, delivery, and interpersonal skills are built to transfer well beyond IT and project management",
      locationLabel: "Valparaíso, Chile",
      rights: "All rights reserved.",
    },
  },

  es: {
    meta: {
      title: "Christian Rodriguez | Coordinador de Proyectos TI",
      description:
        "Christian Rodriguez — Coordinador de Proyectos TI y Especialista en Entrega de Software con más de 10 años de experiencia en banca, sector público e industria automotriz.",
    },
    hero: {
      greeting: "Hola, soy",
      role: "Coordinador de Proyectos y Especialista PMO",
      summary:
        "Más de 10 años coordinando la entrega de software en banca, sector público y automotriz — desde el seguimiento de portafolios y los reportes ejecutivos en la PMO hasta la alineación de interesados y la gobernanza de entregas. Orientado al detalle, con foco en el cumplimiento y cómodo tanto en Ágil como en Cascada.",
      location: "Valparaíso, Chile",
    },
    competencies: {
      heading: "Competencias Clave",
      subtitle:
        "Un historial comprobado de resultados a través de la gestión estructurada de proyectos y la colaboración con los interesados",
      items: [
        {
          title: "Coordinación de Proyectos",
          description:
            "Responsabilidad integral sobre alcance, cronograma, riesgos y dependencias entre proyectos en portafolios complejos",
        },
        {
          title: "Reportes PMO",
          description:
            "Reportes claros y consistentes — seguimiento de hitos, KPIs y visibilidad ejecutiva del estado de entrega",
        },
        {
          title: "Gestión de Interesados",
          description:
            "Enlace de confianza entre clientes, liderazgo y equipos multifuncionales, manteniendo las expectativas alineadas durante toda la entrega",
        },
        {
          title: "Metodologías de Gestión de Proyectos",
          description:
            "Manejo fluido de modelos de entrega híbridos, adaptando prácticas Ágiles y Tradicionales a cada proyecto y sus interesados",
        },
        {
          title: "Documentación y Gobernanza",
          description:
            "Documentación y gobernanza de proyectos rigurosa que mantiene la entrega auditable, conforme y transparente",
        },
        {
          title: "Mejora de Procesos",
          description: "Mejora continua con enfoque Lean que eleva la calidad, consistencia y eficiencia de la entrega",
        },
      ],
    },
    skills: {
      heading: "Habilidades Personales",
      subtitle: "Fortalezas complementarias que se traducen en distintos equipos, industrias y roles",
      items: [
        "Pensamiento Analítico",
        "Resolución de Problemas",
        "Atención al Detalle",
        "Fuerte Capacidad de Multitarea y Priorización",
        "Trabajo en Equipo y Colaboración",
        "Excelentes Habilidades Interpersonales",
        "Alta Versatilidad y Adaptabilidad",
        "Orientación a Objetivos",
      ],
    },
    experience: {
      heading: "Experiencia Profesional",
      subtitle: "Una década coordinando la entrega de software en banca, sector público y automotriz",
      roles: [
        {
          title: "Reubicación a Chile",
          company: "Disponible para nuevas oportunidades — Coordinación de Proyectos, PMO y más",
          location: "Valparaíso, Chile",
          period: "Nov 2025 – Presente",
          highlights: [
            "Reubicación desde Canadá a Chile. Disponible para roles presenciales en Chile y Canadá (abierto a reubicación) y para roles remotos en cualquier parte del mundo, inglés y español.",
          ],
        },
        {
          title: "Especialista en Control de Calidad",
          company: "Toyota Boshoku Canada",
          location: "Woodstock, ON, Canadá",
          period: "Ago 2022 – Nov 2025",
          highlights: [
            "Realicé auditorías de cumplimiento programadas frente a estándares de seguridad locales e internacionales, documentando hallazgos y dando seguimiento a cada incidencia hasta su cierre",
            "Contribuí a iniciativas de mejora continua Lean — trabajo estandarizado, reducción de desperdicios y disciplina de procesos",
            "Responsable de la documentación y reportes de calidad de procesos críticos de seguridad — aplicando disciplina profesional de gobernanza y seguimiento de incidencias propia de una PMO",
            "Gestioné el seguimiento de acciones correctivas de principio a fin — escalando no conformidades y verificando su resolución mediante prácticas estructuradas de gestión RAID y de incidencias",
            "Facilité la capacitación integral y la integración de nuevos miembros del equipo en las metodologías internas y los estándares de prueba para inspección y cumplimiento normativo",
          ],
        },
        {
          title: "Coordinador de Proyectos — PMO",
          company: "Optimisa S.A.",
          location: "Santiago, Chile",
          period: "Feb 2012 – Jul 2021",
          highlights: [
            "Coordiné una cartera promedio de más de 20 proyectos de software simultáneos dentro de la PMO, además de 5 a 10 servicios recurrentes y permanentes, manteniendo visibilidad centralizada del estado de entrega, riesgos y dependencias entre proyectos",
            "La cartera incluía sistemas críticos de cara al cliente final — entre ellos redes nacionales de cajeros automáticos (ATM) y puntos de venta (POS) — utilizados a diario por toda la población bancarizada del país",
            "Responsable de la elaboración de reportes periódicos de hitos, estado y KPIs dirigidos a stakeholders y clientes, contribuyendo a una tasa de éxito de proyectos superior al 95% de la cartera",
            "Actué como enlace principal entre los clientes y los equipos internos de proyecto, traduciendo las necesidades del negocio en un alcance claro y gestionando expectativas durante todo el ciclo de entrega",
            "Mantuve registros RAID y documentación de entrega, estandarizando el seguimiento de estado y el escalamiento de incidencias en la PMO",
            "Colaboré con los líderes de proyecto en la planificación, priorización y asignación de recursos para cumplir los plazos y el presupuesto",
          ],
        },
        {
          title: "Jefe de Proyecto Junior",
          company: "Ministerio de Salud de Chile — Departamento de TI",
          location: "Santiago, Chile",
          period: "Abr 2011 – Dic 2011",
          highlights: [
            "Coordiné la entrega de proyectos de software en múltiples entidades gubernamentales de salud, alineando plazos y entregables entre equipos distribuidos",
            "Gestioné la comunicación entre interesados interdisciplinarios del sector público, manteniendo a todas las partes alineadas en alcance, estado y dependencias",
            "Mejoré las prácticas de planificación, seguimiento y documentación para fortalecer la confiabilidad de entrega y la transparencia en la reportería",
          ],
        },
        {
          title: "Asistente de Jefatura de Proyecto",
          company: "TInet Informatics Solutions",
          location: "Santiago, Chile",
          period: "Sep 2010 – Mar 2011",
          highlights: [
            "Apoyé un proceso de adjudicación de proveedores para un banco importante, realizando revisiones de documentación y verificaciones de cumplimiento frente a las bases de licitación",
            "Consolidé hallazgos en resúmenes estructurados y registros de incidencias para apoyar la toma de decisiones de adquisición",
          ],
        },
      ],
    },
    tools: {
      heading: "Herramientas y Métodos",
      subtitle: "Dominio de herramientas y metodologías estándar de la industria para una entrega efectiva de proyectos",
      categories: [
        {
          category: "Gestión / Colaboración",
          tools: ["Jira", "Confluence", "Trello", "Slack", "MS Teams", "MS Project"],
        },
        {
          category: "Modelado / Documentación",
          tools: ["Visio", "UML", "Mermaid", "PlantUML"],
        },
        {
          category: "Prácticas de Entrega",
          tools: ["Ágil/Scrum", "Cascada", "Lean", "Seguimiento de Hitos", "Registros RAID", "Reportería de KPIs"],
        },
      ],
    },
    education: {
      heading: "Educación y Formación",
      items: [
        {
          title: "Ingeniería de Ejecución en Informática",
          subtitle: "Ingeniería de Software",
          institution: "Pontificia Universidad Católica de Valparaíso (Chile)",
          year: "2010",
        },
        {
          title: "Gestión de Proyectos TI",
          subtitle: "Certificación",
          institution: "Universidad Técnica Federico Santa María (Chile)",
          year: "2018",
        },
        {
          title: "Taller de Metodologías Scrum y Ágiles",
          subtitle: "Certificación",
          institution: "Optimisa S.A.",
          year: "2019",
        },
      ],
      languagesHeading: "Idiomas",
      languages: [
        { language: "Español", level: "Nativo" },
        { language: "Inglés", level: "Competencia profesional\nIELTS 2021" },
      ],
    },
    contact: {
      heading: "Pongámonos en contacto",
      subtitle:
        "Disponible para nuevas oportunidades en cualquier área — mis habilidades de coordinación, entrega e interpersonales se traducen fácilmente más allá de TI y la gestión de proyectos",
      locationLabel: "Valparaíso, Chile",
      rights: "Todos los derechos reservados.",
    },
  },
};
