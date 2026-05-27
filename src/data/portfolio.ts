export interface PortfolioProject {
  category: string;
  badgeBg: string;
  badgeBorder: string;
  badgeColor: string;
  metric: string;
  metricColor: string;
  title: string;
  description: string;
  image: string;
}

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    category: "SEO",
    badgeBg: "rgba(0, 180, 255, 0.125)",
    badgeBorder: "rgba(0, 180, 255, 0.25)",
    badgeColor: "#00b4ff",
    metric: "+340% Organic Traffic",
    metricColor: "#00b4ff",
    title: "E-Commerce SEO Campaign",
    description:
      "Complete SEO overhaul for a fashion e-commerce brand resulting in top 3 rankings for 50+ keywords.",
    image: "/images/portfolio/seo.jpg",
  },
  {
    category: "Web Development",
    badgeBg: "rgba(0, 229, 255, 0.125)",
    badgeBorder: "rgba(0, 229, 255, 0.25)",
    badgeColor: "#00e5ff",
    metric: "+85% Conversion Rate",
    metricColor: "#00e5ff",
    title: "SaaS Landing Page",
    description:
      "High-converting landing page for a B2B SaaS product with A/B tested copy and design.",
    image: "/images/portfolio/saas.jpg",
  },
  {
    category: "WhatsApp Marketing",
    badgeBg: "rgba(37, 211, 102, 0.125)",
    badgeBorder: "rgba(37, 211, 102, 0.25)",
    badgeColor: "#25d366",
    metric: "500+ Leads/Month",
    metricColor: "#25d366",
    title: "WhatsApp Lead Generation",
    description:
      "Automated WhatsApp funnel for a real estate company generating qualified leads consistently.",
    image: "/images/portfolio/whatsapp.jpg",
  },
  {
    category: "LinkedIn Marketing",
    badgeBg: "rgba(0, 119, 181, 0.125)",
    badgeBorder: "rgba(0, 119, 181, 0.25)",
    badgeColor: "#0077b5",
    metric: "3x Lead Quality",
    metricColor: "#0077b5",
    title: "LinkedIn B2B Campaign",
    description:
      "Strategic LinkedIn outreach and content campaign for a consulting firm targeting C-suite executives.",
    image: "/images/portfolio/linkedin.jpg",
  },
  {
    category: "Web Development",
    badgeBg: "rgba(255, 107, 53, 0.125)",
    badgeBorder: "rgba(255, 107, 53, 0.25)",
    badgeColor: "#ff6b35",
    metric: "+200% Online Orders",
    metricColor: "#ff6b35",
    title: "Restaurant Chain Website",
    description:
      "Modern, mobile-first website with online ordering integration for a multi-location restaurant chain.",
    image: "/images/portfolio/restaurant.jpg",
  },
  {
    category: "Social Media",
    badgeBg: "rgba(225, 48, 108, 0.125)",
    badgeBorder: "rgba(225, 48, 108, 0.25)",
    badgeColor: "#e1306c",
    metric: "10K+ Followers in 3 Months",
    metricColor: "#e1306c",
    title: "Social Media Growth",
    description:
      "Comprehensive social media strategy for a fitness brand across Instagram, Facebook, and YouTube.",
    image: "/images/portfolio/social.jpg",
  },
];
