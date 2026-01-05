import { forwardRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Clock, Target, Shield, Heart } from 'lucide-react';

export const Benefits = forwardRef<HTMLElement>((_, ref) => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const benefits = [
    {
      icon: Target,
      title: 'Індивідуальний підхід',
      description: 'Розробка персональної програми для кожного клієнта з урахуванням особливостей та потреб',
    },
    {
      icon: Shield,
      title: 'Сертифікований фахівець',
      description: 'Офіційні дипломи та сертифікати, постійне підвищення кваліфікації',
    },
    {
      icon: Clock,
      title: 'Гнучкий графік',
      description: 'Зручний час занять, онлайн та офлайн формати на ваш вибір',
    },
    {
      icon: Heart,
      title: 'Комфортна атмосфера',
      description: 'Дружня та підтримуюча обстановка, де кожен почувається впевнено',
    },
  ];

  return (
    <section ref={ref} className="py-20 px-4 relative overflow-hidden">
      {/* Parallax Background Elements */}
      <motion.div
        style={{ y }}
        className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full filter blur-3xl"
      />
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, 50]) }}
        className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full filter blur-3xl"
      />

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 text-gray-800">Чому обирають мене</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative group"
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="flex items-start gap-6">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="flex-shrink-0"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg">
                      <benefit.icon className="text-white" size={28} />
                    </div>
                  </motion.div>

                  <div className="flex-1">
                    <h3 className="text-2xl mb-3 text-gray-800">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-purple-300/50 transition-colors pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 shadow-2xl">
            <h3 className="text-3xl md:text-4xl text-white mb-4">
              Готові почати свій шлях до чіткого мовлення?
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Запишіться на безкоштовну консультацію вже сьогодні
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-white text-purple-600 rounded-full shadow-xl hover:shadow-2xl transition-shadow"
            >
              Записатися зараз
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
});

Benefits.displayName = 'Benefits';
