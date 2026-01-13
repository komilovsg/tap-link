import type { Link } from '../config';
import { trackClick } from '../utils/tracking';
import { FaInstagram, FaTelegram } from 'react-icons/fa';
import { FaviconIcon } from './FaviconIcon';

interface LinkButtonProps {
  link: Link;
  index: number;
  theme?: 'light' | 'dark';
}

const getIcon = (iconType: Link['iconType']) => {
  switch (iconType) {
    case 'website':
      return <FaviconIcon className="w-7 h-7" />;
    case 'instagram':
      return <FaInstagram className="w-7 h-7 text-white" />;
    case 'telegram':
      return <FaTelegram className="w-7 h-7 text-white" />;
    default:
      return <FaviconIcon className="w-7 h-7" />;
  }
};

const getIconGradient = (iconType: Link['iconType']) => {
  switch (iconType) {
    case 'website':
      return 'bg-white';
    case 'instagram':
      return 'bg-gradient-to-br from-[#a278f8] via-[#f31260] to-[#f5a525]';
    case 'telegram':
      return 'bg-[#0088cc]';
    default:
      return 'bg-white';
  }
};

export const LinkButton = ({ link, theme = 'light' }: LinkButtonProps) => {
  const handleClick = () => {
    trackClick(link.name);
  };

  const isDark = theme === 'dark';

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="group relative w-full block"
    >
      <div className={`
        relative
        backdrop-blur-md
        border
        rounded-2xl
        p-4
        shadow-md
        hover:shadow-xl
        transition-all duration-300
        hover:scale-[1.02]
        cursor-pointer
        overflow-hidden
        ${
          isDark
            ? 'bg-gray-900/60 border-white/10 hover:bg-gray-900/80 hover:border-white/20'
            : 'bg-white/90 border-gray-200 hover:bg-white hover:border-gray-300'
        }
      `}>
        {/* Декоративный градиент при наведении */}
        <div className="
          absolute inset-0
          bg-gradient-to-r from-[#016fee]/0 via-[#a278f8]/0 to-[#41c97c]/0
          group-hover:from-[#016fee]/10 group-hover:via-[#a278f8]/10 group-hover:to-[#41c97c]/10
          transition-all duration-500
        " />
        
        {/* Контент */}
        <div className="relative flex items-center gap-3">
          {/* Иконка - в виде "глаза" */}
          <div className={`
            flex-shrink-0
            w-12 h-12
            rounded-full
            ${getIconGradient(link.iconType)}
            flex items-center justify-center
            shadow-md
            group-hover:scale-110
            transition-transform duration-300
          `}>
            {getIcon(link.iconType)}
          </div>
          
          {/* Текст */}
          <div className="flex-1 min-w-0">
            <h3 className={`
              text-base font-semibold
              transition-colors duration-300
              truncate
              ${
                isDark
                  ? 'text-white group-hover:text-gray-100'
                  : 'text-gray-900 group-hover:text-gray-800'
              }
            `}>
              {link.name}
            </h3>
          </div>
          
          {/* Стрелка */}
          <div className={`
            flex-shrink-0
            group-hover:text-[#016fee]
            group-hover:translate-x-1
            transition-all duration-300
            ${isDark ? 'text-gray-400' : 'text-gray-400'}
          `}>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
      </div>
    </a>
  );
};
