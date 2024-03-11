import { defineStore } from "pinia";

export const useAnalytics = defineStore("analyticsStore", {
  state: () => {
    const clickCount = 0;
    const pageViews: { url: string }[] = [];

    return {
      clickCount: clickCount,
      pageViews: pageViews,
    };
  },
  actions: {
    updateClickCount(userId: string) {
      this.clickCount++;
      console.log(this.clickCount, userId);

      $fetch("/api/analytics-api", {
        method: "post",
        body: { eventName: "sign-up", user: userId },
      });
    },

    updatePageView(payload: any) {
      this.pageViews.push({ url: payload });
    },
  },
});
