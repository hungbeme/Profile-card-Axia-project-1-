"script;";

const toogleBtn = document.querySelector(".toogle-mode");
const light = document.querySelector(".light");
const dark = document.querySelector(".dark");
const inputSearch = document.querySelector(".input-name");
const searchBtn = document.querySelector(".search-btn");
const filterFormValue = document.querySelector(".filter-form");
const gridSection = document.querySelector(".grid-section");
const viewMoreBtn = document.querySelector(".view-more");
const hiddenDetail = document.querySelector(".more-details");

/********************************/
/******* USING API *******/
/******************************/

gridSection.innerHTML = "";

const fectchAPI = fetch(`https://jsonplaceholder.typicode.com/users`)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    generalFunction(data);
    alert("Details gotten successfully✅");
  })
  .catch(() =>
    alert(`Acquiring Details failed. Please check your internet connection`)
  );

const generalFunction = function (data) {
  gridSection.innerHTML = "";

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

  /******************************/
  /******* RENDER DETAILS *******/
  /******************************/
  data.map((arr, i) => {
    const html = `
      <div class="profile-card hide">
                <p class="profile-name">${arr.name}</p>
                <div class="text-section">
                  <ul>
                    <li>
                      <ion-icon class="icon" name="location-outline"></ion-icon>
                      ${arr.address.street}, ${arr.address.city}
                    </li>
                    <li><ion-icon name="business-outline"></ion-icon> ${arr.company.name} </li>
                    <li>
                      <ion-icon class="icon" name="mail-outline"></ion-icon> ${arr.email}
                    </li>
                  </ul>
    
    
                  <div class="hidden-details more-details">
                    <ul>
                      <li>
                        <ion-icon class="icon" name="call-outline"></ion-icon>
                        ${arr.phone}
                      </li>
                      <li class="">
                        <ion-icon class="icon" name="globe-outline"></ion-icon>
                        ${arr.website}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
      `;
    gridSection.insertAdjacentHTML("beforeend", html);
  });

  /********************************/
  /******* VIEW MORE *******/
  /******************************/
  viewMoreBtn.addEventListener("click", function () {
    gridSection.innerHTML = "";
    data.map((arr, i) => {
      const html = `
        <div class="profile-card hide">
            <p class="profile-name">${arr.name}</p>
            <div class="text-section">
              <ul>
                <li>
                  <ion-icon class="icon" name="location-outline"></ion-icon>
                  ${arr.address.street}, ${arr.address.city}
                </li>
                <li><ion-icon name="business-outline"></ion-icon> ${arr.company.name} </li>
                <li>
                  <ion-icon class="icon" name="mail-outline"></ion-icon> ${arr.email}
                </li>
              </ul>


              <div class="more-details">
                <ul>
                  <li>
                    <ion-icon class="icon" name="call-outline"></ion-icon>
                    ${arr.phone}
                  </li>
                  <li class="">
                    <ion-icon class="icon" name="globe-outline"></ion-icon>
                    ${arr.website}
                  </li>
                </ul>
              </div>
            </div>
          </div>
  `;
      gridSection.insertAdjacentHTML("beforeend", html);
    });
  });

  /********************************/
  /******* SEARCH FUNCTION *******/
  /******************************/

  // searchBtn.addEventListener("click", function (e) {
  //   e.preventDefault();
  //   console.log("first");

  //   const searchValue = inputSearch.value.toLowerCase().trim();
  //   data.map((arr, i) => {
  //     const nameLowerCase = data[i].name.toLowerCase();
  //     const usernameLowerCase = data[i].username.toLowerCase();

  //     if (searchValue === nameLowerCase || searchValue === usernameLowerCase) {
  //       console.log("first");

  //       gridSection.textContent = "";
  //       const html2 = `
  //   <div class="profile-card hide">
  //             <p class="profile-name">${data[i].name}</p>
  //             <div class="text-section">
  //               <ul>
  //                 <li>
  //                   <ion-icon class="icon" name="location-outline"></ion-icon>
  //                   ${data[i].address.street}, ${data[i].address.city}
  //                 </li>
  //                 <li><ion-icon name="business-outline"></ion-icon> ${data[i].company.name} </li>
  //                 <li>
  //                   <ion-icon class="icon" name="mail-outline"></ion-icon> ${data[i].email}
  //                 </li>
  //               </ul>
  //               <div class="hidden-details">
  //                 <ul>
  //                   <li>
  //                     <ion-icon class="icon" name="call-outline"></ion-icon>
  //                     ${data[i].phone}
  //                   </li>
  //                   <li class="">
  //                     <ion-icon class="icon" name="globe-outline"></ion-icon>
  //                     ${data[i].website}
  //                   </li>
  //                 </ul>
  //               </div>
  //             </div>
  //           </div>
  //   `;
  //       gridSection.textContent = "";
  //       gridSection.insertAdjacentHTML("beforeend", html2);
  //     }

  //     if (searchValue !== nameLowerCase || searchValue !== usernameLowerCase) {
  //       const html = `
  //     <div class="profile-card hide">
  //               <p class="profile-name">${arr.name}</p>
  //               <div class="text-section">
  //                 <ul>
  //                   <li>
  //                     <ion-icon class="icon" name="location-outline"></ion-icon>
  //                     ${arr.address.street}, ${arr.address.city}
  //                   </li>
  //                   <li><ion-icon name="business-outline"></ion-icon> ${arr.company.name} </li>
  //                   <li>
  //                     <ion-icon class="icon" name="mail-outline"></ion-icon> ${arr.email}
  //                   </li>
  //                 </ul>

  //                 <div class="hidden-details more-details">
  //                   <ul>
  //                     <li>
  //                       <ion-icon class="icon" name="call-outline"></ion-icon>
  //                       ${arr.phone}
  //                     </li>
  //                     <li class="">
  //                       <ion-icon class="icon" name="globe-outline"></ion-icon>
  //                       ${arr.website}
  //                     </li>
  //                   </ul>
  //                 </div>
  //               </div>
  //             </div>
  //     `;
  //       gridSection.insertAdjacentHTML("beforeend", html);
  //     }
  //   });
  // });
};

