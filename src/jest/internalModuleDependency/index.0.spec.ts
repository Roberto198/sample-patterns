import * as testedModule from "./index";

//Internal module methods can be mocked with jest.spyOn
// * as module must be used to feed into spyOn methods
describe("Name of the group", () => {
  it("mock a declared function", () => {
    // Attempt to mock declaredDependency
    jest
      .spyOn(testedModule, "declaredDependency")
      .mockImplementationOnce((x) => `mock-dependency called with ${x}`);

    // We cannot spy on a function declaration
    expect(testedModule.declaredTestFunction("1")).not.toBe(
      "mock-dependency called with 1"
    );

    expect(testedModule.declaredTestFunction("1")).toBe(
      "dependency called with 1"
    );
  });

  it("mock a declared function", () => {
    // Attempt to mock dependency defined wit and arrow function
    jest
      .spyOn(testedModule, "constDependency")
      .mockImplementationOnce((x) => `mock-dependency called with ${x}`);

    // We can assert the mock value is returned, not the actual value
    expect(testedModule.declaredTestFunction("1")).toBe(
      "dependency called with 1"
    );
  });
});
