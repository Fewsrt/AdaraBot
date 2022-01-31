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
            url: "https://firebasestorage.googleapis.com/v0/b/adaralinebot-wkyk.appspot.com/o/1.jpg?alt=media&token=6699b3bb-dd5d-49f2-a69a-9e70fe275334",
            size: "full",
            aspectRatio: "10:10",
            aspectMode: "cover",
          },
          body: {
            type: "box",
            layout: "vertical",
            spacing: "sm",
            contents: [
              {
                type: "text",
                text: "Glu Colla",
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
        {
          type: "bubble",
          hero: {
            type: "image",
            url: "https://firebasestorage.googleapis.com/v0/b/adaralinebot-wkyk.appspot.com/o/6181B051-889E-48D4-9500-5DD3BED1AA40.jpg?alt=media&token=593b82b9-1b8f-42af-b7cb-5d642f156f2b",
            size: "full",
            aspectRatio: "10:10",
            aspectMode: "cover",
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
                    text: "549 บาท",
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
                  uri: "https://shop.line.me/@adarath_official/product/321466712",
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
            url: "https://firebasestorage.googleapis.com/v0/b/adaralinebot-wkyk.appspot.com/o/foam4.png?alt=media&token=794d53f2-6f02-40cf-a79e-01fc04963c74",
            size: "full",
            aspectRatio: "10:10",
            aspectMode: "cover",
          },
          body: {
            type: "box",
            layout: "vertical",
            spacing: "sm",
            contents: [
              {
                type: "text",
                text: "PEARL MOUSSE FOAM",
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
                    text: "279 บาท",
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
