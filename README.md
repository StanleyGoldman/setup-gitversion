# setup-gitversion

[![](https://github.com/StanleyGoldman/setup-gitversion/workflows/Test/badge.svg)](https://github.com/actions/setup-gitversion/actions)
[![](https://github.com/StanleyGoldman/setup-gitversion/workflows/Licensed/badge.svg)](https://github.com/actions/setup-gitversion/actions)

This actions sets up GitVersion for use in Actions by:

- Installing GitVersion

This action currently only supports Actions' `ubuntu-` and `macos-` runtimes. As GitVersion is already installed on Windows.

This GitHub action is only relevant as long as https://github.com/microsoft/azure-pipelines-image-generation/issues/1364 is still an open issue. YMMV.

## Usage

See [action.yml](action.yml).

### Basic example

```yaml
on: push

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v1.0.0
      - uses: actions/setup-setup-dotnet@v1
      - uses: actions/setup-gitversion@v1.0.0
        with:
          gitversion-version: 5.1.1
      - run: GitVersion
```

## License

The scripts and documentation in this project are released under the [MIT license](LICENSE.md).

## Contributing

Check out [this doc](CONTRIBUTING.md).

## Current Status

This action is in active development.
