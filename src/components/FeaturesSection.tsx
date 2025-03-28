
import { Check, Zap, Globe, Shield, Cpu, Link } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: <Zap className="h-10 w-10 text-accent" />,
    title: "Simple Integration",
    description: "Connect to over 200+ platforms and services without writing any code. Just point, click, and integrate.",
  },
  {
    icon: <Globe className="h-10 w-10 text-accent" />,
    title: "Global Deployment",
    description: "Deploy your AI integrations globally with ultra-low latency, ensuring reliable performance worldwide.",
  },
  {
    icon: <Shield className="h-10 w-10 text-accent" />,
    title: "Enterprise Security",
    description: "Bank-level security with SOC 2 compliance, encryption at rest and in transit for all your data.",
  },
  {
    icon: <Cpu className="h-10 w-10 text-accent" />,
    title: "AI-Powered Automation",
    description: "Let AI handle routine tasks while your team focuses on what matters most to your business.",
  },
  {
    icon: <Link className="h-10 w-10 text-accent" />,
    title: "Custom Workflows",
    description: "Create sophisticated, multi-step workflows tailored to your specific business processes.",
  },
  {
    icon: <Check className="h-10 w-10 text-accent" />,
    title: "Real-time Monitoring",
    description: "Track all integration activities with advanced logging and real-time monitoring tools.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 bg-background">
      <div className="container max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text inline-block">
            Powerful features to supercharge your AI applications
          </h2>
          <p className="text-xl text-foreground/70">
            Everything you need to connect, automate, and scale your AI applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-6 border border-border/60 bg-card hover:bg-card/80 card-hover animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="h-14 w-14 rounded-lg bg-accent/10 flex items-center justify-center mb-5">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-foreground/70">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
