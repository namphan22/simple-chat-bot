import { responseObj } from "./data.js";
const chatBody = document.querySelector(".chat-body");
const textInput = document.querySelector("#textInput");
const send = document.querySelector(".send");
const close = document.querySelector('.close');
const container = document.querySelector('.container');


textInput.addEventListener("keyup", (event) => {
  if (event.keyCode === 13) {
    renderUserMessage();
  }
});

const renderUserMessage = () => {
  const userInput = textInput.value;
  renderMessageEle(userInput, "user");
  textInput.value = "";
  setTimeout(() => {
    renderChatbotResponse(userInput);
    setScrollPosition();
  }, 1000);
};

const renderChatbotResponse = (userInput) => {
  const res = getChatbotResponse(userInput);
  renderMessageEle(res);
};

const renderMessageEle = (text, type) => {
  let className = "user-message";
  if (type !== "user") {
    className = "chatbot-message";
  }
  const messageEle = document.createElement("div");
  const textNode = document.createTextNode(text);
  messageEle.classList.add(className);
  messageEle.append(textNode);
  chatBody.append(messageEle);
};

const getChatbotResponse = (userInput) => {
  return responseObj[userInput] == undefined
    ? "Error"
    : responseObj[userInput];
};

const setScrollPosition = () => {
  if (chatBody.scrollHeight > 0) {
    chatBody.scrollTop = chatBody.scrollHeight;
  }
};
send.addEventListener("click", () => renderUserMessage());
close.addEventListener('click',()=>{
  container.classList.toggle('hidden');

})