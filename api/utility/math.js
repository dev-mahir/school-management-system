/**
 * Create a random number
 * @param {*} min
 * @param {*} max
 * @returns
 */

export const getRandom = () => {
  return Math.floor(Math.random() * (100000 - 999999)) + 999999;
};

/**
 * ID generator
 * @param {*} year
 * @param {*} class
 * @param {*} unique_id
 * @returns
 */

export const idGenerator = (year, s_class, id) => {
  const un_id = id + 1;

  if (id.toString().length === 1) {
    return `${year}${s_class}00${un_id}`;
  } else if (id.toString().length === 2) {
    return `${year}${s_class}0${un_id}`;
  } else if (id.toString().length == 3) {
    return `${year}${s_class}${un_id}`;
  } else {
    return `${year}${s_class}${un_id}`;
  }
};

