import React from 'react';
import { ChevronDown, Check, Star, Users, Award, Clock, Shield, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
const Index = () => {
  const scrollToCTA = () => {
    document.getElementById('main-cta')?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brown-50 via-white to-brown-100 pt-12 md:pt-20 pb-16 md:pb-32 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-6 md:space-y-8 animate-fade-in order-2 lg:order-1">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold leading-tight text-brown-900">
                Comece a gerar renda no Brás com o que você 
                <span className="gradient-text"> já tem</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-brown-700 leading-relaxed">
                Descubra como transformar imagem, presença e conteúdo em uma fonte de renda real — 
                sem precisar de sorte ou milhares de seguidores
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => window.open('https://pay.hub.la/zHXZ7qYJZTET5EpiuEpJ', '_blank')} 
                  className="cta-button text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 text-white bg-brown-800 hover:bg-brown-900 w-full sm:w-auto"
                >
                  Quero gerar minha renda no Brás
                </Button>
              </div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 text-sm text-brown-600">
                <div className="flex -space-x-2">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-brown-300 rounded-full border-2 border-white"></div>
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-brown-400 rounded-full border-2 border-white"></div>
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-brown-500 rounded-full border-2 border-white"></div>
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-brown-600 rounded-full border-2 border-white"></div>
                </div>
                <span className="text-brown-800 text-xs sm:text-sm">Inspirando diariamente mulheres a acreditarem no seu potencial</span>
              </div>
            </div>
            <div className="relative animate-scale-in order-1 lg:order-2">
              <div className="aspect-square bg-gradient-to-br from-brown-200 to-brown-300 rounded-2xl p-4 md:p-8 shadow-2xl">
                <img alt="Fernanda Nobre - Instrutora" className="w-full h-full rounded-xl object-contain" src="/lovable-uploads/9f06cf9a-bdf9-45a8-a35a-229934bfbbb0.jpg" />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-5 h-5 md:w-6 md:h-6 text-brown-700" />
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brown-900 mb-4 md:mb-6">
              O que o curso <span className="gradient-text">entrega</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-brown-700 max-w-3xl mx-auto">
              Transformação prática e real na sua relação com trabalho, imagem e renda
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[{
            icon: <Users className="w-8 h-8 text-brown-700" />,
            title: "Presença Magnética",
            description: "Desenvolva uma presença autêntica que atrai oportunidades naturalmente"
          }, {
            icon: <Award className="w-8 h-8 text-brown-700" />,
            title: "Estratégias Práticas",
            description: "Métodos testados para gerar renda trabalhando com imagem no Brás"
          }, {
            icon: <MessageCircle className="w-8 h-8 text-brown-700" />,
            title: "Comunicação Eficaz",
            description: "Aprenda a se comunicar de forma clara e persuasiva"
          }, {
            icon: <Clock className="w-8 h-8 text-brown-700" />,
            title: "Flexibilidade Total",
            description: "Trabalhe nos seus horários, do seu jeito, com sua personalidade"
          }, {
            icon: <Shield className="w-8 h-8 text-brown-700" />,
            title: "Confiança Genuína",
            description: "Desenvolva autoconfiança real para enfrentar qualquer desafio"
          }, {
            icon: <Star className="w-8 h-8 text-brown-700" />,
            title: "Resultados Reais",
            description: "Técnicas comprovadas que geram resultados desde o primeiro dia"
          }].map((benefit, index) => <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 md:p-8 text-center">
                  <div className="mx-auto mb-4 w-12 h-12 md:w-16 md:h-16 bg-brown-100 rounded-full flex items-center justify-center">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-brown-900 mb-3">{benefit.title}</h3>
                  <p className="text-sm md:text-base text-brown-600">{benefit.description}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Para quem é */}
      <section className="py-12 md:py-20 section-gradient">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brown-900 mb-4 md:mb-6">
              Para quem é <span className="gradient-text">este curso</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-4 md:space-y-6 order-2 md:order-1">
              {["Mulheres que querem gerar renda extra ou principal", "Quem busca independência financeira real", "Mulheres sem experiência em trabalhar com imagem", "Quem não tem milhares de seguidores nas redes", "Mulheres que querem trabalhar com flexibilidade", "Quem busca uma transformação genuína de vida"].map((item, index) => <div key={index} className="flex items-start gap-3 md:gap-4">
                  <Check className="w-5 h-5 md:w-6 md:h-6 text-brown-700 mt-1 flex-shrink-0" />
                  <p className="text-base md:text-lg text-brown-800">{item}</p>
                </div>)}
            </div>
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg order-1 md:order-2">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-brown-900 mb-4 md:mb-6">
                "Se você se identifica com pelo menos 3 itens desta lista, este curso foi feito para você!"
              </h3>
              <p className="text-sm md:text-base text-brown-600 mb-4 md:mb-6">
                Não importa se você nunca trabalhou na área. O que importa é sua vontade de transformar sua vida.
              </p>
              <Button 
                onClick={() => window.open('https://pay.hub.la/zHXZ7qYJZTET5EpiuEpJ', '_blank')} 
                className="cta-button w-full text-sm md:text-base py-3 md:py-4"
              >
                Sim, é para mim!
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Resultados esperados */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brown-900 mb-4 md:mb-6">
              O que você vai <span className="gradient-text">conquistar</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[{
            number: "01",
            title: "Renda Extra",
            description: "Gere sua primeira renda em até 30 dias"
          }, {
            number: "02",
            title: "Autoconfiança",
            description: "Desenvolva uma postura segura e autêntica"
          }, {
            number: "03",
            title: "Flexibilidade",
            description: "Trabalhe quando e onde quiser"
          }, {
            number: "04",
            title: "Independência",
            description: "Conquiste sua liberdade financeira"
          }].map((result, index) => <div key={index} className="text-center space-y-3 md:space-y-4">
                <div className="mx-auto w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-brown-700 to-brown-800 rounded-full flex items-center justify-center">
                  <span className="text-xl md:text-2xl font-bold text-white">{result.number}</span>
                </div>
                <h3 className="text-base md:text-xl font-semibold text-brown-900">{result.title}</h3>
                <p className="text-sm md:text-base text-brown-600">{result.description}</p>
              </div>)}
          </div>
        </div>
      </section>

      {/* Sobre a instrutora */}
      <section className="py-12 md:py-20 section-gradient">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-4 md:space-y-6 order-2 md:order-1">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brown-900">
                Conheça a <span className="gradient-text">Fernanda Nobre</span>
              </h2>
              <p className="text-base md:text-lg text-brown-700 leading-relaxed">
                Fernanda é uma empreendedora que transformou sua própria vida trabalhando no Brás. 
                Começou do zero, sem seguidores, sem equipamentos profissionais, apenas com vontade de mudar.
              </p>
              <p className="text-base md:text-lg text-brown-700 leading-relaxed">
                Hoje, ela vive o que ensina: trabalha com flexibilidade, gera renda consistente e ajuda 
                outras mulheres a descobrirem seu potencial único.
              </p>
              <div className="space-y-3 md:space-y-4">
                {["Inspirando diariamente mulheres a acreditarem no seu potencial", "Especialista em presença e comunicação", "Mentora certificada em desenvolvimento pessoal"].map((achievement, index) => <div key={index} className="flex items-center gap-3">
                    <Star className="w-4 h-4 md:w-5 md:h-5 text-brown-700 fill-current flex-shrink-0" />
                    <span className="text-sm md:text-base text-brown-800">{achievement}</span>
                  </div>)}
              </div>
            </div>
            <div className="relative order-1 md:order-2">
              <div className="aspect-square bg-gradient-to-br from-brown-200 to-brown-300 rounded-2xl p-4 md:p-6 shadow-2xl">
                <img alt="Fernanda Nobre - Instrutora" className="w-full h-full rounded-xl object-cover" src="/lovable-uploads/80d6e1b1-c1fa-4e96-80cd-ecf692b6e70d.png" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Módulos do curso */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brown-900 mb-4 md:mb-6">
              O que você vai <span className="gradient-text">aprender</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-brown-700">
              Conteúdo estruturado para sua transformação completa
            </p>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {[{
            title: "Módulo 1: Mindset da Abundância",
            content: "Desenvolva a mentalidade certa para o sucesso. Quebre crenças limitantes e construa uma base sólida para sua jornada."
          }, {
            title: "Módulo 2: Presença Magnética",
            content: "Aprenda a desenvolver uma presença autêntica e marcante que atrai oportunidades naturalmente."
          }, {
            title: "Módulo 3: Estratégias do Brás",
            content: "Técnicas práticas e comprovadas para trabalhar no Brás, mesmo sendo iniciante na área."
          }, {
            title: "Módulo 4: Comunicação Persuasiva",
            content: "Domine a arte da comunicação eficaz para conectar-se com seu público-alvo."
          }, {
            title: "Módulo 5: Construindo sua Marca Pessoal",
            content: "Crie uma identidade única e autêntica que te diferencia no mercado."
          }, {
            title: "Módulo 6: Gerando Renda Consistente",
            content: "Estratégias práticas para monetizar suas habilidades e gerar renda recorrente."
          }].map((module, index) => <AccordionItem key={index} value={`item-${index}`} className="bg-brown-50 rounded-lg px-4 md:px-6">
                <AccordionTrigger className="text-left text-base md:text-lg font-semibold text-brown-900 hover:text-brown-700">
                  {module.title}
                </AccordionTrigger>
                <AccordionContent className="text-sm md:text-base text-brown-700 pt-4">
                  {module.content}
                </AccordionContent>
              </AccordionItem>)}
          </Accordion>
        </div>
      </section>

      {/* Garantia */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <div className="bg-gradient-to-br from-brown-50 to-brown-100 rounded-2xl p-6 md:p-12 border-2 border-brown-200">
            <Shield className="w-12 h-12 md:w-16 md:h-16 text-brown-700 mx-auto mb-4 md:mb-6" />
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-brown-900 mb-4 md:mb-6">
              Garantia <span className="gradient-text">Incondicional</span> de 7 dias
            </h2>
            <p className="text-base md:text-lg text-brown-700 mb-4 md:mb-6 max-w-2xl mx-auto">
              Experimente o curso por 7 dias. Se não ficar 100% satisfeita, devolvemos seu dinheiro 
              integralmente, sem perguntas e sem burocracias.
            </p>
            <p className="text-sm md:text-base text-brown-800 font-semibold">
              Sua satisfação é nossa prioridade. Invista sem riscos!
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-20 section-gradient">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brown-900 mb-4 md:mb-6">
              Perguntas <span className="gradient-text">frequentes</span>
            </h2>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {[{
            question: "Esse curso serve para quem nunca trabalhou no Brás?",
            answer: "Sim! Ele foi criado especialmente para quem está começando ou quer começar do zero. Você vai entender como funciona o mercado, como se apresentar, conquistar os primeiros trabalhos e transformar sua imagem em renda."
          }, {
            question: "Preciso ter muitos seguidores para conseguir presença ou trabalho?",
            answer: "Não! O curso ensina como se posicionar presencialmente nas lojas, com postura e atitude — mesmo sem seguidores ou presença online. O foco é viver do Brás na prática."
          }, {
            question: "O curso ensina como conseguir clientes?",
            answer: "Sim. Você terá acesso a mensagens prontas, estratégias e orientações práticas para fechar presença, fotos e conteúdos com lojistas do Brás e região."
          }, {
            question: "Preciso ser magra ou ter corpo padrão para conseguir trabalho?",
            answer: "De jeito nenhum! O curso mostra como modelos Plus e Slim atuam juntas no Brás, com representatividade e profissionalismo. O foco é atitude e postura, não aparência."
          }, {
            question: "Quanto tempo dura o curso?",
            answer: "O conteúdo é direto, objetivo e prático. São 7 aulas principais + bônus, e você pode assistir no seu próprio ritmo, aplicando imediatamente o que aprender."
          }, {
            question: "Vou conseguir retorno rápido com esse curso?",
            answer: "Você vai aprender um caminho que dá resultado se aplicar com atitude e consistência. O curso mostra como gerar sua primeira renda com imagem no Brás, com exemplos reais."
          }, {
            question: "Vai ter certificado?",
            answer: "Sim. Ao final do curso, você receberá um certificado simbólico de conclusão, mas o maior reconhecimento será o seu resultado na prática."
          }, {
            question: "O curso tem garantia?",
            answer: "Sim! Você tem 7 dias de garantia. Se não se identificar com o conteúdo nesse período, poderá solicitar o reembolso total."
          }].map((faq, index) => <AccordionItem key={index} value={`faq-${index}`} className="bg-white rounded-lg px-4 md:px-6">
                <AccordionTrigger className="text-left text-base md:text-lg font-semibold text-brown-900 hover:text-brown-700">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm md:text-base text-brown-700 pt-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>)}
          </Accordion>
        </div>
      </section>

      {/* CTA Final */}
      <section id="main-cta" className="py-12 md:py-20 bg-gradient-to-br from-brown-700 to-brown-800 text-white">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            Sua transformação começa agora
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 opacity-90">
            Não espere a sorte chegar. Crie suas próprias oportunidades no Brás.
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 mb-6 md:mb-8">
            <div className="text-base md:text-lg opacity-80 line-through mb-2">De R$ 197</div>
            <div className="text-xl md:text-2xl font-semibold mb-2">Por R$ 49,90 à vista</div>
            <div className="text-xs md:text-sm opacity-80 mt-2">Oferta por tempo limitado</div>
          </div>
          <Button 
            onClick={() => window.open('https://pay.hub.la/zHXZ7qYJZTET5EpiuEpJ', '_blank')}
            className="bg-white text-brown-800 hover:bg-brown-50 font-bold text-base sm:text-lg py-4 md:py-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 mb-4 md:mb-6 px-6 md:px-8 w-full sm:w-auto"
          >
            Começar minha transformação agora
          </Button>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-xs sm:text-sm opacity-80">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              <span>Garantia de 7 dias</span>
            </div>
            <span className="hidden sm:inline">•</span>
            <span>Acesso imediato</span>
            <span className="hidden sm:inline">•</span>
            <span>Suporte incluído</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brown-900 text-white py-8 md:py-12">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div>
              <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 gradient-text text-slate-50">
                Você Não Precisa de Sorte, Precisa do Brás
              </h3>
              <p className="text-brown-300 text-sm md:text-base">
                Transformando vidas através da educação e empoderamento feminino.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3 md:mb-4 text-base md:text-lg">Links Úteis</h4>
              <ul className="space-y-2 text-brown-300">
                <li><a href="/politica-privacidade" className="hover:text-brown-100 transition-colors text-sm md:text-base">Política de Privacidade</a></li>
                <li><a href="/termos-uso" className="hover:text-brown-100 transition-colors text-sm md:text-base">Termos de Uso</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 md:mb-4 text-base md:text-lg">Contato</h4>
              <div className="text-brown-300 text-sm md:text-base">
                <p className="mb-2">contato@viradabraz.com</p>
                <a href="https://wa.me/5511987242874" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-brown-300 hover:text-green-400 transition-colors">
                  <MessageCircle className="w-4 h-4 flex-shrink-0" />
                  (11) 98724-2874
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-brown-700 mt-6 md:mt-8 pt-6 md:pt-8 text-center text-brown-300">
            <p className="text-xs md:text-sm">© 2025 Fernanda Nobre - CNPJ: 61.206.347/0001-80 - Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>;
};
export default Index;
