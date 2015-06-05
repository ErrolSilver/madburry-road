<?php
/**
 * @file
 * Default theme implementation for beans.
 *
 * Available variables:
 * - $content: An array of comment items. Use render($content) to print them all, or
 *   print a subset such as render($content['field_example']). Use
 *   hide($content['field_example']) to temporarily suppress the printing of a
 *   given element.
 * - $title: The (sanitized) entity label.
 * - $url: Direct url of the current entity if specified.
 * - $page: Flag for the full page state.
 * - $classes: String of classes that can be used to style contextually through
 *   CSS. It can be manipulated through the variable $classes_array from
 *   preprocess functions. By default the following classes are available, where
 *   the parts enclosed by {} are replaced by the appropriate values:
 *   - entity-{ENTITY_TYPE}
 *   - {ENTITY_TYPE}-{BUNDLE}
 *
 * Other variables:
 * - $classes_array: Array of html class attribute values. It is flattened
 *   into a string within the variable $classes.
 *
 * @see template_preprocess()
 * @see template_preprocess_entity()
 * @see template_process()
 */
$bgImgFilename = $content['field_background_image']['#items'][0]['filename'];
$filePath = base_path() . 
  variable_get('file_public_path', conf_path() . '/files') . '/';
?>

<div class="<?php print $classes; ?> jumbotron__banner clearfix"<?php print $attributes; ?> style="background-image: url(<?php echo $filePath.$bgImgFilename; ?>);">

  <div class="content"<?php print $content_attributes; ?>>
    <?php
      hide($content['field_background_image']);
  
      print render($content);
    ?>
  </div>
</div>
