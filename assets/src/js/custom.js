jQuery(document).ready(function ($) {

    // Mobile navigation

    $(".menu-toggle").click(function () {
        $("#primary-menu").fadeToggle();
        $(this).toggleClass('menu-open');
    });

    $("#primary-menu li").click(function() {
      // Get the first <a> element within the clicked li
      var ulElement = $(this).find("ul");
  
      // Check if the href attribute doesn't only contain "#"
      if (! ulElement.hasClass('sub-menu')) {
          var windowsize = $(window).width();
          if (windowsize < 1200) {
              $("#primary-menu").fadeToggle();
              $(".menu-toggle").toggleClass('menu-open');
          }
      }
    });
    
    // Sub Menu Trigger

    $( "#primary-menu li.menu-item-has-children > a" ).after('<span class="sub-menu-trigger"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg></span>');
    
    $( ".menu-item-has-children" ).click(function() {
      var windowsize = $(window).width();
      if (windowsize < 1200) {
          $( this ).toggleClass('sub-menu-open')
          $( this ).find(".sub-menu").slideToggle();
      }
	  });

    // AJAX Load More bttn
    $(document).on('click', '.ilLoadMore', function (e) {
        e.preventDefault() //prevent default action
        
        const category = $(this).data('category')
        let postCategory = 'all'

        if (category) {
          postCategory = category
        }

        if (!window.countPosts) {
          window.countPosts = 4
        }

        $.ajax({
          type: 'GET',
          url: '/wp-admin/admin-ajax.php',
          data: {
            countPosts: window.countPosts,
            postCategory,
            action: 'blog_load_more',
          },
        }).done(function (resp) {
          window.countPosts += 4
         
          $('.il_archive_more').html(resp)
        })
      });
      
      $(document).on('click', '.close-overlay', function() {
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
    document.addEventListener('wpcf7mailsent', function(event) {
      window.location.href = '/thank-you';
    }, false);
});

jQuery(document).on('click', '.get-access-button', function(e) {
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
window.onscroll = function() {
	scrollFunction();
	
	document.getElementById("backToTopButton").addEventListener("click", function() {
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
