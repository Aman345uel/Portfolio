import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./styles.css";
import { inject } from '@vercel/analytics';
inject();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);

// Sends a message to your Telegram bot on every page load
    // fetch(`https://api.telegram.org/bot<YOUR_BOT_TOKEN>/sendMessage`, {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({
    //     chat_id: "<YOUR_CHAT_ID>",
    //     text: `👀 Someone visited your portfolio!\n🕐 ${new Date().toLocaleString()}`
    //   })
    // });