import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    id: "connect",
    title: "Connect",
    description: "Easily connect your AI applications with our easy integration interface",
    content: {
      title: "Connect your AI app to external services in minutes",
      description:
        "Integration has never been easier. Our platform provides simple, secure connections to all your essential services without any coding required.",
      image: "/photo-1487058792275-0ad4aaf24ca7.jpg",
      features: [
        "200+ pre-built integrations",
        "Secure OAuth authentication",
        "Real-time connection status monitoring",
      ],
    },
  },
  {
    id: "build",
    title: "Build",
    description: "Design custom workflows using our visual workflow builder",
    content: {
      title: "Create powerful workflows with our visual builder",
      description:
        "Drag and drop to create complex integration workflows. Test in real-time and deploy with confidence.",
      image: "/photo-1486312338219-ce68d2c6f44d.jpg",
      features: [
        "Intuitive drag-and-drop interface",
        "Conditional logic and branching",
        "Custom error handling and retries",
      ],
    },
  },
  {
    id: "deploy",
    title: "Deploy",
    description: "Deploy and monitor your integrations in production",
    content: {
      title: "Deploy globally with enterprise-grade reliability",
      description:
        "With a single click, deploy your integrations to our global infrastructure with automatic scaling and load balancing.",
      image: "/photo-1531297484001-80022131f5a1.jpg",
      features: [
        "Automatic version control",
        "Zero-downtime deployment",
        "Activity logs and monitoring dashboards",
      ],
    },
  },
];

const HowItWorksSection = () => {
  const [activeTab, setActiveTab] = useState("connect");

  return (
    <section id="how-it-works" className="py-24 bg-muted">
      <div className="container max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text inline-block">
            How it works
          </h2>
          <p className="text-xl text-foreground/70">
            Get your AI applications connected in just three simple steps
          </p>
        </div>

        <Tabs
          defaultValue="connect"
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full"
        >
          <div className="flex justify-center mb-12">
            <TabsList className="grid grid-cols-3 w-full max-w-2xl">
              {steps.map((step, index) => (
                <TabsTrigger
                  key={step.id}
                  value={step.id}
                  className="relative data-[state=active]:text-accent"
                >
                  <div className="flex flex-col items-center space-y-2">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                        activeTab === step.id
                          ? "bg-accent text-white"
                          : "bg-muted-foreground/20 text-foreground/70"
                      }`}
                    >
                      {index + 1}
                    </div>
                    <span className="font-medium">{step.title}</span>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="absolute left-full top-7 w-full h-0.5 bg-border -translate-y-1/2 -translate-x-1/2 md:block hidden">
                      <div
                        className={`h-full bg-accent transition-all ${
                          steps.findIndex((s) => s.id === activeTab) > index
                            ? "w-full"
                            : "w-0"
                        }`}
                      />
                    </div>
                  )}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {steps.map((step) => (
            <TabsContent
              key={step.id}
              value={step.id}
              className="mt-6 animate-fade-in"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/20 text-sm font-medium">
                    Step {steps.findIndex((s) => s.id === step.id) + 1}: {step.title}
                  </div>
                  <h3 className="text-3xl font-bold">{step.content.title}</h3>
                  <p className="text-lg text-foreground/70">
                    {step.content.description}
                  </p>
                  <ul className="space-y-3">
                    {step.content.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <div className="mr-3 text-accent">
                          <Check className="h-5 w-5" />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="mt-4 bg-accent hover:bg-accent/90">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <div className="bg-white rounded-xl shadow-lg p-2 border border-border animate-float">
                  <img
                    src={step.content.image}
                    alt={step.title}
                    className="rounded-lg w-full h-auto"
                  />
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default HowItWorksSection;

function Check(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}
