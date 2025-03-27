import React from 'react';
import { Link } from 'react-router-dom';
import { Minus, Plus, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

export function CartDropdown() {
  const { items, removeFromCart, updateQuantity, isCartOpen, setIsCartOpen } = useCart();

  if (!isCartOpen) return null;

  const total = items.reduce((sum, item) => {
    const price = parseFloat(item.price.replace('R$ ', '').replace('.', '').replace(',', '.'));
    return sum + (price * item.quantity);
  }, 0);

  return (
    <div className="absolute right-0 mt-2 w-96 bg-white rounded-lg shadow-xl z-50">
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Carrinho</h3>
          <button onClick={() => setIsCartOpen(false)}>
            <X className="w-5 h-5 text-gray-500 hover:text-gray-700" />
          </button>
        </div>
        
        {items.length === 0 ? (
          <p className="text-gray-500 text-center py-4">Seu carrinho está vazio</p>
        ) : (
          <>
            <div className="space-y-4 max-h-96 overflow-auto">
              {items.map(item => (
                <div key={item.id} className="flex items-center gap-4 border-b pb-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold">{item.name}</h4>
                    <p className="text-[#60AACD]">{item.price}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-1 hover:bg-gray-100 rounded"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-1 hover:bg-gray-100 rounded"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t">
              <div className="flex justify-between items-center mb-4">
                <span className="font-semibold">Total:</span>
                <span className="text-[#60AACD] font-bold">
                  {`R$ ${total.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`}
                </span>
              </div>
              <Link
                to="/checkout"
                onClick={() => setIsCartOpen(false)}
                className="block w-full bg-[#60AACD] text-white py-2 rounded text-center hover:bg-[#4d8ba8] transition duration-300"
              >
                Finalizar Compra
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}