jQuery("img.svg").each(function () {
    var $img = jQuery(this);
    var imgID = $img.attr("id");
    var imgClass = $img.attr("class");
    var imgURL = $img.attr("src");

    jQuery.get(
        imgURL,
        function (data) {
            // Get the SVG tag, ignore the rest
            var $svg = jQuery(data).find("svg");

            // Add replaced image's ID to the new SVG
            if (typeof imgID !== "undefined") {
                $svg = $svg.attr("id", imgID);
            }
            // Add replaced image's classes to the new SVG
            if (typeof imgClass !== "undefined") {
                $svg = $svg.attr("class", imgClass + " replaced-svg");
            }

            // Remove any invalid XML tags as per http://validator.w3.org
            $svg = $svg.removeAttr("xmlns:a");

            // Replace image with new SVG
            $img.replaceWith($svg);
        },
        "xml"
    );
});

//carousel 
$(function () {  
    $('.hero-carousel-container .main-carousel').flickity({
        // options
        cellAlign: 'left',
        contain: true,
        pageDots: false,
        wrapAround: true,
        imagesLoaded: true,
        arrowShape: { 
            x0: 10,
            x1: 50, y1: 40,
            x2: 55, y2: 25,
            x3: 30
        }
    });
    $('.hero-carousel-container .carousel-thumb').flickity({
        // options
        cellAlign: 'left',
        asNavFor: '.main-carousel',
        contain: true,
        pageDots: false,
        prevNextButtons: false,
        wrapAround: true,
        imagesLoaded: true,
    });
    $('.list-product .list-product__carousel').flickity({
        // options
        cellAlign: 'left',
        contain: true,
        pageDots: false,
        prevNextButtons: true,
        wrapAround: true,
        imagesLoaded: true,
        arrowShape: { 
            x0: 10,
            x1: 50, y1: 40,
            x2: 55, y2: 25,
            x3: 30
        }
    });

    //cate page carousel
    $('.hero-carousel .banner-cate-carousel').flickity({
        // options
        cellAlign: 'left',
        contain: true,
        pageDots: true,
        wrapAround: true,
        imagesLoaded: true,
        prevNextButtons: false
    });

    //compare carousel
        //main carousel
    $('.box-compare-product .img__main-carousel.compare-main-1').flickity({
        // options
        cellAlign: 'left',
        contain: true,
        pageDots: false,
        wrapAround: true,
        imagesLoaded: true,
        prevNextButtons: false
    });
        //thumb carousel
    $('.box-compare-product .img__thumb-carousel.compare-thumb-1').flickity({
        // options
        cellAlign: 'left',
        contain: true,
        pageDots: false,
        wrapAround: true,
        imagesLoaded: true,
        asNavFor: '.box-compare-product .img__main-carousel.compare-main-1',
        prevNextButtons: false
    });
    //main carousel
    $('.box-compare-product .img__main-carousel.compare-main-2').flickity({
        // options
        cellAlign: 'left',
        contain: true,
        pageDots: false,
        wrapAround: true,
        imagesLoaded: true,
        prevNextButtons: false
    });
        //thumb carousel
    $('.box-compare-product .img__thumb-carousel.compare-thumb-2').flickity({
        // options
        cellAlign: 'left',
        contain: true,
        pageDots: false,
        wrapAround: true,
        imagesLoaded: true,
        asNavFor: '.box-compare-product .img__main-carousel.compare-main-2',
        prevNextButtons: false
    });
    //main carousel
    $('.box-compare-product .img__main-carousel.compare-main-3').flickity({
        // options
        cellAlign: 'left',
        contain: true,
        pageDots: false,
        wrapAround: true,
        imagesLoaded: true,
        prevNextButtons: false
    });
        //thumb carousel
    $('.box-compare-product .img__thumb-carousel.compare-thumb-3').flickity({
        // options
        cellAlign: 'left',
        contain: true,
        pageDots: false,
        wrapAround: true,
        imagesLoaded: true,
        asNavFor: '.box-compare-product .img__main-carousel.compare-main-3',
        prevNextButtons: false
    });

    //detail gallery product
    $('.product-img-gallery .main-carousel').flickity({
        // options
        cellAlign: 'left',
        contain: true,
        prevNextButtons: true,
        pageDots: false,
        wrapAround: true,
        imagesLoaded: true,
        arrowShape: { 
            x0: 10,
            x1: 60, y1: 50,
            x2: 70, y2: 40,
            x3: 30
        }
    });
    //thumb
    $('.product-img-gallery .thumb-carousel').flickity({
        // options
        cellAlign: 'left',
        contain: true,
        asNavFor: '.product-img-gallery .main-carousel',
        prevNextButtons: true,
        pageDots: false,
        wrapAround: true,
        imagesLoaded: true,
        arrowShape: { 
            x0: 10,
            x1: 60, y1: 50,
            x2: 70, y2: 40,
            x3: 30
          }
    });
})

//show compare info
$(function () {  
    $('.box-compare-info .btn-show-detail').on('click', function () {  
        $('.box-compare-info.box-hidden').slideDown()
        $(this).hide()
    })
})

