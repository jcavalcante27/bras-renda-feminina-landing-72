import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TermsOfUse = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto max-w-4xl px-4 py-8 md:py-12">
        <Button 
          onClick={() => window.history.back()} 
          variant="outline" 
          className="mb-6 md:mb-8 flex items-center gap-2 text-sm md:text-base"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar
        </Button>
        
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brown-900 mb-6 md:mb-8">Termos de Uso</h1>
        
        <div className="prose prose-sm md:prose-lg max-w-none text-brown-700 space-y-4 md:space-y-6">
          <p className="text-sm text-brown-600">Última atualização: {new Date().toLocaleDateString('pt-BR')}</p>
          
          <section>
            <h2 className="text-2xl font-semibold text-brown-900 mb-4">1. Aceitação dos Termos</h2>
            <p>
              Ao acessar e usar nossos serviços, você concorda em cumprir estes Termos de Uso. 
              Se você não concorda com qualquer parte destes termos, não deve usar nossos serviços.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-brown-900 mb-4">2. Descrição dos Serviços</h2>
            <p>
              Oferecemos cursos online de capacitação profissional, especialmente focados em 
              trabalho no Brás, desenvolvimento pessoal e geração de renda. Nossos serviços incluem:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Cursos em vídeo</li>
              <li>Materiais complementares</li>
              <li>Suporte ao aluno</li>
              <li>Certificados de conclusão</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-brown-900 mb-4">3. Cadastro e Responsabilidades do Usuário</h2>
            <p>Ao se cadastrar, você concorda em:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Fornecer informações verdadeiras e atualizadas</li>
              <li>Manter a confidencialidade de sua conta</li>
              <li>Usar os serviços apenas para fins legais</li>
              <li>Não compartilhar seu acesso com terceiros</li>
              <li>Não reproduzir ou distribuir o conteúdo sem autorização</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-brown-900 mb-4">4. Pagamentos e Reembolsos</h2>
            <h3 className="text-xl font-medium text-brown-800 mb-2">4.1 Pagamentos</h3>
            <p>
              Os pagamentos devem ser efetuados através dos métodos disponibilizados na plataforma. 
              Todos os preços estão em reais brasileiros e incluem impostos aplicáveis.
            </p>
            <h3 className="text-xl font-medium text-brown-800 mb-2 mt-4">4.2 Política de Reembolso</h3>
            <p>
              Oferecemos garantia de 7 dias a partir da data de compra. Para solicitar reembolso:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>O pedido deve ser feito dentro do prazo de garantia</li>
              <li>Entre em contato através dos canais oficiais</li>
              <li>O reembolso será processado em até 5 dias úteis</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-brown-900 mb-4">5. Propriedade Intelectual</h2>
            <p>
              Todo o conteúdo disponibilizado (textos, vídeos, imagens, áudios) é de propriedade 
              exclusiva nossa ou de nossos parceiros. É proibido:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Copiar, reproduzir ou distribuir o conteúdo</li>
              <li>Fazer download não autorizado</li>
              <li>Usar o conteúdo para fins comerciais</li>
              <li>Criar obras derivadas</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-brown-900 mb-4">6. Limitação de Responsabilidade</h2>
            <p>
              Os cursos têm caráter educacional. Não garantimos resultados específicos, pois 
              o sucesso depende de fatores individuais como dedicação, aplicação dos conhecimentos 
              e circunstâncias pessoais.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-brown-900 mb-4">7. Disponibilidade do Serviço</h2>
            <p>
              Nos esforçamos para manter os serviços disponíveis 24/7, mas podem ocorrer 
              interrupções para manutenção ou por fatores externos. Não nos responsabilizamos 
              por eventuais indisponibilidades temporárias.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-brown-900 mb-4">8. Modificações dos Termos</h2>
            <p>
              Reservamos o direito de modificar estes termos a qualquer momento. 
              Mudanças significativas serão comunicadas por e-mail ou através do site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-brown-900 mb-4">9. Rescisão</h2>
            <p>
              Podemos suspender ou encerrar sua conta em caso de violação destes termos. 
              Você pode cancelar sua conta a qualquer momento, sujeito às políticas de reembolso.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-brown-900 mb-4">10. Lei Aplicável</h2>
            <p>
              Estes termos são regidos pelas leis brasileiras. Qualquer disputa será 
              resolvida no foro da comarca de São Paulo/SP.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-brown-900 mb-4">11. Contato</h2>
            <p>
              Para questões sobre estes termos, entre em contato:
            </p>
            <ul className="list-none space-y-2">
              <li><strong>E-mail:</strong> contato@viradabraz.com</li>
              <li><strong>Telefone:</strong> (11) 98724-2874</li>
              <li><strong>CNPJ:</strong> 61.206.347/0001-80</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfUse;