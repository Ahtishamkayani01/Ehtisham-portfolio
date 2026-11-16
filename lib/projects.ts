// Project content. Edit copy here; layout lives in components/projects.tsx.

export type CaseStudy = {
  title: string
  tagline: string
  client: string
  meta: { label: string; value: string }
  overview: string[]
  stack: string[]
  image: string
  /** Optional phone screenshot shown overlapping the browser frame */
  phoneImage?: string
  /** Text shown in the browser address bar when no public URL should be displayed */
  frameLabel?: string
  url?: string
  github?: string
  /** A related public page when the project itself is private (e.g. the marketing site) */
  publicSite?: { label: string; url: string }
  nda?: boolean
}

export const featured: CaseStudy[] = [
  {
    title: "Alpha Squad",
    tagline: "Studio website for a product design & software development team",
    client: "AlphaSquad",
    meta: { label: "Category", value: "Agency Website" },
    overview: [
      "Built the full-screen hero with rotating client testimonials and smooth transitions.",
      "Developed case-study pages with a consistent layout for client, timeframe, overview and stack.",
      "Implemented the client logo strip, impact stats and consultation booking flow.",
      "Optimized media delivery from AWS S3 and added a branded preloader for a polished first paint.",
      "Used SSR and image optimization for strong SEO and fast Core Web Vitals; built reusable animated components for the services and portfolio.",
    ],
    stack: ["Next.js", "React", "TailwindCSS"],
    image: "/images/projects/alphasquad.jpg",
    url: "https://www.alphasquad.studio/",
  },
  {
    title: "PayOn",
    tagline: "Restaurant portal and themeable customer ordering app",
    client: "PayOn",
    meta: { label: "Scope", value: "Restaurant & Customer Apps" },
    overview: [
      "Built the restaurant-side portal: secure login, dashboard, orders, menu, tables, POS, staff and finance screens.",
      "Built the customer-side app that guests open from the table QR: welcome screen, live order status, menu, cart and bill.",
      "Developed 7 switchable themes for the customer app so each restaurant can match its own brand.",
      "Handled data fetching, caching and live updates with Redux Toolkit Query.",
      "Built a consistent, accessible UI on shadcn/ui components with TailwindCSS, plus multi-language support.",
      "Also built the official PayOn website (payon.app): responsive, mobile-first, with SSR and image optimization for SEO.",
    ],
    stack: ["Next.js", "TailwindCSS", "Redux Toolkit Query", "shadcn/ui"],
    image: "/images/projects/payon-dashboard.jpg",
    phoneImage: "/images/projects/payon-customer.jpg",
    frameLabel: "PayOn · Restaurant Portal",
    publicSite: { label: "payon.app (marketing site)", url: "https://payon.app/" },
  },
  {
    title: "EZ Oil Drain Valve",
    tagline: "E-commerce storefront for oil drain valves",
    client: "EZ Oil Drain Valve",
    meta: { label: "Category", value: "E-commerce" },
    overview: [
      "Led the frontend: product listing, detail and checkout pages on Next.js SSR for strong SEO and fast first loads.",
      "Integrated Saleor GraphQL APIs for the catalog, inventory and order management.",
      "Built dynamic filtering, search and the cart with Redux Toolkit.",
      "Optimized image delivery and asset caching through AWS CloudFront for fast global loads.",
    ],
    stack: ["Next.js", "React", "Redux Toolkit", "TailwindCSS", "GraphQL", "Saleor"],
    image: "/images/projects/ezoil.jpg",
    url: "https://ezoildrainvalve.com/",
  },
  {
    title: "Prestige Mustang",
    tagline: "Premium Mustang parts store with 30+ years of heritage",
    client: "Prestige Mustang",
    meta: { label: "Category", value: "E-commerce" },
    overview: [
      "Built advanced product filtering and search across Mustang generations.",
      "Tuned SSR and rendering to improve Core Web Vitals.",
      "Integrated social feeds and newsletter sign-up flows into the storefront.",
      "Connected the catalog to Saleor through GraphQL.",
    ],
    stack: ["Next.js", "React", "TailwindCSS", "GraphQL", "Saleor"],
    image: "/images/projects/prestige.jpg",
    url: "https://prestigemustang.com/",
  },
  {
    title: "MonkeyTilt",
    tagline: "Full-featured online gaming platform",
    client: "MonkeyTilt",
    meta: { label: "Role", value: "Frontend Lead" },
    overview: [
      "Led the full development lifecycle, from planning to deployment.",
      "Designed custom Next.js middleware for performance, routing and security.",
      "Integrated Firebase for authentication, the real-time database and cloud functions.",
      "Optimized Next.js server-side rendering for scalability.",
      "Managed global state with Redux and live updates over WebSockets.",
    ],
    stack: ["Next.js", "TypeScript", "Redux", "WebSocket", "REST APIs"],
    image: "/images/projects/monkeytilt.jpg",
    url: "https://monkeytilt.com/",
  },
  {
    title: "Plump",
    tagline: "Modern web platform with a clean, responsive UI",
    client: "Plump",
    meta: { label: "Category", value: "Web Platform" },
    overview: [
      "Built a reusable component library for design consistency.",
      "Integrated RESTful APIs and WebSockets, with state managed in Redux.",
      "Kept the layouts cross-browser compatible and mobile-first throughout.",
    ],
    stack: ["React", "Next.js", "Redux", "TailwindCSS", "WebSocket"],
    image: "/images/projects/plump.jpg",
    url: "https://plump.com/",
  },
]

