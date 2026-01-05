import { forwardRef, useState } from 'react';
import { motion } from 'motion/react';
import { BookOpen, ArrowRight, Calendar, Users } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
  category: string;
  readTime: string;
}

export const Blog = forwardRef<HTMLElement>((_, ref) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: '5 важливих етапів розвитку мовлення у дітей',
      excerpt: 'Дізнайтеся, які етапи розвитку мовлення є ключовими для вашої дитини та як правильно їх підтримувати.',
      image: 'https://images.unsplash.com/photo-1760267973986-5370a55550f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZCUyMGRldmVsb3BtZW50JTIwbGVhcm5pbmd8ZW58MXx8fHwxNzY3NTk3MDkxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      date: '15 грудня 2024',
      author: 'Олена Петренко',
      category: 'розвиток',
      readTime: '5 хв'
    },
    {
      id: 2,
      title: 'Коли потрібно звертатися до логопеда?',
      excerpt: 'Ознаки, які вказують на необхідність консультації з логопедом. Раннє виявлення проблем - ключ до успіху.',
      image: 'https://images.unsplash.com/photo-1766867257943-0665537fb2dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGVlY2glMjB0aGVyYXB5JTIwZWR1Y2F0aW9ufGVufDF8fHx8MTc2NzYzNDk4OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      date: '10 грудня 2024',
      author: 'Олена Петренко',
      category: 'поради',
      readTime: '7 хв'
    },
    {
      id: 3,
      title: 'Домашні вправи для покращення дикції',
      excerpt: 'Прості та ефективні вправи, які можна виконувати вдома для розвитку чіткості мовлення.',
      image: 'https://images.unsplash.com/photo-1565489030990-e211075fe11c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3cml0aW5nJTIwYmxvZyUyMGFydGljbGV8ZW58MXx8fHwxNzY3NjM0OTg5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      date: '5 грудня 2024',
      author: 'Олена Петренко',
      category: 'вправи',
      readTime: '10 хв'
    },
    {
      id: 4,
      title: 'Артикуляційна гімнастика: з чого почати',
      excerpt: 'Покрокова інструкція для батьків: як правильно виконувати артикуляційну гімнастику з дитиною.',
      image: 'https://images.unsplash.com/photo-1647621129185-cc09bc212ff1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZCUyMGxlYXJuaW5nJTIwaGFwcHl8ZW58MXx8fHwxNzY3NjM0NjQyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      date: '1 грудня 2024',
      author: 'Олена Петренко',
      category: 'вправи',
      readTime: '8 хв'
    },
    {
      id: 5,
      title: 'Як підготувати дитину до першого відвідування логопеда',
      excerpt: 'Корисні поради, які допоможуть дитині комфортно почуватися на першому занятті.',
      image: 'https://images.unsplash.com/photo-1628435509114-969a718d64e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGNoaWxkcmVuJTIwcGxheWluZ3xlbnwxfHx8fDE3Njc1NzMzNTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      date: '28 листопада 2024',
      author: 'Олена Петренко',
      category: 'поради',
      readTime: '6 хв'
    },
    {
      id: 6,
      title: 'Розвиток фонематичного слуху у дошкільнят',
      excerpt: 'Чому фонематичний слух важливий для навчання читанню та як його розвивати.',
      image: 'https://images.unsplash.com/photo-1549737221-bef65e2604a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZCUyMHJlYWRpbmclMjBib29rfGVufDF8fHx8MTc2NzYzNDc2NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      date: '20 листопада 2024',
      author: 'Олена Петренко',
      category: 'розвиток',
      readTime: '9 хв'
    },
  ];

  const categories = [
    { id: 'all', name: 'Всі статті' },
    { id: 'розвиток', name: 'Розвиток' },
    { id: 'поради', name: 'Поради' },
    { id: 'вправи', name: 'Вправи' },
  ];

  const filteredPosts = selectedCategory === 'all'
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <section ref={ref} className="py-20 px-4 relative bg-white">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <BookOpen size={40} className="text-purple-600" />
            <h2 className="text-4xl md:text-5xl text-gray-800">Блог</h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full mb-6" />
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Корисні статті про розвиток мовлення, поради та вправи для батьків
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full transition-all ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <motion.div
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <ImageWithFallback
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  {/* Meta Info */}
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users size={16} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl mb-3 text-gray-800 group-hover:text-purple-600 transition-colors">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-600 mb-4 flex-1">
                    {post.excerpt}
                  </p>

                  {/* Read More Button */}
                  <motion.button
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-2 text-purple-600 group-hover:text-pink-600 transition-colors"
                  >
                    <span>Читати далі</span>
                    <ArrowRight size={20} />
                  </motion.button>
                </div>
              </motion.div>
            </motion.article>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl p-12">
            <h3 className="text-3xl md:text-4xl mb-4 text-gray-800">
              Хочете дізнатися більше?
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Підпишіться на нашу розсилку та отримуйте корисні статті та поради
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Ваш email"
                className="flex-1 px-6 py-4 rounded-full border-2 border-purple-200 focus:border-purple-500 outline-none transition-colors"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full shadow-lg hover:shadow-xl transition-shadow whitespace-nowrap"
              >
                Підписатися
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
});

Blog.displayName = 'Blog';
