import { defineStore } from "pinia";

export const usePosts = defineStore("postsStore", {
  state: () => {
    const storedPosts = [
      {
        key: "A",
        title:
          "Smartphone Entertainment: Your Pocket-Sized Hub for Fun and Learning",
        content:
          "Entertaining on a mobile phone has evolved beyond simple games and social media scrolling. Smart entertainment on mobile devices now encompasses a vast array of options that cater to diverse interests and preferences. Users can immerse themselves in educational apps that gamify learning, enjoy augmented reality experiences that blend the digital and physical worlds, or dive into interactive story apps that offer a unique narrative experience.",
      },
      {
        key: "B",
        title: "Your Pocket-Sized Hub for Fun and Learning",
        content:
          "Entertaining on a mobile phone has evolved beyond simple games and social media scrolling. Smart entertainment on mobile devices now encompasses a vast array of options that cater to diverse interests and preferences.",
      },
    ];

    return {
      posts: storedPosts,
    };
  },
  actions: {
    updatePosts(payload: any) {
      this.posts = payload;
    },
  },
});
