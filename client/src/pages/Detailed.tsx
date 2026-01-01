import { motion } from "framer-motion";
import {
  ArrowUp,
  Code2,
  Database,
  Smartphone,
  Mail,
  Download,
  Sparkles,
  BookOpen,
  Cpu,
  Layers,
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
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import resumePdf from "@assets/ROHIT_VEGESNA_Resume_v3_1766689085122.pdf";
import { useState, useEffect } from "react";

export default function Detailed() {
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

  return (
    <div
      id="main"
      className="min-h-screen bg-background text-foreground overflow-x-hidden font-sans selection:bg-primary selection:text-primary-foreground"
    >
      {/* Info Banner */}
      <div className="sticky top-0 z-50 bg-gradient-to-r from-primary/10 via-purple-500/10 to-blue-500/10 border-b border-primary/20 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-3 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm">
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-primary" />
            <span className="text-muted-foreground">
              <span className="hidden sm:inline">Detailed technical documentation on Testing & Automation. </span>
              Looking for a quick overview?{" "}
              <a href="/" className="text-primary hover:text-primary/80 underline font-medium">
                Visit homepage
              </a>
            </span>
          </div>
          <a
            href="/"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-primary hover:text-primary-foreground bg-primary/10 hover:bg-primary rounded-full transition-colors border border-primary/30"
          >
            <ArrowUp className="w-3 h-3 rotate-[-90deg]" />
            Back to Home
          </a>
        </div>
      </div>

      {/* Page Header */}
      <section className="py-16 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
            <TestTube2 className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Comprehensive Portfolio</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
            <span className="bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
              Testing & Automation
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Deep dive into my comprehensive testing expertise spanning AI-powered automation, 
            multi-layer frameworks, distributed systems, and shift-left strategies
          </p>
        </motion.div>
      </section>

      {/* Main Content - Accordion Sections */}
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <Accordion 
          type="single" 
          collapsible 
          className="w-full space-y-4"
          onValueChange={(value) => {
            if (value) {
              setTimeout(() => {
                const openItem = document.querySelector(`[data-accordion-item] [data-state="open"]`);
                if (openItem) {
                  const accordionItem = openItem.closest('[data-accordion-item]');
                  if (accordionItem) {
                    const rect = accordionItem.getBoundingClientRect();
                    const navbarHeight = 100;
                    
                    if (rect.top < navbarHeight) {
                      const scrollTop = window.scrollY + rect.top - navbarHeight - 20;
                      window.scrollTo({ top: scrollTop, behavior: 'smooth' });
                    }
                  }
                }
              }, 100);
            }
          }}
        >
          {/* AI-Powered Testing */}
          <AccordionItem value="ai-testing" className="border-0 overflow-hidden scroll-mt-20" data-accordion-item style={{overflowAnchor: 'none'}}>
            <div className="relative bg-gradient-to-br from-violet-500/5 to-purple-500/5 rounded-xl">
              <AccordionTrigger className="text-xl font-bold hover:text-primary px-6 py-6 border border-white/10 rounded-xl hover:border-violet-500/30 transition-colors">
                <div className="flex items-center gap-3">
                  <Sparkles className="w-6 h-6 text-violet-500" />
                  AI-Powered Testing & Automation
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 py-8">
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
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
                    <div
                      key={index}
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
                    </div>
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
              </AccordionContent>
            </div>
          </AccordionItem>

          {/* Foundation: Multi-Layer Testing */}
          <AccordionItem value="foundation" className="border-0 overflow-hidden scroll-mt-20" data-accordion-item style={{overflowAnchor: 'none'}}>
            <div className="relative bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-xl">
              <AccordionTrigger className="text-xl font-bold hover:text-primary px-6 py-6 border border-white/10 rounded-xl hover:border-blue-500/30 transition-colors">
                <div className="flex items-center gap-3">
                  <TestTube2 className="w-6 h-6 text-blue-500" />
                  Foundation: Multi-Layer Testing
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 py-8">
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
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
                    <div
                      key={index}
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
                    </div>
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
              </AccordionContent>
            </div>
          </AccordionItem>

          {/* Advanced Testing Strategies */}
          <AccordionItem value="advanced-testing" className="border-0 overflow-hidden scroll-mt-20" data-accordion-item style={{overflowAnchor: 'none'}}>
            <div className="relative bg-gradient-to-br from-green-500/5 to-orange-500/5 rounded-xl">
              <AccordionTrigger className="text-xl font-bold hover:text-primary px-6 py-6 border border-white/10 rounded-xl hover:border-green-500/30 transition-colors">
                <div className="flex items-center gap-3">
                  <Network className="w-6 h-6 text-green-500" />
                  Advanced Testing Strategies
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 py-8">
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Architecting comprehensive testing solutions for complex
                  distributed systems and implementing shift-left strategies to
                  catch issues early in the development cycle.
                </p>

                <Tabs defaultValue="microservices" className="w-full">
                  <TabsList className="w-full h-auto flex flex-wrap justify-center gap-2 bg-muted/20 mb-8 p-2">
                    <TabsTrigger value="microservices" className="flex items-center gap-2 px-4 py-2 cursor-pointer data-[state=active]:bg-primary/10 data-[state=active]:text-foreground">
                      <Layers className="w-4 h-4" />
                      Microservices & Distributed
                    </TabsTrigger>
                    <TabsTrigger value="shift-left" className="flex items-center gap-2 px-4 py-2 cursor-pointer data-[state=active]:bg-primary/10 data-[state=active]:text-foreground">
                      <CheckCircle2 className="w-4 h-4" />
                      Shift-Left Testing
                    </TabsTrigger>
                    <TabsTrigger value="test-strategy" className="flex items-center gap-2 px-4 py-2 cursor-pointer data-[state=active]:bg-primary/10 data-[state=active]:text-foreground">
                      <BookOpen className="w-4 h-4" />
                      Test Strategy & Process
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="microservices" className="mt-0">
                    <p className="text-muted-foreground leading-relaxed mb-8">
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
                        <div
                          key={index}
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
                        </div>
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
                  </TabsContent>

                  <TabsContent value="shift-left" className="mt-0">
                    <p className="text-muted-foreground leading-relaxed mb-8">
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
                        {
                          icon: Shield,
                          title: "Quality Gates & Standards",
                          desc: "Establishing comprehensive quality gates and coding standards to maintain test quality. Code reviews, peer testing, and continuous improvement practices.",
                          highlights: [
                            "Test code review process",
                            "Coding standards enforcement",
                            "Coverage thresholds",
                            "Performance benchmarks",
                          ],
                        },
                      ].map((item, index) => (
                        <div
                          key={index}
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
                        </div>
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="test-strategy" className="mt-0">
                    <p className="text-muted-foreground leading-relaxed mb-8">
                      Strategic approach to test planning, execution, and continuous improvement
                      that aligns with business objectives and development workflows.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="p-8 border border-white/10 rounded-xl bg-muted/5">
                        <div className="flex items-center gap-3 mb-6">
                          <div className="p-3 bg-primary/10 rounded-lg">
                            <Target className="w-6 h-6 text-primary" />
                          </div>
                          <h3 className="text-2xl font-bold text-foreground">
                            Test Planning & Coverage
                          </h3>
                        </div>
                        <ul className="space-y-3 text-muted-foreground">
                          <li className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                            <span>Risk-based test prioritization for critical paths</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                            <span>Requirement traceability with Jira & Xray</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                            <span>Test pyramid strategy for optimal coverage</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                            <span>Continuous test suite optimization</span>
                          </li>
                        </ul>
                      </div>

                      <div className="p-8 border border-white/10 rounded-xl bg-muted/5">
                        <div className="flex items-center gap-3 mb-6">
                          <div className="p-3 bg-primary/10 rounded-lg">
                            <Workflow className="w-6 h-6 text-primary" />
                          </div>
                          <h3 className="text-2xl font-bold text-foreground">
                            Process & Collaboration
                          </h3>
                        </div>
                        <ul className="space-y-3 text-muted-foreground">
                          <li className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                            <span>Agile/Scrum integration with sprint planning</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                            <span>Cross-functional collaboration with dev teams</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                            <span>Test automation roadmap planning</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                            <span>Knowledge sharing & documentation</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </AccordionContent>
            </div>
          </AccordionItem>
        </Accordion>
      </div>

      {/* Footer / Contact */}
      <footer id="contact" className="py-20 container mx-auto px-4 text-center border-t border-white/5 mt-16">
        <motion.div {...fadeInUp}>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            Open to exciting opportunities and collaborations in test automation and quality assurance.
          </p>

          <div className="flex flex-col items-center gap-6 mb-12">
            <a
              href="mailto:rohitkumar.vegesna@outlook.com"
              className="inline-flex items-center gap-3 text-lg font-medium text-primary hover:text-primary/80 transition-all border-b-2 border-primary/30 hover:border-primary pb-1 group"
            >
              <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
              rohitkumar.vegesna@outlook.com
            </a>

            <a
              href={resumePdf}
              download="Rohit_Vegesna_Resume.pdf"
              className="inline-flex items-center gap-3 min-h-[48px] px-8 py-3 text-lg font-medium text-primary bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-all border-2 border-primary/30 hover:border-primary rounded-full shadow-lg hover:shadow-primary/25 hover:scale-105"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </a>
          </div>

          <div className="mt-12 pt-8 border-t border-white/5 text-sm text-muted-foreground">
            <p>
              © {new Date().getFullYear()} Rohit Vegesna. Built with React,
              TypeScript & Tailwind CSS.
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
