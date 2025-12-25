# Dependency Management Rules

## 🔒 Protected Files

The following files cannot be edited directly:

- `package.json` - Use npm CLI commands only
- `package-lock.json` - Auto-generated, do not edit
- `node_modules/` - Auto-generated, do not edit

## ✅ Correct Way: Use CLI Commands

All dependency changes **must** be done through the CLI:

```bash
# Install a new dependency
npm install <package-name>

# Install as dev dependency
npm install --save-dev <package-name>

# Uninstall a dependency
npm uninstall <package-name>

# Update a dependency
npm update <package-name>

# Update all dependencies
npm update

# Clean install (use in CI environments)
npm ci
```

## ❌ Incorrect Way: Manual Edits

Never manually edit `package.json` to add/remove/update dependencies. Always inform the user and execute the CLI command instead.
