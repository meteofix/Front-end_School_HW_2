<!---  ## Ознайомитись онлайн: [TikTuk](https://tiktuk.vercel.app/) ) --->

Для локального запуску клонуйте репозиторій, інсталюйте залежності та запустіть додаток.

Виконайте наступні команди:

### ` git clone https://github.com/meteofix/Front-end_School_HW_2.git`

### `npm install`

### `npm start`

Для запуску тестів виконайте:

### `npm test`

Для запуску аналізу з допомогою утиліти BundleAnalyzer виконайте:

### `npm analyze`

> Зверніть увагу! Додаток використовує як залежність бібліотеку `@meteofix/tiktuk-component-library`.
Access token для доступу надіслав у класрумі.



## Коротка довідка про додаток:

Компонент `AppRouter.js` відповідає за маршрутизацію між сторінками додатку

Компонент `TrendingFeed.js` отримує дані з колекції `"Get Trending Feed"` та ітерує їх, будуючи для кожного елементу ітерації компонент `Post.js`. В процесі отримання данних показує спінер `Loader.js`.

У компоненті `Post.js` відображається:

1) Блок з інформацією про користувача, клік по якій перенаправляє на його сторінку
   - аватар
   - нікнейм
   - ім'я
   - кнопка "Follow" (при кліку нічого не відбувається)
   
2) Блок з відео та інформацією про нього
   - текстовий опис відео
     - функція `parseHashtags.js` шукає теги та нікнейми користувачів та виділяє їх у тексті
   - інформація про саундтрек
   - програвач відео (`react-player`)
     - автоматичне відтворення
     - автоматичне перемикання відео при скролі, викристовуючи хук `useVisibility`
     - можливість ставити на паузу та вимикати звук
     - відтворення призупиняється при втраті вікноом фокусу та продовжується прри поверненні
     - при завантаженні та буферизації відео показується спінер
     - при помилці отримання відео показується зображення обкладинки, анімоване при наведенні. У випадку помилки отримання зображення показується логотип за замовчанням
   - сайдбар з інформацією про кількість лайків, коментарів та репостів
     - лічильники конвертують дані у правильний формат за допомогою функції `countRouund.js`
     
Компонент `UserProfile.js` отримує дані з колекцій `"Get User Info"` та `"Get User Feed"` та передає дані у відповідні компоненти `UserHeader.js` та `UserMain.js`. В процесі отримання данних показує спінер `Loader.js`.
> Через те, що API частково вийшло з ладу, логіка отримання данних з колекції `"Get User Feed"` закоментована, дані тимчасово беруть з файлу `user-feed.json` всередині компонента `UserMain.js`

У компоненті `UserHeader.js` відображається:

1) Блок з інформацією про користувача
    - аватар
    - нікнейм
    - ім'я
    - кнопка `Follow` (при кліку нічого не відбувається)
    - лічильники з інформацією про кількість підписок, підписників та лайків
      - лічильники конвертують дані у правильний формат за допомогою функції `countRouund.js`
    - текстовий опис профілю
    - посилання (якщо наявне)
    - навігаційна кнопка повернення на попередню сторінку

У компоненті `UserMain.js` відображається:

1) Панель вкладок `Video` та `Liked`
2) На вкладці `Video` ітеруються дані з колекції `"Get User Feed"`, відображаються відеозаписи, по три у ряд
   - поверх відео відображається кількість переглядів
   - при помилці отримання відео показується зображення обкладинки, анімоване при наведенні. У випадку помилки отримання зображення показується логотип за замовчанням

Адаптивна версія реалізована за допомогою хуку `useMediaQuery` бібліотеки `react-response` та підключенню відповідних 'мобільних' стилів у css-модулях компонентів.

Пагінацію постів можна реалізувати, підвантажуючі отриманні дані до ітерації потрібними порціями (наприклад, по 30 постів). За замовчанням `requestData.js` отримує 30 постів за раз, кількість можна змінити, передавши функції додатковий параметр `limit`. API дозволяє отримувати до 100 постів за раз.
