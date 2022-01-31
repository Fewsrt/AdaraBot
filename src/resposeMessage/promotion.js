require("dotenv").config();
module.exports = () => [
  {
    type: "flex",
    altText: "โปรโมชั่น",
    contents: {
      type: "bubble",
      hero: {
        type: "image",
        url: "https://firebasestorage.googleapis.com/v0/b/adaralinebot-wkyk.appspot.com/o/1.jpg?alt=media&token=6699b3bb-dd5d-49f2-a69a-9e70fe275334",
        size: "full",
        aspectRatio: "5:5",
        aspectMode: "cover",
      },
      body: {
        type: "box",
        layout: "vertical",
        spacing: "sm",
        contents: [
          {
            type: "text",
            text: "GLU COLLA",
            weight: "bold",
            size: "xl",
            wrap: true,
            contents: [],
          },
          // {
          //   type: "text",
          //   text: "[PRE-ORDER]",
          //   color: "#FF0000FF",
          //   contents: [],
          // },
          {
            type: "box",
            layout: "baseline",
            flex: 1,
            contents: [
              {
                type: "text",
                text: "690 บาท",
                weight: "bold",
                size: "xl",
                flex: 0,
                align: "start",
                wrap: true,
                contents: [],
              },
            ],
          },
        ],
      },
      footer: {
        type: "box",
        layout: "vertical",
        spacing: "sm",
        contents: [
          {
            type: "button",
            action: {
              type: "uri",
              label: "สั่งซื้อสินค้า",
              uri: "https://shop.line.me/@adarath_official/product/321459372",
            },
            flex: 2,
            color: "#E06666",
            style: "primary",
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
