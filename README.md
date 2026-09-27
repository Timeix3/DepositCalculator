# Запуск приложения

## Локально

Требуются Java 21, Node.js и npm.

1. В первом терминале запустите backend:

   ```powershell
   cd backend
   .\mvnw.cmd spring-boot:run
   ```

2. Во втором терминале запустите frontend:

   ```powershell
   cd frontend
   npm install
   npm run dev -- --host 127.0.0.1
   ```

Откройте приложение: http://localhost:8080

## Docker

Из корневой папки проекта выполните:

```powershell
docker compose up --build -d
```

Откройте приложение: http://localhost:8080