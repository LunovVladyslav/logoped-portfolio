import { forwardRef, useState } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

export const Contact = forwardRef<HTMLElement>((_, ref) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock form submission
    alert('Дякуємо за звернення! Ми зв\'яжемося з вами найближчим часом.');
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Телефон',
      content: '+380 (67) 123-45-67',
      link: 'tel:+380671234567',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'olena.logoped@example.com',
      link: 'mailto:olena.logoped@example.com',
    },
    {
      icon: MapPin,
      title: 'Адреса',
      content: 'м. Київ, вул. Шевченка, 25',
      link: 'https://maps.google.com',
    },
    {
      icon: MessageCircle,
      title: 'Telegram',
      content: '@olena_logoped',
      link: 'https://t.me/olena_logoped',
    },
  ];

  return (
    <section ref={ref} className="py-20 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100 opacity-50" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 text-gray-800">Контакти</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full mb-6" />
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Зв'яжіться зі мною для консультації або запису на заняття
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {contactInfo.map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, x: 10 }}
                className="flex items-start gap-4 bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                    <item.icon className="text-white" size={24} />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg mb-1 text-gray-800">{item.title}</h4>
                  <p className="text-gray-600">{item.content}</p>
                </div>
              </motion.a>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-8 text-white mt-8"
            >
              <h3 className="text-2xl mb-4">Графік роботи</h3>
              <div className="space-y-2">
                <p>Понеділок - П'ятниця: 9:00 - 19:00</p>
                <p>Субота: 10:00 - 16:00</p>
                <p>Неділя: Вихідний</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl mb-6 text-gray-800">Записатися на консультацію</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-700 mb-2">Ім'я *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-purple-500 outline-none transition-colors"
                    placeholder="Введіть ваше ім'я"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">Телефон *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-purple-500 outline-none transition-colors"
                    placeholder="+380 (XX) XXX-XX-XX"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-purple-500 outline-none transition-colors"
                    placeholder="example@email.com"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">Повідомлення</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-purple-500 outline-none transition-colors resize-none"
                    placeholder="Розкажіть про ваш запит..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                >
                  Відправити заявку
                </motion.button>
              </div>

              <p className="text-sm text-gray-500 mt-4 text-center">
                * Обов'язкові поля для заповнення
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

Contact.displayName = 'Contact';
