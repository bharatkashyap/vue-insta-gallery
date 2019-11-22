import vueInstaGallery from './src/component/vue-insta-gallery.vue';

function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component("vueInstaGallery", vueInstaGallery);
}

const plugin = {
  install
};

let GlobalVue = null;
if (typeof window !== "undefined") {
  GlobalVue = window.Vue;
} else if (typeof global !== "undefined") {
  GlobalVue = global.vue;
}

if (GlobalVue) {
  GlobalVue.use(plugin);
}

vueInstaGallery.install = install;

export default vueInstaGallery;