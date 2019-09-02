const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
const logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);


const ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute("src", siteContent["cta"]["img-src"]
);

const middleImg = document.getElementById("middle-img");
middleImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]
);


const ctaText = document.querySelector(".cta-text");
let newLine = "\r\n";
ctaText.style.whiteSpace = "pre";
ctaText.childNodes[1].textContent = `DOM ${newLine} IS ${newLine}AWESOME`;
ctaText.childNodes[3].textContent = "Get Started";

console.log(ctaText);

const navBar = document.querySelectorAll("nav");

const navBarOne = document.querySelectorAll("nav");
navBar[0].children[0].textContent = "Services";

const navBarTwo = document.querySelectorAll("nav");
navBar[0].children[1].textContent = "Product";

const navBarThree = document.querySelectorAll("nav");
navBar[0].children[2].textContent = "Vision";

const navBarFour = document.querySelectorAll("nav");
navBar[0].children[3].textContent = "Features";

const navBarFive = document.querySelectorAll("nav");
navBar[0].children[4].textContent = "About";

const navBarSix = document.querySelectorAll("nav");
navBar[0].children[5].textContent = "Contact";

// const navBar = document.querySelectorAll("nav");
// navBar[0].children[0].textContent = "Services";

// const navBar = document.querySelectorAll("nav");
// navBar[0].children[0].textContent = "Services";


