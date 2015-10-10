/*
 * Config generator for Surge
 */
"use strict";
const fs = require('fs');
const configs = require('./configs.js');
const FILES = configs.FILES;
const SUB_PROXIES = configs.SUB_PROXIES;
const RULES = require('./rules.js').RULES;
const REQUIRE_PROTECTED = false;
const PROXY_TYPES = ['socks5', 'http', 'https', 'custom'];

let protect = process.argv.indexOf('--protect') !== -1 ? '#!REQUIRE-PROTECTED\n' : '';
let data;
let i, j, k;
let now;
let config;

fs.mkdir('build/', () => {
  let newDate = new Date();

  stringifyTime(newDate);

  fs.mkdir('build/' + now, () => {
    generatorConfigs();
  });
});

function generatorConfigs() {
  for (i=0; i<FILES.length; i++) {
    config = FILES[i];

    data = protect;

    data += '[General]';
    data += '\n';
    data += 'loglevel=';
    data += config.loglevel ? config.loglevel : 'notify';
    data += '\n';

    data += '\n';
    data += '[Proxy]';
    data += '\n';
    data += stringifyProxy(config.proxy);
    data += '\n';

    for (j=0; j<SUB_PROXIES.length; j++) {
      data += stringifyProxy(SUB_PROXIES[j]);
      data += '\n';
    }

    data += '\n';
    data += '[Rule]';
    data += '\n';

    for (k=0; k<RULES.length; k++) {
      if (config.global && RULES[k].type === 'direct') {
        continue;
      }
      if (RULES[k].desc) {
        data += '# ';
        data += RULES[k].desc;
        data += '\n';
      }
      data += stringifyRules(RULES[k].rules);
      if (k < RULES.length-1) {
        data += '\n';
      }
    }

    fs.writeFile(
      'build/' + now + '/' + config.name + '.conf',
      data,
      function (err) {
        if (err) throw err;
      }
    );
    console.log('New config file: ' + 'build/' + now + '/' + config.name + '.conf');
  }
}

function stringifyProxy(proxy) {
  let type = proxy.type.toLowerCase();
  if (PROXY_TYPES.indexOf(type) !== -1) {
    let data = proxy.name ? proxy.name : 'DEFAULT';

    data += '=';
    data += type;
    data += proxy.server ? ',' + proxy.server : '';
    data += proxy.port ? ',' + proxy.port : '';

    if (type === 'custom') {
      data += proxy.chiper ? ',' + proxy.chiper : '';
    }

    data += proxy.username ? ',' + proxy.username : '';
    data += proxy.password ? ',' + proxy.password : '';

    if (type === 'https') {
      data += proxy.chiper ? ',' + proxy.chiper : '';
    }

    if (type === 'custom') {
      data += proxy.module ? ',' + proxy.module : '';
    }

    return data;
  }
}

function stringifyRules(rules) {
  let data = '';
  let i;
  for (i=0; i<rules.length; i++) {
    data += rules[i];
    data += '\n';
  }
  return data;
}

function stringifyTime(newDate) {
  now = '';

  let year   = newDate.getFullYear();
  let month  = (newDate.getMonth() + 1);
  let day    = newDate.getDay();
  let hour   = newDate.getHours();
  let minute = newDate.getMinutes();
  let second = newDate.getSeconds();

  now += year;
  now += (month < 10) ? ('0' + month) : month;
  now += (day < 10) ? ('0' + day) : day;
  now += (hour < 10) ? ('0' + hour) : hour;
  now += (minute < 10) ? ('0' + minute) : minute;
  now += (second < 10) ? ('0' + second) : second;

  return now;
}
