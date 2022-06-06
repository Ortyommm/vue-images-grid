<script setup lang="ts">
import ImagesGrid from "./components/imagesGrid/ImagesGrid.vue";
import { ref } from "vue";
let images = ref([
  {
    id: 0,
    src: "https://images.unsplash.com/photo-1654445875514-90eb0d03a9f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1654418716398-26a3427b27ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1654284152873-c3623e17bc67?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1654428232958-e0ae189dae2f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1654429525137-249ef52f4dff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1654419841693-1d58df5b7ed7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1509100509853-e6b19c25409e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1614878488982-32dbaad50fee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
]);

function onImageClick(data: any) {
  console.log(data);
}
</script>

<template>
  <ImagesGrid
    :cols="3"
    :images="images"
    :image-style="{ width: '300px', marginBottom: '10px' }"
    col-spaces="20px"
    object-fit="cover"
    @onImageClick="onImageClick"
  >
    <template v-slot:image="{ image }">
      <div style="margin-bottom: 10px">
        <img :src="image.src" style="width: 100px" />
        <div><button>Like</button></div>
      </div>
    </template>
  </ImagesGrid>
  <ImagesGrid
    :cols="3"
    :images="images"
    :image-style="{ width: '300px', marginBottom: '10px' }"
    col-spaces="20px"
    object-fit="cover"
    @onImageClick="onImageClick"
  />
<!--  <ImagesGrid-->
<!--    :cols="[-->
<!--      [-->
<!--        {-->
<!--          id: 7,-->
<!--          src: 'https://images.unsplash.com/photo-1614878488982-32dbaad50fee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',-->
<!--        },-->
<!--      ],-->
<!--      [-->
<!--        {-->
<!--          id: 6,-->
<!--          src: 'https://images.unsplash.com/photo-1509100509853-e6b19c25409e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',-->
<!--        },-->
<!--      ],-->
<!--      [-->
<!--        {-->
<!--          id: 6,-->
<!--          src: 'https://images.unsplash.com/photo-1509100509853-e6b19c25409e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',-->
<!--        },-->
<!--      ],-->
<!--      [-->
<!--        {-->
<!--          id: 6,-->
<!--          src: 'https://images.unsplash.com/photo-1509100509853-e6b19c25409e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',-->
<!--        },-->
<!--      ],-->
<!--    ]"-->
<!--    :image-style="{ width: '300px', marginBottom: '10px' }"-->
<!--  />-->
</template>

<style></style>
