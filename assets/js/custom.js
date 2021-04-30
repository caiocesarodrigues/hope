/*--------------------- Copyright (c) 2020 -----------------------
[Master Javascript]
Project: Multifarious Services - Responsive HTML Template 
Version: 1.0.0
Assigned to: Theme Forest
-------------------------------------------------------------------*/
(function($) {
    "use strict";
    /*-----------------------------------------------------
    	Function  Start
    -----------------------------------------------------*/
    var Multifarious = {
        initialised: false,
        version: 1.0,
        mobile: false,
        init: function() {
            if (!this.initialised) {
                this.initialised = true;
            } else {
                return;
            }
            /*-----------------------------------------------------
            	Function Calling
            -----------------------------------------------------*/
            this.preLoader();
            this.searchBox();
            this.cartBox();
            this.wowAnimation();
            this.navMenu();
            this.topButton();
            this.gymTestimonial();
            this.popupGallery();
            this.dancenavMenu();
            this.danceBanner();
            this.d_choregph();
            this.ScrollTop();
        },

        /*-----------------------------------------------------
	         Fixed Header
	      	-----------------------------------------------------*/
        ScrollTop: function() {
            if ($('.fixed_header').length > 0) {
                $(window).scroll(function() {
                    var scroll = $(window).scrollTop();

                    if (scroll >= 100) {
                        $(".fixed_header").addClass("fixed");
                    } else {
                        $(".fixed_header").removeClass("fixed");
                    }

                });
            }
        },
        /*-----------------------------------------------------
        	Fix Preloader
        -----------------------------------------------------*/
        preLoader: function() {
            $(window).on('load', function() {
                $(".preloader_wrapper").removeClass('preloader_active');
            });
            jQuery(window).on('load', function() {
                setTimeout(function() {
                    jQuery('.preloader_open').addClass('loaded');
                }, 100);
            });
        },

        /*-----------------------------------------------------
        	Fix Search Bar & Cart
        -----------------------------------------------------*/
        searchBox: function() {
            $('.searchBtn').on("click", function() {
                $('.searchBox').addClass('show');
            });
            $('.closeBtn').on("click", function() {
                $('.searchBox').removeClass('show');
            });
            $('.searchBox').on("click", function() {
                $('.searchBox').removeClass('show');
            });
            $(".search_bar_inner").on('click', function() {
                event.stopPropagation();
            });
        },

        cartBox: function() {
            var cartCount = 0;
            $('.gym_cart_open').on("click", function() {
                if (cartCount == '0') {
                    $('.gym_cart_open').addClass('show');
                    cartCount++;
                } else {
                    $('.gym_cart_open').removeClass('show');
                    cartCount--;
                }
            });
            $(".gym_cart_open, .gym_cart_box").on('click', function(e) {
                event.stopPropagation();
            });
            $('body').on("click", function() {
                if (cartCount == '1') {
                    $('.gym_cart_open').removeClass('show');
                    cartCount--;
                }
            });
        },

        /*-----------------------------------------------------
        	Fix Animation 
        -----------------------------------------------------*/
        wowAnimation: function() {
            new WOW().init();
        },

        /*-----------------------------------------------------
        	Fix Mobile Menu 
        -----------------------------------------------------*/
        navMenu: function() {
            var w = window.innerWidth;
            if (w <= 991) {
                $(".main_menu_wrapper>ul li").on('click', function() {
                    $(this).find('ul.sub_menu').slideToggle();
                    $(this).toggleClass("open");
                });
                $(".main_menu_wrapper>ul").on('click', function() {
                    event.stopPropagation();
                });
                $(".menu_btn").on('click', function(e) {
                    event.stopPropagation();
                    $(".main_menu_wrapper, .menu_btn_wrap").toggleClass("open");
                });
                $("body").on('click', function() {
                    $(".main_menu_wrapper, .menu_btn_wrap").removeClass("open");
                });
            }
        },

        /*-----------------------------------------------------
        	Fix GoToTopButton
        -----------------------------------------------------*/
        topButton: function() {
            var scrollTop = $("#scroll");
            $(window).on('scroll', function() {
                if ($(this).scrollTop() < 500) {
                    scrollTop.removeClass("active");
                } else {
                    scrollTop.addClass("active");
                }
            });
            $('#scroll').click(function() {
                $("html, body").animate({
                    scrollTop: 0
                }, 2000);
                return false;
            });

            $(function() {
                $('.go_to_demo').click(function() {
                    $('html, body').animate({ scrollTop: $('#go_to_demo').offset().top }, 'slow');
                    return false;
                });
            });
        },

        /*-----------------------------------------------------
        	Fix GYM Testimonial Slider  / dance rightclass / dance testimonial Slider 
        -----------------------------------------------------*/
        gymTestimonial: function() {
            var TestimonialSwiper = new Swiper('.d_testi_wrapper .swiper-container, .d_rclass_wrapper .swiper-container', {
                autoHeight: false,
                autoplay: false,
                loop: true,
                spaceBetween: 0,
                centeredSlides: false,
                speed: 1500,
                autoplay: {
                    delay: 1000,
                    disableOnInteraction: false,
                    stopOnLast: true,
                },
                navigation: {
                    nextEl: ".swiperButtonNext, .swiper-button-next1",
                    prevEl: ".swiperButtonPrev, .swiper-button-prev1",
                },
            });
        },

        /*-----------------------------------------------------
        	Fix Gallery Magnific Popup
        -----------------------------------------------------*/
        popupGallery: function() {
            jQuery(document).ready(function() {
                if ($(".popup_gallery5").length > 0) {
                    $('.popup_gallery5 ').magnificPopup({
                        delegate: 'a',
                        type: 'image',
                        tLoading: 'Loading image #%curr%...',
                        mainClass: 'mfp-img-mobile',
                        gallery: {
                            enabled: true,
                            navigateByImgClick: true,
                            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
                        },
                        image: {
                            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
                            titleSrc: function(item) {
                                return item.el.attr('title') + '<small></small>';
                            }
                        }
                    });
                }
            });
        },
        /*-----------------------------------------------------
        	Menu for dance themplate  
        -----------------------------------------------------*/
        dancenavMenu: function() {
            $(".d_main_menu_wrapper > ul li").on('click', function() {
                $(this).find('ul.d_sub_menu').slideToggle();
                $(this).toggleClass("open");
            });
            $(".menu_togglebtn").on('click', function(e) {
                event.stopPropagation();
                $("body").toggleClass("open_menu");
            });

        },
        /*-----------------------------------------------------
        	Fix dance Banner Slider 
        -----------------------------------------------------*/
        danceBanner: function() {
            var bannerSwiper = new Swiper('.swiper-container.d_banner_slider', {
                autoHeight: false,
                autoplay: true,
                loop: true,
                spaceBetween: 0,
                centeredSlides: false,
                speed: 1000,
                autoplay: {
                    delay: 3000,
                },
                keyboard: {
                    enabled: true,
                },
                navigation: {
                    nextEl: '.ButtonNext',
                    prevEl: '.ButtonPrev',
                },
                pagination: {
                    el: '.pagination',
                    clickable: true,
                },
            });
        },
        /*-----------------------------------------------------
        	Fix Dance Choreghapher Slider 
        -----------------------------------------------------*/
        d_choregph: function() {
            var choregraphSwiper = new Swiper('.d_choregph_wrapper .swiper-container', {
                autoHeight: false,
                autoplay: true,
                spaceBetween: 0,
                slidesPerView: 2,
                loop: true,
                speed: 1000,
                autoplay: {
                    delay: 2000,
                },
                navigation: {
                    nextEl: '.blogNextButton',
                    prevEl: '.blogPrevButton',
                },
                pagination: {
                    el: '.d_choregph_pagination',
                    type: 'fraction',
                },
                breakpoints: {
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 0,
                    },
                    575: {
                        slidesPerView: 1,
                        spaceBetween: 0,
                    },
                    767: {
                        slidesPerView: 1,
                        spaceBetween: 0,
                    },
                    992: {
                        slidesPerView: 2,
                        spaceBetween: 0,
                    },
                    1200: {
                        slidesPerView: 2,
                        spaceBetween: 0,
                    },
                    1920: {
                        slidesPerView: 2,
                        spaceBetween: 0,
                    },
                },
            });
        },





    };

    Multifarious.init();

})(jQuery);

