let natija = document.getElementById('natija');

function qoshBelgi(belgi) {
  natija.value += belgi;
}

function tozala() {
  natija.value = '';
}

function ochir() {
  natija.value = natija.value.slice(0, -1);
}

function hisobla() {
  try {
    natija.value = eval(natija.value.replace('%', '/100'));
  } catch (e) {
    natija.value = 'Xato';
  }
}
