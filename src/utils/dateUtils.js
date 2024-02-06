/**
 * Normalizes date into string formatted for NASA's API and for comparison
 *
 * @param {*} date
 * @returns string YYYY-MM-DD
 */
export const normalize = (date) => {
  if (!date) return null;
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
};
