import { motion } from "framer-motion";
import {
  ArrowDown,
  Code2,
  Database,
  Smartphone,
  Github,
  Linkedin,
  Mail,
  Download,
  Sparkles,
  BookOpen,
  Cpu,
  Layers,
  GitBranch,
  Container,
  Network,
  CheckCircle2,
  Zap,
  Brain,
  Target,
  TestTube2,
  Workflow,
  Shield,
  Layout,
  Globe,
  Calendar,
  Briefcase,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import heroBg from "@assets/generated_images/modern_tech_gradient_abstract_background.png";
import { Badge } from "@/components/ui/badge";
import resumePdf from "@assets/ROHIT_VEGESNA_Resume_v3_1766689085122.pdf";

function ExperienceSection({ fadeInUp }: { fadeInUp: any }) {
  return (
    <section id="experience" className="py-20 container mx-auto px-4">
      <motion.h2
        {...fadeInUp}
        className="text-3xl md:text-4xl font-display font-bold mb-16 flex items-center gap-4 justify-center"
      >
        <span className="w-16 h-[2px] bg-gradient-to-r from-transparent to-primary"></span>
        Where I've Made an Impact
        <span className="w-16 h-[2px] bg-gradient-to-l from-transparent to-primary"></span>
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8 justify-items-center max-w-5xl mx-auto">
        {[
          {
            company: "Flexera",
            logo: "F",
            designation: "Senior QA Automation Engineer",
            period: "Dec 2020 - Present",
            color: "from-blue-500 to-cyan-500",
          },
          {
            company: "Ericsson",
            logo: "E",
            designation: "QA Automation .Net Developer / Operations Lead",
            period: "Sep 2016 - Dec 2020",
            color: "from-purple-500 to-pink-500",
            note: "via Tata Consultancy Services",
          },
          {
            company: "Tata Consultancy Services",
            logo: "T",
            designation: "IT Analyst",
            period: "Jun 2014 - Sep 2016",
            color: "from-orange-500 to-red-500",
          },
        ].map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="flex flex-col items-center gap-6 p-8 border border-white/10 rounded-2xl hover:bg-muted/5 hover:border-primary/30 transition-all w-full group"
          >
            <div
              className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${exp.color} flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform`}
            >
              <span className="text-3xl font-bold text-white">{exp.logo}</span>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-foreground mb-2">
                {exp.company}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                {exp.designation}
              </p>
              {exp.note && (
                <p className="text-xs text-muted-foreground/80 italic mb-2">
                  {exp.note}
                </p>
              )}
              <div className="flex items-center justify-center gap-2 text-xs text-primary">
                <Calendar className="w-4 h-4" />
                <span>{exp.period}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Awards & Recognition */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="mt-16 p-8 border border-primary/20 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent max-w-5xl mx-auto"
      >
        <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
          <Target className="w-7 h-7 text-primary" />
          Awards & Recognition
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="flex items-start gap-3">
            <div className="p-2 bg-primary/20 rounded-lg flex-shrink-0">
              <Zap className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="font-semibold text-foreground">
                Best Employee Award
              </p>
              <p className="text-sm text-muted-foreground">
                3 times across Ericsson & TCS
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="p-2 bg-primary/20 rounded-lg flex-shrink-0">
              <Shield className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="font-semibold text-foreground">Best Team Award</p>
              <p className="text-sm text-muted-foreground">
                Ericsson Operations Team
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="p-2 bg-primary/20 rounded-lg flex-shrink-0">
              <BookOpen className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="font-semibold text-foreground">
                Service Management Diploma
              </p>
              <p className="text-sm text-muted-foreground">
                Ericsson Certification
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="p-2 bg-primary/20 rounded-lg flex-shrink-0">
              <CheckCircle2 className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="font-semibold text-foreground">
                PSM I & Azure Fundamentals
              </p>
              <p className="text-sm text-muted-foreground">
                Professional Certifications
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  const stagger = {
    whileInView: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const coreTools = [
    { name: "C#" },
    { name: ".NET 8.0 / 9.0" },
    { name: "TypeScript / JavaScript" },
    { name: "PowerShell" },
    { name: "Bash" },
    { name: "YAML" },
    { name: "XML" },
  ];

  const testingFrameworks = [
    { name: "xUnit" },
    { name: "NUnit" },
    { name: "MS Test" },
    { name: "SpecFlow" },
    { name: "Reqnroll" },
    { name: "Cucumber" },
    { name: "Gherkin" },
    { name: "NSubstitute" },
    { name: "FluentAssertions" },
    { name: "xRetry" },
  ];

  const automationTools = [
    { name: "Selenium WebDriver" },
    { name: "Cypress" },
    { name: "RestSharp" },
    { name: "Postman" },
    { name: "Win UI Automation" },
    { name: "JMeter" },
  ];

  const databases = [
    { name: "MongoDB" },
    { name: "PostgreSQL" },
    { name: "MS SQL Server" },
    { name: "Citus" },
  ];

  const cicdTools = [
    { name: "GitHub Actions" },
    { name: "CircleCI" },
    { name: "Azure DevOps" },
    { name: "TeamCity" },
    { name: "Docker / Compose" },
    { name: "Kubernetes" },
    { name: "Argo CD" },
  ];

  const platforms = [
    { name: "Visual Studio" },
    { name: "VS Code" },
    { name: "Git" },
    { name: "Jira / Xray" },
    { name: "Confluence" },
    { name: "SonarQube" },
    { name: "Log4Net" },
  ];

  return (
    <div
      id="main"
      className="min-h-screen bg-background text-foreground overflow-x-hidden font-sans selection:bg-primary selection:text-primary-foreground"
    >
      <Navbar />

      {/* Hero Section */}
      <section
        id="hero"
        className="relative min-h-[75vh] flex items-center justify-center overflow-hidden pt-16 pb-12"
      >
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-purple-500/10 to-blue-500/20 animate-gradient-slow" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background z-10" />
          <img
            src={heroBg}
            alt="Abstract Digital Background"
            className="w-full h-full object-cover opacity-50"
          />
        </div>

        {/* Floating Icons Animation */}
        <div className="absolute inset-0 z-5 pointer-events-none overflow-hidden">
          {[
            { Icon: TestTube2, delay: 0, x: "8%", y: "12%", floatX: 20, floatY: 15, mobile: true },
            { Icon: Code2, delay: 0.2, x: "88%", y: "18%", floatX: -15, floatY: 20, mobile: true },
            { Icon: Database, delay: 0.4, x: "12%", y: "78%", floatX: 18, floatY: -12, mobile: true },
            { Icon: GitBranch, delay: 0.6, x: "90%", y: "72%", floatX: -20, floatY: 18, mobile: true },
            { Icon: Cpu, delay: 0.8, x: "5%", y: "42%", floatX: 15, floatY: -18, mobile: false },
            { Icon: Network, delay: 1, x: "93%", y: "48%", floatX: -18, floatY: 15, mobile: false },
            { Icon: Container, delay: 0.3, x: "22%", y: "8%", floatX: -12, floatY: 20, mobile: false },
            { Icon: Workflow, delay: 0.5, x: "78%", y: "88%", floatX: 16, floatY: -15, mobile: true },
            { Icon: Shield, delay: 0.7, x: "10%", y: "58%", floatX: -15, floatY: 12, mobile: false },
            { Icon: Zap, delay: 0.9, x: "85%", y: "32%", floatX: 12, floatY: -20, mobile: false },
            { Icon: Layers, delay: 1.1, x: "6%", y: "25%", floatX: 14, floatY: 16, mobile: false },
            { Icon: CheckCircle2, delay: 0.4, x: "92%", y: "10%", floatX: -13, floatY: 17, mobile: false },
            { Icon: Target, delay: 0.8, x: "15%", y: "90%", floatX: 17, floatY: -14, mobile: true },
            { Icon: Brain, delay: 1.2, x: "82%", y: "82%", floatX: -16, floatY: 13, mobile: false },
            { Icon: Globe, delay: 0.6, x: "8%", y: "72%", floatX: 19, floatY: -16, mobile: false },
            { Icon: Layout, delay: 1.0, x: "95%", y: "62%", floatX: -14, floatY: 19, mobile: false },
            { Icon: Sparkles, delay: 0.5, x: "18%", y: "5%", floatX: -18, floatY: 14, mobile: true },
            { Icon: BookOpen, delay: 0.9, x: "80%", y: "6%", floatX: 15, floatY: -17, mobile: false },
          ].map(({ Icon, delay, x, y, floatX, floatY, mobile }, index) => (
            <motion.div
              key={index}
              className={`absolute text-primary/40 transition-opacity duration-500 ${mobile ? '' : 'opacity-0 md:opacity-100'}`}
              style={{ left: x, top: y }}
              initial={{
                opacity: 0,
                scale: 0,
              }}
              animate={{
                opacity: [0, 1, 1, 0.8, 0],
                scale: [0, 1, 1, 0.9, 0],
                x: [0, floatX, -floatX * 0.5, floatX * 0.7, 0],
                y: [0, floatY, -floatY * 0.6, floatY * 0.8, 0],
              }}
              transition={{
                duration: 8 + index * 0.5,
                delay: delay,
                repeat: Infinity,
                repeatDelay: 2,
                ease: "easeInOut",
              }}
            >
              <Icon className="w-5 h-5 md:w-8 md:h-8" />
            </motion.div>
          ))}
        </div>

        <div className="container relative z-10 px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2
              id="hero-title"
              className="text-xl md:text-2xl font-medium text-primary mb-4 tracking-widest uppercase"
            >
              Test Craftsman & Quality Architect
            </h2>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
                Rohit Vegesna
              </span>
            </h1>
            <p className="text-2xl md:text-3xl lg:text-4xl font-medium text-primary/90 mb-4">
              Senior QA Automation Developer
            </p>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
              Building enterprise-grade test automation frameworks across UI, API, and backend layers for
              microservices, distributed systems, and cloud-native applications
            </p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex gap-4 justify-center flex-wrap"
            >
              <a
                href="#contact"
                className="inline-flex items-center justify-center min-h-[48px] px-8 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all hover:scale-105 text-base font-medium shadow-lg shadow-primary/25 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
                aria-label="Navigate to contact section"
              >
                Get In Touch
              </a>
              <a
                href="https://www.linkedin.com/in/rohitvegesna/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center min-h-[48px] px-8 rounded-full border-2 border-primary bg-background hover:bg-primary hover:text-primary-foreground transition-all hover:scale-105 text-base font-medium focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
                aria-label="Open LinkedIn profile in new tab"
              >
                View LinkedIn
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Down Arrow */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 -ml-1.5 text-muted-foreground"
        >
          <a
            href="#stats"
            className="inline-block cursor-pointer hover:text-primary transition-colors p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
            aria-label="Scroll down to statistics section"
          >
            <ArrowDown className="w-6 h-6" />
          </a>
        </motion.div>
      </section>

      {/* Stats */}
      <section id="stats" className="py-16 bg-muted/10 border-y border-white/5">
        <div className="container px-4 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                title: "11+ Years",
                subtitle: "Experience",
                desc: "Across enterprise, consulting, and product companies",
                icon: Target,
              },
              {
                title: "1500+",
                subtitle: "Test Cases",
                desc: "Comprehensive coverage across all layers",
                icon: TestTube2,
              },
              {
                title: "15+",
                subtitle: "Microservices",
                desc: "End-to-end testing in distributed architectures",
                icon: Network,
              },
              {
                title: "Shift-Left",
                subtitle: "Champion",
                desc: "Pre-merge validation & pipeline integration",
                icon: GitBranch,
              },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="relative p-6 bg-background border border-white/10 rounded-xl hover:border-primary/40 transition-all group"
              >
                <div className="absolute top-4 right-4 text-primary/20 group-hover:text-primary/40 transition-colors">
                  <stat.icon className="w-8 h-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-3xl md:text-4xl font-display font-bold text-primary">
                    {stat.title}
                  </h3>
                  <p className="text-lg font-semibold text-foreground">
                    {stat.subtitle}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {stat.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Core Expertise */}
      <section id="about" className="py-2 container mx-auto px-4">
        <motion.div {...fadeInUp} className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 flex items-center gap-4 justify-center">
            <span className="w-16 h-[2px] bg-gradient-to-r from-transparent to-primary"></span>
            Core Expertise
            <span className="w-16 h-[2px] bg-gradient-to-l from-transparent to-primary"></span>
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed mb-16 text-center max-w-3xl mx-auto">
            Bringing a strategic, quality-first approach to test automation that
            integrates seamlessly into modern software delivery pipelines across
            global enterprises.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: Target,
                title: "Quality-Driven Philosophy",
                desc: "Embedding quality at every stage of the software lifecycle — not just as a final check, but as a guiding principle. Ensuring robust, scalable, and maintainable solutions that make quality measurable and deeply integrated.",
              },
              {
                icon: Zap,
                title: "Automation as Functional Force",
                desc: "Strong foundation in CI/CD, custom test frameworks, and end-to-end automation. Driving speed, reliability, and test coverage across UI, API, and backend systems. Enabling teams to deliver with confidence and scale with ease.",
              },
              {
                icon: Brain,
                title: "Analytical Impact & Business Alignment",
                desc: "Using data and domain knowledge to guide decision-making. Analyzing test data for dashboards, identifying bottlenecks, and aligning test strategy with business goals. Making QA a strategic contributor to product success.",
              },
            ].map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
                className="p-6 bg-muted/5 border border-white/10 rounded-xl hover:bg-muted/10 hover:border-primary/30 transition-all group"
              >
                <div className="p-3 bg-primary/10 rounded-xl text-primary w-fit mb-4 group-hover:bg-primary/20 transition-colors">
                  <pillar.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {pillar.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {pillar.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-purple-500/5 to-blue-500/10 border border-primary/30 rounded-3xl p-12 backdrop-blur-sm group hover:border-primary/50 transition-all duration-500"
          >
            {/* Animated background elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-3xl animate-pulse-slow"></div>
            <div
              className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow"
              style={{ animationDelay: "1s" }}
            ></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>

            <div className="relative z-10">
              <div className="flex items-start justify-between mb-8">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                  className="text-primary/40 group-hover:text-primary/60 transition-colors duration-500"
                >
                  <svg
                    className="w-16 h-16"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </motion.div>
                <div className="h-1 w-24 bg-gradient-to-r from-primary/50 to-transparent rounded-full"></div>
              </div>

              <div className="space-y-4">
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="text-2xl md:text-4xl font-display font-bold text-foreground leading-tight"
                >
                  Test automation isn't just code
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="text-xl md:text-2xl text-muted-foreground leading-relaxed"
                >
                  — it's{" "}
                  <span className="relative inline-block">
                    <span className="relative z-10 text-primary font-bold px-3 py-1">
                      trust, speed, and peace of mind
                    </span>
                    <span className="absolute inset-0 bg-primary/20 blur-xl rounded-lg"></span>
                  </span>
                  , wrapped in logic.
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
                className="mt-8 flex items-center gap-3"
              >
                <div className="h-px flex-1 bg-gradient-to-r from-primary/30 via-primary/10 to-transparent"></div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-primary/60 shadow-lg shadow-primary/50"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/40"></div>
                  <div className="w-1 h-1 rounded-full bg-primary/20"></div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* AI-Assisted Testing */}
      <section
        id="ai-testing"
        className="py-20 relative"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-purple-500/5 pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-500/5 via-transparent to-transparent pointer-events-none" />
        <motion.div {...fadeInUp} className="max-w-6xl mx-auto container">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 flex items-center gap-4 justify-center">
            <span className="w-16 h-[2px] bg-gradient-to-r from-transparent via-violet-500 to-purple-500"></span>
            AI-Powered Testing & Automation
            <Sparkles className="w-10 h-10 text-violet-500" />
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-12 text-center max-w-4xl mx-auto">
            Leveraging artificial intelligence and machine learning to transform
            test automation — from intelligent test generation and maintenance
            to predictive analytics and adaptive test execution strategies.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {[
              {
                icon: BookOpen,
                title: "AI-Driven Test Planning & Case Generation",
                desc: "Utilizing AI to analyze requirements, design specifications, and historical test data to auto-generate comprehensive test scenarios. Integrating with Jira & Xray for automated test case creation, reducing manual effort by 60%.",
                highlights: [
                  "Natural language to test case conversion",
                  "Requirement-driven scenario generation",
                  "Auto-generated BDD Gherkin features",
                  "Test coverage gap analysis",
                ],
              },
              {
                icon: Code2,
                title: "Intelligent Test Code Generation",
                desc: "Leveraging AI to analyze source code and automatically generate unit tests, integration tests, and UI automation scripts. Maintaining code quality while accelerating test development cycles.",
                highlights: [
                  "Source code analysis for test generation",
                  "Page Object Model auto-creation",
                  "API test scaffold generation",
                  "Test data factory automation",
                ],
              },
              {
                icon: Brain,
                title: "Predictive Test Failure Analysis",
                desc: "Using machine learning to analyze test execution patterns, identify flaky tests, predict failure-prone areas, and recommend optimal test execution sequences based on code changes.",
                highlights: [
                  "Flaky test detection & isolation",
                  "Failure pattern recognition",
                  "Risk-based test prioritization",
                  "Code change impact analysis",
                ],
              },
              {
                icon: Cpu,
                title: "Smart Test Data Generation",
                desc: "AI-powered test data generation that understands domain constraints, creates realistic edge cases, and maintains referential integrity across complex data models and microservice boundaries.",
                highlights: [
                  "Context-aware data generation",
                  "Boundary value analysis automation",
                  "Synthetic PII-safe test data",
                  "Cross-service data consistency",
                ],
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
                className="p-8 border border-white/10 rounded-xl bg-muted/5 hover:bg-muted/10 hover:border-primary/30 transition-all group"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-gradient-to-br from-violet-500/10 to-purple-500/10 rounded-xl text-violet-500 group-hover:from-violet-500/20 group-hover:to-purple-500/20 transition-all flex-shrink-0">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground pt-2">
                    {item.title}
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {item.desc}
                </p>
                <ul className="space-y-2">
                  {item.highlights.map((highlight, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/20 rounded-lg">
                  <Target className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground">
                  Impact & Results
                </h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• 60% reduction in test creation time</li>
                <li>• 40% decrease in flaky test occurrences</li>
                <li>• Improved test coverage by 35%</li>
                <li>• Faster root cause identification</li>
              </ul>
            </div>

            <div className="p-6 bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/20 rounded-lg">
                  <Zap className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground">
                  AI Tools Used
                </h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• GitHub Copilot for code generation</li>
                <li>• ChatGPT/Claude for test planning</li>
                <li>• Custom ML models for analysis</li>
                <li>• OpenAI API integrations</li>
              </ul>
            </div>

            <div className="p-6 bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/20 rounded-lg">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground">
                  Best Practices
                </h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Human-in-the-loop validation</li>
                <li>• AI output code review process</li>
                <li>• Continuous model improvement</li>
                <li>• Security & privacy compliance</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Foundation: Multi-Layer Testing */}
      <section id="foundation" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-purple-500/5 via-transparent to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-green-500/5 via-transparent to-transparent pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
            <motion.div {...fadeInUp} className="max-w-6xl mx-auto container"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 flex items-center gap-4 justify-center">
            <span className="w-16 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-cyan-500"></span>
            Foundation: Multi-Layer Testing
            <TestTube2 className="w-10 h-10 text-blue-500" />
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-12 text-center max-w-3xl mx-auto">
            Built and maintained multiple comprehensive test automation
            frameworks covering all testing layers — from API validation and
            load testing to UI automation across web and enterprise
            applications. This foundation enabled scaling to complex distributed
            systems testing.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: Code2,
                title: "API Test Framework",
                desc: "Comprehensive REST API testing framework validating 10+ microservice APIs with liveness checks, contract validation, and automated regression suites.",
                tech: ["RestSharp", "xUnit", "FluentAssertions"],
                highlights: [
                  "Multi-environment support (Dev/QA)",
                  "Bearer token authentication",
                  "CircleCI integration with scheduled runs",
                  "BFF (Backend-for-Frontend) validation",
                ],
              },
              {
                icon: Layout,
                title: "Selenium UI Framework",
                desc: "Enterprise-grade Selenium WebDriver framework for end-to-end UI testing with BDD approach using SpecFlow. Supports Chrome and Edge browsers with parallel execution.",
                tech: ["Selenium", "SpecFlow", ".NET 8.0"],
                highlights: [
                  "Page Object Model architecture",
                  "BDD with Gherkin scenarios",
                  "Multi-browser support",
                  "Dockerized test execution",
                ],
              },
              {
                icon: Smartphone,
                title: "Cypress Component Testing",
                desc: "Modern Cypress-based test suite for React component and E2E testing with mocking capabilities. Focused on validating UI elements and components.",
                tech: ["Cypress", "TypeScript", "React"],
                highlights: [
                  "Component-level testing",
                  "API mocking for isolation",
                  "Parallel spec execution",
                  "JUnit XML reporting",
                ],
              },
              {
                icon: Zap,
                title: "Performance Testing",
                desc: "JMeter-based load testing framework for API performance validation under various load conditions across multiple environments.",
                tech: ["JMeter", "Performance Metrics", "Load Testing"],
                highlights: [
                  "Configurable load scenarios",
                  "Multi-environment testing",
                  "Response time analysis",
                  "Throughput measurement",
                ],
              },
              {
                icon: Database,
                title: "Integration Testing",
                desc: "Cross-service integration test suites validating data flow across distributed systems with database verification and message queue validation.",
                tech: ["xUnit", "NATS", "Multi-DB"],
                highlights: [
                  "Event-driven validation",
                  "Database state verification",
                  "Cross-service workflows",
                  "Docker-based isolation",
                ],
              },
              {
                icon: Shield,
                title: "CI/CD Integration",
                desc: "Fully automated test execution pipelines integrated with CircleCI and GitHub Actions. Scheduled runs, on-demand triggers, and comprehensive reporting.",
                tech: ["CircleCI", "GitHub Actions", "Jira"],
                highlights: [
                  "Scheduled regression runs",
                  "Parameterized pipelines",
                  "Multi-tenant support",
                  "Automated test reporting",
                ],
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 border border-white/10 rounded-xl bg-muted/5 hover:bg-muted/10 hover:border-blue-500/30 transition-all group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-lg text-blue-500 group-hover:from-blue-500/20 group-hover:to-cyan-500/20 transition-all flex-shrink-0">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {item.title}
                    </h3>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {item.desc}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tech.map((tech, i) => (
                    <Badge
                      key={i}
                      className="px-3 py-1 text-xs bg-primary/5 text-primary border border-primary/20"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <ul className="space-y-1">
                  {item.highlights.map((highlight, i) => (
                    <li
                          key={i}
                          className="flex items-start gap-2 text-xs text-muted-foreground"
                        >
                          <div className="w-1 h-1 rounded-full bg-primary flex-shrink-0 mt-1.5"></div>
                          {highlight}
                        </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-gradient-to-br from-blue-500/10 via-cyan-500/5 to-transparent border border-blue-500/20 rounded-xl backdrop-blur-sm">
              <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                <Target className="w-5 h-5 text-blue-500" />
                Test Coverage
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-500" />
                  <strong className="text-foreground">API Layer:</strong> 100+
                  API endpoints validated
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-500" />
                  <strong className="text-foreground">UI Layer:</strong>{" "}
                  Critical user journeys automated
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-500" />
                  <strong className="text-foreground">Integration:</strong>{" "}
                  Cross-service workflows
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-500" />
                  <strong className="text-foreground">Performance:</strong> Load
                  & stress testing
                </li>
              </ul>
            </div>

            <div className="p-6 bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-transparent border border-cyan-500/20 rounded-xl backdrop-blur-sm">
              <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-cyan-500" />
                Framework Features
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-500" />
                  Reusable test framework NuGet packages
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-500" />
                  Configurable for multiple environments
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-500" />
                  Comprehensive logging and reporting
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-500" />
                  Parallel execution capabilities
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
        </div>
        
      </section>

      {/* Advanced Testing */}
      <section id="advanced-testing" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-orange-500/5 pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-green-500/5 via-transparent to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background via-transparent to-transparent pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div {...fadeInUp} className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 flex items-center gap-4 justify-center">
              <span className="w-16 h-[2px] bg-gradient-to-r from-transparent via-green-500 to-emerald-500"></span>
              Advanced Testing Strategies
              <Network className="w-10 h-10 text-green-500" />
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-16 text-center max-w-4xl mx-auto">
              Architecting comprehensive testing solutions for complex
              distributed systems and implementing shift-left strategies to
              catch issues early in the development cycle.
            </p>

            {/* Microservices & Distributed Systems Subsection */}
            <div id="microservices" className="mb-20">
              <h3 className="text-2xl md:text-3xl font-display font-bold mb-3 flex items-center gap-3 justify-center">
                <span className="w-12 h-[2px] bg-gradient-to-r from-transparent to-green-500"></span>
                Microservices & Distributed Systems
                <span className="w-12 h-[2px] bg-gradient-to-l from-transparent to-green-500"></span>
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8 text-center max-w-3xl mx-auto">
                Validating complex, event-driven microservice ecosystems with
                comprehensive end-to-end testing strategies that ensure
                reliability across distributed architectures.
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {[
                  {
                    icon: Layers,
                    title: "Multi-Service Testing",
                    desc: "Built comprehensive test suites validating 15+ microservices working in concert. Testing inter-service communication, contract compliance, and data flow across distributed boundaries.",
                    tech: ["Microservices", "API Gateway", "Event Bus"],
                  },
                  {
                    icon: Workflow,
                    title: "Event-Driven Architecture",
                    desc: "Validating asynchronous message flows through NATS JetStream. Testing event publication, consumption, message ordering, and eventual consistency across service boundaries.",
                    tech: ["NATS", "JetStream", "Async Messaging"],
                  },
                  {
                    icon: Container,
                    title: "Docker Orchestration",
                    desc: "Architected isolated test environments using Docker Compose orchestrating 20+ containers. Spinning up complete microservice ecosystems with databases, message queues, and all dependencies.",
                    tech: [
                      "Docker",
                      "Docker Compose",
                      "Container Orchestration",
                    ],
                  },
                  {
                    icon: Database,
                    title: "Multi-Database Testing",
                    desc: "Comprehensive database validation across heterogeneous data stores. Testing data consistency, transactions, and migrations across PostgreSQL, MSSQL, MongoDB, and Citus distributed databases.",
                    tech: ["PostgreSQL", "MSSQL", "MongoDB", "Citus"],
                  },
                  {
                    icon: Shield,
                    title: "Contract Testing",
                    desc: "Ensuring API contracts and message schemas remain consistent across service versions. Validating backward compatibility and preventing breaking changes in distributed systems.",
                    tech: [
                      "Contract Validation",
                      "Schema Testing",
                      "Versioning",
                    ],
                  },
                  {
                    icon: Cpu,
                    title: "Integration Complexity",
                    desc: "Testing complex integration scenarios involving data ingestion pipelines, evidence extraction, identity management, and cross-service orchestration workflows.",
                    tech: [
                      "E2E Testing",
                      "Data Pipeline",
                      "Workflow Automation",
                    ],
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="p-6 border border-white/10 rounded-xl bg-muted/5 hover:bg-muted/10 hover:border-green-500/30 transition-all group"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-lg text-green-500 group-hover:from-green-500/20 group-hover:to-emerald-500/20 transition-all flex-shrink-0">
                        <item.icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-foreground mb-2">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {item.desc}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {item.tech.map((tech, i) => (
                        <Badge
                          key={i}
                          className="px-3 py-1 text-xs bg-primary/5 text-primary border border-primary/20"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 rounded-2xl p-8">
                <div className="flex items-start gap-6">
                  <div className="p-4 bg-primary/20 rounded-xl flex-shrink-0">
                    <Network className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-3">
                      Real-World Impact
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Architected an{" "}
                      <strong className="text-foreground">
                        enterprise-scale E2E test automation framework
                      </strong>{" "}
                      — a sophisticated testing framework that validates complex
                      inter-service communication by directly injecting data to
                      receiver services and verifying database state across a
                      fully orchestrated microservice environment.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="px-4 py-2 bg-primary/10 text-primary border border-primary/30">
                        Microservices
                      </Badge>
                      <Badge className="px-4 py-2 bg-primary/10 text-primary border border-primary/30">
                        NATS Event Bus
                      </Badge>
                      <Badge className="px-4 py-2 bg-primary/10 text-primary border border-primary/30">
                        Docker Compose
                      </Badge>
                      <Badge className="px-4 py-2 bg-primary/10 text-primary border border-primary/30">
                        .NET 9.0
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Shift-Left Testing Subsection */}
            <div id="shift-left">
              <h3 className="text-2xl md:text-3xl font-display font-bold mb-3 flex items-center gap-3 justify-center">
                <span className="w-12 h-[2px] bg-gradient-to-r from-transparent to-orange-500"></span>
                Shift-Left Testing Strategy
                <span className="w-12 h-[2px] bg-gradient-to-l from-transparent to-orange-500"></span>
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8 text-center max-w-3xl mx-auto">
                Embedding quality validation early in the development cycle
                through pre-merge testing, CI/CD integration, and automated
                validation.
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {[
                  {
                    icon: CheckCircle2,
                    title: "Pre-Merge Validation",
                    desc: "Integrated automated tests directly into service pipelines to run comprehensive validation before code merges. Ensuring every PR is validated against the full microservice ecosystem, catching integration issues early.",
                    highlights: [
                      "GitHub Actions integration",
                      "Self-hosted CI/CD runners",
                      "Automated environment provisioning",
                      "Pre-merge quality gates",
                    ],
                  },
                  {
                    icon: Container,
                    title: "Isolated Test Environments",
                    desc: "Architected Docker-based isolated test environments that spin up complete microservice ecosystems on-demand. Each test run gets a fresh, reproducible environment preventing test pollution and flaky tests.",
                    highlights: [
                      "Docker Compose orchestration",
                      "20+ containerized services",
                      "Database seeding & initialization",
                      "Cross-platform compatibility",
                    ],
                  },
                  {
                    icon: Code2,
                    title: "BDD with SpecFlow/Reqnroll",
                    desc: "Implementing Behavior-Driven Development using SpecFlow (now Reqnroll) with Gherkin syntax. Creating living documentation that bridges business requirements and technical implementation.",
                    highlights: [
                      "Gherkin feature files",
                      "xUnit test framework",
                      "Scenario-based validation",
                      "Jira Xray integration",
                    ],
                  },
                  {
                    icon: Workflow,
                    title: "CI/CD Pipeline Excellence",
                    desc: "Building sophisticated CI/CD pipelines that automatically provision environments, execute tests, and report results to multiple platforms. Achieving fast feedback loops with comprehensive coverage.",
                    highlights: [
                      "Automated environment building",
                      "Multi-database support",
                      "Test result aggregation",
                      "Multi-platform reporting",
                    ],
                  },
                  {
                    icon: Database,
                    title: "Dynamic Test Data Management",
                    desc: "Implementing intelligent test data strategies using ScenarioContext to manage dynamic, random test data without hard-coding. Tests automatically create required data or select from existing data, ensuring different data coverage on each execution.",
                    highlights: [
                      "ScenarioContext for data sharing",
                      "Random data selection per run",
                      "Automated data setup in scenarios",
                      "Zero hard-coded test data",
                    ],
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="p-6 border border-white/10 rounded-xl bg-muted/5 hover:bg-muted/10 hover:border-orange-500/30 transition-all group"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-gradient-to-br from-orange-500/10 to-amber-500/10 rounded-xl text-orange-500 group-hover:from-orange-500/20 group-hover:to-amber-500/20 transition-all flex-shrink-0">
                        <item.icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground pt-2">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {item.desc}
                    </p>
                    <ul className="space-y-2">
                      {item.highlights.map((highlight, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-xs text-muted-foreground"
                        >
                          <div className="w-1 h-1 rounded-full bg-primary flex-shrink-0 mt-1.5"></div>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>

              <div className="bg-gradient-to-br from-orange-500/10 via-transparent to-amber-500/10 border border-orange-500/20 rounded-2xl p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      Enterprise E2E Test Framework
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      A production-grade test automation suite that validates
                      entire microservice ecosystems through end-to-end
                      scenarios. Unlike typical test projects, this framework
                      validates inter-service communication by injecting data
                      directly to services and verifying state across multiple
                      distributed data stores.
                    </p>
                    <p className="text-sm text-muted-foreground mb-4">
                      Built with{" "}
                      <strong className="text-foreground">.NET 9.0</strong>,
                      using <strong className="text-foreground">xUnit</strong>,{" "}
                      <strong className="text-foreground">
                        SpecFlow/Reqnroll
                      </strong>
                      , <strong className="text-foreground">RestSharp</strong>,
                      and integrated with{" "}
                      <strong className="text-foreground">Jira Xray</strong> for
                      comprehensive test management.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <div className="p-4 bg-gradient-to-br from-orange-500/5 to-amber-500/5 rounded-xl border border-orange-500/10 backdrop-blur-sm">
                      <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                        <TestTube2 className="w-4 h-4 text-orange-500" />
                        Key Capabilities
                      </h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Direct data injection testing</li>
                        <li>
                          • Multi-database validation (PostgreSQL, MSSQL,
                          MongoDB)
                        </li>
                        <li>• Event-driven architecture verification</li>
                        <li>• Docker-based isolated execution</li>
                        <li>• Pre-merge pipeline integration</li>
                        <li>• Automated test reporting & tracking</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-gradient-to-br from-amber-500/5 to-orange-500/5 rounded-xl border border-amber-500/10 backdrop-blur-sm">
                      <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                        <Shield className="w-4 h-4 text-amber-500" />
                        Business Impact
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Enabled teams to validate changes before merge, reducing
                        integration issues by catching cross-service bugs early
                        in the development cycle.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Test Strategy & Process Excellence Subsection */}
            <div id="test-strategy" className="mt-20">
              <h3 className="text-2xl md:text-3xl font-display font-bold mb-3 flex items-center gap-3 justify-center">
                <span className="w-12 h-[2px] bg-gradient-to-r from-transparent to-blue-500"></span>
                Test Strategy & Process Excellence
                <span className="w-12 h-[2px] bg-gradient-to-l from-transparent to-blue-500"></span>
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8 text-center max-w-3xl mx-auto">
                Establishing quality processes, creating comprehensive documentation, and designing system architecture diagrams that enable effective testing strategies across teams.
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    icon: BookOpen,
                    title: "Technical Documentation",
                    desc: "Creating comprehensive test documentation, runbooks, and knowledge base articles. Documenting test frameworks, automation strategies, and best practices to enable team scalability and knowledge transfer.",
                    highlights: [
                      "Test framework documentation",
                      "Automation guides & runbooks",
                      "Living documentation with BDD",
                    ],
                  },
                  {
                    icon: Layout,
                    title: "Architecture & Design",
                    desc: "Analyzing and documenting system architectures, creating technical diagrams, and understanding complex integrations. Designing test architectures that align with system design and microservice boundaries.",
                    highlights: [
                      "System architecture analysis",
                      "Integration mapping",
                      "Test architecture design",
                    ],
                  },
                  {
                    icon: Workflow,
                    title: "Test Process Setup",
                    desc: "Establishing testing processes from scratch, defining quality standards, and implementing best practices across teams. Setting up test automation infrastructure, CI/CD pipelines, and quality gates.",
                    highlights: [
                      "Process definition & implementation",
                      "Quality standards establishment",
                      "Team onboarding & mentoring",
                      "CI/CD pipeline setup",
                    ],
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="p-6 border border-white/10 rounded-xl bg-muted/5 hover:bg-muted/10 hover:border-blue-500/30 transition-all group"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-lg text-blue-500 group-hover:from-blue-500/20 group-hover:to-cyan-500/20 transition-all flex-shrink-0">
                        <item.icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {item.desc}
                    </p>
                    <ul className="space-y-2">
                      {item.highlights.map((highlight, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-xs text-muted-foreground"
                        >
                          <div className="w-1 h-1 rounded-full bg-primary flex-shrink-0 mt-1.5"></div>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technology Ecosystem */}
      <section id="tools" className="py-20 bg-muted/5 border-y border-white/5">
        <motion.div {...fadeInUp} className="max-w-6xl mx-auto container px-4">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 flex items-center gap-4 justify-center">
            <span className="w-16 h-[2px] bg-gradient-to-r from-transparent to-primary"></span>
            Technology Ecosystem
            <span className="w-16 h-[2px] bg-gradient-to-l from-transparent to-primary"></span>
          </h2>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center p-4 bg-primary/5 border border-primary/20 rounded-xl"
            >
              <div className="text-3xl font-bold text-primary mb-1">40+</div>
              <div className="text-sm text-muted-foreground">Technologies</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center p-4 bg-primary/5 border border-primary/20 rounded-xl"
            >
              <div className="text-3xl font-bold text-primary mb-1">10</div>
              <div className="text-sm text-muted-foreground">
                Test Frameworks
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center p-4 bg-primary/5 border border-primary/20 rounded-xl"
            >
              <div className="text-3xl font-bold text-primary mb-1">4</div>
              <div className="text-sm text-muted-foreground">Databases</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center p-4 bg-primary/5 border border-primary/20 rounded-xl"
            >
              <div className="text-3xl font-bold text-primary mb-1">8</div>
              <div className="text-sm text-muted-foreground">CI/CD Tools</div>
            </motion.div>
          </div>

          {/* Core Languages & Frameworks */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <span className="w-1.5 h-10 bg-gradient-to-b from-primary to-primary/50 rounded-full"></span>
              Languages & Frameworks
            </h3>
            <motion.div
              variants={stagger}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="flex flex-wrap gap-3"
            >
              {coreTools.map((tool, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Badge className="px-5 py-2.5 text-base bg-primary/10 text-primary hover:bg-primary/20 border border-primary/30 transition-all cursor-default">
                    {tool.name}
                  </Badge>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Testing Frameworks */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <span className="w-1.5 h-10 bg-gradient-to-b from-primary to-primary/50 rounded-full"></span>
              Testing Frameworks & Libraries
            </h3>
            <motion.div
              variants={stagger}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="flex flex-wrap gap-3"
            >
              {testingFrameworks.map((tool, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Badge className="px-5 py-2.5 text-base bg-primary/10 text-primary hover:bg-primary/20 border border-primary/30 transition-all cursor-default">
                    {tool.name}
                  </Badge>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Automation Tools */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <span className="w-1.5 h-10 bg-gradient-to-b from-primary to-primary/50 rounded-full"></span>
              Test Automation & Performance
            </h3>
            <motion.div
              variants={stagger}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="flex flex-wrap gap-3"
            >
              {automationTools.map((tool, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Badge className="px-5 py-2.5 text-base bg-primary/10 text-primary hover:bg-primary/20 border border-primary/30 transition-all cursor-default">
                    {tool.name}
                  </Badge>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Databases */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <span className="w-1.5 h-10 bg-gradient-to-b from-primary to-primary/50 rounded-full"></span>
              Databases
            </h3>
            <motion.div
              variants={stagger}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="flex flex-wrap gap-3"
            >
              {databases.map((tool, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Badge className="px-5 py-2.5 text-base bg-primary/10 text-primary hover:bg-primary/20 border border-primary/30 transition-all cursor-default">
                    {tool.name}
                  </Badge>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* CI/CD & Infrastructure */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <span className="w-1.5 h-10 bg-gradient-to-b from-primary to-primary/50 rounded-full"></span>
              CI/CD & Infrastructure
            </h3>
            <motion.div
              variants={stagger}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="flex flex-wrap gap-3"
            >
              {cicdTools.map((tool, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Badge className="px-5 py-2.5 text-base bg-primary/10 text-primary hover:bg-primary/20 border border-primary/30 transition-all cursor-default">
                    {tool.name}
                  </Badge>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Tools & Platforms */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <span className="w-1.5 h-10 bg-gradient-to-b from-primary to-primary/50 rounded-full"></span>
              Development Tools & Platforms
            </h3>
            <motion.div
              variants={stagger}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="flex flex-wrap gap-3"
            >
              {platforms.map((tool, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Badge className="px-5 py-2.5 text-base bg-primary/10 text-primary hover:bg-primary/20 border border-primary/30 transition-all cursor-default">
                    {tool.name}
                  </Badge>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Download Resume CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16 pt-12 border-t border-white/10"
          >
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Want to know more about my experience and technical expertise?
            </p>
            <a
              href={resumePdf}
              download
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:scale-105"
            >
              <Download className="w-5 h-5" />
              <span className="font-semibold">Download Full Resume</span>
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Experience */}
      <ExperienceSection fadeInUp={fadeInUp} />

      {/* Footer / Contact */}
      <footer id="contact" className="py-20 container mx-auto px-4 text-center">
        <motion.div {...fadeInUp}>
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            Open to exciting opportunities, collaborations, and discussions
            about test automation, quality assurance, and building robust
            distributed systems.
          </p>

          <div className="flex flex-col items-center gap-6 mb-16">
            <a
              href="mailto:rohitkumar.vegesna@outlook.com"
              className="inline-flex items-center gap-3 text-lg font-medium text-primary hover:text-primary/80 transition-all border-b-2 border-primary/30 hover:border-primary pb-1 group focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background rounded px-2 py-1"
              aria-label="Send email to Rohit Vegesna"
            >
              <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
              rohitkumar.vegesna@outlook.com
            </a>

            <a
              href="https://www.linkedin.com/in/rohitvegesna/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-lg font-medium text-primary hover:text-primary/80 transition-all border-b-2 border-primary/30 hover:border-primary pb-1 group focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background rounded px-2 py-1"
              aria-label="Visit LinkedIn profile (opens in new tab)"
            >
              <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
              linkedin.com/in/rohitvegesna
            </a>

            <a
              href={resumePdf}
              download="Rohit_Vegesna_Resume.pdf"
              className="inline-flex items-center gap-3 min-h-[48px] px-8 py-3 text-lg font-medium text-primary bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-all border-2 border-primary/30 hover:border-primary rounded-full shadow-lg hover:shadow-primary/25 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
              aria-label="Download resume PDF"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </a>
          </div>

          <div className="mt-20 pt-8 border-t border-white/5 text-sm text-muted-foreground space-y-3">
            <p>
              © {new Date().getFullYear()} Rohit Vegesna. Built with React,
              TypeScript & Tailwind CSS.
            </p>
            <p className="flex items-center justify-center gap-2 text-xs">
              <Sparkles className="w-3.5 h-3.5 text-primary/70" />
              <span>
                Crafted with <span className="text-foreground font-medium">human creativity & vision</span>,{" "}
                powered by <span className="text-primary font-medium">GitHub Copilot</span> for flawless execution
              </span>
              <Sparkles className="w-3.5 h-3.5 text-primary/70" />
            </p>
          </div>
        </motion.div>
      </footer>
    </div>
  );
}
