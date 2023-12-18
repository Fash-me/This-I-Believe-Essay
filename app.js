let UserName = prompt("Hi, What is your name?").toUpperCase();

const WcUser = document.querySelector('#Wc-user');
WcUser.innerText = ` WELCOME ${UserName}, `;
