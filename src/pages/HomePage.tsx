import React, { useState } from 'react';
import { ShoppingCart, Heart, Search, Menu, X, Truck, RefreshCw, CreditCard, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Navigation } from '../components/Navigation';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { useCart } from '../context/CartContext';

const categories = [
  { id: 1, name: 'Anéis', image: '../../dist/assets/img/anel_produto.png' },
  { id: 2, name: 'Colares', image: '../../dist/assets/img/cordao_produto.png' },
  { id: 3, name: 'Brincos', image: '../../dist/assets/img/brincos_produto.png' },
  { id: 4, name: 'Bracelete', image: '../../dist/assets/img/bracelete_produto.png' },
];

const products = [
  { id: 1, name: 'Brinco', price: 'R$ 2.999', image: '../../dist/assets/img/brinco_mais_comprado.png' },
  { id: 2, name: 'Anel', price: 'R$ 1.499', image: '../../dist/assets/img/modelo_anel.png'},
  { id: 3, name: 'Cordão', price: 'R$ 899', image: '../../dist/assets/img/cordao_produto.png' },
  { id: 4, name: 'Brinco', price: 'R$ 3.999', image: '../../dist/assets/img/brincos_produto.png' },
];

const gallery = {
  featured: [
    'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=800'
  ],
  grid: [
    'https://images.unsplash.com/photo-1605797840891-5e1c17c125cc?auto=format&fit=crop&q=80&w=400',
    'https://images.unsplash.com/photo-1598560917505-59a3ad559071?auto=format&fit=crop&q=80&w=400',
    'https://images.unsplash.com/photo-1603561596112-0a132b757442?auto=format&fit=crop&q=80&w=400',
    'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&q=80&w=400',
    'https://images.unsplash.com/photo-1600721391776-b5cd0e0048f9?auto=format&fit=crop&q=80&w=400',
    'https://images.unsplash.com/photo-1601821765780-754fa98637c1?auto=format&fit=crop&q=80&w=400'
  ]
};

const peopleWearing = [
  {
    image: 'https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?auto=format&fit=crop&q=80&w=800',
    caption: 'Elegância em cada momento'
  },
  {
    image: '../../dist/assets/img/usando_joia.jpg',
    caption: 'Estilo que brilha'
  },
  {
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=800',
    caption: 'Beleza autêntica'
  },
  {
    image: 'https://images.unsplash.com/photo-1550614000-4895a10e1bfd?auto=format&fit=crop&q=80&w=800',
    caption: 'Momentos especiais'
  }
];

const benefits = [
  {
    icon: <Truck className="w-12 h-12 mb-4" />,
    title: "RECEBA EM CASA",
    description: "Enviamos para todo Brasil"
  },
  {
    icon: <RefreshCw className="w-12 h-12 mb-4" />,
    title: "TROCA E DEVOLUÇÃO",
    description: "7 dias após o recebimento"
  },
  {
    icon: <CreditCard className="w-12 h-12 mb-4" />,
    title: "PARCELE EM ATÉ",
    description: "12x Com cartões de crédito"
  },
  {
    icon: <Lock className="w-12 h-12 mb-4" />,
    title: "SITE 100% SEGURO",
    description: "Seus dados estão protegidos"
  }
];

