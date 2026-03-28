
const MISSIONS = {

  dropper: {
    id: 'dropper',
    label: 'МИССИЯ 01 · ДРОППЕРСТВО',
    title: 'Лёгкие деньги',
    color: '#ff3b6b',
    desc: 'Незнакомец в интернете предлагает получать деньги просто так – пропуская переводы через свою карту. Звучит легко? Узнай, чем это кончается.',
    scenes: 11, diff: 'Начальный',
    tips: [
      { icon: '⚖️', text: 'Дроппер – юридически пособник преступника. Уголовная ответственность с 14 лет.' },
      { icon: '🏦', text: 'Банк заблокирует карту, долг придётся возвращать годами.' },
      { icon: '🚔', text: 'Полиция отслеживает транзакции – вычислить дроппера легко.' },
    ],
    storyboard: [
      {
        type: 'context',
        variant: 'normal',
        text: '📱 ВКонтакте. Тебе 15 лет. Приходит сообщение от незнакомого аккаунта «Антон Бизнес».'
      },
      {
        type: 'messages',
        msgs: [
          { cls: 'scam', sender: 'Антон Бизнес', senderCls: 'bad', text: 'Привет! Ищу надёжного человека для удалённой работы. Без опыта, платим 5 000–10 000 ₽ в день. Интересно?' },
        ]
      },
      {
        type: 'choice',
        question: 'Что ты ответишь?',
        choices: [
          { letter: 'А', text: 'Расскажи подробнее, что нужно делать', correct: false },
          { letter: 'Б', text: 'Звучит как мошенничество. Блокирую и сообщаю родителям', correct: true },
          { letter: 'В', text: 'Откуда у тебя мой контакт?', correct: false },
        ],
        feedback: {
          correct: { title: '✅ Верно!', text: 'Никогда не общайся с незнакомцами, предлагающими лёгкие деньги онлайн. Это классическая схема вербовки дроппера. Правильно заблокировать и рассказать взрослым.', fact: '💡 В 2023 году поймано более 20 000 дропперов – большинство не знали, что совершают преступление' },
          wrong: { title: '⚠️ Осторожно!', text: 'Ты продолжил общение. Мошенник получил твоё внимание – именно это ему и нужно. Посмотрим, что будет дальше...', fact: '💡 Мошенники специально ищут подростков – их легче убедить и они меньше знают о законах' }
        }
      },
      {
        type: 'context',
        variant: 'warn',
        text: '⚠️ Ты продолжил разговор. Антон объясняет «работу».'
      },
      {
        type: 'visual',
        title: 'Скриншот переписки · ВКонтакте',
        lines: [
          { text: 'Антон: Нужно просто принимать деньги на карту и отправлять дальше.' },
          { text: 'Антон: 10% комиссия с каждого перевода – твои.', hl: 'warn' },
          { text: 'Антон: Без оформления, без налогов. Полностью анонимно.', hl: 'bad' },
          { text: 'Антон: Скинь номер карты и паспортные данные для «регистрации в системе».', hl: 'bad' },
        ]
      },
      {
        type: 'choice',
        question: 'Что это за схема?',
        choices: [
          { letter: 'А', text: 'Нормальная удалённая работа – главное не раскрывать пин-код', correct: false },
          { letter: 'Б', text: 'Дропперская схема для отмывания краденых денег – это уголовно наказуемо', correct: true },
          { letter: 'В', text: 'Это сетевой маркетинг', correct: false },
        ],
        feedback: {
          correct: { title: '✅ Ты разгадал схему!', text: 'Именно! Деньги, которые будут проходить через твою карту – краденые. Ты становишься звеном в преступной цепочке. Даже «незнание» не освобождает от ответственности по закону.', fact: '⚖️ Статья 174.1 УК РФ – легализация преступных доходов. До 7 лет лишения свободы.' },
          wrong: { title: '❌ Это ловушка!', text: 'Это не работа. Через твою карту будут проходить деньги, украденные у других людей. Ты станешь соучастником мошенничества.', fact: '🚔 Следователи запрашивают данные карты – тебя найдут по первому же переводу' }
        }
      },
      {
        type: 'context',
        variant: 'danger',
        text: '🚨 Что происходит когда ты соглашаешься...'
      },
      {
        type: 'visual',
        title: 'ХРОНИКА СОБЫТИЙ',
        lines: [
          { text: 'День 1: Ты получаешь первый перевод – 50 000 ₽. Отправляешь 45 000 ₽ дальше.', hl: 'warn' },
          { text: 'День 3: На карте уже 200 000 ₽. Ты чувствуешь себя богатым!', hl: 'warn' },
          { text: 'День 5: Карта заблокирована банком. Звонок от следователя.', hl: 'bad' },
          { text: 'День 7: Родители в шоке – на тебе висит уголовное дело.', hl: 'bad' },
          { text: 'Итог: 150 000 ₽ придётся возвращать жертвам мошенничества годами.', hl: 'bad' },
        ]
      },
      {
        type: 'choice',
        question: 'Как можно было этого избежать?',
        choices: [
          { letter: 'А', text: 'Просто не начинать – блокировать первое же сообщение о «лёгких деньгах»', correct: true },
          { letter: 'Б', text: 'Быстрее выводить деньги, чтобы банк не заметил', correct: false },
          { letter: 'В', text: 'Использовать чужую карту вместо своей', correct: false },
        ],
        feedback: {
          correct: { title: '✅ Именно так!', text: 'Лучшая защита – не вступать в игру. Первое сообщение с предложением «лёгких денег» должно быть немедленно заблокировано. Расскажи об этом друзьям – возможно, ты спасёшь кого-то от ошибки.', fact: '🛡 95% дропперов вербуются через соцсети и мессенджеры' },
          wrong: { title: '❌ Это только усугубит!', text: 'Быстрое выведение денег или использование чужой карты – это дополнительные статьи УК РФ. Банковские системы мониторинга видят всё.', fact: '👁 Банки используют ИИ для отслеживания подозрительных транзакций в реальном времени' }
        }
      }
    ]
  },

  gosuslugi: {
    id: 'gosuslugi',
    label: 'МИССИЯ 02 · ФИШИНГ',
    title: 'Цветочный магазин',
    color: '#ffe500',
    desc: 'Звонок из «службы поддержки» Госуслуг. Или не из Госуслуг? Разберись, как мошенники используют невинный повод – доставку цветов – чтобы захватить твой аккаунт.',
    scenes: 6, diff: 'Средний',
    tips: [
      { icon: '🔐', text: 'Настоящие сотрудники Госуслуг никогда не спрашивают коды из СМС.' },
      { icon: '📞', text: 'Если сомневаешься – сбрось звонок и перезвони на официальный номер самостоятельно.' },
      { icon: '🌸', text: 'Схема «цветочный магазин» – реальная мошенническая схема 2022–2024 годов.' },
    ],
    storyboard: [
      {
        type: 'context',
        variant: 'normal',
        text: '📞 Тебе приходит звонок с незнакомого номера. Ты берёшь трубку.'
      },
      {
        type: 'messages',
        msgs: [
          { cls: 'scam', sender: 'Звонящий', senderCls: 'bad', text: 'Добрый день! Беспокоит интернет-магазин «Цветочный Мир». Вы делали заказ на букет для доставки?' },
          { cls: 'them', sender: 'Ты (думаешь)', senderCls: 'neutral', text: 'Нет, я ничего не заказывал...' },
          { cls: 'scam', sender: 'Звонящий', senderCls: 'bad', text: 'Странно! Возможно, кто-то использует ваши данные. Нам пришлось направить запрос в Госуслуги. Сейчас вам придёт код – продиктуйте его, чтобы отменить мошеннический заказ.' },
        ]
      },
      {
        type: 'choice',
        question: 'На твой телефон приходит СМС с кодом от Госуслуг. Что делаешь?',
        choices: [
          { letter: 'А', text: 'Диктую код, раз это поможет отменить заказ', correct: false },
          { letter: 'Б', text: 'Кладу трубку. Код от Госуслуг нельзя никому говорить – это пароль доступа к аккаунту', correct: true },
          { letter: 'В', text: 'Прошу подождать и иду спросить у родителей', correct: false },
        ],
        feedback: {
          correct: { title: '✅ Правильно!', text: 'Код из СМС – это одноразовый пароль. Назвав его незнакомцу, ты отдаёшь контроль над своим аккаунтом Госуслуг, к которому привязаны паспорт, СНИЛС, банки и многое другое.', fact: '🌸 Схема «цветочный магазин» – звонок якобы из магазина, чтобы усыпить бдительность' },
          wrong: { title: '❌ Аккаунт угнан!', text: 'Ты продиктовал код – мошенник вошёл в твои Госуслуги. Теперь он может оформить кредит, сменить данные или украсть документы.', fact: '🔐 НИКОГДА не называй коды из СМС – даже «сотрудникам» банка или госслужб' }
        }
      },
      {
        type: 'context',
        variant: 'warn',
        text: '🔍 Разберём, как работает эта схема изнутри.'
      },
      {
        type: 'visual',
        title: 'КАК РАБОТАЕТ СХЕМА',
        lines: [
          { text: '1. Мошенник звонит под предлогом «отмены заказа» или «подтверждения данных»' },
          { text: '2. Запрашивает код из СМС от Госуслуг якобы «для проверки»', hl: 'bad' },
          { text: '3. Использует код для входа в аккаунт жертвы', hl: 'bad' },
          { text: '4. Получает доступ к документам, налогам, кредитной истории', hl: 'bad' },
          { text: '✅ Защита: сбросить звонок, войти на gosuslugi.ru самому и проверить', hl: 'good' },
        ]
      },
      {
        type: 'choice',
        question: 'Если ты уже назвал код – что делать НЕМЕДЛЕННО?',
        choices: [
          { letter: 'А', text: 'Ничего, наверное, само пройдёт', correct: false },
          { letter: 'Б', text: 'Войти на Госуслуги, сменить пароль и сообщить в техподдержку', correct: true },
          { letter: 'В', text: 'Ждать звонка обратно от этого же человека', correct: false },
        ],
        feedback: {
          correct: { title: '✅ Верные действия!', text: 'Немедленно: смени пароль на gosuslugi.ru, включи двухфакторную аутентификацию, проверь историю входов в аккаунт. Сообщи родителям и на горячую линию Госуслуг: 8-800-100-70-10.', fact: '📞 Горячая линия Госуслуг: 8-800-100-70-10 (бесплатно)' },
          wrong: { title: '❌ Каждая минута важна!', text: 'Пока ты ждёшь – мошенник уже в твоём аккаунте. Смени пароль прямо сейчас!', fact: '⏱ За несколько минут мошенник может оформить кредит на твоё имя' }
        }
      }
    ]
  },

  klad: {
    id: 'klad',
    label: 'МИССИЯ 03 · ЗАКЛАДКИ',
    title: 'Лёгкий Клад',
    color: '#b46fff',
    desc: 'В интернете предлагают хорошо заплатить за «раскладку посылок». Это выглядит безобидно – пока не понимаешь, что именно ты раскладываешь.',
    scenes: 5, diff: 'Средний',
    tips: [
      { icon: '🚫', text: 'Раскладка закладок – это соучастие в наркоторговле. Реальный срок от 8 лет.' },
      { icon: '📱', text: 'Вербовщики ищут жертв в играх, Discord, Telegram – везде, где есть подростки.' },
      { icon: '🆘', text: 'Если тебя уже втянули – обратись в полицию или на горячую линию 8-800-2000-122.' },
    ],
    storyboard: [
      {
        type: 'context',
        variant: 'normal',
        text: '🎮 Discord-сервер игры. Тебе пишет новый участник.'
      },
      {
        type: 'messages',
        msgs: [
          { cls: 'scam', sender: 'Stranger228', senderCls: 'bad', text: 'Хей, ты из [твой город]? Есть заработок – 3 000 ₽ в час. Просто раскладывать «посылки» по адресам. Нужен человек рядом с Лесной ул.' },
        ]
      },
      {
        type: 'choice',
        question: 'Что это за «посылки» скорее всего?',
        choices: [
          { letter: 'А', text: 'Курьерская доставка интернет-магазина', correct: false },
          { letter: 'Б', text: 'Наркотики – это вербовка в закладчики', correct: true },
          { letter: 'В', text: 'Листовки или промо-товары', correct: false },
        ],
        feedback: {
          correct: { title: '✅ Верно распознал!', text: 'Схема «закладчик» – человек прячет наркотики в тайниках («закладках»), покупатели находят их по адресам. Вербовщики специально ищут несовершеннолетних, считая, что им дадут меньший срок. Это неправда.', fact: '⚖️ За закладку наркотиков – до 15 лет лишения свободы даже для несовершеннолетних' },
          wrong: { title: '❌ Это ловушка!', text: 'Настоящие курьерские сервисы так не вербуют – через игровые чаты анонимные незнакомцы. Это наркоторговля.', fact: '🚨 Сотни подростков попали за решётку, поверив, что это «просто курьерка»' }
        }
      },
      {
        type: 'context',
        variant: 'danger',
        text: '🚨 Stranger228 продолжает давить.'
      },
      {
        type: 'messages',
        msgs: [
          { cls: 'scam', sender: 'Stranger228', senderCls: 'bad', text: 'Тебе 14? Ты несовершеннолетний, тебе ничего не будет. Один рейс – и у тебя 3 тысячи. Никто не узнает.' },
          { cls: 'scam', sender: 'Stranger228', senderCls: 'bad', text: 'Все так делают. Это просто работа.' },
        ]
      },
      {
        type: 'choice',
        question: 'Что из этого – правда?',
        choices: [
          { letter: 'А', text: 'Несовершеннолетним действительно дают меньше, можно рискнуть', correct: false },
          { letter: 'Б', text: 'Всё – ложь. Несовершеннолетним тоже дают реальные сроки, а вербовщик получит ещё и за вовлечение ребёнка', correct: true },
          { letter: 'В', text: 'Если всего один раз – наверное безопасно', correct: false },
        ],
        feedback: {
          correct: { title: '✅ Отлично!', text: 'Миф о "несовершеннолетии как защите" – это приманка. Суды дают реальные сроки. Вербовщик знает это и специально лжёт, чтобы ты не боялся. Заблокируй, расскажи взрослым или позвони на горячую линию.', fact: '📞 Горячая линия психологической помощи: 8-800-2000-122 (бесплатно, анонимно)' },
          wrong: { title: '❌ Это ложь!', text: 'Мошенник использует твой возраст против тебя. Несовершеннолетние получают реальные сроки в воспитательных колониях. «Один раз» не существует – тебя запишут и будут шантажировать.', fact: '📹 Вербовщики фиксируют первую закладку на фото – потом шантажируют' }
        }
      }
    ]
  },

  terror: {
    id: 'terror',
    label: 'МИССИЯ 04 · ЭКСТРЕМИЗМ',
    title: 'Обиженный герой',
    color: '#ff7043',
    desc: 'Кто-то в сети понимает тебя лучше всех. Жалеет. Называет героем. Но постепенно разговоры становятся опаснее...',
    scenes: 5, diff: 'Сложный',
    tips: [
      { icon: '🧠', text: 'Вербовщики в деструктивные группы сначала «дружат», потом медленно меняют взгляды.' },
      { icon: '🚩', text: 'Красные флаги: «только мы понимаем тебя», «обычные люди – враги», «ты избранный».' },
      { icon: '📢', text: 'Если тебя или друга склоняют к насилию – сообщи в ФСБ: fsb.ru или 8 (800) 224-22-22.' },
    ],
    storyboard: [
      {
        type: 'context',
        variant: 'normal',
        text: '💬 Telegram. Тебе грустно после конфликта в школе. Незнакомец начал переписку.'
      },
      {
        type: 'messages',
        msgs: [
          { cls: 'scam', sender: 'Макс_Правда', senderCls: 'bad', text: 'Видел твой пост. Слушай, я понимаю тебя. Школа – это тюрьма, учителя издеваются, одноклассники не уважают. Я сам через это прошёл.' },
          { cls: 'scam', sender: 'Макс_Правда', senderCls: 'bad', text: 'Ты не один. У нас есть закрытый чат – там настоящие люди, которые не предают.' },
        ]
      },
      {
        type: 'choice',
        question: 'Что настораживает в этом сообщении?',
        choices: [
          { letter: 'А', text: 'Ничего – человек просто хочет помочь', correct: false },
          { letter: 'Б', text: 'Незнакомец читал мои посты и сразу предлагает «закрытое сообщество» – это манипуляция', correct: true },
          { letter: 'В', text: 'Он говорит слишком правильно – наверное это бот', correct: false },
        ],
        feedback: {
          correct: { title: '✅ Хорошая интуиция!', text: 'Вербовщики деструктивных групп используют технику «ловли на боли»: находят людей в уязвимом состоянии и предлагают «понимание». Закрытое сообщество – следующий шаг изоляции.', fact: '🧠 Техника называется love bombing – «бомбардировка любовью» для вербовки' },
          wrong: { title: '⚠️ Будь внимательнее!', text: 'Незнакомец знает твои посты, называет тебя «не одиноким» и зовёт в закрытый чат – это классическая схема вербовки. Настоящие друзья так не действуют.', fact: '🚩 «Закрытое сообщество только для избранных» – красный флаг любой секты или экстремистской группы' }
        }
      },
      {
        type: 'context',
        variant: 'danger',
        text: '🚨 Через 2 недели переписки тон меняется.'
      },
      {
        type: 'messages',
        msgs: [
          { cls: 'scam', sender: 'Макс_Правда', senderCls: 'bad', text: 'Слова ничего не меняют. Настоящий герой действует. История помнит только тех, кто сделал что-то большое.' },
          { cls: 'scam', sender: 'Макс_Правда', senderCls: 'bad', text: 'Есть план. Тебе нужно только быть в нужном месте в нужное время. Ты готов войти в историю?' },
        ]
      },
      {
        type: 'choice',
        question: 'Что нужно сделать ПРЯМО СЕЙЧАС?',
        choices: [
          { letter: 'А', text: 'Уточнить подробности «плана»', correct: false },
          { letter: 'Б', text: 'Немедленно прекратить общение, сохранить скриншоты и сообщить взрослым или в полицию', correct: true },
          { letter: 'В', text: 'Написать в чат, что не согласен, и попробовать переубедить других', correct: false },
        ],
        feedback: {
          correct: { title: '✅ Правильное решение!', text: 'Это уже склонение к совершению насильственного акта. Немедленно: сохрани скриншоты, выйди из чата, расскажи родителям или учителю, сообщи в полицию или ФСБ. Это не предательство – это спасение жизней, в том числе своей.', fact: '📢 Сообщить анонимно в ФСБ: fsb.ru или 8-800-224-22-22 (бесплатно)' },
          wrong: { title: '❌ Опасно!', text: 'Уточнение деталей уже делает тебя потенциально причастным. Не вступай в диалог – выходи и сообщай.', fact: '⚖️ Недонесение о подготовке теракта – уголовная статья. Сообщить – твоя защита.' }
        }
      }
    ]
  },

  bully: {
    id: 'bully',
    label: 'МИССИЯ 05 · КИБЕРБУЛЛИНГ',
    title: 'Кибербуллинг',
    color: '#00e5ff',
    desc: 'Бывший одноклассник начинает давить, угрожать и распространять слухи. Что делать, когда травля переходит в онлайн?',
    scenes: 5, diff: 'Начальный',
    tips: [
      { icon: '📸', text: 'Всегда делай скриншоты угроз – это доказательства.' },
      { icon: '🔕', text: 'Блокировка хулигана – не слабость, а защита своих границ.' },
      { icon: '💬', text: 'Кибербуллинг – это не норма. Расскажи взрослым или психологу.' },
    ],
    storyboard: [
      {
        type: 'context',
        variant: 'normal',
        text: '📸 Instagram. Бывший одноклассник Денис начинает писать тебе агрессивные комментарии.'
      },
      {
        type: 'messages',
        msgs: [
          { cls: 'scam', sender: 'Denis_666', senderCls: 'bad', text: 'хаха смотрите какой лузер. все знают что ты – нытик. твои фоточки – позорище' },
          { cls: 'scam', sender: 'Denis_666', senderCls: 'bad', text: 'если ответишь – скину всем твою переписку с *** 😂 молчи и может оставлю в покое' },
        ]
      },
      {
        type: 'choice',
        question: 'Как лучше всего ответить на это?',
        choices: [
          { letter: 'А', text: 'Ответить агрессивно – показать что не боюсь', correct: false },
          { letter: 'Б', text: 'Сделать скриншот, заблокировать и рассказать родителям или классному руководителю', correct: true },
          { letter: 'В', text: 'Просто игнорировать и надеяться, что само прекратится', correct: false },
        ],
        feedback: {
          correct: { title: '✅ Правильный порядок действий!', text: 'Скриншот = доказательство. Блокировка = защита от дальнейших атак. Взрослый = человек с реальными полномочиями остановить ситуацию. Молчать в одиночестве – худшая стратегия.', fact: '📊 72% жертв кибербуллинга, которые рассказали взрослым, сообщили что ситуация улучшилась' },
          wrong: { title: '⚠️ Так только хуже!', text: 'Агрессивный ответ даёт хулигану то, чего он хочет – реакцию. Молчание не остановит его. Нужны скриншоты и помощь взрослых.', fact: '🚩 Шантаж перепиской – это уже статья 163 УК РФ (вымогательство)' }
        }
      },
      {
        type: 'context',
        variant: 'warn',
        text: '📊 Разберём: что делать если травля продолжается в разных местах?'
      },
      {
        type: 'visual',
        title: 'ПЛАН ДЕЙСТВИЙ ПРИ КИБЕРБУЛЛИНГЕ',
        lines: [
          { text: '1. Не отвечай агрессору – это его питает', hl: 'bad' },
          { text: '2. Сделай скриншоты ВСЕГО – это доказательства', hl: 'good' },
          { text: '3. Заблокируй во всех соцсетях и мессенджерах', hl: 'good' },
          { text: '4. Сообщи о нарушении администрации платформы', hl: 'good' },
          { text: '5. Расскажи родителям или доверенному взрослому', hl: 'good' },
          { text: '6. При угрозах – обратись в полицию', hl: 'good' },
        ]
      },
      {
        type: 'choice',
        question: 'Друг говорит: «не плачься взрослым, сам разберись – иначе слабак». Что ответить?',
        choices: [
          { letter: 'А', text: 'Он прав, надо разобраться самому', correct: false },
          { letter: 'Б', text: 'Рассказать взрослым – не слабость. Это умный способ использовать доступные ресурсы', correct: true },
          { letter: 'В', text: 'Лучше вообще ничего не делать', correct: false },
        ],
        feedback: {
          correct: { title: '✅ Верно!', text: 'Обратиться за помощью – это не слабость, это стратегия. Взрослые могут поговорить с родителями хулигана, школой, полицией – у них есть рычаги, которых нет у тебя. Справляться в одиночку с системной травлей – лишнее страдание.', fact: '💬 Психологическая помощь подросткам: 8-800-2000-122 (бесплатно, круглосуточно)' },
          wrong: { title: '❌ Это не так!', text: 'Кибербуллинг – системная проблема, не личная слабость. Молчание и одиночная борьба только усугубляют ситуацию.', fact: '🧠 Без помощи взрослых кибербуллинг прекращается в 5 раз реже' }
        }
      }
    ]
  },
  crypto: {
    id: 'crypto',
    label: 'МИССИЯ 06 · КРИПТОСКАМ',
    title: 'Легендарный трейдер',
    color: '#667eea',
    desc: 'В Telegram появился канал «Crypto King» — блогер с 800 000 подписчиков, дорогие часы, яхта. Обещает научить зарабатывать на крипте. Твой друг Артём уже готов перевести деньги. Разберись, что здесь не так.',
    scenes: 12, diff: 'Средний',
    tips: [
      { icon: '📉', text: 'Гарантированная доходность выше 20% годовых – признак финансовой пирамиды.' },
      { icon: '🎭', text: 'Фейковые блогеры используют чужие фото и видео. Проверяй личность.' },
      { icon: '💰', text: 'Настоящие инвестиции – через лицензированные брокеры, а не в личные кошельки.' },
    ],
    storyboard: [
      // СЦЕНА 1 — контекст
      {
        type: 'context',
        variant: 'normal',
        text: '📱 Telegram. Твой друг Артём скидывает тебе ссылку на канал «Crypto King» с сообщением: «Смотри, я уже неделю читаю — реально работает! Хочу вложить накопленные 10 000 ₽».'
      },
      // СЦЕНА 2 — диалог с другом
      {
        type: 'messages',
        msgs: [
          { cls: 'them', sender: 'Артём', senderCls: 'neutral', text: 'Чел, глянь этот канал. Там чувак реально крутой — Алекс Волков. Говорит, его ученики зарабатывают по 50 000 ₽ в день.' },
          { cls: 'me', sender: 'Ты', senderCls: 'neutral', text: 'Хм. И сколько стоит попасть к нему «в обучение»?' },
          { cls: 'them', sender: 'Артём', senderCls: 'neutral', text: 'Сейчас акция — всего 10 000 ₽. Но только 2 часа! Потом цена вырастет до 50 000 ₽.' },
          { cls: 'me', sender: 'Ты', senderCls: 'neutral', text: 'Погоди, не торопись. Давай сначала разберёмся что это вообще такое...' },
        ]
      },
      // СЦЕНА 3 — визуал канала
      {
        type: 'visual',
        title: 'СКРИНШОТ КАНАЛА · TELEGRAM',
        lines: [
          { text: '🚀 CRYPTO KING — ТВОЙ ПУТЬ К СВОБОДЕ!', hl: 'warn' },
          { text: '📊 Мои ученики зарабатывают от 50 000 ₽ в день!', hl: 'bad' },
          { text: '💎 Закрытый клуб — всего 50 мест по 10 000 ₽', hl: 'bad' },
          { text: '⏰ Через 2 часа цена вырастет до 50 000 ₽! Успей!', hl: 'bad' },
          { text: '💳 Перевод на карту: 2200-ХXXX-XXXX-XXXX (Алексей К.)', hl: 'bad' },
        ]
      },
      // СЦЕНА 4 — вопрос по каналу
      {
        type: 'choice',
        question: 'Что настораживает в этом канале больше всего?',
        choices: [
          { letter: 'А', text: 'Ничего — раз 800 000 подписчиков, значит надёжный', correct: false },
          { letter: 'Б', text: 'Перевод на личную карту, искусственный дедлайн и нереальные проценты — это классические признаки скама', correct: true },
          { letter: 'В', text: 'Цена слишком низкая — настоящее обучение должно стоить дороже', correct: false },
        ],
        feedback: {
          correct: { title: '✅ Ты видишь красные флаги!', text: 'Три главных признака: (1) перевод на личную карту физлица вместо юрлица, (2) искусственный дедлайн «только 2 часа» — давление на импульс, (3) гарантированная доходность — математически невозможна без огромного риска.', fact: '📊 Средняя реальная доходность фондового рынка — 10–15% годовых. Всё что выше — высокий риск или скам' },
          wrong: { title: '❌ Это классическая схема!', text: 'Количество подписчиков легко накрутить — ботов покупают тысячами. Перевод на личную карту, дедлайн «через 2 часа» и нереальные обещания — три главных сигнала тревоги.', fact: '🎭 10 000 ботов-подписчиков в Telegram стоят около 3 000 ₽ — меньше твоих сбережений' }
        }
      },
      // СЦЕНА 5 — давление от Артёма
      {
        type: 'context',
        variant: 'warn',
        text: '⏰ Артём нервничает — таймер обратного отсчёта в канале уже показывает 1:45:00.'
      },
      {
        type: 'messages',
        msgs: [
          { cls: 'them', sender: 'Артём', senderCls: 'neutral', text: 'Ну чё ты, думаешь слишком долго! Таймер уже тикает, осталось меньше двух часов!' },
          { cls: 'me', sender: 'Ты', senderCls: 'neutral', text: 'Именно поэтому я и не тороплюсь. Когда тебя торопят — это плохой знак.' },
          { cls: 'them', sender: 'Артём', senderCls: 'neutral', text: 'Ну а вдруг реально работает? Отзывы же есть — люди пишут что зарабатывают!' },
          { cls: 'scam', sender: 'Crypto King', senderCls: 'bad', text: '🔥 Осталось 3 места! Алина только что вошла в клуб и уже получила первые 8 000 ₽ сигнал работает! Кто следующий?' },
        ]
      },
      // СЦЕНА 6 — вопрос про давление
      {
        type: 'choice',
        question: 'Артём говорит: «Отзывы же есть — значит работает!» Как ему объяснить?',
        choices: [
          { letter: 'А', text: 'Он прав — если люди пишут положительно, значит проверено', correct: false },
          { letter: 'Б', text: 'Отзывы в скам-каналах пишут боты или сами организаторы. Настоящие отзывы надо искать на независимых сайтах', correct: true },
          { letter: 'В', text: 'Надо написать напрямую «Алине» и спросить её', correct: false },
        ],
        feedback: {
          correct: { title: '✅ Правильно мыслишь!', text: 'В мошеннических каналах «счастливые клиенты» — это боты или подставные аккаунты. Настоящую репутацию ищут на независимых отзовиках (Trustpilot, Banki.ru), проверяют лицензию ЦБ РФ, ищут упоминания в СМИ.', fact: '🤖 80% «положительных отзывов» в крипто-каналах написаны ботами или за вознаграждение' },
          wrong: { title: '⚠️ Осторожно!', text: '«Алина» — это либо бот, либо соучастник схемы. Прямой контакт с подставным персонажем только убедит Артёма перевести деньги. Ищи независимые источники.', fact: '🎭 Мошенники заранее создают десятки аккаунтов «довольных клиентов» для видимости доверия' }
        }
      },
      // СЦЕНА 7 — проверка информации
      {
        type: 'context',
        variant: 'normal',
        text: '🔍 Ты решаете проверить «Алекса Волкова» вместе с Артёмом. Открываете поиск по фото и реестр ЦБ РФ.'
      },
      {
        type: 'visual',
        title: 'ЧТО ВЫ НАШЛИ ПРИ ПРОВЕРКЕ',
        lines: [
          { text: '• Фото «трейдера» найдено на фотостоке за $5 — это не Алекс Волков', hl: 'bad' },
          { text: '• Канал создан 3 недели назад, до этого продавал «курсы по похудению»', hl: 'bad' },
          { text: '• Все 800K подписчиков накручены — реальный охват постов 200–300 человек', hl: 'bad' },
          { text: '• В реестре лицензированных брокеров ЦБ РФ — не найден', hl: 'bad' },
          { text: '• На Trustpilot: 47 жалоб за последний месяц. «Взяли деньги и пропали»', hl: 'bad' },
          { text: '✅ Вывод: организованная группа мошенников', hl: 'good' },
        ]
      },
      // СЦЕНА 8 — реакция Артёма
      {
        type: 'messages',
        msgs: [
          { cls: 'them', sender: 'Артём', senderCls: 'neutral', text: 'Не может быть... Я так верил. Я уже почти перевёл деньги.' },
          { cls: 'me', sender: 'Ты', senderCls: 'neutral', text: 'Хорошо что не успел. Смотри — вот скриншот фотостока с этим же фото.' },
          { cls: 'them', sender: 'Артём', senderCls: 'neutral', text: 'И правда... Значит всё что он говорил — ложь? А как вообще отличить настоящего от фейка?' },
        ]
      },
      // СЦЕНА 9 — вопрос как отличить
      {
        type: 'choice',
        question: 'Как отличить реального инвестиционного эксперта от мошенника?',
        choices: [
          { letter: 'А', text: 'По количеству подписчиков и красивым фото с яхтой', correct: false },
          { letter: 'Б', text: 'Проверить лицензию ЦБ РФ, найти реальное юрлицо и независимые отзывы — и никаких переводов на личные карты', correct: true },
          { letter: 'В', text: 'Попросить сначала маленькую бесплатную консультацию', correct: false },
        ],
        feedback: {
          correct: { title: '✅ Это правильный алгоритм!', text: 'Чеклист проверки: (1) лицензия ЦБ РФ на сайте cbr.ru, (2) реальное юрлицо с ИНН, (3) отзывы на независимых площадках, (4) оплата через официальный счёт — никогда на личную карту, (5) никаких «гарантий» доходности.', fact: '🔒 Проверить лицензию брокера можно бесплатно на cbr.ru/financial_services_registry' },
          wrong: { title: '❌ Эти признаки ничего не значат!', text: 'Яхты и часы на фото — реквизит, арендованный на час. Подписчики накручиваются за копейки. Бесплатная консультация — ещё один крючок для втягивания. Только лицензия ЦБ и юрлицо имеют значение.', fact: '💸 Аренда яхты для фотосессии стоит от 5 000 ₽ в час — небольшие вложения для мошенника' }
        }
      },
      // СЦЕНА 10 — неожиданный поворот
      {
        type: 'context',
        variant: 'danger',
        text: '🚨 Пока вы разбирались, однокласснику Диме написал сам «Алекс» в личку.'
      },
      {
        type: 'messages',
        msgs: [
          { cls: 'scam', sender: 'Алекс Волков (Crypto King)', senderCls: 'bad', text: 'Привет! Я вижу ты давно следишь за каналом. Хочу предложить тебе лично — стать моим партнёром. Привлекай друзей, получай 20% с каждого.' },
          { cls: 'scam', sender: 'Алекс Волков (Crypto King)', senderCls: 'bad', text: 'Тебе ничего не нужно вкладывать — просто скинь ссылку на канал 5 друзьям. Первые 3 реферала и ты уже в плюсе.' },
          { cls: 'them', sender: 'Дима', senderCls: 'neutral', text: 'Ребят, смотрите — мне написал сам Алекс! Говорит можно зарабатывать не вкладывая ничего!' },
        ]
      },
      // СЦЕНА 11 — финальный выбор
      {
        type: 'choice',
        question: 'Дима думает стать «партнёром» и распространять ссылку. Что ему грозит?',
        choices: [
          { letter: 'А', text: 'Ничего — он же сам ничего не вкладывает', correct: false },
          { letter: 'Б', text: 'Он станет невольным соучастником мошенничества и может понести ответственность за вовлечение других', correct: true },
          { letter: 'В', text: 'Максимум — просто потратит время впустую', correct: false },
        ],
        feedback: {
          correct: { title: '✅ Именно!', text: 'Реферальная система в финансовой пирамиде делает тебя распространителем мошеннической схемы. Даже без вложений — ты вредишь реальным людям. В ряде случаев это квалифицируется как мошенничество (ст. 159 УК РФ). Дима должен заблокировать «Алекса» и предупредить друзей.', fact: '⚖️ Участие в реферальной сети финансовой пирамиды может быть признано соучастием в мошенничестве' },
          wrong: { title: '❌ Это серьёзно!', text: 'Рассылая ссылку, Дима заманивает реальных людей в ловушку. Если те потеряют деньги — он несёт моральную и потенциально юридическую ответственность. «Я не знал» — не защита в суде.', fact: '📢 Жертвы финансовых пирамид вправе подавать иски против всех участников цепочки' }
        }
      },
      // СЦЕНА 12 — статистика
      {
        type: 'visual',
        title: 'КРИПТО-СКАМ В ЦИФРАХ · 2024',
        lines: [
          { text: '📉 Потери россиян от крипто-скама: более 12 млрд ₽ за год', hl: 'bad' },
          { text: '👥 Типичная жертва: подросток или молодёжь 14–25 лет', hl: 'bad' },
          { text: '🎣 89% схем начинаются в Telegram или Instagram', hl: 'bad' },
          { text: '⏱ Среднее время вывода денег мошенниками: 2–4 часа', hl: 'bad' },
          { text: '✅ Защита: cbr.ru — проверь лицензию перед любым вложением', hl: 'good' },
          { text: '✅ Заявление о мошенничестве: МВД.РФ или Госуслуги', hl: 'good' },
        ]
      }
    ]
  }
};