// const searchValue = inputSearch.value.trim();

//     /////////////////////////
//     // ////////  TRIALS  //////
//     // const nameArray = [
//     //   "Leanne Graham",
//     //   "Ervin Howell",
//     //   "Clementine Bauch",
//     //   "Patricia Lebsack",
//     //   "Chelsey Dietrich",
//     //   "Mrs. Dennis Schulist",
//     //   "Kurtis Weissnat",
//     //   "Nicholas Runolfsdottir V",
//     //   "Glenna Reichert",
//     //   "Clementina DuBuque",
//     // ];

//     // const usernameArray = [
//     //   "Bret",
//     //   "Antonette",
//     //   "Samantha",
//     //   "Karianne",
//     //   "Kamren",
//     //   "Leopoldo_Corkery",
//     //   "Elwyn.Skiles",
//     //   "Maxime_Nienow",
//     //   "Delphine",
//     //   "Moriah.Stanton",
//     // ];

//     // // console.log(searchValue);
//     // usernameArray.map((arr, i) => {
//     //   const lowerCaseValues = arr.toLowerCase();
//     //   // console.log(lowerCaseValues);
//     //   if (searchValue === arr.toLowerCase()) {
//     //     console.log("Details found");
//     //   } else return;
//     // });

//     // // console.log(usernameArray.toLowerCase());3.

//     // console.log(usernameArray.includes(searchValue));
//     // console.log(nameArray.includes(searchValue));
//     //
//     //////////////////////////
//     //////// END TRIALS  ////

//     //   for (let i = 0; i <= data.length; i++) {
//     //     if (searchValue === data[i].username || searchValue === data[i].name) {
//     //       gridSection.textContent = "";
//     //       const html2 = `
//     // <div class="profile-card hide">
//     //           <p class="profile-name">${data[i].name}</p>
//     //           <div class="text-section">
//     //             <ul>
//     //               <li>
//     //                 <ion-icon class="icon" name="location-outline"></ion-icon>
//     //                 ${data[i].address.street}, ${data[i].address.city}
//     //               </li>
//     //               <li><ion-icon name="business-outline"></ion-icon> ${data[i].company.name} </li>
//     //               <li>
//     //                 <ion-icon class="icon" name="mail-outline"></ion-icon> ${data[i].email}
//     //               </li>
//     //             </ul>

//     //             <button class="link view-more" href="#">View More &dArr;</button>

//     //             <div class="hidden-details">
//     //               <ul>
//     //                 <li>
//     //                   <ion-icon class="icon" name="call-outline"></ion-icon>
//     //                   ${data[i].phone}
//     //                 </li>
//     //                 <li class="">
//     //                   <ion-icon class="icon" name="globe-outline"></ion-icon>
//     //                   ${data[i].website}
//     //                 </li>
//     //               </ul>
//     //             </div>
//     //           </div>
//     //         </div>
//     // `;

//     //       gridSection.insertAdjacentHTML("beforeend", html2);

//     //       console.log("found");
//     //     }
//     // }
// };
// });

/********************************/
/******* VIEW MORE *******/
/******************************/

/********************************/
/******* FILTER CITIES *******/
/******************************/

// const filterText = function (data) {
//   const filtercity = `<option class="select" value="Select">${data.address.city}</option>`;
//   filterFormValue.insertAdjacentHTML("beforeend", filtercity);
// };

// filterFormValue.addEventListener("change", function (e) {
//   console.log("filterFormParent");
//   console.log(filterFormValue);
// });

// document.querySelector(".add").addEventListener("click", function () {
//   console.log("done");
// });

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
