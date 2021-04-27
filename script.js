const input = document.querySelector(`.input`);
const button = document.querySelector(`.btn`);
const listContainer = document.querySelector(`.list-container`);
const btnRefresh = document.querySelector(`.refresh-icon`);
const labelDate = document.querySelector(`.date`);

// Creating list items
let allListItems;
let index = 0;
const addListItem = function () {
   index++;
   const html = `<li class="list-item">${index}. ${input.value}</li>`;
   listContainer.insertAdjacentHTML(`beforeend`, html);
   input.value = ``;
   allListItems = document.getElementsByClassName(`list-item`);

   Array.from(allListItems).forEach((el) => {
      el.addEventListener(`click`, function () {
         el.remove();
      });
   });
};

// Add Items
button.addEventListener(`click`, function () {
   if (input.value) addListItem();
});

//Add Items by Pressing Enter Key
document.addEventListener(`keydown`, function (e) {
   if (e.key === `Enter` && input.value) addListItem();
});

// Start from empty page
btnRefresh.addEventListener(`click`, function () {
   index = 0;
   input.value = ``;
   if (allListItems)
      Array.from(allListItems).forEach((el) => {
         el.remove();
      });
});

// Implementing Date and Day
const now = new Date();
const options = {
   // hour: `numeric`,
   // minute: `numeric`,
   day: `numeric`,
   month: `short`,
   year: `numeric`,
};
const locale = navigator.language;
labelDate.textContent = new Intl.DateTimeFormat(locale, options).format(now);

console.log(`welcome`);

// Delete Items
// Method 1
// for (el of listItem) {}

// Method 2
// [...listItem].forEach((el) => console.log(el));

// Array.from() = to create a shallow array copy
// Method 3
// Array.from(listItem).forEach((el) => {
//    el.addEventListener(`click`, function () {
//       console.log(`clicked`);
//    });
// });
