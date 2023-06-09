//слайдер картинок
$(function () {
  $(".slider__inner").slick({
    nextArrow: '<button type="button" class="slick-dots slick-next">></button>',
    prevArrow: '<button type="button" class="slick-dots slick-prev"><</button>',
    dots: true,
    dotsClass: "slick-dots",
    infinite: true,
    arrows: false,
    slidesToScroll: 1,
    slidesToShow: 1,
    // autoplay: true,
    // autoplaySpeed: 6000,
  });
});
//отключение автофокуса инпута у всплывающей формы
$('[data-fancybox=""]').fancybox({
  autoFocus: false,
});
//переключение сервисов
document.addEventListener("DOMContentLoaded", function () {
  $(".services__arrow__two").click(function (e) {
    e.preventDefault();
    if ($(".services__item:last-child").attr("id") !== "active") {
      $("#active").next().addClass("next");
      $("#active").removeAttr("id");
      $(".next").attr("id", "active").removeClass("next");
    }
  });

  $(".services__arrow").click(function (e) {
    e.preventDefault();
    if ($(".services__item:first-child").attr("id") !== "active") {
      $("#active").prev().addClass("prev");
      $("#active").removeAttr("id");
      $(".prev").attr("id", "active").removeClass("prev");
    }
  });
});
// $(".services__arrow__two").click(function (e) {
//   e.preventDefault();
//   $(".services__item").removeAttr("id");
//   $(".services__item:nth-child(1)").next().attr("id", "active");
//   $(".services__arrow").click(function (e) {
//     e.preventDefault();
//     $(".services__item").removeAttr("id");
//     $(".services__item:first").attr("id", "active");
//   });
//   $(".services__arrow__two").click(function (e) {
//     e.preventDefault();
//     $(".services__item").removeAttr("id");
//     $(".services__item:nth-child(2)").next().attr("id", "active");
//     $(".services__arrow").click(function (e) {
//       e.preventDefault();
//       $(".services__item").removeAttr("id");
//       $(".services__item:nth-child(1)").next().attr("id", "active");
//       $(".services__arrow").click(function (e) {
//         $(".services__item").removeAttr("id");
//         $(".services__item:first").attr("id", "active");
//         $(".services__arrow__two").click(function (e) {
//           e.preventDefault();
//           $(".services__item").removeAttr("id");
//           $(".services__item:nth-child(1)").next().attr("id", "active");
//           $(".services__item").removeAttr("id");
//           $(".services__item:nth-child(2)").next().attr("id", "active");
//         });
//       });
//     });
//   });
// });


//начало табов
var $tabs = function (target) {
  var _elemTabs =
      typeof target === "string" ? document.querySelector(target) : target,
    _eventTabsShow,
    _showTab = function (tabsLinkTarget) {
      var tabsPaneTarget, tabsLinkActive, tabsPaneShow;
      tabsPaneTarget = document.querySelector(
        tabsLinkTarget.getAttribute("href")
      );
      tabsLinkActive = tabsLinkTarget.parentElement.querySelector(
        ".tabs__link_active"
      );
      tabsPaneShow = tabsPaneTarget.parentElement.querySelector(
        ".tabs__pane_show"
      );
      // если следующая вкладка равна активной, то завершаем работу
      if (tabsLinkTarget === tabsLinkActive) {
        return;
      }
      // удаляем классы у текущих активных элементов
      if (tabsLinkActive !== null) {
        tabsLinkActive.classList.remove("tabs__link_active");
      }
      if (tabsPaneShow !== null) {
        tabsPaneShow.classList.remove("tabs__pane_show");
      }
      // добавляем классы к элементам (в завимости от выбранной вкладки)
      tabsLinkTarget.classList.add("tabs__link_active");
      tabsPaneTarget.classList.add("tabs__pane_show");
      document.dispatchEvent(_eventTabsShow);
    },
    _switchTabTo = function (tabsLinkIndex) {
      var tabsLinks = _elemTabs.querySelectorAll(".tabs__link");
      if (tabsLinks.length > 0) {
        if (tabsLinkIndex > tabsLinks.length) {
          tabsLinkIndex = tabsLinks.length;
        } else if (tabsLinkIndex < 1) {
          tabsLinkIndex = 1;
        }
        _showTab(tabsLinks[tabsLinkIndex - 1]);
      }
    };

  _eventTabsShow = new CustomEvent("tab.show", { detail: _elemTabs });

  _elemTabs.addEventListener("click", function (e) {
    var tabsLinkTarget = e.target;
    // завершаем выполнение функции, если кликнули не по ссылке
    if (!tabsLinkTarget.classList.contains("tabs__link")) {
      return;
    }
    // отменяем стандартное действие
    e.preventDefault();
    _showTab(tabsLinkTarget);
  });

  return {
    showTab: function (target) {
      _showTab(target);
    },
    switchTabTo: function (index) {
      _switchTabTo(index);
    },
  };
};

$tabs(".tabs");
//конец табов

//слайдер отзывов
$(function () {
  $(".reviews__slider-inner").slick({
    nextArrow: '<button type="button" class="slick-btn slick-next">></button>',
    prevArrow: '<button type="button" class="slick-btn slick-prev"><</button>',
    infinite: false,
  });
});

//отправка php формы
$(document).ready(function () {
  //E-mail Ajax Send
  $("form").submit(function () {
    //Change
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "mail.php", //Change
      data: th.serialize(),
    }).done(function () {
      alert("Спасибо за заказ!");
      setTimeout(function () {
        // Done Functions
        th.trigger("reset");
      }, 1000);
    });
    return false;
  });
});

//стрелка наверх
$(document).scroll(function () {
  if ($(this).scrollTop() > 200) {
    $("#btn_up").show();
  } else {
    $("#btn_up").hide();
  }
});

//Click event to scroll to top
$("#btn_up").click(function () {
  $("html, body").animate({ scrollTop: 0 }, 400);
  return false;
});

//плавный скролл к элементу меню по id
jQuery(document).ready(function () {
  jQuery(window).bind("load", function () {
    //Пример исключения ссылки:
    //jQuery('a[href*="#"]:not([href="#"],[href="#spu-209"],[href="#spu-211"],[href="#spu-212"],[href="#spu-213"],[href="#spu-214"],[href="#spu-215"],[href="#spu-217"])').click(function() {
    jQuery(
      'a:not([href="#content-1"]):not([href="#content-2"]):not([href="#content-3"]):not([href="#content-4"]):not([href="#content-5"]:not([href="#home"])'
    ).click(function () {
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") ||
        location.hostname == this.hostname
      ) {
        var target = jQuery(this.hash);
        target = target.length
          ? target
          : jQuery('[name=" + this.hash.slice(1) + "]');
        if (target.length) {
          jQuery("html, body").animate(
            {
              // $('html, body').animate({
              scrollTop: $(target).offset().top - 174,
            },
            1000
          );
          return false;
        }
      }
    });
  });
});

$(window).on("load", function () {
  function goToByScroll(id) {
    jQuery("html, body").animate(
      {
        scrollTop: jQuery("#" + id).offset().top,
      },
      1000
    );
  }
  if (window.location.hash != "") {
    goToByScroll(window.location.hash.substr(1));
  }
});
