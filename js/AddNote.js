(function() {
  const boldTextBtn = document.querySelector("#BoldText");
  const italicTextBtn = document.querySelector("#ItalicText");
  const underlineTextBtn = document.querySelector("#UnderlineText");
  
  boldTextBtn.addEventListener('click', () => {
    const input = document.querySelector("#NoteInput");
    input.classList.toggle('bold');
  })
  italicTextBtn.addEventListener('click', () => {
    const input = document.querySelector("#NoteInput");
    input.classList.toggle('italic');
  })
  underlineTextBtn.addEventListener('click', () => {
    const input = document.querySelector("#NoteInput");
    input.classList.toggle('underline');
  })
})()