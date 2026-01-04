import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  Code2,
  Smartphone,
  Brain,
  Wrench,
  Globe,
  Award,
  Briefcase,
  User,
  Menu,
  X,
  ChevronDown
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  SiPython, 
  SiJavascript, 
  SiCplusplus, 
  SiReact, 
  SiTensorflow, 
  SiDocker, 
  SiGit,
  SiHtml5,
  SiCss3,
  SiArduino,
  SiPandas,
  SiNumpy,
  SiKeras,
  SiLinux
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import profileImage from "@assets/imagen_de_perfil_1767555239979.jpeg";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const experiences = [
  {
    id: 1,
    company: "AIYM",
    location: "Morelia, MX / España (Remoto)",
    period: "2025 - Presente",
    role: "Miembro Clave del Equipo de Ingeniería (Full Stack)",
    description: "Parte fundamental en el desarrollo de una suite tecnológica integral para una empresa internacional con sede en España, dedicada al entrenamiento profesional de atletas de alto rendimiento (Running, Triatlón, Natación).",
    achievements: [
      "Desarrollo y despliegue de tres productos centrales: una Aplicación Móvil para atletas, una Landing Page corporativa y un Panel Administrativo (Admin Page) para la gestión de entrenamientos.",
      "Optimización de la experiencia de usuario para gestión de datos complejos."
    ]
  },
  {
    id: 2,
    company: "AVOTEX",
    location: "Morelia, MX",
    period: "Ene 2023 - Presente",
    role: "Co-Fundador y Desarrollador Core",
    description: "Startup AgTech enfocada en la detección de enfermedades en aguacates mediante IA.",
    achievements: [
      "Implementación de modelos de Deep Learning con TensorFlow y Python integrados en React Native.",
      "Ganador del 1er Lugar Estatal y Finalista Nacional en InnovaTec 2025."
    ]
  }
];

const projects = [
  {
    id: 1,
    title: "AVOTEX - Detección de Enfermedades en Aguacates",
    description: "Aplicación móvil con IA para detectar enfermedades en cultivos de aguacate utilizando visión por computadora.",
    technologies: ["TensorFlow", "Python", "React Native", "Deep Learning"],
    achievement: "Finalista Nacional InnovaTec 2025 | 1er Lugar Estatal"
  },
  {
    id: 2,
    title: "AIYM - Suite para Atletas",
    description: "Suite tecnológica completa para entrenamiento profesional de atletas: App móvil, Landing Page y Panel Administrativo.",
    technologies: ["React", "React Native", "Full Stack", "UX/UI"],
    achievement: "Empresa Internacional con sede en España"
  },
  {
    id: 3,
    title: "Deli T - Innovación en Materiales e IoT",
    description: "Solución innovadora integrando tecnología NFC con filamentos biodegradables para impresión 3D, enfocada en la trazabilidad de productos.",
    technologies: ["IoT", "NFC", "Impresión 3D", "Arduino"],
    achievement: "5to Lugar en competencia universitaria"
  }
];

const skillCategories = [
  {
    id: 1,
    title: "Lenguajes",
    icon: Code2,
    skills: ["Python (Avanzado)", "JavaScript (ES6+)", "C++", "Java", "SQL"]
  },
  {
    id: 2,
    title: "Web/Mobile",
    icon: Smartphone,
    skills: ["React", "React Native", "HTML", "CSS"]
  },
  {
    id: 3,
    title: "IA/Data",
    icon: Brain,
    skills: ["TensorFlow", "Keras", "NumPy", "Pandas"]
  },
  {
    id: 4,
    title: "Herramientas",
    icon: Wrench,
    skills: ["Git/GitHub", "Docker", "Linux (Kali/Ubuntu)", "Arduino"]
  }
];

const languages = [
  { name: "Español", level: "Nativo" },
  { name: "Inglés", level: "B2+" },
  { name: "Portugués", level: "Básico" }
];

const techLogos = [
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "C++", icon: SiCplusplus, color: "#00599C" },
  { name: "Java", icon: FaJava, color: "#ED8B00" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS3", icon: SiCss3, color: "#1572B6" },
  { name: "Arduino", icon: SiArduino, color: "#00979D" },
  { name: "Pandas", icon: SiPandas, color: "#150458" },
  { name: "NumPy", icon: SiNumpy, color: "#013243" },
  { name: "Keras", icon: SiKeras, color: "#D00000" },
  { name: "Linux", icon: SiLinux, color: "#FCC624" },
];

const navItems = [
  { label: "Sobre Mí", href: "#about" },
  { label: "Experiencia", href: "#experience" },
  { label: "Proyectos", href: "#projects" },
  { label: "Habilidades", href: "#skills" },
  { label: "Contacto", href: "#contact" }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    </div>
  );
}

