export default function initAccordion() {
    const accordionList = document.querySelectorAll('[data-anime="accordion"] dt')
    const ativoClass = 'ativo'
    if (accordionList.length) {

        function ativaAccordion() {
            this.classList.toggle(ativoClass)
            this.nextElementSibling.classList.toggle(ativoClass)
        }

        accordionList.forEach((item) => {
            item.addEventListener('click', ativaAccordion)
        })
    }
}