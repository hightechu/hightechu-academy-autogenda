var buttons = document.querySelectorAll('button');
var modal = document.querySelector('.modal');
var backdrop = document.querySelector('.backdrop');

var outputParagraph = document.querySelector('#quote');
var textEdit = document.querySelector('.modal textarea');

var quote = 'First Event';
var editedQuote = '';

function updateParagraph() {
  outputParagraph.textContent = quote;
}

function closeModal() {
  modal.style.display = 'none';
  backdrop.style.display = 'none';
}

updateParagraph();

buttons[1].addEventListener('click', function() {
  modal.style.display = 'block';
  backdrop.style.display = 'block';
  editedQuote = quote;
  textEdit.style.width = '100%';
  textEdit.value = quote;
});

buttons[0].addEventListener('click', closeModal);
backdrop.addEventListener('click', closeModal);

buttons[0].addEventListener('click', function() {
  closeModal();
  if (editedQuote.trim().length > 0) {
    quote = editedQuote;
    updateParagraph();
  }
});

textEdit.addEventListener('input', function() {
  editedQuote = textEdit.value;
});
	