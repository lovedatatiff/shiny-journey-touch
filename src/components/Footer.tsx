
import { Button } from "@/components/ui/button";
import { Github, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted pt-20 pb-10 border-t border-border">
      <div className="container max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-16">
          <div className="md:col-span-1 space-y-4">
            <div className="text-2xl font-bold gradient-text">ACI.dev</div>
            <p className="text-foreground/70">
              Build, deploy, and scale AI applications with confidence.
            </p>
            <div className="flex space-x-4 pt-2">
              <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full hover:text-[#6269D2] hover:bg-[#B7BFFE]/10">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Button>
              <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full hover:text-[#6269D2] hover:bg-[#B7BFFE]/10">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
              <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full hover:text-[#6269D2] hover:bg-[#B7BFFE]/10">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Product</h3>
            <ul className="space-y-2">
              {["Features", "Pricing", "Integrations", "Changelog", "Documentation"].map((item, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="text-foreground/70 hover:text-[#6269D2] transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              {["About", "Blog", "Careers", "Customers", "Partners"].map((item, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="text-foreground/70 hover:text-[#6269D2] transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              {["Community", "Contact", "Support", "Status", "Terms", "Privacy"].map((item, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="text-foreground/70 hover:text-[#6269D2] transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-foreground/60 text-sm">
            © 2023 ACI.dev. All rights reserved.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-foreground/60 hover:text-[#6269D2] text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-foreground/60 hover:text-[#6269D2] text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-foreground/60 hover:text-[#6269D2] text-sm">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
