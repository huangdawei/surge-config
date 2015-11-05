Ruqires Node.js v4.0.0+, Surge for iOS Build 294+

## Usage

`node surge.js`

Check the `build/[currentTime]` folder

## Protected Configuration

`node surge.js --protect`

Surge will mark this configuration file as protected, which prevents users from viewing or editing the configuration file. This is useful when you share your own proxy server with others.

## Custom

Do not edit `proxies.js` & `rules.js`, create your own `proxies.custom.js` & `rules.custom.js`.

- `proxies[.custom].js`: .conf files to be generated and common proxies in the config files
- `rules[.custom].js`: rules

## Custom Modules

Surge supports custom proxy modules, such as Shadowsocks.

## Screenshot

[Screenshot Of Surge Configs](http://d.pr/i/11qVY)
