; Drupal.org release file.
core = 7.x
api = 2

; Basic contributed modules.
projects[ctools][version] = 1.4
projects[ctools][subdir] = "contrib"
projects[entity][version] = 1.5
projects[entity][subdir] = "contrib"
projects[entityreference][version] = 1.1
projects[entityreference][subdir] = "contrib"
projects[entityreference][patch][] = "http://drupal.org/files/1580348-universal-formatters-17.patch"
projects[rules][version] = 2.7
projects[rules][subdir] = "contrib"
projects[views][version] = 3.8
projects[views][subdir] = "contrib"
projects[views][patch][] = "http://drupal.org/files/2059555-reduce-formatter-form-state.patch"
projects[views_bulk_operations][version] = 3.2
projects[views_bulk_operations][subdir] = "contrib"
projects[addressfield][version] = 1.0-beta5
projects[addressfield][subdir] = "contrib"
projects[features][version] = 1.0
projects[features][patch][] = "http://drupal.org/files/1572578-part-one.patch"
projects[features][patch][] = "http://drupal.org/files/1597186-1-features-do-not-cache-includes.patch"
projects[features][patch][] = "http://drupal.org/files/927566-multiple-link_path.patch"
projects[features][patch][] = "http://drupal.org/files/1669720-fix-features-flush-cache.patch"
projects[features][subdir] = "contrib"
projects[strongarm][version] = 2.0
projects[strongarm][subdir] = "contrib"
projects[taxonomy_menu][version] = 1.5
projects[taxonomy_menu][subdir] = "contrib"
projects[libraries][version] = 2.2
projects[libraries][subdir] = "contrib"
projects[views_megarow][version] = 1.3
projects[views_megarow][subdir] = "contrib"

; Drupal Commerce and Commerce contribs.
projects[commerce][version] = 1.10
projects[commerce][subdir] = "contrib"
projects[commerce_features][version] = 1.0
projects[commerce_features][subdir] = "contrib"
projects[commerce_features][patch][] = "http://drupal.org/files/1402762_export_flat_rate_commerce_features-6.patch"
projects[commerce_addressbook][version] = 2.0-rc7
projects[commerce_addressbook][subdir] = "contrib"
projects[commerce_shipping][version] = 2.1
projects[commerce_shipping][subdir] = "contrib"
projects[commerce_flat_rate][version] = 1.0-beta2
projects[commerce_flat_rate][subdir] = "contrib"
projects[commerce_fancy_attributes][version] = 1.0
projects[commerce_fancy_attributes][subdir] = "contrib"
projects[commerce_autosku][version] = 1.x-dev
projects[commerce_autosku][subdir] = "contrib"
projects[commerce_autosku][download][type] = git
projects[commerce_autosku][download][revision] = 562b9a5
projects[commerce_autosku][download][branch] = 7.x-1.x
projects[commerce_migrate][version] = 1.1
projects[commerce_migrate][subdir] = "contrib"
projects[commerce_discount][version] = 1.0-alpha4
projects[commerce_discount][subdir] = "contrib"
projects[commerce_checkout_progress][version] = 1.3
projects[commerce_checkout_progress][subdir] = "contrib"
projects[commerce_extra_price_formatters][version] = 1.x-dev
projects[commerce_extra_price_formatters][subdir] = "contrib"
projects[commerce_extra_price_formatters][download][type] = git
projects[commerce_extra_price_formatters][download][revision] = 1371336
projects[commerce_extra_price_formatters][download][branch] = 7.x-1.x
projects[commerce_checkout_redirect][version] = 2.0-rc1
projects[commerce_checkout_redirect][subdir] = "contrib"
projects[commerce_hosted_pci][version] = 1.0-rc2
projects[commerce_hosted_pci][subdir] = "contrib"
projects[commerce_payleap][version] = 1.1
projects[commerce_payleap][subdir] = "contrib"
projects[commerce_moneybookers][version] = 1.2
projects[commerce_moneybookers][subdir] = "contrib"
projects[commerce_moneybookers][patch][] = "http://drupal.org/files/commerce_moneybookers-disable_payment_method_by_default-1962226-3.patch"
projects[commerce_paypal][subdir] = "contrib"
projects[commerce_paypal][version] = 2.3
projects[commerce_backoffice][subdir] = "contrib"
projects[commerce_backoffice][version] = 1.4
projects[commerce_message][subdir] = "contrib"
projects[commerce_message][version] = 1.0-rc3
projects[commerce_search_api][subdir] = "contrib"
projects[commerce_search_api][version] = 1.3
projects[commerce_add_to_cart_confirmation][subdir] = "contrib"
projects[commerce_add_to_cart_confirmation][version] = 1.0-rc2
projects[commerce_kiala][version] = 1.0-rc1
projects[commerce_kiala][subdir] = "contrib"
projects[commerce_physical][version] = 1.x-dev
projects[commerce_physical][subdir] = "contrib"
projects[commerce_physical][download][type] = git
projects[commerce_physical][download][revision] = e2a8866
projects[commerce_physical][download][branch] = 7.x-1.x
projects[commerce_amex][subdir] = "contrib"
projects[commerce_amex][version] = 1.1
projects[commerce_bean][subdir] = "contrib"
projects[commerce_bean][version] = 1.0-beta1
projects[commerce_cba][subdir] = "contrib"
projects[commerce_cba][version] = 1.0-beta1
projects[commerce_authnet][subdir] = "contrib"
projects[commerce_authnet][version] = 1.1
projects[commerce_exactor][subdir] = "contrib"
projects[commerce_exactor][version] = 1.3
projects[commerceguys_marketplace][version] = 1.0-beta4
projects[commerceguys_marketplace][subdir] = "contrib"
projects[commerce_paymill][subdir] = "contrib"
projects[commerce_paymill][version] = 2.3
projects[commerce_nosto_tagging][subdir] = "contrib"
projects[commerce_nosto_tagging][version] = 1.0
projects[commerce_nosto_tagging][patch][] = https://drupal.org/files/issues/issue-2225883.patch
projects[commerce_yotpo][subdir] = "contrib"
projects[commerce_yotpo][version] = 1.1
projects[commerce_firstdata_gge4][version] = 1.0
projects[commerce_firstdata_gge4][subdir] = "contrib"