/*-----------------------------------------------------
	Fix Contact Form Submission
-----------------------------------------------------*/
// Contact Form Submission
function checkRequire(formId, targetResp) {
    targetResp.html('');
    var email = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
    var url = /(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/;
    var image = /\.(jpe?g|gif|png|PNG|JPE?G)$/;
    var mobile = /^[\s()+-]*([0-9][\s()+-]*){6,20}$/;
    var facebook = /^(https?:\/\/)?(www\.)?facebook.com\/[a-zA-Z0-9(\.\?)?]/;
    var twitter = /^(https?:\/\/)?(www\.)?twitter.com\/[a-zA-Z0-9(\.\?)?]/;
    var google_plus = /^(https?:\/\/)?(www\.)?plus.google.com\/[a-zA-Z0-9(\.\?)?]/;
    var check = 0;
    $('#er_msg').remove();
    var target = (typeof formId == 'object') ? $(formId) : $('#' + formId);
    target.find('input , textarea , select').each(function() {
        if ($(this).hasClass('require')) {
            if ($(this).val().trim() == '') {
                check = 1;
                $(this).focus();
                $(this).parent('div').addClass('form_error');
                targetResp.html('You missed out some fields.');
                $(this).addClass('error');
                return false;
            } else {
                $(this).removeClass('error');
                $(this).parent('div').removeClass('form_error');
            }
        }
        if ($(this).val().trim() != '') {
            var valid = $(this).attr('data-valid');
            if (typeof valid != 'undefined') {
                if (!eval(valid).test($(this).val().trim())) {
                    $(this).addClass('error');
                    $(this).focus();
                    check = 1;
                    targetResp.html($(this).attr('data-error'));
                    return false;
                } else {
                    $(this).removeClass('error');
                }
            }
        }
    });
    return check;
}
$(".submitForm").on('click', function() {
    var _this = $(this);
    var targetForm = _this.closest('form');
    var errroTarget = targetForm.find('.response');
    var check = checkRequire(targetForm, errroTarget);

    if (check == 0) {
        var formDetail = new FormData(targetForm[0]);
        formDetail.append('form_type', _this.attr('form-type'));
        $.ajax({
            method: 'post',
            url: 'ajaxmail.php',
            data: formDetail,
            cache: false,
            contentType: false,
            processData: false
        }).done(function(resp) {
            console.log(resp);
            if (resp == 1) {
                targetForm.find('input').val('');
                targetForm.find('textarea').val('');
                errroTarget.html('<p style="color:green;">Mail has been sent successfully.</p>');
            } else {
                errroTarget.html('<p style="color:red;">Something went wrong please try again latter.</p>');
            }
        });
    }
});