$(function () {  
    $('.payment__row .cus-data a').on('click', function () {
        $(this).parents('.cus-data').css('display','none')
        $('.payment__row .wrap-cus-data').css('display', 'block')
    })
})

//chose address
$(function () {  
    $('.list__shop .select-area .city').on('click', function (e) {
        $('.list__shop .select-area .district__list').removeClass('active')
        if (e.target.class == "province" || $(e.target).parents(".province").length) {
            $(this).children('.province').toggleClass('active')
        }
        $(this).children('.province').toggleClass('active')
    })

    $('.list__shop .select-area .district').on('click', function (e) {
        $('.list__shop .select-area .province').removeClass('active')
        if (e.target.class == "district__list" || $(e.target).parents(".district__list").length) {
            $(this).children('.district__list').toggleClass('active')
        }
        $(this).children('.district__list').toggleClass('active')
    })
})

// detect checked box and radio box
$(function () {  
    //shipping change tab radio button
    $('.method__item').on('click', function () {
        $('.method-toggle').removeClass('active')
        if(document.getElementById('giaohang1').checked) {
            $('.method-pickup').addClass('active')
        }
        else if(document.getElementById('giaohang2').checked){
            $('.method-delivery').addClass('active')
        }
    })
    
})

//comment show
$(function () {  
    $('.cmt-item .action-user .respondent').on('click', function () {  
        $(this).parents('.cmt-item').find('.form-add').css("display", "block")
    })
})

function headerOverlay() { 
    //header overlay toggle
    $('.header-overlay').on('click', function () {  
        $(this).toggleClass('active')
    })
}

/**
 * header locate dropdown
 * sale banner popup
 */
$(function () {
    var $win = $(window); 
    var $box = $(".dropdown-toggle, .nav-local .access-popup .choose");
    function locateDropdown() {  
        if(window.innerWidth > 1024){
            $win.on("click.Bst", function (event) {
                if (
                    $box.has(event.target).length == 0 //checks if descendants of $box was clicked
                    &&
                    !$box.is(event.target) //checks if the $box itself was clicked
                ) {
                    $('.dropdown-toggle').siblings('.dropdown-list').removeClass('active');
                    $('.header-overlay').removeClass('active')
                } else {
                    $('.dropdown-toggle').siblings('.dropdown-list').toggleClass('active');
                    $('.header-overlay').toggleClass('active')
                }
            });
        }
    }
    locateDropdown()
    
    function locatePopupAcess() {  
        setTimeout(() => {
            $('.access-popup').css('display', 'block')
        }, 300);
    }

    function saleBannerPopup() {
        $('.sale-popup .close').click(function () {  
            $('.sale-popup').removeClass('show');
            $('.banner-sale-overlay').removeClass('active')
        })
        setTimeout(() => {
            $('.sale-popup').addClass('show');
            $('.banner-sale-overlay').addClass('active');
        }, 2500);
    }

    function mobileLocateAccess() {  
        setTimeout(() => {
            $('.mobile-access-popup').css('display', 'block')
        }, 300);
    }

    function suggessContactBox(){
        setTimeout(() => {
            $('.contact-now-float .suggess-box').css("display", "block")
        }, 500);
    }

    if (typeof(Storage) !== "undefined") {
        if(sessionStorage.getItem('popState') != 'shown'){
            locatePopupAcess();
            saleBannerPopup()
            mobileLocateAccess();
            suggessContactBox();
            sessionStorage.setItem('popState','shown')
        }
    }
    else{
        console.log('browser not support storage')
    }
    
    $('.nav-local .access-popup .choose').bind('click', function () {  
        $('.dropdown-toggle').siblings('.dropdown-list').removeClass('active');
        $('.header-overlay').removeClass('active');
        $(this).parents('.access-popup').css('display', 'none')
    })
    $('.nav-local .access-popup .close').click(function(){
        $(this).parents('.access-popup').css('display', 'none')
    })
})

//mẹnu dropdown
$(function () {
    // header category dropdown
    $('.nav-logo .btn-header-menu, .header__box-menu').hover(
        function () {
            $('.nav-logo .header__box-menu').addClass('active');
            $('.header-overlay').addClass('active');
        }, function () {
            $('.nav-logo .header__box-menu').removeClass('active');
            if($('.dropdown-list').hasClass('active')){
                $('.header-overlay').addClass('active');
            }
            else{
                $('.header-overlay').removeClass('active');
            }
    })
})

//header cate scroll disable, header scroll
function scrollDistance() {  
    let scroll = $(window).scrollTop();
    if(scroll >=200){
        $('.nav-logo .btn-header-menu ').addClass('active')
    }
    else{
        $('.nav-logo .btn-header-menu ').removeClass('active')
    }
}
scrollDistance()
$(window).scroll(function () {  
    scrollDistance()
})

