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
    borderBottomColor: "#2563eb",
    paddingBottom: 8,
  },
  headerTop: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerLeft: {
    flex: 2,
  },
  headerRight: {
    flex: 1,
    alignItems: "flex-end",
  },
  name: {
    fontSize: 22,
    fontFamily: "Helvetica-Bold",
    color: "#1a1a2e",
    marginBottom: 2,
  },
  title: {
    fontSize: 12,
    color: "#2563eb",
    marginBottom: 6,
  },
  contactRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    fontSize: 8,
    color: "#666666",
  },
  contactItem: {
    color: "#666666",
  },
  detailsBox: {
    fontSize: 8,
    color: "#666666",
  },
  detailLabel: {
    fontFamily: "Helvetica-Bold",
    color: "#1a1a2e",
    fontSize: 7,
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  detailValue: {
    marginBottom: 4,
  },
  section: {
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 10,
    fontFamily: "Helvetica-Bold",
    color: "#2563eb",
    borderBottomWidth: 1,
    borderBottomColor: "#e5e7eb",
    paddingBottom: 2,
    marginBottom: 5,
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  summaryText: {
    fontSize: 8,
    lineHeight: 1.4,
    color: "#444444",
  },
  experienceItem: {
    marginBottom: 6,
  },
  jobHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 2,
  },
  jobTitle: {
    fontSize: 10,
    fontFamily: "Helvetica-Bold",
    color: "#1a1a2e",
  },
  jobDate: {
    fontSize: 8,
    color: "#666666",
  },
  company: {
    fontSize: 9,
    color: "#2563eb",
    marginBottom: 4,
  },
  bulletPoint: {
    flexDirection: "row",
    marginBottom: 1,
    paddingLeft: 4,
  },
  bullet: {
    width: 5,
    color: "#2563eb",
  },
  bulletText: {
    flex: 1,
    fontSize: 7.5,
    lineHeight: 1.3,
    color: "#444444",
  },
  twoColumn: {
    flexDirection: "row",
    gap: 10,
  },
  leftColumn: {
    flex: 2,
  },
  rightColumn: {
    flex: 1,
  },
  skillCategory: {
    marginBottom: 4,
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
    lineHeight: 1.2,
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
    fontSize: 7,
    color: "#666666",
  },
  projectLink: {
    fontSize: 6.5,
    color: "#2563eb",
    textDecoration: "none",
    marginBottom: 1,
  },
  languageItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 2,
    fontSize: 7,
  },
  activitiesText: {
    fontSize: 7,
    color: "#444444",
    lineHeight: 1.3,
    marginBottom: 3,
  },
})

