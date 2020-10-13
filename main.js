var btn = document.getElementById('btn');
var getUsers = document.getElementById('users');
btn.addEventListener('click', loadUsers);

function loadUsers() {

    var xhr = new XMLHttpRequest();
    xhr.open('Get', 'https://api.github.com/users/narurathod', true);
    xhr.onload = function () {
        if (this.status == 200) {
            var users = JSON.parse(this.responseText);
            var output = '';
             for (var i in users) {
            output += '<div class="user">' + '<img src="' + users[i].avatar_url + '" width="70">' + '<ul>' +
                '<li> Login: ' + users[i].login + '</li>' +
                '<li> Id: ' + users[i].id + '</li>' +
                '</ul>' + '</div>'
            getUsers.innerHTML = output;
             }

            // console.log(this.responseText);
        }

    }
    xhr.send();
}
