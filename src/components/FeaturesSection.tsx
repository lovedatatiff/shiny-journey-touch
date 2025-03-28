
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { Check, Zap, Globe, Shield, Cpu, Link, ArrowRight, Code, Database, GitBranch, Sparkles } from "lucide-react";

const features = [
  {
    id: "nocode",
    icon: <Zap className="h-10 w-10 text-accent" />,
    title: "No-Code Integration",
    description: "Connect to over 300+ platforms without writing a single line of code.",
    benefits: [
      "Drag-and-drop interface",
      "Pre-built templates",
      "Auto-validation of connections",
      "Visual workflow builder"
    ],
    demo: {
      title: "Point & Click Integration",
      steps: [
        "Select integration from marketplace",
        "Authenticate with OAuth",
        "Map data fields",
        "Test and deploy"
      ]
    }
  },
  {
    id: "global",
    icon: <Globe className="h-10 w-10 text-accent" />,
    title: "Global Deployment",
    description: "Deploy AI integrations globally with ultra-low latency performance.",
    benefits: [
      "Edge servers in 35+ regions",
      "99.99% uptime guarantee",
      "Auto-scaling infrastructure",
      "Real-time request monitoring"
    ],
    demo: {
      title: "Worldwide Performance",
      steps: [
        "Select regions for deployment",
        "Set performance parameters",
        "Monitor global latency stats",
        "Auto-scale during traffic spikes"
      ]
    }
  },
  {
    id: "security",
    icon: <Shield className="h-10 w-10 text-accent" />,
    title: "Enterprise Security",
    description: "Bank-level encryption and compliance for all your integrations.",
    benefits: [
      "SOC 2 Type II compliant",
      "End-to-end encryption",
      "Role-based access control",
      "Audit logs for all actions"
    ],
    demo: {
      title: "Security Controls",
      steps: [
        "Configure security policies",
        "Set up access controls",
        "Enable audit logging",
        "Schedule compliance reports"
      ]
    }
  },
  {
    id: "ai",
    icon: <Cpu className="h-10 w-10 text-accent" />,
    title: "AI-Powered Automation",
    description: "Let AI handle routine tasks and enhance human decision-making.",
    benefits: [
      "Smart data transformation",
      "Anomaly detection",
      "Predictive workflow triggers",
      "Natural language processing"
    ],
    demo: {
      title: "AI Assistants",
      steps: [
        "Train on your business data",
        "Create decision rules",
        "Set up alert thresholds",
        "Review AI recommendations"
      ]
    }
  },
  {
    id: "workflows",
    icon: <Link className="h-10 w-10 text-accent" />,
    title: "Intelligent Workflows",
    description: "Create sophisticated multi-step workflows with conditional logic.",
    benefits: [
      "Conditional branching",
      "Error handling built-in",
      "Scheduled triggers",
      "Parallel execution paths"
    ],
    demo: {
      title: "Workflow Builder",
      steps: [
        "Design workflow visually",
        "Add conditional logic",
        "Configure error handling",
        "Test and simulate execution"
      ]
    }
  },
  {
    id: "monitoring",
    icon: <Check className="h-10 w-10 text-accent" />,
    title: "Real-time Monitoring",
    description: "Track all integration activities with advanced analytics.",
    benefits: [
      "Real-time activity dashboards",
      "Custom alerting",
      "Error trend analysis",
      "Performance optimization"
    ],
    demo: {
      title: "Monitoring Console",
      steps: [
        "Set up custom dashboards",
        "Configure alert thresholds",
        "Review performance metrics",
        "Generate compliance reports"
      ]
    }
  },
];

interface DemoCardProps {
  feature: typeof features[0];
  isActive: boolean;
}

const DemoCard = ({ feature, isActive }: DemoCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 20 }}
      transition={{ duration: 0.3 }}
      className={`absolute inset-0 bg-card rounded-lg shadow-lg border border-border p-6 ${
        isActive ? "pointer-events-auto" : "pointer-events-none"
      }`}
    >
      <h3 className="text-xl font-semibold mb-4">{feature.demo.title}</h3>
      <div className="space-y-4">
        {feature.demo.steps.map((step, idx) => (
          <div key={idx} className="flex items-center gap-3">
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 text-accent flex items-center justify-center">
              {idx + 1}
            </div>
            <p className="text-sm">{step}</p>
          </div>
        ))}
      </div>
      <div className="mt-4 pt-4 border-t border-border">
        <Button size="sm" className="bg-accent hover:bg-accent/90 text-white">
          Try it yourself <ArrowRight className="ml-1 h-4 w-4" />
        </Button>
      </div>
    </motion.div>
  );
};

