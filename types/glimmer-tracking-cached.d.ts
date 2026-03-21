// Type augmentation for @cached (provided at runtime by ember-cached-decorator-polyfill)
import '@glimmer/tracking';

declare module '@glimmer/tracking' {
  export function cached(
    target: object,
    propertyKey: string,
    descriptor: PropertyDescriptor,
  ): PropertyDescriptor;
}
