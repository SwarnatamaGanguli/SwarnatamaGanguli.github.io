
import { ThemeProvider } from "@/components/ThemeProvider";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Blog } from "@/components/Blog";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { CursorTrail } from "@/components/CursorTrail";
import { ColorfulCursor } from "@/components/ColorfulCursor";

const Index = () => {
  return (
    <ThemeProvider defaultTheme="light">
      <div className="min-h-screen bg-background text-foreground cursor-none">
        <CursorTrail />
        <ColorfulCursor />
        <Header />
        <main>
          <Hero />
          <About />
          <Projects />
          <Blog />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
