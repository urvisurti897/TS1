import { calculateVolumeOfaPrism } from './volume';

describe("calculate the volume of a prism", () => {
  test("should calculate the volume correctly", () => {
    const width = 2;
    const length = 3;
    const height = 5;

    const volume = calculateVolumeOfaPrism(width, length, height);

    expect(volume).toBe(width * length * height);
  });

  test("should throw an error when length is negative", () => {
    const width = 2;
    const length = -3;
    const height = 5;

    expect(() => calculateVolumeOfaPrism(width, length, height)).toThrow("Length should be positive");

  });

  test("should throw an error when width is negative", () => {
    const width = -2;
    const length = 3;
    const height = 5;

    expect(() => calculateVolumeOfaPrism(width, length, height)).toThrow("Width should be positive");

  });


  test("should throw an error when height is negative", () => {
    const width = -2;
    const length = 3;
    const height = 5;

    expect(() => calculateVolumeOfaPrism(width, length, height)).toThrow("Width should be positive");

  });
});