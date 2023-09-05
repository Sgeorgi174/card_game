let minutes = 0;
let seconds = 0;
let interval: undefined | ReturnType<typeof setInterval> = undefined;

export function startTimer(htmlElement: HTMLElement) {
    interval = setInterval(() => {
        seconds++;
        if (seconds === 60) {
            minutes++;
            seconds = 0;
        }

        // Выводим время на страницу
        htmlElement.innerHTML =
            (minutes < 10 ? '0' : '') +
            minutes +
            '.' +
            (seconds < 10 ? '0' : '') +
            seconds;
    }, 1000);
}

// Функция для остановки секундомера
export function stopTimer() {
    clearInterval(interval);
    minutes = 0;
    seconds = 0;
}
