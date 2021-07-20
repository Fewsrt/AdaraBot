require("dotenv").config();
module.exports = () => [
  {
    type: "flex",
    altText: "แพ็คเกจ",
    contents: {
      type: "carousel",
      contents: [
        {
          type: "bubble",
          hero: {
            type: "image",
            url: "https://firebasestorage.googleapis.com/v0/b/adaralinebot-wkyk.appspot.com/o/82562DB7-73DB-43C5-A174-7E642D639D1B.jpg?alt=media&token=90d430f6-9201-46a7-be7d-3edcca728460",
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
                  uri: "https://shop.line.me/@adarath_official",
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
                  uri: "https://shop.line.me/@adarath_official",
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
  },
];
