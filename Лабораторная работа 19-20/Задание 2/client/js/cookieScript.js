// Функция для сохранения данных из формы в cookie
function saveData() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const dob = document.getElementById('dob').value;
    const birthplace = document.getElementById('birthplace').value;
    const hobbies = document.getElementById('hobbies').value;

    // Установка cookie (добавляем "; path=/" для доступности на всех страницах)
    document.cookie = `name=${encodeURIComponent(name)}; path=/; max-age=86400`;
    document.cookie = `email=${encodeURIComponent(email)}; path=/; max-age=86400`;
    document.cookie = `dob=${encodeURIComponent(dob)}; path=/; max-age=86400`;
    document.cookie = `birthplace=${encodeURIComponent(birthplace)}; path=/; max-age=86400`;
    document.cookie = `hobbies=${encodeURIComponent(hobbies)}; path=/; max-age=86400`;

    alert("Данные сохранены в cookie!");
}

// Функция для загрузки данных из cookie и отображения их на странице
function loadData() {
    const cookies = document.cookie.split('; ');
    const output = {};

    cookies.forEach(cookie => {
        const [key, value] = cookie.split('=');
        output[key] = decodeURIComponent(value);
    });

    document.getElementById('output').innerHTML = `
        <h3>Сохраненные данные:</h3>
        <p>ФИО: ${output.name || 'Не найдено'}</p>
        <p>Электронная почта: ${output.email || 'Не найдено'}</p>
        <p>Дата рождения: ${output.dob || 'Не найдено'}</p>
        <p>Место рождения: ${output.birthplace || 'Не найдено'}</p>
        <p>Увлечения: ${output.hobbies || 'Не найдено'}</p>
    `;
}

// Функция для очистки всех cookie
function clearCookies() {
    const cookies = document.cookie.split("; ");
    cookies.forEach(cookie => {
        const [name] = cookie.split("=");
        document.cookie = `${name}=; max-age=0; path=/`;
    });

    alert("Все данные cookie удалены!");
    document.getElementById('output').innerHTML = "";
}