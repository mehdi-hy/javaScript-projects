const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "steak dinner",
    category: "dinner",
    price: 39.99,
    img: "./images/item-10.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];
const section_center = document.querySelector(".section-center");
const btns = document.querySelectorAll(".filter-btn");
const container = document.querySelector(".btn-container");
window.addEventListener("DOMContentLoaded", function () {
  display_menu_items(menu);
  display_menu_buttons();
});

// btns.forEach(function (button) {
//   button.addEventListener("click", function () {
//     if (button.textContent === "all") {
//       console.log(button.textContent);
//       display_menu_items(menu);
//     } else if (button.textContent === "breakfast") {
//       display_menu_breakfast(menu);
//     } else if (button.textContent === "lunch") {
//       display_menu_lunch(menu);
//     } else if (button.textContent === "shakes") {
//       display_menu_shakes(menu);
//     }
//   });
// });
container.addEventListener("click", function (e) {
  const category = e.target.dataset.id;
  const menu_category = menu.filter(function (item) {
    return item.category === category;
  });
  if (category === "all") {
    display_menu_items(menu);
  } else {
    display_menu_items(menu_category);
  }
});

// btns.forEach(function (button) {
//   button.addEventListener("click", function (e) {
//     const category = e.currentTarget.dataset.id;
//     const menu_category = menu.filter(function (item) {
//       return item.category === category;
//     });
//     if (category === "all") {
//       display_menu_items(menu);
//     } else {
//       display_menu_items(menu_category);
//     }
//   });
// });

function display_menu_items(menu_items) {
  // console.log("hello");
  let display_menu = menu_items.map(function (item) {
    // console.log(item);
    return `<article class="menu-item">
          <img src="${item.img}" class="photo" alt="${item.title}" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">$${item.price}</h4>
            </header>
            <p class="item-text">
            ${item.desc}
            </p> 
          </div>
        </article>`;
  });
  display_menu = display_menu.join("");
  section_center.innerHTML = display_menu;
}

function display_menu_buttons() {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  const category_buttons = categories
    .map(function (category) {
      return ` <button class="filter-btn" type="button" data-id=${category}>${category}</button>`;
    })
    .join("");
  container.innerHTML = category_buttons;
}
// function display_menu_breakfast(menu_items) {
//   let breakfast = menu_items.map(function (item) {
//     if (item.category === "breakfast") {
//       return `<article class="menu-item">
//           <img src="${item.img}" class="photo" alt="${item.title}" />
//           <div class="item-info">
//             <header>
//               <h4>${item.title}</h4>
//               <h4 class="price">$${item.price}</h4>
//             </header>
//             <p class="item-text">
//             ${item.desc}
//             </p>
//           </div>
//         </article>`;
//     }
//   });
//   breakfast = breakfast.join("");
//   section_center.innerHTML = breakfast;
// }
// function display_menu_lunch(menu_items) {
//   let lunch = menu_items.filter(function (item) {
//     return item.category === "lunch";
//   });
//   display_menu_items(lunch);
// }
// function display_menu_shakes(menu_items) {
//   let shakes = menu_items.filter(function (item) {
//     return item.category === "shakes";
//   });
//   display_menu_items(shakes);
// }