const MISSION_ORDER = ['dropper', 'gosuslugi', 'klad', 'terror', 'bully', 'crypto'];

let state = {
  currentMission: null,
  currentScene: 0,
  missionScore: 0,
  totalScore: 0,
  totalChoices: 0,
  correctChoices: 0,
  selectedModal: null,
  completedMissions: [],
  maxPossibleScore: 0
};

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById('screen-' + id).classList.add('active');
}

function goHome() { 
  showScreen('home'); 
}

function startMission(missionId) {
  const m = MISSIONS[missionId];
  state.currentMission = missionId;
  state.currentScene = 0;
  state.missionScore = 0;
  state.totalChoices = 0;
  state.correctChoices = 0;
  state.maxPossibleScore = 0;
  m.storyboard.forEach(scene => {
    if (scene.type === 'choice') {
      state.maxPossibleScore += 100;
    }
  });
  document.getElementById('topbar-mission-label').textContent = m.label;
  document.getElementById('topbar-mission-title').textContent = m.title;
  document.getElementById('mission-score-display').textContent = '0';
  document.getElementById('total-score-display').textContent = state.totalScore;
  renderMission(m);
  showScreen('game');
  updateProgress(0, m.storyboard.length);
}

function openModal(missionId) {
  const m = MISSIONS[missionId];
  state.selectedModal = missionId;
  document.getElementById('modal-tag').textContent = m.label;
  document.getElementById('modal-tag').style.color = m.color;
  document.getElementById('modal-title').textContent = m.title;
  document.getElementById('modal-desc').textContent = m.desc;
  document.getElementById('modal-scenes').textContent = `${m.scenes} сцен`;
  document.getElementById('modal-diff').textContent = `Уровень: ${m.diff}`;
  document.getElementById('modal-play-btn').style.background = m.color;
  document.getElementById('modal-play-btn').style.color = '#0a0d14';
  document.getElementById('modal-overlay').classList.add('open');
}

