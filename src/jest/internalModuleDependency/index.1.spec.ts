import { notEmpty } from "jest-mock-extended";
import * as testedModule from "./index";

// jest.mock does not work for internal dependencies, whether they are const or not
const mockDeclaredDependencyFn = jest.fn();
const mockConstDependencyFn = jest.fn();
jest.mock("./index", () => ({
  ...jest.requireActual("./index"),
  declaredDependency: () => mockDeclaredDependencyFn,
  constDependency: () => mockConstDependencyFn,
}));

describe("Name of the group", () => {
  it("mock a declared function", () => {
    // Attempt to mock declaredDependency
    mockDeclaredDependencyFn.mockImplementationOnce(
      (x) => `mock called with ${x}`
    );
    // We cannot spy on a function declaration
    expect(testedModule.declaredTestFunction("1")).not.toBe(
      "mock called with 1"
    );
    expect(testedModule.declaredTestFunction("1")).toBe(
      "dependency called with 1"
    );
  });

  it("mock a declared function", () => {
    // Attempt to mock declaredDependency
    mockConstDependencyFn.mockImplementationOnce(
      (x) => `mock called with ${x}`
    );
    // We can assert the mock value is returned, not the actual value
    expect(testedModule.declaredTestFunction("1")).not.toBe(
      "mock called with 1"
    );
    expect(testedModule.declaredTestFunction("1")).toBe(
      "dependency called with 1"
    );
  });
});
