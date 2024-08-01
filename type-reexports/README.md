## What we learn

1. [`!module.buildMeta || !module.buildMeta.exportsType` will be `setUnknownExportsProvided()`](https://github.com/webpack/webpack/blob/675402ee748d399447d77b19a5ab681a12006bba/lib/FlagDependencyExportsPlugin.js#L57-L65) (`empty.js` in this case), which `exportsInfo.otherExportInfo.provided` will be `null` (only the runtime knows if it is provided).
2. [The usage of `priority` and `maxTarget`](https://github.com/webpack/webpack/pull/13068).

## Related

- PR: https://github.com/webpack/webpack/pull/13068
