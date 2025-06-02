const display = document.querySelector('.value');
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.onclick = () => {
    const btnValue = button.dataset.button;

    try {
      if (btnValue === 'C') {
        display.value = '';
      } else if (btnValue === 'CE') {
        display.value = display.value.slice(0, -1);
      } else if (btnValue === '=') {
        if (display.value.includes('%')) {
          const parts = display.value.split('%');
          if (parts.length === 2 && parts[0] !== '' && parts[1] !== '') {
            const percent = parseFloat(parts[0]);
            const ofValue = parseFloat(parts[1]);
            if (!isNaN(percent) && !isNaN(ofValue)) {
              display.value = (percent / 100) * ofValue;
            } else {
              throw new Error('Invalid percentage input');
            }
          } else {
            throw new Error('Invalid percentage format');
          }
        } else if (display.value !== '') {
          display.value = eval(display.value);
        }
      } else {
        display.value += btnValue;
      }
    } catch (err) {
      display.value = 'Error';
      setTimeout(() => (display.value = ''), 1000);
    }
  };
});
