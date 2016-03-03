const skipProxy = [
  '192.168.0.0/16',
  '10.0.0.0/8',
  '172.16.0.0/12',
  '100.64.0.0/10',
  'localhost',
  '*.local'
];
const bypassTun = [
  '192.168.0.0/16',
  '10.0.0.0/8',
  '172.16.0.0/12'
];
const dnsServer = [
  '119.29.29.29',
  '223.5.5.5',
  '114.114.114.114',
  '8.8.8.8',
  '8.8.4.4'
];

module.exports = {
  /*
   * The .conf files will be generated
   * - name (string) file name
   * - [loglevel] (string) one of 'verbose', 'info', 'notify' or 'warning'. Default: 'notify'
   * - [global] (boolean) whether import rules match the policy of DIRECT
   * - proxy (json) the DEFAULT proxy in the config file
   * - [proxy.cipher] (string) only for HTTPS & Shadowsocks mode
   */
  files: [
    {
      name: 'SOCKS5-HK',
      loglevel: 'notify',
      bypassSystem: false,
      skipProxy: skipProxy,
      bypassTun: bypassTun,
      dnsServer: dnsServer,
      proxy: {
        type: 'socks5',
        server: '127.0.0.1',
        port: 6443
      }
    },
    {
      name: 'HTTP-HK',
      skipProxy: skipProxy,
      bypassTun: bypassTun,
      dnsServer: dnsServer,
      proxy: {
        type: 'http',
        server: '127.0.0.1',
        port: 80,
        username: 'username',
        password: 'password'
      }
    },
    {
      name: 'HTTPS-HK',
      skipProxy: skipProxy,
      bypassTun: bypassTun,
      dnsServer: dnsServer,
      proxy: {
        type: 'https',
        server: '127.0.0.1',
        port: 443,
        username: 'username',
        password: 'password',
        cipher: 'TLS_RSA_WITH_AES_128_GCM_SHA256'
      }
    },
    {
      name: 'HTTPS-HK-Global',
      skipProxy: skipProxy,
      bypassTun: bypassTun,
      dnsServer: dnsServer,
      global: true,
      proxy: {
        type: 'https',
        server: '127.0.0.1',
        port: 443,
        username: 'username',
        password: 'password',
        cipher: 'TLS_RSA_WITH_AES_128_GCM_SHA256'
      }
    },
    {
      name: 'SS-HK',
      skipProxy: skipProxy,
      bypassTun: bypassTun,
      dnsServer: dnsServer,
      proxy: {
        type: 'custom',
        server: '127.0.0.1',
        port: 443,
        cipher: 'rc4-md5',
        password: 'password',
        module: 'https://ealoop.gfw.io:3443/SSEncrypt.module',
        tcpFastOpen: false
      }
    }
  ],

  subProxies: [
    {
      name: 'JP',
      type: 'https',
      server: '127.0.0.1',
      port: 443,
      username: 'username',
      password: 'password',
      cipher: 'TLS_RSA_WITH_AES_128_GCM_SHA256'
    },
    {
      name: 'US',
      type: 'https',
      server: '127.0.0.1',
      port: 443,
      username: 'username',
      password: 'password',
      cipher: 'TLS_RSA_WITH_AES_128_GCM_SHA256'
    }
  ]
}
