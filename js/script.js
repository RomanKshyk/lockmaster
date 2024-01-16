
const form = document.querySelector('.form');
form.addEventListener('submit', function(e) {
    e.preventDefault()
    sendMessage()
})

const input1 = document.getElementById("phone")
const input2 = document.getElementById("phone2")

async function sendMessage() {
    const chatId = '@lockmaistelviv';
    const url = 'https://api.telegram.org/bot6497401191:AAHBF7eyj-ahxqFX6PFBfeoxvSSBIdLCHMU/sendMessage?"';
    const phone = input1.value || input2.value
    const formData = new FormData();
    formData.append('chat_id', chatId)
    formData.append('text', phone)
      const response = await fetch(url, {
                method: 'POST',
                body: formData
            })
    if (response.ok) {
        input1.value = ''
        input2.value = ''
    }
}

function addPrefix(id) {
    const phoneInput = document.getElementById(id);

    if (!phoneInput.value.startsWith('+380')) {
        phoneInput.value = Number('+380');
    }
}