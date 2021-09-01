require("dotenv").config();

module.exports = () => [
  {
    type: "flex",
    altText: "ติดต่อเรา",
    contents: {
      type: "bubble",
      hero: {
        type: "image",
        url: "https://firebasestorage.googleapis.com/v0/b/adaralinebot-wkyk.appspot.com/o/logo.jpg?alt=media&token=1e8a9738-b7bb-4d72-b82c-2c345878f726",
        size: "full",
        aspectRatio: "20:13",
        aspectMode: "cover",
        action: {
          type: "uri",
          label: "Line",
          uri: "https://linecorp.com/",
        },
      },
      body: {
        type: "box",
        layout: "vertical",
        contents: [
          {
            type: "text",
            text: "Adara Beauty [Thailand]",
            weight: "bold",
            size: "xl",
            contents: [],
          },
          {
            type: "box",
            layout: "vertical",
            spacing: "sm",
            margin: "lg",
            contents: [
              {
                type: "box",
                layout: "baseline",
                spacing: "sm",
                contents: [
                  {
                    type: "text",
                    text: "เวลา",
                    size: "sm",
                    color: "#AAAAAA",
                    flex: 1,
                    contents: [],
                  },
                  {
                    type: "text",
                    text: "09:00 - 18:00",
                    size: "sm",
                    color: "#666666",
                    flex: 5,
                    wrap: true,
                    contents: [],
                  },
                ],
              },
            ],
          },
        ],
      },
      footer: {
        type: "box",
        layout: "vertical",
        flex: 0,
        spacing: "md",
        contents: [
          {
            type: "button",
            action: {
              type: "uri",
              label: "Adara Website",
              uri: "https://adarathailand.makewebeasy.co/contactus",
            },
            color: "#FF5757FF",
            height: "sm",
            style: "primary",
          },
          {
            type: "button",
            action: {
              type: "uri",
              label: "Instargram",
              uri: "https://www.instagram.com/adarath_official/",
            },
            color: "#FF5757C6",
            height: "sm",
            style: "primary",
          },
          {
            type: "button",
            action: {
              type: "uri",
              label: "Facebook",
              uri: "https://www.facebook.com/AdaraBeautyThailand",
            },
            color: "#FF5757A5",
            height: "sm",
            style: "primary",
          },
          {
            type: "button",
            action: {
              type: "message",
              label: "เบอร์ติดต่อ",
              text: "ขอเบอร์ติดต่อ",
            },
            color: "#FF575763",
            height: "sm",
            style: "primary",
          },
          {
            type: "spacer",
            size: "sm",
          },
        ],
      },
    },
    quickReply: {
      items: [
        {
          type: "action",
          action: {
            type: "message",
            label: "รายการสินค้า",
            text: "รายการสินค้า",
          },
        },
        {
          type: "action",
          action: {
            type: "message",
            label: "โปรโมชั่น",
            text: "โปรโมชั่น",
          },
        },
        {
          type: "action",
          action: {
            type: "message",
            label: "ติดต่อเรา",
            text: "ติดต่อเรา",
          },
        },
      ],
    },
  },
];
