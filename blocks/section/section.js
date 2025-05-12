jQuery(document).ready(function ($) {
	
	// Init Logo Carousel

	$('.hp-hero-three-images-container').imagesLoaded(function() {
		$('.hp-hero-three-images-container').flickity({
			// options
			cellAlign: 'right',
			contain: true,
			pageDots: false,
			prevNextButtons: false,
			freeScroll: true,
			wrapAround: true,
			autoPlay: 2000,
			selectedAttraction: 0.009,
			watchCSS: true
		});
	});
	
	// Init Logo Carousel

	$('.htc-right-content').imagesLoaded(function() {
		$('.htc-right-content').flickity({
			// options
			cellAlign: 'left',
			contain: true,
			pageDots: false,
			prevNextButtons: false,
			freeScroll: true,
			wrapAround: true,
			autoPlay: 3000,
			selectedAttraction: 0.009,
			watchCSS: true
		});
	});
	
	// Init Logo Carousel

	$('.cases-list').imagesLoaded(function() {
		$('.cases-list').flickity({
			// options
			cellAlign: 'left',
			contain: true,
			pageDots: false,
			prevNextButtons: false,
			freeScroll: true,
			wrapAround: true,
			autoPlay: 3000,
			selectedAttraction: 0.009,
			watchCSS: true
		});
	});

});

const buttons = document.querySelectorAll('.htc-left-menu div');

if (buttons.length > 0) {
	const contents = document.querySelectorAll('.content');
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const targetId = button.getAttribute('data-target');
        const targetContent = document.getElementById(targetId);

        if (targetContent) {
          // Remove active class from all buttons and contents
          buttons.forEach(b => b.classList.remove('active'));
          contents.forEach(c => c.classList.remove('active'));

          // Add active class to clicked button and corresponding content
          button.classList.add('active');
          targetContent.classList.add('active');
        }
      });
    });
  }

