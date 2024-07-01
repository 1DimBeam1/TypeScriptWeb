var users = [
    {
        id: 1,
        name: "Мачкасов Дмитрий",
        email: "machkasov.da@dvfu.ru",
        avatar: "https://img.razrisyika.ru/kart/3/1200/10089-tank-2.jpg",
    },
    {
        id: 2,
        name: "Волчков Николай ",
        email: "volchkov.na@dvfu.ru",
        avatar: "https://cdn1.ozone.ru/s3/multimedia-4/6212409760.jpg",
    },
    {
        id: 3,
        name: "Гордеева Анна",
        email: "gordeeva.ao@dvfu.ru",
        avatar: "https://s1.1zoom.ru/big3/760/Tanks_Painting_Art_Challenger_1_British_534983_2000x1427.jpg",
    },
    {
        id: 4,
        name: "Гальперин Артем",
        email: "galperin.ao@dvfu.ru",
        avatar: "https://www.fonstola.ru/images/201411/fonstola.ru_152189.jpg",
    },
];

var userListElement = document.getElementById("userList");
function displayUsers(users) {
    userListElement.innerHTML = "";
    users.forEach(function (user) {
        var listItem = document.createElement("li");
        listItem.innerHTML = "\n            <div>\n                <strong>".
        concat(user.name, "</strong> (").
        concat(user.email, ")\n                <button onclick=\"editImage(").
        concat(user.id, ")\">Изменить аватар</button>\n                <button onclick=\"editUser(").
        concat(user.id, ")\">Изменить Имя и Почту</button>\n            </div>\n            <img src=\"").
        concat(user.avatar, "\" alt=\"Oops..\" width=\"100\"> ");
        userListElement.appendChild(listItem);

    });
}

function editImage(userId) {
    var newImg = prompt("Введите URL картинки:");

    for (var i = 0; i < users.length; i++) {
        if (users[i].id == userId) {
            if (newImg != null) {
                users[i].avatar = newImg;
            }
            displayUsers(users);
            break;
        }
    }
}

function editUser(userId) {
    var newName = prompt("Введите новое имя:");
    var newEmail = prompt("Введите новый email:");
    for (var i = 0; i < users.length; i++) {
        if (users[i].id == userId) {
            if (newName != null) {
                users[i].name = newName;
            }
            if (newEmail != null) {
                users[i].email = newEmail;
            }
            displayUsers(users);
            break;
        }
    }
}

window.onload = function () {
    displayUsers(users);
};