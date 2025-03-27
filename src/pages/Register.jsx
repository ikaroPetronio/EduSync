import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Input from '../components/Input';
import Button from '../components/Button';
import { UserIcon, EnvelopeIcon, LockClosedIcon } from '@heroicons/react/24/outline';

export default function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center p-6 animate-fade-in">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="p-8">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">
            Criar conta
          </h1>
          <div className="w-16 h-1 bg-blue-500 mx-auto mb-6 rounded-full"></div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <Input
              label="Nome completo"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              icon={<UserIcon className="h-5 w-5" />}
            />

            <Input
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              icon={<EnvelopeIcon className="h-5 w-5" />}
            />

            <Input
              label="Senha"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              icon={<LockClosedIcon className="h-5 w-5" />}
            />

            <Input
              label="Confirmar senha"
              name="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={handleChange}
              icon={<LockClosedIcon className="h-5 w-5" />}
            />

            <Button 
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700"
            >
              Cadastrar
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Já tem uma conta? {' '}
              <Link 
                to="/login" 
                className="text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200"
              >
                Faça login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}