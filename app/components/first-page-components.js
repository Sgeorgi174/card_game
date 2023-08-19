import { goToPage, setPage, page } from "../app.js";
import { EASY_PAGE, HARD_PAGE, LOADING_PAGE, MEDIUM_PAGE } from "../routes.js";
import { delay } from "../modules/delay.js";

export function renderFirstPageComponent(appEl) {
  let firstPageHtml = `
    <section class="first-page">
        <div class="first-page__wrapper">
            <div class="first-page__title">Выбери<br>сложность</div>
            <div class="first-page__difficulties">  
                <div class="first-page__btn-wrapper"> 
                    <input type="radio" id="easy" name="difficulty" value="1">
                    <label for="easy">1</label>
                    
                    <input type="radio" id="medium" name="difficulty" value="2">
                    <label for="medium">2</label>
                    
                    <input type="radio" id="hard" name="difficulty" value="3">
                    <label for="hard">3</label>
                </div> 
            </div>
            <button type="submit" id="start" class="first-page__start-btn">Старт</button>
        </div>
    </section>
    `;

  appEl.innerHTML = firstPageHtml;

  const easyBtn = document.getElementById("easy");
  const mediumBtn = document.getElementById("medium");
  const hardBtn = document.getElementById("hard");
  const startBtn = document.getElementById("start");
  const btnCollection = [easyBtn, mediumBtn, hardBtn];

  btnCollection.forEach((el) => {
    el.addEventListener("click", () => {
      btnCollection.forEach((el) => {
        el.removeAttribute("checked");
      });
      el.setAttribute("checked", "");
    });
  });

  startBtn.addEventListener("click", () => {
    if (easyBtn.hasAttribute("checked")) {
      setPage(LOADING_PAGE);
      goToPage(page);
      delay(1000).then(() => {
        setPage(EASY_PAGE);
        goToPage(page);
      });
    }

    if (mediumBtn.hasAttribute("checked")) {
      setPage(LOADING_PAGE);
      goToPage(page);
      delay(1000).then(() => {
        setPage(MEDIUM_PAGE);
        goToPage(page);
      });
    }

    if (hardBtn.hasAttribute("checked")) {
      setPage(LOADING_PAGE);
      goToPage(page);
      delay(1000).then(() => {
        setPage(HARD_PAGE);
        goToPage(page);
      });
    }
  });
}
