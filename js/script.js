const form1 = document.querySelector(".form1");
form1.addEventListener("submit", function (e) {
  e.preventDefault(); 
  sendMessage();
});

const form2 = document.querySelector(".form2");
form2.addEventListener("submit", function (e) {
  e.preventDefault(); 
  sendMessage();
});

const form3 = document.querySelector(".form3");
form3.addEventListener("submit", function (e) {
  e.preventDefault(); 
  sendMessage();
});

const form4 = document.querySelector(".form4");
form4.addEventListener("submit", function (e) {
  e.preventDefault(); 
  sendMessage();
});

const form5 = document.querySelector(".form5");
form3.addEventListener("submit", function (e) {
  e.preventDefault(); 
  sendMessage();
});

const form6 = document.querySelector(".form6");
form6.addEventListener("submit", function (e) {
  e.preventDefault(); 
  sendMessage();
});

const form7 = document.querySelector(".form7");
form7.addEventListener("submit", function (e) {
  e.preventDefault(); 
  sendMessage();
});

const input1 = document.getElementById("phone");
const input2 = document.getElementById("phone2");
const input3 = document.getElementById("phone3");
const input4 = document.getElementById("phone4");
const input5 = document.getElementById("phone5");
const input6 = document.getElementById("phone6");
const input7 = document.getElementById("phone7");

async function sendMessage() {
  const chatId = "@lockmaistelviv";
  const url =
    'https://api.telegram.org/bot6497401191:AAHBF7eyj-ahxqFX6PFBfeoxvSSBIdLCHMU/sendMessage?"';
  const phone = input1.value || input2.value || input3.value || input4.value || input5.value || input6.value || input7.value 
  console.log('phone', phone);
  const formData = new FormData();
  formData.append("chat_id", chatId);
  formData.append("text", phone);
  const response = await fetch(url, {
    method: "POST",
    body: formData,
  });
  if (response.ok) {
    input1.value = "";
    input2.value = "";
    input3.value = "";
    input4.value = "";
    input5.value = "";
    input6.value = "";
    input7.value = "";
  }
}



const questionsItems = document.querySelectorAll(".questions__item");
questionsItems.forEach((item) => {
  const header = item.querySelector(".questions__subtitle");
  const content = item.querySelector(".questions__sublist");

  header.addEventListener("click", () => {
    content.classList.toggle("active");
    header.classList.toggle("active");

    questionsItems.forEach((otherItem) => {
      if (otherItem !== item) {
        otherItem
          .querySelector("questions__sublist")
          .classList.remove("active");
      }
    });
  });
});

function addPrefix(id) {
  const phoneInput = document.getElementById(id);

  if (!phoneInput.value.startsWith("+380")) {
    phoneInput.value = "+380" + phoneInput.value;
  }
}
