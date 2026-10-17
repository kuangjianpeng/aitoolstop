<?php
/**
 * 精选AI工具主题功能文件
 */

if (!defined('ABSPATH')) {
    exit;
}

function aitoolstop_enqueue_assets() {
    wp_enqueue_style(
        'aitoolstop-style',
        get_template_directory_uri() . '/style.css',
        array(),
        wp_get_theme()->get('Version')
    );

    wp_enqueue_script(
        'aitoolstop-lucide',
        'https://cdn.jsdelivr.net/npm/lucide@0.468.0/dist/umd/lucide.min.js',
        array(),
        '0.468.0',
        true
    );

    wp_enqueue_script(
        'aitoolstop-theme',
        get_template_directory_uri() . '/assets/theme.js',
        array('aitoolstop-lucide'),
        wp_get_theme()->get('Version'),
        true
    );

    wp_localize_script(
        'aitoolstop-theme',
        'aitoolstopData',
        array(
            'themeUri' => get_template_directory_uri(),
            'fallbackFavicon' => get_template_directory_uri() . '/assets/favicon-fallback.svg'
        )
    );
}
add_action('wp_enqueue_scripts', 'aitoolstop_enqueue_assets');

function aitoolstop_setup() {
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('html5', array('search-form', 'comment-form', 'comment-list', 'gallery', 'caption'));
}
add_action('after_setup_theme', 'aitoolstop_setup');
