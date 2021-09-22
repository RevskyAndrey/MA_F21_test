function changePandemicStartMap(str) {
  let pandemicArray = str.split('X');
  let result = [];
  let total = 0;
  let infected = 0;
  for (let i = 0; i < pandemicArray.length; i++) {
    total += pandemicArray[i].length;
    if (pandemicArray[i].includes(1)) {
      result.push(pandemicArray[i].replaceAll('0', '1'));
      infected += pandemicArray[i].length;
    } else {
      result.push(pandemicArray[i]);
    }
  }
  return { pandemicEndMap: result.join('X'), total, infected };
}

function createMap(str, selector) {
  let arr = str.split('')
  for (let i = 0; i < arr.length; i++) {
    let div = document.createElement('div');
    div.className = 'box';
    if (arr[i] === 'X') {
      div.classList.add('ocean');
    }
    if (arr[i] === '0') {
      div.classList.add('uninfected');
    }
    if (arr[i] === '1') {
      div.classList.add('infected');
    }
    selector.append(div);
  }
}

function updateHTML(total, infected, percentage) {
  const totalSpan = document.querySelector('.js_total');
  const infectedSpan = document.querySelector('.js_infected');
  const percentageSpan = document.querySelector('.js_percentage');
  totalSpan.innerHTML = total;
  infectedSpan.innerHTML = infected;
  percentageSpan.innerHTML = percentage + '%';
}

function getPercentage(infected, total) {
  return ((infected / total) * 100).toFixed(2)
}

function start() {
  const pandemicStartMap = "XX0X10010X000X010X0";

  const divStart = document.querySelector('.js_start');
  const divEnd = document.querySelector('.js_end');

  const { pandemicEndMap, total, infected } = changePandemicStartMap(pandemicStartMap);
  const percentage = getPercentage(infected, total);

  createMap(pandemicStartMap, divStart);
  createMap(pandemicEndMap, divEnd);
  updateHTML(total, infected, percentage)
}

start();
