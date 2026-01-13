import { useState, useEffect } from 'react';
import { links } from './config';
import { LinkButton } from './components/LinkButton';
import { Logo } from './components/Logo';
import { ThemeToggle } from './components/ThemeToggle';
import Aurora from './components/Aurora';

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const saved = localStorage.getItem('theme');
    return (saved as 'light' | 'dark') || 'light';
  });

  useEffect(() => {
    localStorage.setItem('theme', theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`h-screen w-screen flex flex-col items-center justify-center px-4 py-4 relative overflow-hidden ${
      theme === 'light' 
        ? 'bg-gradient-to-br from-gray-50 to-white' 
        : 'bg-black'
    }`}>
      {/* Видео фон - только для светлой темы */}
      {theme === 'light' && (
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-50"
          >
            <source src="/yora-ai.webm" type="video/webm" />
          </video>
          {/* Градиентный overlay для лучшей читаемости */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white/60" />
        </div>
      )}

      {/* Aurora эффект */}
      <div className={`absolute inset-0 ${theme === 'light' ? 'opacity-20' : 'opacity-100'}`}>
        <Aurora 
          colorStops={['#82D5FF', '#8B8EFF', '#7E3FFC', '#AB57FF', '#D35EF8', '#FF66EF']}
          amplitude={theme === 'light' ? 0.8 : 1.0}
          blend={theme === 'light' ? 0.5 : 0.7}
        />
      </div>

      {/* Переключатель темы */}
      <div className=''>
      <ThemeToggle theme={theme} onToggle={toggleTheme} />
      </div>
      
      {/* Главный контейнер */}
      <div className="w-full max-w-md flex flex-col items-center justify-center h-full relative z-10 px-4 py-4">
        {/* Заголовок и описание - по центру */}
        <div className="flex flex-col items-center text-center space-y-4 mb-8 flex-shrink-0">
          <div className="inline-block">
            <Logo />
          </div>
          
          <div className="space-y-4">
            <h1 className={`text-4xl md:text-5xl font-bold leading-tight ${
              theme === 'light' ? 'text-gray-900' : 'text-white'
            }`}>
              Добро пожаловать
            </h1>
            
            <p className={`text-lg max-w-sm mx-auto leading-relaxed ${
              theme === 'light' ? 'text-gray-600' : 'text-gray-300'
            }`}>
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
              theme={theme}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
