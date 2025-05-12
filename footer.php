<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package ilogic
 */

$class = 'footer_main_inner container';
$cols = get_field_object('columns', 'option');
$tab_cols = get_field_object('tab_columns', 'option');
$mob_cols = get_field_object('mob_columns', 'option');
$padding = get_field_object('footer_padding', 'option');

if ( ! empty( $cols ) ) {
    $class .=  ' ' . $cols['value'];
}
if ( ! empty( $tab_cols ) ) {
    $class .=  ' ' . $tab_cols['value'];
}
if ( ! empty( $mob_cols ) ) {
    $class .=  ' ' . $mob_cols['value'];
}
if ( ! empty( $padding ) ) {
	$paddings = '';

	if ( ! empty( $padding['value']['custom_padding_ld']  )) {
		if( ! empty($padding['value']['custom_padding_ld']['padding_top']) ) {
			$paddings .= ' --b-footer-space-top-ld: ' . $padding['value']['custom_padding_ld']['padding_top'] . ';';
		}
		if( ! empty($padding['value']['custom_padding_ld']['padding_bottom']) ) {
			$paddings .= ' --b-footer-space-bottom-ld: ' . $padding['value']['custom_padding_ld']['padding_bottom'] . ';';
		}
		if( ! empty($padding['value']['custom_padding_ld']['padding_left']) ) {
			$paddings .= ' --b-footer-space-left-ld: ' . $padding['value']['custom_padding_ld']['padding_left'] . ';';
		}
		if( ! empty($padding['value']['custom_padding_ld']['padding_right']) ) {
			$paddings .= ' --b-footer-space-right-ld: ' . $padding['value']['custom_padding_ld']['padding_right'] . ';';
		}
	}

	if ( ! empty( $padding['value']['custom_padding_mt']  )) {
		if( ! empty($padding['value']['custom_padding_mt']['padding_top']) ) {
			$paddings .= ' --b-footer-space-top-mt: ' . $padding['value']['custom_padding_mt']['padding_top'] . ';';
		}
		if( ! empty($padding['value']['custom_padding_mt']['padding_bottom']) ) {
			$paddings .= ' --b-footer-space-bottom-mt: ' . $padding['value']['custom_padding_mt']['padding_bottom'] . ';';
		}
		if( ! empty($padding['value']['custom_padding_mt']['padding_left']) ) {
			$paddings .= ' --b-footer-space-left-mt: ' . $padding['value']['custom_padding_mt']['padding_left'] . ';';
		}
		if( ! empty($padding['value']['custom_padding_mt']['padding_right']) ) {
			$paddings .= ' --b-footer-space-right-mt: ' . $padding['value']['custom_padding_mt']['padding_right'] . ';';
		}
	}
}

?>

	<footer id="footer" class="site_footer">
		<div class="footer_main" <?php if ( ! empty( $padding ) ) echo 'style="' . $paddings . '"'; ?>>
		<div class="<?php echo $class; ?>">
			<?php if ( is_active_sidebar( 'footer-1' ) ) { ?>
				<div class="footer_col_1 column">
					<?php dynamic_sidebar('footer-1'); ?>
				</div>
			<?php } ?>
			<?php if ( is_active_sidebar( 'footer-2' ) ) { ?>
				<div class="footer_col_2 column">
					<?php dynamic_sidebar('footer-2'); ?>
				</div>
			<?php } ?>
			<?php if ( is_active_sidebar( 'footer-3' ) ) { ?>
				<div class="footer_col_3 column">
					<?php dynamic_sidebar('footer-3'); ?>
				</div>
			<?php } ?>
			<?php if ( is_active_sidebar( 'footer-4' ) ) { ?>
				<div class="footer_col_4 column">
					<?php dynamic_sidebar('footer-4'); ?>
				</div>
			<?php } ?>
		</div>
		</div>
		<div class="footer_bottom_above">
			<?php if ( is_active_sidebar( 'footer-bottom-above' ) ) { ?>
				<?php dynamic_sidebar('footer-bottom-above'); ?>
			<?php } ?>
		</div>
		<div class="footer_bottom">
			<?php if ( is_active_sidebar( 'footer-bottom' ) ) { ?>
				<?php dynamic_sidebar('footer-bottom'); ?>
			<?php } ?>
		</div>
	</footer><!-- #footer -->
</div><!-- #page -->
<div id="case-overlay" class="case-overlay"></div>
<div id="case-overlay-bg" class="case-overlay-bg"></div>
<div id="contact-form-popup" class="contact-form-popup">
    <button class="close-overlay" type="button">X</button>
	<h3 class="intro_title title-style-3 title-size-4 title-weight-500" style="--title_margin_bottom_ld: 1rem; --title-size-4-mt: 24px;">Ready for more?</h3>
	<p class="cfp-text">You've seen a glimpse of our capabilities. <br>Request a demo to explore our full repository of bio-samples and integrated medical records</p>
    <?php echo do_shortcode('[contact-form-7 id="30ac415" title="Request a Demo"]'); ?>
</div>

<?php wp_footer(); ?>
<!--
	         (__)
     `\------(oo)
       ||    (__) <(What are you looking for?)
       ||w--||
-->
<?php echo get_field('body_bottom_script', 'option') ?> <!-- Body End External Script -->
</body>
</html>
