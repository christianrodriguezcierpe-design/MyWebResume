const experiences = [
  {
    title: "Quality Control Specialist",
    company: "Toyota Canada",
    location: "Woodstock, ON",
    period: "Aug 2022 – Dec 2024",
    highlights: [
      "Conducted critical scheduled audits verifying compliance with local and international safety regulations",
      "Executed quality control tests ensuring products met specification requirements in welding/robotic operations",
      "Documented findings, escalated issues, and supported corrective actions with follow-up",
      "Trained new team members on testing procedures for critical safety features"
    ]
  },
  {
    title: "Project Coordinator (Software Engineer)",
    company: "Optimisa S.A., PMO",
    location: "Santiago, Chile",
    period: "Feb 2012 – Jul 2021",
    highlights: [
      "Tracked and monitored multi-project portfolio maintaining visibility across delivery status, risks, and dependencies",
      "Facilitated weekly milestone/status/KPI reporting for leadership, contributing to >95% success rate",
      "Acted as liaison between clients and internal teams to clarify needs and manage expectations",
      "Supported project leaders with planning and prioritization to meet delivery timelines and budget"
    ]
  },
  {
    title: "Jr. Project Manager (Software Engineer)",
    company: "Chilean Health Ministry, IT Department",
    location: "Santiago, Chile",
    period: "Apr 2011 – Dec 2011",
    highlights: [
      "Coordinated execution and fulfillment of software projects across multiple government health entities",
      "Managed communications across interdisciplinary stakeholders maintaining alignment on delivery status",
      "Supported planning, tracking, and documentation to improve delivery reliability and transparency"
    ]
  },
  {
    title: "Project Manager Assistant",
    company: "TInet Informatics Solutions",
    location: "Santiago, Chile",
    period: "Sep 2010 – Mar 2011",
    highlights: [
      "Supported vendor adjudication process for a major bank with documentation reviews and compliance checks",
      "Consolidated findings and supported decision-making with structured summaries and issue tracking"
    ]
  }
];

const Experience = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Professional Experience
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A decade of delivering software projects across banking, healthcare, and manufacturing sectors
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-border" />
            
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-accent rounded-full border-4 border-background shadow-card" />
                
                {/* Content */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12 md:text-right'} pl-8 md:pl-0`}>
                  <div className={`bg-card p-6 rounded-lg shadow-card hover:shadow-card-hover transition-all duration-300 ${
                    index % 2 === 0 ? '' : 'md:ml-auto'
                  }`}>
                    <span className="text-accent font-medium text-sm">{exp.period}</span>
                    <h3 className="text-xl font-bold text-foreground mt-1 font-sans">{exp.title}</h3>
                    <p className="text-muted-foreground font-medium">{exp.company}</p>
                    <p className="text-muted-foreground/70 text-sm mb-4">{exp.location}</p>
                    
                    <ul className={`space-y-2 text-sm text-muted-foreground ${index % 2 === 0 ? '' : 'md:text-left'}`}>
                      {exp.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-accent mt-1.5 shrink-0">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