function closeModal() {
  document.getElementById('modal-overlay').classList.remove('open');
}

document.getElementById('modal-play-btn').addEventListener('click', () => {
  closeModal();
  startMission(state.selectedModal);
});

function renderMission(mission) {
  const container = document.getElementById('scenes-container');
  container.innerHTML = '';

  mission.storyboard.forEach((scene, idx) => {
    const div = document.createElement('div');
    div.className = 'scene' + (idx === 0 ? ' active' : '');
    div.id = `scene-${idx}`;
    div.innerHTML = buildScene(scene, idx, mission);
    container.appendChild(div);
  });
}

function buildScene(scene, idx, mission) {
  let html = '';

  if (scene.type === 'context') {
    html += `<div class="scene-context ${scene.variant === 'warn' ? 'warn' : scene.variant === 'danger' ? 'danger' : ''}">
      ${scene.text}
    </div>`;
    html += nextBtn(idx, mission);
  }

  if (scene.type === 'messages') {
    html += `<div class="messages">`;
    scene.msgs.forEach(msg => {
      html += `<div class="msg ${msg.cls}">
        ${msg.sender ? `<div class="msg-sender ${msg.senderCls}">${msg.sender}</div>` : ''}
        ${msg.text}
      </div>`;
    });
    html += `</div>`;
    html += nextBtn(idx, mission);
  }

  if (scene.type === 'visual') {
    let imageHtml = '';
    if (scene.image) {
      imageHtml = `<div style="margin-bottom:16px; border-radius:12px; overflow:hidden; border:1px solid var(--border);">
        <img src="${scene.image}" alt="${scene.title}" style="width:100%; height:auto; display:block;">
      </div>`;
    }
    html += `<div class="scene-visual">
      <div class="visual-header">
        <div class="dot r"></div><div class="dot y"></div><div class="dot g"></div>
        <span>${scene.title}</span>
      </div>
      <div class="visual-body">` + imageHtml;
    scene.lines.forEach(line => {
      if (line.hl === 'bad') html += `<div style="margin-bottom:8px">👉 <span class="highlight">${line.text}</span></div>`;
      else if (line.hl === 'good') html += `<div style="margin-bottom:8px">👉 <span class="highlight hl-good">${line.text}</span></div>`;
      else if (line.hl === 'warn') html += `<div style="margin-bottom:8px">👉 <span class="highlight hl-warn">${line.text}</span></div>`;
      else html += `<div style="margin-bottom:8px; color:var(--muted)">${line.text}</div>`;
    });
    html += `</div></div>`;
    html += nextBtn(idx, mission);
  }

  if (scene.type === 'choice') {
    html += `<div class="messages"><div class="msg system">❓ ${scene.question}</div></div>`;
    html += `<div class="choices" id="choices-${idx}">`;
    scene.choices.forEach((c, ci) => {
      html += `<button class="choice-btn" onclick="handleChoice(${idx}, ${ci}, ${c.correct}, '${mission.id}')" id="choice-${idx}-${ci}">
        <span class="choice-letter">${c.letter}</span>
        <span>${c.text}</span>
      </button>`;
    });
    html += `</div>`;
    html += `<div class="feedback-box" id="feedback-${idx}">
      <div class="feedback-title" id="fb-title-${idx}"></div>
      <div class="feedback-text" id="fb-text-${idx}"></div>
      <div class="fact-pill" id="fb-fact-${idx}"></div>
      ${idx < mission.storyboard.length - 1
        ? `<button class="btn-next" onclick="advanceScene(${idx + 1}, ${mission.storyboard.length})">Далее →</button>`
        : `<button class="btn-next" onclick="finishMission('${mission.id}')">Завершить миссию 🏁</button>`
      }
    </div>`;
  }

  return html;
}

