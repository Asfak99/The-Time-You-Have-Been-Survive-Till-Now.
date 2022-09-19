let isDOBOpen = false;
let dateOfBirth;
const SettingCogEl = document.getElementById("SettingIcon");
const SettingContentEl = document.getElementById("SettingContent");
const InitialTextEl = document.getElementById("InitialText");
const anyTxtEl = document.getElementById("anyTxt");
const afterDOBBtnTxtEl = document.getElementById("afterDOBBtnTxt");
const backButtonEl = document.getElementById("backButton");
const dobButtonEl = document.getElementById("dobButton");
const dobInputEl = document.getElementById("dobInput");

const yearsEl = document.getElementById('years');
const monthsEl = document.getElementById('months');
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

const makeTwoDigitNumber = (number) => {
    return number > 9 ? number : `0${number}`;
}

const toggleDateOfBirthSelecor = () => {
    if (isDOBOpen) {
        SettingContentEl.classList.add("hide")
    }
    else {
        SettingContentEl.classList.remove("hide")

    }
    isDOBOpen = !isDOBOpen;

    console.log('toggle', isDOBOpen);
};

const updateAge = () => {
    const currentDate = new Date();
    const dateDiff = currentDate - dateOfBirth;
    const years = Math.floor(dateDiff / (1000 * 60 * 60 * 24 * 365));
    const months = Math.floor(dateDiff / (1000 * 60 * 60 * 24 * 365) % 12);
    const days = Math.floor(dateDiff / (1000 * 60 * 60 * 24)) % 30;
    const hours = Math.floor(dateDiff / (1000 * 60 * 60)) % 24;
    const minutes = Math.floor(dateDiff / (1000 * 60)) % 60;
    const seconds = Math.floor(dateDiff / 1000) % 60;

    yearsEl.innerHTML = makeTwoDigitNumber(years);
    monthsEl.innerHTML = makeTwoDigitNumber(months);
    daysEl.innerHTML = makeTwoDigitNumber(days);
    hoursEl.innerHTML = makeTwoDigitNumber(hours);
    minutesEl.innerHTML = makeTwoDigitNumber(minutes);
    secondsEl.innerHTML = makeTwoDigitNumber(seconds);
};

const setDOBHandler = () => {
    const dateString = dobInputEl.value;

    dateOfBirth = dateString ? new Date(dateString) : null;

    if (dateOfBirth) {
        InitialTextEl.classList.add("hide");
        anyTxtEl.classList.add("hide");
        afterDOBBtnTxtEl.classList.remove("hide");
        backButtonEl.classList.remove("hide");

        setInterval(() => updateAge(), 1000);

    } else {
        afterDOBBtnTxtEl.classList.add("hide");
        backButtonEl.classList.add("hide");
        InitialTextEl.classList.remove("hide");
        anyTxtEl.classList.remove("hide");
    }
};
setDOBHandler();

function back() {
    location.reload();
}

SettingCogEl.addEventListener("click", toggleDateOfBirthSelecor);
dobButtonEl.addEventListener("click", setDOBHandler);