require("dotenv").config();
module.exports = () => [
  {
    type: "flex",
    altText: "โปรโมชั่น",
    contents: {
      type: "bubble",
      hero: {
        type: "image",
        url: "https://firebasestorage.googleapis.com/v0/b/adaralinebot-wkyk.appspot.com/o/foam4.png?alt=media&token=21b4e0b4-492e-4dcc-a7a4-fe4fe463067e",
        size: "full",
        aspectRatio: "20:15",
        aspectMode: "fit",
      },
      body: {
        type: "box",
        layout: "vertical",
        spacing: "sm",
        contents: [
          {
            type: "text",
            text: "PEARL MOUSSE FORM",
            weight: "bold",
            size: "xl",
            wrap: true,
            contents: [],
          },
          {
            type: "text",
            text: "[PRE-ORDER]",
            color: "#FF0000FF",
            contents: [],
          },
          {
            type: "box",
            layout: "baseline",
            flex: 1,
            contents: [
              {
                type: "text",
                text: "329 บาท",
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
              uri: "https://shop.line.me/@adarath_official/product/321022230",
            },
            flex: 2,
            color: "#6DB9DEFF",
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
