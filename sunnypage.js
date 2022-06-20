const unOrderList = document.querySelector(".list");
const navList = document.querySelector(".nav-list");
const navBtn = document.querySelector(".hamburger-menu");

navBtn.addEventListener("click", () => {
  const navListHeight = navList.getBoundingClientRect().height;
  const listHeight = unOrderList.getBoundingClientRect().height;

  if (navListHeight === 0) {
    navList.style.height = `${listHeight}px`;
  } else {
    navList.style.height = 0;
  }
});

const testContent = [
  {
    id: 1,
    img: "/images/image-emily.jpg",
    desc: "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit",
    name: "Emily R.",
    job: "Marketing Director",
  },
  {
    id: 2,
    img: "/images/image-thomas.jpg",
    desc: "Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.",
    name: "Thomas S.",
    job: "Chief Operating Officer",
  },
  {
    id: 3,
    img: "/images/image-jennie.jpg",
    desc: "incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!",
    name: "Jennie F.",
    job: "Business Owner",
  },
];

const textimonialEL = document.querySelector(".testimonials-container");

window.addEventListener("DOMContentLoaded", () => {
  const review = testContent
    .map((items) => {
      return ` <div class="testimonials-hero">
      <div class="testimonial1">
          <div class="person-img">
          <img src="${items.img}" alt="">
          </div>
          <p>.
              ${items.desc}
          </p>
          <h4>${items.name}</h4>
          <h5>${items.job}</h5>
      </div>
  </div>`;
    })
    .join("");

  textimonialEL.innerHTML = review;

  console.log(review);
});
