<p align="center">  
  <img width="120" src="https://raw.githubusercontent.com/Landish/tailwindcss-plugin-boilerplate/main/tailwindcss-logo.svg" alt="Tailwind CSS logo">
</p>

<h1 align="center">Tailwind CSS Plugin Boilerplate</h1>

<p align="center">
  Create <a href="https://tailwindcss.com">Tailwind CSS</a> plugin with ease.
</p>

## Features

- Tests with [Jest](https://jestjs.io/) (v26)
- [Github Actions](https://github.com/features/actions) (CI)
- Automatically Publish to [NPM](https://www.npmjs.com/)

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
- Customize your plugin options under `YOUR_PLUGIN_NAME` key in `theme` object.
- Customize your plugin variants under `YOUR_PLUGIN_NAME` key in `variants` object.

```js
theme: {
    // ...
    YOUR_PLUGIN_NAME: {
      CUSTOM_OPTION: false,
    },
    // ...
},
variants: {
	// ...
    YOUR_PLUGIN_NAME: ['responsive'],
    // ...
}
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

Tailwind CSS Plugin Boilerplate comes with a Github Action which automatically publishes your plugin to [npm](https://www.npmjs.com/), when a new **Release** is created on your plugin's Github repository.

To setup automatic releases on npm follow the insturctions below:

- Login to [npm](https://www.npmjs.com/) with your credentials.
- Under **Access Tokens** page click **Generate New Token** button.
- On **New Access Token** page select an option **Automation** and click **Generate Token** button.
- Copy that Token and go to **Settings** tab in your **Github Repository**.
- In **Secrets** page click **New repository secret** button.
- In **Name** field write `NPM_TOKEN`, in **Value** field paste that copied Token from npm and click **Add Secret** button.
- Remove `private` key from `package.json`
- Update `version` key in `package.json`
- Create new **Release** in your Github repository

It will run `npm test` before publishing and after couple of minutes your plugin will be available on [npm](https://www.npmjs.com/).

If you don't want to publish your plugin to npm, simply remove this file and keep `private` key to `true` in your `package.json` file. You can always remove (unpublish) your published package from npm with `npm unpublish your-package-name -f` command.

For more details take a look at the [.github/workflows/npm-publish.yml](https://github.com/Landish/tailwindcss-plugin-boilerplate/blob/main/.github/workflows/npm-publish.yml).

9. **Update Readme**

Once you publish your plugin to npm, make you sure you update `README.md` with the configuration options and example codes, similar to this:

Install the plugin from npm:

```
$ npm install your-tailwindcss-plugin-name
```

Then add the plugin to your `tailwind.config.js` file:

```js
// tailwind.config.js
module.exports = {
  theme: {
    // ...
    YOUR_PLUGIN_NAME: {
      // ...
    },
  },
  variants: {
    // ...
    YOUR_PLUGIN_NAME: ['responsive'],
    // ...
  },
  plugins: [
    // ...
    require('your-tailwindcss-plugin-name'),
    // ...
  ],
};
```

## License

Tailwind CSS Plugin Boilerplate is licensed under [MIT license](https://github.com/Landish/tailwindcss-plugin-boilerplate/blob/main/LICENSE).
