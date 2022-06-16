export const debounce = (callbackFn, delay) => {
  let timeoutId;
  return function (...args) {
    const context = this;
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callbackFn.apply(context, args), delay);
  };
};
