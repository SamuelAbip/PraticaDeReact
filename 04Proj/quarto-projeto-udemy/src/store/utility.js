export const updateObject = (oldObejct, updatedProperties) => {
  return {
    ...oldObejct,
    ...updatedProperties
  };
};