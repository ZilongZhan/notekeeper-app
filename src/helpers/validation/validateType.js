export const validateType = (note) => {
  const isValidType = (value, type) => typeof value === type;

  const result =
    isValidType(note.name, "string") &&
    isValidType(note.description, "string") &&
    isValidType(note.important, "boolean") &&
    isValidType(note.status, "string") &&
    isValidType(note.due_date, "string");

  return result;
};
