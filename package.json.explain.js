{
  "name": "bootcamp-74-react",    // Назва твого проєкту
  "private": true,                // Якщо true, проєкт не можна опублікувати в npm
  "version": "0.0.0",             // Версія твого проєкту
  "type": "module",               // Використовуються ES Modules (import/export)

  "scripts": {                    // Скрипти, які запускаються командою npm run
    "dev": "vite",                // Запуск проєкту у режимі розробки
    "build": "vite build",        // Створення production-збірки проєкту
    "lint": "eslint .",           // Перевірка якості та форматування коду
    "preview": "vite preview"     // Попередній перегляд production-збірки локально
  },

  "dependencies": {               // Основні залежності (бібліотеки для роботи проєкту)
    "react": "^19.0.0",           // Бібліотека React
    "react-dom": "^19.0.0"        // Рендерер DOM для React
  },

  "devDependencies": {            // Залежності лише для розробки (збірка, тести, перевірка коду)
    "@eslint/js": "^9.21.0",                  // Базова конфігурація ESLint
    "@types/react": "^19.0.10",               // Типи React для TypeScript
    "@types/react-dom": "^19.0.4",            // Типи ReactDOM для TypeScript
    "@vitejs/plugin-react-swc": "^3.8.0",     // Плагін для підтримки React у Vite (використовуючи SWC)
    "eslint": "^9.21.0",                      // Інструмент перевірки якості коду
    "eslint-plugin-react-hooks": "^5.1.0",    // Перевірка правильності використання React-хуків
    "eslint-plugin-react-refresh": "^0.4.19", // ESLint-плагін для підтримки React Refresh (швидкого оновлення сторінки)
    "globals": "^15.15.0",                    // Глобальні змінні для ESLint
    "vite": "^6.2.0"                          // Сучасний інструмент для запуску та збірки проєктів на React
  }
}