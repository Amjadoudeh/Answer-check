function answerHTML(correct, el) {
        if (correct) {
          document.getElementById(el).innerHTML = "Correct!";
        } else {
          document.getElementById(el).innerHTML = "Incorrect";
        }
      }

      function resetButton() {
        const buttons = document.querySelectorAll(".button");
        buttons.forEach(function (button) {
          button.classList.remove("incorrect");
          button.classList.remove("red");
          button.classList.remove("correct");
          button.classList.remove("green");
        });
      }

      function getAnswer() {
        resetButton();
        if (event.target.id == "correct") {
          event.target.classList.add("correct");
          event.target.classList.add("green");
          answerHTML(true, "checked1");
        } else {
          event.target.classList.add("incorrect");
          event.target.classList.add("red");
          answerHTML(false, "checked1");
        }
      }

      document.addEventListener("DOMContentLoaded", function (evnt) {
        var buttons = document.querySelectorAll(".button");
        buttons.forEach(function (button) {
          button.addEventListener("click", getAnswer);
        });

        input = document.querySelector("input");
        check = document.querySelector("#check");
        check.addEventListener("click", function (evnt) {
          if (input.value === "1939") {
            answerHTML(true, "checked2");
          } else {
            answerHTML(false, "checked2");
          }
        });

        inputAd = document.querySelector("#add");
        checkAd = document.querySelector("#checkAd");

        checkAd.addEventListener("click", function (event) {
          if (inputAd.value === "6") {
            answerHTML(true, "checked3");
          } else {
            answerHTML(false, "checked3");
          }
        });
      });
