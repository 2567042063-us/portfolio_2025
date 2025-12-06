# GUIDE \_\_ ESLint

to ensure consistency among team members.
- takes care of all the formatting.
- catch bugs and enforce best practices.

```
ESLint: catching problems (bugs or format...)
↳ Prettier: auto format
↳ Husky: checking code before commit
↳ lint-staged: only for the changed files.
```

## What should we do

we already configure in project.
You need enable husky on your side and get some plugin support VSCode (or your editor)

[ OLD v8 - run `npx husky install .config/husky` to enable husky.]
- husky v9:
  - init: `npx husky init`
  - add lint-staged: `echo "npx lint-staged" > .husky/pre-commit`

- install two extensions: ESLint and Prettier for VSCode.
- VSCode: open settings and update **defaultFormatter**

In case we want to skip checking

```
git commit -m "skipping hooks" --no-verify
```

# Prettier

- sort order: eslint-plugin-simple-import-sort
- prettier-plugin-tailwindcss: automatic Class Sorting with Prettier

