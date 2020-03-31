export const getFormFieldDefaults = fields =>
  fields.reduce(
    (acc, curr) => ({ ...acc, [curr.name]: curr.defaultValue }),
    {}
  );
