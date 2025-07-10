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
  source: ['tokens/**/*.json'],
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
    }
  }
}; 