export const formatRank = (index) => {
  const rank = index;
  const hundredRemainder = rank % 100;
  const tenRemainder = rank % 10;
  if (hundredRemainder - tenRemainder === 10) {
    return `${rank}th`;
  }
  switch (tenRemainder) {
    case 1:
      return `${rank}st`;
    case 2:
      return `${rank}nd`;
    case 3:
      return `${rank}rd`;
    default:
      return `${rank}th`;
  }
};
