
const form = document.querySelector('.form');
form.addEventListener('submit', function(e) {
    e.preventDefault()
    sendMessage()
})

async function sendMessage() {
    const chatId = '@lmlviv_bot';
    const url = 'https://api.telegram.org/bot6634908019:AAGEZvDd_App23zyfQB7jMhiYGeAyk60w34/sendMessage?"';
    const phone = document.getElementById("phone").value || document.getElementById("phone2").value
    const formData = new FormData();
    formData.append('chat_id', chatId)
    formData.append('text', phone)
      const response = await fetch(url, {
                method: 'POST',
                body:     formData
            })
            console.log(response)
}