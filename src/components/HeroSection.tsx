
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ChevronRight, ArrowRight, Search } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

const HeroSection = () => {
  // Sample integrations data - this would typically come from an API
  const integrations = [
    { name: "OpenAI API", status: "Active", icon: "🤖" },
    { name: "Salesforce", status: "Active", icon: "☁️" },
    { name: "Slack", status: "Active", icon: "💬" },
    { name: "Google Sheets", status: "Active", icon: "📊" },
    { name: "GitHub", status: "Active", icon: "🐙" },
    { name: "Notion", status: "Active", icon: "📝" },
    { name: "Airtable", status: "Active", icon: "📋" },
    { name: "Zapier", status: "Active", icon: "⚡" },
    { name: "HubSpot", status: "Active", icon: "🔄" },
    { name: "Twilio", status: "Active", icon: "📱" },
    { name: "Zoom", status: "Active", icon: "🎥" },
    { name: "Microsoft Teams", status: "Active", icon: "👥" }
  ];

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
              <div className="bg-muted p-3 flex items-center space-x-2 border-b border-border">
                <div className="flex space-x-1">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-sm font-medium text-foreground/80 flex-1 text-center">
                  ACI Integration Dashboard
                </div>
              </div>
              <div className="p-4 space-y-3">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <h3 className="text-base font-semibold">Active Integrations</h3>
                    <div className="flex items-center gap-2">
                      <div className="relative">
                        <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
                        <input 
                          type="text" 
                          placeholder="Filter..." 
                          className="pl-8 h-7 text-xs rounded-md border border-input w-32 bg-background"
                        />
                      </div>
                      <Button variant="ghost" size="sm" className="text-accent flex items-center text-xs h-7 px-2">
                        View All <ArrowRight className="ml-1 h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                  
                  <ScrollArea className="h-[190px] rounded-md border">
                    <div className="grid grid-cols-2 gap-1.5 p-2">
                      {integrations.map((integration, i) => (
                        <div
                          key={i}
                          className="flex items-center p-1.5 bg-background rounded-md border border-border hover:bg-muted/50 transition-colors"
                        >
                          <div className="w-6 h-6 flex items-center justify-center bg-accent/10 rounded text-sm mr-2">
                            {integration.icon}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-xs font-medium truncate">{integration.name}</div>
                          </div>
                          <div className="flex items-center ml-1">
                            <div className="w-1.5 h-1.5 rounded-full bg-green-500 mr-1"></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                  
                  <div className="text-xs text-muted-foreground text-center">
                    <span className="font-medium">300+</span> integrations available
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
