import _ from "lodash";

export function formatTime(value: number): string {
  const time = new Date(value);
  return `${time.getUTCMinutes()}'${_.padStart(
    time.getUTCSeconds().toString(),
    2,
    "0"
  )}"${_.padStart(time.getMilliseconds().toString(), 2, "0")}`;
}

export function formatNumber(value: number): string {
  return value.toLocaleString("de");
}
