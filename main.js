const usersNumber = 10;
const url = `https://randomuser.me/api/?results=${usersNumber}`;

fetch(url)
    
    .then( (response) => response.json() )
    .then( (response) => loadUsers(response) )

    function loadUsers(users) {

        let container = document.getElementById('container');
        let pattern = ``;

        for (let i = 0; i < users.results.length; i++) {

            const user = users.results[i];
            const userImg = user.picture.large;

            pattern +=
            `<div class="user-card">
                <div class="user-card__heading">

                    <div class="user-location">
                        <a href="http://www.google.com/maps/place/${user.location.coordinates.latitude},${user.location.coordinates.longitude}" target="_blank" title="Check user location on google map">
                            <i class="fas fa-map-marker-alt"></i>
                        </a>
                        <span>${user.location.city}, ${user.location.state}</span>
                    </div>

                    <div class="media">
                        <img src=${userImg} alt="User profile image" class="media-img">
                        <div class="media-body">
                            <h1>${user.name.first} ${user.name.last}</h1>
                            <p>${user.login.username}</p>
                        </div>
                    </div>

                </div>

                <div class="user-card__body">

                    <div class="info-icon">
                        <span class="fa-stack fa-2x">
                            <i class="fas fa-circle fa-stack-2x"></i>
                            <i class="fas fa-info fa-stack-1x fa-inverse"></i>
                        </span>
                    </div>
                    
                    <p class="user-registered">
                        Registered 
                        <br>
                        ${user.registered.date.substring(0, 10)}
                    </p>

                    <ul class="user-info">
                        
                        <li class="media">
                            <i class="fas fa-phone-square fa-lg media-img"></i>
                            <span class="media-body">
                                ${user.phone}
                                <br>
                                <span>Phone number</span>
                            </span>
                        </li>
                        <li class="media">
                            <i class="fas fa-envelope fa-lg media-img"></i>
                            <span class="media-body">
                                ${user.email}
                                <br>
                                <span>Email address</span>
                            </span>
                        </li>
                        <li class="media">
                            <i class="fas fa-birthday-cake fa-lg media-img"></i>
                            <span class="media-body">
                                ${user.dob.date.substring(0, 10)} 
                                <br>
                                <span>Date of birth</span>
                            </span>
                        </li>
                    </ul>
                </div>
            </div>`;
        }
        container.innerHTML = pattern;
    }