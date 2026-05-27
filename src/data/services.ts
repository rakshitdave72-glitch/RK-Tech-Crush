export interface ServiceContent {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  heroSubtitle: string;
  content: string;
  benefits: string[];
  process: { step: string; title: string; desc: string }[];
  faqs: { q: string; a: string }[];
}

export const SERVICE_CONTENT: Record<string, ServiceContent> = {
  "seo-services": {
    slug: "seo-services",
    title: "SEO Services",
    metaTitle: "SEO Services Ahmedabad | R.K Tech Crush — Rank #1 on Google",
    metaDescription:
      "Professional SEO services by R.K Tech Crush. Keyword research, on-page SEO, technical SEO, backlinks & monthly reports. 6+ years experience. Get a free consultation today.",
    keywords:
      "SEO services, SEO company Ahmedabad, search engine optimization, Google ranking, keyword research, on-page SEO, technical SEO, backlinks",
    heroSubtitle:
      "Dominate search results and drive qualified organic traffic that converts into paying customers.",
    content: `Search Engine Optimization is the foundation of sustainable online growth. At R.K Tech Crush, we deliver comprehensive SEO strategies that help businesses rank higher on Google, attract qualified traffic, and generate consistent leads without relying solely on paid advertising. Founded by Rakshit Dave with over 6 years of proven experience in digital marketing, our SEO services combine technical expertise with data-driven content strategies tailored to your industry and target audience.

Our SEO process begins with in-depth keyword research and competitor analysis to identify high-value search terms your potential customers are actively searching for. We then optimize every element of your website — from meta titles and headings to site speed, mobile responsiveness, and structured data markup. Our on-page SEO ensures each page is perfectly aligned with search intent, while our off-page SEO builds authoritative backlinks that signal trust to Google.

We specialize in local SEO for businesses in Ahmedabad and across India, as well as national and international SEO campaigns. Our technical SEO audits identify and fix crawl errors, broken links, duplicate content, and indexing issues that prevent your site from ranking. We also implement AEO (Answer Engine Optimization) and GEO (Generative Engine Optimization) strategies to prepare your brand for AI-powered search results.

Every SEO package includes detailed monthly reports showing keyword rankings, organic traffic growth, backlink acquisition, and conversion metrics. Whether you need a 1-month starter plan or a comprehensive 12-month growth strategy with 10,000+ backlinks, R.K Tech Crush delivers measurable results. We also create fully SEO-optimized websites as part of our packages, ensuring your digital presence is built for long-term success from day one. Partner with us and watch your business grow, rank, and succeed.`,
    benefits: [
      "Higher Google rankings for target keywords",
      "Increased organic traffic and qualified leads",
      "Comprehensive monthly performance reports",
      "Technical SEO fixes and site optimization",
      "Authority-building backlink campaigns",
      "AEO & GEO for next-gen search visibility",
    ],
    process: [
      { step: "01", title: "Audit & Research", desc: "Full website audit, keyword research, and competitor analysis." },
      { step: "02", title: "On-Page Optimization", desc: "Meta tags, content, headings, and internal linking optimized." },
      { step: "03", title: "Technical SEO", desc: "Site speed, mobile, crawlability, and schema markup fixes." },
      { step: "04", title: "Off-Page & Links", desc: "Quality backlink building and authority development." },
      { step: "05", title: "Report & Scale", desc: "Monthly reports with data-driven strategy adjustments." },
    ],
    faqs: [
      { q: "How long before I see SEO results?", a: "Most clients see noticeable improvements within 3-6 months, depending on competition and current site health." },
      { q: "Do you provide monthly reports?", a: "Yes, every plan includes detailed monthly reports covering rankings, traffic, backlinks, and conversions." },
      { q: "Is SEO suitable for local businesses?", a: "Absolutely. We specialize in local SEO for Ahmedabad and pan-India businesses." },
    ],
  },
  "web-design-development": {
    slug: "web-design-development",
    title: "Web Design & Development",
    metaTitle: "Web Design & Development | R.K Tech Crush — High-Converting Websites",
    metaDescription:
      "Professional web design and development by R.K Tech Crush. SEO-optimized, mobile-responsive websites from $500. Custom development at $20/hr. Free consultation.",
    keywords:
      "web design, web development, website company Ahmedabad, responsive website, SEO website, custom website development",
    heroSubtitle:
      "Beautiful, fast, and conversion-focused websites engineered to turn visitors into customers.",
    content: `Your website is your most powerful sales tool — and at R.K Tech Crush, we build websites that don't just look stunning but actively generate leads and revenue. Led by Rakshit Dave with 6+ years of experience in web development and digital marketing, our team creates custom websites that combine premium design with cutting-edge performance and SEO best practices.

Every website we build is mobile-responsive, lightning-fast, and optimized for search engines from the ground up. Our Normal Website package delivers a professional 4-page site (Home, About, Services, Contact) with SEO-optimized content for just $500 USD — perfect for startups and small businesses ready to establish a strong online presence. For businesses with unique requirements, our Custom Website development at $20/hour ensures every feature, integration, and design element is tailored to your exact specifications with a fixed delivery timeline.

We follow a conversion-focused design philosophy: clear calls-to-action, intuitive navigation, trust elements, and fast load times that keep visitors engaged. Our development stack ensures cross-browser compatibility, security best practices, and easy content management. We integrate contact forms, WhatsApp chat buttons, analytics tracking, and social media links to maximize lead capture.

Beyond launch, we offer website maintenance services to keep your site secure, updated, and performing at peak efficiency. Whether you need a corporate website, portfolio, e-commerce platform, or landing page, R.K Tech Crush delivers premium quality at competitive prices. Based in Ahmedabad, Gujarat, we serve clients across India and internationally. Let us build the digital foundation your business deserves — a website that grows with you and drives real business results every single day.`,
    benefits: [
      "Mobile-responsive, fast-loading websites",
      "SEO-optimized content and structure",
      "Conversion-focused design with clear CTAs",
      "Affordable packages starting at $500",
      "Custom development at $20/hr",
      "Ongoing maintenance and support available",
    ],
    process: [
      { step: "01", title: "Discovery", desc: "Understand your brand, goals, and target audience." },
      { step: "02", title: "Design", desc: "Create modern UI mockups aligned with your brand identity." },
      { step: "03", title: "Development", desc: "Build with clean code, SEO structure, and responsiveness." },
      { step: "04", title: "Testing", desc: "Cross-device testing, speed optimization, and QA." },
      { step: "05", title: "Launch & Support", desc: "Deploy, handover, and optional maintenance plans." },
    ],
    faqs: [
      { q: "What's included in the $500 website?", a: "A 4-page responsive website with Home, About, Services, and Contact pages plus SEO-optimized content." },
      { q: "How does custom development pricing work?", a: "Custom projects are billed at $20/hr with a fixed delivery timeline agreed upfront." },
      { q: "Do you offer website maintenance?", a: "Yes, we offer ongoing maintenance to keep your site secure, updated, and performing well." },
    ],
  },
  "whatsapp-marketing": {
    slug: "whatsapp-marketing",
    title: "WhatsApp Marketing",
    metaTitle: "WhatsApp Marketing Services | R.K Tech Crush — Lead Generation",
    metaDescription:
      "WhatsApp marketing and lead generation by R.K Tech Crush. Account management, follow-ups, and story campaigns. Plans from $500/month. Contact us today.",
    keywords:
      "WhatsApp marketing, WhatsApp lead generation, WhatsApp business marketing, WhatsApp campaigns India",
    heroSubtitle:
      "Turn WhatsApp into your highest-converting sales channel with direct, personal outreach.",
    content: `WhatsApp has over 2 billion users worldwide, making it one of the most effective channels for direct customer engagement and lead generation. At R.K Tech Crush, our WhatsApp Marketing services help businesses connect with prospects personally, nurture leads through automated follow-ups, and close sales faster than traditional email or social media channels.

Managed by Rakshit Dave and his team with 6+ years of digital marketing experience, our WhatsApp campaigns include complete account management, lead generation strategies, client response handling, and alternative-day follow-up sequences that keep your prospects warm and engaged. We create compelling WhatsApp status stories that showcase your products, services, and offers to your contact list daily.

Our approach combines broadcast messaging, personalized follow-ups, and strategic story content to maximize reach and engagement. We handle everything — from setting up your WhatsApp Business profile to crafting messages that drive action. Whether you're a local business in Ahmedabad or a national brand, WhatsApp marketing delivers unmatched open rates (98%+) compared to email marketing.

Plans start at $500/month for comprehensive account management with 30 days of story content, scaling up to 12-month packages with 365 days of stories and full lead generation support. Every campaign is tracked and optimized based on response rates, lead quality, and conversion metrics. Partner with R.K Tech Crush to unlock WhatsApp's full potential as your primary lead generation engine.`,
    benefits: [
      "98%+ message open rates",
      "Direct lead generation via WhatsApp",
      "Professional account management",
      "Alternative-day follow-up sequences",
      "Daily story content creation",
      "Personalized client response handling",
    ],
    process: [
      { step: "01", title: "Setup", desc: "Configure WhatsApp Business profile and contact lists." },
      { step: "02", title: "Strategy", desc: "Design messaging sequences and story content calendar." },
      { step: "03", title: "Execute", desc: "Launch campaigns with follow-ups and lead tracking." },
      { step: "04", title: "Optimize", desc: "Analyze response rates and refine messaging." },
    ],
    faqs: [
      { q: "Can WhatsApp marketing generate real leads?", a: "Yes, with 98%+ open rates, WhatsApp is one of the most effective lead generation channels available." },
      { q: "Do you handle client replies?", a: "Yes, we manage all client responses and follow-ups as part of every plan." },
      { q: "What's included in the stories?", a: "Daily WhatsApp status stories promoting your products, services, offers, and brand content." },
    ],
  },
  "linkedin-marketing": {
    slug: "linkedin-marketing",
    title: "LinkedIn Marketing",
    metaTitle: "LinkedIn Marketing Services | R.K Tech Crush — B2B Lead Generation",
    metaDescription:
      "LinkedIn marketing and B2B lead generation by R.K Tech Crush. Profile optimization, content posting, and outreach. Plans from $500/month.",
    keywords:
      "LinkedIn marketing, B2B lead generation, LinkedIn management, LinkedIn content marketing, LinkedIn outreach",
    heroSubtitle:
      "Build authority, generate B2B leads, and grow your professional network on LinkedIn.",
    content: `LinkedIn is the world's largest professional network with over 900 million members, making it the ultimate platform for B2B lead generation and brand authority building. R.K Tech Crush offers comprehensive LinkedIn Marketing services designed to position you and your business as industry leaders while generating qualified leads consistently.

With 6+ years of experience, Rakshit Dave and his team manage your entire LinkedIn presence — from profile optimization and content creation to direct outreach and follow-up sequences. We create and publish 30+ professional posts per month (scaling to 300+ on annual plans), share valuable content that resonates with your target audience, and implement alternative-day follow-up strategies that convert connections into clients.

Our LinkedIn marketing approach focuses on three pillars: personal branding, content authority, and strategic outreach. We optimize your LinkedIn profile to attract inbound leads, publish thought-leadership content that establishes credibility, and engage with decision-makers in your industry through targeted connection requests and messaging sequences.

Whether you're a consultant, agency owner, SaaS company, or enterprise, our LinkedIn packages deliver measurable results. Plans start at $500/month with full account management, lead generation, and content posting. We track connection growth, post engagement, profile views, and lead conversion metrics to ensure your investment delivers ROI. Based in Ahmedabad, we serve B2B clients across India and globally. Let R.K Tech Crush transform your LinkedIn profile into a powerful lead generation machine.`,
    benefits: [
      "B2B lead generation on autopilot",
      "Professional content creation & posting",
      "Profile optimization for inbound leads",
      "Alternative-day follow-up outreach",
      "Industry authority building",
      "Detailed engagement tracking",
    ],
    process: [
      { step: "01", title: "Profile Audit", desc: "Optimize your LinkedIn profile for maximum visibility." },
      { step: "02", title: "Content Plan", desc: "Create a content calendar with engaging posts." },
      { step: "03", title: "Outreach", desc: "Targeted connection requests and follow-up sequences." },
      { step: "04", title: "Convert", desc: "Turn connections into qualified leads and clients." },
    ],
    faqs: [
      { q: "Is LinkedIn marketing effective for B2B?", a: "LinkedIn is the #1 platform for B2B lead generation with decision-makers actively seeking solutions." },
      { q: "How many posts do you create?", a: "30+ posts/month on the 1-month plan, scaling to 300+ on the 12-month plan." },
      { q: "Do you handle follow-ups?", a: "Yes, alternative-day follow-ups are included in all LinkedIn marketing plans." },
    ],
  },
  "social-media-marketing": {
    slug: "social-media-marketing",
    title: "Social Media Marketing",
    metaTitle: "Social Media Marketing | R.K Tech Crush — Grow Your Brand Online",
    metaDescription:
      "Social media marketing by R.K Tech Crush. Content creation, reels, stories, and account management across all platforms. Plans from $200/month.",
    keywords:
      "social media marketing, SMM services, Instagram marketing, Facebook marketing, social media management Ahmedabad",
    heroSubtitle:
      "Build a powerful social presence with strategic content that engages, converts, and grows your audience.",
    content: `Social media is where your customers spend their time — and R.K Tech Crush ensures your brand shows up with content that captures attention, builds trust, and drives action. Our Social Media Marketing services cover all major platforms including Instagram, Facebook, YouTube, and LinkedIn, with comprehensive account management, content creation, and community engagement.

Led by Rakshit Dave with 6+ years of experience managing social media campaigns for businesses across industries, our team handles everything from daily posting and story creation to reel production and client response management. Our 1-month starter plan at $200 includes 30+ posts, 4 reels, and 30 days of stories — giving your brand a consistent, professional presence without the hassle of doing it yourself.

We develop platform-specific content strategies that align with your brand voice and business goals. Our content mix includes educational posts, promotional content, behind-the-scenes stories, user-generated content, and trending reel formats that maximize reach and engagement. Every post is designed with clear calls-to-action that drive traffic to your website, generate leads, or boost sales.

Scaling up to our 12-month plan, you get 400+ posts, 100+ reels, and 365 days of stories — a complete social media engine that builds brand authority over time. We monitor analytics, track follower growth, engagement rates, and conversion metrics to continuously optimize your strategy. Based in Ahmedabad, Gujarat, R.K Tech Crush serves clients across India and internationally. Let us handle your social media so you can focus on running your business.`,
    benefits: [
      "Multi-platform account management",
      "30+ to 400+ posts per plan",
      "Professional reel & story creation",
      "Community engagement & replies",
      "Brand-consistent content strategy",
      "Analytics and performance tracking",
    ],
    process: [
      { step: "01", title: "Strategy", desc: "Platform selection and content calendar planning." },
      { step: "02", title: "Create", desc: "Design posts, reels, and stories aligned with your brand." },
      { step: "03", title: "Publish", desc: "Schedule and publish content at optimal times." },
      { step: "04", title: "Engage", desc: "Respond to comments, messages, and community interactions." },
    ],
    faqs: [
      { q: "Which platforms do you manage?", a: "Instagram, Facebook, YouTube, LinkedIn, and other platforms based on your audience." },
      { q: "Do you create reels?", a: "Yes, all plans include reel creation from 4 reels/month up to 100+ on annual plans." },
      { q: "Can I approve content before posting?", a: "Yes, we share content for your approval before publishing." },
    ],
  },
  "email-marketing": {
    slug: "email-marketing",
    title: "Email Marketing",
    metaTitle: "Email Marketing Services | R.K Tech Crush — Nurture Leads & Boost Sales",
    metaDescription:
      "Professional email marketing by R.K Tech Crush. Campaign strategy, list building, automation, and conversion optimization. Contact for custom pricing.",
    keywords:
      "email marketing, email campaigns, newsletter marketing, email automation, lead nurturing",
    heroSubtitle:
      "Nurture leads and drive repeat sales with targeted email campaigns that deliver ROI.",
    content: `Email marketing remains one of the highest-ROI digital marketing channels, delivering an average of $42 for every $1 spent. At R.K Tech Crush, our Email Marketing services help businesses build engaged subscriber lists, create compelling campaigns, and automate nurture sequences that convert prospects into loyal customers.

With 6+ years of digital marketing experience, Rakshit Dave and his team design email strategies tailored to your business goals — whether that's lead nurturing, product launches, promotional campaigns, or customer retention. We handle everything from list building and segmentation to template design, copywriting, A/B testing, and performance analytics.

Our email campaigns are crafted with conversion-focused copy, professional HTML templates, and strategic send-time optimization. We implement automation workflows including welcome sequences, abandoned cart reminders, re-engagement campaigns, and post-purchase follow-ups that keep your brand top-of-mind throughout the customer journey.

We integrate email marketing with your existing CRM, website, and social media channels for a unified marketing approach. Every campaign includes detailed reports covering open rates, click-through rates, conversions, and unsubscribe metrics. Whether you're launching a new product, promoting a seasonal offer, or building long-term customer relationships, R.K Tech Crush delivers email marketing that drives measurable business growth. Contact us for a custom email marketing plan tailored to your needs and budget.`,
    benefits: [
      "High-ROI email campaigns",
      "List building & segmentation",
      "Automated nurture sequences",
      "Professional template design",
      "A/B testing & optimization",
      "Detailed performance analytics",
    ],
    process: [
      { step: "01", title: "Strategy", desc: "Define goals, audience segments, and campaign types." },
      { step: "02", title: "Design", desc: "Create branded email templates and compelling copy." },
      { step: "03", title: "Automate", desc: "Set up workflows for welcome, nurture, and re-engagement." },
      { step: "04", title: "Analyze", desc: "Track metrics and optimize for higher conversions." },
    ],
    faqs: [
      { q: "What ROI can I expect from email marketing?", a: "Email marketing typically delivers $42 ROI for every $1 spent, making it one of the most cost-effective channels." },
      { q: "Do you build email lists?", a: "Yes, we help build and segment subscriber lists through lead magnets and opt-in strategies." },
      { q: "Can you integrate with my CRM?", a: "Yes, we integrate email marketing with popular CRMs and marketing automation tools." },
    ],
  },
};

export function getServiceContent(slug: string) {
  return SERVICE_CONTENT[slug];
}
