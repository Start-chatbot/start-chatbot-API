const config = require("config");
const api = require("vk-easy");

const mainKeyboard = JSON.stringify({
  one_time: false,
  buttons: [
    [
      {
        action: {
          type: "text",
          payload: '{"button": "1.2"}',
          label: "Зачем нужен чат-бот?"
        },
        color: "primary"
      }
    ],
    [
      {
        action: {
          type: "text",
          payload: '{"button": "1.3"}',
          label: "Сколько стоит чат-бот?"
        },
        color: "default"
      }
    ],
    [
      {
        action: {
          type: "text",
          payload: '{"button": "1.4"}',
          label: "Другие соц. сети."
        },
        color: "primary"
      }
    ],
    [
      {
        action: {
          type: "text",
          payload: '{"button": "1.5"}',
          label: "Заказать чат-бот."
        },
        color: "positive"
      }
    ]
  ]
});

const whyKeyboard = JSON.stringify({
  one_time: false,
  buttons: [
    [
      {
        action: {
          type: "text",
          payload: '{"button": "2.1"}',
          label: "Часто задаваемые вопросы"
        },
        color: "positive"
      }
    ],
    [
      {
        action: {
          type: "text",
          payload: '{"button": "2.2"}',
          label: "Прайс-лист"
        },
        color: "positive"
      }
    ],
    [
      {
        action: {
          type: "text",
          payload: '{"button": "2.25"}',
          label: "Рассылки сообщений."
        },
        color: "primary"
      }
    ],
    [
      {
        action: {
          type: "text",
          payload: '{"button": "2.4"}',
          label: "И многое другое"
        },
        color: "positive"
      }
    ],
    [
      {
        action: {
          type: "text",
          payload: '{"button": "2.5"}',
          label: "На главную."
        },
        color: "default"
      }
    ]
  ]
});

const priceKeyboard = JSON.stringify({
  one_time: false,
  buttons: [
    [
      {
        action: {
          type: "text",
          payload: '{"button": "4.1"}',
          label: "Текстовые команды"
        },
        color: "primary"
      }
    ],
    [
      {
        action: {
          type: "text",
          payload: '{"button": "4.2"}',
          label: "Кнопки"
        },
        color: "primary"
      }
    ],
    [
      {
        action: {
          type: "text",
          payload: '{"button": "4.3"}',
          label: "Подключение к Вашим сервисам"
        },
        color: "primary"
      }
    ],
    [
      {
        action: {
          type: "text",
          payload: '{"button": "4.4"}',
          label: "Нестандартные решения"
        },
        color: "primary"
      }
    ],
    [
      {
        action: {
          type: "text",
          payload: '{"button": "4.5"}',
          label: "И другое"
        },
        color: "primary"
      }
    ],
    [
      {
        action: {
          type: "text",
          payload: '{"button": "3.2"}',
          label: "На главную"
        },
        color: "default"
      }
    ]
  ]
});

const buyKeyboard = JSON.stringify({
  one_time: false,
  buttons: [
    [
      {
        action: {
          type: "text",
          payload: '{"button": "3.1"}',
          label: "Оставить заявку."
        },
        color: "positive"
      }
    ],
    [
      {
        action: {
          type: "text",
          payload: '{"button": "3.2"}',
          label: "На главную"
        },
        color: "default"
      }
    ]
  ]
});

