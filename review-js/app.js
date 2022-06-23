// local reviews data
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];
const btns = document.querySelectorAll(".prev-btn");
const img = document.querySelector("#person-img");
const heading = document.querySelector("#author");
const job = document.querySelector("#job");
const info = document.querySelector("#info");
const suprise = document.querySelector(".random-btn");
let i = 0;

// suprise //

suprise.addEventListener("click", function () {
  let r = Math.floor(Math.random() * reviews.length);
  console.log(r);
  // console.log(reviews[r].img);
  console.log(img.src);
  img.src = reviews[r].img;
  heading.textContent = reviews[r].name;
  job.textContent = reviews[r].job;
  info.textContent = reviews[r].text;
});
// suprise //

console.log(img.getAttribute("src"));

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    let change = e.target.classList;
    console.log(change);
    if (change.contains("fa-chevron-right")) {
      // console.log(img.getAttribute("src"));
      img.setAttribute("src", reviews[i].img);
      heading.textContent = reviews[i].name;
      heading.nextElementSibling.textContent = reviews[i].job;
      heading.nextElementSibling.nextElementSibling.textContent =
        reviews[i].text;
      i++;
      if (i > 3) {
        i = 0;
      }
    } else if (change.contains("fa-chevron-left")) {
      i--;
      if (i < 0) {
        i = 3;
      }

      img.setAttribute("src", reviews[i].img);
      heading.textContent = reviews[i].name;
      heading.nextElementSibling.textContent = reviews[i].job;
      heading.nextElementSibling.nextElementSibling.textContent =
        reviews[i].text;
    }
  });
});
