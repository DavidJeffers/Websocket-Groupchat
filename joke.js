"use strict";

const axios = require("axios");

async function getJoke() {
  let result;
  try {
    result = await axios({
      url: "https://icanhazdadjoke.com",
      headers: {
        Accept: "application/json",
        "user-agent": "Websocket-Groupchat",
      },
      method: "GET",
    });
  } catch (err) {
    console.log(err.message);
    return "NO JOKES";
  }
  return result.data.joke;
}

module.exports = { getJoke };
