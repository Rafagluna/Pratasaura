import React, { useState } from 'react';
import { Navigation } from '../components/Navigation';
import { useCart } from '../context/CartContext';
import { CreditCard, Truck, AlertCircle } from 'lucide-react';

type PaymentMethod = 'credit' | 'debit' | 'pix';

function CheckoutPage() {
  const { items } = useCart();
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('credit');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    cardNumber: '',
    cardName: '',
    cardExpiry: '',
    cardCvv: '',
  });

  const total = items.reduce((sum, item) => {
    const price = parseFloat(item.price.replace('R$ ', '').replace('.', '').replace(',', '.'));
    return sum + (price * item.quantity);
  }, 0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle checkout logic here
    console.log('Checkout submitted', { formData, paymentMethod, items });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold mb-8">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Order Summary */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-6">Resumo do Pedido</h2>
            <div className="space-y-4 mb-6">
              {items.map(item => (
                <div key={item.id} className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-gray-600">Quantidade: {item.quantity}</p>
                    <p className="text-[#60AACD]">{item.price}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t pt-4">
              <div className="flex justify-between items-center text-lg font-semibold">
                <span>Total:</span>
                <span className="text-[#60AACD]">
                  {`R$ ${total.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`}
                </span>
              </div>
            </div>
          </div>

          {/* Checkout Form */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-6">Informações de Pagamento</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Nome Completo</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#60AACD] focus:ring focus:ring-[#60AACD] focus:ring-opacity-50"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#60AACD] focus:ring focus:ring-[#60AACD] focus:ring-opacity-50"
                    required
                  />
                </div>
              </div>

              {/* Address */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Endereço</label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#60AACD] focus:ring focus:ring-[#60AACD] focus:ring-opacity-50"
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Cidade</label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#60AACD] focus:ring focus:ring-[#60AACD] focus:ring-opacity-50"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Estado</label>
                    <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#60AACD] focus:ring focus:ring-[#60AACD] focus:ring-opacity-50"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">CEP</label>
                  <input
                    type="text"
                    name="zip"
                    value={formData.zip}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#60AACD] focus:ring focus:ring-[#60AACD] focus:ring-opacity-50"
                    required
                  />
                </div>
              </div>

              {/* Payment Method Selection */}
              <div className="space-y-4">
                <h3 className="font-semibold">Método de Pagamento</h3>
                <div className="grid grid-cols-3 gap-4">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('credit')}
                    className={`p-4 border rounded-lg text-center ${
                      paymentMethod === 'credit' ? 'border-[#60AACD] bg-[#60AACD] bg-opacity-10' : ''
                    }`}
                  >
                    <CreditCard className="w-6 h-6 mx-auto mb-2" />
                    <span className="text-sm">Cartão de Crédito</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('debit')}
                    className={`p-4 border rounded-lg text-center ${
                      paymentMethod === 'debit' ? 'border-[#60AACD] bg-[#60AACD] bg-opacity-10' : ''
                    }`}
                  >
                    <CreditCard className="w-6 h-6 mx-auto mb-2" />
                    <span className="text-sm">Cartão de Débito</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('pix')}
                    className={`p-4 border rounded-lg text-center ${
                      paymentMethod === 'pix' ? 'border-[#60AACD] bg-[#60AACD] bg-opacity-10' : ''
                    }`}
                  >
                    <AlertCircle className="w-6 h-6 mx-auto mb-2" />
                    <span className="text-sm">PIX</span>
                  </button>
                </div>
              </div>

              {/* Credit Card Information */}
              {(paymentMethod === 'credit' || paymentMethod === 'debit') && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Número do Cartão</label>
                    <input
                      type="text"
                      name="cardNumber"
                      value={formData.cardNumber}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#60AACD] focus:ring focus:ring-[#60AACD] focus:ring-opacity-50"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Nome no Cartão</label>
                    <input
                      type="text"
                      name="cardName"
                      value={formData.cardName}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#60AACD] focus:ring focus:ring-[#60AACD] focus:ring-opacity-50"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Validade</label>
                      <input
                        type="text"
                        name="cardExpiry"
                        value={formData.cardExpiry}
                        onChange={handleInputChange}
                        placeholder="MM/AA"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#60AACD] focus:ring focus:ring-[#60AACD] focus:ring-opacity-50"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">CVV</label>
                      <input
                        type="text"
                        name="cardCvv"
                        value={formData.cardCvv}
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#60AACD] focus:ring focus:ring-[#60AACD] focus:ring-opacity-50"
                        required
                      />
                    </div>
                  </div>
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-[#60AACD] text-white py-3 rounded-lg hover:bg-[#4d8ba8] transition duration-300"
              >
                Finalizar Compra
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;