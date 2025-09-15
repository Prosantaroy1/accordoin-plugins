<?php
/**
 * Plugin Name: Parties Purpose
 * Description: Short description of the plugin
 * Version: 1.0.0
 * Author: bPlugins
 * Author URI: https://bplugins.com
 * License: GPLv3
 * License URI: https://www.gnu.org/licenses/gpl-3.0.txt
 * Text Domain: pratics-purpuse
 */

// ABS PATH
if (!defined('ABSPATH')) {
	exit;
}

// Constant
define('PPT_VERSION', isset($_SERVER['HTTP_HOST']) && 'localhost' === $_SERVER['HTTP_HOST'] ? time() : '1.0.0');
define('PPT_DIR_URL', plugin_dir_url(__FILE__)); //domain url path
define('PPT_DIR_PATH', plugin_dir_path(__FILE__)); //system folder path (exm: c:/window/app)

if (!class_exists('PPTPlugin')) {
	class PPTPlugin
	{
		function __construct()
		{
			add_action('init', [$this, 'onInit']);
			add_shortcode('easy_testimonial', [$this, 'testimonial_shortcode']);
			add_filter('manage_easy_testimonial_posts_columns', [$this, 'et_setCustomColumn_edit']);
			add_action('manage_easy_testimonial_posts_custom_column', [$this, 'et_manageCustomColumn'], 10, 2);
			add_action('admin_enqueue_scripts', [$this, 'psb_admin_enqueue_script']);
			add_action('admin_head-edit-tags.php', [$this, 'et_edit_taxonomy']);
			add_action('Setting_pre_add_form', [$this, 'et_edit_flied']);


			//tools
			add_action('admin_menu', [$this, 'add_tools_menu']);
			add_action('admin_enqueue_scripts', [$this, 'customTools_admin_enqueue_script']);
			add_action('wp_ajax_ppt_customTool_save', [$this, 'ppt_customTool_save_data']);
			add_action('wp_ajax_ppt_get_customTool_save', [$this, 'ppt_get_customTool_save_handle']);

			//testimonial submenu
			add_action('admin_menu', [$this, 'ppt_add_easy_testimonial_submenu']);
			add_action('admin_enqueue_scripts', [$this, 'ppt_enqueue_easy_testimonial_react']);
			//add_action('wp_ajax_easy_testimonial_save', [$this, 'ppt_easy_testimonial_save']);

			// redirect active plugin dashboard
			add_action('admin_init', [$this, 'ppt_plugin_redirect_after_activation']);
			register_activation_hook(__FILE__, [$this, 'ppt_plugin_activate_redirect']);
		}

		function onInit()
		{
			register_block_type(__DIR__ . '/build');

			register_post_type('easy_testimonial', [
				'label' => 'easy testimonial',
				'description' => 'this is easy testimonial and seo friendly card',
				'labels' => [
					'name' => __('easy testimonial', 'TEXTDOMAINHERE'),
					'singular_name' => __('testimonial', 'TEXTDOMAINHERE'),
					'add_new' => __('Add New', 'TEXTDOMAINHERE'),
					'add_new_item' => __('Add New testimonial', 'TEXTDOMAINHERE'),
					'edit_item' => __('Edit testimonial', 'TEXTDOMAINHERE'),
					'new_item' => __('New testimonial', 'TEXTDOMAINHERE'),
					'view_item' => __('View testimonial', 'TEXTDOMAINHERE'),
					'view_items' => __('View testimonial', 'TEXTDOMAINHERE'),
					'search_items' => __('Search testimonial', 'TEXTDOMAINHERE'),
					'not_found' => __('No testimonial found.', 'TEXTDOMAINHERE'),
					'not_found_in_trash' => __('No testimonial found in Trash.', 'TEXTDOMAINHERE'),
					'parent_item_colon' => __('Parent testimonial:', 'TEXTDOMAINHERE'),
					'all_items' => __('All testimonial', 'TEXTDOMAINHERE'),
					'archives' => __('testimonial Archives', 'TEXTDOMAINHERE'),
					'attributes' => __('testimonial Attributes', 'TEXTDOMAINHERE'),
					'insert_into_item' => __('Insert into testimonial', 'TEXTDOMAINHERE'),
					'uploaded_to_this_item' => __('Uploaded to this testimonial', 'TEXTDOMAINHERE'),
					'featured_image' => __('Featured Image', 'TEXTDOMAINHERE'),
					'set_featured_image' => __('Set featured image', 'TEXTDOMAINHERE'),
					'remove_featured_image' => __('Remove featured image', 'TEXTDOMAINHERE'),
					'use_featured_image' => __('Use as featured image', 'TEXTDOMAINHERE'),
					'menu_name' => __('easy testimonial', 'TEXTDOMAINHERE'),
					'filter_items_list' => __('Filter testimonial list', 'TEXTDOMAINHERE'),
					'filter_by_date' => __('Filter by date', 'TEXTDOMAINHERE'),
					'items_list_navigation' => __('testimonial list navigation', 'TEXTDOMAINHERE'),
					'items_list' => __('testimonial list', 'TEXTDOMAINHERE'),
					'item_published' => __('testimonial published.', 'TEXTDOMAINHERE'),
					'item_published_privately' => __('testimonial published privately.', 'TEXTDOMAINHERE'),
					'item_reverted_to_draft' => __('testimonial reverted to draft.', 'TEXTDOMAINHERE'),
					'item_scheduled' => __('testimonial scheduled.', 'TEXTDOMAINHERE'),
					'item_updated' => __('testimonial updated.', 'TEXTDOMAINHERE'),
					'item_link' => __('testimonial Link', 'TEXTDOMAINHERE'),
					'item_link_description' => __('A link to an testimonial.', 'TEXTDOMAINHERE'),
				],
				'public' => true, //frontend or backend show
				"publicly_queryable" => false, //view link hidden
				'show_ui' => true,  //admin show
				'show_in_menu' => true,
				'show_in_rest' => true,  //REST support
				'menu_position' => 79, //position type
				'menu_icon' => 'dashicons-megaphone', //icon
				'supports' => array('title', 'editor', 'revisions'),
				'template' => [['b-blocks/pratics-purpuse']],  //open templated
				'template_lock' => 'all', //lock
				'show_in_nav_menus' => true,
				'show_in_admin_bar' => true,

			]);
			register_taxonomy('Setting', 'easy_testimonial', [
				'label' => 'Setting',
				'public' => true,
				'show_ui' => true,
				'show_in_menu' => true
			]);
			register_taxonomy('Help', 'easy_testimonial', [
				'label' => 'Help',
				'public' => true,
				'show_ui' => true,
				'show_in_menu' => true
			]);


		}

		// edit taxonomy
		function et_edit_taxonomy()
		{
			$screen = get_current_screen();
			if ($screen->taxonomy === 'Setting') {
				echo '<div class="notice notice-info is-dismissible">
                <p><strong>এইটা Setting taxonomy এর জন্য কাস্টম মেসেজ।</strong></p>
              </div>';
			}

			if ($screen->taxonomy === 'Help') {
				echo '<div class="notice notice-success is-dismissible">
                <p><strong>এইটা Help taxonomy এর জন্য কাস্টম মেসেজ।</strong></p>
              </div>';
			}
		}
		function et_edit_flied()
		{
			$screen = get_current_screen();

			if ($screen->taxonomy === 'Setting') {
				echo '<div class="custom-setting-wrapper">
            <h1 style="margin-bottom:20px; color:#2271b1;">⚙️ Custom Setting Panel</h1>

            <div class="custom-setting-cards">
                <!-- Card 1 -->
                <div class="card">
                    <h2>📸 Image Card</h2>
                    <p>এখানে একটা ইমেজ শো হচ্ছে।</p>
                    <img src="https://via.placeholder.com/300x180" alt="Demo" style="max-width:100%; border-radius:10px;">
                </div>

                <!-- Card 2 -->
                <div class="card">
                    <h2>🎬 Video Card</h2>
                    <p>এখানে একটা ভিডিও শো হচ্ছে।</p>
                    <video width="100%" controls>
                        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">
                        আপনার ব্রাউজার ভিডিও সাপোর্ট করে না।
                    </video>
                </div>
                <!-- Card 2 -->
                <div class="card">
                    <h2>🎬 Video Card</h2>
                    <p>এখানে একটা ভিডিও শো হচ্ছে।</p>
                    <video width="100%" controls>
                        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">
                        আপনার ব্রাউজার ভিডিও সাপোর্ট করে না।
                    </video>
                </div>
                <!-- Card 2 -->
                <div class="card">
                    <h2>🎬 Video Card</h2>
                    <p>এখানে একটা ভিডিও শো হচ্ছে।</p>
                    <video width="100%" controls>
                        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">
                        আপনার ব্রাউজার ভিডিও সাপোর্ট করে না।
                    </video>
                </div>
                <!-- Card 2 -->
                <div class="card">
                    <h2>🎬 Video Card</h2>
                    <p>এখানে একটা ভিডিও শো হচ্ছে।</p>
                    <video width="100%" controls>
                        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">
                        আপনার ব্রাউজার ভিডিও সাপোর্ট করে না।
                    </video>
                </div>
                <!-- Card 2 -->
                <div class="card">
                    <h2>🎬 Video Card</h2>
                    <p>এখানে একটা ভিডিও শো হচ্ছে।</p>
                    <video width="100%" controls>
                        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">
                        আপনার ব্রাউজার ভিডিও সাপোর্ট করে না।
                    </video>
                </div>
                <!-- Card 2 -->
                <div class="card">
                    <h2>🎬 Video Card</h2>
                    <p>এখানে একটা ভিডিও শো হচ্ছে।</p>
                    <video width="100%" controls>
                        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">
                        আপনার ব্রাউজার ভিডিও সাপোর্ট করে না।
                    </video>
                </div>

                <!-- Card 3 -->
                <div class="card">
                    <h2>📝 Info Card</h2>
                    <p>এখানে কাস্টম টেক্সট, বাটন বা লিংক রাখতে পারবেন।</p>
                    <a href="https://example.com" target="_blank" class="button button-primary">আরও দেখুন</a>
                </div>
            </div>
        </div>

        <style>
            /* ডিফল্ট টার্ম টেবিল/ফর্ম হাইড */
            .form-wrap, #posts-filter { display: none; }
			#col-left{
			width: 100%;
			height: 100vh;
			}
			#col-right{
			width: 0%;
			}

            .custom-setting-wrapper {
                background:#fff;
                padding:20px;
                margin-top:20px;
                border:1px solid #ddd;
                border-radius:8px;
            }

            .custom-setting-cards {
                display: grid;
                grid-template-columns: repeat(5, 1fr);
                gap: 20px;
                margin-top:20px;
            }

            .custom-setting-cards .card {
                background:#f9f9f9;
                padding:15px;
                border:1px solid #ddd;
                border-radius:12px;
                box-shadow: 0 2px 5px rgba(0,0,0,0.05);
                text-align:center;
            }

            .custom-setting-cards .card h2 {
                margin-top:0;
                font-size:18px;
                color:#2271b1;
            }
        </style>';
			}
		}
		// testimonial submenu
		function ppt_add_easy_testimonial_submenu()
		{
			add_submenu_page(
				'edit.php?post_type=easy_testimonial',
				'Custom Settings',
				'Settings',
				'manage_options',
				'easy_testimonial_settings',
				[$this, 'ppt_easy_testimonial_settings_page']
			);
		}
		function ppt_easy_testimonial_settings_page()
		{

			echo '<div id="easy-testimonial-app"/>';

		}
		function ppt_enqueue_easy_testimonial_react($hook)
		{
			if ($hook !== 'easy_testimonial_page_easy_testimonial_settings')
				return;

			wp_enqueue_script(
				'easy-testimonial-js',
				PPT_DIR_URL . './build/easy_testimonial.js',
				['react', 'react-dom'],
				PPT_VERSION,
				true
			);
			wp_enqueue_style(
				'easy-testimonial-css',
				PPT_DIR_URL . "./build/easy_testimonial.css",
				PPT_VERSION
			);

			// wp_localize_script('easy-testimonial-react', 'easy_testimonial_ajax', [
			// 	'ajax_url' => admin_url('admin-ajax.php'),
			// 	'nonce' => wp_create_nonce('easy_testimonial_nonce')
			// ]);
		}
		// function ppt_easy_testimonial_save()
		// {
		// 	check_ajax_referer('easy_testimonial_nonce', 'nonce');

		// 	$title = sanitize_text_field($_POST['title'] ?? '');
		// 	if (!$title)
		// 		wp_send_json_error('Title is empty!');

		// 	$saved = get_option('easy_testimonial_settings', []);
		// 	$saved[] = ['title' => $title, 'time' => current_time('mysql')];

		// 	update_option('easy_testimonial_settings', $saved);

		// 	wp_send_json_success(['saved_data' => $saved]);
		// }


		//--------tools submenu add first kaj-----



		 function ppt_plugin_activate_redirect() {
           // Option flag সেট করুন
             add_option('ppt_plugin_redirect_after_activation', true);
        }
         
 
		function ppt_plugin_redirect_after_activation()
		{
			if (is_admin() && get_option('ppt_plugin_redirect_after_activation')) {

				delete_option('ppt_plugin_redirect_after_activation');

				// Easy Testimonial settings page URL
				$redirect_url = admin_url('edit.php?post_type=easy_testimonial');

				// Redirect করুন
				wp_safe_redirect($redirect_url);
				exit;
			}
		}

		//submenu tools
		function add_tools_menu()
		{
			add_submenu_page(
				'tools.php',
				'Custom Tool Page',
				'Custom Tool',
				'manage_options',
				'custom-tool-slug',
				[$this, 'ppt_custom_tool_page']
			);
		}
		//second kaj
		function ppt_custom_tool_page()
		{
			echo '<div id="ppt-custom-tool"/>';
		}

		function customTools_admin_enqueue_script($hook)
		{
			//cheek -> echo $hook; 
			if ($hook != 'tools_page_custom-tool-slug')
				return;

			wp_enqueue_script(
				'ppt-tools-js',
				PPT_DIR_URL . './build/myform.js',
				['react', 'react-dom'],
				PPT_VERSION,
				true
			);
			wp_enqueue_style(
				'ppt-tools-css',
				PPT_DIR_URL . "./build/myform.css",
				PPT_VERSION
			);

			wp_localize_script('ppt-tools-js', 'ppt_tool_ajax', [
				'ajax_url' => admin_url('admin-ajax.php'),
				'nonce' => wp_create_nonce('ppt_tool_nonce')
			]);
		}
		function ppt_customTool_save_data()
		{
			if (!check_ajax_referer('ppt_tool_nonce', 'nonce', false)) {
				wp_send_json_error('Invalid nonce');
			}

			$name = sanitize_text_field($_POST['name']);
			$role = sanitize_text_field($_POST['role']);

			$image = $_FILES['image'];
			$upload = wp_handle_upload($image, array('test_form' => false));

			if ($upload && !isset($upload['error'])) {
				$tool_data = array(
					'name' => $name,
					'role' => $role,
					'image_url' => $upload['url']
				);

				update_option('ppt_tool_data', $tool_data);
				wp_send_json_success('saved successfully');
			} else {
				wp_send_json_error('Failed to upload image');
			}
		}

		function ppt_get_customTool_save_handle()
		{
			check_ajax_referer('ppt_tool_nonce', 'nonce');

			$tool_data = get_option('ppt_tool_data', []);
			wp_send_json_success($tool_data);
		}







		//custome column add CPT
		function et_setCustomColumn_edit($column)
		{
			unset($column['date']);
			$column['shortcode'] = 'ShortCode';
			$column['date'] = 'Date';
			$column['publisher'] = 'Publisher';
			return $column;
		}

		//column data CPT
		function et_manageCustomColumn($column_name, $post_id)
		{
			if ($column_name == 'shortcode') {
				echo '<div class="bPlAdminShortcode" id="bPlAdminShortcode-' . esc_attr($post_id) . '">
						<input value="[easy_testimonial id=' . esc_attr($post_id) . ']" onclick="copyBPlAdminShortcode(\'' . esc_attr($post_id) . '\')" readonly>
						<span class="tooltip">Copy To Clipboard</span>
					  </div>';
			}
			if ($column_name == 'publisher') {
				echo 'Prosanta Roy';
			}
		}


		// Shortcode
		function testimonial_shortcode($atts)
		{
			$post_id = $atts['id'];
			$post = get_post($post_id);

			if (!$post) {
				return '';
			}

			if (post_password_required($post)) {
				return get_the_password_form($post);
			}

			switch ($post->post_status) {
				case 'publish':
					return $this->displayContent($post);

				case 'private':
					if (current_user_can('read_private_posts')) {
						return $this->displayContent($post);
					}
					return '';

				case 'draft':
				case 'pending':
				case 'future':
					if (current_user_can('edit_post', $post_id)) {
						return $this->displayContent($post);
					}
					return '';

				default:
					return '';
			}
		}
		function displayContent($post)
		{
			$blocks = parse_blocks($post->post_content);
			return render_block($blocks[0]);
			// $blocks = parse_blocks($post->post_content);
			// $output = '';
			// foreach ($blocks as $block) {
			// 	$output .= render_block($block);
			// }
			// return $output;
		}


		//data enqueueshortcode
		function psb_admin_enqueue_script()
		{
			global $typenow;

			if ('easy_testimonial' === $typenow) {
				wp_enqueue_script('shortcode-js', PPT_DIR_URL . './build/shortcode.js', [], PPT_VERSION, true);
				wp_enqueue_style('shortcode-css', PPT_DIR_URL . './build/shortcode.css', PPT_VERSION);

			}
		}










	}
	new PPTPlugin();
}

