export const month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

/**
 * Generate range year
 * @param {*} length
 * @returns year_array
 */
export const year_range = (length) => {
  return Array.from({ length: length }, (_, i) => new Date().getFullYear() + i);
};
