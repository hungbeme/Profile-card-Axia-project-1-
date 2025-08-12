'script;'

const inputSearch = document.querySelector(".input-name");
const searchBtn = document.querySelector(".search-btn");
const clearBtn = document.querySelector(".clear-btn");
const filterFormValue = document.querySelector(".filter-form");
const viewAllBtn = document.querySelector(".viewall-btn");
const gridSection = document.querySelector(".grid-section");

console.log("working");

// searchBtn.addEventListener("click", function () {
//   console.log(inputSearch.value);
//   console.log("first");
// });

const renderDetails = function (data) {
  const html = `
   <div class="profile-card">
              <p class="profile-name">${data.name}</p>
              <div class="text-section">
                <ul>
                  <li>
                    <ion-icon class="icon" name="location-outline"></ion-icon>
                    ${data.address.city}
                  </li>
                  <li><ion-icon name="business-outline"></ion-icon> ${data.company.name}</li>
                  <li>
                    <ion-icon class="icon" name="mail-outline"></ion-icon> ${data.email}
                  </li>
                  <li class="view-more">
                    view more
                    <ion-icon
                      class="icon"
                      name="chevron-down-outline"
                    ></ion-icon>
                  </li>
                  <li class="hidden-details">
                    <ion-icon class="icon" name="call-outline"></ion-icon>
                    ${data.phone}
                  </li>
                  <li class="hidden-details">
                    <ion-icon class="icon" name="globe-outline"></ion-icon>
                    ${data.website}
                  </li>
                </ul>
              </div>
            </div>
  `;
  console.log(html);
  gridSection.insertAdjacentHTML("beforeend", html);
};

// const fetchApi = fetch(`https://jsonplaceholder.typicode.com/users`);

// viewAllBtn.addEventListener("click", function () {
//   const viewallDetails = (data) => {
//     renderDetails(data);
//   };
// });

const getApiDetails = function () {
  fetch(`https://jsonplaceholder.typicode.com/users`)
    .then((response) => response.json())
    .then((data) => {
      for (let a = 0; a < data.length; a++) {
        console.log(data[a]);
        // viewallDetails(data[a]);
        // renderDetails(data[a]);
        viewAllBtn.addEventListener("click", function () {
          renderDetails(data[a]);
        });
      }
      viewAllBtn.removeEventListener("click");
    });
};

getApiDetails();
