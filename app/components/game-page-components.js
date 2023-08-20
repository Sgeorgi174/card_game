import { userSettings } from "../app.js";

//Два варианта отрисовки
export function renderGame(appEl) {
  let pageHtml = `
    <div class="easy-page__title">ТУТ БУДЕТ ${
      userSettings.difficulty === "easy"
        ? "ЛЕГКАЯ"
        : userSettings.difficulty === "medium"
        ? "СРЕДНЯЯ"
        : "ВЫСОКАЯ"
    } СЛОЖНОСТЬ</div>
    `;

  appEl.innerHTML = pageHtml;
}

//Как по мне этот более читаемый и удобный
export function renderGamePage(appEl) {
  if (userSettings.difficulty === "easy") {
    let easyPageHtml = `
      <div class="easy-page__title">ТУТ БУДЕТ ЛЕГКАЯ СЛОЖНОСТЬ</div>
  `;

    appEl.innerHTML = easyPageHtml;
  }

  if (userSettings.difficulty === "medium") {
    let mediumPageHtml = `
      <div class="easy-page__title">ТУТ БУДЕТ СРЕДНЯЯ СЛОЖНОСТЬ</div>
  `;

    appEl.innerHTML = mediumPageHtml;
  }

  if (userSettings.difficulty === "hard") {
    let hardPageHtml = `
      <div class="easy-page__title">ТУТ БУДЕТ ВЫСОКАЯ СЛОЖНОСТЬ</div>
  `;

    appEl.innerHTML = hardPageHtml;
  }
}
