
const form = document.querySelector('.form');
form.addEventListener('submit', function(e) {
    e.preventDefault()
    sendMessage()
})

async function sendMessage() {
    const chatId = '@LockMasterRoman_bot';
    const url = 'https://api.telegram.org/6497401191:AAHBF7eyj-ahxqFX6PFBfeoxvSSBIdLCHMU/sendMessage?"';
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