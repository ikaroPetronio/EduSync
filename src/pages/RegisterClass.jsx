import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeftIcon,
  SunIcon, 
  MoonIcon,
  ClockIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';
import Button from '../components/Button';
import SelectionCard from '../components/SelectionCard';
import SectionTitle from '../components/SectionTitle';

export default function CadastrarTurma() {
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();
  const currentSemester = new Date().getMonth() < 6 ? 1 : 2;

  const [formData, setFormData] = useState({
    disciplina: '',
    periodos: [],
    semestre: '',
    diasDisponiveis: []
  });

  // Dados para os selects
  const disciplinas = [
    'Matemática Avançada',
    'Física Quântica',
    'Literatura Brasileira',
    'Programação Web',
    'História da Arte'
  ];

  const periodos = [
    { 
      nome: 'Matutino', 
      icon: <SunIcon className="h-5 w-5 text-amber-600" />, 
      cor: 'bg-amber-100 text-amber-800' 
    },
    { 
      nome: 'Vespertino', 
      icon: <ClockIcon className="h-5 w-5 text-orange-600" />, 
      cor: 'bg-orange-100 text-orange-800' 
    },
    { 
      nome: 'Noturno', 
      icon: <MoonIcon className="h-5 w-5 text-blue-600" />, 
      cor: 'bg-blue-100 text-blue-800' 
    }
  ];

  const diasDaSemana = [
    'Segunda-feira',
    'Terça-feira',
    'Quarta-feira',
    'Quinta-feira',
    'Sexta-feira',
    'Sábado'
  ];

  // Gerar semestres com base no ano atual
  const gerarSemestres = () => {
    const semestres = [];
    const current = `${currentYear}.${currentSemester}`;
    semestres.push(current);
    
    if (currentSemester === 1) {
      semestres.push(`${currentYear}.2`);
      semestres.push(`${currentYear + 1}.1`);
    } else {
      semestres.push(`${currentYear + 1}.1`);
      semestres.push(`${currentYear + 1}.2`);
    }
    
    return semestres;
  };

  const togglePeriodo = (periodo) => {
    setFormData(prev => ({
      ...prev,
      periodos: prev.periodos.includes(periodo)
        ? prev.periodos.filter(p => p !== periodo)
        : [...prev.periodos, periodo]
    }));
  };

  const toggleDiaDisponivel = (dia) => {
    setFormData(prev => ({
      ...prev,
      diasDisponiveis: prev.diasDisponiveis.includes(dia)
        ? prev.diasDisponiveis.filter(d => d !== dia)
        : [...prev.diasDisponiveis, dia]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados enviados:', formData);
    setTimeout(() => {
      navigate('/dashboard');
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center p-6">
      <div className="w-full max-w-2xl animate-fade-in">
        {/* Cabeçalho */}
        <div className="flex items-center mb-8">
          <button 
            onClick={() => navigate(-1)} 
            className="p-2 rounded-full hover:bg-blue-100 transition-colors duration-150"
          >
            <ArrowLeftIcon className="h-6 w-6 text-gray-700" />
          </button>
          <h1 className="text-3xl font-bold text-gray-800 ml-4">
            Cadastrar Preferências
          </h1>
        </div>

        {/* Formulário */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <form onSubmit={handleSubmit}>
            {/* Seção Disciplina */}
            <div className="mb-8">
              <SectionTitle>Disciplina</SectionTitle>
              <div className="grid grid-cols-1 gap-3">
                {disciplinas.map(disciplina => (
                  <SelectionCard
                    key={disciplina}
                    item={disciplina}
                    selected={formData.disciplina === disciplina}
                    onClick={() => setFormData({...formData, disciplina})}
                  />
                ))}
              </div>
            </div>

            {/* Seção Período */}
            {formData.disciplina && (
              <div className="mb-8 animate-fade-in">
                <SectionTitle>Período</SectionTitle>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {periodos.map(periodo => (
                    <SelectionCard
                      key={periodo.nome}
                      item={periodo.nome}
                      icon={periodo.icon}
                      colorClass={periodo.cor}
                      selected={formData.periodos.includes(periodo.nome)}
                      onClick={() => togglePeriodo(periodo.nome)}
                      multiple
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Seção Semestre */}
            {formData.periodos.length > 0 && (
              <div className="mb-8 animate-fade-in">
                <SectionTitle>Semestre Letivo</SectionTitle>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {gerarSemestres().map(semestre => (
                    <SelectionCard
                      key={semestre}
                      item={semestre}
                      selected={formData.semestre === semestre}
                      onClick={() => setFormData({...formData, semestre})}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Seção Dias Disponíveis */}
            {formData.semestre && (
              <div className="mb-8 animate-fade-in">
                <SectionTitle>Dias Disponíveis</SectionTitle>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {diasDaSemana.map(dia => (
                    <SelectionCard
                      key={dia}
                      item={dia}
                      selected={formData.diasDisponiveis.includes(dia)}
                      onClick={() => toggleDiaDisponivel(dia)}
                      multiple
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Botão de Envio */}
            {formData.diasDisponiveis.length > 0 && (
              <div className="animate-fade-in">
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 py-3 text-lg mt-4"
                >
                  Salvar Preferências
                </Button>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}