export const more: CaseStudy[] = [
  {
    title: "Repair Management System",
    tagline: "Simplify. Organize. Resolve.",
    client: "Confidential",
    meta: { label: "Timeframe", value: "Nov 2022 (3 Weeks)" },
    overview: [
      "Delivered the internal and customer-facing apps in three weeks.",
      "Built an embeddable tracking widget with auto-generated ticket IDs.",
      "Added hashtag grouping, color-coded tags and tag-based reordering of 1000+ tickets.",
      "Built custom analytics charts and auto-filled solutions from a list of diagnoses.",
    ],
    stack: ["React", "Next.js", "TailwindCSS"],
    image: "/images/projects/rms.jpg",
    nda: true,
  },
  {
    title: "Foose Performance",
    tagline: "Parts and accessories made for real trucks",
    client: "Foose Performance",
    meta: { label: "Category", value: "E-commerce" },
    overview: [
      "Built the web platform for a diesel truck repair shop and parts store, with catalog pages for Cummins, Duramax and Powerstroke upgrades.",
      "Added dynamic search with Year / Make / Model vehicle filtering.",
      "Improved performance with code splitting and lazy loading.",
    ],
    stack: ["Next.js", "TailwindCSS", "GraphQL", "Saleor"],
    image: "/images/projects/foose.jpg",
    url: "https://fooseperf.com/",
  },
  {
    title: "Jess Performance",
    tagline: "Diesel power & performance, built in Shipshewana",
    client: "Jess Performance",
    meta: { label: "Category", value: "E-commerce" },
    overview: [
      "Built the power package configurator and parts browsing.",
      "Built a smooth cart and checkout flow with Redux Toolkit.",
      "Integrated the Saleor GraphQL catalog.",
    ],
    stack: ["Next.js", "TailwindCSS", "Redux Toolkit", "GraphQL", "Saleor"],
    image: "/images/projects/jess.jpg",
    url: "https://jessperformance.com/",
  },
]

export const personal: CaseStudy = {
  title: "MERN Auth & Admin Dashboard",
  tagline: "Full-stack app with secure auth and an admin panel",
  client: "Personal Project",
  meta: { label: "Type", value: "Open Source" },
  overview: [
    "Built stateless JWT authentication with bcrypt-hashed passwords.",
    "Added role-based access control on top of a full admin dashboard.",
    "Admins can view and delete registered users and contact form submissions.",
  ],
  stack: ["React", "Node.js", "Express.js", "MongoDB", "JWT", "TailwindCSS"],
  image: "/images/projects/mern.jpg",
  url: "https://mern-project-beta-six.vercel.app",
  github: "https://github.com/Ahtishamkayani01/MERN-Project",
}
