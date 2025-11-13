import Icon from '@/components/ui/icon';

export function Footer() {
  return (
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
  );
}
