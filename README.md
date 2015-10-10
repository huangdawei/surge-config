## Usage

`npm run build`

Check the `build/[currentTime]` folder

## Protected Configuration

`npm run build -- --protect`

Surge will mark this configuration file as protected, which prevents users from viewing or editing the configuration file. This is useful when you share your own proxy server with others.

## Config

- `surge.js`: the entry
- `configs.js`: .conf files to be generated and common sub-proxies in the config files
- `rules.js`: rules

## Custom Modules

Surge supports custom proxy modules, such as Shadowsocks.

## Screenshot

[Screenshot Of Surge Configs](http://d.pr/i/11qVY)
