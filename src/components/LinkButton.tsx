import type { Link } from '../config';
import { trackClick } from '../utils/tracking';
import { FaInstagram, FaTelegram } from 'react-icons/fa';
import { FaviconIcon } from './FaviconIcon';

interface LinkButtonProps {
  link: Link;
  index: number;
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

export const LinkButton = ({ link }: LinkButtonProps) => {
  const handleClick = () => {
    trackClick(link.name);
  };

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="group relative w-full block"
    >
      <div className="
        relative
        bg-gray-900/60 backdrop-blur-md
        border border-white/10
        rounded-2xl
        p-4
        shadow-lg
        hover:shadow-2xl
        transition-all duration-300
        hover:scale-[1.02]
        hover:bg-gray-900/80
        hover:border-white/20
        cursor-pointer
        overflow-hidden
      ">
        {/* Декоративный градиент при наведении */}
        <div className="
          absolute inset-0
          bg-gradient-to-r from-[#016fee]/0 via-[#a278f8]/0 to-[#41c97c]/0
          group-hover:from-[#016fee]/15 group-hover:via-[#a278f8]/15 group-hover:to-[#41c97c]/15
          transition-all duration-500
        " />
        
        {/* Контент */}
        <div className="relative flex items-center gap-3">
          {/* Иконка - в виде "глаза" */}
          <div className={`
            flex-shrink-0
            w-12 h-12
            rounded-xl
            ${getIconGradient(link.iconType)}
            flex items-center justify-center
            shadow-lg
            group-hover:scale-110
            transition-transform duration-300
          `}>
            {getIcon(link.iconType)}
          </div>
          
          {/* Текст */}
          <div className="flex-1 min-w-0">
            <h3 className="
              text-base font-semibold
              text-white
              group-hover:text-gray-100
              transition-colors duration-300
              truncate
            ">
              {link.name}
            </h3>
          </div>
          
          {/* Стрелка */}
          <div className="
            flex-shrink-0
            text-gray-400
            group-hover:text-[#016fee]
            group-hover:translate-x-1
            transition-all duration-300
          ">
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
