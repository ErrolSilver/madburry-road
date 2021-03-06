<?php

/**
 * @file
 * template.php. Preprocess hooks and helper functions to alter the output of
 * renderable arrays.
 */

/**
 * Add a custom, theme-specific JS file. Added here so it can be placed in the
 * footer instead of the header which is where the info file places JS.
 */
drupal_add_js(drupal_get_path('theme', 'madbury_road') . '/js/theme.js', array('type' => 'file', 'scope' => 'footer'));

/**
 * Implements hook_preprocess_page().
 */
function madbury_road_preprocess_page(&$variables) {
  // Create the logo image tag here to keep page.tpl clean. We use JS in
  // theme.js to swap out the svg for a png for old browsers.
  $logo_variables = array(
    'path' => base_path() . drupal_get_path('theme', 'madbury_road') . '/images/logo.svg',
    'alt' => 'Madburry Road Logo',
    'attributes' => array(  
      'title' => 'Home',
      'class' => 'fluid js__svg-image',
    ),
  );
  $variables['svg_logo'] = theme('image', $logo_variables);
}

/**
 * Overrides theme_field()
 * Remove the hard coded classes so we can add them in preprocess functions.
 * See madbury_road_preprocess_field().
 */
function madbury_road_field($variables) {
  $output = '';

  // Render the label, if it's not hidden.
  if (!$variables['label_hidden']) {
    $output .= '<div ' . $variables['title_attributes'] . '>' . $variables['label'] . ':&nbsp;</div>';
  }

  // Render the items.
  $output .= '<div ' . $variables['content_attributes'] . '>';
  foreach ($variables['items'] as $delta => $item) {
    $output .= '<div ' . $variables['item_attributes'][$delta] . '>' . drupal_render($item) . '</div>';
  }
  $output .= '</div>';

  // Render the top-level DIV.
  $output = '<div class="' . $variables['classes'] . '"' . $variables['attributes'] . '>' . $output . '</div>';

  return $output;
}

/**
 * Implements hook_preprocess_field().
 *
 * Allows us to easily add classes to individual fields and their wrappers.
 */
function madbury_road_preprocess_field(&$variables) {
  $name = $variables['element']['#field_name'];
  $bundle = $variables['element']['#bundle'];
  $mode = $variables['element']['#view_mode'];
  $classes = &$variables['classes_array'];
  $title_classes = &$variables['title_attributes_array']['class'];
  $content_classes = &$variables['content_attributes_array']['class'];
  $item_classes = array();

  /* Global field classes */
  $classes[] = 'field-wrapper';
  $title_classes[] = 'field-label';
  $content_classes[] = 'field-items';
  $item_classes[] = 'field-item';

  /* Add specific classes to targeted fields */
  switch ($mode) {
    /* All teasers */
    case 'teaser':
      switch ($name) {
        /* Teaser read more links */
        case 'node_link':
          $item_classes[] = 'more-link';
          break;
        /* Teaser descriptions */
        case 'body':
        case 'field_description':
          $item_classes[] = 'description';
          break;
      }
      break;
  }

  switch ($name) {
    case 'field_name':
      $classes[] = 'my-class-name';
      break;
  }

  // Apply odd or even classes along with our custom classes to each item */
  foreach ($variables['items'] as $delta => $item) {
    $variables['item_attributes_array'][$delta]['class'] = $item_classes;
    $variables['item_attributes_array'][$delta]['class'][] = $delta % 2 ? 'even' : 'odd';
  }
}

function madbury_road_theme() {
  $items = array();
      
  $items['user_login'] = array(
    'render element' => 'form',
    'path' => drupal_get_path('theme', 'bootstrap_starter') . '/templates',
    'template' => 'user-login',
    'preprocess functions' => array(
       'bootstrap_starter_user_login'
    ),
  );
  $items['user_register_form'] = array(
    'render element' => 'form',
    'path' => drupal_get_path('theme', 'bootstrap_starter') . '/templates',
    'template' => 'user-register',
    'preprocess functions' => array(
      'bootstrap_starter_user_register_form'
    ),
  );
  $items['user_pass'] = array(
    'render element' => 'form',
    'path' => drupal_get_path('theme', 'bootstrap_starter') . '/templates',
    'template' => 'user-pass',
    'preprocess functions' => array(
      'bootstrap_starter_user_pass'
    ),
  );
  return $items;
}

/**
 * hook_form_alter
 */
function madbury_road_form_alter(&$form, &$form_state, $form_id) {
  // e.g form id: commerce_cart_add_to_cart_form_u6onPJSgS7pOgw0Tlo7zHy42LTQzbV913taANkYQKTo
  //if (strpos($form_id, 'commerce_cart_add_to_cart_form_22') !== FALSE){
    // Adjust add to cart form
    madbury_road_commerce_add_to_cart_form_alter($form, $form_state);
  //}

}

/**
 * Custom function to alter add to cart form
 */
function madbury_road_commerce_add_to_cart_form_alter(&$form, &$form_state){
  // Add read only price field to add to cart form
  if (isset($form_state['default_product']->commerce_price)){
    $form['display_price'] = array(
      '#title' => t('Price'),
      '#type' => 'item',
      '#markup' => commerce_currency_amount_to_decimal($form_state['default_product']->commerce_price[LANGUAGE_NONE][0]['amount'], $form_state['default_product']->commerce_price[LANGUAGE_NONE][0]['currency_code']),
    );
  }

}
