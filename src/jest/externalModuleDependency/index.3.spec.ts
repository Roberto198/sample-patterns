import { testedFunction } from ".";

// Simple mock of module with declared mockDependency, this time with a mock that can
// have different values per test
const mockDependencyFn = jest
  .fn()
  .mockImplementation((x) => `mock-dependency called with ${x}`);

//use the mock as Fn
jest.mock("./dependency", () => ({
  ...jest.requireActual("./dependency"),
  dependency: mockDependencyFn,
}));

describe("Name of the group", () => {
  it("returns the mock value", () => {
    expect(testedFunction("1")).toBe("mock-dependency called with 1");
  });
  it("can return different mock values", () => {
    mockDependencyFn.mockImplementationOnce(
      (x) => `mock-dependency called with ${x}`
    );
    expect(testedFunction("1")).toBe("mock-dependency called with 1");
  });
});
