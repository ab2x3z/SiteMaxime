import React, { FormEvent, useState } from 'react';
import { Phone, Mail, Clock, CheckCircle2, Building2, Home, Wrench, Star, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';

function App() {
  const { t, i18n } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'fr' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="relative h-[600px]">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80"
            alt="Construction site"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <nav className="relative z-10 flex justify-between items-center px-6 py-4">
          <div className="text-white text-2xl font-bold">Elite Contractors</div>
          <div className="flex gap-6 text-white items-center">
            <a href="#services" className="hover:text-yellow-400 transition-colors">{t('nav.services')}</a>
            <a href="#about" className="hover:text-yellow-400 transition-colors">{t('nav.about')}</a>
            <a href="#contact" className="hover:text-yellow-400 transition-colors">{t('nav.contact')}</a>
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 hover:text-yellow-400 transition-colors"
            >
              <Globe className="w-4 h-4" />
              {t(`language.${i18n.language === 'en' ? 'fr' : 'en'}`)}
            </button>
          </div>
        </nav>

        <div className="relative z-10 flex flex-col items-center justify-center h-[500px] text-center px-4">
          <h1 className="text-5xl font-bold text-white mb-6">{t('hero.title')}</h1>
          <p className="text-xl text-white mb-8 max-w-2xl">{t('hero.subtitle')}</p>
          <a 
            href="#contact" 
            className="bg-yellow-500 text-black px-8 py-3 rounded-md font-semibold hover:bg-yellow-400 transition-colors"
          >
            {t('hero.cta')}
          </a>
        </div>
      </header>

      {/* Services Section */}
      <section id="services" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">{t('services.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Building2, key: 'commercial' },
              { icon: Home, key: 'residential' },
              { icon: Wrench, key: 'maintenance' }
            ].map((service, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                <service.icon className="w-12 h-12 mx-auto mb-4 text-yellow-500" aria-hidden="true" />
                <h3 className="text-xl font-semibold mb-2">{t(`services.${service.key}.title`)}</h3>
                <p className="text-gray-600">{t(`services.${service.key}.desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="about" className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">{t('whyChooseUs.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: CheckCircle2, key: 'licensed' },
              { icon: Star, key: 'experience' },
              { icon: Clock, key: 'onTime' },
              { icon: Building2, key: 'quality' }
            ].map((feature, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <feature.icon className="w-10 h-10 text-yellow-500 mb-4" aria-hidden="true" />
                <h3 className="text-lg font-semibold">{t(`whyChooseUs.${feature.key}`)}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">{t('contact.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">{t('contact.getInTouch')}</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-yellow-500 mr-3" aria-hidden="true" />
                  <span>(555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-yellow-500 mr-3" aria-hidden="true" />
                  <span>info@elitecontractors.com</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-yellow-500 mr-3" aria-hidden="true" />
                  <span>Mon-Fri: 8:00 AM - 6:00 PM</span>
                </div>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="sr-only">{t('contact.form.name')}</label>
                <input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder={t('contact.form.name')}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">{t('contact.form.email')}</label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder={t('contact.form.email')}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">{t('contact.form.message')}</label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={t('contact.form.message')}
                  required
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-yellow-500 text-black px-6 py-3 rounded-md font-semibold hover:bg-yellow-400 transition-colors"
              >
                {t('contact.form.submit')}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p>© {new Date().getFullYear()} Elite Contractors. {t('footer.rights')}</p>
        </div>
      </footer>
    </div>
  );
}

export default App;