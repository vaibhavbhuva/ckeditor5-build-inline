(function(d){	const l = d['uk'] = d['uk'] || {};	l.dictionary=Object.assign(		l.dictionary||{},		{"%0 of %1":"%0 із %1",Aquamarine:"Аквамариновий",Big:"Великий",Black:"Чорний","Block quote":"Цитата",Blue:"Синій",Bold:"Жирний","Bulleted List":"Маркерний список",Cancel:"Відміна","Centered image":"Зображення по центру","Change image text alternative":"Змінити текстову альтернативу зображення","Choose heading":"Оберіть заголовок","Decrease indent":"Зменшити відступ",Default:"За замовчуванням","Dim grey":"Темно-сірий","Document colors":"Кольори документу",Downloadable:"Завантажувальне","Dropdown toolbar":"Випадаюча панель інструментів","Edit link":"Редагувати посилання","Editor toolbar":"Панель інструментів редактора","Enter image caption":"Введіть підпис зображення","Font Background Color":"Колір тла шрифту","Font Color":"Колір шрифту","Font Family":"Сімейство шрифтів","Font Size":"Розмір шрифту","Full size image":"Повний розмір зображення",Green:"Зелений",Grey:"Сірий",Heading:"Заголовок","Heading 1":"Заголовок 1","Heading 2":"Заголовок 2","Heading 3":"Заголовок 3","Heading 4":"Заголовок 4","Heading 5":"Заголовок 5","Heading 6":"Заголовок 6",Huge:"Величезний","Image resize list":"Перелік розмірів","Image toolbar":"Панелі інструментів зображення","image widget":"Віджет зображення","Increase indent":"Збільшити відступ","Insert image":"Вставити зображення","Insert paragraph after block":"Додати абзац після блока","Insert paragraph before block":"Додати абзац перед блоком",Italic:"Курсив","Left aligned image":"Зображення ліворуч","Light blue":"Світло-синій","Light green":"Світло-зелений","Light grey":"Світло-сірий",Link:"Посилання","Link URL":"URL посилання",Next:"Наступний","Numbered List":"Нумерований список","Open in a new tab":"Вікрити у новій вкладці","Open link in new tab":"Відкрити посилання у новій вкладці",Orange:"Помаранчевий",Original:"Оригінал",Paragraph:"Параграф",Previous:"Попередній",Purple:"Фіолетовий",Red:"Червоний",Redo:"Повтор","Remove color":"Видалити колір","Resize image":"Розтягнути зображення","Resize image to %0":"Розтягнути зображення до %0","Resize image to the original size":"Розтягнути зображення до оригінального розміру","Rich Text Editor, %0":"Розширений текстовий редактор, %0","Right aligned image":"Зображення праворуч",Save:"Зберегти","Select all":"Вибрати все","Show more items":"Показати більше","Side image":"Бокове зображення",Small:"Маленький",Subscript:"Нижній індекс",Superscript:"Верхній індекс","Text alternative":"Текстова альтернатива","This link has no URL":"Це посилання не має URL",Tiny:"Крихітний",Turquoise:"Бірюзовий",Underline:"Підкреслений",Undo:"Відміна",Unlink:"Видалити посилання","Upload failed":"Завантаження не вдалось","Upload in progress":"Виконується завантаження",White:"Білий","Widget toolbar":"Панель інструментів віджетів",Yellow:"Жовтий"}	);l.getPluralForm=function(n){return (n % 1 == 0 && n % 10 == 1 && n % 100 != 11 ? 0 : n % 1 == 0 && n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 12 || n % 100 > 14) ? 1 : n % 1 == 0 && (n % 10 ==0 || (n % 10 >=5 && n % 10 <=9) || (n % 100 >=11 && n % 100 <=14 )) ? 2: 3);;};})(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={}));