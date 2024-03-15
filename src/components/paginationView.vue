<template>
  <div id="app" class="container_pagination">
    <ul class="pagination-container">
      <li class="pagination__btn">
        <div
          class="material-icons"
          v-if="page === 0"
          :style="{ color: 'gray' }"
        >
          <BaseLeftView />
        </div>
        <div class="material-icons" v-else v-on:click="change(page - 1)">
          <BaseLeftView />
        </div>
      </li>
      <div v-for="index in 5" :key="index">
        <li
          class="pagination__number"
          v-if="index !== page + 1"
          v-on:click="change(index - 1)"
        >
          {{ index }}
        </li>
        <li class="pagination__number active" v-else>
          {{ index }}
        </li>
      </div>

      <li class="pagination__btn">
        <span
          class="material-icons"
          :style="{ color: 'gray' }"
          v-if="listPage === page + 1"
          ><rightView
        /></span>
        <span class="material-icons" v-else v-on:click="change(page - 1)"
          ><rightView
        /></span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    page: Number,
    total: Number,
    listPage: Number,
  },
  name: "pagination-view",
  methods: {
    change(page) {
      console.log("page", page);
      this.$emit("change", page);
    },
  },
};
</script>

<style>
.container_pagination {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: #2d4848;
  font-size: 12px;
}
.material-icons {
  cursor: pointer;
}

ul {
  list-style-type: none;
}

.items-list {
  max-width: 90vw;
  margin: 2rem;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 3rem;
  justify-content: flex-end;
  align-content: center;
}

.item {
  width: 10rem;
  height: 10rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: #2d4848;
  cursor: pointer;
}

.item span {
  background: #ffffff;
  box-shadow: 0 0.8rem 2rem rgba(90, 97, 129, 0.05);
  border-radius: 0.6rem;
  padding: 2rem;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.item:hover span {
  transform: scale(1.2);
  color: #23adad;
}

.item p {
  font-size: 1rem;
  margin-top: 1rem;
  color: #23adade1;
}

.pagination-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2.8rem; /* Giảm chiều cao của phân trang xuống còn 30% */
  margin: 1.5rem; /* Giảm kích thước lề của phân trang */
  border-radius: 0.6rem;
  background: #ffffff;
  box-shadow: 0 0.8rem 2rem rgba(90, 97, 129, 0.05);
}

.pagination__number,
.pagination__btn,
.pagination__dots {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.8rem;
  font-size: 1rem;
  cursor: pointer;
}

.pagination__dots {
  width: 2.6rem;
  height: 2.6rem;
  color: #23adade1;
  cursor: pointer;
}

.pagination__number {
  width: 2.6rem;
  height: 2.6rem;
  border-radius: 0.4rem;
}

.pagination__number:hover {
  color: #23adad;
}

.pagination__number.active {
  color: #ffffff;
  background: #23adad;
  font-weight: 600;
  border: 1px solid #23adad;
}

.pagination__btn {
  color: #23adade1;
}

.pagination__btn.active {
  color: #2d4848;
}

.pagination__btn.active:hover {
  color: #23adad;
}
</style>
