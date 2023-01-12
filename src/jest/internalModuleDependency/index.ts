// This function has an internal dependency
// This are both function declarations
// Cannot be mocked
export function declaredTestFunction(x: string) {
  return declaredDependency(x);
}

export function declaredDependency(x) {
  const message = `dependency called with ${x}`;
  console.log(message);
  return message;
}

// This function has an internal dependency
// Both are declared with const and arrow
// function format.
export const constTestedFunction = (x: string) => {
  return constDependency(x);
};

export function constDependency(x) {
  const message = `dependency called with ${x}`;
  console.log(message);
  return message;
}
