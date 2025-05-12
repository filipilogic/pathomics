/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/src/js/custom.js":
/*!*********************************!*\
  !*** ./assets/src/js/custom.js ***!
  \*********************************/
/***/ (() => {

jQuery(document).ready(function ($) {
  // Mobile navigation

  $(".menu-toggle").click(function () {
    $("#primary-menu").fadeToggle();
    $(this).toggleClass('menu-open');
  });
  $("#primary-menu li").click(function () {
    // Get the first <a> element within the clicked li
    var ulElement = $(this).find("ul");

    // Check if the href attribute doesn't only contain "#"
    if (!ulElement.hasClass('sub-menu')) {
      var windowsize = $(window).width();
      if (windowsize < 1200) {
        $("#primary-menu").fadeToggle();
        $(".menu-toggle").toggleClass('menu-open');
      }
    }
  });

  // Sub Menu Trigger

  $("#primary-menu li.menu-item-has-children > a").after('<span class="sub-menu-trigger"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg></span>');
  $(".menu-item-has-children").click(function () {
    var windowsize = $(window).width();
    if (windowsize < 1200) {
      $(this).toggleClass('sub-menu-open');
      $(this).find(".sub-menu").slideToggle();
    }
  });

  // AJAX Load More bttn
  $(document).on('click', '.ilLoadMore', function (e) {
    e.preventDefault(); //prevent default action

    var category = $(this).data('category');
    var postCategory = 'all';
    if (category) {
      postCategory = category;
    }
    if (!window.countPosts) {
      window.countPosts = 4;
    }
    $.ajax({
      type: 'GET',
      url: '/wp-admin/admin-ajax.php',
      data: {
        countPosts: window.countPosts,
        postCategory: postCategory,
        action: 'blog_load_more'
      }
    }).done(function (resp) {
      window.countPosts += 4;
      $('.il_archive_more').html(resp);
    });
  });
  $(document).on('click', '.close-overlay', function () {
    $('.case-overlay').fadeOut();
    $('.case-overlay-bg').fadeOut();
    $('.contact-form-popup').fadeOut();

    // Remove hash if it's #contact-form-popup so it can be triggered again
    if (window.location.hash === '#contact-form-popup') {
      history.replaceState(null, null, window.location.pathname + window.location.search);
    }
  });

  // Show contact form popup if URL hash is #contact-form-popup
  function showContactFormPopupIfHash() {
    var hash = window.location.hash;
    var windowsize = $(window).width();

    // Only handle if hash starts with #contact-form-popup
    if (hash.startsWith('#contact-form-popup')) {
      // If hash is exactly #contact-form-popup (no organ param)
      if (hash === '#contact-form-popup') {
        if (windowsize < 1200) {
          window.location.href = '/request-a-demo-mobile';
        } else {
          $('.case-overlay').fadeOut();
          $('.contact-form-popup').fadeIn();
          $('.case-overlay-bg').fadeIn();
        }
        return;
      }

      // If hash is #contact-form-popup?organ=...
      var match = hash.match(/^#contact-form-popup\?organ=([^&]+)/);
      if (match) {
        var organ = decodeURIComponent(match[1]);
        if (windowsize < 1200) {
          window.location.href = '/request-a-demo-mobile?organ=' + encodeURIComponent(organ || '');
        } else {
          $('.case-overlay').fadeOut();
          $('.contact-form-popup').fadeIn();
          $('.case-overlay-bg').fadeIn();
          // You can use `organ` here if needed
          // Example: $('#your-organ-field').val(organ);
        }
      }
    }
  }

  showContactFormPopupIfHash();
  $(window).on('hashchange', showContactFormPopupIfHash);

  // Redirect to thank you page after successful contact form submission in popup
  document.addEventListener('wpcf7mailsent', function (event) {
    window.location.href = '/thank-you';
  }, false);
});
jQuery(document).on('click', '.get-access-button', function (e) {
  e.preventDefault();
  var organ = jQuery(this).data('organ');
  var windowsize = jQuery(window).width();
  if (windowsize < 1200) {
    // Mobile: redirect to /contact?organ=...
    window.location.href = '/request-a-demo-mobile?organ=' + encodeURIComponent(organ);
  } else {
    // Desktop: set hash to #contact-form-popup?organ=...
    window.location.hash = 'contact-form-popup?organ=' + encodeURIComponent(organ);
  }
});

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
  document.getElementById("backToTopButton").addEventListener("click", function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });
};
function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("masthead").className = "header-main sticky";
  } else {
    document.getElementById("masthead").className = "header-main";
  }
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("backToTopButton").style.opacity = "1";
  } else {
    document.getElementById("backToTopButton").style.opacity = "0";
  }
}

/***/ }),

/***/ "./assets/src/sass/frontend.scss":
/*!***************************************!*\
  !*** ./assets/src/sass/frontend.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!***********************************!*\
  !*** ./assets/src/js/frontend.js ***!
  \***********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sass_frontend_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/frontend.scss */ "./assets/src/sass/frontend.scss");
/* harmony import */ var _js_custom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../js/custom */ "./assets/src/js/custom.js");
/* harmony import */ var _js_custom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_custom__WEBPACK_IMPORTED_MODULE_1__);
/**
 * SASS
 */


/**
 * JavaScript
 */


})();

/******/ })()
;