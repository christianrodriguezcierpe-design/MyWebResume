import { 
  Target, 
  BarChart3, 
  Users, 
  Repeat, 
  FileText, 
  TrendingUp 
} from "lucide-react";

const competencies = [
  {
    icon: Target,
    title: "Project Coordination",
    description: "Scope, schedule, risks, and dependency management across complex portfolios"
  },
  {
    icon: BarChart3,
    title: "PMO Reporting",
    description: "Status tracking, milestone monitoring, KPIs, and executive-level updates"
  },
  {
    icon: Users,
    title: "Stakeholder Management",
    description: "Liaison between clients, leadership, and cross-functional delivery teams"
  },
  {
    icon: Repeat,
    title: "Agile & Waterfall",
    description: "Ceremonies, sprint planning, tracking, and traditional delivery support"
  },
  {
    icon: FileText,
    title: "Documentation & Governance",
    description: "Minutes, action items, audits, and compliance with standards"
  },
  {
    icon: TrendingUp,
    title: "Process Improvement",
    description: "Quality mindset, continuous improvement, and compliance-oriented execution"
  }
];

const Competencies = () => {
  return (
    <section className="py-20 bg-secondary/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Core Competencies
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A proven track record of delivering results through structured project management and stakeholder collaboration
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {competencies.map((comp, index) => (
            <div 
              key={comp.title}
              className="bg-card p-6 rounded-lg shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <comp.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2 font-sans">
                {comp.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {comp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Competencies;
