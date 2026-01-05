import { motion } from 'motion/react';
import { Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-purple-900 text-white py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl mb-4 text-purple-300">Логопед Олена</h3>
            <p className="text-gray-300 leading-relaxed">
              Професійні логопедичні послуги для дітей та дорослих. 
              Індивідуальний підхід та сучасні методики.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-xl mb-4 text-purple-300">Швидкі посилання</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-purple-400 transition-colors">Про мене</a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition-colors">Послуги</a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition-colors">Галерея</a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition-colors">Контакти</a>
              </li>
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-xl mb-4 text-purple-300">Соціальні мережі</h3>
            <div className="flex gap-4">
              {['Facebook', 'Instagram', 'Telegram'].map((social, index) => (
                <motion.a
                  key={social}
                  href="#"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-purple-600 transition-colors"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  {social[0]}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="border-t border-white/10 pt-8 text-center"
        >
          <p className="text-gray-400 flex items-center justify-center gap-2">
            © {currentYear} Логопедичні послуги. Створено з <Heart size={16} className="text-red-500 fill-current" /> для вашого успіху
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
