import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';

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

  const renderHome = () => (
    <div className="space-y-16">
      <section className="text-center py-20 px-4">
        <Badge className="mb-4 bg-secondary text-white">B2B Платформа для ВЭД</Badge>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-primary">
          Профессиональная биржа<br />внешнеэкономической деятельности
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          Комплексные решения для вашего бизнеса: таможенное оформление, логистика, 
          сертификация и правовое сопровождение международных сделок
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Button size="lg" className="bg-secondary hover:bg-secondary/90" onClick={() => setActiveSection('services')}>
            <Icon name="Briefcase" className="mr-2" size={20} />
            Наши услуги
          </Button>
          <Button size="lg" variant="outline" onClick={() => setActiveSection('cabinet')}>
            <Icon name="User" className="mr-2" size={20} />
            Войти в кабинет
          </Button>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-6 px-4">
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
              <Icon name="TrendingUp" className="text-secondary" size={24} />
            </div>
            <CardTitle>1500+ компаний</CardTitle>
            <CardDescription>Доверяют нам свои грузы</CardDescription>
          </CardHeader>
        </Card>
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
              <Icon name="Globe" className="text-accent" size={24} />
            </div>
            <CardTitle>50+ стран</CardTitle>
            <CardDescription>География наших операций</CardDescription>
          </CardHeader>
        </Card>
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Icon name="Award" className="text-primary" size={24} />
            </div>
            <CardTitle>15 лет опыта</CardTitle>
            <CardDescription>На рынке ВЭД услуг</CardDescription>
          </CardHeader>
        </Card>
      </section>
    </div>
  );

  const renderServices = () => (
    <div className="space-y-8 px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 text-primary">Наши услуги</h2>
        <p className="text-xl text-muted-foreground">
          Полный спектр решений для внешнеэкономической деятельности
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <Card key={index} className="hover:shadow-lg transition-all hover:scale-105">
            <CardHeader>
              <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-secondary to-primary flex items-center justify-center mb-4">
                <Icon name={service.icon} className="text-white" size={28} />
              </div>
              <CardTitle className="text-xl">{service.title}</CardTitle>
              <CardDescription className="text-base">{service.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full">
                Подробнее
                <Icon name="ArrowRight" className="ml-2" size={16} />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderPricing = () => (
    <div className="space-y-8 px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 text-primary">Тарифные планы</h2>
        <p className="text-xl text-muted-foreground">
          Выберите оптимальный план для вашего бизнеса
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {pricingPlans.map((plan, index) => (
          <Card 
            key={index} 
            className={`relative hover:shadow-xl transition-all ${
              plan.popular ? 'border-secondary border-2 scale-105' : ''
            }`}
          >
            {plan.popular && (
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-accent">
                Популярный
              </Badge>
            )}
            <CardHeader>
              <CardTitle className="text-2xl">{plan.name}</CardTitle>
              <div className="mt-4">
                <span className="text-4xl font-bold text-primary">{plan.price}</span>
                <span className="text-muted-foreground ml-2">₽/{plan.period}</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Icon name="CheckCircle2" className="text-secondary mt-0.5 flex-shrink-0" size={18} />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button 
                className={`w-full ${plan.popular ? 'bg-secondary hover:bg-secondary/90' : ''}`}
                variant={plan.popular ? 'default' : 'outline'}
              >
                Выбрать план
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderCabinet = () => {
    if (!isLoggedIn) {
      return (
        <div className="flex items-center justify-center min-h-[500px] px-4">
          <Card className="w-full max-w-md">
            <CardHeader>
              <CardTitle className="text-2xl">Вход в личный кабинет</CardTitle>
              <CardDescription>Введите ваши данные для доступа</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <input 
                  type="email" 
                  placeholder="your@email.com" 
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Пароль</label>
                <input 
                  type="password" 
                  placeholder="••••••••" 
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>
              <Button className="w-full bg-secondary hover:bg-secondary/90" onClick={() => setIsLoggedIn(true)}>
                Войти
              </Button>
              <p className="text-sm text-center text-muted-foreground">
                Нет аккаунта? <a href="#" className="text-secondary hover:underline">Зарегистрироваться</a>
              </p>
            </CardContent>
          </Card>
        </div>
      );
    }

    return (
      <div className="space-y-6 px-4">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-bold text-primary">Личный кабинет</h2>
            <p className="text-muted-foreground">Добро пожаловать, ООО "Импорт-Экспорт"</p>
          </div>
          <Button variant="outline" onClick={() => setIsLoggedIn(false)}>
            <Icon name="LogOut" className="mr-2" size={18} />
            Выйти
          </Button>
        </div>

        <div className="grid md:grid-cols-4 gap-4">
          {cabinetStats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                    <p className="text-3xl font-bold mt-1">{stat.value}</p>
                  </div>
                  <Icon name={stat.icon} className={stat.color} size={32} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Tabs defaultValue="orders" className="w-full">
          <TabsList className="grid w-full max-w-md grid-cols-3">
            <TabsTrigger value="orders">Заявки</TabsTrigger>
            <TabsTrigger value="documents">Документы</TabsTrigger>
            <TabsTrigger value="settings">Настройки</TabsTrigger>
          </TabsList>

          <TabsContent value="orders" className="space-y-4 mt-6">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold">Последние заявки</h3>
              <Button className="bg-accent hover:bg-accent/90">
                <Icon name="Plus" className="mr-2" size={18} />
                Создать заявку
              </Button>
            </div>

            <div className="space-y-3">
              {recentOrders.map((order, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h4 className="font-semibold text-lg">{order.id}</h4>
                          <Badge variant={order.status === 'Завершено' ? 'default' : 'secondary'}>
                            {order.status}
                          </Badge>
                        </div>
                        <div className="flex gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Icon name="Calendar" size={14} />
                            {order.date}
                          </span>
                          <span className="font-medium text-primary">{order.amount}</span>
                        </div>
                        <div className="mt-3">
                          <div className="flex items-center justify-between text-xs mb-1">
                            <span>Прогресс</span>
                            <span>{order.progress}%</span>
                          </div>
                          <Progress value={order.progress} className="h-2" />
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        Подробнее
                        <Icon name="ArrowRight" className="ml-2" size={14} />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="documents" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Мои документы</CardTitle>
                <CardDescription>Все документы по вашим заявкам</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12 text-muted-foreground">
                  <Icon name="FileText" size={48} className="mx-auto mb-4 opacity-50" />
                  <p>Документы появятся здесь после обработки заявок</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Настройки аккаунта</CardTitle>
                <CardDescription>Управление профилем и уведомлениями</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Название компании</label>
                    <input 
                      type="text" 
                      defaultValue="ООО \"Импорт-Экспорт\"" 
                      className="w-full px-3 py-2 border rounded-md"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">ИНН</label>
                    <input 
                      type="text" 
                      defaultValue="7701234567" 
                      className="w-full px-3 py-2 border rounded-md"
                    />
                  </div>
                  <Button className="bg-secondary hover:bg-secondary/90">
                    Сохранить изменения
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    );
  };

  const renderAbout = () => (
    <div className="space-y-8 px-4 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 text-primary">О компании</h2>
        <p className="text-xl text-muted-foreground">
          Надёжный партнёр в сфере внешнеэкономической деятельности
        </p>
      </div>
      <Card>
        <CardContent className="pt-6 space-y-6">
          <p className="text-lg leading-relaxed">
            Наша компания специализируется на комплексном обслуживании предприятий, 
            осуществляющих внешнеэкономическую деятельность. За 15 лет работы мы помогли 
            более 1500 компаниям успешно организовать международные поставки.
          </p>
          <div className="grid md:grid-cols-2 gap-6 pt-4">
            <div className="space-y-3">
              <h3 className="font-semibold text-lg flex items-center gap-2">
                <Icon name="Target" className="text-secondary" />
                Наша миссия
              </h3>
              <p className="text-muted-foreground">
                Делать международную торговлю простой и доступной для российского бизнеса
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold text-lg flex items-center gap-2">
                <Icon name="Eye" className="text-secondary" />
                Наши ценности
              </h3>
              <p className="text-muted-foreground">
                Профессионализм, прозрачность, ответственность и индивидуальный подход
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderContacts = () => (
    <div className="space-y-8 px-4 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 text-primary">Контакты</h2>
        <p className="text-xl text-muted-foreground">
          Свяжитесь с нами удобным способом
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Контактная информация</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-3">
              <Icon name="MapPin" className="text-secondary mt-1" size={20} />
              <div>
                <p className="font-medium">Адрес</p>
                <p className="text-sm text-muted-foreground">
                  г. Москва, ул. Таможенная, д. 15
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Icon name="Phone" className="text-secondary mt-1" size={20} />
              <div>
                <p className="font-medium">Телефон</p>
                <p className="text-sm text-muted-foreground">
                  +7 (495) 123-45-67
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Icon name="Mail" className="text-secondary mt-1" size={20} />
              <div>
                <p className="font-medium">Email</p>
                <p className="text-sm text-muted-foreground">
                  info@ved-exchange.ru
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Icon name="Clock" className="text-secondary mt-1" size={20} />
              <div>
                <p className="font-medium">Режим работы</p>
                <p className="text-sm text-muted-foreground">
                  Пн-Пт: 9:00 - 18:00
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Напишите нам</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Ваше имя</label>
              <input 
                type="text" 
                placeholder="Иван Иванов" 
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Email</label>
              <input 
                type="email" 
                placeholder="your@email.com" 
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Сообщение</label>
              <textarea 
                placeholder="Ваше сообщение..." 
                rows={4}
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
            <Button className="w-full bg-secondary hover:bg-secondary/90">
              Отправить
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-secondary to-primary flex items-center justify-center">
              <Icon name="Globe" className="text-white" size={24} />
            </div>
            <span className="text-xl font-bold text-primary">ВЭД Биржа</span>
          </div>

          <nav className="hidden md:flex gap-1">
            {navigation.map((item) => (
              <Button
                key={item.id}
                variant={activeSection === item.id ? 'default' : 'ghost'}
                className={activeSection === item.id ? 'bg-secondary hover:bg-secondary/90' : ''}
                onClick={() => setActiveSection(item.id)}
              >
                <Icon name={item.icon} className="mr-2" size={18} />
                {item.label}
              </Button>
            ))}
          </nav>

          <div className="md:hidden">
            <Button variant="ghost" size="icon">
              <Icon name="Menu" size={24} />
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto py-8">
        {activeSection === 'home' && renderHome()}
        {activeSection === 'services' && renderServices()}
        {activeSection === 'pricing' && renderPricing()}
        {activeSection === 'cabinet' && renderCabinet()}
        {activeSection === 'about' && renderAbout()}
        {activeSection === 'contacts' && renderContacts()}
      </main>

      <footer className="border-t mt-16 py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-secondary to-primary flex items-center justify-center">
                  <Icon name="Globe" className="text-white" size={18} />
                </div>
                <span className="font-bold text-primary">ВЭД Биржа</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Профессиональная платформа для внешнеэкономической деятельности
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Услуги</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Таможенное оформление</li>
                <li>Логистика</li>
                <li>Сертификация</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Компания</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>О нас</li>
                <li>Тарифы</li>
                <li>Контакты</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Поддержка</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>+7 (495) 123-45-67</li>
                <li>info@ved-exchange.ru</li>
                <li>Пн-Пт: 9:00 - 18:00</li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-6 text-center text-sm text-muted-foreground">
            © 2024 ВЭД Биржа. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Index;
