import { renderToBuffer } from "@react-pdf/renderer"
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Link,
} from "@react-pdf/renderer"

const styles = StyleSheet.create({
  page: {
    paddingVertical: 20,
    paddingHorizontal: 25,
    fontFamily: "Helvetica",
    fontSize: 8,
    color: "#1a1a2e",
    backgroundColor: "#ffffff",
  },
  header: {
    marginBottom: 7,
    borderBottomWidth: 2,
    borderBottomColor: "#1a1a2e",
    paddingBottom: 6,
  },
  name: {
    fontSize: 22,
    fontFamily: "Helvetica-Bold",
    color: "#1a1a2e",
    marginBottom: 2,
  },
  title: {
    fontSize: 12,
    color: "#555555",
    marginBottom: 6,
  },
  contactRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    fontSize: 8,
    color: "#666666",
    marginBottom: 3,
  },
  contactItem: {
    color: "#666666",
  },
  contactLink: {
    color: "#1155CC",
    textDecoration: "none",
  },
  contactIcon: {
    fontFamily: "Helvetica",
    fontSize: 8,
    color: "#666666",
    marginRight: 2,
  },
  section: {
    marginBottom: 6,
  },
  sectionTitle: {
    fontSize: 9,
    fontFamily: "Helvetica-Bold",
    color: "#1a1a2e",
    borderBottomWidth: 1,
    borderBottomColor: "#1a1a2e",
    paddingBottom: 2,
    marginBottom: 4,
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  summaryText: {
    fontSize: 7.5,
    lineHeight: 1.4,
    color: "#444444",
  },
  experienceItem: {
    marginBottom: 4,
  },
  jobHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 1,
  },
  jobTitle: {
    fontSize: 9,
    fontFamily: "Helvetica-Bold",
    color: "#1a1a2e",
  },
  jobDate: {
    fontSize: 7.5,
    color: "#666666",
    fontFamily: "Helvetica-Oblique",
  },
  company: {
    fontSize: 8,
    color: "#444444",
    marginBottom: 2,
    fontFamily: "Helvetica-Oblique",
  },
  bulletPoint: {
    flexDirection: "row",
    marginBottom: 1,
    paddingLeft: 4,
  },
  bullet: {
    width: 6,
    color: "#1a1a2e",
    fontSize: 7.5,
  },
  bulletText: {
    flex: 1,
    fontSize: 7.5,
    lineHeight: 1.25,
    color: "#444444",
  },
  twoColumn: {
    flexDirection: "row",
    gap: 12,
  },
  leftColumn: {
    flex: 1.4,
  },
  rightColumn: {
    flex: 1.15,
  },
  skillCategory: {
    marginBottom: 2.5,
  },
  skillCategoryTitle: {
    fontSize: 7.5,
    fontFamily: "Helvetica-Bold",
    color: "#1a1a2e",
    marginBottom: 1,
  },
  skillText: {
    fontSize: 7,
    color: "#444444",
    lineHeight: 1.3,
  },
  educationItem: {
    marginBottom: 4,
  },
  degree: {
    fontSize: 8,
    fontFamily: "Helvetica-Bold",
    color: "#1a1a2e",
  },
  school: {
    fontSize: 7.5,
    color: "#666666",
  },
  projectBlock: {
    marginBottom: 4,
  },
  projectTitle: {
    fontSize: 8,
    fontFamily: "Helvetica-Bold",
    color: "#1a1a2e",
    marginBottom: 1,
  },
  projectLink: {
    fontSize: 7,
    color: "#1155CC",
    textDecoration: "none",
  },
  languageItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 2,
    fontSize: 7.5,
  },
  activitiesText: {
    fontSize: 7,
    color: "#444444",
    lineHeight: 1.3,
    marginBottom: 3,
  },
  activitiesTitle: {
    fontSize: 7.5,
    fontFamily: "Helvetica-Bold",
    color: "#1a1a2e",
    borderBottomWidth: 0.5,
    borderBottomColor: "#AAAAAA",
    paddingBottom: 2,
    marginBottom: 4,
    marginTop: 6,
  },
  personalProjectBlock: {
    marginBottom: 6,
    padding: 4,
    backgroundColor: "#f8f9ff",
    borderLeftWidth: 2,
    borderLeftColor: "#1a1a2e",
  },
  personalProjectHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 2,
  },
  personalProjectTitle: {
    fontSize: 8,
    fontFamily: "Helvetica-Bold",
    color: "#1a1a2e",
    flex: 1,
  },
  tagRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 3,
    marginBottom: 3,
    marginTop: 2,
  },
  tag: {
    fontSize: 6,
    color: "#1a1a2e",
    backgroundColor: "#e8eaf6",
    paddingHorizontal: 3,
    paddingVertical: 1,
    borderRadius: 2,
  },
})

