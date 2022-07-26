// template_xghb36e
// service_wgp8mrr
// bKmr7S0aAPCuhkjGM

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading')
    const success = document.querySelector('.modal__overlay--success')
    loading.classList += " modal__overlay--visible"
     emailjs
     .sendForm(
         'service_wgp8mrr',
         'template_xghb36e',
         event.target,
         'bKmr7S0aAPCuhkjGM'
     ).then(() => {
        loading.classList.remove("modal__overlay--visible");
        success.classList += " modal__overlay--visible";
     }).catch(() => {
        loading.classList.remove("modal__overlay--visible");
        alert(
            "The email service is temporarily unavailable. Plese contact me directly at: dianepucci19@gmail.com"
        );
     })
}

let isModalOpen = false;
function toggleModal() {
    if (isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove("modal--open")
    }
    isModalOpen = true;
    document.body.classList += " modal--open";
}