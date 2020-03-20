import Vue from "vue";
import CKEditor from "@ckeditor/ckeditor5-vue";
import App from "./App.vue";

// wysiwyg
Vue.use(CKEditor);

// store
import { store } from "./store/store.js";

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
