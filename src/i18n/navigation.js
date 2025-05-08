// i18n/navigation.js
import { createNavigation } from "next-intl/navigation";
import { routing } from "./routing";

// Создаем обертки над навигационными функциями Next.js, учитывающие нашу i18n-конфигурацию
export const {
  Link, // Компонент ссылки, добавляющий префикс локали автоматически
  redirect, // Функция перенаправления с учетом локали
  usePathname, // Хук для получения текущего пути без префикса локали (если нужно)
  useRouter, // Хук роутера Next.js с поддержкой локали
  getPathname, // Функция для получения путей с учетом локали
} = createNavigation(routing);
