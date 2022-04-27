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

- file1.yml
```yaml
common:
  setting1: Value 1
  setting2: 200
  setting3: true
  setting6:
    key: value
    doge:
      wow: ''
group1:
  baz: bas
  foo: bar
  nest:
    key: value
group2:
  abc: 12345
  deep:
    id: 45
```
- file2.json
```json
{
  "common": {
    "follow": false,
    "setting1": "Value 1",
    "setting3": null,
    "setting4": "blah blah",
    "setting5": {
      "key5": "value5"
    },
    "setting6": {
      "key": "value",
      "ops": "vops",
      "doge": {
        "wow": "so much"
      }
    }
  },
  "group1": {
    "foo": "bar",
    "baz": "bars",
    "nest": "str"
  },
  "group3": {
    "deep": {
      "id": {
        "number": 45
      }
    },
    "fee": 100500
  }
}
```

```
gendiff -f plain file1.yml file2.json 
```

[![asciicast](https://asciinema.org/a/ZskrPvbcXxJ6Uvjf9H3B4Flv2.svg)](https://asciinema.org/a/ZskrPvbcXxJ6Uvjf9H3B4Flv2)