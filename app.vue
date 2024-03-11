<template>
  <header class="flex justify-end gap-2 p-4">
    <DarkModeButton />
    <NuxtLink v-if="isHomePage" to="/editor">
      <UButton :icon="'i-heroicons-pencil-square-20-solid'" />
    </NuxtLink>
    <NuxtLink v-else to="/">
      <UButton :icon="'i-heroicons-home-20-solid'" />
    </NuxtLink>
  </header>
  <NuxtPage />
</template>

<script setup lang="ts">
import { useAnalytics } from "~/store/useAnalytics";

import DarkModeButton from "./components/DarkModeButton/DarkModeButton.vue";

const route = useRoute();
const analyticsStore = useAnalytics();

const isHomePage = computed(() => route.path === "/");

onMounted(() => {
  document.addEventListener("click", () => {
    $fetch("/api/analytics-api", {
      method: "post",
      body: {
        eventName: "click",
      },
    });
  });

  watch(
    () => route.path,
    () => {
      $fetch("/api/analytics-api", {
        method: "post",
        body: {
          eventName: "page-view",
          pageview: route.path,
        },
      }).then(() => {
        analyticsStore.updatePageView(route.path);
      });
    }
  );
});

//Function to calculate CTR for clicks on signup over the home page
//On a production enviroment we can check how many users have clicked and how many
//total amount of visits the home page had.
//In this case clickCount it will be always ine since there is only one user
/* const calculateCTR = () => {
  const value =
    analyticsStore.clickCount /
    analyticsStore.pageViews.filter((page) => page.url === "/").length;
}; */
</script>
