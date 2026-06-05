"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import AboutMetric from '@/components/sections/about/AboutMetric';
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureCardTwentyFour from '@/components/sections/feature/FeatureCardTwentyFour';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import HeroBillboardRotatedCarousel from '@/components/sections/hero/HeroBillboardRotatedCarousel';
import MetricCardEleven from '@/components/sections/metrics/MetricCardEleven';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import PricingCardTwo from '@/components/sections/pricing/PricingCardTwo';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import { Building, Globe, Layers, MessageSquare, Rocket, Shield, Star, User, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="directional-hover"
        defaultTextAnimation="background-highlight"
        borderRadius="pill"
        contentWidth="compact"
        sizing="largeSmall"
        background="grid"
        cardStyle="soft-shadow"
        primaryButtonStyle="radial-glow"
        secondaryButtonStyle="solid"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        {
          name: "Home",
          id: "#home",
        },
        {
          name: "Features",
          id: "#features",
        },
        {
          name: "Products",
          id: "#products",
        },
        {
          name: "Pricing",
          id: "#pricing",
        },
        {
          name: "FAQ",
          id: "#faq",
        },
        {
          name: "Contact",
          id: "#contact",
        },
      ]}
      brandName="CryptoVault"
      button={{
        text: "Sign Up",
        href: "#contact",
      }}
      animateOnLoad={true}
    />
  </div>

  <div id="home" data-section="home">
      <HeroBillboardRotatedCarousel
      background={{
        variant: "rotated-rays-animated-grid",
      }}
      title="Unlock the Future of Finance with CryptoVault"
      description="Experience secure, decentralized, and intelligent cryptocurrency management. Your gateway to the next generation of digital assets."
      tag="Powered by Innovation"
      tagIcon={Zap}
      tagAnimation="slide-up"
      buttons={[
        {
          text: "Start Trading Now",
          href: "#products",
        },
        {
          text: "Learn More",
          href: "#features",
        },
      ]}
      buttonAnimation="slide-up"
      carouselItems={[
        {
          id: "carousel-1",
          imageSrc: "http://img.b2bpic.net/free-photo/bitcoin-gold-coin-stock-market-trading-chart-background-online-candle_169016-66268.jpg",
          imageAlt: "Futuristic cryptocurrency trading dashboard",
        },
        {
          id: "carousel-2",
          imageSrc: "http://img.b2bpic.net/free-photo/3d-cryptocurrency-rendering-design_23-2149074557.jpg",
          imageAlt: "Secure crypto wallet interface",
        },
        {
          id: "carousel-3",
          imageSrc: "http://img.b2bpic.net/free-photo/3d-rendering-blockchain-technology_23-2151480185.jpg",
          imageAlt: "Decentralized finance protocol interface",
        },
        {
          id: "carousel-4",
          imageSrc: "http://img.b2bpic.net/free-photo/abstract-illustration-biological-cell_183364-119271.jpg",
          imageAlt: "Global blockchain network visualization",
        },
        {
          id: "carousel-5",
          imageSrc: "http://img.b2bpic.net/free-photo/old-wooden-watchtower-against-cloudy-sky_181624-37527.jpg",
          imageAlt: "High-performance crypto mining server room",
        },
        {
          id: "carousel-6",
          imageSrc: "http://img.b2bpic.net/free-photo/african-american-advisor-reviewing-legal-balance-desk-green-screen_482257-121489.jpg",
          imageAlt: "User interacting with mobile cryptocurrency app",
        },
      ]}
      autoPlay={true}
      autoPlayInterval={5000}
    />
  </div>

  <div id="about" data-section="about">
      <AboutMetric
      useInvertedBackground={true}
      title="A Decentralized Future, Built on Trust"
      metrics={[
        {
          icon: Shield,
          label: "Secure Wallets",
          value: "10M+",
        },
        {
          icon: Globe,
          label: "Global Users",
          value: "180+",
        },
        {
          icon: Rocket,
          label: "Transactions/Sec",
          value: "50K",
        },
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentyFour
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          id: "secure-transactions",
          title: "Impenetrable Security",
          author: "Advanced Encryption",
          description: "State-of-the-art encryption and multi-factor authentication protect your assets from all threats, ensuring peace of mind.",
          tags: [
            "Security",
            "Encryption",
            "Privacy",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/3d-rendering-blockchain-technology_23-2151480209.jpg",
          imageAlt: "Secure transactions",
        },
        {
          id: "staking-rewards",
          title: "Passive Staking Rewards",
          author: "Effortless Earnings",
          description: "Earn competitive rewards on your crypto holdings with our flexible staking options. Grow your portfolio effortlessly.",
          tags: [
            "Staking",
            "Passive Income",
            "Yield",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/dynamic-data-visualization-3d_23-2151904329.jpg",
          imageAlt: "Staking rewards",
        },
        {
          id: "defi-access",
          title: "Integrated DeFi Access",
          author: "Next-Gen Finance",
          description: "Seamlessly connect to a world of decentralized finance, from lending and borrowing to liquidity provision, all within CryptoVault.",
          tags: [
            "DeFi",
            "Lending",
            "Borrowing",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/3d-technology-background-with-low-poly-plexus-design_1048-16168.jpg",
          imageAlt: "DeFi access",
        },
        {
          id: "advanced-analytics",
          title: "Intelligent Analytics",
          author: "Informed Decisions",
          description: "Access real-time market data, customizable charts, and AI-driven insights to make smart, informed trading decisions.",
          tags: [
            "Analytics",
            "Market Data",
            "Insights",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/fantasy-scene-wealth_23-2151681298.jpg",
          imageAlt: "Advanced analytics",
        },
        {
          id: "global-support",
          title: "24/7 Expert Support",
          author: "Dedicated Assistance",
          description: "Our team of crypto experts is available around the clock to provide personalized support and guidance whenever you need it.",
          tags: [
            "Support",
            "Assistance",
            "Guidance",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/futuristic-technology-hologram_23-2151917444.jpg",
          imageAlt: "Expert support",
        },
      ]}
      title="Platform Capabilities"
      description="Discover the powerful features that make CryptoVault the leading choice for managing your digital assets securely and efficiently."
      tag="Advanced Technology"
      tagIcon={Layers}
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={true}
      products={[
        {
          id: "p-bitcoin",
          name: "Bitcoin (BTC)",
          price: "$65,000",
          imageSrc: "http://img.b2bpic.net/free-photo/cyberpunk-bitcoin-illustration_23-2151611157.jpg",
          imageAlt: "Bitcoin symbol",
        },
        {
          id: "p-ethereum",
          name: "Ethereum (ETH)",
          price: "$3,500",
          imageSrc: "http://img.b2bpic.net/free-photo/3d-shapes-glowing-with-bright-holographic-colors_23-2151037162.jpg",
          imageAlt: "Ethereum symbol",
        },
        {
          id: "p-ripple",
          name: "Ripple (XRP)",
          price: "$0.50",
          imageSrc: "http://img.b2bpic.net/free-photo/wonder-wheel-movement-blue-lights-with-light-bulb_23-2148328064.jpg",
          imageAlt: "Ripple symbol",
        },
        {
          id: "p-litecoin",
          name: "Litecoin (LTC)",
          price: "$70",
          imageSrc: "http://img.b2bpic.net/free-photo/concept-marine-stratification_23-2148227202.jpg",
          imageAlt: "Litecoin symbol",
        },
        {
          id: "p-cardano",
          name: "Cardano (ADA)",
          price: "$0.45",
          imageSrc: "http://img.b2bpic.net/free-photo/3d-shape-glowing-with-bright-holographic-colors_23-2151037250.jpg",
          imageAlt: "Cardano symbol",
        },
        {
          id: "p-solana",
          name: "Solana (SOL)",
          price: "$150",
          imageSrc: "http://img.b2bpic.net/free-vector/bitcoin-payment-neon-sign-bitcoin-smartphone-screen-night-bright-advertisement_1262-13374.jpg",
          imageAlt: "Solana symbol",
        },
      ]}
      title="Our Leading Digital Assets"
      description="Explore a diverse range of top-tier cryptocurrencies available for trading and investment on CryptoVault."
      tag="Diverse Portfolio"
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardEleven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m-transactions",
          value: "50K+",
          title: "Transactions Per Second",
          description: "Our platform handles a massive volume of trades with lightning-fast execution.",
          imageSrc: "http://img.b2bpic.net/free-photo/futuristic-blue-background_1017-2653.jpg",
          imageAlt: "High-speed transactions",
        },
        {
          id: "m-users",
          value: "1.2M+",
          title: "Active Users Worldwide",
          description: "A growing community of crypto enthusiasts and investors trust CryptoVault daily.",
          imageSrc: "http://img.b2bpic.net/free-photo/3d-cryptocurrency-rendering-design_23-2149074561.jpg",
          imageAlt: "Global user growth",
        },
        {
          id: "m-protection",
          value: "99.99%",
          title: "Uptime & Security",
          description: "Industry-leading uptime and an unblemished security record ensure your funds are always safe.",
          imageSrc: "http://img.b2bpic.net/free-photo/woman-s-eye-with-smart-contact-lens-biometric-secu-technology-concept_53876-97883.jpg",
          imageAlt: "Security uptime",
        },
        {
          id: "m-decentralized",
          value: "100%",
          title: "Decentralized Governance",
          description: "Community-led initiatives drive the evolution of our platform, ensuring true decentralization.",
          imageSrc: "http://img.b2bpic.net/free-photo/cool-background-blank-wallpaper-place-your-concept_1194-641481.jpg",
          imageAlt: "Decentralized governance",
        },
      ]}
      title="Performance & Security Highlights"
      description="See the real-time impact and robust infrastructure behind CryptoVault's operations."
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardTwo
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      plans={[
        {
          id: "basic",
          badge: "Standard",
          badgeIcon: User,
          price: "$0 / month",
          subtitle: "Essential tools for every crypto enthusiast.",
          buttons: [
            {
              text: "Get Started",
              href: "#contact",
            },
          ],
          features: [
            "Instant Trades",
            "Basic Analytics",
            "24/7 Chat Support",
            "Standard Staking",
          ],
        },
        {
          id: "pro",
          badge: "Premium",
          badgeIcon: Star,
          price: "$29 / month",
          subtitle: "For serious traders seeking advanced features.",
          buttons: [
            {
              text: "Go Pro",
              href: "#contact",
            },
          ],
          features: [
            "Advanced Trading Tools",
            "In-depth Analytics",
            "Priority Support",
            "High-Yield Staking",
            "DeFi Integration",
          ],
        },
        {
          id: "enterprise",
          badge: "Institutional",
          badgeIcon: Building,
          price: "Custom",
          subtitle: "Tailored solutions for large-scale operations.",
          buttons: [
            {
              text: "Contact Sales",
              href: "#contact",
            },
          ],
          features: [
            "Dedicated Account Manager",
            "API Access",
            "Custom Integrations",
            "White-Glove Support",
            "OTC Trading Desk",
          ],
        },
      ]}
      title="Choose Your Investment Plan"
      description="Find the perfect plan for your crypto journey, from basic trading to advanced institutional solutions."
      tag="Flexible & Scalable"
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "t-1",
          name: "Sarah Johnson",
          role: "CEO, TechInnovate",
          company: "TechInnovate",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/proud-middle-aged-business-man-conference-room_1262-3062.jpg",
          imageAlt: "Sarah Johnson",
        },
        {
          id: "t-2",
          name: "Michael Chen",
          role: "CTO, Digital Horizons",
          company: "Digital Horizons",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/cheerful-attractive-businesswoman-crossing-arms_1262-4724.jpg",
          imageAlt: "Michael Chen",
        },
        {
          id: "t-3",
          name: "Emily Rodriguez",
          role: "Marketing Director, GlobalConnect",
          company: "GlobalConnect",
          rating: 5,
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=xhjvhg",
          imageAlt: "Emily Rodriguez",
        },
        {
          id: "t-4",
          name: "David Kim",
          role: "Product Manager, Apex Solutions",
          company: "Apex Solutions",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-male-manager-suit-writing-clipboard-taking-notes-office-meeting-standing-white-b_1258-173624.jpg",
          imageAlt: "David Kim",
        },
        {
          id: "t-5",
          name: "Jessica Lee",
          role: "Financial Analyst, Quantum Capital",
          company: "Quantum Capital",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-businessman-work_1098-286.jpg",
          imageAlt: "Jessica Lee",
        },
        {
          id: "t-6",
          name: "Robert Davis",
          role: "Operations Lead, SecureChain",
          company: "SecureChain",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/self-assured-business-leader-conference-room_1262-3068.jpg",
          imageAlt: "Robert Davis",
        },
      ]}
      title="What Our Users Say"
      description="Hear from satisfied users who have transformed their crypto journey with CryptoVault."
      tag="Trusted by Many"
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={true}
      names={[
        "Google",
        "Microsoft",
        "Amazon",
        "NVIDIA",
        "Tesla",
        "IBM",
        "Apple",
      ]}
      title="Trusted by Industry Leaders"
      description="Our partnerships reflect our commitment to security, innovation, and reliability in the digital asset space."
      tag="Global Partnerships"
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={false}
      faqs={[
        {
          id: "faq-1",
          title: "What is CryptoVault?",
          content: "CryptoVault is a leading decentralized platform for managing, trading, and investing in a wide range of cryptocurrencies with state-of-the-art security.",
        },
        {
          id: "faq-2",
          title: "How do I secure my account?",
          content: "We recommend enabling two-factor authentication (2FA), using a strong, unique password, and regularly reviewing your account activity for maximum security.",
        },
        {
          id: "faq-3",
          title: "Which cryptocurrencies are supported?",
          content: "CryptoVault supports all major cryptocurrencies including Bitcoin, Ethereum, Ripple, Litecoin, Cardano, Solana, and many more altcoins. Our list is constantly expanding.",
        },
        {
          id: "faq-4",
          title: "What are the fees for trading?",
          content: "Our trading fees are highly competitive and transparent, varying based on your account tier and trading volume. Details are available on our pricing page.",
        },
        {
          id: "faq-5",
          title: "Is staking safe on CryptoVault?",
          content: "Yes, staking on CryptoVault is designed with security in mind, leveraging robust protocols and audited smart contracts to protect your staked assets.",
        },
      ]}
      sideTitle="Frequently Asked Questions"
      sideDescription="Find quick answers to the most common questions about CryptoVault, our platform, and digital assets."
      buttons={[
        {
          text: "Contact Support",
          href: "#contact",
        },
      ]}
      buttonAnimation="slide-up"
      faqsAnimation="slide-up"
      textPosition="left"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={true}
      background={{
        variant: "sparkles-gradient",
      }}
      tag="Ready to Start?"
      tagIcon={MessageSquare}
      title="Join the Future of Crypto Today"
      description="Unlock unparalleled security, performance, and opportunities in the world of digital assets. Sign up now and elevate your crypto experience."
      buttons={[
        {
          text: "Create Your Account",
          href: "#",
        },
        {
          text: "Speak to an Expert",
          href: "#",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoEmphasis
      columns={[
        {
          items: [
            {
              label: "Platform",
              href: "#",
            },
            {
              label: "Features",
              href: "#features",
            },
            {
              label: "Products",
              href: "#products",
            },
            {
              label: "Pricing",
              href: "#pricing",
            },
          ],
        },
        {
          items: [
            {
              label: "Company",
              href: "#",
            },
            {
              label: "About Us",
              href: "#about",
            },
            {
              label: "Blog",
              href: "#",
            },
            {
              label: "Careers",
              href: "#",
            },
          ],
        },
        {
          items: [
            {
              label: "Support",
              href: "#",
            },
            {
              label: "FAQ",
              href: "#faq",
            },
            {
              label: "Help Center",
              href: "#",
            },
            {
              label: "Contact",
              href: "#contact",
            },
          ],
        },
        {
          items: [
            {
              label: "Legal",
              href: "#",
            },
            {
              label: "Privacy Policy",
              href: "#",
            },
            {
              label: "Terms of Service",
              href: "#",
            },
            {
              label: "Cookie Policy",
              href: "#",
            },
          ],
        },
      ]}
      logoText="CryptoVault"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
