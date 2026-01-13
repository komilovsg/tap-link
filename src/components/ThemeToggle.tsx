import { FaSun, FaMoon } from 'react-icons/fa';

interface ThemeToggleProps {
  theme: 'light' | 'dark';
  onToggle: () => void;
}

export const ThemeToggle = ({ theme, onToggle }: ThemeToggleProps) => {
  return (
    <button
      onClick={onToggle}
      className="
        fixed
        top-4
        right-4
        z-50
        w-12
        h-12
        rounded-full
        bg-white/90
        dark:bg-gray-900/90
        backdrop-blur-md
        border
        border-gray-200
        dark:border-gray-700
        shadow-lg
        flex
        items-center
        justify-center
        transition-all
        duration-300
        hover:scale-110
        hover:shadow-xl
        active:scale-95
      "
      aria-label="Переключить тему"
    >
      {theme === 'light' ? (
        <FaMoon className="w-5 h-5 text-gray-800 dark:text-gray-200" />
      ) : (
        <FaSun className="w-5 h-5 text-yellow-500" />
      )}
    </button>
  );
};