function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-background/80 backdrop-blur-lg border-b border-border" : ""
        }`}
      >
        <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
          <a href="#" className="text-lg font-bold" data-testid="link-home">
            PAS
          </a>
          
          <ul className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  data-testid={`nav-${item.href.slice(1)}`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </nav>
      </motion.header>
      
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-lg md:hidden pt-20"
          >
            <nav className="flex flex-col items-center gap-6 p-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-xl font-medium text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                  data-testid={`mobile-nav-${item.href.slice(1)}`}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <motion.div 
        className="max-w-4xl mx-auto text-center relative z-10"
        initial="initial"
        animate="animate"
        variants={staggerContainer}
      >
        <motion.div variants={fadeInUp} className="mb-8">
          <Avatar className="w-32 h-32 mx-auto border-4 border-primary/20" data-testid="img-avatar">
            <AvatarImage src={profileImage} alt="Paulo Aquiles Sandoval" className="object-cover" />
            <AvatarFallback className="text-4xl font-bold bg-primary/10 text-primary">
              PA
            </AvatarFallback>
          </Avatar>
        </motion.div>
        
        <motion.h1 
          variants={fadeInUp}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight"
          data-testid="text-hero-name"
        >
          Paulo Aquiles Sandoval
        </motion.h1>
        
        <motion.p 
          variants={fadeInUp}
          className="text-xl sm:text-2xl md:text-3xl text-muted-foreground mb-4 font-medium"
          data-testid="text-hero-title"
        >
          Ingeniero de Software & Especialista en Ciberseguridad
        </motion.p>
        
        <motion.div 
          variants={fadeInUp}
          className="flex items-center justify-center gap-2 text-muted-foreground mb-8"
          data-testid="text-hero-location"
        >
          <MapPin className="w-5 h-5" />
          <span>Morelia, Michoacán, México</span>
        </motion.div>
        
        <motion.div 
          variants={fadeInUp}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <Button asChild size="lg" data-testid="link-linkedin">
            <a href="https://www.linkedin.com/in/aquilessandoval" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" data-testid="link-github">
            <a href="https://github.com/AquilesSandoval" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              GitHub
            </a>
          </Button>
        </motion.div>
        
        <motion.a
          href="#about"
          variants={fadeInUp}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          data-testid="scroll-indicator"
        >
          <span className="text-sm">Ver más</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </motion.a>
      </motion.div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="py-20 px-6">
      <motion.div 
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-3 mb-8">
          <User className="w-8 h-8 text-primary" />
          <h2 className="text-3xl sm:text-4xl font-semibold" data-testid="heading-about">Sobre Mí</h2>
        </div>
        
        <Card data-testid="card-about">
          <CardContent className="p-6 sm:p-8">
            <p className="text-lg leading-relaxed text-muted-foreground" data-testid="text-about-description">
              Estudiante de Ingeniería en Sistemas Computacionales con especialidad en Ciberseguridad 
              en el Instituto Tecnológico de Morelia. Co-fundador de AVOTEX, una startup AgTech 
              innovadora, y pieza clave en el desarrollo de soluciones tecnológicas para atletas 
              de alto rendimiento a nivel internacional. Apasionado por la Inteligencia Artificial, 
              el desarrollo Full Stack y la creación de productos que generen impacto real.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <Badge variant="secondary" data-testid="badge-gpa">Promedio: 90.83/100</Badge>
              <Badge variant="secondary" data-testid="badge-innovatec">Finalista Nacional InnovaTec 2025</Badge>
              <Badge variant="secondary" data-testid="badge-graduation">Esperado: 2026</Badge>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}

function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-6 bg-card/30">
      <motion.div 
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-3 mb-12">
          <Briefcase className="w-8 h-8 text-primary" />
          <h2 className="text-3xl sm:text-4xl font-semibold" data-testid="heading-experience">Experiencia Profesional</h2>
        </div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="relative overflow-visible" data-testid={`card-experience-${exp.id}`}>
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-l-md" />
                <CardHeader className="pb-2">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                    <div>
                      <CardTitle className="text-xl sm:text-2xl" data-testid={`text-company-${exp.id}`}>{exp.company}</CardTitle>
                      <p className="text-muted-foreground flex items-center gap-2 mt-1" data-testid={`text-location-${exp.id}`}>
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </p>
                    </div>
                    <Badge variant="outline" className="self-start whitespace-nowrap" data-testid={`badge-period-${exp.id}`}>
                      {exp.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-medium text-primary mb-3" data-testid={`text-role-${exp.id}`}>{exp.role}</p>
                  <p className="text-muted-foreground mb-4" data-testid={`text-description-${exp.id}`}>{exp.description}</p>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2" data-testid={`text-achievement-${exp.id}-${i}`}>
                        <Award className="w-4 h-4 text-primary mt-1 shrink-0" />
                        <span className="text-muted-foreground">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-6">
      <motion.div 
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-3 mb-12">
          <Code2 className="w-8 h-8 text-primary" />
          <h2 className="text-3xl sm:text-4xl font-semibold" data-testid="heading-projects">Proyectos Destacados</h2>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col hover-elevate" data-testid={`card-project-${project.id}`}>
                <CardHeader>
                  <CardTitle className="text-lg" data-testid={`text-project-title-${project.id}`}>{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-muted-foreground mb-4 flex-1" data-testid={`text-project-description-${project.id}`}>{project.description}</p>
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs" data-testid={`badge-tech-${project.id}-${tech}`}>
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-primary" data-testid={`text-project-achievement-${project.id}`}>
                      <Award className="w-4 h-4" />
                      <span>{project.achievement}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function TechLogoCarousel() {
  const [isPaused, setIsPaused] = useState(false);
  const duplicatedLogos = [...techLogos, ...techLogos];

  return (
    <div 
      className="relative w-full overflow-hidden mb-12"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      data-testid="carousel-tech-logos"
    >
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
      
      <motion.div
        className="flex gap-8"
        animate={{
          x: isPaused ? undefined : [0, -50 * techLogos.length],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        }}
        style={{ width: "fit-content" }}
      >
        {duplicatedLogos.map((tech, index) => (
          <div
            key={`${tech.name}-${index}`}
            className="flex flex-col items-center gap-2 min-w-[80px]"
            data-testid={`logo-${tech.name.toLowerCase()}-${index}`}
          >
            <div 
              className="p-4 rounded-md bg-card border border-border transition-all duration-300 hover:scale-110"
              style={{ 
                boxShadow: isPaused ? `0 0 20px ${tech.color}30` : 'none'
              }}
            >
              <tech.icon 
                className="w-8 h-8 transition-colors duration-300" 
                style={{ color: tech.color }}
              />
            </div>
            <span className="text-xs text-muted-foreground whitespace-nowrap">{tech.name}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-6 bg-card/30">
      <motion.div 
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-3 mb-12">
          <Wrench className="w-8 h-8 text-primary" />
          <h2 className="text-3xl sm:text-4xl font-semibold" data-testid="heading-skills">Habilidades Técnicas</h2>
        </div>
        
        <TechLogoCarousel />
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full" data-testid={`card-skill-${category.id}`}>
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-md bg-primary/10">
                      <category.icon className="w-5 h-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg" data-testid={`text-skill-category-${category.id}`}>{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge key={skill} variant="outline" className="text-xs" data-testid={`badge-skill-${category.id}-${skill.replace(/[^a-zA-Z0-9]/g, '')}`}>
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Card data-testid="card-languages">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-md bg-primary/10">
                  <Globe className="w-5 h-5 text-primary" />
                </div>
                <CardTitle className="text-lg" data-testid="text-languages-title">Idiomas</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-4">
                {languages.map((lang) => (
                  <div key={lang.name} className="flex items-center gap-2" data-testid={`text-language-${lang.name}`}>
                    <span className="font-medium">{lang.name}:</span>
                    <Badge variant="secondary" data-testid={`badge-language-level-${lang.name}`}>{lang.level}</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </section>
  );
}

function ContactSection() {
  return (
    <footer id="contact" className="py-20 px-6 border-t border-border">
      <motion.div 
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl sm:text-4xl font-semibold mb-8" data-testid="heading-contact">Contacto</h2>
        
        <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
          <Button asChild variant="outline" data-testid="link-email">
            <a href="mailto:paulo.aquiles.sandoval@outlook.com">
              <Mail className="w-5 h-5 mr-2" />
              Email
            </a>
          </Button>
          <Button asChild variant="outline" data-testid="link-phone">
            <a href="tel:+524431347177">
              <Phone className="w-5 h-5 mr-2" />
              +52 443 134 7177
            </a>
          </Button>
          <Button asChild variant="outline" data-testid="link-linkedin-footer">
            <a href="https://www.linkedin.com/in/aquilessandoval" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </a>
          </Button>
          <Button asChild variant="outline" data-testid="link-github-footer">
            <a href="https://github.com/AquilesSandoval" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              GitHub
            </a>
          </Button>
        </div>
        
        <p className="text-muted-foreground" data-testid="text-footer-name">
          Paulo Aquiles Sandoval Mercado
        </p>
        <p className="text-sm text-muted-foreground mt-2" data-testid="text-footer-location">
          Morelia, Michoacán, México
        </p>
      </motion.div>
    </footer>
  );
}
