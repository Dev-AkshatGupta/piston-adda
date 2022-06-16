export const debounce = (callbackFn, delay) => {
  let timeoutId;
  return function (...args) {
    const context = this;
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callbackFn.apply(context, args), delay);
  };
};
export const throttling = (callbackFn, delay) => {
  let flag = true;
  return function (...args) {
    const context = this;
    if (flag) {
      callbackFn.apply(context, args);
      flag = false;
      setTimeout(() => {
        flag = true;
      }, delay);
    }
  };
};