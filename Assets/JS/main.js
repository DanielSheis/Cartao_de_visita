const LightOrDark = document.getElementById('Light-or-dark');
const sunOrMoon = document.getElementById('sun-or-moon');
const changeTheme = document.getElementById('swtich-theme');

let change = 1;
sunOrMoon.addEventListener('click', () => {
    if(change == 1){
        changeTheme.href = "./Assets/CSS/dark-mode.css";
        sunOrMoon.src = "./Assets/IMG/sunny.svg";
        change -= 1;
    } else {
        changeTheme.href = "./Assets/CSS/style.css";
        sunOrMoon.src = "./Assets/IMG/moon.svg";
        change += 1;
    };
});