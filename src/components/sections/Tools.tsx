const toolCategories = [
  {
    category: "PM / Collaboration",
    tools: ["Jira", "Confluence", "Trello", "Slack", "MS Project", "MS Office"]
  },
  {
    category: "Modeling / Documentation",
    tools: ["UML", "Visio", "Enterprise Architect"]
  },
  {
    category: "Delivery Practices",
    tools: ["Agile/Scrum", "Milestone Tracking", "RAID Logs", "KPI Reporting"]
  }
];

const Tools = () => {
  return (
    <section className="py-20 bg-secondary/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Tools & Methods
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Proficient in industry-standard tools and methodologies for effective project delivery
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {toolCategories.map((cat, index) => (
            <div 
              key={cat.category}
              className="text-center"
            >
              <h3 className="text-lg font-semibold text-foreground mb-4 font-sans">
                {cat.category}
              </h3>
              <div className="flex flex-wrap justify-center gap-2">
                {cat.tools.map((tool) => (
                  <span 
                    key={tool}
                    className="px-3 py-1.5 bg-card text-muted-foreground text-sm rounded-full shadow-card hover:shadow-card-hover hover:text-accent transition-all duration-300"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;