; Other contribs.
projects[bean][version] = 1.7
projects[bean][subdir] = "contrib"
projects[countries][version] = 2.1
projects[countries][subdir] = "contrib"
projects[remote_stream_wrapper][version] = 1.0-rc1
projects[remote_stream_wrapper][subdir] = "contrib"
projects[colorbox][version] = 2.7
projects[colorbox][subdir] = "contrib"
projects[physical][version] = 1.x-dev
projects[physical][subdir] = "contrib"
projects[physical][download][type] = git
projects[physical][download][revision] = 32e1a38
projects[physical][download][branch] = 7.x-1.x
projects[crumbs][version] = 1.10
projects[crumbs][subdir] = "contrib"
projects[http_client][version] = 2.4
projects[http_client][subdir] = "contrib"
projects[oauth][version] = 3.2
projects[oauth][subdir] = "contrib"
projects[oauth][patch][] = "http://drupal.org/files/980340-d7.patch"
projects[connector][version] = 1.0-beta2
projects[connector][subdir] = "contrib"
projects[oauthconnector][version] = 1.0-beta2
projects[oauthconnector][subdir] = "contrib"
projects[inline_entity_form][version] = 1.5
projects[inline_entity_form][subdir] = "contrib"
projects[inline_conditions][version] = 1.0-alpha4
projects[inline_conditions][subdir] = "contrib"
projects[field_extractor][version] = 1.3
projects[field_extractor][subdir] = "contrib"
projects[service_links][version] = 2.x-dev
projects[service_links][subdir] = "contrib"
projects[service_links][download][type] = "git"
projects[service_links][download][revision] = "6f63b84"
projects[service_links]download][branch] = 7.x-2.x
projects[advanced_help][version] = 1.1
projects[advanced_help][subdir] = "contrib"
projects[mailsystem][version] = 2.34
projects[mailsystem][subdir] = "contrib"
projects[mimemail][version] = 1.0-beta3
projects[mimemail][subdir] = "contrib"
projects[token][version] = 1.5
projects[token][subdir] = "contrib"
projects[token][patch][] = "http://drupal.org/files/token-token_asort_tokens-1712336_0.patch"
projects[eva][version] = 1.2
projects[eva][subdir] = "contrib"
projects[message][version] = 1.9
projects[message][subdir] = "contrib"
projects[message_notify][version] = 2.5
projects[message_notify][subdir] = "contrib"
projects[migrate][version] = 2.5
projects[migrate][subdir] = "contrib"
projects[migrate_extras][version] = 2.5
projects[migrate_extras][subdir] = "contrib"
projects[migrate_extras][patch][] = "http://drupal.org/files/migrate_extras-fix-destid2-array-1951904-4.patch"
projects[date][version] = 2.8
projects[date][subdir] = "contrib"
projects[yottaa][version] = 1.2
projects[yottaa][subdir] = "contrib"
projects[menu_attributes][version] = 1.0-rc2
projects[menu_attributes][subdir] = "contrib"
projects[fences][version] = "1.0"
projects[fences][subdir] = "contrib"
projects[fences][patch][] = "http://drupal.org/files/undefined-index-1561244-7.patch"
projects[fences][patch][] = "http://drupal.org/files/fences-default_markup_option-1857230-2.patch"
projects[title][version] = "1.0-alpha7"
projects[title][subdir] = "contrib"
projects[title][patch][] = "http://drupal.org/files/title-translation_overwrite-1269076-35.patch"
projects[kameleoon][subdir] = "contrib"
projects[kameleoon][version] = "1.1"

