import { Link } from 'react-router-dom'
import { PlusCircleIcon, ListBulletIcon } from '@heroicons/react/24/outline'

export default function DashboardHome() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center p-6">
      <div className="max-w-4xl w-full mt-10 animate-fade-in">
        {/* Cabeçalho */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Painel do Professor
            </span>
          </h1>
          <p className="text-lg text-gray-600">
            Gerencie suas turmas e alocações
          </p>
        </div>

        {/* Cards de Ação */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1 - Cadastrar Turma */}
          <Link 
            to="/registerclass" 
            className="bg-white/90 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-white hover:border-blue-200 overflow-hidden"
          >
            <div className="p-8">
              <div className="flex justify-center mb-5">
                <div className="bg-blue-100 p-4 rounded-full">
                  <PlusCircleIcon className="h-10 w-10 text-blue-600" />
                </div>
              </div>
              <h2 className="text-2xl font-bold text-center text-gray-800 mb-3">
                Nova Turma
              </h2>
              <p className="text-gray-600 text-center mb-4">
                Cadastre novas turmas informando disciplina, horários e semestre.
              </p>
            </div>
          </Link>

          {/* Card 2 - Visualizar Turmas */}
          <Link 
            to="/turmas" 
            className="bg-white/90 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-white hover:border-blue-200 overflow-hidden"
          >
            <div className="p-8">
              <div className="flex justify-center mb-5">
                <div className="bg-indigo-100 p-4 rounded-full">
                  <ListBulletIcon className="h-10 w-10 text-indigo-600" />
                </div>
              </div>
              <h2 className="text-2xl font-bold text-center text-gray-800 mb-3">
                Minhas Turmas
              </h2>
              <p className="text-gray-600 text-center mb-4">
                Visualize e gerencie todas as turmas cadastradas.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}