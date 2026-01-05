import { forwardRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Award, Heart, Users } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export const About = forwardRef<HTMLElement>((_, ref) => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);

  const stats = [
    { icon: Users, value: '500+', label: 'Задоволених клієнтів' },
    { icon: Award, value: '10+', label: 'Років досвіду' },
    { icon: Heart, value: '100%', label: 'Індивідуальний підхід' },
  ];

  return (
    <section ref={ref} className="py-20 px-4 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-purple-300/20 rounded-full filter blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-300/20 rounded-full filter blur-3xl" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 text-gray-800">Про мене</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            style={{ scale }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-400 rounded-3xl transform rotate-3" />
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1700168333952-3d44a3f427af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0aGVyYXBpc3QlMjBvZmZpY2V8ZW58MXx8fHwxNzY3NTQ4ODU0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Логопед"
              className="relative rounded-3xl shadow-2xl w-full h-[500px] object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-3xl text-gray-800">
              Олена Петренко
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Я сертифікований логопед з більш ніж 10-річним досвідом роботи. Моя місія - допомогти
              кожній дитині та дорослому розкрити свій мовленнєвий потенціал та знайти впевненість
              у спілкуванні.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Використовую сучасні методики та індивідуальний підхід до кожного клієнта. Працюю з
              широким спектром мовленнєвих порушень: від затримки мовленнєвого розвитку до
              корекції звуковимови у дорослих.
            </p>

            <div className="grid grid-cols-3 gap-4 pt-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="text-center"
                >
                  <div className="flex justify-center mb-2">
                    <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full">
                      <stat.icon className="text-white" size={24} />
                    </div>
                  </div>
                  <div className="text-2xl text-purple-600">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

About.displayName = 'About';
