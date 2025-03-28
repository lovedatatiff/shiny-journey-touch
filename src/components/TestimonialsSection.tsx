
import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "ACI.dev completely transformed how our AI applications integrate with our existing systems. The time savings alone have been incredible.",
    author: "Sarah Johnson",
    title: "CTO, TechFlow Inc.",
    avatar: "https://randomuser.me/api/portraits/women/32.jpg",
  },
  {
    quote:
      "Setting up integrations used to take our team weeks. With ACI.dev, we can deploy new connections in minutes, not days or weeks.",
    author: "Michael Chang",
    title: "Lead Developer, AI Solutions",
    avatar: "https://randomuser.me/api/portraits/men/53.jpg",
  },
  {
    quote:
      "The reliability of ACI.dev's platform is unmatched. We've processed over 1M API calls without a single issue.",
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
            Trusted by innovative companies
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
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="h-12">
              <div className="w-32 h-8 bg-foreground/20 rounded animate-pulse-slow"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
