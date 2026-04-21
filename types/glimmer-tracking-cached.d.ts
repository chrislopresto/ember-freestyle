// Type augmentation for @cached. Runtime is provided natively by @glimmer/tracking
// on Ember 4.4+, but the standalone @glimmer/tracking@1.1.2 types don't yet export it.
import '@glimmer/tracking';

declare module '@glimmer/tracking' {
  export function cached(
    target: object,
    propertyKey: string,
    descriptor: PropertyDescriptor,
  ): PropertyDescriptor;
}
