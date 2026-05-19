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
    padding: 25,
    fontFamily: "Helvetica",
    fontSize: 8,
    color: "#1a1a2e",
    backgroundColor: "#ffffff",
  },
  header: {
    marginBottom: 10,
    borderBottomWidth: 2,
    borderBottomColor: "#1a1a2e",
    paddingBottom: 8,
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
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 9,
    fontFamily: "Helvetica-Bold",
    color: "#1a1a2e",
    borderBottomWidth: 1,
    borderBottomColor: "#1a1a2e",
    paddingBottom: 2,
    marginBottom: 5,
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  summaryText: {
    fontSize: 7.5,
    lineHeight: 1.4,
    color: "#444444",
  },
  experienceItem: {
    marginBottom: 6,
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
    lineHeight: 1.3,
    color: "#444444",
  },
  twoColumn: {
    flexDirection: "row",
    gap: 12,
  },
  leftColumn: {
    flex: 2,
  },
  rightColumn: {
    flex: 1,
  },
  skillCategory: {
    marginBottom: 3,
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
    marginBottom: 5,
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

function CVDocument() {
  return (
    <Document>
      <Page size="A4" style={styles.page}>

        {/* ── Header ── */}
        <View style={styles.header}>
          <Text style={styles.name}>EHTISHAM NAWAZ KIANI</Text>
          <Text style={styles.title}>FRONTEND ENGINEER</Text>
          
          {/* Contact Row 1 - Email and Phone */}
          <View style={styles.contactRow}>
            <Text style={styles.contactItem}>Email:</Text>
            <Link src="mailto:ahtishamkayani01@gmail.com" style={styles.contactLink}>
              ahtishamkayani01@gmail.com
            </Link>
            <Text style={styles.contactItem}>| Phone: +923035957991 | Location: Islamabad, Pakistan</Text>
          </View>
          
          {/* Contact Row 2 - LinkedIn */}
          <View style={styles.contactRow}>
            <Text style={styles.contactItem}>LinkedIn:</Text>
            <Link src="https://www.linkedin.com/in/ehtisham-nawaz-kiyani-704a98173/" style={styles.contactLink}>
              linkedin.com/in/ehtisham-nawaz-kiyani-704a98173
            </Link>
          </View>
        </View>

        {/* ── Summary ── */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Summary</Text>
          <Text style={styles.summaryText}>
            Results-driven Frontend Developer with 5 years of experience specializing in crafting responsive, scalable web applications using modern JavaScript frameworks. Demonstrated expertise in React.js, Next.js, and UI/UX design principles, with a proven track record of enhancing user engagement and optimizing application performance. Adept at collaborating with cross-functional teams to deliver high-quality projects on time and within budget.
          </Text>
        </View>

        {/* ── Work Experience ── */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Work Experience</Text>

          <View style={styles.experienceItem}>
            <View style={styles.jobHeader}>
              <Text style={styles.jobTitle}>Lead Frontend Developer — Alpha Squad</Text>
              <Text style={styles.jobDate}>02/2022 – May 2026</Text>
            </View>
            <Text style={styles.company}>Islamabad, Pakistan</Text>
            <BulletItem text="Led a team of frontend developers, providing mentorship, task assignments, and daily progress tracking to ensure timely project delivery." />
            <BulletItem text="Spearheaded the development of reusable UI components, improving code maintainability by 35%." />
            <BulletItem text="Integrated third-party APIs to enhance application functionality, reducing development time by 30%." />
            <BulletItem text="Conducted code reviews and implemented best practices, resulting in an almost 60% reduction in bugs and improved code quality." />
            <BulletItem text="Optimized app performance by leveraging advanced React hooks like useMemo and useCallback, leading to reduction in load times." />
            <BulletItem text="Collaborated with back-end teams to implement efficient API integrations, ensuring seamless data flow across applications." />
            <BulletItem text="Facilitated daily stand-ups and sprint planning meetings, ensuring alignment with project goals and timelines." />
          </View>

          <View style={styles.experienceItem}>
            <View style={styles.jobHeader}>
              <Text style={styles.jobTitle}>Frontend Developer — Alpha Squad</Text>
              <Text style={styles.jobDate}>11/2021 – 02/2022</Text>
            </View>
            <Text style={styles.company}>Islamabad, Pakistan</Text>
            <BulletItem text="Maintained and developed web applications using Next.js and modern CSS frameworks." />
            <BulletItem text="Created a library of reusable React components, accelerating project timelines by 15%." />
            <BulletItem text="Led the migration of legacy codebases to modern React practices, improving performance and reducing technical debt." />
            <BulletItem text="Developed custom UI solutions tailored to client needs, contributing to a 20% increase in customer satisfaction." />
          </View>
        </View>

        {/* ── Education ── */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Education</Text>
          <View style={styles.educationItem}>
            <View style={styles.jobHeader}>
              <Text style={styles.degree}>Bachelor of Software Engineering — Riphah International University</Text>
              <Text style={styles.jobDate}>09/2018 – 09/2022</Text>
            </View>
            <Text style={styles.school}>Islamabad, Pakistan</Text>
          </View>
        </View>

        {/* ── Two Column: Skills + Right Panel ── */}
        <View style={styles.twoColumn}>
          <View style={styles.leftColumn}>

            {/* Technical Skills */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Technical Skills</Text>
              {[
                ["Programming Languages", "JavaScript (ES6+), TypeScript, HTML5, CSS3, Sass"],
                ["Also Familiar With", "Node.js, Express.js, Go (Golang) — WebSocket-based chat apps, REST APIs, basic CRUD operations"],
                ["Frameworks & Libraries", "React.js, Next.js, Three.js, React Three Fiber, Redux, Redux Toolkit, React Query, Vue.js, Styled Components, TailwindCSS, Material-UI, Bootstrap"],
                ["State Management", "Redux, Context API, React Query"],
                ["APIs", "RESTful APIs, Axios, WebSockets"],
                ["Automation & Code Quality", "ESLint, Husky, Prettier, pre-commit hooks"],
                ["CI/CD & Release Management", "GitHub Actions, CI/CD pipelines, Git branching workflows (GitFlow, trunk-based)"],
                ["Testing", "Jest, Cypress"],
                ["Build Tools", "Webpack, Babel, Gulp, Grunt"],
                ["Cloud Platforms & DevOps", "AWS (S3, CloudFront, Lambda), Azure, Docker, Kubernetes"],
                ["Architecture", "Micro Frontends, Mono Repo setups, Design Systems, Reusable UI Architecture"],
                ["Collaboration Tools", "Slack, Microsoft Teams, Zoom"],
                ["API & Development Tools", "Postman, Chrome DevTools"],
                ["Version Control", "Git, GitHub"],
                ["Project Management", "Agile/Scrum, Jira, Trello, Asana, Confluence"],
                ["Design & Prototyping", "Figma, Adobe XD"],
              ].map(([label, value]) => (
                <View key={label} style={styles.skillCategory}>
                  <Text style={styles.skillCategoryTitle}>{label}</Text>
                  <Text style={styles.skillText}>{value}</Text>
                </View>
              ))}
            </View>

          </View>
          <View style={styles.rightColumn}>

            {/* Professional Projects */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Professional Projects</Text>

              {[
                { name: "EZ Oil Drain Valve", url: "https://ezoildrainvalve.com/", desc: "E-commerce. Next.js SSR, Saleor APIs, Redux Toolkit." },
                { name: "Prestige Mustang", url: "https://prestigemustang.com/", desc: "Mustang parts e-commerce. Advanced filtering, SSR optimization." },
                { name: "Monkey Tilt", url: "https://monkeytilt.com/", desc: "Online gaming platform. Next.js middleware, Firebase auth." },
                { name: "Plump", url: "https://plump.com/", desc: "Web platform with reusable component library, REST APIs." },
                { name: "Foose Performance", url: "https://fooseperf.com/", desc: "Diesel truck parts store. Product catalog, code splitting." },
                { name: "Jess Performance", url: "https://jessperformance.com/", desc: "Performance parts e-commerce. Configurator, Redux Toolkit." },
              ].map((p) => (
                <View key={p.name} style={styles.projectBlock}>
                  <View style={{ flexDirection: "row", gap: 4, alignItems: "center", marginBottom: 1, flexWrap: "wrap" }}>
                    <Text style={styles.projectTitle}>{p.name}</Text>
                    <Link src={p.url} style={styles.projectLink}>{p.url.replace("https://", "")}</Link>
                  </View>
                  <Text style={styles.skillText}>{p.desc}</Text>
                </View>
              ))}
            </View>

            {/* Personal Project - Shortened for one page */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Personal Project</Text>

              <View style={styles.personalProjectBlock}>
                <View style={styles.personalProjectHeader}>
                  <Text style={styles.personalProjectTitle}>MERN Stack Auth & Admin Dashboard</Text>
                </View>
                <View style={{ flexDirection: "row", gap: 4, marginBottom: 2, flexWrap: "wrap" }}>
                  <Link src="https://mern-project-beta-six.vercel.app" style={styles.projectLink}>
                    Live Demo
                  </Link>
                  <Text style={{ fontSize: 7, color: "#999" }}>|</Text>
                  <Link src="https://github.com/Ahtishamkayani01/MERN-Project" style={styles.projectLink}>
                    Github
                  </Link>
                </View>
                <BulletItem text="Full-stack MERN with JWT auth (bcrypt hashing) & RBAC on frontend/backend." />
                <BulletItem text="Admin dashboard: view/delete users & contact submissions." />
                <BulletItem text="Deployed on Vercel (frontend + serverless backend)." />
              </View>
            </View>

            {/* Languages */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Languages</Text>
              <View style={styles.languageItem}>
                <Text style={{ fontFamily: "Helvetica-Bold", color: "#1a1a2e" }}>English</Text>
                <Text style={{ color: "#666666" }}>Full Professional</Text>
              </View>
              <View style={styles.languageItem}>
                <Text style={{ fontFamily: "Helvetica-Bold", color: "#1a1a2e" }}>Urdu</Text>
                <Text style={{ color: "#666666" }}>Full Professional</Text>
              </View>
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