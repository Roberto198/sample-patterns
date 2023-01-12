import { testedFunction } from ".";

// Simple mock of module with declared mockDependency
jest.mock("./dependency", () => ({
  ...jest.requireActual("./dependency"),
  dependency: (x) => `mock-dependency called with ${x}`,
}));

describe("Name of the group", () => {
  it("returns the mock value", () => {
    expect(testedFunction("1")).toBe("mock-dependency called with 1");
  });
});
