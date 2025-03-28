
import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "ACI has dramatically simplified how we build AI applications. What used to take months now takes days, and our developers love the visual workflow builder.",
    author: "Sarah Johnson",
    title: "CTO, TechFlow Inc.",
    avatar: "https://randomuser.me/api/portraits/women/32.jpg",
  },
  {
    quote:
      "The ability to connect our data to LLMs without compromising security was a game-changer for us. ACI's platform is now central to our AI strategy.",
    author: "Michael Chang",
    title: "Lead Developer, AI Solutions",
    avatar: "https://randomuser.me/api/portraits/men/53.jpg",
  },
  {
    quote:
      "We've reduced our AI application development time by 70% since adopting ACI. The monitoring tools have also helped us optimize costs significantly.",
    author: "Emma Rodriguez",
    title: "VP of Engineering, FutureAI",
    avatar: "https://randomuser.me/api/portraits/women/63.jpg",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-muted relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-background to-transparent"></div>
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-background to-transparent"></div>
      
      <div className="container max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text inline-block">
            Trusted by innovative teams
          </h2>
          <p className="text-xl text-foreground/70">
            See what our customers are saying about ACI.dev
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-6 bg-card border border-border animate-fade-in card-hover"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex justify-center mb-4 text-accent">
                <Quote className="h-10 w-10 opacity-30" />
              </div>
              <blockquote className="text-lg mb-6 text-center">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center justify-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm text-foreground/70">{testimonial.title}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-70">
          {['Acme Inc', 'GlobalTech', 'FutureCorp', 'InnovateLabs', 'TechGiants', 'AIVentures'].map((company, i) => (
            <div key={i} className="h-12">
              <div className="text-lg font-semibold text-foreground/50">{company}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
