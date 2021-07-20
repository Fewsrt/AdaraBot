"use strict";
require("dotenv").config();
const line = require("@line/bot-sdk");
const express = require("express");
const app = express();
const Sentry = require("@sentry/node");
const figlet = require("figlet");
const dialogflow = require("dialogflow");
const axios = require("axios");
const nodemailer = require("nodemailer");
const { get } = require("lodash");
const { getUserProfile, getImageContent } = require("./src/middleware/line");
const {
  greetings,
  contactus,
  fallback,
  promotion,
  member,
  platform,
  orderlist,
  phone,
} = require("./src/resposeMessage");
const {
  saveUserProfile,
  getUserData,
  setFieldOfUser,
  saveSensorData,
} = require("./src/middleware/firebase");

const main = require("./config");

const config = {
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN,
  channelSecret: process.env.CHANNEL_SECRET,
};

const client = new line.Client(config);

Sentry.init({ dsn: process.env.SENTRY_DSN, env: process.env.SENTRY_ENV });

app.use(Sentry.Handlers.requestHandler());

app.get("/", (req, res) => res.send("Hello World!"));

app.post(
  "/callback",
  line.middleware(config),
  getUserProfile(client),
  (req, res) => {
    if (!Array.isArray(req.body.events)) {
      return res.status(500).end();
    }
    Promise.all(
      req.body.events.map((event) => {
        console.log("event", event);

        if (
          event.replyToken === "00000000000000000000000000000000" ||
          event.replyToken === "ffffffffffffffffffffffffffffffff"
        ) {
          return;
        }

        const returnMessage = handleEvent(event, req);
        return returnMessage;
      })
    )
      .then((returnMessage) => {
        res.status(200).send(returnMessage);
      })
      .catch((err) => {
        console.error(err);
        res.status(500).end();
      });
  }
);

