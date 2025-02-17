export function enumToArray<T extends Record<string, string | number>>(
  enumObj: T,
) {
  return Object.keys(enumObj)
    .filter((key) => isNaN(Number(key)))
    .map((key) => ({
      label: key,
      value: enumObj[key as keyof T],
    }));
}