function nextBtn(idx, mission) {
  const isLast = idx === mission.storyboard.length - 1;
  if (isLast) return `<button class="btn-next" onclick="finishMission('${mission.id}')">Завершить миссию 🏁</button>`;
  return `<button class="btn-next" onclick="advanceScene(${idx + 1}, ${mission.storyboard.length})">Далее →</button>`;
}

function handleChoice(sceneIdx, choiceIdx, isCorrect, missionId) {
  const mission = MISSIONS[missionId];
  const scene = mission.storyboard[sceneIdx];
  const btns = document.querySelectorAll(`#choices-${sceneIdx} .choice-btn`);
  btns.forEach(b => b.disabled = true);
  document.getElementById(`choice-${sceneIdx}-${choiceIdx}`).classList.add(isCorrect ? 'correct' : 'wrong');
  if (!isCorrect) {
    scene.choices.forEach((c, ci) => {
      if (c.correct) document.getElementById(`choice-${sceneIdx}-${ci}`).classList.add('correct');
    });
  }
  state.totalChoices++;
  if (isCorrect) {
    state.correctChoices++;
    state.missionScore += 100;
    document.getElementById('mission-score-display').textContent = state.missionScore;
  }
  const fb = isCorrect ? scene.feedback.correct : scene.feedback.wrong;
  const fbBox = document.getElementById(`feedback-${sceneIdx}`);
  fbBox.classList.add('show', isCorrect ? 'good' : 'bad');
  document.getElementById(`fb-title-${sceneIdx}`).textContent = fb.title;
  document.getElementById(`fb-text-${sceneIdx}`).textContent = fb.text;
  document.getElementById(`fb-fact-${sceneIdx}`).textContent = fb.fact;
}

