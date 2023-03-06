import ApiService from '../api/apiService';
import { renderModalCoctails } from './render-modal-coctail';
import { handleOpenModalIngridients } from '../home/open-close-modalIng';

const backdrop = document.querySelector('.backdrop');
const modalCoctailsEl = document.querySelector('.modal-coctails');
const closeModal = document.querySelector('.close-modal');

const apiId = new ApiService();

export async function handleOpenCloseModal(e) {
  const idCard = e.target.closest('.card').id;
  const data = await apiId.fetchDataById(idCard);

  renderModalCoctails(data[0]);

  backdrop.classList.remove('is-hidden');
  modalCoctailsEl.classList.remove('is-hidden');

  modalCoctailsEl
    .querySelectorAll('.ingridients-item')
    .forEach(el => el.addEventListener('click', handleOpenModalIngridients));
}

closeModal.addEventListener('click', () => {
  backdrop.classList.add('is-hidden');
  modalCoctailsEl.classList.add('is-hidden');
});