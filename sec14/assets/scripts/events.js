const button = document.querySelector("button");

// button.onClick = function(){};

const buttonClickHandler = (event) => {
    // event.target.disabled = true;
    console.log(event);
};
const anotherButtonClickHandler = () => {
    console.log("This was clicked!");
};

// button.onclick = buttonClickHandler;
// button.onclick = anotherButtonClickHandler;

const boundFn = buttonClickHandler.bind(this);

// button.addEventListener("click", buttonClickHandler);
// setTimeout(() => {
//     button.removeEventListener("click", buttonClickHandler);
// }, 2000);

// buttons.forEach((btn) => {
//     btn.addEventListener("mouseenter", buttonClickHandler);
// });

// window.addEventListener("scroll", (event) => {
//     console.log(event);
// });

const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(event);
});

const div = document.querySelector("div");
div.addEventListener("mouseenter", (event) => {
    console.log("CLICKED DIB");
    console.log(event);
});
button.addEventListener("mouseenter", (event) => {
    event.stopPropagation();
    console.log("CLICKED BUTTON");
    console.log(event);
});

const listItems = document.querySelectorAll("li");
const list = document.querySelector("ul");
list.addEventListener("click", function (event) {
    // console.log(event.currentTarget);
    // event.target.classList.toggle("highlight");
    event.target.closest("li").classList.toggle("highlight");
    // form.submit()
    button.click();
    console.log(this);
});
// listItems.forEach((listItem) => {
//     listItem.addEventListener("click", (event) => {
//         event.target.classList.toggle("highlight");
//     });
// });
