
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ChevronRight, ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 overflow-hidden hero-gradient">
      <div className="container max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/20 text-sm font-medium mb-2">
                <span className="animate-wave mr-2">👋</span>
                <span>Automations for AI apps</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tighter animate-fade-in">
                <span className="gradient-text">AI-powered</span> integrations for your applications
              </h1>
              <p className="text-xl text-foreground/80 animate-fade-in animate-delay-100">
                Connect your AI applications with hundreds of external services without writing a line of code. Build workflows, automate tasks, and integrate your AI systems with your existing tech stack.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in animate-delay-200">
              <Button className="text-lg px-8 py-6 bg-accent hover:bg-accent/90 shadow-lg hover:shadow-xl transition-all group">
                Get Started Free
                <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" className="text-lg px-8 py-6">
                Book a Demo
              </Button>
            </div>
            <div className="flex items-center space-x-4 animate-fade-in animate-delay-300">
              <div className="flex -space-x-2">
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="User"
                  className="w-8 h-8 rounded-full border-2 border-background"
                />
                <img
                  src="https://randomuser.me/api/portraits/men/46.jpg"
                  alt="User"
                  className="w-8 h-8 rounded-full border-2 border-background"
                />
                <img
                  src="https://randomuser.me/api/portraits/women/45.jpg"
                  alt="User"
                  className="w-8 h-8 rounded-full border-2 border-background"
                />
              </div>
              <div className="text-sm text-foreground/80">
                <span className="font-medium">500+</span> developers trust ACI.dev
              </div>
            </div>
          </div>
          <div className="relative animate-float">
            <div className="absolute inset-0 bg-gradient-radial from-accent/20 to-transparent opacity-70 blur-3xl -z-10"></div>
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-border animate-fade-in">
              <div className="bg-muted p-4 flex items-center space-x-2 border-b border-border">
                <div className="flex space-x-1">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-sm font-medium text-foreground/80 flex-1 text-center">
                  ACI Integration Dashboard
                </div>
              </div>
              <div className="p-6 space-y-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold">Active Integrations</h3>
                    <Button variant="ghost" size="sm" className="text-accent flex items-center text-sm">
                      View All <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                  <div className="space-y-3">
                    {[
                      { name: "OpenAI API", status: "Active", icon: "🤖" },
                      { name: "Salesforce", status: "Active", icon: "☁️" },
                      { name: "Slack Notifications", status: "Active", icon: "💬" },
                    ].map((integration, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between p-3 bg-background rounded-lg border border-border"
                      >
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 flex items-center justify-center bg-accent/10 rounded-md text-xl">
                            {integration.icon}
                          </div>
                          <div>
                            <div className="font-medium">{integration.name}</div>
                            <div className="text-xs text-foreground/60">Last triggered: 5m ago</div>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                          <span className="text-sm text-foreground/80">{integration.status}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
