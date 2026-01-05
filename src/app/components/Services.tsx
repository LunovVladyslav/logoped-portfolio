import { forwardRef } from 'react';
import { motion } from 'motion/react';
import { Brain, MessageCircle, Users, Sparkles, Heart, Star } from 'lucide-react';

export const Services = forwardRef<HTMLElement>((_, ref) => {
  const services = [
    {
      icon: Brain,
      title: 'Розвиток мовлення',
      description: 'Комплексна програма для розвитку мовленнєвих навичок у дітей від 2 років',
      color: 'from-purple-500 to-blue-500',
    },
    {
      icon: MessageCircle,
      title: 'Корекція звуковимови',
      description: 'Постановка та автоматизація звуків, робота над чіткістю вимови',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Sparkles,
      title: 'Логопедичний масаж',
      description: 'Спеціалізований масаж для покращення артикуляційної моторики',
      color: 'from-cyan-500 to-teal-500',
    },
    {
      icon: Users,
      title: 'Робота з дорослими',
      description: 'Корекція мовлення після інсульту, травм або для покращення дикції',
      color: 'from-teal-500 to-green-500',
    },
    {
      icon: Heart,
      title: 'Робота з заїканням',
      description: 'Спеціальні методики для подолання заїкання у дітей та дорослих',
      color: 'from-green-500 to-pink-500',
    },
    {
      icon: Star,
      title: 'Підготовка до школи',
      description: 'Формування мовленнєвої готовності до навчання в школі',
      color: 'from-pink-500 to-purple-500',
    },
  ];

  return (
    <section ref={ref} className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-100/30 to-transparent" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 text-gray-800">Послуги</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full mb-6" />
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Індивідуальний підхід до кожного клієнта з використанням сучасних методик
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                {/* Gradient Border Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity`} />
                
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`w-16 h-16 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-lg`}
                >
                  <service.icon className="text-white" size={28} />
                </motion.div>

                <h3 className="text-2xl mb-4 text-gray-800">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>

                {/* Decorative Element */}
                <motion.div
                  className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${service.color} rounded-full`}
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});

Services.displayName = 'Services';