const integrationExamples = [
  { name: "OpenAI", icon: <Sparkles className="h-5 w-5" />, category: "AI" },
  { name: "Salesforce", icon: <Database className="h-5 w-5" />, category: "CRM" },
  { name: "Slack", icon: <Code className="h-5 w-5" />, category: "Communication" },
  { name: "GitHub", icon: <GitBranch className="h-5 w-5" />, category: "Development" },
];

const FeaturesSection = () => {
  const [activeTab, setActiveTab] = useState("nocode");
  const [unlockedFeatures, setUnlockedFeatures] = useState<string[]>([]);

  const handleUnlockFeature = (featureId: string) => {
    if (!unlockedFeatures.includes(featureId)) {
      setUnlockedFeatures([...unlockedFeatures, featureId]);
    }
  };

  const activeFeature = features.find(f => f.id === activeTab) || features[0];

  return (
    <section id="features" className="py-24 bg-background">
      <div className="container max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text inline-block">
            Build powerful integrations in minutes, not months
          </h2>
          <p className="text-xl text-foreground/70">
            Everything you need to connect, automate, and scale your AI applications
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-12">
          <TabsList className="grid grid-cols-3 md:grid-cols-6 w-full">
            {features.map((feature) => (
              <TabsTrigger 
                key={feature.id} 
                value={feature.id}
                onClick={() => handleUnlockFeature(feature.id)}
                className="flex flex-col items-center p-3 text-center data-[state=active]:text-accent"
              >
                <div className={`p-2 rounded-lg mb-2 ${
                  activeTab === feature.id ? 'bg-accent/20' : 'bg-background'
                }`}>
                  {feature.icon}
                </div>
                <span className="text-xs md:text-sm">{feature.title}</span>
                {unlockedFeatures.includes(feature.id) && (
                  <span className="absolute top-0 right-1 text-green-500">
                    <Check className="h-3 w-3" />
                  </span>
                )}
              </TabsTrigger>
            ))}
          </TabsList>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/20 text-sm font-medium">
                <span className="mr-2">{activeFeature.icon}</span>
                <span>{activeFeature.title}</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold">{activeFeature.description}</h3>
              
              <ul className="space-y-4">
                {activeFeature.benefits.map((benefit, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1, duration: 0.3 }}
                    className="flex items-start"
                  >
                    <div className="mr-3 text-accent">
                      <Check className="h-5 w-5" />
                    </div>
                    <span className="text-lg">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
              
              <div className="pt-4">
                <div className="text-sm font-medium mb-2">Popular integrations</div>
                <div className="flex flex-wrap gap-2">
                  {integrationExamples.map((integration, idx) => (
                    <div 
                      key={idx}
                      className="flex items-center gap-2 bg-muted px-3 py-1.5 rounded-full text-sm"
                    >
                      {integration.icon}
                      <span>{integration.name}</span>
                    </div>
                  ))}
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="px-3 py-1.5 h-auto rounded-full text-sm text-accent"
                  >
                    View all 300+ <ArrowRight className="ml-1 h-3 w-3" />
                  </Button>
                </div>
              </div>
              
              <Button className="bg-accent hover:bg-accent/90">
                Explore {activeFeature.title} <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            
            <div className="relative h-[400px] bg-card/50 rounded-lg border border-border overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-accent/5"></div>
              
              {features.map((feature) => (
                <DemoCard 
                  key={feature.id}
                  feature={feature}
                  isActive={activeTab === feature.id}
                />
              ))}
              
              <div className="absolute bottom-4 right-4">
                <div className="text-xs text-foreground/50">
                  {unlockedFeatures.length} of {features.length} features unlocked
                </div>
              </div>
            </div>
          </div>
        </Tabs>
        
        <div className="mt-12 p-6 bg-muted rounded-lg border border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-semibold">Ready to explore all features?</h3>
              <p className="text-foreground/70 mt-2">Create a free account and unlock the full power of ACI.dev</p>
            </div>
            <div className="flex gap-4">
              <Button variant="outline">View Documentation</Button>
              <Button className="bg-accent hover:bg-accent/90">
                Start Building Free <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