; Search related modules.
projects[search_api][version] = 1.12
projects[search_api][subdir] = "contrib"
projects[search_api_db][version] = 1.3
projects[search_api_db][subdir] = "contrib"
projects[search_api_ranges][version] = 1.5
projects[search_api_ranges][subdir] = "contrib"
projects[search_api_ranges][patch][] = "https://drupal.org/files/issues/search_api_ranges-rewrite-data-alteration-callback-2001846-4.patch"
projects[facetapi][version] = 1.5
projects[facetapi][subdir] = "contrib"
projects[facetapi][patch][] = "https://drupal.org/files/1616518-term_remove_link-24.patch"
projects[search_api_sorts][version] = 1.5
projects[search_api_sorts][subdir] = "contrib"

; UI improvement modules.
projects[module_filter][version] = 1.8
projects[module_filter][subdir] = "contrib"
projects[image_delta_formatter][version] = 1.0-rc1
projects[image_delta_formatter][subdir] = "contrib"
projects[link][version] = 1.2
projects[link][subdir] = "contrib"
projects[pathauto][version] = 1.2
projects[pathauto][subdir] = "contrib"
projects[cloud_zoom][version] = 1.x-dev
projects[cloud_zoom][subdir] = "contrib"
projects[cloud_zoom][download][type] = git
projects[cloud_zoom][download][revision] = 3cff30f
projects[cloud_zoom][download][branch] = 7.x-1.x
projects[special_menu_items][version] = 2.0
projects[special_menu_items][subdir] = "contrib"
projects[chosen][version] = 2.x-dev
projects[chosen][subdir] = "contrib"
projects[chosen][download][type] = git
projects[chosen][download][revision] = e7a0d22
projects[chosen][download][branch] = 7.x-2.x

; Internationalization
projects[variable][version] = 2.5
projects[variable][subdir] = "contrib"
projects[i18n][version] = "1.11"
projects[i18n][subdir] = "contrib"
projects[lingotek][version] = 5.09
projects[lingotek][subdir] = "contrib"

; Base theme.
projects[omega][version] = 3.1
projects[omega][patch][] = "http://drupal.org/files/relative-src-15.patch"
projects[omega_kickstart][version] = 3.4
projects[shiny][version] = 1.6

; Libraries.
libraries[colorbox][type] = "libraries"
libraries[colorbox][download][type] = "file"
libraries[colorbox][download][url] = "https://github.com/jackmoore/colorbox/archive/master.zip"
libraries[jquery.bxslider][type] = "libraries"
libraries[jquery.bxslider][download][type] = "file"
libraries[jquery.bxslider][download][url] = "https://github.com/stevenwanderski/bxslider-4/archive/master.zip"
libraries[jquery_ui_spinner][type] = "libraries"
libraries[jquery_ui_spinner][download][type] = "file"
libraries[jquery_ui_spinner][download][url] = "https://github.com/btburnett3/jquery.ui.spinner/archive/master.zip"
libraries[cloud-zoom][type] = "libraries"
libraries[cloud-zoom][download][type] = "file"
libraries[cloud-zoom][download][url] = "http://www.professorcloud.com/downloads/cloud-zoom.1.0.3.zip"
libraries[jquery_expander][type] = "libraries"
libraries[jquery_expander][download][type] = "file"
libraries[jquery_expander][download][url] = "https://github.com/kswedberg/jquery-expander/archive/master.zip"
libraries[selectnav.js][type] = "libraries"
libraries[selectnav.js][download][type] = "file"
libraries[selectnav.js][download][url] = "https://github.com/lukaszfiszer/selectnav.js/archive/master.zip"
libraries[ie7-js][type] = "libraries"
libraries[ie7-js][download][type] = "file"
libraries[ie7-js][download][url] = "https://ie7-js.googlecode.com/files/ie7-2.1%28beta4%29.zip"
libraries[chosen][type] = "libraries"
libraries[chosen][download][type] = "get"
libraries[chosen][download][url] = "https://github.com/harvesthq/chosen/releases/download/v1.1.0/chosen_v1.1.0.zip"
libraries[chosen][directory_name] = "chosen"
libraries[chosen][destination] = "libraries"