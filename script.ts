interface User {
    id: number;
    name: string;
    email: string;
    avatar: string;
}

const users: User[] = [
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

const userListElement = document.getElementById("userList") as HTMLLIElement;

function displayUsers(users: User[]) {
    userListElement.innerHTML = "";

    users.forEach((user) => {
        const listItem = document.createElement("li");

        listItem.innerHTML = `
            <div>
                <strong>${user.name}</strong> (${user.email})
                <button onclick="editImage(${user.id})">Изменить аватар</button>
                <button onclick="editUser(${user.id})">Изменить Имя и Почту</button>
            </div>
            <img src="${user.avatar}" alt="Oops.." width="100"> `;

        userListElement.appendChild(listItem);
    });
}

function editImage(userId: number) {
    const newImg = prompt("Введите URL картинки:");

    for (let i = 0; i < users.length; i++) {
        if (users[i].id == userId) {
            if (newName != null) {
                users[i].avatar = newImg;
            }
            displayUsers(users);
            break;
        }
    }
}

function editUser(userId: number) {
    const newName = prompt("Введите новое имя:");
    const newEmail = prompt("Введите новый email:");

    for (let i = 0; i < users.length; i++) {
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

window.onload = () => {
    displayUsers(users);
};
  