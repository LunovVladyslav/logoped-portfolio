import { forwardRef } from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export const Gallery = forwardRef<HTMLElement>((_, ref) => {
  const images = [
    {
      src: 'https://images.unsplash.com/photo-1647621129185-cc09bc212ff1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZCUyMGxlYXJuaW5nJTIwaGFwcHl8ZW58MXx8fHwxNzY3NjM0NjQyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      alt: 'Заняття з дитиною',
    },
    {
      src: 'https://images.unsplash.com/photo-1628435509114-969a718d64e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGNoaWxkcmVuJTIwcGxheWluZ3xlbnwxfHx8fDE3Njc1NzMzNTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      alt: 'Діти на занятті',
    },
    {
      src: 'https://images.unsplash.com/photo-1549737221-bef65e2604a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZCUyMHJlYWRpbmclMjBib29rfGVufDF8fHx8MTc2NzYzNDc2NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      alt: 'Читання книги',
    },
    {
      src: 'https://images.unsplash.com/photo-1642594713287-a2c4decca145?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aGVyYXB5JTIwc2Vzc2lvbiUyMGNoaWxkfGVufDF8fHx8MTc2NzYzNDc2NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      alt: 'Терапевтична сесія',
    },
  ];

  return (
    <section ref={ref} className="py-20 px-4 bg-gradient-to-b from-white to-purple-50">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 text-gray-800">Галерея</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full mb-6" />
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Моменти з наших занять та радість прогресу
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="relative group overflow-hidden rounded-2xl shadow-lg"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <ImageWithFallback
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white text-xl">{image.alt}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20"
        >
          <h3 className="text-3xl text-center mb-12 text-gray-800">Відгуки батьків</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Марія К.',
                text: 'Олена - чудовий спеціаліст! Моя донька з радістю йде на заняття. За 3 місяці побачили значний прогрес.',
              },
              {
                name: 'Андрій П.',
                text: 'Професійний підхід та індивідуальна програма дали результат вже через місяць. Рекомендую!',
              },
              {
                name: 'Оксана В.',
                text: 'Дякую за терпіння та увагу до моєї дитини. Син нарешті почав говорити чітко і впевнено.',
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                <p className="text-purple-600">{testimonial.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
});

Gallery.displayName = 'Gallery';
