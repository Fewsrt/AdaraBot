require("dotenv").config();
module.exports = () => [
  {
    type: "flex",
    altText: "ช่องทางการสั่งซื้อ",
    contents: {
      type: "bubble",
      direction: "ltr",
      header: {
        type: "box",
        layout: "vertical",
        spacing: "none",
        margin: "none",
        contents: [
          {
            type: "text",
            text: "ช่องทางการสั่งซื้อ",
            weight: "bold",
            size: "xxl",
            align: "center",
            contents: [],
          },
        ],
      },
      hero: {
        type: "image",
        url: "https://firebasestorage.googleapis.com/v0/b/adaralinebot-wkyk.appspot.com/o/logo.jpg?alt=media&token=1e8a9738-b7bb-4d72-b82c-2c345878f726",
        size: "full",
        aspectRatio: "20:10",
        aspectMode: "cover",
        backgroundColor: "#FFFFFFFF",
      },
      body: {
        type: "box",
        layout: "vertical",
        spacing: "md",
        contents: [
          {
            type: "button",
            action: {
              type: "uri",
              label: "Line My Shop",
              uri: "https://shop.line.me/@adarath_official",
            },
            style: "primary",
          },
          {
            type: "button",
            action: {
              type: "uri",
              label: "Shopee",
              uri: "https://shopee.co.th/adarath_official?categoryId=100630&itemId=2981074053",
            },
            color: "#F3A428FF",
            style: "primary",
          },
          {
            type: "button",
            action: {
              type: "uri",
              label: "Adara Website",
              uri: "https://liff.line.me/1656228840-OnZXo1x2",
            },
            color: "#1FC3D9FF",
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
