// 1. Импортируем необходимые модули
const express = require('express');  // Фреймворк для сервера
const cors = require('cors');  // Для разрешения кросс-доменных запросов
const path = require('path');  // Для работы с путями

const app = express();  // Создаем сервер

// 2. Включаем CORS, чтобы разрешить запросы с другого порта (например, с фронтенда на React)
app.use(cors());

// 3. Включаем парсер для JSON и URL-encoded данных
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 4. Маршруты API для работы с продуктами, пользователями и т.д.
app.get('/api/products', (req, res) => {
    res.json([
        { id: 1, name: 'Product 1', price: '₪25' },
        { id: 2, name: 'Product 2', price: '₪30' },
    ]);
});

// Раздаем статику — сборку React-приложения (если уже сделана)
app.use(express.static(path.join(__dirname, 'client/build')));

// Главная страница с React-приложением
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

// 5. Запускаем сервер
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
