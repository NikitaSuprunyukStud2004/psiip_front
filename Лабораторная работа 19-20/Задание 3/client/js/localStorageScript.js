// Функция для сохранения данных из формы в Local Storage
function saveData() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const dob = document.getElementById('dob').value;
    const birthplace = document.getElementById('birthplace').value;
    const hobbies = document.getElementById('hobbies').value;

    // Сохранение данных в Local Storage
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('dob', dob);
    localStorage.setItem('birthplace', birthplace);
    localStorage.setItem('hobbies', hobbies);

    alert("Данные сохранены в Local Storage!");
}

// Функция для загрузки данных из Local Storage и отображения их на странице
function loadData() {
    const name = localStorage.getItem('name') || 'Не найдено';
    const email = localStorage.getItem('email') || 'Не найдено';
    const dob = localStorage.getItem('dob') || 'Не найдено';
    const birthplace = localStorage.getItem('birthplace') || 'Не найдено';
    const hobbies = localStorage.getItem('hobbies') || 'Не найдено';

    document.getElementById('output').innerHTML = `
        <h3>Сохраненные данные:</h3>
        <p>ФИО: ${name}</p>
        <p>Электронная почта: ${email}</p>
        <p>Дата рождения: ${dob}</p>
        <p>Место рождения: ${birthplace}</p>
        <p>Увлечения: ${hobbies}</p>
    `;
}

// Функция для очистки всех данных из Local Storage
function clearLocalStorage() {
    localStorage.clear();
    alert("Все данные Local Storage удалены!");
    document.getElementById('output').innerHTML = "";
}
