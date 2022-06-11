//navbar functionality
const toggleBtn = document.querySelector(".toggle-nav");
const links = document.querySelector(".links");

toggleBtn.addEventListener("click", function () {
  /*alert('button was pressed');*/
  /*console.log(links.classList); */
  links.classList.toggle("show-links");
});

//QUESTIONS FUNCTIONALITY

//using selectors inside the element
//create array called questions from elements in document with the class=section
const questions = document.querySelectorAll(".question");

//console.log(questions);
//for each button in the array questions, add a btn event listener that checks if one of the buttons is already pressed and showing text and if so toggles the text and buttons to be hidden(off) for the last pressed btn and showing(on) for the newly pressed btn
questions.forEach((question) => {
  //console.log(question);
  //gets the btn for each question
  const btn = question.querySelector(".faq-btn");
  //console.log(btn);

  //creates btn click event listener that hides the question text if the btn pressed doesnt match the question
  btn.addEventListener("click", () => {
    questions.forEach((item) => {
      //checks if the btn pressed corresponds to the selected question
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });
    //console.log(question.classList);

    //toggles on the text for a question if the corresponding btn is clicked
    question.classList.toggle("show-text");
  });
});
