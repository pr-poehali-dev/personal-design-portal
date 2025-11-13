import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface HomeSectionProps {
  setActiveSection: (section: string) => void;
  services: Array<{ icon: string; title: string; description: string }>;
  pricingPlans: Array<{ name: string; price: string; period: string; features: string[]; popular: boolean }>;
}

export function HomeSection({ setActiveSection, services, pricingPlans }: HomeSectionProps) {
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

  return {
    renderHome,
    renderServices,
    renderPricing,
    renderAbout,
    renderContacts
  };
}
