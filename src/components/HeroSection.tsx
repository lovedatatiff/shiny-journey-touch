
import { Button } from "@/components/ui/button";
import { ChevronRight, ArrowRight, Search } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useEffect, useState } from "react";
import { Github, Calendar, FileText, MessageCircle, ShoppingBag, Youtube } from "lucide-react";

const HeroSection = () => {
  // Sample integrations data - this would typically come from an API
  const integrations = [
    { name: "OpenAI API", status: "Active", icon: "🤖" },
    { name: "Langchain", status: "Active", icon: "🔗" },
    { name: "Hugging Face", status: "Active", icon: "🤗" },
    { name: "Anthropic", status: "Active", icon: "🧠" },
    { name: "Vector DB", status: "Active", icon: "📊" },
    { name: "GitHub", status: "Active", icon: "🐙" },
    { name: "Notion", status: "Active", icon: "📝" },
    { name: "Postgres", status: "Active", icon: "🐘" },
    { name: "LlamaIndex", status: "Active", icon: "🦙" },
    { name: "Pinecone", status: "Active", icon: "🌲" },
    { name: "Supabase", status: "Active", icon: "⚡" },
    { name: "Mistral", status: "Active", icon: "🌬️" }
  ];

  const toolOptions = [
    { name: "Github", icon: <Github className="h-7 w-7 inline-block mr-1" /> },
    { name: "Google Calendar", icon: <Calendar className="h-7 w-7 inline-block mr-1" /> },
    { name: "HubSpot", icon: <div className="inline-flex items-center justify-center h-7 w-7 bg-orange-500 text-white rounded mr-1"><span className="font-bold">H</span></div> },
    { name: "Notion", icon: <FileText className="h-7 w-7 inline-block mr-1" /> },
    { name: "Discord", icon: <div className="inline-flex items-center justify-center h-7 w-7 bg-indigo-600 text-white rounded mr-1"><span>#</span></div> },
    { name: "Slack", icon: <MessageCircle className="h-7 w-7 inline-block mr-1" /> },
    { name: "Shopify", icon: <ShoppingBag className="h-7 w-7 inline-block mr-1" /> },
    { name: "YouTube", icon: <Youtube className="h-7 w-7 inline-block mr-1" /> },
    { name: "Any tool", icon: <div className="inline-flex items-center justify-center h-7 w-7 bg-cherry-blossom text-white rounded-full mr-1"><span className="font-bold">+</span></div> },
  ];

  const [currentToolIndex, setCurrentToolIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentToolIndex(prevIndex => (prevIndex + 1) % toolOptions.length);
    }, 2000); // Change tool every 2 seconds

    return () => clearInterval(interval);
  }, [toolOptions.length]);
  
  // New agent capabilities for rolling effect
  const agentCapabilities = [
    "Update CRMs",
    "Search for information",
    "Schedule meetings",
    "Send emails",
    "Get Twitter trends and automatically generate memecoins on pump.fun",
    "Update Notion",
    "Slack your colleague",
    "Add items to Shopify",
    "... sky is the limit"
  ];
  
  const [currentCapabilityIndex, setCurrentCapabilityIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCapabilityIndex(prevIndex => (prevIndex + 1) % agentCapabilities.length);
    }, 2500); // Change capability every 2.5 seconds
    
    return () => clearInterval(interval);
  }, [agentCapabilities.length]);

  // Rainbow colors array for the rolling text
  const rainbowColors = [
    "from-red-500 to-orange-500",
    "from-orange-500 to-yellow-500",
    "from-yellow-500 to-green-500",
    "from-green-500 to-blue-500",
    "from-blue-500 to-indigo-500",
    "from-indigo-500 to-purple-500",
    "from-purple-500 to-pink-500",
    "from-pink-500 to-red-500",
    "from-red-500 to-purple-500",
  ];

  return (
    <section className="pt-32 pb-20 overflow-hidden hero-gradient">
      <div className="container max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#6269D2]/10 text-[#6269D2] border border-[#6269D2]/20 text-sm font-medium mb-2">
                <span className="mr-2">👨‍💻</span>
                <span>Access developer portal</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tighter animate-fade-in">
                <span className="gradient-text">Connect LLM</span> to <span className="inline-flex items-center text-cherry-blossom">
                  <span className="animate-fade-in" key={currentToolIndex}>
                    {toolOptions[currentToolIndex].icon}
                    {toolOptions[currentToolIndex].name}
                  </span>
                </span>
              </h1>
              <p className="text-xl text-foreground/80 animate-fade-in animate-delay-100">
                Build smarter agents, faster.
              </p>
              <p className="text-lg text-foreground/70 animate-fade-in animate-delay-200 max-w-2xl">
                ACI.dev makes it easy for developers to build agents that can call APIs, browse the web, and interact with any third party applications, securely and seamlessly.
              </p>
              <p className="text-lg text-foreground/70 animate-fade-in animate-delay-300 max-w-2xl">
                No more messy logins or complicated permissions. With ACI.dev, your agents can:
              </p>
              <div className="h-14 overflow-hidden relative">
                {agentCapabilities.map((capability, index) => (
                  <div 
                    key={index}
                    className={`text-2xl font-bold absolute inset-0 flex items-center transition-opacity duration-300 bg-gradient-to-r ${rainbowColors[index % rainbowColors.length]} bg-clip-text text-transparent ${
                      index === currentCapabilityIndex ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    {capability}
                  </div>
                ))}
              </div>
              <p className="text-lg text-foreground/70 animate-fade-in animate-delay-500 max-w-2xl">
                All with smooth, cross-platform authentication.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in animate-delay-200">
              <Button className="text-lg px-8 py-6 bg-[#6269D2] hover:bg-[#646CD2] shadow-lg hover:shadow-xl transition-all group">
                Start Building Free
                <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" className="text-lg px-8 py-6 border-[#8D94E1]/30 text-[#646CD2] hover:bg-[#B7BFFE]/10">
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
                <span className="font-medium">200+</span> developers trust ACI.dev
              </div>
            </div>
          </div>
          <div className="relative animate-float">
            <div className="absolute inset-0 bg-gradient-radial from-[#6269D2]/20 to-transparent opacity-70 blur-3xl -z-10"></div>
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
                    <h3 className="text-base font-semibold">Active AI Models</h3>
                    <div className="flex items-center gap-2">
                      <div className="relative">
                        <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
                        <input 
                          type="text" 
                          placeholder="Filter..." 
                          className="pl-8 h-7 text-xs rounded-md border border-input w-32 bg-background"
                        />
                      </div>
                      <Button variant="ghost" size="sm" className="text-[#6269D2] flex items-center text-xs h-7 px-2">
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
                          <div className="w-6 h-6 flex items-center justify-center bg-[#6269D2]/10 rounded text-sm mr-2">
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
                    <span className="font-medium">30+</span> AI models and integrations available
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
