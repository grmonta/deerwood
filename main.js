var x = document.getElementById('topNav');

function dropDown() {
  if (x.className === 'toggle-menu') {
    x.className += ' responsive';
  } else {
    x.className = 'toggle-menu';
  }
}

function closeUp() {
  if (x.className === 'toggle-menu responsive') {
    x.className = 'toggle-menu';
  } else {
    x.className = 'toggle-menu repsonsive';
  }
}
