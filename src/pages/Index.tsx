import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeCase, setActiveCase] = useState(0);

  const technologies = [
    { name: 'React', level: 95, color: 'cyber-cyan' },
    { name: 'TypeScript', level: 90, color: 'cyber-blue' },
    { name: 'Node.js', level: 88, color: 'cyber-cyan' },
    { name: 'Next.js', level: 92, color: 'cyber-blue' },
    { name: 'Python', level: 85, color: 'cyber-cyan' },
  ];

  const cases = [
    {
      title: 'FinTech платформа',
      description: 'Разработка комплексной финансовой платформы',
      tech: ['React', 'Node.js', 'PostgreSQL'],
      duration: '6 месяцев',
      team: '8 специалистов',
      result: 'Увеличение конверсии на 340%',
      process: [
        { phase: 'Анализ', duration: '2 недели', desc: 'Глубокое исследование рынка и пользователей' },
        { phase: 'Дизайн', duration: '3 недели', desc: 'UX/UI проектирование и прототипирование' },
        { phase: 'Разработка', duration: '16 недель', desc: 'Итеративная разработка с еженедельными релизами' },
        { phase: 'Тестирование', duration: '2 недели', desc: 'Комплексное тестирование и оптимизация' },
      ]
    },
    {
      title: 'E-commerce решение',
      description: 'Многофункциональный интернет-магазин',
      tech: ['Next.js', 'Stripe', 'MongoDB'],
      duration: '4 месяца',
      team: '6 специалистов',
      result: 'Рост продаж на 280%',
      process: [
        { phase: 'Планирование', duration: '1 неделя', desc: 'Определение архитектуры и стека технологий' },
        { phase: 'MVP', duration: '4 недели', desc: 'Создание минимального жизнеспособного продукта' },
        { phase: 'Развитие', duration: '10 недель', desc: 'Добавление функций и интеграций' },
        { phase: 'Запуск', duration: '1 неделя', desc: 'Деплой и настройка мониторинга' },
      ]
    },
  ];

  const services = [
    {
      icon: 'Code',
      title: 'Веб-разработка',
      desc: 'Современные веб-приложения на React, Next.js, Node.js'
    },
    {
      icon: 'Smartphone',
      title: 'Мобильные приложения',
      desc: 'Кроссплатформенные приложения React Native'
    },
    {
      icon: 'Palette',
      title: 'UI/UX Дизайн',
      desc: 'Современный дизайн с фокусом на пользователя'
    },
    {
      icon: 'Zap',
      title: 'Оптимизация',
      desc: 'Повышение производительности и SEO'
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-cyber-cyan to-cyber-blue rounded-lg flex items-center justify-center">
              <Icon name="Zap" size={20} className="text-white" />
            </div>
            <span className="text-xl font-bold text-primary">CyberStudio</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">Услуги</a>
            <a href="#cases" className="text-muted-foreground hover:text-primary transition-colors">Кейсы</a>
            <a href="#tech" className="text-muted-foreground hover:text-primary transition-colors">Технологии</a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Контакты</a>
          </nav>
          
          <Button className="bg-primary hover:bg-primary/90">
            Начать проект
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyber-dark/50 to-cyber-navy/30"></div>
        <img 
          src="/img/ffdd7937-7215-4ebd-9947-a293975a8661.jpg" 
          alt="Studio" 
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-6 border-primary text-primary">
              Студия будущего
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-cyber-cyan bg-clip-text text-transparent">
              Создаём цифровые
              <br />
              продукты будущего
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Технологичная студия разработки, где каждый проект — это симбиоз инноваций, 
              производительности и безупречного пользовательского опыта
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 px-8">
                <Icon name="Rocket" className="mr-2" size={20} />
                Запустить проект
              </Button>
              <Button size="lg" variant="outline" className="px-8">
                <Icon name="Play" className="mr-2" size={20} />
                Смотреть кейсы
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-card/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-primary text-primary">
              Наши услуги
            </Badge>
            <h2 className="text-4xl font-bold mb-6">Полный цикл разработки</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              От концепции до запуска — создаём продукты, которые меняют правила игры
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="border-border hover:border-primary/50 transition-colors group">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-cyber-cyan rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon name={service.icon} size={24} className="text-white" />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Cases Section */}
      <section id="cases" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-primary text-primary">
              Детальные кейсы
            </Badge>
            <h2 className="text-4xl font-bold mb-6">Процесс работы изнутри</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Подробный разбор наших проектов — от первой идеи до успешного результата
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Case Selector */}
              <div className="lg:w-1/3">
                <div className="space-y-4">
                  {cases.map((case_, index) => (
                    <Card 
                      key={index}
                      className={`cursor-pointer transition-all ${
                        activeCase === index 
                          ? 'border-primary bg-primary/5' 
                          : 'hover:border-primary/50'
                      }`}
                      onClick={() => setActiveCase(index)}
                    >
                      <CardHeader className="pb-4">
                        <CardTitle className="text-lg">{case_.title}</CardTitle>
                        <p className="text-sm text-muted-foreground">{case_.description}</p>
                        <div className="flex flex-wrap gap-1 mt-2">
                          {case_.tech.map((tech, techIndex) => (
                            <Badge key={techIndex} variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Case Details */}
              <div className="lg:w-2/3">
                <Card className="border-border">
                  <CardHeader>
                    <div className="flex flex-col lg:flex-row justify-between items-start gap-4">
                      <div>
                        <CardTitle className="text-2xl mb-2">{cases[activeCase].title}</CardTitle>
                        <p className="text-muted-foreground">{cases[activeCase].description}</p>
                      </div>
                      <Badge className="bg-primary text-primary-foreground">
                        {cases[activeCase].result}
                      </Badge>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div className="flex items-center gap-2">
                        <Icon name="Clock" size={16} className="text-primary" />
                        <span className="text-sm text-muted-foreground">Длительность:</span>
                        <span className="font-medium">{cases[activeCase].duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="Users" size={16} className="text-primary" />
                        <span className="text-sm text-muted-foreground">Команда:</span>
                        <span className="font-medium">{cases[activeCase].team}</span>
                      </div>
                    </div>

                    <h3 className="text-lg font-semibold mb-4">Процесс разработки</h3>
                    <div className="space-y-4">
                      {cases[activeCase].process.map((step, stepIndex) => (
                        <div key={stepIndex} className="flex gap-4 items-start">
                          <div className="w-8 h-8 bg-gradient-to-br from-primary to-cyber-cyan rounded-full flex items-center justify-center text-white text-sm font-medium">
                            {stepIndex + 1}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <h4 className="font-medium">{step.phase}</h4>
                              <Badge variant="outline" className="text-xs">
                                {step.duration}
                              </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground">{step.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section id="tech" className="py-20 bg-card/20 relative">
        <img 
          src="/img/103b8180-5562-4070-8905-d6ed367012df.jpg" 
          alt="Tech Background" 
          className="absolute inset-0 w-full h-full object-cover opacity-10"
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-primary text-primary">
              Технологии
            </Badge>
            <h2 className="text-4xl font-bold mb-6">Стек технологий</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Используем передовые технологии для создания масштабируемых решений
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {technologies.map((tech, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-24 text-right">
                    <span className="font-medium">{tech.name}</span>
                  </div>
                  <div className="flex-1 bg-muted rounded-full h-3 relative overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r from-primary to-cyber-cyan rounded-full transition-all duration-1000 ease-out`}
                      style={{ width: `${tech.level}%` }}
                    ></div>
                  </div>
                  <div className="w-12 text-left">
                    <span className="text-sm font-medium text-primary">{tech.level}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-primary text-primary">
              Как мы работаем
            </Badge>
            <h2 className="text-4xl font-bold mb-6">Процесс разработки</h2>
          </div>

          <Accordion type="single" collapsible className="max-w-4xl mx-auto">
            <AccordionItem value="research" className="border-border">
              <AccordionTrigger className="text-left">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm">1</div>
                  Исследование и анализ
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground pl-11">
                  Глубокое изучение вашего бизнеса, целевой аудитории и конкурентов. 
                  Определяем техническое задание и архитектуру решения.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="design" className="border-border">
              <AccordionTrigger className="text-left">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm">2</div>
                  UX/UI дизайн и прототипирование
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground pl-11">
                  Создаём интерактивные прототипы и дизайн-макеты, 
                  тестируем пользовательские сценарии и дорабатываем интерфейс.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="development" className="border-border">
              <AccordionTrigger className="text-left">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm">3</div>
                  Разработка и тестирование
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground pl-11">
                  Итеративная разработка с еженедельными демо. 
                  Параллельное тестирование и контроль качества кода.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="launch" className="border-border">
              <AccordionTrigger className="text-left">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm">4</div>
                  Запуск и поддержка
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground pl-11">
                  Деплой, настройка мониторинга, обучение команды. 
                  Техническая поддержка и развитие продукта.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-cyber-dark/20 to-cyber-navy/10">
        <div className="container mx-auto px-4 text-center">
          <Badge variant="outline" className="mb-4 border-primary text-primary">
            Начнём проект
          </Badge>
          <h2 className="text-4xl font-bold mb-6">Готовы создать что-то невероятное?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Расскажите о своей идее, и мы превратим её в технологичное решение
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 px-8">
              <Icon name="MessageCircle" className="mr-2" size={20} />
              Обсудить проект
            </Button>
            <Button size="lg" variant="outline" className="px-8">
              <Icon name="Calendar" className="mr-2" size={20} />
              Запланировать встречу
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-cyber-cyan to-cyber-blue rounded-lg flex items-center justify-center">
                <Icon name="Zap" size={20} className="text-white" />
              </div>
              <span className="text-xl font-bold">CyberStudio</span>
            </div>
            
            <div className="flex items-center gap-6">
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Icon name="Github" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Icon name="Twitter" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Icon name="Linkedin" size={20} />
              </a>
            </div>
          </div>
          
          <div className="text-center mt-8 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground">
              © 2024 CyberStudio. Создаём цифровое будущее сегодня.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;