function HomePage() {
  const { addToCart } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative bg-[url('https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=2070')] bg-cover bg-center h-[600px]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div className="text-white">
              <h1 className="text-5xl font-bold mb-4">Descubra a Beleza das Joias</h1>
              <p className="text-xl mb-8">Peças exclusivas para momentos únicos</p>
              <Link to="/products" className="bg-[#60AACD] text-white px-8 py-3 rounded-full hover:bg-[#4d8ba8] transition duration-300">
                Explorar Coleção
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                {benefit.icon}
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Nossas Categorias</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category) => (
              <Link to="/products" key={category.id} className="relative group overflow-hidden rounded-lg shadow-lg">
                <img src={category.image} alt={category.name} className="w-full h-64 object-cover transition duration-300 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <h3 className="text-white text-2xl font-semibold">{category.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Brilliant moments collection</h2>
            <p className="text-gray-600 mb-6">Brilliant design and unparalleled craftsmanship.</p>
            <Link to="/products" className="text-[#60AACD] hover:text-[#4d8ba8] transition duration-300">
              View collection
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            Featured Images
            <div className="grid gap-8">
              {gallery.featured.map((image, index) => (
                <div key={index} className="relative overflow-hidden rounded-lg">
                  <img 
                    src={image} 
                    alt={`Featured collection ${index + 1}`} 
                    className="w-full h-[300px] object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
            Grid Images
            <div className="grid grid-cols-2 gap-8">
              {gallery.grid.map((image, index) => (
                <div key={index} className="relative overflow-hidden rounded-lg">
                  <img 
                    src={image} 
                    alt={`Gallery ${index + 1}`} 
                    className="w-full h-[200px] object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* Gallery */}
      {/* <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Coleção Momentos Brilhantes</h2>
            <p className="text-gray-600 mb-6">Design brilhante e acabamento incomparável.</p>
            <Link to="/products" className="text-[#60AACD] hover:text-[#4d8ba8] transition duration-300">
              Ver coleção
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...gallery.featured, ...gallery.grid].map((image, index) => (
              <div key={index} className="relative overflow-hidden rounded-lg">
                <img 
                  src={image} 
                  alt={`Imagem coleção ${index + 1}`} 
                  className="w-full h-[250px] object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section> */}
       {/* Gallery */}
       <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Coleção Momentos Brilhantes</h2>
            <p className="text-gray-600 mb-6">Design brilhante e acabamento incomparável.</p>
            <Link
              to="/products"
              className="mt-3 w-full bg-[#60AACD] text-white py-2 px-4 rounded hover:bg-[#4d8ba8] transition duration-300 text-center"
            >
              Ver coleção
            </Link>
          </div>
          {/* <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="lg:col-span-1 lg:row-span-3 md:mr-6 mb-6 md:mb-0">
            <img 
                src="https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?auto=format&fit=crop&q=80&w=800" 
                alt="Joia em modelo 1" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="grid grid-cols-1 gap-6">
              <img 
                src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=800" 
                alt="Alianças" 
                className="w-full h-60 object-cover rounded-lg"
              />
              <img 
                src="https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&q=80&w=800" 
                alt="Brincos" 
                className="w-full h-60 object-cover rounded-lg"
              />
            </div>
            <img 
                src="https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?auto=format&fit=crop&q=80&w=800" 
                alt="Joia em modelo 1" 
                className="w-full h-full object-cover rounded-lg"
              />
          </div> */}
          <div className="grid grid-cols-1 lg:grid-cols-3 items-stretch">
            {/* Imagem grande à esquerda */}
            <div className="lg:row-span-2 md:mr-6 mb-6 md:mb-0">
              <img 
                src="../../dist/assets/img/modelo_brinco.png" 
                alt="Joia modelo esquerda" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            {/* Duas imagens no centro */}
            <div className="flex flex-col gap-6">
              <img 
                src="../../dist/assets/img/modelo_bracelete.png" 
                alt="Alianças" 
                className="w-full h-full object-cover rounded-lg"
              />
              <img 
                src="../../dist/assets/img/modelo_cordao.png" 
                alt="Brincos" 
                className="w-full h-full object-cover rounded-lg"
              />
              {/* <img 
                src="../../dist/assets/img/modelo_anel.png" 
                alt="Brincos" 
                className="w-full h-full object-cover rounded-lg"
              /> */}
            </div>

            {/* Imagem grande à direita */}
            <div className="lg:row-span-2 md:ml-6 mb-6 md:mb-0">
              <img 
                src="../../dist/assets/img/modelo_brinco_2.png" 
                alt="Joia modelo direita" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Produtos em Destaque</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div key={product.id} className="group">
                <Link to={`/product/${product.id}`} className="block">
                  <div className="relative overflow-hidden rounded-lg">
                    <img src={product.image} alt={product.name} className="w-full h-64 object-cover transition duration-300 group-hover:scale-110" />
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Heart className="w-6 h-6 text-white cursor-pointer" />
                    </div>
                  </div>
                  <div className="mt-4">
                    <h3 className="text-lg font-semibold">{product.name}</h3>
                    <p className="text-[#60AACD] font-bold mt-2">{product.price}</p>
                  </div>
                </Link>
                <button 
                  onClick={() => addToCart(product)}
                  className="mt-3 w-full bg-[#60AACD] text-white py-2 rounded hover:bg-[#4d8ba8] transition duration-300"
                >
                  Adicionar ao Carrinho
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* People Wearing Section */}
      {/* <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Inspire-se</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {peopleWearing.map((item, index) => (
              <div key={index} className="relative group overflow-hidden rounded-lg">
                <img 
                  src={item.image} 
                  alt={item.caption}
                  className="w-full h-96 object-cover transition duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6">
                  <p className="text-white text-lg font-medium">{item.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Pratasaura</h3>
              <p className="text-gray-400">Sua joalheria de confiança desde 2025</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-gray-400 hover:text-white">Sobre Nós</Link></li>
                <li><Link to="/products" className="text-gray-400 hover:text-white">Produtos</Link></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-white">Contato</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contato</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Rua das Joias, 123</li>
                <li>São Paulo - SP</li>
                <li>Tel: (11) 1234-5678</li>
                <li>Email: contato@pratasaura.com</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Redes Sociais</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">Instagram</a>
                <a href="#" className="text-gray-400 hover:text-white">Facebook</a>
                <a href="#" className="text-gray-400 hover:text-white">Pinterest</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Pratasaura. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;