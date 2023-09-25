import About from "@/components/About";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import Order from "@/components/Order";
import Welcome from "@/components/Welcome";

export default function Home() {
  return (
    <section>
      <Header />
      <Hero />
      <Welcome />
      <About />
      <Menu />
      <Order />
      <Footer />
    </section>
  );
}
