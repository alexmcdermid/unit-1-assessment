//variables
let inputValue = 1;
let count = 0;
let upEl = document.querySelector('.up');
let downEl = document.querySelector('.down');
let inputEl = document.querySelector('#input_id');
let countEl = document.querySelector('.count');

//event listeners
upEl.addEventListener('click', up);
downEl.addEventListener('click', down);
upEl.addEventListener('mouseover', upHover);
downEl.addEventListener('mouseover', downHover);
upEl.addEventListener('mouseleave',removeHover)
downEl.addEventListener('mouseleave',removeHover);
inputEl.addEventListener('input', updateInputValue);


//functions
function updateInputValue() {
    inputValue = parseInt(inputEl.value);
}

function up(){
    count+=inputValue;
    render();
}

function down(){
    count-=inputValue;
    render();
}

function upHover(){
    upEl.classList.replace('up','upHover');
}

function downHover(){
    downEl.classList.replace('down','downHover');
}

function removeHover() {
    upEl.classList.replace('upHover','up')
    downEl.classList.replace('downHover','down')
}

function render() {
    countEl.innerText = count;
    if (count<0)
        countEl.classList.replace('count', 'countRed')
    else 
        countEl.classList.replace('countRed','count')
    
}