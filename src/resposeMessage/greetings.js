require("dotenv").config();

module.exports = (displayName) => [
  {
    type: "text",
    text: `สวัสดีค่ะ คุณ ${displayName} 🙇‍♀️ ขอบคุณที่เป็นเพื่อนกับ ADARAThailand นะคะ💘 WELCOME TO ADARA THAILAND 🙇‍♀️ สวัสดีค่ะคุณลูกค้า สนใจสินค้าสามารถสอบถามรายละเอียดได้เลยค่ะ ของพร้อมส่งงงงง🙆🏻‍♀️ หรือ สามารถเลือกเพิ่มเติม ได้โดยการใช้ตัวช่วยที่เราเตรียมไว้ให้ข้างล่างนี้ได้เลย`,
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
