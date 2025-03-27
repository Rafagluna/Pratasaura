import React from 'react';
import { Navigation } from '../components/Navigation';
import { Star, Award, Users, Shield } from 'lucide-react';

function AboutPage() {
  const team = [
    {
      name: 'Maria Silva',
      role: 'Fundadora & CEO',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400',
    },
    {
      name: 'João Santos',
      role: 'Designer de Joias',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400',
    },
    {
      name: 'Ana Oliveira',
      role: 'Gerente de Vendas',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400',
    },
  ];

  const values = [
    {
      icon: <Star className="w-8 h-8 text-[#60AACD]" />,
      title: 'Excelência',
      description: 'Comprometimento com a qualidade em cada detalhe das nossas joias.',
    },
    {
      icon: <Award className="w-8 h-8 text-[#60AACD]" />,
      title: 'Autenticidade',
      description: 'Cada peça é única e reflete nossa paixão pela arte da joalheria.',
    },
    {
      icon: <Users className="w-8 h-8 text-[#60AACD]" />,
      title: 'Atendimento',
      description: 'Experiência personalizada para cada cliente.',
    },
    {
      icon: <Shield className="w-8 h-8 text-[#60AACD]" />,
      title: 'Confiança',
      description: 'Transparência e segurança em todas as transações.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative bg-[url('https://images.unsplash.com/photo-1584302179602-e4c3d3fd629d?auto=format&fit=crop&q=80&w=2070')] bg-cover bg-center h-[400px] flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Nossa História</h1>
            <p className="text-xl max-w-2xl mx-auto px-4">
              Desde 2025, criando momentos especiais através de joias únicas e atemporais
            </p>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Sobre a Joias Elegance</h2>
              <p className="text-gray-600 mb-4">
                A Joias Elegance nasceu da paixão por criar peças únicas que contam histórias e eternizam momentos. Nossa jornada começou em 2025, com o compromisso de oferecer joias excepcionais que combinam design contemporâneo com técnicas tradicionais de joalheria.
              </p>
              <p className="text-gray-600 mb-4">
                Cada peça é cuidadosamente selecionada e criada com os mais altos padrões de qualidade, utilizando materiais nobres e pedras preciosas certificadas. Nossa missão é fazer parte dos momentos mais especiais da vida de nossos clientes, oferecendo joias que serão passadas de geração em geração.
              </p>
              <p className="text-gray-600">
                Com uma equipe apaixonada e especializada, buscamos constantemente inovação e excelência em cada detalhe, desde o atendimento até o produto final.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=500"
                alt="Nossa História"
                className="rounded-lg w-full h-64 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&q=80&w=500"
                alt="Nossa Loja"
                className="rounded-lg w-full h-64 object-cover mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Nossos Valores</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Nossa Equipe</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-48 h-48 rounded-full mx-auto object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#60AACD] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">1000+</div>
              <div className="text-lg">Clientes Satisfeitos</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-lg">Designs Exclusivos</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-lg">Prêmios Recebidos</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5+</div>
              <div className="text-lg">Anos de Experiência</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;