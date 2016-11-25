export default function v (value, ...args) {
  return typeof value === 'function' ? value(...args) : value;
};
