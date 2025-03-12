const formElement = document.getElementById('form_registration');

formElement.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(formElement);

    const firstName = formData.get('first_name');
    const lastName = formData.get('last_name');
    const email = formData.get('email');
    const password = formData.get('password');
    const repeatPassword = formData.get('repeat_password');

    const values = [firstName, lastName, email, password];

    const dbElement = document.getElementById('db_users');

    const lastRow = dbElement.rows[dbElement.rows.length - 1];
    const lastRowCells = lastRow.cells;

    for (let i = 0; i < values.length; i++) {
        lastRowCells[i].textContent = values[i];
    }

    const newRow = dbElement.insertRow();
    for (let i = 0; i < values.length; i++) {
        const newCell = newRow.insertCell();
        newCell.textContent = '';
    }

    formElement.reset();
});
