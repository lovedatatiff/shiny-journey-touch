
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const CtaSection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-[#B7BFFE]/20 to-[#B7BFFE]/5">
      <div className="container max-w-5xl mx-auto px-4 md:px-6 text-center">
        <div className="bg-card border border-[#8D94E1]/20 rounded-2xl p-8 md:p-12 shadow-xl animate-fade-in">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#6269D2]/10 text-[#6269D2] border border-[#6269D2]/20 text-sm font-medium">
              <span className="mr-2">🚀</span>
              <span>Ready to get started?</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Start building better AI applications today
            </h2>
            <p className="text-xl text-foreground/70">
              Join hundreds of developers building secure, powerful AI applications with ACI.dev
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <Input 
                placeholder="Enter your email address" 
                className="text-base h-12" 
              />
              <Button className="bg-[#6269D2] hover:bg-[#646CD2] h-12 px-6">
                Get Started Free
              </Button>
            </div>
            
            <div className="text-sm text-foreground/60 mt-4">
              No credit card required. Free tier includes 1 workflow and 500 API calls.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
