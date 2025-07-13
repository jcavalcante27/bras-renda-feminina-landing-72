import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto max-w-4xl px-4 py-12">
        <Button 
          onClick={() => window.history.back()} 
          variant="outline" 
          className="mb-8 flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar
        </Button>
        
        <h1 className="text-4xl font-bold text-brown-900 mb-8">Política de Privacidade</h1>
        
        <div className="prose prose-lg max-w-none text-brown-700 space-y-6">
          <p className="text-sm text-brown-600">Última atualização: {new Date().toLocaleDateString('pt-BR')}</p>
          
          <section>
            <h2 className="text-2xl font-semibold text-brown-900 mb-4">1. Informações Gerais</h2>
            <p>
              Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos suas informações pessoais 
              quando você utiliza nossos serviços, incluindo nosso site e cursos online.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-brown-900 mb-4">2. Informações que Coletamos</h2>
            <p>Coletamos as seguintes informações:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Nome completo</li>
              <li>Endereço de e-mail</li>
              <li>Número de telefone</li>
              <li>Informações de pagamento (processadas por terceiros seguros)</li>
              <li>Dados de navegação e cookies</li>
              <li>Endereço IP e informações do dispositivo</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-brown-900 mb-4">3. Como Usamos suas Informações</h2>
            <p>Utilizamos suas informações para:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Processar e gerenciar suas compras</li>
              <li>Fornecer acesso aos cursos adquiridos</li>
              <li>Enviar comunicações importantes sobre seus pedidos</li>
              <li>Oferecer suporte ao cliente</li>
              <li>Melhorar nossos produtos e serviços</li>
              <li>Enviar e-mails promocionais (com seu consentimento)</li>
              <li>Cumprir obrigações legais</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-brown-900 mb-4">4. Compartilhamento de Informações</h2>
            <p>
              Não vendemos suas informações pessoais. Podemos compartilhar suas informações apenas com:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Processadores de pagamento (para transações financeiras)</li>
              <li>Provedores de serviços de e-mail (para comunicações)</li>
              <li>Plataformas de hospedagem de cursos</li>
              <li>Autoridades legais (quando exigido por lei)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-brown-900 mb-4">5. Cookies e Tecnologias Similares</h2>
            <p>
              Utilizamos cookies para melhorar sua experiência, incluindo:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Cookies essenciais para funcionamento do site</li>
              <li>Cookies de análise (Google Analytics)</li>
              <li>Cookies de publicidade (Facebook Pixel)</li>
              <li>Cookies de preferências do usuário</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-brown-900 mb-4">6. Seus Direitos</h2>
            <p>Você tem direito a:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Acessar suas informações pessoais</li>
              <li>Corrigir dados incorretos</li>
              <li>Solicitar exclusão de seus dados</li>
              <li>Portabilidade de dados</li>
              <li>Retirar consentimento para marketing</li>
              <li>Apresentar reclamações às autoridades competentes</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-brown-900 mb-4">7. Segurança</h2>
            <p>
              Implementamos medidas de segurança técnicas e organizacionais para proteger suas informações, 
              incluindo criptografia SSL, armazenamento seguro e acesso restrito aos dados.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-brown-900 mb-4">8. Retenção de Dados</h2>
            <p>
              Mantemos suas informações pelo período necessário para cumprir as finalidades descritas nesta política, 
              respeitando os prazos legais aplicáveis.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-brown-900 mb-4">9. Alterações na Política</h2>
            <p>
              Podemos atualizar esta política periodicamente. Notificaremos sobre mudanças significativas 
              por e-mail ou através de aviso em nosso site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-brown-900 mb-4">10. Contato</h2>
            <p>
              Para questões sobre esta política de privacidade, entre em contato:
            </p>
            <ul className="list-none space-y-2">
              <li><strong>E-mail:</strong> contato@viradabraz.com</li>
              <li><strong>Telefone:</strong> (11) 98724-2874</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;