## What we learn

1. If `lib/common/empty.js`'s `exportsInfo.otherExportInfo.provided` is `null`, then its re-export, `lib/common/index.js`'s `exportsInfo.otherExportInfo.provided` will also be `null`.
2. In this case, `lib/util-b.js` has side effects, which causes `lib/index.js` can't be optimized by `SideEffectsFlagPlugin`, and since `lib/common/index.js`'s `exportsInfo.otherExportInfo.provided` is `null`, webpack can't know its exports at compile-time, so the re-export of `lib/common/index.js` is 'harmony reexport (checked)', 'checked' means 'check at run-time'.
    1. [`noExtraExports` is `false`, `noExtraImports` is `true`](https://github.com/webpack/webpack/blob/675402ee748d399447d77b19a5ab681a12006bba/lib/dependencies/HarmonyExportImportedSpecifierDependency.js#L440-L443).
    2. `utilA` is added to `hidden`.
    2. [`utilB` is added to `checked`](https://github.com/webpack/webpack/blob/675402ee748d399447d77b19a5ab681a12006bba/lib/dependencies/HarmonyExportImportedSpecifierDependency.js#L440-L443).
3. If we swap the order of `./common` and `./util-b` in `lib/index.js`, you will find that there isn't `./common` in the output of `lib/index.js`, this is caused by `hiddenExports`, [`utilA` and `utilB` both are `hiddenExports` and added to `hidden`](https://github.com/webpack/webpack/blob/675402ee748d399447d77b19a5ab681a12006bba/lib/dependencies/HarmonyExportImportedSpecifierDependency.js#L480-L484), since webpack already known `utilA` and `utilB` are exported from `./util-a` and `./util-b`.

## Related

- PR: https://github.com/webpack/webpack/pull/18611
