const Height = (min = 0) => {
  return { minHeight: `${parseInt(window.innerHeight) - min}px` };
};

export { Height };
