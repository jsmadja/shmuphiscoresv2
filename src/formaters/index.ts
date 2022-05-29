import _ from "lodash";

export function formatTime(value: number): string {
  const time = new Date(value);
  return `${time.getUTCMinutes()}'${_.padStart(
    `${time.getUTCSeconds()}`,
    2,
    "0"
  )}"${_.padStart(`${time.getMilliseconds()}`, 2, "0")}`;
}

export function formatNumber(value: number): string {
  return value.toLocaleString("de");
}
