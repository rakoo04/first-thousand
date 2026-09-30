const boxes = [...document.querySelectorAll('ul.check input[type=checkbox]')];
const key = 'ft-checks-v1';
const saved = JSON.parse(localStorage.getItem(key) || '{}');
boxes.forEach((box, i) => {
  const pack = box.closest('ul').dataset.pack || 'x';
  const id = pack + '-' + i;
  box.dataset.id = id;
  box.checked = !!saved[id];
  box.addEventListener('change', () => {
    saved[id] = box.checked;
    localStorage.setItem(key, JSON.stringify(saved));
    paint();
  });
});
function paint() {
  const el = document.getElementById('doneBar');
  if (!el) return;
  const on = boxes.filter(b => b.checked).length;
  el.textContent = 'Checks ' + on + ' / ' + boxes.length;
}
paint();
