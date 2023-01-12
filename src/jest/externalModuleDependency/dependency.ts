export const dependency = (x: string) => {
  const message = `dependency called with ${x}`;
  console.log(message);
  return message;
};
