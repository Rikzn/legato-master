export default function modal() {

    const modalOpen = document.querySelector('.js-modal-open');
    const modalClose = document.querySelector('.modal__close');
    const modalOverlay = document.querySelector('.modal__overlay');
    console.log(modalOverlay);

    modalOpen.addEventListener('click', () => {
        document.querySelector('.modal').classList.add('open');
        document.querySelector('html').classList.add('no-scroll');
    })

    modalClose.addEventListener('click', modalOff);
    modalOverlay.addEventListener('click', modalOff);

    function modalOff() {
        document.querySelector('.modal').classList.remove('open');
        document.querySelector('html').classList.remove('no-scroll');
    }
}