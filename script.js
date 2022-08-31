const result = document.querySelector('.result');
const convBtn = document.querySelector('.conv');
const resetBtn = document.querySelector('.reset');
const changeBtn = document.querySelector('.change');
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const input = document.querySelector('input');

//T(F) = T(C) x 1.8 + 32
//T(C) = (T(F) - 32) / 1.8

const changeFunction = () => {
    if(one.textContent == '°C'){
        one.textContent = '°F'; 
        two.textContent = '°C';
        result.textContent = '';
    } else {
        one.textContent = '°C';
        two.textContent = '°F';
        result.textContent = '';
    }
}

const convertC = () => {
    let stopnieF = input.value * 1.8 + 32;
    result.textContent = `${input.value}°C to ${stopnieF.toFixed(1)}°F`;
    input.value = '';
}
const convertF = () => {
    let stopnieC = (input.value - 32) / 1.8;
    result.textContent = `${input.value}°F to ${stopnieC.toFixed(1)}°C`;
    input.value = '';
}
const conversion = () => {
    if(input.value != '') {
        
        if(one.textContent == '°C'){
            convertC();
        } else {
            convertF();
        }

    } else {
        result.textContent = 'Musisz podać jakąś wartość'
    }
}
const resetFunction = () => {
    result.textContent = '';
    input.textContent = '';
}

changeBtn.addEventListener('click', changeFunction);
convBtn.addEventListener('click', conversion);
resetBtn.addEventListener('click', resetFunction);