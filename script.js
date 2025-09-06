"use script;";
const toogleBtn = document.querySelector(".toogle-mode");
const light = document.querySelector(".light");
const dark = document.querySelector(".dark");
const inputSearch = document.querySelector(".input-name");
const searchBtn = document.querySelector(".search-btn");
const selectCityEl = document.getElementById("city");
const selectCompanyEl = document.getElementById("company");
const gridSection = document.querySelector(".grid-section");
const clearBtn = document.querySelector(".clear-btn");
const API_URL = `https://jsonplaceholder.typicode.com/users`;

/********************************/
/******* USING API *******/
/******************************/
gridSection.innerHTML = "";

const fetchAPI = function (data) {
  const check = fetch(API_URL)
    .then((response) => response.json())
    .then((data) => {
      data.map((arr) => {
        renderDetails(arr);
      });
      clearBtnFunction(data);
      searchFunction(data);
      filterCityFunction(data);
      filterCompanyFunction(data);
      viewFunction();
      alert("Details gotten successfully✅");
    })
    .catch(() =>
      alert(`Acquiring Details failed❌. Please check your internet connection`)
    );
};
fetchAPI();

/********************************/
/******* RENDER DETAILS *******/
/******************************/

const renderDetails = function (data) {
  try {
    if (!data) throw new Error("User Not found");
    const html = `
       <div class="profile-card">
              <p class="profile-name">${data.name}</p>
              <div class="text-section">
                <ul>
                  <li>
                    <ion-icon class="icon" name="location-outline"></ion-icon>
                    ${data.address.street}, ${data.address.city}
                  </li>
                  <li>
                    <ion-icon name="business-outline"></ion-icon>
                    ${data.company.name}
                  </li>
                  <li>
                    <ion-icon class="icon" name="mail-outline"></ion-icon>
                    ${data.email}
                  </li>
                </ul>

                  <div class="view-buttons">
                    <button class="view-more">View More &dArr;</button>
                    <button class="view-less">View Less &uArr;</button>
                  </div>

                  <div class="hidden-details more-details">
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
  } catch (err) {
    alert(err.message);
  }
};

/********************************/
/******* SEARCH FUNCTION *******/
/******************************/

const searchFunction = function (response) {
  searchBtn.addEventListener("click", function () {
    gridSection.innerHTML = "";

    const inputSearchValue = inputSearch.value.toLowerCase();

    const namefnd = response.find(
      (val) =>
        val.name.toLowerCase() === inputSearchValue ||
        val.username.toLowerCase() === inputSearchValue
    );
    renderDetails(namefnd);
    viewFunction();
  });
};

/********************************/
/******* CLEAR FUNCTION *******/
/******************************/

const clearBtnFunction = function (response) {
  clearBtn.addEventListener("click", function () {
    gridSection.innerHTML = "";
    inputSearch.value = "";

    response.map((_, i) => {
      renderDetails(response[i]);
    });
    viewFunction();
  });
};

/********************************/
/******* FILTER FUNCTION *******/
/******************************/

////// FILTER CITY
const filterCityFunction = function (data) {
  data.map((val, i) => {
    const cityHtml = `<option value="${data[i].address.city}">${data[i].address.city}</option>`;
    selectCityEl.insertAdjacentHTML("beforeend", cityHtml);
  });

  selectCityEl.addEventListener("change", function () {
    gridSection.innerHTML = "";
    const optionValue = this.value;

    const cityFil = data.filter(
      (val) => optionValue === val.address.city || optionValue === "all"
    );

    cityFil.map((arr) => {
      renderDetails(arr);
    });
    viewFunction();
  });
};

////// FILTER COUNTRY

const filterCompanyFunction = function (data) {
  data.map((val, i) => {
    const companyHtml = `<option value="${data[i].company.name}">${data[i].company.name}</option>`;
    selectCompanyEl.insertAdjacentHTML("beforeend", companyHtml);
  });

  selectCompanyEl.addEventListener("change", function () {
    gridSection.innerHTML = "";
    const optionValue = this.value;

    const countryfil = data.filter(
      (val) => optionValue === val.company.name || optionValue === "all"
    );

    countryfil.map((arr) => {
      renderDetails(arr);
    });

    viewFunction();
  });
};

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

/********************************/
/******* VIEW MORE *******/
/******************************/

const viewFunction = function () {
  const viewMoreBtn = document.querySelectorAll(".view-more");
  const viewLessBtn = document.querySelectorAll(".view-less");
  const viewButtonsEl = document.querySelectorAll(".profile-card");

  viewMoreBtn.forEach((viewVal) => {
    viewVal.addEventListener("click", function () {
      viewButtonsEl.forEach((buttonval) => {
        buttonval.classList.add("show");
      });
    });
  });

  viewLessBtn.forEach((val) => {
    val.addEventListener("click", function () {
      viewButtonsEl.forEach((val) => val.classList.remove("show"));
    });
  });
};
