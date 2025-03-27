import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { Navigation } from '../components/Navigation';
import { useFavorites } from '../context/FavoritesContext';
import { useCart } from '../context/CartContext';

function FavoritesPage() {
  const { favorites, removeFromFavorites } = useFavorites();
  const { addToCart } = useCart();

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold mb-8">Meus Favoritos</h1>

        {favorites.length === 0 ? (
          <div className="text-center py-12">
            <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500">Você ainda não tem itens favoritos</p>
            <Link to="/products" className="text-[#60AACD] hover:text-[#4d8ba8] mt-4 inline-block">
              Explorar produtos
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {favorites.map((product) => (
              <div key={product.id} className="group">
                <Link to={`/product/${product.id}`} className="block">
                  <div className="relative overflow-hidden rounded-lg">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-64 object-cover transition duration-300 group-hover:scale-110"
                    />
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        removeFromFavorites(product.id);
                      }}
                      className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md"
                    >
                      <Heart className="w-5 h-5 text-red-500 fill-current" />
                    </button>
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
        )}
      </div>
    </div>
  );
}

export default FavoritesPage;