export const api =
  process.env.VUE_APP_API ||
  (process.env.NODE_ENV === "development"
    ? "http://localhost:8080/api"
    : "https://hiscores.shmup.com/api");