function BulletItem({ text }: { text: string }) {
  return (
    <View style={styles.bulletPoint}>
      <Text style={styles.bullet}>•</Text>
      <Text style={styles.bulletText}>{text}</Text>
    </View>
  )
}

const skills: [string, string][] = [
  ["Languages", "JavaScript (ES6+), TypeScript, HTML5, CSS3, Sass"],
  ["Frameworks & Libraries", "React.js, Next.js, Redux, Redux Toolkit, React Query, Vue.js, Three.js, React Three Fiber, TailwindCSS, Styled Components, Material-UI, Bootstrap"],
  ["Backend & APIs", "Node.js, Express.js, Go (Golang), MongoDB, RESTful API design, WebSockets, Axios"],
  ["Performance", "SSR/SSG, code splitting, lazy loading, memoization, image optimization, CDN/CloudFront caching, Core Web Vitals tuning, bundle analysis (Webpack Bundle Analyzer)"],
  ["Architecture", "Micro Frontends, Monorepo setups, Design Systems, Reusable UI Architecture"],
  ["Testing & Code Quality", "Jest, Cypress, ESLint, Prettier, Husky pre-commit hooks"],
  ["CI/CD & Tools", "GitHub Actions, Git (GitFlow, trunk-based), Webpack, Babel, Postman, Chrome DevTools"],
  ["AI & Productivity", "Claude Code, GitHub Copilot, AI-assisted code generation and review, prompt engineering for dev workflows"],
  ["Project Management & Design", "Agile/Scrum, Jira, Trello, Asana, Confluence, Figma, Adobe XD"],
]

const projects: { name: string; url?: string; note?: string; desc: string }[] = [
  { name: "PayOn", url: "https://payon.app/", desc: "Official website. Next.js, React.js, responsive mobile-first; presents order, payment and table-flow features; SSR + image optimization for SEO." },
  { name: "AlphaSquad", url: "https://www.alphasquad.studio/", desc: "Agency website. Next.js, TailwindCSS, SSR + image optimization for Core Web Vitals; reusable animated UI components." },
  { name: "Monkey Tilt", url: "https://monkeytilt.com/", desc: "Led full lifecycle. Custom Next.js middleware for performance & security; Firebase auth, real-time DB, cloud functions; Redux; SSR for scale." },
  { name: "EZ Oil Drain Valve", url: "https://ezoildrainvalve.com/", desc: "Led e-commerce frontend. Next.js SSR listing/detail/checkout; Saleor catalog, inventory & orders; Redux Toolkit filtering, search, cart; CloudFront caching." },
  { name: "Prestige Mustang", url: "https://prestigemustang.com/", desc: "Mustang parts store. Catalog, search & filtering with TailwindCSS; SSR + image optimization; social feeds and newsletter flows." },
  { name: "Foose Performance", url: "https://fooseperf.com/", desc: "Diesel truck shop & parts store. Cummins, Duramax, Powerstroke catalog; parts search & filtering; code splitting, lazy loading." },
  { name: "Plump", note: "Not public", desc: "Responsive React.js UI with reusable component library; REST APIs with Redux; cross-browser, mobile-first." },
  { name: "Jess Performance", url: "https://jessperformance.com/", desc: "Diesel performance store. Power package configurator, parts browsing; Redux Toolkit cart & checkout; Saleor GraphQL catalog." },
  { name: "Repair Management System", note: "Confidential (NDA)", desc: "Internal & customer apps in 3 weeks: embeddable tracking widget, auto ticket IDs, color-coded tag grouping & reordering of 1000+ tickets, analytics charts." },
]