function CVDocument() {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerTop}>
            <View style={styles.headerLeft}>
              <Text style={styles.name}>EHTISHAM NAWAZ KIANI</Text>
              <Text style={styles.title}>Lead Frontend Developer</Text>
              <View style={styles.contactRow}>
                <Text style={styles.contactItem}>Islamabad, Pakistan</Text>
                <Text style={styles.contactItem}>|</Text>
                <Link src="mailto:ahtishamkayani01@gmail.com" style={styles.contactItem}>
                  ahtishamkayani01@gmail.com
                </Link>
                <Text style={styles.contactItem}>|</Text>
                <Text style={styles.contactItem}>03165416947</Text>
              </View>
            </View>
            <View style={styles.headerRight}>
              <View style={styles.detailsBox}>
                <Text style={styles.detailLabel}>Date of Birth</Text>
                <Text style={styles.detailValue}>14-09-1999</Text>
                <Text style={styles.detailLabel}>Nationality</Text>
                <Text style={styles.detailValue}>Pakistani</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Summary */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Summary</Text>
          <Text style={styles.summaryText}>
            Results-driven Frontend Developer with 5 years of experience specializing in crafting responsive, scalable web applications using modern JavaScript frameworks. Demonstrated expertise in React.js, Next.js, and UI/UX design principles, with a proven track record of enhancing user engagement and optimizing application performance. Adept at collaborating with cross-functional teams to deliver high-quality projects on time and within budget.
          </Text>
        </View>

        {/* Work Experience */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Work Experience</Text>

          <View style={styles.experienceItem}>
            <View style={styles.jobHeader}>
              <Text style={styles.jobTitle}>Lead Frontend Developer</Text>
              <Text style={styles.jobDate}>Feb 2022 - Present</Text>
            </View>
            <Text style={styles.company}>Alpha Squad | Islamabad, Pakistan</Text>
            <View style={styles.bulletPoint}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.bulletText}>
                Led a team of front-end developers, providing mentorship, task assignments, and daily progress tracking to ensure timely project delivery
              </Text>
            </View>
            <View style={styles.bulletPoint}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.bulletText}>
                Spearheaded the development of reusable UI components, improving code maintainability by 35%
              </Text>
            </View>
            <View style={styles.bulletPoint}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.bulletText}>
                Integrated third-party API to enhance application functionality, reducing development time by 30%
              </Text>
            </View>
            <View style={styles.bulletPoint}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.bulletText}>
                Conducted code reviews and implemented best practices, resulting in an almost 60% reduction in bugs and improved code quality
              </Text>
            </View>
            <View style={styles.bulletPoint}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.bulletText}>
                Optimized app performance by leveraging advanced React hooks like useMemo and useCallback, leading to a reduction in load times
              </Text>
            </View>
            <View style={styles.bulletPoint}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.bulletText}>
                Collaborated with back-end teams to implement efficient API integrations, ensuring seamless data flow across applications
              </Text>
            </View>
            <View style={styles.bulletPoint}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.bulletText}>Facilitated daily stand-ups</Text>
            </View>
          </View>

          <View style={styles.experienceItem}>
            <View style={styles.jobHeader}>
              <Text style={styles.jobTitle}>Frontend Developer</Text>
              <Text style={styles.jobDate}>Nov 2021 - Feb 2022</Text>
            </View>
            <Text style={styles.company}>Alpha Squad | Islamabad, Pakistan</Text>
            <View style={styles.bulletPoint}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.bulletText}>
                Maintained and developed web applications using Next.js and modern CSS frameworks
              </Text>
            </View>
            <View style={styles.bulletPoint}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.bulletText}>
                Created a library of reusable React components, accelerating project timelines by 15%
              </Text>
            </View>
            <View style={styles.bulletPoint}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.bulletText}>
                Led the migration of legacy codebases to modern React practices, improving performance and reducing technical debt
              </Text>
            </View>
            <View style={styles.bulletPoint}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.bulletText}>
                Developed custom UI solutions tailored to client needs, contributing to a 20% increase in customer satisfaction
              </Text>
            </View>
          </View>
        </View>

        {/* Projects at AlphaSquad */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Projects at AlphaSquad</Text>
          <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 4 }}>
            <Link src="https://ezoildrainvalve.com/" style={styles.projectLink}>ezoildrainvalve.com</Link>
            <Link src="https://prestigemustang.com/" style={styles.projectLink}>prestigemustang.com</Link>
            <Link src="https://monkeytilt.com/" style={styles.projectLink}>monkeytilt.com</Link>
            <Link src="https://plump.com/" style={styles.projectLink}>plump.com</Link>
            <Link src="https://fooseperf.com/" style={styles.projectLink}>fooseperf.com</Link>
            <Link src="https://jessperformance.com/" style={styles.projectLink}>jessperformance.com</Link>
            <Link src="https://candlechart.vercel.app/" style={styles.projectLink}>candlechart.vercel.app</Link>
            <Link src="https://3-d-tshirt-customizer-eight.vercel.app/" style={styles.projectLink}>3-d-tshirt-customizer</Link>
            <Link src="https://voice-recorder-demo.vercel.app/" style={styles.projectLink}>voice-recorder-demo</Link>
            <Link src="https://puzzle-app-eight.vercel.app/" style={styles.projectLink}>puzzle-app</Link>
            <Link src="https://magma-demo.vercel.app/" style={styles.projectLink}>magma-demo</Link>
            <Link src="https://webshop-manager.vercel.app/" style={styles.projectLink}>webshop-manager</Link>
            <Link src="https://ahtishamkayani-peach.vercel.app/" style={styles.projectLink}>ahtishamkayani-peach</Link>
          </View>
        </View>

        {/* Two Column Layout */}
        <View style={styles.twoColumn}>
          <View style={styles.leftColumn}>
            {/* Technical Skills */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Technical Skills</Text>

              <View style={styles.skillCategory}>
                <Text style={styles.skillCategoryTitle}>Programming Languages</Text>
                <Text style={styles.skillText}>JavaScript (ES6+), TypeScript, HTML5, CSS3, Sass</Text>
              </View>

              <View style={styles.skillCategory}>
                <Text style={styles.skillCategoryTitle}>Frameworks & Libraries</Text>
                <Text style={styles.skillText}>
                  React.js, Next.js, React, Three.js, React Three Fiber, Redux, Redux Toolkit, React Query, Vue.js, Styled Components, TailwindCSS, Material-UI, Bootstrap
                </Text>
              </View>

              <View style={styles.skillCategory}>
                <Text style={styles.skillCategoryTitle}>State Management</Text>
                <Text style={styles.skillText}>Redux, Context API, React Query</Text>
              </View>

              <View style={styles.skillCategory}>
                <Text style={styles.skillCategoryTitle}>Version Control</Text>
                <Text style={styles.skillText}>Git, GitHub</Text>
              </View>

              <View style={styles.skillCategory}>
                <Text style={styles.skillCategoryTitle}>APIs</Text>
                <Text style={styles.skillText}>RESTful APIs, Axios, WebSockets</Text>
              </View>

              <View style={styles.skillCategory}>
                <Text style={styles.skillCategoryTitle}>Build Tools & Task Runners</Text>
                <Text style={styles.skillText}>Webpack, Babel, Gulp</Text>
              </View>

              <View style={styles.skillCategory}>
                <Text style={styles.skillCategoryTitle}>Cloud Platforms & DevOps</Text>
                <Text style={styles.skillText}>AWS (S3, CloudFront, Lambda), Azure, Docker, Kubernetes</Text>
              </View>

              <View style={styles.skillCategory}>
                <Text style={styles.skillCategoryTitle}>Project Management</Text>
                <Text style={styles.skillText}>Agile/Scrum methodologies, Jira, Trello, Asana, Confluence</Text>
              </View>

              <View style={styles.skillCategory}>
                <Text style={styles.skillCategoryTitle}>Collaboration Tools</Text>
                <Text style={styles.skillText}>Slack, Microsoft Teams, Zoom</Text>
              </View>

              <View style={styles.skillCategory}>
                <Text style={styles.skillCategoryTitle}>Design & Prototyping</Text>
                <Text style={styles.skillText}>Figma, Adobe XD</Text>
              </View>

              <View style={styles.skillCategory}>
                <Text style={styles.skillCategoryTitle}>API & Development Tools</Text>
                <Text style={styles.skillText}>Postman, Chrome DevTools</Text>
              </View>
            </View>
          </View>

          <View style={styles.rightColumn}>
            {/* Education */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Education</Text>
              <View style={styles.educationItem}>
                <Text style={styles.degree}>Riphah International University</Text>
                <Text style={styles.school}>Islamabad i-14 | Pakistan</Text>
                <Text style={styles.school}>Sept 2018 - Sept 2022</Text>
              </View>
            </View>

            {/* Languages */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Languages</Text>
              <View style={styles.languageItem}>
                <Text>English</Text>
                <Text style={{ color: "#666666" }}>Full Professional</Text>
              </View>
              <View style={styles.languageItem}>
                <Text>Urdu</Text>
                <Text style={{ color: "#666666" }}>Full Professional</Text>
              </View>
              <View style={styles.languageItem}>
                <Text>Punjabi</Text>
                <Text style={{ color: "#666666" }}>Full Professional</Text>
              </View>
            </View>

            {/* Additional Information */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Activities</Text>
              <Text style={styles.activitiesText}>
                Played a key role in successfully launching several high-impact projects at Alpha Squad, driving improvements in customer satisfaction.
              </Text>
              <Text style={styles.activitiesText}>
                Actively engaged in tech meetups and workshops, continuously enhancing expertise in the latest front-end technologies and development methodologies.
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

  return new Response(buffer, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="Ehtisham_Nawaz_Kiani_CV.pdf"',
    },
  })
}
