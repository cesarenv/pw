# pwgen

A (pseudo) random password generator.

### requirements

You need [Node](https://nodejs.org/en/) installed.

### setup

Run the `setup.sh` script which adds an alias to your shell profile:

```shell
./setup.sh
```

## run

Run the alias:

```shell
pw -l <password length>
```

**Examples**:

```shell
$ pw # defaults to 20 characters
7TL6FpbqAWRRzBHamdb7

$ pw -l 10 # or you can pass the length as an argument
h0vR8KLasY
```
