const yourname = document.getElementById('name')
const subject = document.getElementById('subject')
const email = document.getElementById('email')
const address = document.getElementById('address')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')


form.addEventListener('submit', (e) => {
    let messages = []
    if(yourname.value === '' || yourname.value == null) {
        messages.push("Name is required")
    }

    if (address.value.length <= 20) {
        messages.push('Address feltet må være mer enn 20 bokstaver')
    }
    e.preventDefault()
    errorElement.innerText = messages.join(', ')
})