import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";




export default [

  
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  pluginReactConfig, {
   "rules": {
    "linebreak-style": 1,
    "quotes": ["error", "double"],
    "react/react-in-jsx-scope": "off"
},
  },


];
