const makeCall = number => (window.location.href = `tel:${number}`);
const writeEmail = email => (window.location.href = `mailto:${email}`);

export { makeCall, writeEmail };
