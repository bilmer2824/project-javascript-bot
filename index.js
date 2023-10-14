const form_message = document.getElementById('form_telegram_bot')


async function Telegram_Bot(bot_token, channel_id) {
  form_message.addEventListener('submit', (e) => {
    e.preventDefault()
    let message_name = document.getElementById('message_name').value
    let message_email = document.getElementById('message_email').value
    let message_phone = document.getElementById('message_phone').value
    let message_address = document.getElementById('message_address').value

    const message = `petitioner: ${message_name}\n applicant's email address: ${message_email}\n applicant phone number: ${message_phone}\n applicant's residential address: ${message_address}`
    let url = `https://api.telegram.org/bot${bot_token}/sendMessage?chat_id=${channel_id}&text=${message}`
    const api = new XMLHttpRequest()
    api.open("GET", url, true)
    api.send()

    setInterval(() => {
        message_name = " "
        message_email = " "
        message_phone = " "
        message_address = " "
    }, 700);

  })


  

}
Telegram_Bot('6565589283:AAE7yAJfI1Gzn0D78k_0i_wfqj-gsUsOgNU', '-1001805228205')