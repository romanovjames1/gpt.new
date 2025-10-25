/* ---------- ELEMENTS ---------- */
const productGrid = document.getElementById("productGrid");
const quickOverlay = document.getElementById("quickViewOverlay");
const quickContent = document.getElementById("quickViewContent");
const cartOverlay = document.getElementById("cartOverlay");
const cartBtn = document.getElementById("cartBtn");
const closeQuick = document.getElementById("closeQuickView");
const closeCart = document.getElementById("closeCart");
const clearCartBtn = document.getElementById("clearCart");
const cartItemsList = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");
const cartCount = document.getElementById("cartCount");
const editModeBtn = document.getElementById("editModeBtn");
const hamburgerBtn = document.getElementById("hamburgerBtn");
const nav = document.querySelector("header nav");

const mainImg = quickContent.querySelector("#quickMainImg");

const thumbs = quickContent.querySelectorAll(".thumbnail-gallery img");

let editMode = false;
let products = [
  {
    id: 1,
    name: "Classic Dress",
    price: 79,
    desc: "Elegant evening wear.",
    material: "Silk",
    colors: "Black, Red",
    sizes: "S,M,L",
    images: [
      "https://images.uzum.uz/d2dkn952lln261osn3mg/original.jpg",
      "https://images.uzum.uz/d2dkn6l2lln261osn3lg/original.jpg",
      "https://images.uzum.uz/d2dknr7iub33ceg95dng/original.jpg",
    ],
  },
  {
    id: 2,
    name: "Casual Hoodie",
    price: 49,
    desc: "Soft cotton hoodie.",
    material: "Cotton",
    colors: "Gray, Blue",
    sizes: "M,L,XL",
    images: [
      "https://images.uzum.uz/d2dkn952lln261osn3mg/original.jpg",
      "https://images.uzum.uz/d2dkn6l2lln261osn3lg/original.jpg",
      "https://images.uzum.uz/d2dknr7iub33ceg95dng/original.jpg",
    ],
  },
  {
    id: 3,
    name: "Leather Jacket",
    price: 120,
    desc: "Stylish black jacket.",
    material: "Leather",
    colors: "Black",
    sizes: "M,L",
    images: [
      "https://images.uzum.uz/d2dkn952lln261osn3mg/original.jpg",
      "https://images.uzum.uz/d2dkn6l2lln261osn3lg/original.jpg",
      "https://images.uzum.uz/d2dknr7iub33ceg95dng/original.jpg",
    ],
  },
  {
    id: 4,
    name: "Summer T-Shirt",
    price: 25,
    desc: "Light and breathable.",
    material: "Cotton",
    colors: "White, Yellow",
    sizes: "S,M,L,XL",
    images: [
      "https://images.uzum.uz/d2dkn952lln261osn3mg/original.jpg",
      "https://images.uzum.uz/d2dkn6l2lln261osn3lg/original.jpg",
      "https://images.uzum.uz/d2dknr7iub33ceg95dng/original.jpg",
    ],
  },
  {
    id: 5,
    name: "Denim Jeans",
    price: 60,
    desc: "Classic blue jeans.",
    material: "Denim",
    colors: "Blue",
    sizes: "M,L,XL",
    images: [
      "https://images.uzum.uz/d2dkn952lln261osn3mg/original.jpg",
      "https://images.uzum.uz/d2dkn6l2lln261osn3lg/original.jpg",
      "https://images.uzum.uz/d2dknr7iub33ceg95dng/original.jpg",
    ],
  },
  {
    id: 6,
    name: "Sneakers",
    price: 90,
    desc: "Comfortable everyday shoes.",
    material: "Leather/Canvas",
    colors: "White, Black",
    sizes: "40-45",
    images: [
      "https://images.uzum.uz/d2dkn952lln261osn3mg/original.jpg",
      "https://images.uzum.uz/d2dkn6l2lln261osn3lg/original.jpg",
      "https://images.uzum.uz/d2dknr7iub33ceg95dng/original.jpg",
    ],
  },
  {
    id: 7,
    name: "Winter Coat",
    price: 150,
    desc: "Warm and stylish.",
    material: "Wool",
    colors: "Black, Gray",
    sizes: "M,L,XL",
    images: [
      "https://images.uzum.uz/d2dkn952lln261osn3mg/original.jpg",
      "https://images.uzum.uz/d2dkn6l2lln261osn3lg/original.jpg",
      "https://images.uzum.uz/d2dknr7iub33ceg95dng/original.jpg",
    ],
  },
  {
    id: 8,
    name: "Sports Shorts",
    price: 30,
    desc: "Perfect for workouts.",
    material: "Polyester",
    colors: "Blue, Red",
    sizes: "S,M,L",
    images: [
      "https://images.uzum.uz/d2dkn952lln261osn3mg/original.jpg",
      "https://images.uzum.uz/d2dkn6l2lln261osn3lg/original.jpg",
      "https://images.uzum.uz/d2dknr7iub33ceg95dng/original.jpg",
    ],
  },
  {
    id: 9,
    name: "Hooded Jacket",
    price: 85,
    desc: "Rainproof casual jacket.",
    material: "Synthetic",
    colors: "Green, Gray",
    sizes: "M,L,XL",
    images: [
      "https://images.uzum.uz/d2dkn952lln261osn3mg/original.jpg",
      "https://images.uzum.uz/d2dkn6l2lln261osn3lg/original.jpg",
      "https://images.uzum.uz/d2dknr7iub33ceg95dng/original.jpg",
    ],
  },
  {
    id: 10,
    name: "Blazer",
    price: 110,
    desc: "Smart office blazer.",
    material: "Wool Blend",
    colors: "Black, Navy",
    sizes: "M,L,XL",
    images: [
      "https://images.uzum.uz/d2dkn952lln261osn3mg/original.jpg",
      "https://images.uzum.uz/d2dkn6l2lln261osn3lg/original.jpg",
      "https://images.uzum.uz/d2dknr7iub33ceg95dng/original.jpg",
    ],
  },
  {
    id: 5,
    name: "Denim Jeans",
    price: 60,
    desc: "Classic blue jeans.",
    material: "Denim",
    colors: "Blue",
    sizes: "M,L,XL",
    images: [
      "https://images.uzum.uz/d2dkn952lln261osn3mg/original.jpg",
      "https://images.uzum.uz/d2dkn6l2lln261osn3lg/original.jpg",
      "https://images.uzum.uz/d2dknr7iub33ceg95dng/original.jpg",
    ],
  },
  {
    id: 6,
    name: "Sneakers",
    price: 90,
    desc: "Comfortable everyday shoes.",
    material: "Leather/Canvas",
    colors: "White, Black",
    sizes: "40-45",
    images: [
      "https://images.uzum.uz/d2dkn952lln261osn3mg/original.jpg",
      "https://images.uzum.uz/d2dkn6l2lln261osn3lg/original.jpg",
      "https://images.uzum.uz/d2dknr7iub33ceg95dng/original.jpg",
    ],
  },
  {
    id: 7,
    name: "Winter Coat",
    price: 150,
    desc: "Warm and stylish.",
    material: "Wool",
    colors: "Black, Gray",
    sizes: "M,L,XL",
    images: [
      "https://images.uzum.uz/d2dkn952lln261osn3mg/original.jpg",
      "https://images.uzum.uz/d2dkn6l2lln261osn3lg/original.jpg",
      "https://images.uzum.uz/d2dknr7iub33ceg95dng/original.jpg",
    ],
  },
  {
    id: 8,
    name: "Sports Shorts",
    price: 30,
    desc: "Perfect for workouts.",
    material: "Polyester",
    colors: "Blue, Red",
    sizes: "S,M,L",
    images: [
      "https://images.uzum.uz/d2dkn952lln261osn3mg/original.jpg",
      "https://images.uzum.uz/d2dkn6l2lln261osn3lg/original.jpg",
      "https://images.uzum.uz/d2dknr7iub33ceg95dng/original.jpg",
    ],
  },
  {
    id: 9,
    name: "Hooded Jacket",
    price: 85,
    desc: "Rainproof casual jacket.",
    material: "Synthetic",
    colors: "Green, Gray",
    sizes: "M,L,XL",
    images: [
      "https://images.uzum.uz/d2dkn952lln261osn3mg/original.jpg",
      "https://images.uzum.uz/d2dkn6l2lln261osn3lg/original.jpg",
      "https://images.uzum.uz/d2dknr7iub33ceg95dng/original.jpg",
    ],
  },
  {
    id: 10,
    name: "Blazer",
    price: 110,
    desc: "Smart office blazer.",
    material: "Wool Blend",
    colors: "Black, Navy",
    sizes: "M,L,XL",
    images: [
      "https://images.uzum.uz/d2dkn952lln261osn3mg/original.jpg",
      "https://images.uzum.uz/d2dkn6l2lln261osn3lg/original.jpg",
      "https://images.uzum.uz/d2dknr7iub33ceg95dng/original.jpg",
    ],
  },
  // … continue like this for 40 products
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];

