import { formatNumber as fNumber } from "../formaters";

export const formatNumber = (value) => {
  if (!value) {
    return "";
  }
  return fNumber(value);
};
