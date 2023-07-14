const mainActionButton = document.querySelector("#main-action-button");
mainActionButton.onclick = () => {
  document.querySelector("#products").scrollIntoView({ behavior: "smooth" });
};

let links = document.querySelectorAll(".menu-item > a");
links.forEach((element) => {
  element.onclick = () => {
    document
      .getElementById(element.getAttribute("data-link"))
      .scrollIntoView({ behavior: "smooth" });
  };
});

let buttons = document.querySelectorAll(".product-button");
buttons.forEach((element) => {
  element.onclick = () => {
    document.getElementById("order").scrollIntoView({ behavior: "smooth" });
  };
});

let burger = document.querySelector("#burger");
let name = document.querySelector("#name");
let phone = document.querySelector("#phone");
let btnOrder = document.querySelector("#order-action");

btnOrder.onclick = () => {
  let hasError = false;
  [burger, name, phone].forEach((element) => {
    if (!element.value) {
      element.parentElement.style.background = "red";
      hasError = true;
    } else {
      element.parentElement.style.background = "";
    }
  });
  if (!hasError) {
    [burger, name, phone].forEach((element) => {
      element.value = "";
    });
    alert("Спасибо за заказ! Мы скоро свяжемся с вами");
  }
};
let prices = document.querySelectorAll(".product-item-price");
document.getElementById("changeCurrency").onclick = (e) => {
  let currentCurrency = e.target.innerText;
  let newCurrency = "$";
  let coefficient = 1;
  if (currentCurrency === "$") {
    newCurrency = "₽";
    coefficient = 96;
  } else if (currentCurrency === "₽") {
    newCurrency = "BYN";
    coefficient = 30;
  } else if (currentCurrency === "BYN") {
    newCurrency = "€";
    coefficient = 0.9;
  } else if (currentCurrency === "€") {
    newCurrency = "¥";
    coefficient = 6.9;
  } else if (currentCurrency === "¥") {
    newCurrency = "£";
    coefficient = 0.8;
  }
  e.target.innerText = newCurrency;

  prices.forEach((element) => {
    element.innerText = `${+(
      element.getAttribute("data-base-price") * coefficient
    ).toFixed(1)} ${newCurrency}`;
  });
};
