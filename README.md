<p align="center">
  <img width="400" src="https://res.cloudinary.com/nuxt/image/upload/v1650870623/nuxt3-rc-social_z6qh3m.png"/>
</p>

<h1 align="center">my personal website made with nuxt 3 🚧 </h1>

This project aims to migrate the current version of my website to the nuxt 3 framework

> technologies used

- 💚 [Nuxt 3](https://vuejs.org/)  - The Intuitive Vue Framework
- 🍍 [Pinia](https://pinia.vuejs.org/)  - The Vue Store that you will enjoy using
- ❎ [Typescript](https://www.typescriptlang.org/)  -TypeScript is JavaScript with syntax for types.
- 🐻‍❄️ [Tailwind](https://tailwindcss.com/)  -  Rapidly build modern websites without ever leaving your HTML.

## Usage

- `yarn dev` - This start application.
- `yarn serve` - This preview production.
- `yarn jest` - Run all linting and unit tests before committing.
- `yarn jest -o` - Run only the tests that have changed.
- `yarn jest -u` - Update all of the snapshot tests.
- `yarn lint` - Run lint in code.

Install dependencies:

```sh
yarn install
```

## Testing

Run Vue components unit tests:

```sh
yarn jest
```

Open test coverage detailed report:

```sh
yarn jest:coverage
```

## migration process

- [x] Header
- [x] Footer
- [x] Color Mode
- [] Home
- [] About
- [] Contact
- [] Blog
- [] Dialogs
- [] Forms
- [] BaaS

## Commit types

| Commit Type | Title                    | Description                                                                                                 | Emoji |
| ----------- | ------------------------ | ----------------------------------------------------------------------------------------------------------- | :---: |
| `feat`      | Features                 | A new feature                                                                                               |  ✨   |
| `fix`       | Bug Fixes                | A bug Fix                                                                                                   |  🐛   |
| `docs`      | Documentation            | Documentation only changes                                                                                  |  📚   |
| `style`     | Styles                   | Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)      |  💎   |
| `refactor`  | Code Refactoring         | A code change that neither fixes a bug nor adds a feature                                                   |  📦   |
| `perf`      | Performance Improvements | A code change that improves performance                                                                     |  🚀   |
| `test`      | Tests                    | Adding missing tests or correcting existing tests                                                           |  🚨   |
| `build`     | Builds                   | Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)         |   🛠   |
| `ci`        | Continuous Integrations  | Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs) |  ⚙️   |
| `chore`     | Chores                   | Other changes that don't modify src or test files                                                           |  ♻️   |
| `revert`    | Reverts                  | Reverts a previous commit                                                                                   |   🗑   |

## License

All code are **copyright gabrielcaiana** and may not be used or reproduced without explicit permission.
