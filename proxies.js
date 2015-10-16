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
      proxy: {
        type: 'socks5',
        server: '127.0.0.1',
        port: 6443
      }
    },
    {
      name: 'HTTP-HK',
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
      proxy: {
        type: 'custom',
        server: '127.0.0.1',
        port: 443,
        cipher: 'rc4-md5',
        password: 'password',
        module: 'http://surge.run/SSEncrypt.module',
        tcpFastOpen: false
      }
    }
  ],

  subPorxies: [
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
