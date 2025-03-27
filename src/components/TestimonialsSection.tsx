import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Ana Silva',
    role: 'Cliente desde 2023',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400',
    content: 'As peças da Pratasaura são simplesmente deslumbrantes! O atendimento é impecável e a qualidade das joias supera todas as expectativas.',
    rating: 5
  },
  {
    id: 2,
    name: 'Carlos Santos',
    role: 'Cliente desde 2024',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400',
    content: 'Encontrei o anel de noivado perfeito aqui. A equipe foi muito prestativa e me ajudou a escolher a peça ideal.',
    rating: 5
  },
  {
    id: 3,
    name: 'Marina Costa',
    role: 'Cliente desde 2023',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400',
    content: 'As joias são únicas e o design é contemporâneo. Sempre recebo elogios quando uso as peças da Pratasaura.',
    rating: 5
  }
];

export function TestimonialsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">O que nossos clientes dizem</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Histórias reais de clientes que confiam na Pratasaura para seus momentos especiais
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className="text-gray-600 mb-6">"{testimonial.content}"</p>
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}