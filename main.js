const usersNumber = 20;
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

            let userRegistrationYear = user.registered.date.slice(0, 4);
            let userRegistrationMonth = user.registered.date.slice(5, 7);
            let userRegistrationDay = user.registered.date.slice(8, 10);
                
            switch (userRegistrationMonth) {
                case "01":
                    userRegistrationMonth = "January";
                    break;
                case "02":
                    userRegistrationMonth = "February";
                    break;
                case "03":
                    userRegistrationMonth = "March";
                    break;
                case "04":
                    userRegistrationMonth = "April";
                    break;
                case "05":
                    userRegistrationMonth = "May";
                    break;
                case "06":
                    userRegistrationMonth = "June";
                    break;
                case "07":
                    userRegistrationMonth = "July";
                    break;
                case "08":
                    userRegistrationMonth = "August";
                    break;
                case "09":
                    userRegistrationMonth = "September";
                    break;
                case "10":
                    userRegistrationMonth = "October";
                    break;
                case "11":
                    userRegistrationMonth = "November";
                    break;
                case "12":
                    userRegistrationMonth = "December";
                    break;
            }

            let userBirthYear = user.dob.date.slice(0, 4);
            let userBirthMonth = user.dob.date.slice(5, 7);
            let userBirthDay = user.dob.date.slice(8, 10);
                
            switch (userBirthMonth) {
                case "01":
                    userBirthMonth = "January";
                    break;
                case "02":
                    userBirthMonth = "February";
                    break;
                case "03":
                    userBirthMonth = "March";
                    break;
                case "04":
                    userBirthMonth = "April";
                    break;
                case "05":
                    userBirthMonth = "May";
                    break;
                case "06":
                    userBirthMonth = "June";
                    break;
                case "07":
                    userBirthMonth = "July";
                    break;
                case "08":
                    userBirthMonth = "August";
                    break;
                case "09":
                    userBirthMonth = "September";
                    break;
                case "10":
                    userBirthMonth = "October";
                    break;
                case "11":
                    userBirthMonth = "November";
                    break;
                case "12":
                    userBirthMonth = "December";
                    break;
            }

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
                        ${userRegistrationMonth} ${userRegistrationDay}, ${userRegistrationYear}
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
                                ${userBirthMonth} ${userBirthDay}, ${userBirthYear}
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