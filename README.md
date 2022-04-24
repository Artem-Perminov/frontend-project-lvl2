## [Difference calculator](https://github.com/Artem-Perminov/frontend-project-lvl2)

[![Actions Status](https://github.com/Artem-Perminov/frontend-project-lvl2/workflows/hexlet-check/badge.svg)](https://github.com/Artem-Perminov/frontend-project-lvl2/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/3b6a5893579777b7a714/maintainability)](https://codeclimate.com/github/Artem-Perminov/frontend-project-lvl2/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/3b6a5893579777b7a714/test_coverage)](https://codeclimate.com/github/Artem-Perminov/frontend-project-lvl2/test_coverage)

### A difference calculator is a program that determines the difference between two data structures.
This is a popular task for which there are many online services. A similar mechanism is used when outputting tests or when automatically tracking changes in configuration files.

### Compare two json files (use relative or absolute paths): 

```
gendiff file1.json file2.json
```
 - file1.json
```json
{
    "host": "hexlet.io",
        "timeout": 50,
        "proxy": "123.234.53.22",
        "follow": false
}
```
 - file2.json 
```json
{
    "timeout": 20,
        "verbose": true,
        "host": "hexlet.io"
}
```
[![asciicast](https://asciinema.org/a/aL1DFA3eYspbRp6Rc5P8kI5C5.svg)](https://asciinema.org/a/aL1DFA3eYspbRp6Rc5P8kI5C5)