/* ---------- RENDER PRODUCTS ---------- */
function renderProducts() {
  productGrid.innerHTML = "";
  products.forEach((p, i) => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
        <img src="${p.image}" alt="${p.name}">
        <div class="product-info">
          ${
            editMode
              ? `
          <input type="text" value="${p.name}" data-field="name" data-id="${p.id}">
          <input type="number" value="${p.price}" data-field="price" data-id="${p.id}">
          <textarea data-field="desc" data-id="${p.id}">${p.desc}</textarea>
          <input type="text" value="${p.material}" data-field="material" data-id="${p.id}">
          <input type="text" value="${p.colors}" data-field="colors" data-id="${p.id}">
          <input type="text" value="${p.sizes}" data-field="sizes" data-id="${p.id}">
          <input type="text" value="${p.image}" data-field="image" data-id="${p.id}">
          `
              : `<h3>${p.name}</h3><p>$${p.price}</p><p>${p.desc}</p>`
          }
        </div>`;
    if (!editMode) {
      card.addEventListener("click", () => openQuickView(p));
    }
    productGrid.appendChild(card);
    setTimeout(() => card.classList.add("visible"), i * 150);
  });
}

function openQuickView(p) {
  let currentImg = 0;

  function updateImage() {
    quickContent.querySelector(".main-img").src = p.images[currentImg];
  }

  // build thumbnails HTML
  let thumbnailsHTML = p.images
    .map(
      (img, idx) =>
        `<img src="${img}" class="${
          idx === 0 ? "active" : ""
        }" data-index="${idx}">`
    )
    .join("");

  quickContent.innerHTML = `
    <div class="quick-gallery">
      <img class="main-img" src="${p.images[0]}" alt="${p.name}">
      <div class="thumbnail-gallery">${thumbnailsHTML}</div>
    </div>
    <div class="modal-details">
      <h2>${p.name}</h2>
      <p>${p.desc}</p>
      <p><b>Material:</b> ${p.material}</p>
      <p><b>Colors:</b> ${p.colors}</p>
      <p><b>Sizes:</b> ${p.sizes}</p>
      <p><b>Price:</b> $${p.price}</p>
      <button onclick="addToCart(${p.id})" class="add">Add to Cart</button>
    </div>
  `;

  // thumbnail click
  const mainImg = quickContent.querySelector(".main-img");
  const thumbs = quickContent.querySelectorAll(".thumbnail-gallery img");
  thumbs.forEach((thumb) => {
    thumb.addEventListener("click", () => {
      thumbs.forEach((t) => t.classList.remove("active"));
      thumb.classList.add("active");
      mainImg.src = thumb.src;
    });
  });

  quickOverlay.classList.add("active");
}

