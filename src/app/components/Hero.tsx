import { motion, useScroll, useTransform } from 'motion/react';
import { Sparkles } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HeroProps {
  onCTAClick: () => void;
}

export function Hero({ onCTAClick }: HeroProps) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-blue-600/20 to-pink-600/20" />
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1620415069538-d8763e2fa2f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGVlY2glMjB0aGVyYXB5JTIwY2hpbGR8ZW58MXx8fHwxNzY3NTI0ODU2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Логопедичні послуги"
          className="w-full h-full object-cover opacity-30"
        />
      </motion.div>

      {/* Floating Elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 left-10 text-purple-400 opacity-50"
      >
        <Sparkles size={40} />
      </motion.div>

      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-20 right-10 text-pink-400 opacity-50"
      >
        <Sparkles size={50} />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 text-center px-4 max-w-4xl"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600">
            Професійні логопедичні послуги
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-700 mb-8"
        >
          Допомагаю дітям та дорослим розвивати чіткість мовлення та впевненість у спілкуванні
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onCTAClick}
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full shadow-xl hover:shadow-2xl transition-shadow"
          >
            Записатися на консультацію
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onCTAClick}
            className="px-8 py-4 bg-white/90 backdrop-blur-sm text-purple-600 rounded-full shadow-xl hover:shadow-2xl transition-shadow border-2 border-purple-200"
          >
            Дізнатися більше
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-purple-400 rounded-full flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-purple-400 rounded-full"
          />
        </div>
      </motion.div>
    </div>
  );
}
