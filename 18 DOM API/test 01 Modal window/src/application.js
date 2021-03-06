/* application.js
Реализуйте и экспортируйте по умолчанию функцию, которая отвечает за показ модальных окон.

<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
  Launch demo modal
</button>
<div class="modal fade" id="exampleModal">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title 1</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        ...
      </div>
    </div>
  </div>
</div>

Модальные окна определяются по селектору data-toggle="modal".
Идентификатор самого окна хранится в аттрибуте data-target кнопки
Чтобы окно всплыло, необходимо в элемент с id из data-target добавить класс show и стиль display выставить в block
За скрытие модального окна отвечает крестик доступный по селектору data-dismiss="modal" внутри модального окна.
Нажатие на кнопку приводит к обратному эффекту, удаляется класс show, а display выставляется в none. */

// BEGIN (write your solution here)
// export default () => {
//   const openBtns = document.querySelectorAll('[data-toggle="modal"]');
//   openBtns.forEach((btn) => {
//     btn.addEventListener('click', (e) => {
//       const { target } = e.target.dataset;
//       const window = document.querySelector(target);
//       window.classList.add('show');
//       window.style.display = 'block';
//     });
//   });

//   const closeBtns = document.querySelectorAll('[data-dismiss="modal"]');
//   closeBtns.forEach((x) => {
//     x.addEventListener('click', (e) => {
//       const window = e.target.closest('.modal');
//       window.classList.remove('show');
//       window.style.display = 'none';
//     });
//   });
// };
// END

/* teacher solution */
const openHandler = (modal) => {
  modal.classList.add('show');
  modal.style.display = 'block'; // eslint-disable-line
};

const closeHandler = (modal) => {
  modal.classList.remove('show');
  modal.style.display = 'none'; // eslint-disable-line
};

export default () => {
  const buttons = document.querySelectorAll('[data-toggle="modal"]');
  buttons.forEach((element) => {
    const id = element.dataset.target;
    const modal = document.querySelector(id);
    element.addEventListener('click', openHandler.bind(null, modal));

    const closeButton = modal.querySelector('[data-dismiss="modal"]');
    closeButton.addEventListener('click', closeHandler.bind(null, modal));
  });
};
