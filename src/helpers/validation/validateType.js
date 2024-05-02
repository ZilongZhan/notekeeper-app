export const validateType = (note) => {
  const isValidType = (value, type) => typeof value === type;
  const isEmpty = (value) => value === "";

  const isValid = (value, type) =>
    isValidType(value, type) && !isEmpty(value);

  const result =
    isValid(note.name, "string") &&
    isValid(note.description, "string") &&
    isValid(note.important, "boolean") &&
    isValid(note.status, "string") &&
    isValid(note.due_date, "string");

  return result;
};
