<template>
  <main class="flex flex-col h-dvh px-6 md:p-42">
    <h1 class="p-4 text-4xl font-black">Blog</h1>
    <article
      class="flex flex-col p-4 md:w-1/2 md:self-center"
      v-if="postToDisplay"
    >
      <h4 class="mb-8 font-bold">{{ postToDisplay.title }}</h4>
      <p class="text-balance text-left font-light">
        {{ postToDisplay.content }}
      </p>
      <UButton class="flex justify-center mt-8" @click="signUp(userId)"
        >Sign In</UButton
      >
    </article>
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { usePosts } from "~/store/usePosts";
import { useAnalytics } from "~/store/useAnalytics";

const userId = ref("");
const abTestGroup = ref("");
const postToDisplay = ref();
const postsStore = usePosts();
const analyticsStore = useAnalytics();

onMounted(() => {
  if (process.client) {
    const storedPosts = localStorage.getItem("posts") as string;

    if (storedPosts) {
      postsStore.posts = JSON.parse(storedPosts);
    }

    // Using process.client because of the need of accesing localStorage
    userId.value = localStorage.getItem("userId") || "";
    abTestGroup.value = localStorage.getItem("abTestGroup") || "";

    const displayPost = postsStore.posts.filter(
      (post: { key: string }) => post.key === abTestGroup.value
    );

    postToDisplay.value = displayPost[0];
  }
});

async function signUp(userId: string) {
  if (localStorage.getItem("hasSignedUp") !== "true") {
    analyticsStore.updateClickCount(userId);
  }
  localStorage.setItem("hasSignedUp", "true");

  $fetch("/api/analytics-api", {
    method: "post",
    body: { eventName: "sign-up", user: userId },
  });
}
</script>
