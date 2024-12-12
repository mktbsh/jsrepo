export function memorable<T>(init: () => T): { value: T } {
  return {
    get value() {
      const value = init();
      Object.defineProperty(this, "value", { value });
      return value;
    },
  };
}
