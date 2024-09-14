import createPlugin from 'tailwindcss/plugin.js';
import addUtilitiesCustom from './theme/utils/addUtils.ts';
import dynamicUtils from './theme/utils/dynamicUtils.ts';
import theme from './theme/theme.ts';




const pluginCreator = api => {
    const { addUtilities, matchUtilities, theme } = api;

    Object.entries(dynamicUtils).forEach(([name, {css, key}]) => {
        matchUtilities({
        [name]: (value) => [{[css]:  value}]
      }, {values: theme(key) }) 
    });

    addUtilities(addUtilitiesCustom);
};


const pluginConfig = { theme};

export default createPlugin(pluginCreator, pluginConfig); 

