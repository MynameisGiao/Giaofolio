// typing
const typed = new Typed('.typing', {
    strings: ['Game Developer'],
    typeSpeed: 100,
    backSpeed: 80,
    loop: true,
  });
  document.querySelectorAll(".nav li a").forEach(link => {
    link.addEventListener("click", function() {
        // Xóa class "active" khỏi tất cả các mục
        document.querySelectorAll(".nav li a").forEach(item => item.classList.remove("active"));

        // Thêm class "active" cho mục được bấm
        this.classList.add("active");
    });
  });
  

  const portfolioData = {
    "sorrtnship": {
        title: "Goods Match: Sort n Ship",
        icon: "./images/sortnship/Icon_512x512.png",  
        date: "5/2024 - 1/2025",
        images: [
            "./images/sortnship/sns.png",
            "./images/sortnship/sns.png",
            "./images/sortnship/sns.png"
        ],
        description: "The first project I participated in as a partner developer at Mopa Games —a fun and engaging puzzle game!",
        apkLink: "https://play.google.com/store/apps/details?id=com.goods.sort.match3.puzzle&pcampaignid=web_share",
        sourceCode: ""
    },
    "cd": {
        title: "Citadel Defense - Drop Card",
        icon: "./images/dropcard/cd-icon.jpg",
        date: "3/2024 - 04/2024",
        images: [
            "./images/dropcard/dropcard1.png",
            "./images/dropcard/dropcard2.png",
            "./images/dropcard/dropcard3.png",
            "./images/dropcard/dropcard4.png",
        ],
        description: "The idea is based on the game Plants vs. Zombies, a card-based strategy game where you must defend against invaders!",
        apkLink: "https://drive.google.com/file/d/123CIiost9zNpjV_xJbwdjRjc6jPipAEx/view",
        sourceCode: "https://github.com/MynameisGiao/DropCardGame"
    },
    "shooting": {
        title: "Shooting Game - FPS Game",
        icon: "./images/shooting/fps-icon.jpg",
        date: "11/2023 - 02/2024",
        images: [
            "./images/shooting/shooting.png",
            "./images/shooting/shooting2.png",
            "./images/shooting/shooting3.png",
            "./images/shooting/shooting4.png"
        ],
        description: "My first game project. An shooting game offline with first-person-sight.",
        apkLink: "https://drive.google.com/file/d/1snH6QOXRRGkhi_P_4UDlqdLJKffimeUX/view",
        sourceCode: "https://github.com/MynameisGiao/FPS_Game"
    }
};

const popup = document.querySelector(".popup");
const popupIcon = document.querySelector(".popup-icon");
const popupTitle = document.querySelector(".popup-title");
const popupDate = document.querySelector(".popup-date");
const popupImage = document.querySelector(".img-feature");
const popupDesc = document.querySelector(".desc-pro span");
const apkLink = document.querySelector(".link-pro a");
const sourceCodeLink = document.querySelector(".link-code a");
const prevBtn = document.querySelector(".control-prev");
const nextBtn = document.querySelector(".control-next");
const closeBtn = document.querySelector(".close-btn");

let currentImages = [];
let currentIndex = 0;

document.querySelectorAll(".portfolio-item").forEach(item => {
  item.addEventListener("click", function() {
      const gameKey = this.getAttribute("data-key");
      if (!portfolioData[gameKey]) return;

      const game = portfolioData[gameKey];

      // Hiển thị thông tin
      popupIcon.src = game.icon;
      popupTitle.textContent = game.title;
      popupDate.textContent = game.date;
      popupImage.src = game.images[0];
      popupDesc.textContent = game.description;

      // Kiểm tra và hiển thị/ẩn link APK
      if (game.apkLink) {
          apkLink.parentElement.style.display = "block"; // Hiển thị nếu có link
          apkLink.href = game.apkLink;
      } else {
          apkLink.parentElement.style.display = "none"; // Ẩn nếu không có link
      }

      // Kiểm tra và hiển thị/ẩn link Source Code
      if (game.sourceCode) {
          sourceCodeLink.parentElement.style.display = "block"; 
          sourceCodeLink.href = game.sourceCode;
      } else {
          sourceCodeLink.parentElement.style.display = "none"; 
      }

      // Cập nhật hình ảnh
      currentImages = game.images;
      currentIndex = 0;

      // Hiển thị popup
      popup.style.display = "flex";
  });
});


// Đóng popup khi nhấn vào nút X
closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
});

// Đóng popup khi click ra ngoài
popup.addEventListener("click", (event) => {
    if (event.target === popup) {
        popup.style.display = "none";
    }
});

// Xử lý chuyển ảnh
prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
    popupImage.src = currentImages[currentIndex];
});

nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % currentImages.length;
    popupImage.src = currentImages[currentIndex];
});