// scrollCollapse
$(function () {  
    let isMobile = window.matchMedia("only screen and (max-width: 760px)").matches;
    function scrollCollapse() {
        let scroll = $(window).scrollTop();
        if(scroll > 10){
            $('header').addClass('collapse')
        }
        else{
            $('header').removeClass('collapse')
        }
    }
    if(isMobile){
        $(window).bind('scroll', scrollCollapse)
    }
})
// mobile hamburger 
$(function () {  
    $('.mobile-hamburger').click(function () {  
        $(this).toggleClass('active')
        $('.mobile-header-cate').toggleClass('active')
        $('.header-overlay').toggleClass('active')
    })
})

//blog readmore
$(function () {  
    $('.cate-blog .btn-readmore').click(function () {  
        $(this).parents('.cate-blog').css('height', '100%');
        $(this).parents('.blog-content-showmore').css('display',"none")
    })
})

//blog contetn showmore
$(function () {  
    $('.product-content .blog-content .blog-content-showmore').click(function () {  
        $(this).parents('.blog-content').css('height', 'auto')
        $(this).css('display', 'none')
    })
})

//technical info showmore
$(function () {  
    $('.technical-info #more-specific').click(function () {  
        $(this).hide()
        $('.technical-info table tr:last-child').addClass('unborder')
        $('.technical-info table tr').css('display', 'table-row')
    })
})

//rating show
$(function () {
    $('.reviews__detail button').click(function(){
        $(this).toggleClass('active');
        if ($(this).hasClass("active")) {
            $(this).html("Đóng");
        } else {
            $(this).html("Gửi đánh giá của bạn");
        }
        $('.reviews__detail .form-review').toggleClass('active')
    })
    $('.reviews__detail .stars input').click(function () {  
        $('.reviews__detail .form-review .preview').css('display', 'flex')
    })
})

//float button
$(function () {
    // notification float
    $('.notification-float .btn-icon').click(function () {  
        $('.notification-float').toggleClass('active')
    })

    //contact now float
    $('.contact-now-float .button__main').click(function () {
        $(this).toggleClass('active')
        $('.contact-now-float .suggess-box').css('display', 'none')
        $('.contact-now-float .button-wrap .button__child').toggleClass('active')
    })
    $('.contact-now-float .suggess-box .close-icon').click(function(){
        $(this).parents('.suggess-box').css('display', 'none')
    })

})



$(function () {
    // popup comment
    function popupComment() {  
        $('.comment .form-add .send-btn').click(function () {  
            $('.popup-comment').addClass('active')
        })
        $('.popup-comment .close').click(function () {  
            $('.popup-comment').removeClass('active')
        })
    }
    popupComment()

    // mobile nav local
    function mobileNavLocal() {  
        let $win = $(window);
        let $box = $('.mobile-nav-local, mobile-nav-local .dropdown-local')
        $('.navbar .mobile-nav-local').click(function () {  
            $(this).find('.dropdown-local').toggleClass('active')
            $('.header-overlay').toggleClass('active')
        })
        $('.mobile-nav-local .mobile-access-popup .choose').click(function () {  
            $(this).parents('.mobile-access-popup').css('display', 'none')
        })
        $('.mobile-nav-local .mobile-access-popup .close').click(function () {
            $(this).parents('.mobile-access-popup').css('display', 'none')
            $(this).parents('.mobile-nav-local').find('.dropdown-local').toggleClass('active');
            $('.header-overlay').toggleClass('active')
        })
        $win.on('click.Bst', function (e) {  
            if($box.has(e.target).length == 0 && !$box.is(e.target)){
                $('.dropdown-local').removeClass('active')
                $('.header-overlay').removeClass('active')
            }
        })
    }
    if(window.matchMedia("only screen and (max-width: 760px)").matches){
        mobileNavLocal()
    }
})

//countdown timer
if ($('.time-box').length) {
    const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

    let destinationDay = 'Sep 30, 2021 00:00:00',
    countDown = new Date(destinationDay).getTime(),
    x = setInterval(() => {
        let now = new Date().getTime(),
        distance = countDown - now;

            
    document.getElementById("day").innerText = Math.floor(distance / (day)),
    document.getElementById("hour").innerText = Math.floor((distance % (day)) / (hour)),
    document.getElementById("minute").innerText = Math.floor((distance % (hour)) / (minute)),
    document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

    //do something later when date is reached
    }, 0);
}

//lightbox
Fancybox.bind('[data-fancybox="gallery"]', {
    dragToClose: false,
    closeButton: "top",

    Image: {
        zoom: false,
    },

    on: {
        initCarousel: (fancybox) => {
            const slide = fancybox.Carousel.slides[fancybox.Carousel.page];

            fancybox.$container.style.setProperty(
                "--bg-image",
                `url("${slide.$thumb.src}")`
            );
        },
        "Carousel.change": (fancybox, carousel, to, from) => {
            const slide = carousel.slides[to];

            fancybox.$container.style.setProperty(
                "--bg-image",
                `url("${slide.$thumb.src}")`
            );
        },
    },
});

//backto top
function backTop() {
    let scroll = document.querySelector('html').scrollTop;
    let backToTop = document.querySelector('.back-to-top')
    if(scroll > 800){
        backToTop.classList.add('active')
    }
    else{
        backToTop.classList.remove('active')
    }
}
backTop()
window.addEventListener('scroll', backTop)