module.exports = (userId, message, button) => {
  switch (button) {
    case 1.2:
      send(
        userId,
        "У бота множество применений. Используйте кнопки, чтобы узнать подробнее.🙂",
        whyKeyboard
      );
      break;

    case 1.3:
      send(
        userId,
        "Цена на разработку чат-бота индивидуальна для каждого проекта. \n\n" +
          "Чтобы рассчет стоимости был быстрее и точнее, необходимо составить техническое задание," +
          "которое опишет функционал необходимого Вам чат-бота.\n\n" +
          "Используйте кнопки, чтобы узнать, от чего зависит стоимость разработки 🙂",
        priceKeyboard
      );
      break;

    case 1.4:
      send(
        userId,
        "Мы разработаем чат-бот для VK , Facebook и Telegramm , а так же для любой другой интересующей вас соц. сети.\n\n" +
          "Сейчас мы ведем разработку нашего чат-бота в Facebook , чтобы показать вам возможности, которые дает эта платформа.\n\n" +
          "Каждая соц. сеть по-своему уникальна и нацелена на свою аудиторию 🙂",
        mainKeyboard
      );
      break;

    case 1.5:
      send(
        userId,
        "Чтобы заказать чат-бот , просто нажмите 'Оставить заявку.' и мы свяжемся с вами 🙂",
        buyKeyboard
      );
      break;

    case 2.1:
      send(
        userId,
        "Избавьтесь от необходимости многократно отвечать на однотипные вопросы клиентов.\n\n" +
          "Оформите частозадаваемые вопросы в кнопки чат-бота.\n\n" +
          "Чат-бот не совершит ошибку и всем ответит именно так, как вы считаете нужным. 🙂",
        whyKeyboard
      );
      break;

    case 2.2:
      send(
        userId,
        "Создайте интерактивный прайс-лист в Вашем чат-боте.\n\n" +
          "Разместите ваши товары или услуги на кнопках чат-бота и сообщайте актуальные расценки при нажатии на них. 🙂",
        whyKeyboard
      );
      break;

    case 2.25:
      send(
        userId,
        "Оповещайте своих подписчиков о новостях, акциях и любой необходимой информации.\n\n" +
          "С помощью чат-бота вы сможете отправлять сообщения сразу всем Вашим подписчикам. 🙂",
        whyKeyboard
      );
      break;

    case 2.4:
      send(
        userId,
        "У чат-ботов гораздо больше применений, чем может показаться.\n\n" +
          "Функционал чат-ботов ограничивается только вашим воображением. 🙂\n\n",
        whyKeyboard
      );
      break;

    case 3.1:
      send(80427018, "заявка от https://vk.com/id" + userId, mainKeyboard);
      send(userId, "Заявка отправлена 🙂 \n\nГлавное меню", mainKeyboard);
      break;

    case 3.2:
    case 2.5:
      send(userId, "Главное меню", mainKeyboard);
      break;

    case 4.1:
      send(
        userId,
        "Текстовые команды - это ключевые слова, получив которые Ваш чат-бот будет совершать определенне действия. \n\n" +
          "Количество, разнообразие команд и операции, которые должен совершать чат-бот являются одним из ценообразующих факторов. 🙂",
        priceKeyboard
      );
      break;

    case 4.2:
      send(
        userId,
        "Кнопки - крайне удобное и современное решение для чат-ботов вконтакте.\n\n" +
          "По сути кнопки - это те же текстовые команды, но оформленные гораздо более удобным и интуитивным образом. 🙂",
        priceKeyboard
      );
      break;

    case 4.3:
      send(
        userId,
        "Если у Вас есть свои онлайн-сервисы, сайты, базы данных, к ним можно подключиться и использовать в чат-боте.\n\n" +
          "Напрмер, если у Вас есть интернет-магазин со списком товаров, можно выводить этот список в чат-боте с ценами и скидками. 🙂",
        priceKeyboard
      );
      break;

    case 4.4:
      send(
        userId,
        "Подключение к сторонним сервисам, обработка специфических данных или " +
          "любые времязатратные нестандартные решения так же являются одним из ценообразующих факторов разработки. 🙂",
        priceKeyboard
      );
      break;

    case 4.5:
      send(
        userId,
        "Функционал чат-бота безграничен и может удовлетворить потребности любого бизнесса. \n\n" +
          "Чат-бот - это программный продукт, что делает его требовательным к точной постановке задач.🙂\n\n" +
          "Постарайтесь хорошо осознать и сформулировать требования к вашему чат-боту и он будет исполнен максимально качественно и быстро. 🙂",
        priceKeyboard
      );
      break;

    case 0:
      send(userId, "Воспользуйся кнопками для получения информации 🙂", mainKeyboard);
      break;
  }

  function send(userId, message, keyboard) {
    api("messages.send", {
      user_id: userId,
      message: message,
      access_token: config.vk.access_token,
      keyboard
    });
  }
};
