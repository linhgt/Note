(function () {
  console.log("script loaded");
  const addNoteBtn = document.querySelector("#AddNoteBtn");
  addNoteBtn.addEventListener("click", () => {
    console.log("hello");
    window.location.assign(`/add-note`);
  });
})();
