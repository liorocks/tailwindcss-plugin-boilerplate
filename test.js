const merge = require('lodash/merge');
const cssMatcher = require('jest-matcher-css');
const postcss = require('postcss');
const tailwindcss = require('tailwindcss');
const customPlugin = require('./index.js');

expect.extend({
  toMatchCss: cssMatcher,
});

function generatePluginCss(overrides) {
  const config = {
    theme: {
      // Default options for your plugin.
      YOUR_PLUGIN_NAME: {
        CUSTOM_OPTION: false,
      },
    },
    variants: {
      // Default variants for your plugin.
      YOUR_PLUGIN_NAME: [],
    },
    corePlugins: false,
    plugins: [customPlugin],
  };

  return postcss(tailwindcss(merge(config, overrides)))
    .process('@tailwind utilities', {
      from: undefined,
    })
    .then(({ css }) => css);
}

test('simple utility class can be generated', () => {
  return generatePluginCss().then(css => {
    expect(css).toMatchCss(`    
    .example-utility-class {
      display: block
    }
    `);
  });
});

test('options can be customized', () => {
  return generatePluginCss({
    theme: {
      YOUR_PLUGIN_NAME: {
        CUSTOM_OPTION: true,
      },
    },
  }).then(css => {
    expect(css).toMatchCss(`    
    .example-utility-class {
      display: block
    }
    .custom-utility-class {
      background-color: red
    }
    `);
  });
});

test('variants can be customized', () => {
  return generatePluginCss({
    theme: {
      screens: {
        sm: '640px',
      },
    },
    variants: {
      YOUR_PLUGIN_NAME: ['responsive', 'hover'],
    },
  }).then(css => {
    expect(css).toMatchCss(`
    .example-utility-class {
      display: block
    } 
    .hover\\:example-utility-class:hover {
      display: block
    } 
    @media (min-width: 640px) {
      .sm\\:example-utility-class {
        display: block
      }

      .sm\\:hover\\:example-utility-class:hover {
        display: block
      }
    }
    `);
  });
});
