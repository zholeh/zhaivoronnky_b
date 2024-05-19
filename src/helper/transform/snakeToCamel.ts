function toCamelCase(str: string): string {
  return str.replace(/([-_][a-z])/g, (group) =>
    group.toUpperCase().replace('-', '').replace('_', ''),
  );
}

export function transformObjectKeysToCamelCase(
  obj: Record<string, unknown>,
): Record<string, unknown> {
  const camelCaseObj = {};
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      camelCaseObj[toCamelCase(key)] = obj[key];
    }
  }
  return camelCaseObj;
}
