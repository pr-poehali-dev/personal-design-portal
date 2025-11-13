import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';

interface CabinetSectionProps {
  isLoggedIn: boolean;
  setIsLoggedIn: (value: boolean) => void;
  cabinetStats: Array<{ label: string; value: string; icon: string; color: string }>;
  recentOrders: Array<{ id: string; status: string; date: string; amount: string; progress: number }>;
}

export function CabinetSection({ isLoggedIn, setIsLoggedIn, cabinetStats, recentOrders }: CabinetSectionProps) {
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
                    defaultValue='ООО "Импорт-Экспорт"' 
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
}
