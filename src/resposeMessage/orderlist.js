require("dotenv").config();
module.exports = () => [
  {
    type: "flex",
    altText: "รายการสินค้า",
    contents: {
      type: "carousel",
      contents: [
        {
          type: "bubble",
          hero: {
            type: "image",
            url: "https://firebasestorage.googleapis.com/v0/b/adaralinebot-wkyk.appspot.com/o/%E0%B9%80%E0%B8%9B%E0%B8%B4%E0%B8%94%E0%B8%95%E0%B8%B1%E0%B8%A7%E0%B9%82%E0%B8%9F%E0%B8%A1.png?alt=media&token=a53c0d30-ecf8-4716-916c-89cdc7ee1f0d",
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
                text: "Sleeping Mask Moss",
                weight: "bold",
                size: "xl",
                wrap: true,
                contents: [],
              },
              {
                type: "box",
                layout: "baseline",
                contents: [
                  {
                    type: "text",
                    text: "490 บาท",
                    weight: "bold",
                    size: "xl",
                    flex: 0,
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
                  uri: "https://shop.line.me/@adarath_official/product/321007168",
                },
                color: "#FEB6B6FF",
                style: "primary",
              },
            ],
          },
        },
        {
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
        {
          type: "bubble",
          body: {
            type: "box",
            layout: "vertical",
            spacing: "sm",
            contents: [
              {
                type: "button",
                action: {
                  type: "uri",
                  label: "See more",
                  uri: "https://shop.line.me/@adarath_official",
                },
                flex: 1,
                gravity: "center",
              },
            ],
          },
        },
      ],
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
