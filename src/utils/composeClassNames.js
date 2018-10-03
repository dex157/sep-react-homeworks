export default (...classNames) => {
  return classNames
    .filter(className => className && typeof className === 'string')
    .join(' ');
};
