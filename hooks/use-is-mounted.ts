/**
 * @file use-is-mounted.ts
 * @description Indica si el componente ya se montó en el cliente. Es `false` en el
 * servidor y durante la hidratación, para renderizar igual que el HTML del servidor.
 */

import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

/**
 * @name useIsMounted
 * @returns {boolean} - `true` después de hidratar en el cliente.
 */
export const useIsMounted = () =>
  useSyncExternalStore(
    subscribe,
    () => true,
    () => false
  );
