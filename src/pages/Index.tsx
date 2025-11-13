import { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { HomeSection } from '@/components/sections/HomeSection';
import { CabinetSection } from '@/components/sections/CabinetSection';

function Index() {
  const [activeSection, setActiveSection] = useState('home');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigation = [
    { id: 'home', label: 'Главная', icon: 'Home' },
    { id: 'services', label: 'Услуги', icon: 'Briefcase' },
    { id: 'pricing', label: 'Тарифы', icon: 'CreditCard' },
    { id: 'cabinet', label: 'Личный кабинет', icon: 'User' },
    { id: 'about', label: 'О компании', icon: 'Building2' },
    { id: 'contacts', label: 'Контакты', icon: 'Phone' },
  ];

  const services = [
    { 
      icon: 'FileText', 
      title: 'Таможенное оформление', 
      description: 'Полное сопровождение грузов через таможню' 
    },
    { 
      icon: 'Truck', 
      title: 'Логистика и доставка', 
      description: 'Международные перевозки любой сложности' 
    },
    { 
      icon: 'Shield', 
      title: 'Сертификация товаров', 
      description: 'Получение необходимых разрешительных документов' 
    },
    { 
      icon: 'FileCheck', 
      title: 'Консультации по ВЭД', 
      description: 'Экспертная поддержка в вопросах внешней торговли' 
    },
    { 
      icon: 'Scale', 
      title: 'Правовое сопровождение', 
      description: 'Юридическая помощь в международных сделках' 
    },
    { 
      icon: 'Database', 
      title: 'Декларирование', 
      description: 'Подготовка и подача таможенных деклараций' 
    },
  ];

  const pricingPlans = [
    {
      name: 'Базовый',
      price: '15 000',
      period: 'мес',
      features: [
        'До 10 заявок в месяц',
        'Базовое таможенное оформление',
        'Консультации по email',
        'Личный кабинет',
      ],
      popular: false,
    },
    {
      name: 'Профессиональный',
      price: '45 000',
      period: 'мес',
      features: [
        'До 50 заявок в месяц',
        'Полное таможенное оформление',
        'Приоритетная поддержка 24/7',
        'Персональный менеджер',
        'Скидки на логистику',
        'Юридические консультации',
      ],
      popular: true,
    },
    {
      name: 'Корпоративный',
      price: 'от 120 000',
      period: 'мес',
      features: [
        'Неограниченные заявки',
        'Индивидуальные условия',
        'Выделенная команда',
        'Интеграция с вашей системой',
        'Максимальные скидки',
        'VIP-поддержка',
      ],
      popular: false,
    },
  ];

  const cabinetStats = [
    { label: 'Активные заявки', value: '12', icon: 'FileText', color: 'text-secondary' },
    { label: 'Завершённые', value: '87', icon: 'CheckCircle2', color: 'text-green-600' },
    { label: 'В обработке', value: '5', icon: 'Clock', color: 'text-accent' },
    { label: 'Документы', value: '134', icon: 'Archive', color: 'text-primary' },
  ];

  const recentOrders = [
    { id: '№ 2024-1847', status: 'В обработке', date: '12.11.2024', amount: '245 000 ₽', progress: 65 },
    { id: '№ 2024-1846', status: 'Завершено', date: '10.11.2024', amount: '189 000 ₽', progress: 100 },
    { id: '№ 2024-1845', status: 'Ожидание', date: '08.11.2024', amount: '312 000 ₽', progress: 25 },
  ];

  const homeSectionRenderers = HomeSection({ setActiveSection, services, pricingPlans });

  return (
    <div className="min-h-screen bg-background">
      <Header 
        navigation={navigation} 
        activeSection={activeSection} 
        setActiveSection={setActiveSection} 
      />

      <main className="container mx-auto py-8">
        {activeSection === 'home' && homeSectionRenderers.renderHome()}
        {activeSection === 'services' && homeSectionRenderers.renderServices()}
        {activeSection === 'pricing' && homeSectionRenderers.renderPricing()}
        {activeSection === 'cabinet' && (
          <CabinetSection 
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn}
            cabinetStats={cabinetStats}
            recentOrders={recentOrders}
          />
        )}
        {activeSection === 'about' && homeSectionRenderers.renderAbout()}
        {activeSection === 'contacts' && homeSectionRenderers.renderContacts()}
      </main>

      <Footer />
    </div>
  );
}

export default Index;
