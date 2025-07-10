const StyleDictionary = require('style-dictionary');

// Custom format for Tailwind config
StyleDictionary.registerFormat({
  name: 'javascript/tailwind',
  formatter: function(dictionary) {
    const colors = {};
    const fontSize = {};
    const spacing = {};
    const borderRadius = {};
    
    dictionary.allTokens.forEach(token => {
      const path = token.path;
      
      // Color tokens
      if (path[0] === 'color') {
        if (!colors[path[1]]) colors[path[1]] = {};
        colors[path[1]][path[2]] = token.value;
      }
      
      // Typography tokens
      if (path[0] === 'typography') {
        const key = `${path[1]}-${path[2]}`;
        if (token.value && token.value.fontSize && token.value.lineHeight) {
          fontSize[key] = [token.value.fontSize, token.value.lineHeight.toString()];
        }
      }

      // Spacing tokens
      if (path[0] === 'spacing') {
        spacing[path[1]] = token.value;
      }

      // Border radius tokens
      if (path[0] === 'borderRadius') {
        borderRadius[path[1]] = token.value;
      }
    });
    
    return `module.exports = {
  theme: {
    extend: {
      colors: ${JSON.stringify(colors, null, 6)},
      fontSize: ${JSON.stringify(fontSize, null, 6)},
      spacing: ${JSON.stringify(spacing, null, 6)},
      borderRadius: ${JSON.stringify(borderRadius, null, 6)}
    }
  }
};`;
  }
});

// Custom format for Vue.js tokens
StyleDictionary.registerFormat({
  name: 'javascript/vue-tokens',
  formatter: function(dictionary) {
    const tokens = {};
    
    dictionary.allTokens.forEach(token => {
      let current = tokens;
      const path = token.path;
      
      // Create nested object structure
      for (let i = 0; i < path.length - 1; i++) {
        if (!current[path[i]]) {
          current[path[i]] = {};
        }
        current = current[path[i]];
      }
      
      // Set the value
      current[path[path.length - 1]] = token.value;
    });
    
    return `// Vue.js Design Tokens
// Auto-generated from Figma Token Studio
import { reactive } from 'vue';

export const designTokens = reactive(${JSON.stringify(tokens, null, 2)});

// CSS Variables helper
export const cssVars = {
${dictionary.allTokens.map(token => {
  const name = token.path.join('-');
  return `  '${name}': 'var(--${name})'`;
}).join(',\n')}
};

// Tailwind classes helper
export const tailwindClasses = {
  colors: {
${dictionary.allTokens.filter(token => token.path[0] === 'color').map(token => {
  const colorName = token.path[1];
  const shade = token.path[2];
  return `    '${colorName}-${shade}': 'bg-${colorName}-${shade}'`;
}).join(',\n')}
  }
};

export default designTokens;`;
  }
});

// Custom format for CSS variables
StyleDictionary.registerFormat({
  name: 'css/design-tokens',
  formatter: function(dictionary) {
    let css = ':root {\n';
    
    dictionary.allTokens.forEach(token => {
      const name = `--${token.path.join('-')}`;
      
      if (token.type === 'typography' && token.value) {
        // Typography tokens as individual CSS variables
        css += `  ${name}-font-family: ${token.value.fontFamily};\n`;
        css += `  ${name}-font-size: ${token.value.fontSize};\n`;
        css += `  ${name}-font-weight: ${token.value.fontWeight};\n`;
        css += `  ${name}-line-height: ${token.value.lineHeight};\n`;
      } else {
        // All other tokens
        css += `  ${name}: ${token.value};\n`;
      }
    });
    
    css += '}';
    return css;
  }
});

module.exports = {
  source: ['tokens/**/*.json', 'tokens.json'],
  platforms: {
    tailwind: {
      transformGroup: 'js',
      buildPath: 'build/',
      files: [{
        destination: 'tailwind-tokens.js',
        format: 'javascript/tailwind'
      }]
    },
    css: {
      transformGroup: 'css',
      buildPath: 'build/',
      files: [{
        destination: 'design-tokens.css',
        format: 'css/design-tokens'
      }]
    },
    vue: {
      transformGroup: 'js',
      buildPath: 'resources/js/',
      files: [{
        destination: 'tokens.js',
        format: 'javascript/vue-tokens'
      }]
    }
  }
}; 