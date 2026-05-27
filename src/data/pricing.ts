export interface PricingPlan {
  duration: string;
  price: string;
  popular?: boolean;
  features: string[];
}

export interface ServicePricing {
  id: string;
  title: string;
  slug: string;
  color: string;
  plans: PricingPlan[];
  note?: string;
}

export const ALL_PRICING: ServicePricing[] = [
  {
    id: "seo",
    title: "SEO Services",
    slug: "seo-services",
    color: "#00a2ff",
    plans: [
      {
        duration: "1 Month",
        price: "$450 USD/Month",
        features: [
          "Keywords Research",
          "Content Optimization",
          "On-Page SEO",
          "Technical SEO",
          "Off-Page SEO",
          "Backlinks (150)",
          "Monthly Reports",
          "Create Fully SEO Optimized Website",
        ],
      },
      {
        duration: "3 Months",
        price: "$950 USD",
        popular: true,
        features: [
          "Keywords Research",
          "Content Optimization",
          "On-Page SEO",
          "Off-Page SEO",
          "Technical SEO",
          "Lead Generate Through Website",
          "Business Listing",
          "Backlinks (1000)",
          "Image Submission",
          "AEO",
          "GEO",
          "Social Media Posting",
          "Monthly Reports",
          "Create Fully SEO Optimized Website",
        ],
      },
      {
        duration: "6 Months",
        price: "$2000 USD",
        features: [
          "Keywords Research",
          "Content Optimization",
          "On-Page SEO",
          "Off-Page SEO",
          "Technical SEO",
          "Lead Generate Through Website",
          "Business Listing",
          "Backlinks (5000)",
          "Image Submission",
          "AEO",
          "GEO",
          "Social Media Posting",
          "Monthly Reports",
          "Create Fully SEO Optimized Website",
          "Maintenance Website",
        ],
      },
      {
        duration: "12 Months",
        price: "$5000 USD",
        features: [
          "Keywords Research",
          "Content Optimization",
          "On-Page SEO",
          "Off-Page SEO",
          "Technical SEO",
          "Lead Generate Through Website",
          "Business Listing",
          "Backlinks (10,000+)",
          "Image Submission",
          "AEO",
          "GEO",
          "Social Media Posting",
          "Monthly Reports",
          "Create Fully SEO Optimized Website",
          "Maintenance Website",
        ],
      },
    ],
  },
  {
    id: "webdev",
    title: "Website Development",
    slug: "web-design-development",
    color: "#00e5ff",
    note: "Custom websites billed at $20/hr based on client requirements with fixed delivery timeline.",
    plans: [
      {
        duration: "Normal Website",
        price: "$500 USD",
        popular: true,
        features: [
          "4 Page Site: Home, About, Services, Contact",
          "SEO Optimized Content",
          "Website Maintenance Available",
        ],
      },
      {
        duration: "Custom Website",
        price: "$20/hr",
        features: [
          "All Client Requirements Built",
          "Handover to Client",
          "Fixed Duration Delivery",
          "SEO Optimized Structure",
        ],
      },
    ],
  },
  {
    id: "social",
    title: "Social Media Marketing",
    slug: "social-media-marketing",
    color: "#E1306C",
    plans: [
      {
        duration: "1 Month",
        price: "$200 USD",
        features: [
          "Handle Social Media Account",
          "Reply to Client",
          "30+ Posts & Share Content",
          "4 Reels",
          "30 Days Stories",
        ],
      },
      {
        duration: "3 Months",
        price: "$500 USD",
        popular: true,
        features: [
          "Handle Social Media Account",
          "Reply to Client",
          "100+ Posts & Share Content",
          "15 Reels",
          "90 Days Stories",
        ],
      },
      {
        duration: "6 Months",
        price: "$1200 USD",
        features: [
          "Handle Social Media Account",
          "Reply to Client",
          "200+ Posts & Share Content",
          "30 Reels",
          "180 Days Stories",
        ],
      },
      {
        duration: "12 Months",
        price: "$2500 USD",
        features: [
          "Handle Social Media Account",
          "Reply to Client",
          "400+ Posts & Share Content",
          "100+ Reels",
          "365 Days Stories",
        ],
      },
    ],
  },
  {
    id: "whatsapp",
    title: "WhatsApp Marketing",
    slug: "whatsapp-marketing",
    color: "#25D366",
    plans: [
      {
        duration: "1 Month",
        price: "$500 USD",
        features: [
          "Handle WhatsApp Account",
          "Lead Generate via WhatsApp",
          "Reply to Client",
          "Alternative Day Follow-ups",
          "30 Days Stories",
        ],
      },
      {
        duration: "3 Months",
        price: "$1500 USD",
        popular: true,
        features: [
          "Handle WhatsApp Account",
          "Lead Generate via WhatsApp",
          "Reply to Client",
          "Alternative Day Follow-ups",
          "90 Days Stories",
        ],
      },
      {
        duration: "6 Months",
        price: "$3000 USD",
        features: [
          "Handle WhatsApp Account",
          "Lead Generate via WhatsApp",
          "Reply to Client",
          "Alternative Day Follow-ups",
          "180 Days Stories",
        ],
      },
      {
        duration: "12 Months",
        price: "$6000 USD",
        features: [
          "Handle WhatsApp Account",
          "Lead Generate via WhatsApp",
          "Reply to Client",
          "Alternative Day Follow-ups",
          "365 Days Stories",
        ],
      },
    ],
  },
  {
    id: "linkedin",
    title: "LinkedIn Marketing",
    slug: "linkedin-marketing",
    color: "#0A66C2",
    plans: [
      {
        duration: "1 Month",
        price: "$500 USD",
        features: [
          "Handle LinkedIn Account",
          "Lead Generate via LinkedIn",
          "Reply to Client",
          "30+ Posts & Share Content",
          "Alternative Day Follow-ups",
        ],
      },
      {
        duration: "3 Months",
        price: "$1500 USD",
        popular: true,
        features: [
          "Handle LinkedIn Account",
          "Lead Generate via LinkedIn",
          "Reply to Client",
          "90+ Posts & Share Content",
          "Alternative Day Follow-ups",
        ],
      },
      {
        duration: "6 Months",
        price: "$3000 USD",
        features: [
          "Handle LinkedIn Account",
          "Lead Generate via LinkedIn",
          "Reply to Client",
          "150+ Posts & Share Content",
          "Alternative Day Follow-ups",
        ],
      },
      {
        duration: "12 Months",
        price: "$6000 USD",
        features: [
          "Handle LinkedIn Account",
          "Lead Generate via LinkedIn",
          "Reply to Client",
          "300+ Posts & Share Content",
          "Alternative Day Follow-ups",
        ],
      },
    ],
  },
];

export function getPricingBySlug(slug: string) {
  return ALL_PRICING.find((p) => p.slug === slug);
}
