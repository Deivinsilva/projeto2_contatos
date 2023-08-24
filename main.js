const form = document.getElementById('contact-form');
const tableBody = document.querySelector('#contact-table tbody');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const nameInput = document.getElementById('name');
  const phoneInput = document.getElementById('phone');

  const name = nameInput.value;
  const phone = phoneInput.value;

  if (name.trim() === '' || phone.trim() === '') {
    alert('Por favor, preencha todos os campos.');
    return;
  }

  const newRow = document.createElement('tr');
  newRow.innerHTML = `
    <td>${name}</td>
    <td>${phone}</td>
  `;

  tableBody.appendChild(newRow);

  nameInput.value = '';
  phoneInput.value = '';
});