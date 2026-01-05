import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  onNavigate: (section: 'about' | 'services' | 'benefits' | 'booking' | 'blog' | 'gallery' | 'contact') => void;
}

export function Navigation({ onNavigate }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Про мене', section: 'about' as const },
    { label: 'Послуги', section: 'services' as const },
    { label: 'Переваги', section: 'benefits' as const },
    { label: 'Бронювання', section: 'booking' as const },
    // { label: 'Блог', section: 'blog' as const },
    { label: 'Галерея', section: 'gallery' as const },
    { label: 'Контакти', section: 'contact' as const },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-2xl text-purple-600">Логопед</h2>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item, index) => (
              <motion.button
                key={item.section}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                onClick={() => onNavigate(item.section)}
                className="text-gray-700 hover:text-purple-600 transition-colors"
              >
                {item.label}
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden pb-4"
          >
            {menuItems.map((item) => (
              <button
                key={item.section}
                onClick={() => {
                  onNavigate(item.section);
                  setIsMobileMenuOpen(false);
                }}
                className="block w-full text-left py-3 text-gray-700 hover:text-purple-600 transition-colors"
              >
                {item.label}
              </button>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}