const getData = ({ URL_TO_FETCH }) => {
  return globalThis.fetch(URL_TO_FETCH).then((response) => response.json());
};

const deleteData = ({ URL_TO_FETCH }) => {
  return globalThis
    .fetch(URL_TO_FETCH, { method: "DELETE" })
    .then((response) => response.json());
};

const createData = ({ URL_TO_FETCH, config }) => {
  return globalThis
    .fetch(URL_TO_FETCH, config)
    .then((response) => response.json());
};

const updateData = ({ URL_TO_FETCH, config }) => {
  return globalThis
    .fetch(URL_TO_FETCH, config)
    .then((response) => response.json());
};

export const http = {
  get: getData,
  delete: deleteData,
  create: createData,
  update: updateData,
};
