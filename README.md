# pwgen

A (pseudo) random password generator.

### requirements

You need [Node](https://nodejs.org/en/) installed.

### setup

Run the `setup.sh` script which adds an alias to your shell profile:

```shell
./setup.sh
```

### usage

Default invocation:

```shell
$ pw # defaults to 20 characters
7TL6FpbqAWRRzBHamdb7
```

Specify password length with `-l`:

```shell
$ pw -l 10
h0vR8KLasY
```

Specify the number of passwords to generate with `-n`:

```shell
$ pw -n 4
S97Sef8frPsVeNtSMEYN
Ttj6odwE3LulSUnusivb
tylu49a5A4T1HOFYCrx9
wRtvlv6HHZHwyOgrmkhz
```

Choose the character set with `--no-upper` and `--no-digits`:

```shell
$ pw --no-upper
8shtvj9gx6jaroi4v7bm

$ pw --no-digits
kGrbjbMyANTErqpihnyh

$ pw --no-upper --no-digits
njowltinucpjjwuuontb
```
