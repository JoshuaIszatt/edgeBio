# Development Documentation

## Coding Conventions

### System versioning
Use semantic versioning format - https://semver.org/

**Release timeline**
> February 2025: Alpha (0.0.1-alpha) – Internal testing, early development.
> March 2025: Beta (0.0.1-beta) – Your MVP release, with core functionality but not all features.
> September 2025: Production (0.0.1) – First stable release, ready for real-world use.

### Git commit format
Use conventional commit message format - https://www.conventionalcommits.org/en/v1.0.0/

**Layout:**
```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```
***

**Common 'type' uses:**
- **feat**: A new feature
- **fix**: A bug fix
- **docs**: Documentation only changes
- **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **perf**: A code change that improves performance
- **test**: Adding missing tests or correcting existing tests
- **build**: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
- **chore**: Other changes that don't modify src or test files
***

**Example: (Adding my docs files)**
```
docs: add initial documentation templates

Added initial documentation templates for various components including coding conventions for Python and JavaScript, and setup instructions for frontend, backend, and database environments.

- Follow PEP 8 guidelines for Python.
- Write JSDoc comments for JavaScript.
- Initial drafts for all documentation files.
```
***

### Python 
- Follow PEP 8 guidelines (https://peps.python.org/pep-0008/).
- Use type hints where possible.
- Write docstrings for all public modules, classes, and functions.

### JavaScript
- Write JSDoc comments for all functions and classes (https://jsdoc.app/about-getting-started).

## Development Environment

* frontend
    * devtools
    * setup
    * tests
    * run
* backend
    * devtools
    * setup
    * tests
    * run
* database
    * setup
