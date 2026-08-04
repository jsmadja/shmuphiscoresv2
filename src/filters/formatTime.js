import { formatTime as timeFormatter } from "../formaters";

export const formatTime = (value) => {
  if (!value) {
    return "";
  }
  return timeFormatter(value);
};
