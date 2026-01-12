// Google Apps Script Web App URL для отслеживания кликов
export const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbw_30z8MmSPLLReofe0czMNfFTE2rky_bO4X5w5Te0YtArqncLqgkxvSWND2Ay89diM/exec';

export interface Link {
  id: string;
  name: string;
  url: string;
  iconType: 'website' | 'instagram' | 'telegram';
}

// Ссылки на платформы Yora
export const links: Link[] = [
  {
    id: '1',
    name: 'Сайт Yora',
    url: 'https://yora.tj/',
    iconType: 'website',
  },
  {
    id: '2',
    name: 'Instagram',
    url: 'https://www.instagram.com/yora.tj?igsh=Y2RvZ3FyMWM3d3N3',
    iconType: 'instagram',
  },
  {
    id: '3',
    name: 'Telegram',
    url: 'https://t.me/yoratj',
    iconType: 'telegram',
  },
];
