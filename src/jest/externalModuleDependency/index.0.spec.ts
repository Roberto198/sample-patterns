import { testedFunction } from ".";
import { dependency } from "./dependency";

// Simple mock of imported module
jest.mock("./dependency");

describe("Name of the group", () => {
  it("mock an imported dependencey once", () => {
    // TS jest mocked to cast 'dependency' as a mock
    jest
      .mocked(dependency)
      .mockImplementationOnce((x) => `mock-dependency called with ${x}`);
    expect(testedFunction("1")).toBe("mock-dependency called with 1");
  });

  it("mock an imported dependencey once", () => {
    // TS before jest.mocked
    (dependency as jest.Mock).mockImplementationOnce(
      (x) => `mock-dependency called with ${x}`
    );
    expect(testedFunction("1")).toBe("mock-dependency called with 1");
  });
});
