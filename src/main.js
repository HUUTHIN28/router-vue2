import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import upperFirst from "lodash/upperFirst";
import camelCase from "lodash/camelCase";

const requireComponent = require.context(
  // The relative path of the components folder
  "./assets/icon",
  // Whether or not to look in subfolders
  false,
  // The regular expression used to match base component filenames
  /[A-Z]\w+\.(vue|js)$/
);

requireComponent.keys().forEach((fileName) => {
  // Get component config
  const componentConfig = requireComponent(fileName);

  // Get PascalCase name of component
  const componentName = upperFirst(
    camelCase(
      // Gets the file name regardless of folder depth
      fileName
        .split("/")
        .pop()
        .replace(/\.\w+$/, "")
    )
  );

  // Register component globally
  Vue.component(
    componentName,
    // Look for the component options on `.default`, which will
    // exist if the component was exported with `export default`,
    // otherwise fall back to module's root.
    componentConfig.default || componentConfig
  );
});

// Vue.mixin({
//   data: function () {
//     return {
//       namethin: "hihi",
//     };
//   },
//   methods: {
//     foo: function () {
//       console.log("foo");
//     },
//     hello: function () {
//       this.namethin = "hello";
//     },
//   },
// });
// Vue.directive(
//   "focus",
//   {
//     // When the bound element is inserted into the DOM...
//     inserted: function (el) {
//       // Focus the element
//       el.focus();
//     },
//   },
//   "highlight",
//   {
//     bind(el) {
//       // Logic to apply when the directive is bound to an element
//       el.style.backgroundColor = "red";
//     },
//     update(el) {
//       // Logic to apply when the binding value changes
//       el.style.backgroundColor = "yellow";
//     },
//     unbind(el) {
//       // Logic to apply when the directive is unbound from an element
//       el.style.backgroundColor = null;
//     },
//   }
// );
Vue.config.productionTip = false;

Vue.use(createPinia());

new Vue({
  router,

  template: "<router-view/>",
  render: (h) => h(App),
}).$mount("#app");
