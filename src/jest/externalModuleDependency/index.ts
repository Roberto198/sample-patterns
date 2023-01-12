import { dependency } from "./dependency";

export const testedFunction = (x: string) => {
  return dependency(x);
};
