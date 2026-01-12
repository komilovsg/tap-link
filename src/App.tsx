import { links } from './config';
import { LinkButton } from './components/LinkButton';
import { Logo } from './components/Logo';
import Aurora from './components/Aurora';

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8 relative overflow-hidden">
      {/* Aurora эффект */}
      <Aurora 
        colorStops={['#82D5FF', '#8B8EFF', '#7E3FFC', '#AB57FF', '#D35EF8', '#FF66EF']}
        amplitude={1.0}
        blend={0.7}
      />
      
      {/* Главный контейнер */}
      <div className="w-full max-w-md flex flex-col items-center justify-center min-h-screen relative z-10 py-12 px-4">
        {/* Заголовок и описание - по центру */}
        <div className="flex flex-col items-center text-center space-y-6 mb-12">
          <div className="inline-block">
            <Logo />
          </div>
          
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Добро пожаловать
            </h1>
            
            <p className="text-lg text-gray-300 max-w-sm mx-auto leading-relaxed">
              Выберите интересующий вас раздел
            </p>
          </div>
        </div>

        {/* Список ссылок - внизу в столбик */}
        <div className="w-full space-y-3">
          {links.map((link) => (
            <LinkButton
              key={link.id}
              link={link}
              index={0}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
