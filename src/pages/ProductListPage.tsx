import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Heart, Search, Menu, X, Filter } from 'lucide-react';
import { Navigation } from '../components/Navigation';
import { useCart } from '../context/CartContext';

const allProducts = [
  { id: 1, name: 'Anel de Diamante Solitário', price: 'R$ 2.999', category: 'Anéis', image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=400' },
  { id: 2, name: 'Colar de Pérolas', price: 'R$ 1.499', category: 'Colares', image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=400' },
  { id: 3, name: 'Brincos de Ouro', price: 'R$ 899', category: 'Brincos', image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&q=80&w=400' },
  { id: 4, name: 'Pulseira de Diamantes', price: 'R$ 3.999', category: 'Pulseiras', image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&q=80&w=400' },
  { id: 5, name: 'Anel de Ouro Rose', price: 'R$ 1.899', category: 'Anéis', image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=400' },
  { id: 6, name: 'Colar Choker', price: 'R$ 799', category: 'Colares', image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=400' },
  { id: 7, name: 'Brincos de Pérola', price: 'R$ 599', category: 'Brincos', image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&q=80&w=400' },
  { id: 8, name: 'Pulseira de Ouro', price: 'R$ 2.499', category: 'Pulseiras', image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&q=80&w=400' },
];

const categories = ['Todos', 'Anéis', 'Colares', 'Brincos', 'Pulseiras'];

function ProductListPage() {
  const { addToCart } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filteredProducts = allProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'Todos' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Search and Filter Section */}
      <div className="bg-gray-100 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="relative flex-1 max-w-xl">
              <input
                type="text"
                placeholder="Buscar produtos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 rounded-full border focus:outline-none focus:ring-2 focus:ring-[#60AACD]"
              />
              <Search className="absolute right-4 top-2.5 text-gray-400 w-5 h-5" />
            </div>
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="flex items-center gap-2 px-4 py-2 bg-[#60AACD] text-white rounded-full hover:bg-[#4d8ba8] transition duration-300 md:hidden"
            >
              <Filter className="w-5 h-5" />
              Filtrar
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filter Sidebar */}
          <div className={`md:w-64 ${isFilterOpen ? 'block' : 'hidden md:block'}`}>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4">Categorias</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`block w-full text-left px-3 py-2 rounded ${
                      selectedCategory === category
                        ? 'bg-[#60AACD] text-white'
                        : 'hover:bg-gray-100'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <div key={product.id} className="group">
                  <Link to={`/product/${product.id}`} className="block">
                    <div className="relative overflow-hidden rounded-lg">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-64 object-cover transition duration-300 group-hover:scale-110"
                      />
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
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Joias Elegance</h3>
              <p className="text-gray-400">Sua joalheria de confiança desde 2025</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Sobre Nós</a></li>
                <li><Link to="/products" className="text-gray-400 hover:text-white">Produtos</Link></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Contato</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contato</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Rua das Joias, 123</li>
                <li>São Paulo - SP</li>
                <li>Tel: (11) 1234-5678</li>
                <li>Email: contato@joiaselegance.com</li>
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
            <p>&copy; 2025 Joias Elegance. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default ProductListPage;