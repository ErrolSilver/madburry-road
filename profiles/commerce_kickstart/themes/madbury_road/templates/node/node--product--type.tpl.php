<article<?php print $attributes; ?>>
  <?php print $user_picture; ?>
  <?php print render($title_prefix); ?>
  <?php if (!$page && $title): ?>
  <header>
    <h2<?php print $title_attributes; ?>><a href="<?php print $node_url ?>" title="<?php print $title ?>"><?php print $title ?></a></h2>
  </header>
  <?php endif; ?>
  <?php print render($title_suffix); ?>
  <?php if ($display_submitted): ?>
  <footer class="submitted"><?php print $date; ?> -- <?php print $name; ?></footer>
  <?php endif; ?>
  <div<?php print $content_attributes; ?>>
    <div class="col-md-7">
      <?php print render($content['product:field_images']); ?>
      <?php print render($content['product:field_materials']); ?>

    </div>
    <div class="col-md-5">
      <?php print render($content['title_field']); ?>
      <?php print render($content['body']); ?>
      <?php print render($content['field_product']); ?>
      <?php print render($content['product:commerce_price']); ?>

      <div class="shipping-calculator">
        filler filler filler
      </div>
    </div>
  </div>
  <hr class="fancy">
  <div class="col-md-12">
    <div class="row">
      <div class="constrainer text-center">
        <?php print render($content['product:field_product_details']); ?>
      </div>
      <hr class="fancy">
      <div class="constrainer text-center">
        <?php print render($content['product:field_specifications']); ?>
      </div>
    </div>
  </div>
</article>
