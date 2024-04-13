const username = localStorage.getItem('username-ppl');
const uname = document.getElementById('name1');

if (username) {
    uname.innerHTML = username;
    }
else {
    uname.innerHTML = 'Ashmit';
}
