//your JS code here. If required.
const form = document.querySelector('form');
const userAge = form.age;
const userName = form.name;

form.addEventListener('submit', (event) => {

    event.preventDefault();

    // validation
    if (userName.value === '' || userAge.value === '') {
        alert('Please fill both fields');
    }

    // Input verification
    const verfiyAgePromise = new Promise(function executor(resolve, reject) {

        const age = Number(userAge.value);
        console.log('checking user age');

        // above 18, valid
        if (age >= 18) {
            setTimeout(() => {
                resolve(`Welcome, ${userName.value}. You can vote.`);
            }, 4000);
        }
        else {
            setTimeout(() => {
                reject(`Oh sorry ${userName.value}. You aren't old enough.`);
            }, 4000);
        }
    });

    verfiyAgePromise
    .then((message)=> {
        alert(message);
    })
    .catch((message)=> {
        alert(message);
    })
})