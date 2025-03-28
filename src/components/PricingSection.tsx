
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Switch } from "@/components/ui/switch";

const pricingOptions = [
  {
    title: "Starter",
    price: { monthly: 0, annual: 0 },
    description: "Perfect for trying out ACI.dev",
    features: [
      "Up to 5 integrations",
      "100 API calls per day",
      "Basic monitoring",
      "Community support",
      "24 hour retention",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    title: "Professional",
    price: { monthly: 49, annual: 39 },
    description: "Ideal for growing businesses",
    features: [
      "Up to 25 integrations",
      "10,000 API calls per day",
      "Advanced monitoring",
      "Email support",
      "30 day retention",
      "Custom workflows",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    title: "Enterprise",
    price: { monthly: 199, annual: 169 },
    description: "For organizations with complex needs",
    features: [
      "Unlimited integrations",
      "100,000 API calls per day",
      "Advanced monitoring & analytics",
      "Priority support",
      "90 day retention",
      "Custom workflows",
      "Dedicated account manager",
      "SSO & advanced security",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

const PricingSection = () => {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly");

  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="container max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text inline-block">
            Simple, transparent pricing
          </h2>
          <p className="text-xl text-foreground/70">
            Choose the plan that's right for your business
          </p>

          <div className="flex items-center justify-center mt-8 space-x-4">
            <span className={billingCycle === "monthly" ? "text-foreground" : "text-foreground/60"}>
              Monthly
            </span>
            <Switch
              checked={billingCycle === "annual"}
              onCheckedChange={(checked) => setBillingCycle(checked ? "annual" : "monthly")}
            />
            <span className={billingCycle === "annual" ? "text-foreground" : "text-foreground/60"}>
              Annual
              <span className="ml-1.5 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                Save 20%
              </span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingOptions.map((option, index) => (
            <Card
              key={index}
              className={`relative overflow-hidden transition-all animate-fade-in ${
                option.popular
                  ? "border-accent shadow-lg ring-1 ring-accent/50 md:scale-105"
                  : "border-border hover:border-accent/30"
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {option.popular && (
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 transform rotate-45">
                  <div className="bg-accent text-white text-xs font-semibold py-1 px-10 shadow-md">
                    Popular
                  </div>
                </div>
              )}
              <div className="p-6 space-y-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">{option.title}</h3>
                  <p className="text-foreground/70">{option.description}</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold">
                      ${option.price[billingCycle]}
                    </span>
                    <span className="text-foreground/70 ml-2">
                      {option.price[billingCycle] === 0 ? "Free" : `/ ${billingCycle === "monthly" ? "month" : "month, billed annually"}`}
                    </span>
                  </div>
                </div>
                <ul className="space-y-3">
                  {option.features.map((feature, i) => (
                    <li key={i} className="flex">
                      <Check className={`h-5 w-5 mr-3 ${option.popular ? "text-accent" : "text-primary"}`} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full ${
                    option.popular
                      ? "bg-accent hover:bg-accent/90"
                      : "bg-primary hover:bg-primary/90"
                  }`}
                >
                  {option.cta}
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Need a custom plan?</h3>
          <p className="text-foreground/70 mb-6">
            We offer tailored solutions for enterprises with specific requirements.
            Contact our sales team to discuss a custom plan.
          </p>
          <Button variant="outline" size="lg">
            Contact Sales
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
