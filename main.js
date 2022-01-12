
const Http = {
  get: async (url) => {
    try {
      const response = await fetch(url);
      const result = await response.json();
      return result;
    } catch (error) {
      return error;
    }
  },
  post: async (url, data) => {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      return result;
    } catch (error) {
      return error;
    }
  },
};

const setItem = (k, v) => {
  localStorage.setItem(k, v);
};

const getItem = (k) => {
  return localStorage.getItem(k);
};

const select = (selector) => {
  return document.querySelector(selector);
};
const selectAll = (selector) => {
  return document.querySelectorAll(selector);
};

//hide element
const hide = (element) => (element.style.display = "none");

//remove duplicates
const duplicate = (arrayNum) => [...new Set(arrayNum)];

//reverse a String
const reverseStr = (str) => str.split("").reverse().join("");

