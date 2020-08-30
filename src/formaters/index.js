import _ from "lodash";

export function formatTime(value) {
  const time = new Date(value);
  return (
    time.getUTCMinutes() +
    "'" +
    _.padStart(time.getUTCSeconds(), 2, "0") +
    '"' +
    _.padStart(time.getMilliseconds(), 2, "0")
  );
}
