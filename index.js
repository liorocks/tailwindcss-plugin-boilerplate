const plugin = require('tailwindcss/plugin');

module.exports = plugin(
  function ({ addUtilities, theme, variants }) {
    // If your plugin requires user options,
    // you can get these config here.
    // Docs: https://tailwindcss.com/docs/plugins#exposing-options
    const options = theme('YOUR_PLUGIN_NAME');

    // Add CSS-in-JS syntax to create utility classes.
    // Docs: https://tailwindcss.com/docs/plugins#adding-utilities
    const utilities = {
      '.example-utility-class': {
        display: 'block',
      },
    };

    // Conditionally add utility class based on user configuration.
    if (options.CUSTOM_OPTION) {
      utilities['.custom-utility-class'] = {
        'background-color': 'red',
      };
    }

    addUtilities(utilities, {
      variants: variants('YOUR_PLUGIN_NAME'),
    });
  },
  {
    theme: {
      // Default options for your custom plugin (optional).
      // Docs: https://tailwindcss.com/docs/plugins#exposing-options
      YOUR_PLUGIN_NAME: {
        CUSTOM_OPTION: false,
      },
    },
    variants: {
      // Default variants for your custom plugin.
      // Docs: https://tailwindcss.com/docs/plugins#variants
      YOUR_PLUGIN_NAME: ['responsive'],
    },
  }
);
