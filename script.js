"script;";
console.log("working");

const toogleBtn = document.querySelector(".toogle-mode");
const light = document.querySelector(".light");
const dark = document.querySelector(".dark");
const inputSearch = document.querySelector(".input-name");
const searchBtn = document.querySelector(".search-btn");
// const clearBtn = document.querySelector(".clear-btn");
const filterFormValue = document.querySelector(".filter-form");
// const viewAllBtn = document.querySelector(".viewall-btn");
const gridSection = document.querySelector(".grid-section");
const viewMoreBtn = document.querySelector(".view-more");
const hiddenDetail = document.querySelector(".li-details");

/********************************/
/******* USING API *******/
/******************************/
const renderDetails = function (data) {
  const html = `
  <div class="profile-card hide">
            <p class="profile-name">${data.name}</p>
            <div class="text-section">
              <ul>
                <li>
                  <ion-icon class="icon" name="location-outline"></ion-icon>
                  ${data.address.street}, ${data.address.city}
                </li>
                <li><ion-icon name="business-outline"></ion-icon> ${data.company.name} </li>
                <li>
                  <ion-icon class="icon" name="mail-outline"></ion-icon> ${data.email}
                </li>
              </ul>

              <button class="link view-more" href="#">View More &dArr;</button>

              <div class="hidden-details">
                <ul>
                  <li>
                    <ion-icon class="icon" name="call-outline"></ion-icon>
                    ${data.phone}
                  </li>
                  <li class="">
                    <ion-icon class="icon" name="globe-outline"></ion-icon>
                    ${data.website}
                  </li>
                </ul>
              </div>
            </div>
          </div>
  `;
  gridSection.insertAdjacentHTML("beforeend", html);
};

const getApiDetails = function () {
  fetch(`https://jsonplaceholder.typicode.com/users`)
    .then((response) => response.json())
    .then((data) => {
      for (let a = 0; a < data.length; a++) {
        renderDetails(data[a]);
      }
    });
};
getApiDetails();

/********************************/
/******* TOOGLE MODE *******/
/******************************/

light.addEventListener("click", function () {
  document.querySelector("body").classList.toggle("toogle-light-mode");

  light.classList.toggle("add");
  dark.classList.toggle("add");
});

dark.addEventListener("click", function () {
  document.querySelector("body").classList.toggle("toogle-light-mode");
  light.classList.toggle("add");
  dark.classList.toggle("add");
});
// }

// const fetchApi = fetch(`https://jsonplaceholder.typicode.com/users`);

// viewAllBtn.addEventListener("click", function () {
//   const viewallDetails = (data) => {
//     renderDetails(data);
//   };
// });

// clearBtn.addEventListener("click", function () {
//   inputSearch.value = "";
//   gridSection.textContent = "";
// });

// viewMoreBtn.addEventListener("click", function () {
//   hiddenDetail.classList.toggle(".hidden-details");
//   console.log("fetch");
//   console.log(hiddenDetail.classList);
// });

// searchBtn.addEventListener("click", function () {
//   console.log("first");
// });

// searchBtn.addEventListener("click", function () {
//   console.log(inputSearch.value);
//   console.log("first");
// });
