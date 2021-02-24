export default function initTabNav()  {
    const tabMenu = document.querySelectorAll('[data-tab="menu"] li')
    const tabConteudo = document.querySelectorAll('[data-tab="content"] section')

    if (tabMenu.length && tabConteudo.length) {
        tabConteudo[0].classList.add('ativo')

        function ativaTab(index) {
            tabConteudo.forEach((section) => {
                section.classList.remove('ativo')
            })
            const direcao = tabConteudo[index].dataset.anime
            tabConteudo[index].classList.add('ativo', direcao)
        }

        tabMenu.forEach((item, index) => {
            item.addEventListener('click', () => {
                ativaTab(index)
            })
        })
    }
}