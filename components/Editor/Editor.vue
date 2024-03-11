<template>
  <div
    v-for="post in postsStore.posts"
    class="flex flex-col px-4 md:items-center mb-4"
  >
    <fieldset class="flex flex-col mb-4 md:w-1/2">
      <legend class="font-black text-2xl">Variant {{ post.key }}</legend>
      <label class="font-bold mb-2 mt-3" for="titleA">Title:</label>
      <UInput class="p-2" id="titleA" v-model="post.title" type="text" />

      <label class="font-bold mb-2 mt-3" for="contentA">Content:</label>
      <UTextarea
        class="p-2 h-34"
        id="contentA"
        v-model="post.content"
      ></UTextarea>
    </fieldset>
  </div>

  <UButton class="flex justify-center self-center md:w-1/3" @click="updatePosts"
    >Save</UButton
  >
</template>

<script setup lang="ts">
import { usePosts } from "~/store/usePosts";

const postsStore = usePosts();

onMounted(() => {
  console.log(postsStore.posts);

  const storedPosts = localStorage.getItem("posts") as string;

  if (storedPosts) {
    postsStore.posts = JSON.parse(storedPosts);
  }
});

const updatePosts = () => {
  postsStore.updatePosts(postsStore.posts);
  localStorage.setItem("posts", JSON.stringify(postsStore.posts));
};
</script>