closeQuick.onclick = () => quickOverlay.classList.remove("active");

/* Close by clicking outside */
[quickOverlay, cartOverlay].forEach((ov) => {
  ov.addEventListener("click", (e) => {
    if (e.target === ov) ov.classList.remove("active");
  });
});

/* ---------- CART ---------- */
function renderCart() {
  cartItemsList.innerHTML = "";
  let total = 0,
    count = 0;
  cart.forEach((item) => {
    total += item.price * item.qty;
    count += item.qty;
    const li = document.createElement("li");
    console.log(item.images);
    li.innerHTML = `

  <div class="cart-item-info">
    <img src="${item.images[0]}" alt="${item.name}" class="cart-thumb">
    <div class="cart-item-text">
      <p class="cart-name">${item.name}</p>
      <p class="cart-price">$${item.price * item.qty}</p>
    </div>
  </div>
  <div class="cart-controls">
    <button onclick="changeQty(${item.id},1)" class="qty-btn">+</button>
    <span>${item.qty}</span>
    <button onclick="changeQty(${item.id},-1)" class="qty-btn">-</button>
  </div>`;

    cartItemsList.appendChild(li);
  });
  cartTotal.textContent = `Total: $${total.toFixed(2)}`;
  cartCount.textContent = count;
  cartCount.style.display = count > 0 ? "inline-block" : "none";
  localStorage.setItem("cart", JSON.stringify(cart));
}
function addToCart(id) {
  const prod = products.find((p) => p.id === id);
  const exist = cart.find((i) => i.id === id);
  if (exist) exist.qty++;
  else cart.push({ ...prod, qty: 1 });
  renderCart();
}
function changeQty(id, delta) {
  const item = cart.find((i) => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) cart = cart.filter((i) => i.id !== id);
  renderCart();
}
clearCartBtn.onclick = () => {
  cart = [];
  renderCart();
};
cartBtn.onclick = () => cartOverlay.classList.add("active");
closeCart.onclick = () => cartOverlay.classList.remove("active");
renderCart();

