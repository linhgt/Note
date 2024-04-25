(function () {
  const addNoteBtn = document.querySelector("#AddNoteBtn");
  addNoteBtn.addEventListener("click", () => {
    window.location.assign(`/add-note`);
  });
})();
