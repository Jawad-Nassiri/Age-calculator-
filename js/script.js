
let userInput = document.querySelector('input[type="date"]'); 
let btn = document.querySelector('#btn');

userInput.max = new Date().toISOString().split('T')[0];

btn.addEventListener('click', () => {
    let existingResult = document.querySelector('.result');
    if (existingResult) {
        existingResult.remove();
    }

    let birthDate = new Date(userInput.value);

    let dayBirthday = birthDate.getDate();
    let monthBirthday = birthDate.getMonth() + 1;
    let yearBirthday = birthDate.getFullYear();

    let currentDate = new Date();
    let currentDay = currentDate.getDate();
    let currentMonth = currentDate.getMonth() + 1;
    let currentYear = currentDate.getFullYear();

    let userDayBirth, userMonthBirth, userYearBirth;

    userYearBirth = currentYear - yearBirthday;

    if (currentMonth >= monthBirthday) {
        userMonthBirth = currentMonth - monthBirthday;
    } else {
        userMonthBirth = 12 - (monthBirthday - currentMonth);
        userYearBirth--;
    }

    if (currentDay >= dayBirthday) {
        userDayBirth = currentDay - dayBirthday;
    } else {
        let daysInPreviousMonth = new Date(currentYear, currentMonth - 1, 0).getDate();
        userDayBirth = daysInPreviousMonth - (dayBirthday - currentDay);
        userMonthBirth--;
    }

    if (userMonthBirth < 0) {
        userMonthBirth += 12;
        userYearBirth--; 
    }

    let resElement = document.createElement('div');
    resElement.className = 'result';

    let pElement = document.createElement('p');
    
    resElement.appendChild(pElement);
    pElement.textContent = `Age: ${userYearBirth} years, ${userMonthBirth} months, and ${userDayBirth} days.`;

    document.querySelector('.calculator').appendChild(resElement);
});
