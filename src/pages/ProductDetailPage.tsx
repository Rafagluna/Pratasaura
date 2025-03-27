import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShoppingCart, Heart, Menu, X, Minus, Plus, Star } from 'lucide-react';
import { Navigation } from '../components/Navigation';
import { useCart } from '../context/CartContext';

// Mock product data
const product = {
  id: 1,
  name: 'Anel de Diamante Solitário',
  price: 'R$ 2.999',
  description: 'Um deslumbrante anel solitário com diamante de 0.5 quilates em ouro 18k. Perfeito para momentos especiais e compromissos eternos.',
  category: 'Anéis',
  images: [
    'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=400',
    'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=400',
    'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=400',
  ],
  details: [
    'Material: Ouro 18k',
    'Pedra principal: Diamante natural',
    'Quilatagem: 0.5ct',
    'Cor: G',
    'Pureza: VS1',
    'Certificado GIA',
  ],
  rating: 4.8,
  reviews: 124,
};

// Similar products
const similarProducts = [
  { id: 2, name: 'Anel de Ouro Rose', price: 'R$ 1.899', image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=400' },
  { id: 3, name: 'Anel de Safira', price: 'R$ 2.499', image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=400' },
  { id: 4, name: 'Anel de Esmeralda', price: 'R$ 2.799', image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=400' },
];

function ProductDetailPage() {
  const { addToCart } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();

  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Breadcrumb */}
      <div className="bg-gray-100 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-[#60AACD]">Início</Link>
            <span>/</span>
            <Link to="/products" className="hover:text-[#60AACD]">Produtos</Link>
            <span>/</span>
            <span className="text-[#60AACD]">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Product Details */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative rounded-lg overflow-hidden ${
                    selectedImage === index ? 'ring-2 ring-[#60AACD]' : ''
                  }`}
                >
                  <img src={image} alt={`${product.name} ${index + 1}`} className="w-full h-24 object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <div className="flex items-center mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    className={`w-5 h-5 ${
                      index < Math.floor(product.rating)
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="ml-2 text-sm text-gray-600">
                ({product.reviews} avaliações)
              </span>
            </div>
            <p className="text-2xl font-bold text-[#60AACD] mb-6">{product.price}</p>
            <p className="text-gray-600 mb-6">{product.description}</p>

            {/* Product Details */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">Detalhes do Produto</h3>
              <ul className="space-y-2">
                {product.details.map((detail, index) => (
                  <li key={index} className="text-gray-600">{detail}</li>
                ))}
              </ul>
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center mb-6">
              <span className="mr-4">Quantidade:</span>
              <div className="flex items-center border rounded">
                <button
                  onClick={decreaseQuantity}
                  className="p-2 hover:bg-gray-100"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-4 py-2 border-x">{quantity}</span>
                <button
                  onClick={increaseQuantity}
                  className="p-2 hover:bg-gray-100"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <div className="flex gap-4">
              <button 
                onClick={() => addToCart({ ...product, quantity })}
                className="flex-1 bg-[#60AACD] text-white py-3 px-6 rounded-lg hover:bg-[#4d8ba8] transition duration-300"
              >
                Adicionar ao Carrinho
              </button>
              <button className="p-3 border rounded-lg hover:bg-gray-100 transition duration-300">
                <Heart className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Similar Products */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8">Produtos Similares</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {similarProducts.map((product) => (
              <Link to={`/product/${product.id}`} key={product.id} className="group">
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
            ))}
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

export default ProductDetailPage;