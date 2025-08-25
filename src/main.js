// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import "~/assets/scss/custom.scss";

import DefaultLayout from "~/layouts/Default.vue";

export default function(Vue, { router, head, isClient }) {
  Vue.use(BootstrapVue);
  Vue.use(BootstrapVueIcons);

  head.meta.push({
    name: "keywords",
    content: "gasko, nippon pillar indonesia, pillar seal solution indonesia, tanken seal indonesia, createc indonesia",
  });

  head.link.push({
    rel: "icon",
    type: "image/x-icon",
    href: "/favicon.png"
  });

  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);
}
