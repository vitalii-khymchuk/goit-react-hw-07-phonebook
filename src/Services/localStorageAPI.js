function update(item, data) {
  const stringified = JSON.stringify(data);
  localStorage.setItem(item, stringified);
}

function get(key, initialState = []) {
  try {
    const savedData = localStorage.getItem(key);
    return JSON.parse(savedData) ?? initialState;
  } catch (error) {
    return initialState;
  }
}

const storage = { update, get };

export default storage;
