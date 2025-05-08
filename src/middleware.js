// middleware.js
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

// Экспортируем middleware, созданный на основе нашей конфигурации локалей
export default createMiddleware(routing);

// Настраиваем, на какие пути влияет middleware:
export const config = {
  matcher: [
    // Обрабатываем все пути, кроме специальных (api, _next, _vercel) и файлов с расширениями:
    "/((?!api|_next|_vercel|.*\\..*).*)",
  ],
};
