
const calculator = document.getElementById('calculator');
const display = document.getElementById('display');
const buttons = document.querySelector('.buttons')
const percentButton = document.getElementById('percent');

buttons.addEventListener('click', (e) => {
    if (e.target.tagName === 'INPUT') {
        const value = e.target.value;
        switch (value) {
            case '=':
                try {
                    display.value = eval(display.value);
                } catch (e) {
                    display.value = 'Error';
                }
                break;
            case 'AC':
                display.value = '';
                break;
            case 'c':
                display.value = display.value.slice(0, -1);
                break;
            
            case '%':
                const currentValue = parseFloat(display.value);
                display.value = (currentValue / 100).toString();
                break;
            default:
                display.value += value;
        }
    }
});
