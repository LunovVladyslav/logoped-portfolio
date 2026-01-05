import { forwardRef, useState } from 'react';
import { motion } from 'motion/react';
import { DayPicker } from 'react-day-picker';
import { Calendar, Clock, CheckCircle } from 'lucide-react';
import 'react-day-picker/dist/style.css';

export const Booking = forwardRef<HTMLElement>((_, ref) => {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [selectedService, setSelectedService] = useState<string>('');
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [isBooked, setIsBooked] = useState(false);

  const services = [
    { id: 'development', name: 'Розвиток мовлення', duration: '45 хв', price: '500 грн' },
    { id: 'correction', name: 'Корекція звуковимови', duration: '60 хв', price: '600 грн' },
    { id: 'massage', name: 'Логопедичний масаж', duration: '30 хв', price: '400 грн' },
    { id: 'adult', name: 'Робота з дорослими', duration: '60 хв', price: '700 грн' },
  ];

  const timeSlots = [
    '09:00', '10:00', '11:00', '12:00', '14:00', '15:00', '16:00', '17:00', '18:00'
  ];

  // Disable past dates and sundays
  const disabledDays = [
    { dayOfWeek: [0] }, // Sunday
    { before: new Date() }
  ];

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedDate && selectedTime && selectedService && clientName && clientPhone) {
      setIsBooked(true);
      setTimeout(() => {
        setIsBooked(false);
        setSelectedDate(undefined);
        setSelectedTime('');
        setSelectedService('');
        setClientName('');
        setClientPhone('');
      }, 3000);
    }
  };

  return (
    <section ref={ref} className="py-20 px-4 relative overflow-hidden bg-gradient-to-br from-white via-purple-50 to-blue-50">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-purple-300/20 rounded-full filter blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-300/20 rounded-full filter blur-3xl" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 text-gray-800">Бронювання</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full mb-6" />
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Оберіть зручний час та послугу для вашого візиту
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Services Selection */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-8 shadow-xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <Calendar className="text-white" size={24} />
              </div>
              <h3 className="text-2xl text-gray-800">Оберіть послугу</h3>
            </div>

            <div className="space-y-3">
              {services.map((service) => (
                <motion.button
                  key={service.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedService(service.id)}
                  className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                    selectedService === service.id
                      ? 'border-purple-500 bg-purple-50'
                      : 'border-gray-200 hover:border-purple-300'
                  }`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-gray-800">{service.name}</h4>
                    {selectedService === service.id && (
                      <CheckCircle size={20} className="text-purple-500" />
                    )}
                  </div>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>{service.duration}</span>
                    <span>{service.price}</span>
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Date & Time Selection */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 shadow-xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                <Clock className="text-white" size={24} />
              </div>
              <h3 className="text-2xl text-gray-800">Дата та час</h3>
            </div>

            {/* Calendar */}
            <div className="mb-6 flex justify-center">
              <DayPicker
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                disabled={disabledDays}
                className="border-0"
                modifiersClassNames={{
                  selected: '!bg-purple-500 !text-white rounded-lg',
                  today: 'text-purple-600',
                }}
              />
            </div>

            {/* Time Slots */}
            {selectedDate && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="space-y-3"
              >
                <p className="text-sm text-gray-600 mb-3">Доступний час:</p>
                <div className="grid grid-cols-3 gap-2">
                  {timeSlots.map((time) => (
                    <motion.button
                      key={time}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedTime(time)}
                      className={`py-2 px-3 rounded-lg text-sm transition-all ${
                        selectedTime === time
                          ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white'
                          : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                      }`}
                    >
                      {time}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}
          </motion.div>

          {/* Booking Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-2xl p-8 shadow-xl"
          >
            <h3 className="text-2xl mb-6 text-gray-800">Ваші дані</h3>

            {isBooked ? (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle size={40} className="text-green-600" />
                </div>
                <h4 className="text-2xl mb-2 text-gray-800">Успішно заброньовано!</h4>
                <p className="text-gray-600">Ми зв'яжемося з вами найближчим часом</p>
              </motion.div>
            ) : (
              <form onSubmit={handleBooking} className="space-y-4">
                <div>
                  <label className="block text-gray-700 mb-2">Ім'я *</label>
                  <input
                    type="text"
                    required
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-purple-500 outline-none transition-colors"
                    placeholder="Введіть ваше ім'я"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">Телефон *</label>
                  <input
                    type="tel"
                    required
                    value={clientPhone}
                    onChange={(e) => setClientPhone(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-purple-500 outline-none transition-colors"
                    placeholder="+380 (XX) XXX-XX-XX"
                  />
                </div>

                {/* Booking Summary */}
                {(selectedService || selectedDate || selectedTime) && (
                  <div className="bg-purple-50 rounded-xl p-4 space-y-2">
                    <p className="text-sm text-gray-600">Ваше бронювання:</p>
                    {selectedService && (
                      <p className="text-sm">
                        <span className="text-gray-600">Послуга:</span>{' '}
                        <span className="text-gray-800">
                          {services.find(s => s.id === selectedService)?.name}
                        </span>
                      </p>
                    )}
                    {selectedDate && (
                      <p className="text-sm">
                        <span className="text-gray-600">Дата:</span>{' '}
                        <span className="text-gray-800">
                          {selectedDate.toLocaleDateString('uk-UA')}
                        </span>
                      </p>
                    )}
                    {selectedTime && (
                      <p className="text-sm">
                        <span className="text-gray-600">Час:</span>{' '}
                        <span className="text-gray-800">{selectedTime}</span>
                      </p>
                    )}
                  </div>
                )}

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={!selectedDate || !selectedTime || !selectedService}
                  className={`w-full py-4 rounded-xl shadow-lg transition-all ${
                    selectedDate && selectedTime && selectedService
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-xl'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  Підтвердити бронювання
                </motion.button>

                <p className="text-xs text-gray-500 text-center">
                  Після бронювання ми зв'яжемося з вами для підтвердження
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
});

Booking.displayName = 'Booking';