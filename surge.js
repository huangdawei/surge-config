/*
 * Config generator for Surge
 */
"use strict";
let fs = require('fs');

const REQUIRE_PROTECTED = false;
const PROXY_TYPES = ['socks5', 'http', 'https', 'custom'];

let protect = process.argv.indexOf('--protect') !== -1 ? '#!REQUIRE-PROTECTED\n' : '';
let data;
let i, j, k;
let now;
let config;

let _files;
let _subProxies;
let _rules;

fs.stat('./proxies.custom.js', function(err, stats) {
  if(!err) {
    _files      = require('./proxies.custom.js').files;
    _subProxies = require('./proxies.custom.js').subProxies;
  } else {
    _files      = require('./proxies.js').files;
    _subProxies = require('./proxies.js').subProxies;
  }

  fs.access('./rules.custom.js', fs.R_OK, function(err) {
    if(!err) {
      _rules = require('./rules.custom.js').rules;
    } else {
      _rules = require('./rules.js').rules;
    }

    fs.mkdir('build/', () => {
      let newDate = new Date();

      stringifyTime(newDate);

      fs.mkdir('build/' + now, () => {
        generatorConfigs();
      });
    });

  });
});

function generatorConfigs() {
  for (i=0; i<_files.length; i++) {
    config = _files[i];

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

    for (j=0; j<_subProxies.length; j++) {
      data += stringifyProxy(_subProxies[j]);
      data += '\n';
    }

    data += '\n';
    data += '[Rule]';
    data += '\n';

    for (k=0; k<_rules.length; k++) {
      if (config.global && _rules[k].type === 'direct') {
        continue;
      }
      if (_rules[k].desc) {
        data += '# ';
        data += _rules[k].desc;
        data += '\n';
      }
      data += stringifyRules(_rules[k].rules);
      if (k < _rules.length-1) {
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
      data += proxy.cipher ? ',' + proxy.cipher : '';
    }

    data += proxy.username ? ',' + proxy.username : '';
    data += proxy.password ? ',' + proxy.password : '';

    if (type === 'https') {
      data += proxy.cipher ? ',' + proxy.cipher : '';
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
  let date   = newDate.getDate();
  let hour   = newDate.getHours();
  let minute = newDate.getMinutes();
  let second = newDate.getSeconds();

  now += year;
  now += (month < 10) ? ('0' + month) : month;
  now += (date < 10) ? ('0' + date) : date;
  now += (hour < 10) ? ('0' + hour) : hour;
  now += (minute < 10) ? ('0' + minute) : minute;
  now += (second < 10) ? ('0' + second) : second;

  return now;
}
