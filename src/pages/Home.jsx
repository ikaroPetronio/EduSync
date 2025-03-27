import { Link } from 'react-router-dom'
import { ArrowRightIcon, AcademicCapIcon, CalendarIcon, ClockIcon } from '@heroicons/react/24/outline'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center p-6">
      <div className="max-w-4xl text-center">
        {/* Cabeçalho Impactante */}
        <div className="mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Edusync
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 font-medium">
            A solução inteligente para <span className="text-blue-600">alocação docente perfeita</span>
          </p>
        </div>

          {/* Chamada para Ação */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
          <Link 
            to="/login" 
            className="relative px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group font-medium text-lg"
          >
            <span className="relative z-10 flex items-center justify-center">
              Acesse a plataforma
              <ArrowRightIcon className="ml-2 h-5 w-5 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1" />
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </Link>
          
          <Link 
            to="/register" 
            className="relative px-8 py-4 bg-white text-blue-600 border-2 border-blue-600 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group font-medium text-lg"
          >
            <span className="relative z-10 flex items-center justify-center">
              Crie sua conta
              <ArrowRightIcon className="ml-2 h-5 w-5 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1" />
            </span>
            <span className="absolute inset-0 bg-blue-50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </Link>
        </div>

        {/* Destaque Visual */}
        <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden mb-14 p-1 max-w-3xl mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 opacity-10"></div>
          
          <div className="relative bg-white/90 backdrop-blur-sm p-8 md:p-10 rounded-xl">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Transforme a gestão de aulas da sua instituição
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start space-x-4">
                <AcademicCapIcon className="h-8 w-8 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-800">Atribuição inteligente</h3>
                  <p className="text-gray-600 text-sm">Professores lecionando as disciplinas de sua expertise</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <CalendarIcon className="h-8 w-8 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-800">Disponibilidade real</h3>
                  <p className="text-gray-600 text-sm">Grade horária que respeita a agenda de cada docente</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <ClockIcon className="h-8 w-8 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-800">Carga horária ideal</h3>
                  <p className="text-gray-600 text-sm">Distribuição equilibrada conforme a capacidade de cada um</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="h-8 w-8 flex items-center justify-center text-blue-600 flex-shrink-0">
                  <span className="text-xl">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Satisfação garantida</h3>
                  <p className="text-gray-600 text-sm">Professores mais motivados, gestão mais eficiente</p>
                </div>
              </div>
            </div>

            <p className="text-gray-700 mb-8">
              <span className="font-semibold text-blue-600">Mais de 87% de aproveitamento</span> nas alocações quando 
              comparado aos métodos tradicionais
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}