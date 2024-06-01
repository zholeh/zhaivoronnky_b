import { toCamelCase, toSnakeCase } from './transformCase';

type ProcessFn = (str: string) => string;
type DictionaryUnknown = Record<string, unknown>;

type SnakeToCamel<S extends string> = S extends `${infer S1}_${infer S2}`
  ? `${Lowercase<S1>}${Capitalize<SnakeToCamel<S2>>}`
  : S extends `${infer S1}${infer S2}`
    ? `${S1}${SnakeToCamel<S2>}`
    : S;

type CamelCaseToSnake<S extends string> = S extends `${infer S1}${infer S2}`
  ? S1 extends Uppercase<S1>
    ? `_${Lowercase<S1>}${CamelCaseToSnake<S2>}`
    : S1 extends '_'
      ? `_${CamelCaseToSnake<S2>}`
      : `${S1}${CamelCaseToSnake<S2>}`
  : S;

type ShapeToSnake<S extends DictionaryUnknown> = {
  [K in keyof S as CamelCaseToSnake<K & string>]: S[K];
};

type ShapeToCamel<S extends DictionaryUnknown> = {
  [K in keyof S as SnakeToCamel<K & string>]: S[K];
};

function transformObjectKeysFn<T extends DictionaryUnknown>(
  obj: T,
  fn: ProcessFn,
): DictionaryUnknown {
  const camelCaseObj = {};
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      camelCaseObj[fn(key)] = obj[key];
    }
  }
  return camelCaseObj;
}

export function transformObjectKeys<T extends DictionaryUnknown>(
  obj: T,
): {
  toSnake: () => ShapeToSnake<T>;
  toCamel: () => ShapeToCamel<T>;
} {
  return {
    toSnake: () => {
      return transformObjectKeysFn(obj, toSnakeCase) as ShapeToSnake<T>;
    },
    toCamel: () => {
      return transformObjectKeysFn(obj, toCamelCase) as ShapeToCamel<T>;
    },
  };
}
