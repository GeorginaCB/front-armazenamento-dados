import React from 'react';
import { Header } from '../components/header';
import { Footer } from '../components/footer';

export const Home = () => {
  return (
    <>
    <Header/>
    
    <div className="bg-white p-4 md:p-8 rounded shadow-md max-w-screen-lg mx-auto h-screen flex justify-center items-center">
      <div className="w-full text-center">
        <h2 className="text-2xl font-semibold mb-4">Bem-vindo à Página Home</h2>
        <p className="mb-4">
          Explore nossa plataforma para descobrir como podemos facilitar seu dia a dia. Oferecemos uma variedade de ferramentas e recursos para ajudar você a alcançar seus objetivos pessoais e profissionais.
        </p>
        <p className="mb-4">
          Navegue pelas seções de produtos para encontrar soluções adaptadas às suas necessidades. Estamos comprometidos em fornecer a melhor experiência possível para nossos usuários, garantindo segurança e eficiência em todas as interações.
        </p>
        <div className="flex justify-center">
          <a href="/login" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Login</a>
          <a href="/signup" className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded ml-2">Signup</a>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};


