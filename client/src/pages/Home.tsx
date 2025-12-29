import { motion } from "framer-motion";
import {
  ArrowUp,
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
  Eye,
  Wrench,
  Award,
  TrendingUp,
} from "lucide-react";
import heroBg from "@assets/generated_images/modern_tech_gradient_abstract_background.png";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import resumePdf from "@assets/ROHIT_VEGESNA_Resume_v3_1766689085122.pdf";
import { useState, useEffect } from "react";

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
      <div
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
      </div>
    </section>
  );
}

export default function Home() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    let rafId: number;
    const handleScroll = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        setShowBackToTop(window.scrollY > 500);
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const fadeInUp = {
    // Disabled viewport triggering for better performance
  };

  const stagger = {
    // Disabled for performance
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
      {/* Hero Section */}
      <section
        id="hero"
        className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-8 pb-12"
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
            <div className="max-w-4xl mx-auto mb-10 space-y-4">
              <p className="text-xl md:text-2xl text-foreground font-semibold leading-relaxed">
                I architect test automation that catches bugs before deployment
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                11+ years building comprehensive test frameworks for distributed microservices • Pre-merge validation preventing production issues • AI-powered test automation reducing manual effort by 60%
              </p>
            </div>

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
      </section>

      {/* Sticky Tabs */}
      <div className="sticky top-0 z-20 bg-background/95 backdrop-blur-sm border-b border-white/10 shadow-lg">
        <div className="container mx-auto px-4 py-0">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="w-full h-auto flex flex-wrap justify-center gap-2 bg-transparent">
              <TabsTrigger value="overview" className="flex items-center gap-2 px-6 py-3 text-base cursor-pointer data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <Eye className="w-4 h-4" />Overview
              </TabsTrigger>
              <TabsTrigger value="testing" className="flex items-center gap-2 px-6 py-3 text-base cursor-pointer data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <TestTube2 className="w-4 h-4" />Testing & Automation
              </TabsTrigger>
              <TabsTrigger value="technology" className="flex items-center gap-2 px-6 py-3 text-base cursor-pointer data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <Wrench className="w-4 h-4" />Technology Stack
              </TabsTrigger>
              <TabsTrigger value="experience" className="flex items-center gap-2 px-6 py-3 text-base cursor-pointer data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <Award className="w-4 h-4" />Experience
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="mt-0"><div>
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
                title: "1300+",
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
        <div className="max-w-6xl mx-auto">
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
              <div
                key={index}
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
              </div>
            ))}
          </div>
        </div>
      </section>
      </div></TabsContent>

            <TabsContent value="testing" className="mt-0"><div>
      
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 flex items-center gap-4 justify-center">
            <span className="w-16 h-[2px] bg-gradient-to-r from-transparent to-primary"></span>
            Testing & Automation Expertise
            <span className="w-16 h-[2px] bg-gradient-to-l from-transparent to-primary"></span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Specialized in building comprehensive test automation for complex distributed systems
          </p>
        </div>

        {/* Hero Projects */}
        <div className="space-y-8">
          
          {/* Project 1: Enterprise E2E Framework - BENTO GRID REDESIGN */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.001, delay: 0.1 }}
            className="relative overflow-hidden"
          >
            {/* Background Glow Effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-background to-cyan-500/5 rounded-3xl blur-3xl" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/8 rounded-full blur-[100px] -z-10" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/8 rounded-full blur-[100px] -z-10" />
            
            <div className="relative bg-gradient-to-br from-blue-500/5 via-background to-cyan-500/5 border border-blue-500/20 rounded-3xl p-5 backdrop-blur-sm">
              {/* Header */}
              <div className="mb-5">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 bg-blue-500/10 rounded-lg border border-blue-500/20">
                      <Network className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-1">
                        Enterprise Microservices
                      </h3>
                      <p className="text-sm text-blue-500 font-semibold flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4" />
                        Core Production Framework • 2020 - Present
                      </p>
                    </div>
                  </div>
                  
                </div>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Comprehensive test automation ecosystem for distributed SaaS platform with 15+ microservices
                </p>
              </div>

              {/* Bento Grid Layout */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-3.5 mb-5">
                
                {/* Challenge Card - Spans full width on mobile, 5 cols on desktop */}
                <div className="md:col-span-5 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-blue-500/5 rounded-xl" />
                  <div className="relative p-4 border border-blue-500/20 rounded-xl backdrop-blur-sm h-full">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="p-1.5 bg-blue-500/10 rounded-lg border border-blue-500/20">
                        <Target className="w-4 h-4 text-blue-400" />
                      </div>
                      <h4 className="text-base font-bold text-foreground/80">The Challenge</h4>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400/60" />
                        <span>15+ interconnected microservices</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400/60" />
                        <span>Event-driven NATS messaging</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400/60" />
                        <span>PostgreSQL + MongoDB + Citus</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400/60" />
                        <span>Complex distributed workflows</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400/60" />
                        <span>Multi-tenant architecture</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Impact Metrics - 2x2 Grid, Spans 7 cols on desktop */}
                <div className="md:col-span-7 grid grid-cols-2 gap-3.5">
                  <div className="relative overflow-hidden">
                    <div className="absolute inset-0 bg-blue-500/8 rounded-xl blur-lg" />
                    <div className="relative p-3.5 bg-blue-500/5 border border-blue-500/20 rounded-xl backdrop-blur-sm text-center">
                      <TrendingUp className="w-6 h-6 text-blue-400 mx-auto mb-1.5" />
                      <div className="text-3xl font-bold text-foreground/80 mb-1">
                        5d → 1d
                      </div>
                      <div className="text-xs text-muted-foreground font-medium">Release Cycle</div>
                    </div>
                  </div>

                  <div className="relative overflow-hidden">
                    <div className="absolute inset-0 bg-blue-500/8 rounded-xl blur-lg" />
                    <div className="relative p-3.5 bg-blue-500/5 border border-blue-500/20 rounded-xl backdrop-blur-sm text-center">
                      <Shield className="w-6 h-6 text-blue-400 mx-auto mb-1.5" />
                      <div className="text-3xl font-bold text-foreground/80 mb-1">
                        60+
                      </div>
                      <div className="text-xs text-muted-foreground font-medium">Bugs Pre-Production</div>
                    </div>
                  </div>

                  <div className="relative overflow-hidden">
                    <div className="absolute inset-0 bg-blue-500/8 rounded-xl blur-lg" />
                    <div className="relative p-3.5 bg-blue-500/5 border border-blue-500/20 rounded-xl backdrop-blur-sm text-center">
                      <TestTube2 className="w-6 h-6 text-blue-400 mx-auto mb-1.5" />
                      <div className="text-3xl font-bold text-foreground/80 mb-1">
                        1200+
                      </div>
                      <div className="text-xs text-muted-foreground font-medium">Test Scenarios</div>
                    </div>
                  </div>

                  <div className="relative overflow-hidden">
                    <div className="absolute inset-0 bg-blue-500/8 rounded-xl blur-lg" />
                    <div className="relative p-3.5 bg-blue-500/5 border border-blue-500/20 rounded-xl backdrop-blur-sm text-center">
                      <Workflow className="w-6 h-6 text-blue-400 mx-auto mb-1.5" />
                      <div className="text-3xl font-bold text-foreground/80 mb-1">
                        10+
                      </div>
                      <div className="text-xs text-muted-foreground font-medium">Daily Workflows</div>
                    </div>
                  </div>
                </div>

                {/* 4 Test Frameworks - Each gets equal space */}
                <div className="md:col-span-3 relative overflow-hidden">
                  <div className="absolute inset-0 bg-blue-500/5 rounded-xl" />
                  <div className="relative p-3.5 border border-blue-500/20 rounded-xl backdrop-blur-sm h-full flex flex-col">
                    <div className="flex items-center gap-1.5 mb-1.5">
                      <div className="p-1.5 bg-blue-500/10 rounded-lg border border-blue-500/20">
                        <Container className="w-4 h-4 text-blue-400" />
                      </div>
                      <div>
                        <div className="font-bold text-foreground/80 text-sm">E2E Framework</div>
                        <div className="text-xs text-blue-500/90">Docker-Orchestrated</div>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed flex-1">
                      Full system validation with containerized services, event flows, and database state verification
                    </p>
                    <div className="mt-2.5 flex items-center gap-1.5 text-xs text-blue-500">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span className="font-semibold">350+ scenarios</span>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-3 relative overflow-hidden">
                  <div className="absolute inset-0 bg-blue-500/5 rounded-xl" />
                  <div className="relative p-3.5 border border-blue-500/20 rounded-xl backdrop-blur-sm h-full flex flex-col">
                    <div className="flex items-center gap-1.5 mb-1.5">
                      <div className="p-1.5 bg-blue-500/10 rounded-lg border border-blue-500/20">
                        <Zap className="w-4 h-4 text-blue-400" />
                      </div>
                      <div>
                        <div className="font-bold text-foreground/80 text-sm">API Test Suite</div>
                        <div className="text-xs text-blue-500/90">REST & GraphQL</div>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed flex-1">
                      Comprehensive endpoint testing, contract validation, and microservice integration verification
                    </p>
                    <div className="mt-2.5 flex items-center gap-1.5 text-xs text-blue-500">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span className="font-semibold">500+ tests</span>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-3 relative overflow-hidden">
                  <div className="absolute inset-0 bg-blue-500/5 rounded-xl" />
                  <div className="relative p-3.5 border border-blue-500/20 rounded-xl backdrop-blur-sm h-full flex flex-col">
                    <div className="flex items-center gap-1.5 mb-1.5">
                      <div className="p-1.5 bg-blue-500/10 rounded-lg border border-blue-500/20">
                        <Layout className="w-4 h-4 text-blue-400" />
                      </div>
                      <div>
                        <div className="font-bold text-foreground/80 text-sm">UI Regression</div>
                        <div className="text-xs text-blue-500/90">BDD Scenarios</div>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed flex-1">
                      Behavior-driven user journey testing with Gherkin scenarios covering critical workflows
                    </p>
                    <div className="mt-2.5 flex items-center gap-1.5 text-xs text-blue-500">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span className="font-semibold">250+ scenarios</span>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-3 relative overflow-hidden">
                  <div className="absolute inset-0 bg-blue-500/5 rounded-xl" />
                  <div className="relative p-3.5 border border-blue-500/20 rounded-xl backdrop-blur-sm h-full flex flex-col">
                    <div className="flex items-center gap-1.5 mb-1.5">
                      <div className="p-1.5 bg-blue-500/10 rounded-lg border border-blue-500/20">
                        <Code2 className="w-4 h-4 text-blue-400" />
                      </div>
                      <div>
                        <div className="font-bold text-foreground/80 text-sm">Component Tests</div>
                        <div className="text-xs text-blue-500/90">React + Cypress</div>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed flex-1">
                      Isolated React component testing with Cypress Component Testing for UI validation
                    </p>
                    <div className="mt-2.5 flex items-center gap-1.5 text-xs text-blue-500">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span className="font-semibold">100+ components</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Tech Stack */}
              <div className="pt-4 border-t border-blue-500/15">
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-blue-500/10 text-blue-500/90 border-blue-500/25">C# / .NET 8-9</Badge>
                  <Badge className="bg-blue-500/10 text-blue-500/90 border-blue-500/25">xUnit</Badge>
                  <Badge className="bg-blue-500/10 text-blue-500/90 border-blue-500/25">SpecFlow</Badge>
                  <Badge className="bg-blue-500/10 text-blue-500/90 border-blue-500/25">RestSharp</Badge>
                  <Badge className="bg-blue-500/10 text-blue-500/90 border-blue-500/25">Selenium</Badge>
                  <Badge className="bg-blue-500/10 text-blue-500/90 border-blue-500/25">Cypress</Badge>
                  <Badge className="bg-blue-500/10 text-blue-500/90 border-blue-500/25">Docker</Badge>
                  <Badge className="bg-blue-500/10 text-blue-500/90 border-blue-500/25">NATS</Badge>
                  <Badge className="bg-blue-500/10 text-blue-500/90 border-blue-500/25">PostgreSQL</Badge>
                  <Badge className="bg-blue-500/10 text-blue-500/90 border-blue-500/25">MongoDB</Badge>
                  <Badge className="bg-blue-500/10 text-blue-500/90 border-blue-500/25">CircleCI</Badge>
                  <Badge className="bg-blue-500/10 text-blue-500/90 border-blue-500/25">GitHub Actions</Badge>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Project 2: AI-Powered Test Automation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.001, delay: 0.2 }}
            className="relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 via-background to-purple-500/5 rounded-3xl blur-3xl" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-violet-500/8 rounded-full blur-[100px] -z-10" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/8 rounded-full blur-[100px] -z-10" />
            
            <div className="relative bg-gradient-to-br from-violet-500/5 via-background to-purple-500/5 border border-violet-500/20 rounded-3xl p-5 backdrop-blur-sm">
              <div className="mb-5">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 bg-violet-500/10 rounded-lg border border-violet-500/20">
                      <Brain className="w-6 h-6 text-violet-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-1">
                        AI-Assisted Test Generation
                      </h3>
                      <p className="text-sm text-violet-400 font-semibold flex items-center gap-2">
                        <Sparkles className="w-4 h-4" />
                        Innovation Initiative • 2025 - Present
                      </p>
                    </div>
                  </div>
                </div>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Leveraging AI to accelerate test creation and reduce maintenance overhead
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 mb-5">
                <div className="relative overflow-hidden">
                  <div className="absolute inset-0 bg-violet-500/5 rounded-xl" />
                  <div className="relative p-4 border border-violet-500/20 rounded-xl backdrop-blur-sm h-full">
                    <div className="flex items-center gap-1.5 mb-2">
                      <div className="p-1.5 bg-violet-500/10 rounded-lg border border-violet-500/20">
                        <Zap className="w-4 h-4 text-violet-400" />
                      </div>
                      <h4 className="text-base font-bold text-foreground/80">60% Faster</h4>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      AI-generated test scenarios from requirements, reducing manual test creation time significantly
                    </p>
                  </div>
                </div>

                <div className="relative overflow-hidden">
                  <div className="absolute inset-0 bg-violet-500/5 rounded-xl" />
                  <div className="relative p-4 border border-violet-500/20 rounded-xl backdrop-blur-sm h-full">
                    <div className="flex items-center gap-1.5 mb-2">
                      <div className="p-1.5 bg-violet-500/10 rounded-lg border border-violet-500/20">
                        <Shield className="w-4 h-4 text-violet-400" />
                      </div>
                      <h4 className="text-base font-bold text-foreground/80">40% Less Flaky</h4>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Self-healing test scripts with AI-powered selector optimization reducing test brittleness
                    </p>
                  </div>
                </div>

                <div className="relative overflow-hidden md:col-span-2">
                  <div className="absolute inset-0 bg-violet-500/5 rounded-xl" />
                  <div className="relative p-4 border border-violet-500/20 rounded-xl backdrop-blur-sm">
                    <div className="flex items-center gap-1.5 mb-2">
                      <div className="p-1.5 bg-violet-500/10 rounded-lg border border-violet-500/20">
                        <BookOpen className="w-4 h-4 text-violet-400" />
                      </div>
                      <h4 className="text-base font-bold text-foreground/80">Automated BDD Generation</h4>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Gherkin scenarios automatically created from Jira tickets, bridging business requirements and technical implementation
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-violet-500/15">
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-violet-500/10 text-violet-400/90 border-violet-500/25">GitHub Copilot</Badge>
                  <Badge className="bg-violet-500/10 text-violet-400/90 border-violet-500/25">OpenAI API</Badge>
                  <Badge className="bg-violet-500/10 text-violet-400/90 border-violet-500/25">Python</Badge>
                  <Badge className="bg-violet-500/10 text-violet-400/90 border-violet-500/25">Selenium</Badge>
                  <Badge className="bg-violet-500/10 text-violet-400/90 border-violet-500/25">Cypress</Badge>
                  <Badge className="bg-violet-500/10 text-violet-400/90 border-violet-500/25">Jira Xray</Badge>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Project 3: Desktop Test Automation Foundation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.001, delay: 0.3 }}
            className="relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-background to-amber-500/5 rounded-3xl blur-3xl" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/8 rounded-full blur-[100px] -z-10" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/8 rounded-full blur-[100px] -z-10" />
            
            <div className="relative bg-gradient-to-br from-orange-500/5 via-background to-amber-500/5 border border-orange-500/20 rounded-3xl p-5 backdrop-blur-sm">
              <div className="mb-5">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 bg-orange-500/10 rounded-lg border border-orange-500/20">
                      <Layers className="w-6 h-6 text-orange-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-1">
                        Desktop Test Automation
                      </h3>
                      <p className="text-sm text-orange-400 font-semibold flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4" />
                        Foundation Work • 2018 - 2020
                      </p>
                    </div>
                  </div>
                </div>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Built comprehensive desktop test automation for enterprise application across 15+ releases
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 mb-5">
                <div className="relative overflow-hidden">
                  <div className="absolute inset-0 bg-orange-500/8 rounded-xl blur-lg" />
                  <div className="relative p-4 border border-orange-500/20 rounded-xl backdrop-blur-sm h-full">
                    <div className="flex items-center gap-1.5 mb-2">
                      <div className="p-1.5 bg-orange-500/10 rounded-lg border border-orange-500/20">
                        <TestTube2 className="w-4 h-4 text-orange-400" />
                      </div>
                      <h4 className="text-base font-bold text-foreground/80">150+</h4>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Test cases automated across 15+ releases for enterprise desktop application
                    </p>
                  </div>
                </div>

                <div className="relative overflow-hidden">
                  <div className="absolute inset-0 bg-orange-500/8 rounded-xl blur-lg" />
                  <div className="relative p-4 border border-orange-500/20 rounded-xl backdrop-blur-sm h-full">
                    <div className="flex items-center gap-1.5 mb-2">
                      <div className="p-1.5 bg-orange-500/10 rounded-lg border border-orange-500/20">
                        <Target className="w-4 h-4 text-orange-400" />
                      </div>
                      <h4 className="text-base font-bold text-foreground/80">100+</h4>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Bugs discovered and fixed before reaching production environments
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-orange-500/15">
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-orange-500/10 text-orange-400/90 border-orange-500/25">C#</Badge>
                  <Badge className="bg-orange-500/10 text-orange-400/90 border-orange-500/25">Desktop Automation</Badge>
                  <Badge className="bg-orange-500/10 text-orange-400/90 border-orange-500/25">WinForms</Badge>
                  <Badge className="bg-orange-500/10 text-orange-400/90 border-orange-500/25">Excel Integration</Badge>
                  <Badge className="bg-orange-500/10 text-orange-400/90 border-orange-500/25">MSTest</Badge>
                  <Badge className="bg-orange-500/10 text-orange-400/90 border-orange-500/25">Agile/Scrum</Badge>
                  <Badge className="bg-orange-500/10 text-orange-400/90 border-orange-500/25">Azure DevOps</Badge>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Key Capabilities Quick Reference */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 grid md:grid-cols-4 gap-4"
        >
          <div className="p-4 bg-muted/30 border border-white/10 rounded-xl text-center">
            <div className="text-3xl font-bold text-primary mb-1">15+</div>
            <div className="text-sm text-muted-foreground">Microservices Tested</div>
          </div>
          <div className="p-4 bg-muted/30 border border-white/10 rounded-xl text-center">
            <div className="text-3xl font-bold text-primary mb-1">1300+</div>
            <div className="text-sm text-muted-foreground">Automated Tests</div>
          </div>
          <div className="p-4 bg-muted/30 border border-white/10 rounded-xl text-center">
            <div className="text-3xl font-bold text-primary mb-1">60%</div>
            <div className="text-sm text-muted-foreground">Time Saved w/ AI</div>
          </div>
          <div className="p-4 bg-muted/30 border border-white/10 rounded-xl text-center">
            <div className="text-3xl font-bold text-primary mb-1">100%</div>
            <div className="text-sm text-muted-foreground">Pre-Merge Coverage</div>
          </div>
        </motion.div>
      </div>
      
      </div></TabsContent>

            <TabsContent value="technology" className="mt-0"><div>
      
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
              transition={{ delay: 0 * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-4 bg-primary/5 border border-primary/20 rounded-xl"
            >
              <div className="text-3xl font-bold text-primary mb-1">40+</div>
              <div className="text-sm text-muted-foreground">Technologies</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 * 0.1 }}
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
              transition={{ delay: 2 * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-4 bg-primary/5 border border-primary/20 rounded-xl"
            >
              <div className="text-3xl font-bold text-primary mb-1">4</div>
              <div className="text-sm text-muted-foreground">Databases</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 3 * 0.1 }}
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
      </div></TabsContent>

            <TabsContent value="experience" className="mt-0"><div>
      {/* Experience */}
      <ExperienceSection fadeInUp={fadeInUp} />
      </div></TabsContent>
          </Tabs>
        </div>
      </div>

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

      {/* Back to Top */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-4 bg-primary text-primary-foreground rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}
    </div>
  );
}
