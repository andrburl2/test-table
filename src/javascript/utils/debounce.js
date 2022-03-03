function debounce(fn, timeoutMs) {
  return function(...args) {
    let previousCall = this.call;

    this.call = Date.now();

    // если это первый вызов или с прошлого не прошло времени больше задержки, то timeout очищается
    if (previousCall && (this.call - previousCall <= timeoutMs)) {
      clearTimeout(this.timer);
    }

    // создается timeout, вызывающий нужную функцию через указанную задержку в ms
    this.timer = setTimeout(() => fn(...args), timeoutMs);
  };
}

export default debounce;