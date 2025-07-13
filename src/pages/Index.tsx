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
      <section className="relative bg-gradient-to-br from-brown-50 via-white to-brown-100 pt-20 pb-32 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight text-brown-900">
                Comece a gerar renda no Brás com o que você 
                <span className="gradient-text"> já tem</span>
              </h1>
              <p className="text-xl text-brown-700 leading-relaxed">
                Descubra como transformar imagem, presença e conteúdo em uma fonte de renda real — 
                sem precisar de sorte ou milhares de seguidores
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={scrollToCTA} className="cta-button text-lg px-8 py-6 text-white bg-brown-800 hover:bg-brown-900">
                  Quero gerar minha renda no Brás
                </Button>
              </div>
              <div className="flex items-center gap-4 text-sm text-brown-600">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 bg-brown-300 rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-brown-400 rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-brown-500 rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-brown-600 rounded-full border-2 border-white"></div>
                </div>
                <span className="text-brown-800">Inspirando diariamente mulheres a acreditarem no seu potencial</span>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="aspect-square bg-gradient-to-br from-brown-200 to-brown-300 rounded-2xl p-8 shadow-2xl">
                <img alt="Fernanda Nobre - Instrutora" className="w-full h-full rounded-xl object-contain" src="/lovable-uploads/9f06cf9a-bdf9-45a8-a35a-229934bfbbb0.jpg" />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-brown-700" />
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brown-900 mb-6">
              O que o curso <span className="gradient-text">entrega</span>
            </h2>
            <p className="text-xl text-brown-700 max-w-3xl mx-auto">
              Transformação prática e real na sua relação com trabalho, imagem e renda
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                <CardContent className="p-8 text-center">
                  <div className="mx-auto mb-4 w-16 h-16 bg-brown-100 rounded-full flex items-center justify-center">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-brown-900 mb-3">{benefit.title}</h3>
                  <p className="text-brown-600">{benefit.description}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Para quem é */}
      <section className="py-20 section-gradient">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brown-900 mb-6">
              Para quem é <span className="gradient-text">este curso</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {["Mulheres que querem gerar renda extra ou principal", "Quem busca independência financeira real", "Mulheres sem experiência em trabalhar com imagem", "Quem não tem milhares de seguidores nas redes", "Mulheres que querem trabalhar com flexibilidade", "Quem busca uma transformação genuína de vida"].map((item, index) => <div key={index} className="flex items-start gap-4">
                  <Check className="w-6 h-6 text-brown-700 mt-1 flex-shrink-0" />
                  <p className="text-lg text-brown-800">{item}</p>
                </div>)}
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-brown-900 mb-6">
                "Se você se identifica com pelo menos 3 itens desta lista, este curso foi feito para você!"
              </h3>
              <p className="text-brown-600 mb-6">
                Não importa se você nunca trabalhou na área. O que importa é sua vontade de transformar sua vida.
              </p>
              <Button onClick={scrollToCTA} className="cta-button w-full">
                Sim, é para mim!
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Resultados esperados */}
      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brown-900 mb-6">
              O que você vai <span className="gradient-text">conquistar</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
          }].map((result, index) => <div key={index} className="text-center space-y-4">
                <div className="mx-auto w-20 h-20 bg-gradient-to-br from-brown-700 to-brown-800 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">{result.number}</span>
                </div>
                <h3 className="text-xl font-semibold text-brown-900">{result.title}</h3>
                <p className="text-brown-600">{result.description}</p>
              </div>)}
          </div>
        </div>
      </section>

      {/* Sobre a instrutora */}
      <section className="py-20 section-gradient">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-brown-900">
                Conheça a <span className="gradient-text">Fernanda Nobre</span>
              </h2>
              <p className="text-lg text-brown-700 leading-relaxed">
                Fernanda é uma empreendedora que transformou sua própria vida trabalhando no Brás. 
                Começou do zero, sem seguidores, sem equipamentos profissionais, apenas com vontade de mudar.
              </p>
              <p className="text-lg text-brown-700 leading-relaxed">
                Hoje, ela vive o que ensina: trabalha com flexibilidade, gera renda consistente e ajuda 
                outras mulheres a descobrirem seu potencial único.
              </p>
              <div className="space-y-4">
                {["Inspirando diariamente mulheres a acreditarem no seu potencial", "Especialista em presença e comunicação", "Mentora certificada em desenvolvimento pessoal"].map((achievement, index) => <div key={index} className="flex items-center gap-3">
                    <Star className="w-5 h-5 text-brown-700 fill-current" />
                    <span className="text-brown-800">{achievement}</span>
                  </div>)}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-brown-200 to-brown-300 rounded-2xl p-6 shadow-2xl">
                <img alt="Fernanda Nobre - Instrutora" className="w-full h-full rounded-xl object-cover" src="/lovable-uploads/80d6e1b1-c1fa-4e96-80cd-ecf692b6e70d.png" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Módulos do curso */}
      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brown-900 mb-6">
              O que você vai <span className="gradient-text">aprender</span>
            </h2>
            <p className="text-xl text-brown-700">
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
          }].map((module, index) => <AccordionItem key={index} value={`item-${index}`} className="bg-brown-50 rounded-lg px-6">
                <AccordionTrigger className="text-left text-lg font-semibold text-brown-900 hover:text-brown-700">
                  {module.title}
                </AccordionTrigger>
                <AccordionContent className="text-brown-700 pt-4">
                  {module.content}
                </AccordionContent>
              </AccordionItem>)}
          </Accordion>
        </div>
      </section>

      {/* Garantia */}
      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <div className="bg-gradient-to-br from-brown-50 to-brown-100 rounded-2xl p-12 border-2 border-brown-200">
            <Shield className="w-16 h-16 text-brown-700 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-brown-900 mb-6">
              Garantia <span className="gradient-text">Incondicional</span> de 7 dias
            </h2>
            <p className="text-lg text-brown-700 mb-6 max-w-2xl mx-auto">
              Experimente o curso por 7 dias. Se não ficar 100% satisfeita, devolvemos seu dinheiro 
              integralmente, sem perguntas e sem burocracias.
            </p>
            <p className="text-brown-800 font-semibold">
              Sua satisfação é nossa prioridade. Invista sem riscos!
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 section-gradient">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brown-900 mb-6">
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
          }].map((faq, index) => <AccordionItem key={index} value={`faq-${index}`} className="bg-white rounded-lg px-6">
                <AccordionTrigger className="text-left text-lg font-semibold text-brown-900 hover:text-brown-700">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-brown-700 pt-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>)}
          </Accordion>
        </div>
      </section>

      {/* CTA Final */}
      <section id="main-cta" className="py-20 bg-gradient-to-br from-brown-700 to-brown-800 text-white">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Sua transformação começa agora
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Não espere a sorte chegar. Crie suas próprias oportunidades no Brás.
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <div className="text-3xl md:text-4xl font-bold mb-2">12x de R$ 20,02</div>
            <div className="text-lg opacity-80 line-through mb-2">ou R$ 500 à vista</div>
            <div className="text-2xl font-semibold">R$ 197,00 à vista</div>
            <div className="text-sm opacity-80 mt-2">Oferta por tempo limitado</div>
          </div>
          <Button className="bg-white text-brown-800 hover:bg-brown-50 font-bold text-lg py-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 mb-6 px-[30px]">
            Começar minha transformação agora
          </Button>
          <div className="flex items-center justify-center gap-4 text-sm opacity-80">
            <Shield className="w-4 h-4" />
            <span>Garantia de 7 dias</span>
            <span>•</span>
            <span>Acesso imediato</span>
            <span>•</span>
            <span>Suporte incluído</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brown-900 text-white py-12">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 gradient-text text-slate-50">
                Você Não Precisa de Sorte, Precisa do Brás
              </h3>
              <p className="text-brown-300">
                Transformando vidas através da educação e empoderamento feminino.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Links Úteis</h4>
              <ul className="space-y-2 text-brown-300">
                <li><a href="#" className="hover:text-brown-100 transition-colors">Política de Privacidade</a></li>
                <li><a href="#" className="hover:text-brown-100 transition-colors">Termos de Uso</a></li>
                <li><a href="#" className="hover:text-brown-100 transition-colors">Contato</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <p className="text-brown-300">
                nobre.fernandafreitas@gmail.com<br />
                <a href="https://wa.me/5511987242874" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-brown-300 hover:text-green-400 transition-colors mt-2">
                  <MessageCircle className="w-4 h-4" />
                  (11) 98724-2874
                </a>
              </p>
            </div>
          </div>
          <div className="border-t border-brown-700 mt-8 pt-8 text-center text-brown-300">
            <p>&copy; 2024 Fernanda Nobre. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>;
};
export default Index;