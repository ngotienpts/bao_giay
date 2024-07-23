document.addEventListener("DOMContentLoaded", function () {
    // Tập hợp tất cả các phần tử cần sử dụng
    const newspaperBoxSlides = document.querySelectorAll(
        ".js__newspaperBoxSlidesContainer"
    );
    const fancyboxes = document.querySelectorAll(".fancybox-full");
    const items = document.querySelectorAll(".js__itemChildren");
    const sidebar = document.querySelector(".js__sidebar");
    const content = document.querySelector(".js__content");

    // Xử lý khi width nhở hơn 1024
    function handleResizeWidth() {
        if (!sidebar) return;

        if (window.innerWidth <= 700) {
            sidebar.style.height = screen.height - content.offsetHeight + "px";
        } else {
            sidebar.style.height = "100%";
        }
    }
    // Khởi tạo fancybox
    function initFancybox() {
        if (fancyboxes) {
            fancyboxes.forEach(function () {
                $(".fancybox-full a").fancybox();
            });
        }
        // document.addEventListener(
        //     "touchstart",
        //     function (event) {
        //         event.preventDefault();
        //     },
        //     { passive: false }
        // );
        // document.addEventListener(
        //     "touchmove",
        //     function (event) {
        //         event.preventDefault();
        //     },
        //     { passive: false }
        // );
    }

    // Khởi tạo slider với một item
    function initNewspaperSlider() {
        if (newspaperBoxSlides) {
            newspaperBoxSlides.forEach((item) => {
                var slider = item.querySelector(".js__twoSlide");
                var next = item.querySelector(".swiper-button-next");
                var prev = item.querySelector(".swiper-button-prev");
                var slides = slider.querySelectorAll(".swiper-slide");

                if (window.innerWidth <= 1024) {
                    slides.forEach((slide) => {
                        if (slide.querySelector(".empty")) {
                            slide.style.display = "none";
                        }
                    });

                    // items.forEach((item) => {
                    //     if (item.querySelector(".empty")) {
                    //         item.style.display = "none";
                    //     }
                    // });
                }

                var swiper = new Swiper(slider, {
                    slidesPerView: 1,
                    spaceBetween: 0,
                    slidesPerGroup: 1,
                    loop: false,
                    navigation: {
                        nextEl: next || null,
                        prevEl: prev || null,
                    },
                    breakpoints: {
                        640: {
                            slidesPerView: 1,
                            slidesPerGroup: 1,
                        },
                        768: {
                            slidesPerView: 1,
                            slidesPerGroup: 1,
                        },
                        1024: {
                            slidesPerView: 1,
                            slidesPerGroup: 1,
                        },
                        1200: {
                            slidesPerView: 2,
                            slidesPerGroup: 2,
                        },
                    },
                });

                // Thêm sự kiện lắng nghe cho các phím mũi tên
                document.addEventListener("keydown", function (event) {
                    if (event.key === "ArrowRight") {
                        swiper.slideNext();
                    } else if (event.key === "ArrowLeft") {
                        swiper.slidePrev();
                    }
                });

                // Thêm sự kiện khi click vào tab bên trái thì sẽ chuyển đến slide tương ứng
                items.forEach(function (item, index) {
                    item.addEventListener("click", function () {
                        var itemActive = document.querySelector(
                            ".js__itemChildren.active"
                        );
                        itemActive.classList.remove("active");
                        this.classList.add("active");

                        // var index = this.getAttribute("data-index");
                        swiper.slideTo(index);

                        if (window.innerWidth <= 1024) {
                            swiper.slideTo(index - 1);
                        }
                    });
                });
            });
        }
    }
    window.addEventListener("resize", handleResizeWidth);
    // Khởi tạo tất cả các chức năng
    function initApp() {
        handleResizeWidth();
        initFancybox();
        initNewspaperSlider();
    }

    // Bắt đầu khởi tạo ứng dụng
    initApp();
});