function CVDocument() {
  return (
    <Document>
      <Page size="A4" style={styles.page}>

        {/* ── Header ── */}
        <View style={styles.header}>
          <Text style={styles.name}>EHTISHAM NAWAZ KIANI</Text>
          <Text style={styles.title}>Senior Frontend Engineer | React.js | Next.js | TypeScript</Text>
          <View style={styles.contactRow}>
            <Text style={styles.contactItem}>Islamabad, Pakistan | +92 303 5957991 |</Text>
            <Link src="mailto:ahtishamkayani01@gmail.com" style={styles.contactLink}>ahtishamkayani01@gmail.com</Link>
            <Text style={styles.contactItem}>|</Text>
            <Link src="https://github.com/Ahtishamkayani01" style={styles.contactLink}>github.com/Ahtishamkayani01</Link>
          </View>
          <View style={styles.contactRow}>
            <Link src="https://www.linkedin.com/in/ehtisham-nawaz-kiyani-704a98173/" style={styles.contactLink}>
              linkedin.com/in/ehtisham-nawaz-kiyani-704a98173
            </Link>
            <Text style={styles.contactItem}>| Portfolio:</Text>
            <Link src="https://ehtisham-portfolio-eta.vercel.app" style={styles.contactLink}>ehtisham-portfolio-eta.vercel.app</Link>
          </View>
        </View>

        {/* ── Summary ── */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Professional Summary</Text>
          <Text style={styles.summaryText}>
            Senior Frontend Engineer with 5+ years building responsive, scalable, high-performance web applications with React.js, Next.js and TypeScript. Led frontend teams, architected reusable component libraries and design systems, and integrated RESTful and WebSocket APIs for real-time products. Experienced in performance optimization (SSR/SSG, code splitting, Core Web Vitals), micro-frontend architecture and CI/CD automation. Use AI developer tools (Claude Code, GitHub Copilot) to speed up development, testing and code review. Strong collaborator with design, backend and product teams, focused on reliable, user-centered software.
          </Text>
        </View>

        {/* ── Work Experience ── */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Work Experience</Text>

          <View style={styles.experienceItem}>
            <View style={styles.jobHeader}>
              <Text style={styles.jobTitle}>Senior Frontend Engineer — PayOn</Text>
              <Text style={styles.jobDate}>Jun 2026 – Present</Text>
            </View>
            <Text style={styles.company}>Remote | Transactional orchestration platform for the HoReCa (Hotel, Restaurant, Café) industry</Text>
            <BulletItem text="Building the frontend of PayOn, redefining how dining operations manage orders, payments and table flows." />
            <BulletItem text="Architecting React.js/Next.js staff dashboards and guest payment flows from complex real-time data: live orders, bill-splitting and payment orchestration across a multitenant SaaS for restaurants and hospitality venues." />
            <BulletItem text="Defining API contracts and data models with backend and product for real-time WebSocket order and payment events; establishing frontend standards, component architecture and CI/CD for a greenfield product." />
          </View>

          <View style={styles.experienceItem}>
            <View style={styles.jobHeader}>
              <Text style={styles.jobTitle}>Lead Frontend Developer — Alpha Squad</Text>
              <Text style={styles.jobDate}>Feb 2023 – May 2026</Text>
            </View>
            <Text style={styles.company}>Islamabad, Pakistan</Text>
            <BulletItem text="Led a team of frontend engineers: mentorship, task assignment, daily progress tracking and Agile ceremonies (stand-ups, sprint planning, retrospectives) for on-time delivery." />
            <BulletItem text="Spearheaded a reusable UI component library across projects; implemented micro-frontend architecture and monorepos for independently deployable modules." />
            <BulletItem text="Optimized performance with useMemo, useCallback, code splitting and lazy loading, reducing load times and improving Core Web Vitals." />
            <BulletItem text="Established code reviews with ESLint, Prettier and Husky pre-commit hooks, achieving a major reduction in production bugs; designed RESTful API integrations with backend teams." />
            <BulletItem text="Used AI developer tools (Claude Code, GitHub Copilot) for code generation, automated testing and code review, boosting team productivity." />
          </View>

          <View style={styles.experienceItem}>
            <View style={styles.jobHeader}>
              <Text style={styles.jobTitle}>Frontend Developer — Alpha Squad</Text>
              <Text style={styles.jobDate}>Nov 2021 – Feb 2023</Text>
            </View>
            <Text style={styles.company}>Islamabad, Pakistan</Text>
            <BulletItem text="Built and maintained Next.js/React.js apps with TailwindCSS and Styled Components; created a reusable React component library that standardized UI patterns and sped up timelines." />
            <BulletItem text="Migrated legacy codebases to modern React (hooks, functional components), reducing technical debt; built custom client UI that measurably improved customer satisfaction." />
          </View>
        </View>

        {/* ── Two Column: Skills + Projects ── */}
        <View style={styles.twoColumn}>
          <View style={styles.leftColumn}>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Technical Skills</Text>
              {skills.map(([label, value]) => (
                <View key={label} style={styles.skillCategory}>
                  <Text style={styles.skillCategoryTitle}>{label}</Text>
                  <Text style={styles.skillText}>{value}</Text>
                </View>
              ))}
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Education</Text>
              <View style={styles.jobHeader}>
                <Text style={styles.degree}>Bachelor of Software Engineering — Riphah International University</Text>
              </View>
              <Text style={styles.school}>Islamabad, Pakistan | Sep 2018 – Sep 2022</Text>
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Personal Project</Text>
              <View style={styles.personalProjectBlock}>
                <View style={styles.personalProjectHeader}>
                  <Text style={styles.personalProjectTitle}>MERN Authentication & Admin Dashboard</Text>
                </View>
                <View style={{ flexDirection: "row", gap: 4, marginBottom: 2, flexWrap: "wrap" }}>
                  <Link src="https://mern-project-beta-six.vercel.app" style={styles.projectLink}>Live Demo</Link>
                  <Text style={{ fontSize: 7, color: "#999" }}>|</Text>
                  <Link src="https://github.com/Ahtishamkayani01/MERN-Project" style={styles.projectLink}>GitHub</Link>
                </View>
                <BulletItem text="bcrypt password hashing, stateless JWT auth and role-based access control across React and Express." />
                <BulletItem text="Admin dashboard for users and contact submissions, with protected routes on frontend and backend." />
              </View>
            </View>
          </View>

          <View style={styles.rightColumn}>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Professional Projects</Text>
              {projects.map((p) => (
                <View key={p.name} style={styles.projectBlock}>
                  <View style={{ flexDirection: "row", gap: 4, alignItems: "center", marginBottom: 1, flexWrap: "wrap" }}>
                    <Text style={styles.projectTitle}>{p.name}</Text>
                    {p.url ? (
                      <Link src={p.url} style={styles.projectLink}>{p.url.replace("https://", "").replace("www.", "")}</Link>
                    ) : (
                      <Text style={{ fontSize: 7, color: "#888888" }}>{p.note}</Text>
                    )}
                  </View>
                  <Text style={styles.skillText}>{p.desc}</Text>
                </View>
              ))}
            </View>


            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Additional Information</Text>
              <Text style={styles.skillText}>
                <Text style={{ fontFamily: "Helvetica-Bold", color: "#1a1a2e" }}>Languages: </Text>
                English (Full Professional Proficiency), Urdu (Native)
              </Text>
              <Text style={styles.skillText}>
                <Text style={{ fontFamily: "Helvetica-Bold", color: "#1a1a2e" }}>Activities: </Text>
                Contributed to the launch of multiple high-impact client projects; active in tech meetups and frontend workshops.
              </Text>
            </View>
          </View>
        </View>

      </Page>
    </Document>
  )
}

export async function GET() {
  const buffer = await renderToBuffer(<CVDocument />)
  // Convert Buffer to Uint8Array
  const uint8Array = new Uint8Array(buffer)
  return new Response(uint8Array, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="Ehtisham_Nawaz_Kiani_CV.pdf"',
    },
  })
}