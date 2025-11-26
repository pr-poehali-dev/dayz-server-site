import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const features = [
    {
      icon: 'Users',
      title: 'Кооперативное выживание',
      description: 'Объединяйтесь с другими игроками для совместного выживания в мире, полном опасностей',
    },
    {
      icon: 'Skull',
      title: 'Орды зомби',
      description: 'Сражайтесь против бесконечных волн инфицированных и защищайте свою базу',
    },
    {
      icon: 'Shield',
      title: 'Укрепленные базы',
      description: 'Стройте и укрепляйте убежища, чтобы защититься от угроз',
    },
    {
      icon: 'Package',
      title: 'Система лута',
      description: 'Исследуйте мир и находите оружие, припасы и снаряжение для выживания',
    },
  ];

  const stats = [
    { label: 'Онлайн игроков', value: '247', icon: 'Users' },
    { label: 'Убито зомби', value: '156,892', icon: 'Skull' },
    { label: 'Активных баз', value: '89', icon: 'Home' },
  ];

  const rulesCategories = [
    {
      title: 'Общие правила',
      rules: [
        'Администрация может изменить правила в любое время',
        'Запрещено оскорбление админского состава и других игроков',
        'Запрещено использование читов и багов',
        'Запрещены мульти-аккаунты',
        'Запрещена реклама сторонних ресурсов',
        'Запрещены нечитаемые и оскорбительные ники',
        'Запрещены флуд, спам и мат в чатах'
      ]
    },
    {
      title: 'Основные правила игры',
      rules: [
        'Запрещены убийства и нападения на игроков (PvE сервер)',
        'Запрещен рейд баз и уничтожение имущества',
        'Запрещено воровство транспорта и имущества',
        'Запрещен угон ТС даже если оно открыто',
        'В ТЗ запрещен тараны, воровство лута и слив топлива',
        'Автомобили на ТЗ более часа - удаляются',
        'Запрещена "варка лута" для респавна предметов',
        'При агрессии можете дать отпор (с видео)'
      ]
    },
    {
      title: 'Правила строительства',
      rules: [
        'Регистрация базы обязательна в #Регистрация-базы',
        'Запрещена стройка в радиусе 1500м от Сейв-Зон',
        'Запрещена стройка в 800м от военок и 400м от городов',
        'Запрещена застройка важных объектов (заправки, колодцы)',
        'Запрещено преграждать дороги постройками',
        'Запрещена стройка ближе 300м от асфальтовых дорог'
      ]
    },
    {
      title: 'Донат правила',
      rules: [
        'Доната возврату не подлежит (возможен обмен)',
        'Восстановление не чаще 2 раз в день',
        'Донат действует на сезон',
        'Передача донатных вещей требует регистрации',
        'Продажа донатных вещей за реал запрещена'
      ]
    },
    {
      title: 'Наказания',
      rules: [
        'Мелкие нарушения - предупреждение',
        'Воровство ТС/вещей - вайп или перманентный бан',
        'Оскорбление администрации - перманентный бан',
        'Рейд базы - перманентный бан',
        'Убийство игрока - перманентный бан',
        '3 предупреждения = перманентный бан'
      ]
    }
  ];

  const shopItems = [
    { name: 'Стартовый набор', price: '100₽', description: 'Базовое снаряжение для новичков' },
    { name: 'VIP статус', price: '500₽', description: 'Привилегии и бонусы на месяц' },
    { name: 'Укрепленная база', price: '300₽', description: 'Готовая защищенная база' },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'home':
        return (
          <div className="space-y-12">
            <section className="text-center space-y-6 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold text-accent">
                ВЫЖИВИ ИЛИ УМРИ
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Погрузитесь в постапокалиптический мир DayZ, где каждое решение может стать последним.
                Объединяйтесь с друзьями, стройте убежища и сражайтесь против орд зомби.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-8">
                  <Icon name="Gamepad2" className="mr-2" size={20} />
                  ИГРАТЬ СЕЙЧАС
                </Button>
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 font-bold text-lg px-8">
                  <Icon name="Download" className="mr-2" size={20} />
                  СКАЧАТЬ МОДЫ
                </Button>
              </div>
            </section>

            <Separator className="bg-border/50" />

            <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <Card 
                  key={index} 
                  className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6 space-y-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon name={feature.icon as any} className="text-primary" size={24} />
                    </div>
                    <h3 className="text-xl font-bold">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </section>

            <section className="grid md:grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <Card 
                  key={index} 
                  className="bg-card/50 border-primary/30 backdrop-blur-sm"
                >
                  <CardContent className="p-6 text-center space-y-2">
                    <Icon name={stat.icon as any} className="mx-auto text-accent animate-pulse-slow" size={32} />
                    <p className="text-3xl font-bold text-accent">{stat.value}</p>
                    <p className="text-muted-foreground text-sm">{stat.label}</p>
                  </CardContent>
                </Card>
              ))}
            </section>

            <Separator className="bg-border/50" />

            <section className="grid md:grid-cols-2 gap-6">
              <Card className="bg-card border-border">
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-2xl font-bold flex items-center gap-2">
                    <Icon name="MapPin" className="text-primary" size={24} />
                    Карта сервера - Deer Isle
                  </h3>
                  <div className="aspect-video bg-muted/30 rounded-lg overflow-hidden">
                    <iframe
                      src="https://dayz.ginfo.gg/livemap/?deerisle"
                      className="w-full h-full border-0"
                      title="DeerIsle Map"
                      allowFullScreen
                    />
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Исследуйте огромный остров Deer Isle с уникальными локациями и секретными точками лута
                  </p>
                </CardContent>
              </Card>

              <div className="space-y-6">
                <Card className="bg-card border-border">
                  <CardContent className="p-6 space-y-4">
                    <h3 className="text-2xl font-bold flex items-center gap-2">
                      <Icon name="MessageSquare" className="text-primary" size={24} />
                      Discord сообщество
                    </h3>
                    <div className="space-y-3">
                      <p className="text-muted-foreground text-sm">Присоединяйся к нашему сообществу для общения и поиска союзников</p>
                      <Button 
                        className="w-full bg-[#5865F2] hover:bg-[#4752C4] text-white font-semibold"
                        onClick={() => window.open('https://discord.gg/rGK3kza6H2', '_blank')}
                      >
                        <Icon name="MessageSquare" className="mr-2" size={18} />
                        Присоединиться к Discord
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border">
                  <CardContent className="p-6 space-y-4">
                    <h3 className="text-2xl font-bold flex items-center gap-2">
                      <Icon name="Trophy" className="text-primary" size={24} />
                      Wargame - Голосование
                    </h3>
                    <div className="space-y-3">
                      <p className="text-muted-foreground text-sm">Проголосуй за сервер и получи бонусы!</p>
                      <Button 
                        className="w-full bg-secondary hover:bg-secondary/90"
                        onClick={() => window.open('https://wargm.ru/server/74476/votes', '_blank')}
                      >
                        <Icon name="ThumbsUp" className="mr-2" size={18} />
                        Голосовать на Wargame
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>
          </div>
        );

      case 'rules':
        return (
          <div className="max-w-5xl mx-auto space-y-6 animate-fade-in">
            <h2 className="text-4xl font-bold text-accent mb-6">ПРАВИЛА СЕРВЕРА</h2>
            
            <Card className="bg-destructive/10 border-destructive/30 mb-6">
              <CardContent className="p-6 flex items-start gap-4">
                <Icon name="AlertTriangle" className="text-destructive flex-shrink-0" size={24} />
                <div className="space-y-2">
                  <p className="text-foreground">
                    <span className="font-bold text-destructive">ВНИМАНИЕ:</span> Нарушение правил приведет к бану без предупреждения.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Администрация имеет право изменять правила без уведомления и рассматривает каждую ситуацию индивидуально.
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              {rulesCategories.map((category, categoryIndex) => (
                <Card key={categoryIndex} className="bg-card border-border">
                  <CardContent className="p-6 space-y-4">
                    <h3 className="text-2xl font-bold text-primary flex items-center gap-2">
                      <Icon name="Shield" className="text-primary" size={24} />
                      {category.title}
                    </h3>
                    <div className="space-y-2">
                      {category.rules.map((rule, ruleIndex) => (
                        <div 
                          key={ruleIndex} 
                          className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/20 transition-colors"
                        >
                          <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0 mt-2"></div>
                          <p className="text-foreground text-sm leading-relaxed">{rule}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-secondary/10 border-secondary/30">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Icon name="FileText" className="text-secondary" size={24} />
                  Дополнительные правила
                </h3>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <p><span className="font-semibold text-foreground">Правила музыки:</span> Запрещено включать музыку на трейде (машина, магнитофон, микрофон)</p>
                  <p><span className="font-semibold text-foreground">Правила данжей:</span> Обязательная запись в канале "Очередь данжи", нельзя занимать больше суток вперед</p>
                  <p><span className="font-semibold text-foreground">Правила KMUK:</span> Регистрация обязательна, время прохождения в пределах рестарта, повторное прохождение запрещено</p>
                  <p><span className="font-semibold text-foreground">Администрация:</span> Админы не читают ЛС - все вопросы через тикеты. Восстановление лута только с видео.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case 'shop':
        return (
          <div className="max-w-4xl mx-auto space-y-6 animate-fade-in">
            <h2 className="text-4xl font-bold text-accent mb-6">МАГАЗИН</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {shopItems.map((item, index) => (
                <Card 
                  key={index} 
                  className="bg-card border-border hover:border-primary transition-all duration-300"
                >
                  <CardContent className="p-6 space-y-4 text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-lg mx-auto flex items-center justify-center">
                      <Icon name="ShoppingCart" className="text-primary" size={32} />
                    </div>
                    <h3 className="text-xl font-bold">{item.name}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                    <div className="text-3xl font-bold text-accent">{item.price}</div>
                    <Button className="w-full bg-primary hover:bg-primary/90">
                      КУПИТЬ
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            <Card className="bg-secondary/20 border-secondary">
              <CardContent className="p-6 flex items-center gap-4">
                <Icon name="Info" className="text-secondary-foreground" size={24} />
                <p className="text-foreground">
                  Все покупки поступают на ваш игровой аккаунт в течение 5 минут после оплаты
                </p>
              </CardContent>
            </Card>
          </div>
        );

      case 'help':
        return (
          <div className="max-w-3xl mx-auto space-y-6 animate-fade-in">
            <h2 className="text-4xl font-bold text-accent mb-6">ПОМОЩЬ</h2>
            <Card className="bg-card border-border">
              <CardContent className="p-8 space-y-6">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold flex items-center gap-2">
                    <Icon name="Server" className="text-primary" size={24} />
                    Как подключиться?
                  </h3>
                  <ol className="list-decimal list-inside space-y-2 text-muted-foreground ml-4">
                    <li>Скачайте и установите DayZ</li>
                    <li>Установите необходимые моды через Steam Workshop</li>
                    <li>Запустите игру и найдите сервер в списке</li>
                    <li>Подключитесь и начинайте выживать!</li>
                  </ol>
                </div>

                <Separator className="bg-border/50" />

                <div className="space-y-4">
                  <h3 className="text-2xl font-bold flex items-center gap-2">
                    <Icon name="MessageCircle" className="text-primary" size={24} />
                    Связь с администрацией
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                      <Icon name="Send" className="text-accent" size={20} />
                      <span>Discord: dayz-server.gg</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                      <Icon name="Mail" className="text-accent" size={20} />
                      <span>Email: support@dayz-server.ru</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                      <Icon name="Globe" className="text-accent" size={20} />
                      <span>VK: vk.com/dayz_server</span>
                    </div>
                  </div>
                </div>

                <Separator className="bg-border/50" />

                <div className="space-y-4">
                  <h3 className="text-2xl font-bold flex items-center gap-2">
                    <Icon name="HelpCircle" className="text-primary" size={24} />
                    Частые вопросы
                  </h3>
                  <div className="space-y-3">
                    <details className="p-4 bg-muted/30 rounded-lg cursor-pointer">
                      <summary className="font-semibold">Какие моды нужны для игры?</summary>
                      <p className="mt-2 text-muted-foreground">Все необходимые моды доступны в Steam Workshop. Список модов обновляется автоматически при подключении.</p>
                    </details>
                    <details className="p-4 bg-muted/30 rounded-lg cursor-pointer">
                      <summary className="font-semibold">Как получить помощь в игре?</summary>
                      <p className="mt-2 text-muted-foreground">Используйте команду /help в чате или обратитесь к администраторам через Discord.</p>
                    </details>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div 
        className="relative h-[60vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://cdn.poehali.dev/projects/2b7b8636-2186-4ea8-9737-2196cfdba4e1/files/ea262d83-9d27-4b13-b8b6-c1f59e18a091.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background"></div>
        <div className="relative z-10 text-center space-y-6 px-4">
          <div className="animate-fade-in">
            <img 
              src="https://cdn.poehali.dev/files/bf7c7e64-919d-4a05-bf22-a20b4c2a27c6.jpg" 
              alt="CRIZIS ZONE"
              className="mx-auto max-w-[600px] w-full h-auto"
            />
          </div>
          <p className="text-xl md:text-2xl text-muted-foreground font-light animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Выживание против зомби в постапокалиптическом мире
          </p>
          <div className="flex gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center gap-2 bg-primary/20 px-4 py-2 rounded-lg backdrop-blur-sm">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold">247 ИГРОКОВ ОНЛАЙН</span>
            </div>
          </div>
        </div>
      </div>

      <nav className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center gap-2 py-4">
            {[
              { id: 'home', label: 'ГЛАВНАЯ', icon: 'Home' },
              { id: 'rules', label: 'ПРАВИЛА', icon: 'ScrollText' },
              { id: 'shop', label: 'МАГАЗИН', icon: 'ShoppingBag' },
              { id: 'help', label: 'ПОМОЩЬ', icon: 'LifeBuoy' },
            ].map((item) => (
              <Button
                key={item.id}
                variant={activeSection === item.id ? 'default' : 'ghost'}
                className={`font-semibold transition-all ${
                  activeSection === item.id
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
                onClick={() => setActiveSection(item.id)}
              >
                <Icon name={item.icon as any} className="mr-2" size={18} />
                {item.label}
              </Button>
            ))}
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-12">
        {renderContent()}
      </main>

      <footer className="bg-card border-t border-border mt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-accent">THE CRISIS ZONE</h3>
              <p className="text-muted-foreground text-sm">
                Лучший сервер для кооперативного выживания в зоне кризиса
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="font-bold">БЫСТРЫЕ ССЫЛКИ</h4>
              <div className="space-y-2 text-sm">
                <p className="text-muted-foreground hover:text-foreground cursor-pointer transition-colors">Discord</p>
                <p className="text-muted-foreground hover:text-foreground cursor-pointer transition-colors">Steam Workshop</p>
                <p className="text-muted-foreground hover:text-foreground cursor-pointer transition-colors">Форум</p>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="font-bold">ПОДДЕРЖКА</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>support@dayz-server.ru</p>
                <p>Discord: dayz-server.gg</p>
              </div>
            </div>
          </div>
          <Separator className="my-8 bg-border/50" />
          <div className="text-center text-muted-foreground text-sm">
            © 2024 The Crisis Zone. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;