function advanceScene(nextIdx, total) {
  document.querySelectorAll('.scene').forEach(s => s.classList.remove('active'));
  const next = document.getElementById(`scene-${nextIdx}`);
  if (next) {
    next.classList.add('active');
    next.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  updateProgress(nextIdx, total);
}

function updateProgress(current, total) {
  const pct = total > 1 ? (current / (total - 1)) * 100 : 100;
  document.getElementById('progress-fill').style.width = pct + '%';
}

function finishMission(missionId) {
  const mission = MISSIONS[missionId];
  const pct = state.totalChoices > 0 ? Math.round((state.correctChoices / state.totalChoices) * 100) : 100;
  state.totalScore += state.missionScore;
  state.completedMissions.push({ id: missionId, score: state.missionScore, maxScore: state.maxPossibleScore });
  let emoji, title;
  if (pct === 100) { emoji = '🏆'; title = 'Мастер безопасности!'; }
  else if (pct >= 60) { emoji = '✅'; title = 'Хорошая работа!'; }
  else { emoji = '📚'; title = 'Есть что изучить'; }
  document.getElementById('result-emoji').textContent = emoji;
  document.getElementById('result-title').textContent = title;
  document.getElementById('result-score-num').textContent = state.totalScore + ' (+' + state.missionScore + ' в этой миссии)';

  const tipsHtml = `
    <h3>🛡 Запомни на будущее</h3>
    ${mission.tips.map(t => `
      <div class="tip-item">
        <span class="tip-icon">${t.icon}</span>
        <span>${t.text}</span>
      </div>
    `).join('')}
  `;
  document.getElementById('result-tips').innerHTML = tipsHtml;
  const curIdx = MISSION_ORDER.indexOf(missionId);
  const nextBtn = document.getElementById('btn-next-mission');
  if (curIdx < MISSION_ORDER.length - 1) {
    const nextId = MISSION_ORDER[curIdx + 1];
    nextBtn.style.display = 'inline-block';
    nextBtn.textContent = 'Следующая миссия →';
    nextBtn.dataset.next = nextId;
    nextBtn.onclick = nextMission;
  } else {
    nextBtn.style.display = 'inline-block';
    nextBtn.textContent = '🏁 Итоги игры';
    nextBtn.onclick = showFinalResults;
  }
  showScreen('result');
}

function nextMission() {
  const nextId = document.getElementById('btn-next-mission').dataset.next;
  if (nextId) openModal(nextId);
  else goHome();
}

function showFinalResults() {
  const totalMaxScore = state.completedMissions.reduce((sum, m) => sum + m.maxScore, 0);
  const percentage = totalMaxScore > 0 ? Math.round((state.totalScore / totalMaxScore) * 100) : 0;
  
  let emoji, title, message;
  if (percentage >= 90) { 
    emoji = '🏆'; 
    title = 'ЛЕГЕНДАРНЫЙ ЗАЩИТНИК!'; 
    message = 'Ты прошёл все миссии с блестящим результатом! Теперь ты настоящий эксперт по цифровой безопасности.';
  } else if (percentage >= 70) { 
    emoji = '🥈'; 
    title = 'ОПЫТНЫЙ БОЕЦ!'; 
    message = 'Отличная работа! Ты хорошо разбираешься в основах безопасности, но есть куда расти.';
  } else if (percentage >= 50) { 
    emoji = '🥉'; 
    title = 'НАЧИНАЮЩИЙ ЗАЩИТНИК'; 
    message = 'Неплохо! Но стоит ещё раз пройти некоторые миссии и запомнить правила безопасности.';
  } else { 
    emoji = '📚'; 
    title = 'УЧИСЬ И ЗАЩИЩАЙСЯ'; 
    message = 'Рекомендуем пройти миссии ещё раз. Знания о безопасности могут спасти тебя от реальных мошенников!';
  }
  
  document.getElementById('result-emoji').textContent = emoji;
  document.getElementById('result-title').textContent = title;
  
  let breakdownHtml = `<p style="font-size: 1rem; color: var(--text); margin-bottom: 20px;">${message}</p>`;
  breakdownHtml += `<div style="background: var(--surface2); border-radius: 12px; padding: 20px; margin-bottom: 20px;">`;
  breakdownHtml += `<div style="font-family: var(--font-head); font-size: 1.5rem; color: var(--accent3); margin-bottom: 10px;">${state.totalScore} / ${totalMaxScore} очков</div>`;
  breakdownHtml += `<div style="font-size: 0.9rem; color: var(--muted);">Общий результат: ${percentage}%</div>`;
  breakdownHtml += `</div>`;
  
  breakdownHtml += `<div style="text-align: left; margin-bottom: 20px;">`;
  breakdownHtml += `<h4 style="font-family: var(--font-head); font-size: 0.85rem; color: var(--accent); margin-bottom: 12px; text-transform: uppercase;">Результаты по миссиям:</h4>`;
  state.completedMissions.forEach((m, idx) => {
    const mInfo = MISSIONS[m.id];
    const mPct = m.maxScore > 0 ? Math.round((m.score / m.maxScore) * 100) : 0;
    breakdownHtml += `
      <div style="display: flex; justify-content: space-between; align-items: center; padding: 10px 0; border-bottom: 1px solid var(--border);">
        <span style="font-size: 0.85rem; color: var(--text);">${idx + 1}. ${mInfo.title}</span>
        <span style="font-family: var(--font-head); font-size: 0.85rem; color: ${mPct >= 80 ? 'var(--good)' : mPct >= 50 ? 'var(--accent3)' : 'var(--bad)'};">${m.score}/${m.maxScore} (${mPct}%)</span>
      </div>
    `;
  });
  breakdownHtml += `</div>`;
  
  document.getElementById('result-tips').innerHTML = breakdownHtml;
  
  const nextBtn = document.getElementById('btn-next-mission');
  nextBtn.style.display = 'inline-block';
  nextBtn.textContent = '🔄 Пройти заново';
  nextBtn.onclick = resetGame;
  
  showScreen('result');
}

function resetGame() {
  state.totalScore = 0;
  state.completedMissions = [];
  document.getElementById('total-score-display').textContent = '0';
  goHome();
}

document.getElementById('modal-overlay').addEventListener('click', (e) => {
  if (e.target === document.getElementById('modal-overlay')) closeModal();
});