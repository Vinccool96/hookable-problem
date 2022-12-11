import { createHooks } from "hookable"

type HookResult = Promise<void> | void

export interface RuntimeHooks extends Record<string, any> {
  "example:error": (err: Error) => HookResult
  "example:setup": () => HookResult
}

export const hooks = createHooks<RuntimeHooks>()

hooks.hook("observable:error", function (err: Error) {})
