document.addEventListener("DOMContentLoaded", function () {
    // Tập hợp tất cả các phần tử cần sử dụng
    const twoSlides = document.querySelectorAll(".js__twoSlidesContainer");
    const fancyboxes = document.querySelectorAll(".fancybox-full");

    // Khởi tạo fancybox
    function initFancybox() {
        if (fancyboxes) {
            fancyboxes.forEach(function () {
                $(".fancybox-full a").fancybox({
                    touch: {
                        vertical: false,
                        momentum: false,
                    },
                    beforeShow: function () {
                        document.body.style.overflow = "hidden";
                    },
                    afterClose: function () {
                        document.body.style.overflow = "";
                    },
                });
            });
        }

        // Thêm sự kiện ngăn chặn mặc định cho các phần tử fancybox
        fancyboxes.forEach(function (fancybox) {
            fancybox.addEventListener(
                "touchstart",
                function (event) {
                    event.preventDefault();
                },
                { passive: false }
            );

            fancybox.addEventListener(
                "touchmove",
                function (event) {
                    event.preventDefault();
                },
                { passive: false }
            );
        });
    }

    // Khởi tạo slider với một item
    function initSliderOneItems() {
        if (twoSlides) {
            twoSlides.forEach((item) => {
                var slider = item.querySelector(".js__twoSlide");
                var next = item.querySelector(".swiper-button-next");
                var prev = item.querySelector(".swiper-button-prev");
                var slides = slider.querySelectorAll(".swiper-slide");

                if (window.innerWidth <= 1024) {
                    slides.forEach((slide) => {
                        if (slide.querySelector(".empty")) {
                            slide.remove();
                        }
                    });
                }

                new Swiper(slider, {
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
            });
        }
    }

    // Khởi tạo tất cả các chức năng
    function initApp() {
        initFancybox();
        initSliderOneItems();
    }

    // Bắt đầu khởi tạo ứng dụng
    initApp();
});
