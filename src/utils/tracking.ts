import { GOOGLE_SCRIPT_URL } from '../config';

/**
 * Отправляет данные о клике в Google Sheets через Google Apps Script
 * @param linkName - Название ссылки для отслеживания
 */
export const trackClick = async (linkName: string): Promise<void> => {
  if (!GOOGLE_SCRIPT_URL) {
    console.warn('Google Script URL не настроен. Отслеживание кликов отключено.');
    return;
  }

  try {
    await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors', // Важно для Google Scripts
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ linkName }),
    });
    console.log(`Клик засчитан: ${linkName}`);
  } catch (error) {
    // В режиме no-cors мы не получим ответ, но запрос все равно отправится
    console.error('Ошибка при отправке данных:', error);
  }
};
