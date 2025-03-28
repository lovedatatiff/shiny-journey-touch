
import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Zap, Globe, Shield, Cpu, Link, ArrowRight, Code, Database, GitBranch, Sparkles, Star, Rocket, Play, Clock, BarChart } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

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
  onComplete: () => void;
}

const DemoCard = ({ feature, isActive, onComplete }: DemoCardProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const { toast } = useToast();
  
  useEffect(() => {
    if (!isActive) {
      setCurrentStep(0);
      return;
    }
    
    const timer = setTimeout(() => {
      if (currentStep < feature.demo.steps.length - 1) {
        setCurrentStep(prevStep => prevStep + 1);
      } else if (currentStep === feature.demo.steps.length - 1) {
        onComplete();
        toast({
          title: "🎉 Feature unlocked!",
          description: `You've mastered the ${feature.title} feature.`,
          className: "bg-accent text-white",
        });
      }
    }, 1500);
    
    return () => clearTimeout(timer);
  }, [currentStep, isActive, feature, onComplete, toast]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 20 }}
      transition={{ duration: 0.3 }}
      className={`absolute inset-0 bg-gradient-to-br from-card to-card/95 rounded-lg shadow-lg border border-border p-6 ${
        isActive ? "pointer-events-auto" : "pointer-events-none"
      }`}
    >
      <div className="absolute top-3 right-3 bg-accent/10 text-accent px-2 py-1 rounded-full text-xs font-medium flex items-center">
        <Clock className="h-3 w-3 mr-1" />
        Demo in progress
      </div>
      
      <h3 className="text-xl font-semibold mb-4 flex items-center">
        <span className="mr-2">{feature.title}</span>
        <span className="text-accent animate-pulse">
          <Play className="h-4 w-4" />
        </span>
      </h3>
      
      <div className="mb-6">
        <div className="w-full bg-muted rounded-full h-2 mb-2">
          <motion.div 
            className="bg-accent h-2 rounded-full" 
            initial={{ width: "0%" }}
            animate={{ width: `${(currentStep + 1) / feature.demo.steps.length * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
        <div className="text-xs text-muted-foreground">
          Step {currentStep + 1} of {feature.demo.steps.length}
        </div>
      </div>
      
      <div className="space-y-4">
        {feature.demo.steps.map((step, idx) => (
          <motion.div 
            key={idx} 
            className={`flex items-center gap-3 p-3 rounded-md ${
              idx === currentStep 
                ? "bg-accent/10 border border-accent/20" 
                : idx < currentStep 
                  ? "bg-muted/50 text-muted-foreground" 
                  : "opacity-50"
            }`}
            animate={idx === currentStep ? { 
              scale: [1, 1.02, 1],
              transition: { repeat: Infinity, duration: 2 } 
            } : {}}
          >
            <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${
              idx < currentStep 
                ? "bg-green-500 text-white" 
                : idx === currentStep 
                  ? "bg-accent text-white animate-pulse" 
                  : "bg-muted text-muted-foreground"
            }`}>
              {idx < currentStep ? <Check className="h-3 w-3" /> : idx + 1}
            </div>
            <p className={`text-sm ${idx === currentStep ? "font-medium" : ""}`}>{step}</p>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-6 pt-4 border-t border-border">
        <div className="flex items-center justify-between">
          <div className="text-sm text-muted-foreground">
            <span className="font-medium">{feature.demo.steps.length - currentStep}</span> steps remaining
          </div>
          <Button 
            size="sm" 
            variant="outline"
            className="border-accent text-accent hover:bg-accent hover:text-white transition-all"
            onClick={() => {
              if (currentStep < feature.demo.steps.length - 1) {
                setCurrentStep(prevStep => prevStep + 1);
              } else {
                onComplete();
              }
            }}
          >
            Skip ahead <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

const integrationExamples = [
  { name: "OpenAI", icon: <Sparkles className="h-5 w-5" />, category: "AI" },
  { name: "Salesforce", icon: <Database className="h-5 w-5" />, category: "CRM" },
  { name: "Slack", icon: <Code className="h-5 w-5" />, category: "Communication" },
  { name: "GitHub", icon: <GitBranch className="h-5 w-5" />, category: "Development" },
  { name: "Notion", icon: <Code className="h-5 w-5" />, category: "Productivity" },
  { name: "Stripe", icon: <Database className="h-5 w-5" />, category: "Payments" },
  { name: "HubSpot", icon: <Database className="h-5 w-5" />, category: "Marketing" },
  { name: "Zoom", icon: <Code className="h-5 w-5" />, category: "Communication" },
];

const FeaturesSection = () => {
  const [activeTab, setActiveTab] = useState("nocode");
  const [unlockedFeatures, setUnlockedFeatures] = useState<string[]>([]);
  const [progress, setProgress] = useState(0);
  const { toast } = useToast();
  
  useEffect(() => {
    // Calculate progress based on unlocked features
    const newProgress = Math.round((unlockedFeatures.length / features.length) * 100);
    setProgress(newProgress);
  }, [unlockedFeatures]);

  const handleUnlockFeature = (featureId: string) => {
    if (!unlockedFeatures.includes(featureId)) {
      setUnlockedFeatures(prev => {
        const newUnlocked = [...prev, featureId];
        if (newUnlocked.length === features.length) {
          // Unlocked all features
          toast({
            title: "🚀 All features unlocked!",
            description: "You've explored all our features. Ready to get started?",
            className: "bg-green-600 text-white",
          });
        }
        return newUnlocked;
      });
    }
  };

  const activeFeature = features.find(f => f.id === activeTab) || features[0];

  return (
    <section id="features" className="py-24 bg-background relative">
      {/* Floating achievement notification */}
      {progress >= 50 && progress < 100 && (
        <div className="fixed bottom-4 right-4 bg-accent text-white p-4 rounded-lg shadow-lg z-50 animate-bounce">
          <div className="flex items-center gap-2">
            <Star className="h-5 w-5 text-yellow-300" />
            <div>
              <p className="font-bold">Half-way there!</p>
              <p className="text-sm">Keep exploring to unlock all features</p>
            </div>
          </div>
        </div>
      )}
      
      <div className="container max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold gradient-text inline-block"
          >
            Build powerful integrations in minutes, not months
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-foreground/70"
          >
            Everything you need to connect, automate, and scale your AI applications
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-6 bg-muted p-2 rounded-full mx-auto w-full max-w-xs"
          >
            <div className="relative pt-1">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-semibold inline-block text-accent">
                    {progress}% Complete
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-xs font-semibold inline-block text-foreground/70">
                    {unlockedFeatures.length}/{features.length} Features
                  </span>
                </div>
              </div>
              <div className="overflow-hidden h-2 mb-1 text-xs flex rounded-full bg-muted">
                <motion.div 
                  initial={{ width: "0%" }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.5 }}
                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-accent"
                />
              </div>
            </div>
          </motion.div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-12">
          <TabsList className="grid grid-cols-3 md:grid-cols-6 w-full">
            {features.map((feature) => (
              <TabsTrigger 
                key={feature.id} 
                value={feature.id}
                onClick={() => {}}
                className="flex flex-col items-center p-3 text-center data-[state=active]:text-accent relative"
              >
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-2 rounded-lg mb-2 transition-colors ${
                    activeTab === feature.id ? 'bg-accent/20' : 'bg-background'
                  }`}
                >
                  {feature.icon}
                </motion.div>
                <span className="text-xs md:text-sm">{feature.title}</span>
                {unlockedFeatures.includes(feature.id) && (
                  <motion.span 
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="absolute -top-1 -right-1 text-green-500 bg-white rounded-full border border-green-500"
                  >
                    <Check className="h-4 w-4" />
                  </motion.span>
                )}
              </TabsTrigger>
            ))}
          </TabsList>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div 
              key={activeTab}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
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
                    whileHover={{ x: 5 }}
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
                  {integrationExamples.filter((_, idx) => idx < 4).map((integration, idx) => (
                    <motion.div 
                      key={idx}
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(135, 120, 245, 0.2)" }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 bg-muted px-3 py-1.5 rounded-full text-sm cursor-pointer"
                    >
                      {integration.icon}
                      <span>{integration.name}</span>
                    </motion.div>
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
              
              <div className="flex gap-4">
                <Button className="bg-accent hover:bg-accent/90 group">
                  Try {activeFeature.title} 
                  <Rocket className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-white">
                  Watch demo <Play className="ml-2 h-4 w-4" />
                </Button>
              </div>
              
              {unlockedFeatures.includes(activeFeature.id) && (
                <div className="flex items-center p-3 bg-green-50 text-green-800 rounded-md border border-green-200">
                  <Star className="h-5 w-5 text-yellow-500 mr-2" />
                  <span>You've unlocked this feature! Try it out in our sandbox.</span>
                </div>
              )}
            </motion.div>
            
            <div className="relative h-[400px] bg-card/50 rounded-lg border border-border overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-accent/5"></div>
              
              <AnimatePresence>
                {features.map((feature) => (
                  <DemoCard 
                    key={feature.id}
                    feature={feature}
                    isActive={activeTab === feature.id}
                    onComplete={() => handleUnlockFeature(feature.id)}
                  />
                ))}
              </AnimatePresence>
              
              <div className="absolute bottom-4 right-4 bg-background/80 backdrop-blur-sm rounded-lg p-2 border border-border">
                <div className="flex items-center gap-2">
                  <BarChart className="h-4 w-4 text-accent" />
                  <div className="text-xs">
                    <div className="font-medium">{unlockedFeatures.length} of {features.length} features unlocked</div>
                    <div className="text-muted-foreground">Interactive demos completed: {(progress/100 * features.length).toFixed(1)}/6</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Tabs>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 p-6 bg-gradient-to-r from-accent/5 to-accent/10 rounded-lg border border-border"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-semibold">Ready to explore all features?</h3>
              <p className="text-foreground/70 mt-2">Create a free account and unlock the full power of ACI.dev</p>
            </div>
            <div className="flex gap-4">
              <Button variant="outline">View Documentation</Button>
              <Button className="bg-accent hover:bg-accent/90 group relative overflow-hidden">
                <span className="relative z-10 flex items-center">
                  Start Building Free <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-accent to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