async function handleEvent(event, req) {
  if (event.type === "follow") {
    await saveUserProfile({ profile: req.profile, status: "follow" });
    return client.replyMessage(
      event.replyToken,
      greetings(req.profile.displayName)
    );
  }

  if (event.type === "message" && event.message.type === "text") {
    const dialogflowProjectId = process.env.DIALOG_FLOW_Project_ID;

    const sessionClient = new dialogflow.SessionsClient({
      projectId: dialogflowProjectId,
      credentials: {
        type: "service_account",
        project_id: "adaralinebot-wkyk",
        private_key_id: "310bae9f42c8b513f6b099b21de7889d62ec0aef",
        private_key:
          "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDxr7CGHvSrx2lf\n2cC5lGKgPfmeNBfa8TDb+Y+srp+l57Lj6DmQdkrZMty3u9tY0if5bsywuyE073HX\nCQYW9wUSvlQPy0a1svo8UJm78bZqPPpfk1SmNccdq8S7+WNt+e0y0WxrEMGuuCAM\nYeRWg/kNVOkGU8xFv8ltWZTOJFdgAk6an+chhP7GlO+gF0ZxTcTq/k5rbkQy3HuS\n5f5iff1T7PEU32I9y1V3jXTTgx0V6nxCPxccetdLuvLm9g7K3nRcG7NUDFNohzg5\nLQWk/0nN0VXZ/27I4Rzmwh3MATkVMHQ2Ow0LQRVuzYwF+cuHqKqoP2N9g6j7LuB7\nyVbMagZPAgMBAAECggEAAIhrIriRwIk1hcUUpDQcDY9lbABgZxauDWYc93wBFRwQ\nLGl4KwXfv1/Z1bvfzW/VL7sbT25yMcwvW5KFBWrxA2wRAmHn24G0BIsG87+iL9TH\nlotcHeuzbzDQQ7vWiMkKyVhl3UyRqMF2LKDQoJI0698ajm2D30l/d7LBXbz9xlPp\n4KYaL+8LAnSIIrs1/Db6YY4+hYZoPIwxXYaiN5Q4c+3oA3CwNk+hBT2oeG9Ul4zX\nL1FcckynuH96vnRNzvOHCzHGFQcp6v1KgfxN7bQkDpohE0bEnvcJnr++uVktR+La\nfsamIHrm+q3Xq0aF8bXLTJgxlWbtm+l3CVpiFHRiFQKBgQD5jK9z8rGJInmrX2kL\nLM0UQ7n/LplpiezqnSrkLN3FFNDI0WufERq2w/4zC44x0tmtqSdL2nLs45sGxuaC\nqYG9Tga7aHQHMyKj9U3Ksl15f51Ib4AaPoS9OgHEcYM3i1E76B5/xFjg5qA2FlvZ\nvXE7CjJNEz7xVhi3JYPO5HPF8wKBgQD37vi2cNqlemZmVVN+uJv7AIMQwPGfY/ex\nWPGXnkMnJo6HUUSLXpOvwzAZwTkUOI4tGXRWC9D1pqmuPFJnXB3Ux4pKpvOh3HD8\nTRAaKIs025p+FNndbbvkCgAs5b2ORW0pBFVqgG7rwEybtNAL8210PmVac/3VKPEM\nbXHwuDGJNQKBgGj+zltkg1oFjVeTXyj6gpbCICHDw3xqMapM0l0Km4xuQ6IaqsNU\neP7o260ycXN5GWk9wHDjynLtGK7zRM048INrrt1vB1J4K1z8uuxLu5SBIvX1I9rm\n7waGv3Odpu3ZyiYAdcSgIh0OK95V7fNhB6ElmyBetp7n8KIuQJTt/eANAoGBAJFK\nTBt1lNumF73eQLig7F8x1JyLxMxX473c1m64Qrf9o0Zu/FED0l4MbvKYxZ8w6ThK\nk18dO43I5eSB2vRRCfY4HLVUkq8GpHtlmYsKuVD3Y9iA1Y8qEBI5PhMRanyl+Ksx\nq/BmZRnoLbyNP+HQ/BJDwlc4Y8Z3YJKczEl5VyYFAoGBAKBIqKSmBCkyXEhcYR0c\noG84WtlxvGeUWbsNHN6dQwOoALUv8StAMltiXtmW5Tguw8BfwpI9nrXDA+RgrwvG\nIwgZQkAH208McsI1uQ+LWYe0NZT4iLmArW9HIg5xVeS9jATGaNdmN3h7THd+VLR5\nmGtb1KweKg/4sNGR9LIkrdWE\n-----END PRIVATE KEY-----\n",
        client_email: "dialogflow-27@adaralinebot-wkyk.iam.gserviceaccount.com",
        client_id: "115636316585268051927",
        auth_uri: "https://accounts.google.com/o/oauth2/auth",
        token_uri: "https://oauth2.googleapis.com/token",
        auth_provider_x509_cert_url:
          "https://www.googleapis.com/oauth2/v1/certs",
        client_x509_cert_url:
          "https://www.googleapis.com/robot/v1/metadata/x509/dialogflow-27%40adaralinebot-wkyk.iam.gserviceaccount.com",
      },
    });

    const sessionPath = sessionClient.sessionPath(
      dialogflowProjectId,
      req.profile.userId
    );

    const queryParams = {
      session: sessionPath,
      queryInput: {
        text: {
          text: event.message.text,
          languageCode: "th-TH",
        },
      },
    };

    const currentUser = await getUserData({ userId: req.profile.userId });
    const userCurrentContext = get(currentUser, "context", "");
    let dialogflowResp = null;
    if (userCurrentContext.startsWith("get_")) {
      dialogflowResp = [
        {
          queryResult: {
            intent: {
              displayName: userCurrentContext,
            },
          },
        },
      ];
    } else {
      dialogflowResp = await sessionClient.detectIntent(queryParams);
    }
    const userIntent = get(dialogflowResp, "0.queryResult.intent.displayName");
    console.log(userIntent);
    let message = null;
    switch (userIntent) {
      case "platform":
        message = platform();
        break;
      case "Orderlist":
        message = orderlist();
        break;
      case "ContactUs":
        message = contactus();
        break;
      case "Promotion":
        message = promotion();
        break;
      case "member":
        message = member();
        break;
      case "phone":
        message = phone();
        break;
      default:
        message = fallback(req.profile.displayName);
        break;
    }
    return client.replyMessage(event.replyToken, message);
  }
  return Promise.resolve(null);
}

app.use(Sentry.Handlers.errorHandler());

app.listen(process.env.PORT || 5000, () =>
  console.log("listening on port 5000!")
);