document.addEventListener("input", (e) => {
  if (!editMode) return;
  const field = e.target.dataset.field;
  const id = parseInt(e.target.dataset.id);
  const prod = products.find((p) => p.id === id);
  if (prod) {
    prod[field] =
      field === "price" ? parseFloat(e.target.value) || 0 : e.target.value;
    localStorage.setItem("products", JSON.stringify(products));
    if (field === "image") renderProducts();
  }
});

/* ---------- HERO PARALLAX ---------- */
window.addEventListener("scroll", () => {
  const hero = document.getElementById("hero");
  hero.style.backgroundPositionY = `${window.scrollY * 0.5}px`;
});

/* ---------- PAGINATION ---------- */
let currentPage = 1;
const itemsPerPage = 10;

function renderProducts() {
  productGrid.innerHTML = "";

  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const pageProducts = products.slice(start, end);

  pageProducts.forEach((p, i) => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
    <img src="${p.images[0]}" alt="${p.name}">
    <div class="product-info">
      ${
        editMode
          ? `
      <input type="text" value="${p.name}" data-field="name" data-id="${p.id}">
      <input type="number" value="${p.price}" data-field="price" data-id="${p.id}">
      <textarea data-field="desc" data-id="${p.id}">${p.desc}</textarea>
      <input type="text" value="${p.material}" data-field="material" data-id="${p.id}">
      <input type="text" value="${p.colors}" data-field="colors" data-id="${p.id}">
      <input type="text" value="${p.sizes}" data-field="sizes" data-id="${p.id}">
      `
          : `<h3>${p.name}</h3><p>$${p.price}</p><p>${p.desc}</p>`
      }
    </div>`;

    if (!editMode) {
      card.addEventListener("click", () => openQuickView(p));
    }
    productGrid.appendChild(card);
    setTimeout(() => card.classList.add("visible"), i * 150);
  });

  renderPagination();
}

/* ---------- RENDER PAGINATION BUTTONS ---------- */
function renderPagination() {
  // remove old buttons
  let pagDiv = document.getElementById("pagination");
  if (!pagDiv) {
    pagDiv = document.createElement("div");
    pagDiv.id = "pagination";
    pagDiv.style.textAlign = "center";
    pagDiv.style.margin = "2rem 0";
    productGrid.parentNode.appendChild(pagDiv);
  }
  pagDiv.innerHTML = "";

  const totalPages = Math.ceil(products.length / itemsPerPage);

  const prevBtn = document.createElement("button");
  prevBtn.textContent = "Prev";
  prevBtn.disabled = currentPage === 1;
  prevBtn.onclick = () => {
    currentPage--;
    renderProducts();
  };
  pagDiv.appendChild(prevBtn);

  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement("button");
    btn.textContent = i;
    btn.style.margin = "0 5px";
    if (i === currentPage) btn.style.background = "#00b894";
    btn.onclick = () => {
      currentPage = i;
      renderProducts();
    };
    pagDiv.appendChild(btn);
  }

  const nextBtn = document.createElement("button");
  nextBtn.textContent = "Next";
  nextBtn.disabled = currentPage === totalPages;
  nextBtn.onclick = () => {
    currentPage++;
    renderProducts();
  };
  pagDiv.appendChild(nextBtn);
}

renderProducts();

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("active");
});

// Optional: hide menu when clicking a link
nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    if (window.innerWidth <= 768) nav.classList.remove("show");
  });
});

hamburgerBtn.addEventListener("click", () => {
  nav.classList.toggle("show");
  hamburgerBtn.classList.toggle("active"); // toggles X animation
});

// Optional: hide menu when clicking a link
nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    if (window.innerWidth <= 768) {
      nav.classList.remove("show");
      hamburgerBtn.classList.remove("active"); // reset X
    }
  });
});

hamburgerBtn.addEventListener("click", () => {
  nav.classList.toggle("show"); // slide nav
  hamburgerBtn.classList.toggle("active"); // hamburger → X
});

// Close menu when clicking links
nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    if (window.innerWidth <= 768) {
      nav.classList.remove("show");
      hamburgerBtn.classList.remove("active");
    }
  });
});

// const hamburger = document.querySelector(".hamburger");
// const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("active");
});

// === LANGUAGE SWITCHER (WORKS WITHOUT TOUCHING HTML) ===
document.addEventListener("DOMContentLoaded", () => {
  const langSelect = document.getElementById("languageSwitcher");

  if (!langSelect) return; // in case switcher doesn't exist

  const translations = {
    en: {
      Home: "Home",
      Products: "Products",
      About: "About",
      Contact: "Contact",
      "Elevate Your Style. Every Day.": "Elevate Your Style. Every Day.",
      "Premium clothing with comfort and national patterns.":
        "Premium clothing with comfort and national patterns.",
      "Shop Now": "Shop Now",
      "Featured Products": "Featured Products",
      "Our Origins": "Our Origins",
      "Design Philosophy": "Design Philosophy",
      "Crafted by Hand": "Crafted by Hand",
      "Contact Us": "Contact Us",
      "Have questions or custom requests? We’d love to hear from you.":
        "Have questions or custom requests? We’d love to hear from you.",
      "Your Name": "Your Name",
      "Your Email": "Your Email",
      "Your Message": "Your Message",
      "Send Message": "Send Message",
      "Your Cart": "Your Cart",
      "Total:": "Total:",
      "Clear Cart": "Clear Cart",
    },
    kk: {
      Home: "Бас бет",
      Products: "Өнімдер",
      About: "Біз туралы",
      Contact: "Байланыс",
      "Elevate Your Style. Every Day.": "Сәніңді көтер. Күн сайын.",
      "Premium clothing with comfort and national patterns.":
        "Ұлттық өрнекті жайлы, сапалы киімдер.",
      "Shop Now": "Сатып алу",
      "Featured Products": "Таңдаулы өнімдер",
      "Our Origins": "Біздің бастауларымыз",
      "Design Philosophy": "Дизайн философиясы",
      "Crafted by Hand": "Қолмен жасалған",
      "Contact Us": "Байланыс",
      "Have questions or custom requests? We’d love to hear from you.":
        "Сұрақтарыңыз бар ма? Бізбен хабарласыңыз.",
      "Your Name": "Атыңыз",
      "Your Email": "Эл. поштаңыз",
      "Your Message": "Хабарламаңыз",
      "Send Message": "Жіберу",
      "Your Cart": "Себетіңіз",
      "Total:": "Барлығы:",
      "Clear Cart": "Тазалау",
    },
    ru: {
      Home: "Главная",
      Products: "Товары",
      About: "О нас",
      Contact: "Контакты",
      "Elevate Your Style. Every Day.": "Повышай свой стиль. Каждый день.",
      "Premium clothing with comfort and national patterns.":
        "Премиум одежда с комфортом и национальными узорами.",
      "Shop Now": "Купить сейчас",
      "Featured Products": "Популярные товары",
      "Our Origins": "Наше происхождение",
      "Design Philosophy": "Философия дизайна",
      "Crafted by Hand": "Создано вручную",
      "Contact Us": "Свяжитесь с нами",
      "Have questions or custom requests? We’d love to hear from you.":
        "Есть вопросы? Мы рады помочь.",
      "Your Name": "Ваше имя",
      "Your Email": "Ваш email",
      "Your Message": "Ваше сообщение",
      "Send Message": "Отправить",
      "Your Cart": "Ваша корзина",
      "Total:": "Итого:",
      "Clear Cart": "Очистить корзину",
    },
    uz: {
      Home: "Bosh sahifa",
      Products: "Mahsulotlar",
      About: "Biz haqimizda",
      Contact: "Aloqa",
      "Elevate Your Style. Every Day.": "Har kuni uslubingni yuksaltir.",
      "Premium clothing with comfort and national patterns.":
        "Milliy naqshli qulay kiyimlar.",
      "Shop Now": "Xarid qilish",
      "Featured Products": "Tavsiya etilgan mahsulotlar",
      "Our Origins": "Bizning boshlanishimiz",
      "Design Philosophy": "Dizayn falsafasi",
      "Crafted by Hand": "Qo‘l bilan yaratilgan",
      "Contact Us": "Biz bilan bog‘laning",
      "Have questions or custom requests? We’d love to hear from you.":
        "Savolingiz bormi? Biz bilan bog‘ланинг.",
      "Your Name": "Ismingiz",
      "Your Email": "Emailingiz",
      "Your Message": "Xabaringiz",
      "Send Message": "Yuborish",
      "Your Cart": "Savatingiz",
      "Total:": "Jami:",
      "Clear Cart": "Tozalash",
    },
  };

  // Save and load language
  const savedLang = localStorage.getItem("lang") || "en";
  langSelect.value = savedLang;

  const applyLanguage = (lang) => {
    const dict = translations[lang];
    if (!dict) return;

    // Replace text content
    document
      .querySelectorAll("h1, h2, h3, p, a, button, span, label")
      .forEach((el) => {
        const originalText = el.dataset.originalText || el.textContent.trim();
        if (!el.dataset.originalText) el.dataset.originalText = originalText;
        if (dict[originalText]) el.textContent = dict[originalText];
      });

    // Replace placeholders
    document
      .querySelectorAll("input[placeholder], textarea[placeholder]")
      .forEach((el) => {
        const original = el.dataset.originalPlaceholder || el.placeholder;
        if (!el.dataset.originalPlaceholder)
          el.dataset.originalPlaceholder = original;
        if (dict[original]) el.placeholder = dict[original];
      });
  };

  // Initial load
  applyLanguage(savedLang);

  // When user switches
  langSelect.addEventListener("change", (e) => {
    const lang = e.target.value;
    applyLanguage(lang);
    localStorage.setItem("lang", lang);
  });
});
