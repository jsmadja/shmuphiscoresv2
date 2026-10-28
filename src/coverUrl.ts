export function coverUrl(url?: string): string | undefined {
  if (url && url.indexOf("/") === 0) {
    return "https://hiscores.shmup.com" + url;
  }
  return url;
}
