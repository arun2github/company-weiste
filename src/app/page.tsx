import Hero from '@/components/Hero';
import Services from '@/components/Services';
// import Portfolio from '@/components/Portfolio'; // Removed unused import
import Team from '@/components/Team';
import Clients from '@/components/Clients';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Hero />
      <Services />
      {/* <Portfolio /> */}
      <Team />
      <Clients />
      <Contact />
    </main>
  );
}
