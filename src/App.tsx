import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Experience } from './components/Experience';
import { FAQ } from './components/FAQ';
import { Valuation } from './components/Valuation';
import { Sectors } from './components/Sectors';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { Legal } from './components/Legal';
import { WhatsAppButton } from './components/WhatsAppButton';
import { CookieConsent } from './components/CookieConsent';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Services />
      <Experience />
      <FAQ />
      <Valuation />
      <Sectors />
      <ContactForm />
      <Footer />
      <Legal />
      <WhatsAppButton />
      <CookieConsent />
    </div>
  );
}

export default App;
