<template>
  <div class="containe-pagin">
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
  
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
// import { inject, ref, defineEmits, watch } from "vue";

// const userPage = ref([]);
// const { page } = inject("page");
// const emit = defineEmits(["pageEvent"]);
// const { resultData } = inject("page");

// const isCurrent = (nPage) => (nPage == page.value ? true : false);

// function pageEvent(numberPage) {
//   emit("pageEvent", numberPage);
// }

// watch(
//   () => resultData.value,
//   (val) => {
//     const newUsers = [...Array(resultData.value)].map((user, index) => ({
//       numberPage: index + 1,
//       id: `${index + 1}`,
//     }));
//     userPage.value = newUsers;
//   },
//   { inmediate: true }
// );

// function back() {
//   const newNumberPage = Number(page.value);
//   emit("pageEvent", newNumberPage - 1);
// }

// function forward() {
//   const newNumberPage = Number(page.value);
//   emit("pageEvent", newNumberPage + 1);
// }
</script>
