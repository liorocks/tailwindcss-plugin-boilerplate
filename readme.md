# Tailwind CSS Plugin Boilerplate

> Create Tailwind CSS plugin with ease.

## Features

- Tests with [Jest](https://jestjs.io/) (v26)
- [Github Actions](https://github.com/features/actions) (CI)

## Usage

1. **Clone a Template/Repository**

To get started click [**Use this template**](https://github.com/Landish/tailwindcss-plugin-boilerplate/generate) button, or clone the repository:

```
$ git clone git@github.com:Landish/tailwindcss-plugin-boilerplate.git your-tailwindcss-plugin-name
```

2. **Install Dependencies**

```
$ cd your-tailwindcss-plugin-name

$ npm install
```

3. **Update `package.json`**

- Update `name`, `description`, `author` and other relevant keys to match your plugin needs.
- If you want to publish your plugin to [npm](https://www.npmjs.com/), remove `private` key from `package.json`.

4. **Choose a License**

By default this boilerplate uses MIT license. You can change this in `package.json` and `LICENSE` files to match your needs. If you don't know which license to use, checkout the [https://choosealicense.com/](https://choosealicense.com/).

5. **Update Source Code**

- Replace `YOUR_PLUGIN_NAME` with your plugin name in `index.js` and `test.js`
- If your plugins depends on user configurations, you will find `CUSTOM_OPTION` key under `YOUR_PLUGIN_NAME` config object. Make sure to update this object, source code and tests to match your plugin needs.

```js
theme: {
  // ...
  YOUR_PLUGIN_NAME: {
    CUSTOM_OPTION: false,
  },
  // ...
},
```

> Learn more on writing Tailwind CSS plugins in [docs](https://tailwindcss.com/docs/plugins).

6. **Run Tests**

Run `npm run test` to test your code. If you run `npm run test:watch` command, it will watch for file changes and run tests automatically. If you use Github Actions, this boilerplate will run tests automatically on new commits in `main` branch and on pull requests. See [.github/workflows/test.yml](https://github.com/Landish/tailwindcss-plugin-boilerplate/blob/main/.github/workflows/test.yml) for more.

7. **Publish to Github**

If you cloned this repository and not used it as a template, you might need to remove `.git` directory and reinitialize git again before publishing to your Github account.

```
$ cd your-tailwindcss-plugin-name

$ rm -rf .git
$ git init
```

Alternatively you can just change the remote git URL.

```
# Verify current remote URL
$ git remote -v
> origin git@github.com:Landish/tailwindcss-plugin-boilerplate.git (fetch)
> origin git@github.com:Landish/tailwindcss-plugin-boilerplate.git (push)

# Change remote URL
$ git remote set-url origin git@github.com:USERNAME/REPOSITORY.git

# Verify new remote URL
$ git remote -v
> origin git@github.com:USERNAME/REPOSITORY.git (fetch)
> origin git@github.com:USERNAME/REPOSITORY.git (push)
```

8. **Publish to NPM**

If you want your plugin to be used by other people, you can publish it [npm](https://www.npmjs.com/).

## License

Tailwind CSS Plugin Boilerplate is licensed under [MIT](https://github.com/Landish/tailwindcss-plugin-boilerplate/blob/main/LICENSE).
