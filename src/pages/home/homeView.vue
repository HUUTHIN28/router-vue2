<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <div>xin chao home{{ name }}</div>
    <span v-if="seen">Now you see me</span>
    <!-- <p>Using v-html directive: <span v-html="rawHtml"></span></p> -->
    <div id="app-4">
      <ol>
        <li v-for="(todo, index) in todos" :key="index">
          <HomeItem :text="todo.text" />
        </li>
      </ol>
    </div>
    <li v-for="(item, index) in items" :key="index">
      {{ parentMessage }} - {{ index }} - {{ item.message }}
    </li>
    <li v-for="(n, index) in evenNumbers" :key="index">{{ n }}</li>
    <button v-on:click="reverseMessage">Reverse Message</button>
    <button v-on:click="hello">Create</button>
    <div class="demo-alert-box">
      <SlotView> hehe </SlotView>
    </div>
    <button @click="currentTabComponent = 'Tab1'">Tab 1</button>
    <button @click="currentTabComponent = 'Tab2'">Tab 2</button>
    <component v-bind:is="currentTabComponent"> </component>

    <base-layout>
      <template v-slot:header>
        <h1>Here might be a page title</h1>
      </template>

      <p>A paragraph for the main content.</p>
      <p>And another one.</p>

      <template v-slot:footer>
        <p>Here's some contact info</p>
      </template>
    </base-layout>
    <input type="text" v-focus />
    <div v-for="todo of storeTodo.todos" :key="todo.id" class="wrapper">
      thin
    </div>
    <div>{{ storeTodo.totalTodos }}</div>
  </div>
</template>
<script>
import HomeItem from "./homeItem.vue";
import { useTodoStore } from "../../store/todo";
var mixin = {
  methods: {
    foo: function () {
      console.log("foo");
    },
    conflicting: function () {
      console.log("from mixin");
    },
  },
};

export default {
  mixins: [mixin],
  data: function () {
    return {
      name: " huu thinthin",
      seen: false,
      message: "You loaded this page odfsn " + new Date().toLocaleString(),
      todos: [
        { text: "Learn JavaScript" },
        { text: "Learn Vue" },
        { text: "Build something awesome" },
      ],
      items: [{ message: "Foo" }, { message: "Bar" }],
      numbers: [1, 2, 3, 4, 5],
      currentTabComponent: "Tab1",
    };
  },

  computed: {
    evenNumbers: function () {
      return this.numbers.filter((number) => {
        return number % 2 === 0;
      });
    },
  },
  watch: {
    name: function () {
      this.name = "message mới";
    },
    addNumber: function () {
      this.numbers = this.numbers.push(4);
    },
  },

  set: {
    function() {
      this.name = "set";
    },
  },
  components: { HomeItem },
  setup() {
    const storeTodo = useTodoStore();
    return { storeTodo };
  },
  methods: {
    reverseMessage: function () {
      console.log("storetodo", this.storetodo);
      this.name = "this.name";
    },
  },
};
</script>
