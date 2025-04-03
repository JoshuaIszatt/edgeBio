# Plugin Documentation

## Overview
This document provides information about the plugins used in this repository. Plugins extend the functionality of the system and are either developed internally or added as submodules.

## Plugin Structure
Each plugin should follow this structure:

## Adding Plugins
1. **Internal Plugins**:  
Internal plugins, such as `test_plugin/`, are developed directly within this repository. Ensure they follow the structure outlined above.

2. **External Plugins**:  
External plugins are typically added as submodules. To add a plugin as a submodule, use the following command:
```
git submodule add <repository_url> plugins/<plugin_name>
```

## Ecosystem Configuration
To configure the ecosystem for your plugins, add the following entry to your `ecosystem.config.js` file:

```javascript
// filepath: ../ecosystem.config.js
module.exports = {
  apps: [
    // ...existing services...
    {
      name: "<plugin_name>",
      script: "plugins/<plugin_name>/src/index.js",
      watch: true,
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
```

