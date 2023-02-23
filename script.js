const form = document.querySelector('form');
const table = document.querySelector('#reminder-table tbody');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const taskNameInput = form.querySelector('input[type="text"]');
  const dueDateInput = form.querySelector('input[type="date"]');
  const dueTimeInput = form.querySelector('input[type="time"]');

  const taskName = taskNameInput.value;
  const dueDate = dueDateInput.value;
  const dueTime = dueTimeInput.value;

  const newTask = document.createElement('tr');
  newTask.innerHTML = `
    <td>${taskName}</td>
    <td>${dueDate}</td>
    <td>${dueTime}</td>
    <td>
      <button class="edit">Edit</button>
      <button class="delete">Delete</button>
    </td>
  `;

  table.appendChild(newTask);

  taskNameInput.value = '';
  dueDateInput.value = '';
  dueTimeInput.value = '';
});

table.addEventListener('click', (event) => {
  if (event.target.classList.contains('edit')) {
    const task = event.target.closest('tr');
    const taskName = task.children[0].textContent;
    const dueDate = task.children[1].textContent;
    const dueTime = task.children[2].textContent;

    form.querySelector('input[type="text"]').value = taskName;
    form.querySelector('input[type="date"]').value = dueDate;
    form.querySelector('input[type="time"]').value = dueTime;

    task.remove();
  }

  if (event.target.classList.contains('delete')) {
    event.target.closest('tr').remove();
  }
});

const deleteAllBtn = document.createElement('button');
deleteAllBtn.textContent = 'Delete All';
deleteAllBtn.classList.add('delete-all');

form.appendChild(deleteAllBtn);

deleteAllBtn.addEventListener('click', () => {
  table.innerHTML = '';
});
