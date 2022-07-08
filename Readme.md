<h1 align="center">🎧 Podcaster</h1>

## Table of contents

- [Podcaster](#podcaster)
  - [Table of contents](#table-of-contents)
  - [Quick start](#quick-start)
  - [License](#license)
  - [Development](#development)
    - [System Requirements](#system-requirements)
    - [Setup](#setup)
    - [Run the app](#run-the-app)
      - [Main commands](#main-commands)
      - [Configure the environment vars](#configure-the-environment-vars)
    - [Development flows](#development-flows)
      - [Development components for the design system](#development-components-for-the-design-system)
    - [Design system](#design-system)
      - [Components categorization](#components-categorization)
    - [Guidelines](#guidelines)
      - [Gitflow commits and branches](#gitflow-commits-and-branches)
      - [Semantic commits messages](#semantic-commits-messages)
      - [Linter](#linter)
      - [Styles](#styles)
      - [Unit Tests](#unit-tests)
      - [Semantic Versioning](#semantic-versioning)
    - [Dependencies](#dependencies)
    - [Commands reference](#commands-reference)
      - [NPM commands](#npm-commands)
  - [Tests](#tests)
    - [Unit tests](#unit-tests-1)

## Quick start

Test front-end ZARA.com, this test consists of creating a mini-application to listen to music
podcasts. If you want more details please refer to the document of the test. Read more
[here][test-doc].

A sample app its a `SPA` built using <a href="https://reactjs.org"> <img
      alt="ReactJS:A JavaScript library for building user interfaces"
      src="./docs/assets/img/react-logo.svg"
      width="48" height="32"
      class="app-logo"
    /> ReactJs</a>.

---

## License

This application is licensed under the Apache License Version 2.0, January 2004. To view a copy of
this license, [visit][license].

---

## Development

It was used an scaffolding from <a href="https://vitejs.dev"> <img
      alt="Vite:Next Generation Frontend Tooling"
      src="https://vitejs.dev/logo.svg"
      width="24" height="24"
    /> Vite</a> &nbsp; and selected the template presets [react-ts][react-ts].

### System Requirements

---

The only requirement for this project is to have [Node.js][node] **version >=14** installed on your
machine. Refer to the [.node-version](./.node-version) file for the exact version. It was used
[npm][npm] v6 or greater. Also you need to install [git][git] v2.13 or greater

TypeScript will be added as a local dependency to the project, so no need to install it.

All of these commands must be available in your machine `PATH`. To check these things are installed
properly, you can run this:

```sh
git --version
node --version
npm --version
```

If you have trouble with any of these, learn more about the PATH environment variable and how to fix
it here for [windows][win-path] or [mac/linux][mac-path].

### Setup

---

After you've made sure to have the correct things (and versions) installed, you should be able to
just run a few commands to get set up:

```sh
git clone https://github.com/caox2110/podcaster-itunes.git
cd podcaster-itunes
npm install
```

### Run the app

---

To get the app up and running (and really see if it worked), run:

```sh
npm run dev
```

This should start up a [Vite][vite] dev server and the application will run on port `3000` at
[http://localhost:3000][dev-url-project].

> 🚩 **Note**
>
> Please make sure there are no other applications or services running on the port 3000. If you want
> to change the default ports, you can do so by modifying `PORT` variable in [`.env`][env] file or
> use [vite.config.ts][vite-config-file] configuration file, you can define any property using [vite
> configurations][vite-config].

You can also open [the deployment of the application on Netlify][netlify-url-project].

#### Main commands

The mains `NPM` commands are:

```sh
npm run dev
npm run build
npm run preview
npm run prod
```

- `npm run dev` - Start the development server. This command will run on port `3000` at
  [http://localhost:3000][dev-url-project].
- `npm run build` - Run the build command for the application, writing distribution files to
  `./dist/app` folder.
- `npm run preview` - Run the build command for the application and serve it from the correspondent
  `./dist/app` folder. It is only for previewing the build locally and not meant as a production
  server. This command will run on port `4173` at [http://localhost:4173][preview-url-project].
- `npm run prod` - Start the application as mode production as the preview, command it´s an example
  of how you application will to deploy.

If you have more doubts please refer to [Vite][vite] documentation for:

- [Deploying a Static Site][vite-env-and-mode]
- [Env Variables and Modes][vite-static-deploy]

You can also check the whole [commands reference here](#commands-reference).

#### Configure the environment vars

The application use the standard environment variables system used by [Vite][vite] to read
configuration, so you can create a `.env.local` file inside `./src` folder to override configuration
values. You can find more information [here][vite-env-and-mode].

### Development flows

---

This project contains a single application and you should run for the development process. For
example, if a new feature requires to add or to modify a component in the design-system, then you
should start the `design-system` app using [StoryBook][storybook] and modify the component until it
fulfill the requirements, then you should develop the component unit tests.

Here are described some of the usual development flows, as well as the commands used to start the
application, run prod, run tests, etc.

#### Development components for the design system

- Start the design-system application: `npm run design-system:start`.
- Modify or add components in the `./src/ui/components` folder (e.g.
  `./src/ui/components/atoms/Button` ). The design system will automatically reload on changes.
- Write components stories inside the component folder.
- Run component unit tests: `npm run test`.
- To check the coverage report use `npm run test:coverage` and in the `./coverage/*/ui` folder.
- Check that the component still works in the application.

### Design system

---

The design system is built using [StoryBook][storybook]. Read its documentation to learn more about
how to define components stories, etc.

To start the design-system app, run:

```sh
npm run design-system:start
```

This will start Storybook and will read any `*.stories.(js|jsx|ts|tsx)` file from the
`./src/ui/components` folder. Add the components stories directly in the `./src/ui/components`
folder, each one inside the correspondent component folder.

To build the design-system, run:

```sh
npm run design-system:build
```

The design-system sources ready to be deployed are written to the `dist/design-system` folder.

#### Components categorization

Components should be categorized following the [Atomic Design methodology][atomic-design], except
for the `pages` level, because it usually implies defining routes, and this is responsibility of
`modules` in our application (our components should be completely reusable, and defining routers
imply coupling to business rules).

So, our components are divided into these categories:

- **atoms**: `./src/ui/components/atoms/*`. Just like in Chemistry, `atoms` are the smallest
  building blocks in our system. So, `atoms` are not allowed to import any other type of components.
- **molecules**: `./src/ui/components/molecules/*`. In the molecule stage, we take our independent
  atomic design elements, each with their own characteristics, style, format, and begin to bring
  them together into new groupings. So, `molecules` are only allowed to import `atoms`.
- **organisms**: `./src/ui/components/organisms/*`. As we enter the Organisms stage, our collections
  of atoms and molecules now become more complex than at the molecular level. `organisms` are
  allowed to import both `atoms`, `molecules` and even other `organisms`.
- **templates**: `./src/ui/components/templates/*` The template is the first stage of the Atomic
  Design methodology that does not align to a stage in the molecular world, but is important for
  Atomic Design. A template is where we begin to curate our organisms and other elements into a
  cohesive design. `templates` are allowed to import all of the other types of components.

### Guidelines

---

Please read carefully these guidelines in order to ensure the scalability and maintainability of the
project. **Every one single rule can be discussed and changed**, but it is critical that every
developer of the project follows always the same rules.

#### Gitflow commits and branches

- For the purpose of this project was used [Gitflow][git-flow] as alternative Git branching model.
- All commit are define with major information possible in order to reflect a lot off information
  about the files committed and changed.
- It´s defined to mainly branches for the application:
  - develop
  - main

<a href="https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow">
  <img src="./docs/assets/img/gitflow-simple.svg" alt="Gitflow" width="600"/>
</a>

#### Semantic commits messages

Also we can use this approach for the development process:

- [Semantic commits messages][semantic-commit-mmessages] methodology is used.
- It was used one of the `feat-`, `docs-`, `fix-`, etc. prefixes when naming branches, depending of
  the target branch where it is going to be merged (develop, main), and the type of changes you are
  going to make.

#### Linter

- The project is automatically linted using [eslint][eslint]. Maybe some styling rules choices are
  not your preferred ones, but the important thing here is follow the same rules. For example, using
  single quotes or double quotes is not a critical point.
- It´s defined many linter plugins and recommended rules. The plugins are:
  - [@typescript-eslint/eslint-plugin][typescript-eslint]
  - [eslint-config-prettier]
  - [eslint-plugin-deprecate]
  - [eslint-plugin-filenames]
  - [eslint-plugin-import]
  - [eslint-plugin-jest]
  - [eslint-plugin-jest-dom]
  - [eslint-plugin-json]
  - [eslint-plugin-jsx-a11y]
  - [eslint-plugin-markdown]
  - [eslint-plugin-no-loops]
  - [eslint-plugin-prettier]
  - [eslint-plugin-promise]
  - [eslint-plugin-react]
  - [eslint-plugin-react-hooks]
  - [eslint-plugin-storybook]
  - [eslint-plugin-testing-library]
  - [eslint-plugin-unicorn]

#### Styles

- Use the [Material-ui][material-ui] styling method.
- **Use always available theme variables**. Never hardcode styles.

#### Unit Tests

- Develop unit tests only for elements of type "data", "helper" or "component" and "Modules".
- **Fail tests first**. How do you know if it is actually testing anything if the assert never
  failed?
- Treat `describe` as a noun or situation (Situations usually start with "when").
- Treat `it` as a statement about state or how an operation changes state. Usually, all `it` should
  start with "should".
- Prefer fewer asserts per `it`. Ideally on single assert for each `it` statement.
- Concating and reading together all `describe` and `it` or `test` should give sense to the assert
  _(Sense from the point of view of a non-developer human)_
- **Run tests often**. Tests are ran automatically when you push the code, but you still need to run
  them locally before pushing.
- Every bug fix must be accompanied with a correspondent test.

#### Semantic Versioning

The project start the package version at 1.0.0 by recommendation of the [`NPM`][npm]. Read more [here][npm-semver]

### Dependencies

---

- Each element should contain always a barrel as `index.ts` file, exporting only a `default` in the
  case of "components" and "modules". Multiple exports are allowed in "data" and "helpers".
- `import` statements between elements inside the same package should always refer to the folder
  name. **Importing another internal file different to `index.ts` from other elements is strictly
  forbidden.** This is critical in order to ensure the isolation and reusability of every single
  element.
- Each package should contain always a barrel as `index.ts` file, exporting those elements that may
  be available to the other packages.

### Commands reference

---

#### NPM commands

**Main commands**, that are usually executed in local development or during CI/CD:

| Script              | Description                                                                                                                                                                                                                                                                |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| dev                 | Start the development server. This command will run on port `3000` at [http://localhost:3000][dev-url-project].                                                                                                                                                            |
| build               | Run the build command for the application, writing distribution files to `./dist/app` folder.                                                                                                                                                                              |
| preview             | Run the build command for the application and serve it from the correspondent `./dist/app` folder. It is only for previewing the build locally and not meant as a production server. This command will run on port `4173` at [http://localhost:4173][preview-url-project]. |
| prod                | Start the application as mode production as the preview, command it´s an example of how you application will to deploy. This command will run on port `3000` at [http://localhost:3000][dev-url-project].                                                                  |
| lint                | Run lint and check the quality of code using the defined configuration and rules in the [eslintrc.json][eslintrc.json] file.                                                                                                                                               |
| lint:fix            | Like lint command but with the flag `--fix` to automatically fix problems and the flag `--cache` to only check changed files.                                                                                                                                              |
| test                | Run unit tests of elements in the application.                                                                                                                                                                                                                             |
| test:no-cache       | Like test command but with the flag `--no-cache` to disable the cache.                                                                                                                                                                                                     |
| test:coverage       | Like test command but with the flag `--coverage` to indicates that test coverage information should be collected and reported in the output.                                                                                                                               |
| test:watch          | Like test command but with the flag `--watch` to watch files for changes and rerun tests related to changed files.                                                                                                                                                         |
| design-system:start | Start the `design-system` app. This command will run on port `6006` at [http://localhost:6006][storybook-url-project]                                                                                                                                                      |
| design-system:build | Build the `design-system` app and write files to the `./dist/design-system` folder.                                                                                                                                                                                        |

For a complete list of scripts see [package.json]

---

## Tests

### Unit tests

---

All next types of elements should include unit and integration tests:

- Components
- Data
- Helpers
- Modules

To run unit tests, execute the test command:

```sh
npm run test
```

The coverage threshold can be configured in the `jest.config.js` file in the root of the project.
For the moment it is disabled, but is require at least a 80% of coverage.

Each element having to be tested should have a `[file].spec.(js|jsx|ts|tsx)` file in the same folder
including unit tests develop using [`Jest`][jest] and [Testing Library][testing-library].

<!-- prettier-ignore-start -->
<!-- LOCAL  -->
[test-doc]: ./docs/technical-test/prueba-tecnica-front-end-Senior.pdf
[.node-version]: ./.node-version
[env]: ./src/.env
[eslintrc.json]: ./.eslintrc.json
[package.json]: ./package.json
[gitflow-simple]: ./docs/assets/img/gitflow-simple.svg
[dev-url-project]: http://localhost:3000/
[preview-url-project]: http://localhost:4173/
[netlify-url-project]: http://localhost:3000/
[storybook-url-project]: http://localhost:6006

<!-- ONLINE  -->
[npm]: https://www.npmjs.com/
[npm-semver]: https://docs.npmjs.com/about-semantic-versioning
[node]: https://nodejs.org
[git]: https://git-scm.com/
[license]: https://github.com/caox2110/podcaster-itunes/blob/main/LICENSE
[issue]: https://github.com/caox2110/podcaster-itunes/issues
[win-path]: https://www.howtogeek.com/118594/how-to-edit-your-system-path-for-easy-command-line-access/
[mac-path]: http://stackoverflow.com/a/24322978/971592
[vite]: https://vitejs.dev
[react-ts]: https://vite.new/react-ts
[vite-config]: https://vitejs.dev/config/
[vite-config-file]: ./vite.config.ts
[vite-env-and-mode]: https://vitejs.dev/guide/env-and-mode.html
[vite-static-deploy]: https://vitejs.dev/guide/static-deploy.html
[reactjs]: https://reactjs.org
[storybook]: https://storybook.js.org
[atomic-design]: https://bradfrost.com/blog/post/atomic-web-design
[semantic-commit-mmessages]: https://gist.github.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716
[material-ui]: https://mui.com/material-ui/getting-started/overview/
[jest]: https://jestjs.io/
[testing-library]: https://testing-library.com
[git-flow]: https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow

<!-- ESLINT -->
[eslint]: https://eslint.org/
[typescript-eslint]: https://github.com/typescript-eslint/typescript-eslint
[eslint-config-prettier]: https://github.com/prettier/eslint-config-prettier
[eslint-plugin-deprecate]: https://github.com/AlexMost/eslint-plugin-deprecate
[eslint-plugin-filenames]: https://github.com/selaux/eslint-plugin-filenames
[eslint-plugin-import]: https://github.com/import-js/eslint-plugin-import
[eslint-plugin-jest]: https://github.com/jest-community/eslint-plugin-jest
[eslint-plugin-jest-dom]: https://github.com/testing-library/eslint-plugin-jest-dom
[eslint-plugin-json]: https://github.com/azeemba/eslint-plugin-json
[eslint-plugin-jsx-a11y]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y
[eslint-plugin-markdown]: https://github.com/eslint/eslint-plugin-markdown
[eslint-plugin-no-loops]: https://github.com/buildo/eslint-plugin-no-loops
[eslint-plugin-prettier]: https://github.com/prettier/eslint-plugin-prettier
[eslint-plugin-promise]: https://github.com/xjamundx/eslint-plugin-promise
[eslint-plugin-react]: https://github.com/jsx-eslint/eslint-plugin-react
[eslint-plugin-react-hooks]: https://www.npmjs.com/package/eslint-plugin-react-hooks
[eslint-plugin-storybook]: https://github.com/storybookjs/eslint-plugin-storybook
[eslint-plugin-testing-library]: https://github.com/testing-library/eslint-plugin-testing-library
[eslint-plugin-unicorn]: https://github.com/sindresorhus/eslint-plugin-unicorn
<!-- prettier-ignore-end -->

<style>
  .app-logo {
  pointer-events: none;
}

@media (prefers-reduced-motion: no-preference) {
  .app-logo {
    animation: app-logo-spin infinite 20s linear;
  }
}

@keyframes app-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

img[alt=gitflow-simple] { width: 200px; }

</style>
