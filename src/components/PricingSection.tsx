
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
      "1 workflow",
      "500 API calls per month",
      "1 data connector",
      "Community support",
      "1 day log retention",
    ],
    cta: "Get Started Free",
    popular: false,
  },
  {
    title: "Pro",
    price: { monthly: 79, annual: 69 },
    description: "For professional developers",
    features: [
      "Unlimited workflows",
      "10,000 API calls per month",
      "5 data connectors",
      "Email support",
      "7 day log retention",
      "Custom Python functions",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    title: "Enterprise",
    price: { monthly: 299, annual: 249 },
    description: "For organizations building AI at scale",
    features: [
      "Unlimited workflows",
      "100,000 API calls per month",
      "Unlimited data connectors",
      "Priority support",
      "30 day log retention",
      "Custom Python functions",
      "SSO & advanced security",
      "Dedicated account manager",
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
            Choose the plan that's right for your AI development needs
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
                  ? "border-[#6269D2] shadow-lg ring-1 ring-[#6269D2]/50 md:scale-105"
                  : "border-border hover:border-[#8D94E1]/30"
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {option.popular && (
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 transform rotate-45">
                  <div className="bg-[#6269D2] text-white text-xs font-semibold py-1 px-10 shadow-md">
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
                      <Check className={`h-5 w-5 mr-3 ${option.popular ? "text-[#6269D2]" : "text-primary"}`} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full ${
                    option.popular
                      ? "bg-[#6269D2] hover:bg-[#646CD2]"
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
          <h3 className="text-2xl font-bold mb-4">Need a custom solution?</h3>
          <p className="text-foreground/70 mb-6">
            We offer tailored solutions for enterprises building AI at scale.
            Contact our sales team to discuss your specific requirements.
          </p>
          <Button variant="outline" size="lg" className="border-[#8D94E1]/30 text-[#646CD2] hover:bg-[#B7BFFE]/10">
            Contact Sales
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
