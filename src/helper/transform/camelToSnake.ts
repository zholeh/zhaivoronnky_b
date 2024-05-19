function toSnakeCase(str: string): string {
  return str.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);
}

export function transformObjectKeysToSnakeCase(
  obj: Record<string, unknown>,
): Record<string, unknown> {
  const snakeCaseObj = {};
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      snakeCaseObj[toSnakeCase(key)] = obj[key];
    }
  }
  return snakeCaseObj;
}
