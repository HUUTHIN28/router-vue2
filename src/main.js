import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";

function registerBaseComponents() {
  // Import tất cả các file trong thư mục base-components
  const requireComponent = require.context(
    "./components",
    false,
    /Base[\w-]+\.vue$/
  );

  // Lặp qua từng file và đăng ký các component
  requireComponent.keys().forEach((fileName) => {
    const componentConfig = requireComponent(fileName);
    const componentName = fileName
      .split("/")
      .pop()
      .replace(/\.\w+$/, "");

    Vue.component(componentName, componentConfig.default || componentConfig);
  });
}

// Gọi hàm để đăng ký các thành phần cơ bản tự động
registerBaseComponents();

Vue.mixin({
  data: function () {
    return {
      namethin: "hihi",
    };
  },
  methods: {
    foo: function () {
      console.log("foo");
    },
    hello: function () {
      this.namethin = "hello";
    },
  },
});
Vue.directive(
  "focus",
  {
    // When the bound element is inserted into the DOM...
    inserted: function (el) {
      // Focus the element
      el.focus();
    },
  },
  "highlight",
  {
    bind(el) {
      // Logic to apply when the directive is bound to an element
      el.style.backgroundColor = "red";
    },
    update(el) {
      // Logic to apply when the binding value changes
      el.style.backgroundColor = "yellow";
    },
    unbind(el) {
      // Logic to apply when the directive is unbound from an element
      el.style.backgroundColor = null;
    },
  }
);
Vue.config.productionTip = false;

Vue.use(createPinia());

new Vue({
  router,

  template: "<router-view/>",
  render: (h) => h(App),
}).$mount("#app");
