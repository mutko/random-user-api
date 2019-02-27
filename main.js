const url = 'https://randomuser.me/api/?results=10'

fetch(url)
    
    .then(function(response) {
        return response.json();
    })
    .then(function(response) {
       loadUsers(response);
    })

    function loadUsers(users) {
        console.log(users);


        let container = document.getElementById('container');
        let pattern = ``;

        for (let i = 0; i < users.results.length; i++) {

            const user = users.results[i];

            pattern += `<div class="user">
                <p>${user.name.title}</p>
                <h2>${user.name.first} ${user.name.last}</h2>
                <p>${user.gender}</p>
                <p class="phone">
                <span class="phone-icon">&#9990;</span>
                <span class="phone-number">${user.phone}</span>
                <span class="message-icon">&#9993;</span>
                <span class="phone-number">${user.email}</span>
                </p>
            </div>`;
        }

        container.innerHTML = pattern;

    }