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

export interface SiteContent {
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
    hero: {
      greeting: "Hello, I'm",
      role: "Project Coordinator & PMO Specialist",
      summary:
        "10+ years coordinating software delivery across banking, public sector, and automotive — from PMO portfolio tracking and executive reporting to stakeholder alignment and delivery governance. Detail-driven, compliance-minded, and comfortable in both Agile and Waterfall.",
      location: "Valparaíso, Chile",
    },
    competencies: {
      heading: "Core Competencies",
      subtitle:
        "A proven track record of delivering results through structured project management and stakeholder collaboration",
      items: [
        {
          title: "Project Coordination",
          description: "Scope, schedule, risks, and dependency management across complex portfolios",
        },
        {
          title: "PMO Reporting",
          description: "Status tracking, milestone monitoring, KPIs, and executive-level updates",
        },
        {
          title: "Stakeholder Management",
          description: "Liaison between clients, leadership, and cross-functional delivery teams",
        },
        {
          title: "Agile & Waterfall",
          description: "Ceremonies, sprint planning, tracking, and traditional delivery support",
        },
        {
          title: "Documentation & Governance",
          description: "Minutes, action items, audits, and compliance with standards",
        },
        {
          title: "Process Improvement",
          description: "Lean mindset, continuous improvement, and compliance-oriented execution",
        },
      ],
    },
    experience: {
      heading: "Professional Experience",
      subtitle: "A decade of coordinating software delivery across banking, public sector, and automotive",
      roles: [
        {
          title: "Career Transition — Relocation to Chile",
          company: "Open to Project Coordinator / PMO roles",
          location: "Valparaíso, Chile",
          period: "Nov 2025 – Present",
          highlights: [
            "Relocated from Canada to Chile. Open to on-site roles in Chile or Canada (open to relocation), and to remote roles worldwide in English or Spanish.",
          ],
        },
        {
          title: "Quality Control Specialist",
          company: "Toyota Boshoku Canada",
          location: "Woodstock, ON, Canada",
          period: "Aug 2022 – Nov 2025",
          highlights: [
            "Conducted scheduled compliance audits against local and international safety standards, documenting findings and tracking each issue through to closure",
            "Contributed to Lean continuous-improvement initiatives — standardized work, waste reduction, and process discipline on the production line",
            "Owned quality documentation and reporting for critical safety processes — applying the same governance discipline used in PMO status and issue tracking",
            "Managed corrective-action follow-up end to end: escalated non-conformances and verified resolution (directly analogous to RAID / issue management)",
            "Trained new team members on standardized testing and inspection procedures",
          ],
        },
        {
          title: "Project Coordinator — PMO",
          company: "Optimisa S.A.",
          location: "Santiago, Chile",
          period: "Feb 2012 – Jul 2021",
          highlights: [
            "Coordinated an average portfolio of 20+ concurrent software projects within the PMO, plus 5-10 recurring, ongoing services, maintaining single-source visibility over delivery status, risks, and cross-project dependencies",
            "Produced weekly milestone, status, and KPI reporting for leadership and clients, supporting a >95% project success rate across the portfolio",
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
          tools: ["Jira", "Confluence", "Trello", "Slack", "MS Project", "MS Office"],
        },
        {
          category: "Modeling / Documentation",
          tools: ["UML", "Visio", "Enterprise Architect"],
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
          subtitle: "Minor: Software Engineering",
          institution: "Pontificia Universidad Católica de Valparaíso",
          year: "2010",
        },
        {
          title: "IT Project Management",
          subtitle: "PMBOK® Guide 5th Edition-based",
          institution: "Federico Santa María Technical University",
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
        { language: "English", level: "IELTS 6.0 (B2) • EAP Level 9" },
      ],
    },
    contact: {
      heading: "Let's Connect",
      subtitle: "Open to Project Coordinator and PMO opportunities",
      locationLabel: "Valparaíso, Chile",
      rights: "All rights reserved.",
    },
  },

  es: {
    hero: {
      greeting: "Hola, soy",
      role: "Coordinador de Proyectos y Especialista PMO",
      summary:
        "Más de 10 años coordinando la entrega de software en banca, sector público y automotriz — desde el seguimiento de portafolios y la reportería ejecutiva en la PMO hasta la alineación de interesados y la gobernanza de entregas. Orientado al detalle, con foco en el cumplimiento y cómodo tanto en Ágil como en Cascada.",
      location: "Valparaíso, Chile",
    },
    competencies: {
      heading: "Competencias Clave",
      subtitle:
        "Un historial comprobado de resultados a través de la gestión estructurada de proyectos y la colaboración con los interesados",
      items: [
        {
          title: "Coordinación de Proyectos",
          description: "Gestión de alcance, cronograma, riesgos y dependencias en portafolios complejos",
        },
        {
          title: "Reportería PMO",
          description: "Seguimiento de estado, monitoreo de hitos, KPIs y actualizaciones a nivel ejecutivo",
        },
        {
          title: "Gestión de Interesados",
          description: "Enlace entre clientes, liderazgo y equipos de entrega multifuncionales",
        },
        {
          title: "Ágil y Cascada",
          description: "Ceremonias, planificación de sprints, seguimiento y soporte a entregas tradicionales",
        },
        {
          title: "Documentación y Gobernanza",
          description: "Minutas, elementos de acción, auditorías y cumplimiento de estándares",
        },
        {
          title: "Mejora de Procesos",
          description: "Mentalidad Lean, mejora continua y ejecución orientada al cumplimiento",
        },
      ],
    },
    experience: {
      heading: "Experiencia Profesional",
      subtitle: "Una década coordinando la entrega de software en banca, sector público y automotriz",
      roles: [
        {
          title: "Transición Profesional — Reubicación a Chile",
          company: "Disponible para roles de Coordinación de Proyectos / PMO",
          location: "Valparaíso, Chile",
          period: "Nov 2025 – Presente",
          highlights: [
            "Reubicación desde Canadá a Chile. Disponible para roles presenciales en Chile o Canadá (abierto a reubicación) y para roles remotos en cualquier parte del mundo, en inglés o español.",
          ],
        },
        {
          title: "Especialista en Control de Calidad",
          company: "Toyota Boshoku Canada",
          location: "Woodstock, ON, Canadá",
          period: "Ago 2022 – Nov 2025",
          highlights: [
            "Realicé auditorías de cumplimiento programadas frente a estándares de seguridad locales e internacionales, documentando hallazgos y dando seguimiento a cada incidencia hasta su cierre",
            "Contribuí a iniciativas de mejora continua Lean — trabajo estandarizado, reducción de desperdicios y disciplina de procesos en la línea de producción",
            "Responsable de la documentación y reportería de calidad de procesos críticos de seguridad — aplicando la misma disciplina de gobernanza usada en el seguimiento de estado e incidencias en la PMO",
            "Gestioné el seguimiento de acciones correctivas de principio a fin: escalé no conformidades y verifiqué su resolución (directamente análogo a la gestión RAID / de incidencias)",
            "Capacité a nuevos integrantes del equipo en procedimientos estandarizados de prueba e inspección",
          ],
        },
        {
          title: "Coordinador de Proyectos — PMO",
          company: "Optimisa S.A.",
          location: "Santiago, Chile",
          period: "Feb 2012 – Jul 2021",
          highlights: [
            "Coordiné una cartera promedio de más de 20 proyectos de software simultáneos dentro de la PMO, además de 5 a 10 servicios recurrentes y permanentes, manteniendo visibilidad centralizada del estado de entrega, riesgos y dependencias entre proyectos",
            "Elaboré reportería semanal de hitos, estado y KPIs para el liderazgo y los clientes, contribuyendo a una tasa de éxito de proyectos superior al 95% en la cartera",
            "Actué como enlace principal entre los clientes y los equipos internos de entrega, traduciendo las necesidades del negocio en un alcance claro y gestionando expectativas durante todo el ciclo de entrega",
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
          tools: ["Jira", "Confluence", "Trello", "Slack", "MS Project", "MS Office"],
        },
        {
          category: "Modelado / Documentación",
          tools: ["UML", "Visio", "Enterprise Architect"],
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
          title: "Ingeniería en Computación (B.Sc.)",
          subtitle: "Mención: Ingeniería de Software",
          institution: "Pontificia Universidad Católica de Valparaíso",
          year: "2010",
        },
        {
          title: "Gestión de Proyectos TI",
          subtitle: "Basado en la Guía PMBOK® 5.ª edición",
          institution: "Universidad Técnica Federico Santa María",
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
        { language: "Inglés", level: "IELTS 6.0 (B2) • EAP Nivel 9" },
      ],
    },
    contact: {
      heading: "Conversemos",
      subtitle: "Disponible para oportunidades de Coordinación de Proyectos y PMO",
      locationLabel: "Valparaíso, Chile",
      rights: "Todos los derechos reservados.",
    },
  },
};
