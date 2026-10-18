import * as React from "react"

const subscribe = () => () => {}

/**
 * `false` during SSR and hydration, `true` once running in the browser.
 *
 * Use it to defer UI that depends on the viewer's environment (current date,
 * timezone, locale, window size) and so can't match the server-rendered HTML:
 *
 *   const isClient = useIsClient()
 *   return isClient ? <Calendar … /> : <Skeleton … />
 */
export function useIsClient() {
  return React.useSyncExternalStore(
    subscribe,
    () => true,
    () => false
  )
}
