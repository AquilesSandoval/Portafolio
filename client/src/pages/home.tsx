import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
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
  ChevronDown,
  GraduationCap,
  Trophy,
  Calendar,
  MessageCircle
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
  SiLinux,
  SiWhatsapp
} from "react-icons/si";
import { FaJava } from "react-icons/fa";


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
    company: "Central de Abastos Morelia",
    location: "Morelia, MX",
    period: "2025",
    role: "Desarrollador Full Stack (Proyecto a Medida)",
    description: "Colaboré en el diseño y desarrollo de un ecosistema de software a medida que incluye un sistema POS (Punto de Venta) y un ERP completo.",
    achievements: [
      "Trabajé en equipo para implementar estas herramientas que optimizaron la administración de recursos y el flujo de ventas, mejorando la eficiencia operativa.",
      "Contribuí al análisis de flujos de trabajo operativos complejos para traducirlos en soluciones de software robustas y funcionales dentro de un entorno colaborativo."
    ]
  },
  {
    id: 3,
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
    technologies: ["Deep Learning", "TensorFlow", "Python", "React Native"],
    achievement: "Finalista Nacional InnovaTec 2025 | 1er Lugar Estatal"
  },
  {
    id: 2,
    title: "AIYM - Suite para Atletas",
    description: "Suite tecnológica completa para entrenamiento profesional de atletas: App móvil, Landing Page y Panel Administrativo.",
    technologies: ["Full Stack", "React", "React Native", "UX/UI"],
    achievement: "Empresa Internacional con sede en España"
  },
  {
    id: 3,
    title: "Deli T - Innovación en Materiales e IoT",
    description: "Solución innovadora integrando tecnología NFC con filamentos biodegradables para impresión 3D, enfocada en la trazabilidad de productos.",
    technologies: ["IoT", "NFC", "Arduino", "Impresión 3D"],
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

function ReadingProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (window.scrollY / scrollHeight) * 100;
      setProgress(scrolled);
    };
    window.addEventListener("scroll", updateProgress);
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-1 z-[100] bg-transparent">
      <motion.div 
        className="h-full bg-primary"
        style={{ width: `${progress}%` }}
        data-testid="reading-progress-bar"
      />
    </div>
  );
}

function FloatingWhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/524431347177"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-xl transition-shadow"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      data-testid="button-whatsapp"
    >
      <SiWhatsapp className="w-6 h-6" />
    </motion.a>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ReadingProgressBar />
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
      <FloatingWhatsAppButton />
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
        className="fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-xl border-b border-white/10"
      >
        <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
          <a href="#" className="text-lg font-bold" data-testid="link-home">
            PASM
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
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl md:hidden pt-20"
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
    <section className="min-h-screen flex items-center justify-center px-6 pt-20 pb-32 relative overflow-hidden">
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
            <AvatarImage src="/perfil.jpeg" alt="Paulo Aquiles Sandoval" className="object-cover" />
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
      </motion.div>
      
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors z-10"
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
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="py-20 px-6">
      <motion.div 
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-3 mb-8">
          <User className="w-8 h-8 text-primary" />
          <h2 className="text-3xl sm:text-4xl font-semibold" data-testid="heading-about">Sobre Mí</h2>
        </div>
        
        <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4" data-testid="bento-grid-about">
          <motion.div 
            className="md:col-span-2 lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="h-full p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-white/10" data-testid="card-about-summary">
              <p className="text-lg leading-relaxed text-muted-foreground">
                Estudiante de Ingeniería en Sistemas Computacionales con especialidad en Ciberseguridad 
                en el Instituto Tecnológico de Morelia. Co-fundador de AVOTEX, una startup AgTech 
                innovadora, y pieza clave en el desarrollo de soluciones tecnológicas para atletas 
                de alto rendimiento a nivel internacional.
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="h-full p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-white/10 flex flex-col items-center justify-center text-center" data-testid="card-about-location">
              <MapPin className="w-8 h-8 text-primary mb-3" />
              <p className="text-sm text-muted-foreground">Ubicación</p>
              <p className="font-semibold">Morelia, Michoacán</p>
              <p className="text-sm text-muted-foreground">México</p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="h-full p-6 rounded-xl bg-primary/10 backdrop-blur-sm border border-primary/20 flex flex-col items-center justify-center text-center" data-testid="card-about-gpa">
              <GraduationCap className="w-8 h-8 text-primary mb-3" />
              <p className="text-sm text-muted-foreground">Promedio</p>
              <p className="text-2xl font-bold text-primary">90.83</p>
              <p className="text-sm text-muted-foreground">/100</p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <div className="h-full p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-white/10 flex flex-col items-center justify-center text-center" data-testid="card-about-graduation">
              <Calendar className="w-8 h-8 text-primary mb-3" />
              <p className="text-sm text-muted-foreground">Graduación</p>
              <p className="text-2xl font-bold">2026</p>
              <p className="text-sm text-muted-foreground">Esperada</p>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <div className="h-full p-6 rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 backdrop-blur-sm border border-primary/20" data-testid="card-about-achievement">
              <div className="flex items-center gap-3 mb-3">
                <Trophy className="w-8 h-8 text-primary" />
                <div>
                  <p className="font-semibold">Finalista Nacional</p>
                  <p className="text-sm text-muted-foreground">InnovaTec 2025</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Reconocimiento por innovación en tecnología AgTech con AVOTEX, 
                alcanzando el 1er lugar estatal y la final nacional.
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <div className="h-full p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-white/10" data-testid="card-about-roles">
              <p className="text-sm text-muted-foreground mb-2">Roles Actuales</p>
              <div className="space-y-2">
                <Badge variant="secondary" className="w-full justify-center">Co-Fundador</Badge>
                <Badge variant="outline" className="w-full justify-center">Full Stack Dev</Badge>
              </div>
            </div>
          </motion.div>
        </div>
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
              <div className="relative p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-white/10" data-testid={`card-experience-${exp.id}`}>
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-l-xl" />
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold" data-testid={`text-company-${exp.id}`}>{exp.company}</h3>
                    <p className="text-muted-foreground flex items-center gap-2 mt-1" data-testid={`text-location-${exp.id}`}>
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </p>
                  </div>
                  <Badge variant="outline" className="self-start whitespace-nowrap" data-testid={`badge-period-${exp.id}`}>
                    {exp.period}
                  </Badge>
                </div>
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
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function TiltCard({ children, className, ...props }: { children: React.ReactNode; className?: string; [key: string]: unknown }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 300, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) / rect.width);
    y.set((e.clientY - centerY) / rect.height);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
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
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" style={{ perspective: "1000px" }}>
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <TiltCard className="h-full" data-testid={`card-project-${project.id}`}>
                <div className="h-full flex flex-col p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-white/10 hover:border-primary/30 transition-colors">
                  <h3 className="text-lg font-semibold mb-3" data-testid={`text-project-title-${project.id}`}>{project.title}</h3>
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
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function TechLogoCarousel() {
  const duplicatedLogos = [...techLogos, ...techLogos, ...techLogos];

  return (
    <div 
      className="relative w-full overflow-hidden mb-12 group"
      data-testid="carousel-tech-logos"
    >
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
      
      <motion.div
        className="flex gap-12 group-hover:[animation-play-state:paused]"
        animate={{
          x: [0, -80 * techLogos.length],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          },
        }}
        style={{ width: "fit-content" }}
      >
        {duplicatedLogos.map((tech, index) => (
          <div
            key={`${tech.name}-${index}`}
            className="flex flex-col items-center gap-3 min-w-[80px] group/logo"
            data-testid={`logo-${tech.name.toLowerCase()}-${index}`}
          >
            <div className="p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-white/10 transition-all duration-500 group-hover/logo:border-primary/30 group-hover/logo:shadow-lg">
              <tech.icon 
                className="w-10 h-10 transition-all duration-500 grayscale group-hover/logo:grayscale-0" 
                style={{ color: tech.color }}
              />
            </div>
            <span className="text-xs text-muted-foreground whitespace-nowrap opacity-0 group-hover/logo:opacity-100 transition-opacity duration-300">{tech.name}</span>
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
              <div className="h-full p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-white/10" data-testid={`card-skill-${category.id}`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <category.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold" data-testid={`text-skill-category-${category.id}`}>{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill} variant="outline" className="text-xs" data-testid={`badge-skill-${category.id}-${skill.replace(/[^a-zA-Z0-9]/g, '')}`}>
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-white/10" data-testid="card-languages">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-primary/10">
                <Globe className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold" data-testid="text-languages-title">Idiomas</h3>
            </div>
            <div className="flex flex-wrap gap-4">
              {languages.map((lang) => (
                <div key={lang.name} className="flex items-center gap-2" data-testid={`text-language-${lang.name}`}>
                  <span className="font-medium">{lang.name}:</span>
                  <Badge variant="secondary" data-testid={`badge-language-level-${lang.name}`}>{lang.level}</Badge>
                </div>
              ))}
            </div>
          </div>
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
