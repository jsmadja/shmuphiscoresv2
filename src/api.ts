export const api =
  process.env.NODE_ENV === "development"
    ? "http://localhost:8080/api"
    : "https://hiscores.shmup.com/api";
