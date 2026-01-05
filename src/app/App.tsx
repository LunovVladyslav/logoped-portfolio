import { useRef } from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Benefits } from './components/Benefits';
import { Booking } from './components/Booking';
import { Blog } from './components/Blog';
import { Gallery } from './components/Gallery';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Navigation } from './components/Navigation';

export default function App() {
  const aboutRef = useRef<HTMLElement>(null);
  const servicesRef = useRef<HTMLElement>(null);
  const benefitsRef = useRef<HTMLElement>(null);
  const bookingRef = useRef<HTMLElement>(null);
  const blogRef = useRef<HTMLElement>(null);
  const galleryRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <Navigation
        onNavigate={(section) => {
          const refs = {
            about: aboutRef,
            services: servicesRef,
            benefits: benefitsRef,
            booking: bookingRef,
            blog: blogRef,
            gallery: galleryRef,
            contact: contactRef
          };
          scrollToSection(refs[section]);
        }}
      />
      <Hero onCTAClick={() => scrollToSection(bookingRef)} />
      <About ref={aboutRef} />
      <Services ref={servicesRef} />
      <Benefits ref={benefitsRef} />
      <Booking ref={bookingRef} />
      {/* <Blog ref={blogRef} /> */}
      <Gallery ref={galleryRef} />
      <Contact ref={contactRef} />
      <Footer />
    </div>
  );
}