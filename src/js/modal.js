export default function modal() {

    const modalOpen = Array.prototype.slice.call(document.querySelectorAll('.js-modal-open'));
    modalOpen.forEach(function (link) {
        console.log('test');
    })
    // const modalClose = document.querySelector('.modal__close');
    // const modalOverlay = document.querySelector('.modal__overlay');
    // const modalOpenNoTextarea = Array.prototype.slice.call(document.querySelectorAll('.js-modal-open-textarea'));
    // console.log(modalOverlay);

    // // var nextContent = Array.prototype.slice.call(document.querySelectorAll('.why-us__difference-list-item'));


    // modalOpen.addEventListener('click', () => {
    //     event.preventDefault();
    //     document.querySelector('.modal').classList.add('open');
    //     document.querySelector('html').classList.add('no-scroll');
    // })

    // modalClose.addEventListener('click', modalOff);
    // modalOverlay.addEventListener('click', modalOff);

    // function modalOff() {
    //     document.querySelector('.modal').classList.remove('open');
    //     document.querySelector('html').classList.remove('no-scroll');
    // }

    // modalOpenNoTextarea.addEventListener('click', () => {
    //     event.preventDefault();
    //     document.querySelector('.modal').classList.add('open');
    //     document.querySelector('html').classList.add('no-scroll');
    //     document.querySelector('textarea').style.display = "none";
    // })

    // modalClose.addEventListener('click', modalOff);
    // modalOverlay.addEventListener('click', modalOff);

    // function modalOff() {
    //     document.querySelector('.modal').classList.remove('open');
    //     document.querySelector('html').classList.remove('no-scroll');
    // }
}