const setUserGroup = () => {
  if (!localStorage.getItem("abTestGroup")) {
    const group = Math.random() < 0.5 ? "A" : "B";
    localStorage.setItem("abTestGroup", group);
  }
};

const ensureUserId = () => {
  if (!localStorage.getItem("userId")) {
    // Simple ID generation: current timestamp + random number
    const userId = `user_${Date.now()}_${Math.floor(Math.random() * 1000)}`;
    localStorage.setItem("userId", userId);
  }
};

export default defineNuxtPlugin(() => {
  if (process.client) {
    ensureUserId();
    setUserGroup();
  }
});
