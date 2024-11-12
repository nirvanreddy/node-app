const delayedGreeting = async (name) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Hello, ${name}!`);
    }, 1000);
  });
};

module.exports = { delayedGreeting };