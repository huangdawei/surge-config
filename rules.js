module.exports = {
  /*
   * Rule
   * [type](string) if the value == 'directt', rules in its section will be omitted for Global config
   * [desc](string) comment
   * rules(array) rules
   */
  rules: [
    {
      type: 'direct',
      desc: 'Bypass the most visited site in China',
      rules: [
        'DOMAIN-SUFFIX,cn,DIRECT',
        'DOMAIN-SUFFIX,126.com,DIRECT',
        'DOMAIN-SUFFIX,163.com,DIRECT',
        'DOMAIN-SUFFIX,56.com,DIRECT',
        'DOMAIN-SUFFIX,58.com,DIRECT',
        'DOMAIN-SUFFIX,acfun.tv,DIRECT',
        'DOMAIN-SUFFIX,alicdn.com,DIRECT',
        'DOMAIN-SUFFIX,alipay.com,DIRECT',
        'DOMAIN-SUFFIX,alipayobjects.com,DIRECT',
        'DOMAIN-SUFFIX,aliyun.com,DIRECT',
        'DOMAIN-SUFFIX,amap.com,DIRECT',
        'DOMAIN-SUFFIX,autohome.com.cn,DIRECT',
        'DOMAIN-SUFFIX,baidu.com,DIRECT',
        'DOMAIN-SUFFIX,baixing.com,DIRECT',
        'DOMAIN-SUFFIX,bdstatic.com,DIRECT',
        'DOMAIN-SUFFIX,bdimg.com,DIRECT',
        'DOMAIN-SUFFIX,bilibili.com,DIRECT',
        'DOMAIN-SUFFIX,cmbchina.com,DIRECT',
        'DOMAIN-SUFFIX,cnzz.com,DIRECT',
        'DOMAIN-SUFFIX,ctrip.cn,DIRECT',
        'DOMAIN-SUFFIX,ctrip.com,DIRECT',
        'DOMAIN-SUFFIX,cctv.com,DIRECT',
        'DOMAIN-SUFFIX,dangdang.com,DIRECT',
        'DOMAIN-SUFFIX,dianping.com,DIRECT',
        'DOMAIN-SUFFIX,duotai.org,DIRECT',
        'DOMAIN-SUFFIX,ganji.com,DIRECT',
        'DOMAIN-SUFFIX,gtimg.com,DIRECT',
        'DOMAIN-SUFFIX,id1.cn,DIRECT',
        'DOMAIN-SUFFIX,iqiyi.com,DIRECT',
        'DOMAIN-SUFFIX,meituan.com,DIRECT',
        'DOMAIN-SUFFIX,netease.com,DIRECT',
        'DOMAIN-SUFFIX,nuomi.com,DIRECT',
        'DOMAIN-SUFFIX,jd.com,DIRECT',
        'DOMAIN-SUFFIX,jumei.com,DIRECT',
        'DOMAIN-SUFFIX,kankan.com,DIRECT',
        'DOMAIN-SUFFIX,letv.com,DIRECT',
        'DOMAIN-SUFFIX,pptv.com,DIRECT',
        'DOMAIN-SUFFIX,qq.com,DIRECT',
        'DOMAIN-SUFFIX,qunar.com,DIRECT',
        'DOMAIN-SUFFIX,sina.com,DIRECT',
        'DOMAIN-SUFFIX,sina.com.cn,DIRECT',
        'DOMAIN-SUFFIX,sinaimg.cn,DIRECT',
        'DOMAIN-SUFFIX,sinajs.cn,DIRECT',
        'DOMAIN-SUFFIX,sogou.com,DIRECT',
        'DOMAIN-SUFFIX,sohu.com,DIRECT',
        'DOMAIN-SUFFIX,soso.com,DIRECT',
        'DOMAIN-SUFFIX,suning.com,DIRECT',
        'DOMAIN-SUFFIX,t.cn,DIRECT',
        'DOMAIN-SUFFIX,tanx.com,DIRECT',
        'DOMAIN-SUFFIX,taobao.com,DIRECT',
        'DOMAIN-SUFFIX,tmall.com,DIRECT',
        'DOMAIN-SUFFIX,tudou.com,DIRECT',
        'DOMAIN-SUFFIX,weibo.com,DIRECT',
        'DOMAIN-SUFFIX,weixin.com,DIRECT',
        'DOMAIN-SUFFIX,vip.com,DIRECT',
        'DOMAIN-SUFFIX,youku.com,DIRECT',
        'DOMAIN-SUFFIX,xiaomi.com,DIRECT',
        'DOMAIN-SUFFIX,xici.net,DIRECT',
        'DOMAIN-SUFFIX,xunlei.com,DIRECT',
        'DOMAIN-SUFFIX,zhihu.com,DIRECT',
        'DOMAIN-SUFFIX,zqt.pw,DIRECT',
        'DOMAIN-SUFFIX,zuiqt.com,DIRECT'
      ]
    },
    {
      desc: 'Block Ads, privacy trackers & malicious codes',
      rules: [
        'DOMAIN-SUFFIX,icloud-analysis.com,REJECT',
        'DOMAIN-SUFFIX,umeng.co,REJECT',
        'DOMAIN-SUFFIX,log.mmstat.com,REJECT',
        'DOMAIN-SUFFIX,monitor.uu.qq.com,REJECT',
        'DOMAIN-SUFFIX,beacon.qq.com,REJECT',
        'DOMAIN-SUFFIX,pingma.qq.com,REJECT',
        'DOMAIN-SUFFIX,adinfuse.com,REJECT',
        'DOMAIN-SUFFIX,admob.com,REJECT',
        'DOMAIN-SUFFIX,adwhirl.com,REJECT',
        'DOMAIN-SUFFIX,appads.com,REJECT',
        'DOMAIN-SUFFIX,doubleclick.net,REJECT',
        'DOMAIN-SUFFIX,inmobi.com,REJECT',
        'DOMAIN-SUFFIX,smartadserver.com,REJECT'
      ]
    },
    {
      desc: 'Split the region required services',
      rules: [
        'DOMAIN-SUFFIX,linode.com,JP',
        'DOMAIN-SUFFIX,pandora.com,US'
      ]
    },
    {
      desc: 'Apple services',
      rules: [
        '# DOMAIN-SUFFIX,appldnld.apple.com,DIRECT',
        '# DOMAIN-SUFFIX,adcdownload.apple.com,DIRECT',
        '# DOMAIN-SUFFIX,swcdn.apple.com,DIRECT',
        '# DOMAIN-SUFFIX,phobos.apple.com,DIRECT',
        'DOMAIN-SUFFIX,apple.com,DEFAULT',
        'DOMAIN-SUFFIX,icloud.com,DEFAULT',
        'DOMAIN-SUFFIX,itunes.com,DEFAULT',
        'DOMAIN-SUFFIX,mzstatic.com,DEFAULT'
      ]
    },
    {
      desc: 'Workaround for some apps',
      rules: [
        '# Telegram',
        'IP-CIDR,91.108.56.0/22,DEFAULT,no-resolve',
        'IP-CIDR,91.108.4.0/22,DEFAULT,no-resolve',
        'IP-CIDR,109.239.140.0/24,DEFAULT,no-resolve',
        'IP-CIDR,149.154.160.0/20,DEFAULT,no-resolve'
      ]
    },
    {
      desc: 'Force remote DNS',
      rules: [
        'DOMAIN-KEYWORD,google,US,force-remote-dns',
        'DOMAIN-KEYWORD,facebook,DEFAULT,force-remote-dns',
        'DOMAIN-KEYWORD,youtube,DEFAULT,force-remote-dns',
        'DOMAIN-KEYWORD,twitter,DEFAULT,force-remote-dns',
        'DOMAIN-KEYWORD,instagram,DEFAULT,force-remote-dns',
        'DOMAIN-KEYWORD,gmail,DEFAULT,force-remote-dns',
        'DOMAIN-KEYWORD,blogspot,DEFAULT,force-remote-dns',
        'DOMAIN-SUFFIX,twimg.com,DEFAULT,force-remote-dns'
      ]
    },
    {
      desc: 'Proxy domains constantly polluted by GFW while resolving DNS',
      rules: [
        'DOMAIN-SUFFIX,amazonaws.com,DEFAULT',
        'DOMAIN-SUFFIX,android.com,DEFAULT',
        'DOMAIN-SUFFIX,angularjs.org,DEFAULT',
        'DOMAIN-SUFFIX,appspot.com,DEFAULT',
        'DOMAIN-SUFFIX,akamaihd.net,DEFAULT',
        'DOMAIN-SUFFIX,amazon.com,DEFAULT',
        'DOMAIN-SUFFIX,bigfools.com,DEFAULT',
        'DOMAIN-SUFFIX,bit.ly,DEFAULT',
        'DOMAIN-SUFFIX,bitbucket.org,DEFAULT',
        'DOMAIN-SUFFIX,blog.com,DEFAULT',
        'DOMAIN-SUFFIX,blogcdn.com,DEFAULT',
        'DOMAIN-SUFFIX,blogger.com,DEFAULT',
        'DOMAIN-SUFFIX,blogsmithmedia.com,DEFAULT',
        'DOMAIN-SUFFIX,box.net,DEFAULT',
        'DOMAIN-SUFFIX,bloomberg.com,DEFAULT',
        'DOMAIN-SUFFIX,chromium.org,DEFAULT',
        'DOMAIN-SUFFIX,cl.ly,DEFAULT',
        'DOMAIN-SUFFIX,cloudfront.net,DEFAULT',
        'DOMAIN-SUFFIX,cloudflare.com,DEFAULT',
        'DOMAIN-SUFFIX,cocoapods.org,DEFAULT',
        'DOMAIN-SUFFIX,crashlytics.com,DEFAULT',
        'DOMAIN-SUFFIX,d.pr,DEFAULT',
        'DOMAIN-SUFFIX,dribbble.com,DEFAULT',
        'DOMAIN-SUFFIX,dropbox.com,DEFAULT',
        'DOMAIN-SUFFIX,dropboxstatic.com,DEFAULT',
        'DOMAIN-SUFFIX,dropboxusercontent.com,DEFAULT',
        'DOMAIN-SUFFIX,docker.com,DEFAULT',
        'DOMAIN-SUFFIX,duckduckgo.com,DEFAULT',
        'DOMAIN-SUFFIX,digicert.com,DEFAULT',
        'DOMAIN-SUFFIX,dropcam.com,DEFAULT',
        'DOMAIN-SUFFIX,dnsimple.com,DEFAULT',
        'DOMAIN-SUFFIX,edgecastcdn.net,DEFAULT',
        'DOMAIN-SUFFIX,engadget.com,DEFAULT',
        'DOMAIN-SUFFIX,eurekavpt.com,DEFAULT',
        'DOMAIN-SUFFIX,edgekey.net,DEFAULT',
        'DOMAIN-SUFFIX,fb.com,DEFAULT',
        'DOMAIN-SUFFIX,fb.me,DEFAULT',
        'DOMAIN-SUFFIX,fbcdn.net,DEFAULT',
        'DOMAIN-SUFFIX,fc2.com,DEFAULT',
        'DOMAIN-SUFFIX,feedburner.com,DEFAULT',
        'DOMAIN-SUFFIX,fabric.io,DEFAULT',
        'DOMAIN-SUFFIX,flickr.com,DEFAULT',
        'DOMAIN-SUFFIX,fastly.net,DEFAULT',
        'DOMAIN-SUFFIX,ggpht.com,DEFAULT',
        'DOMAIN-SUFFIX,github.com,DEFAULT',
        'DOMAIN-SUFFIX,github.io,DEFAULT',
        'DOMAIN-SUFFIX,githubusercontent.com,DEFAULT',
        'DOMAIN-SUFFIX,gmail.com,DEFAULT',
        'DOMAIN-SUFFIX,golang.org,DEFAULT',
        'DOMAIN-SUFFIX,goo.gl,DEFAULT',
        'DOMAIN-SUFFIX,gstatic.com,DEFAULT',
        'DOMAIN-SUFFIX,godaddy.com,DEFAULT',
        'DOMAIN-SUFFIX,gravatar.com,DEFAULT',
        'DOMAIN-SUFFIX,hootsuite.com,DEFAULT',
        'DOMAIN-SUFFIX,imageshack.us,DEFAULT',
        'DOMAIN-SUFFIX,iphone-dev.org,DEFAULT',
        'DOMAIN-SUFFIX,imgur.com,DEFAULT',
        'DOMAIN-SUFFIX,instagram.com,DEFAULT',
        'DOMAIN-SUFFIX,jshint.com,DEFAULT',
        'DOMAIN-SUFFIX,ift.tt,DEFAULT',
        'DOMAIN-SUFFIX,itunes.com,DEFAULT',
        'DOMAIN-SUFFIX,j.mp,DEFAULT',
        'DOMAIN-SUFFIX,kat.cr,DEFAULT',
        'DOMAIN-SUFFIX,linode.com,DEFAULT',
        'DOMAIN-SUFFIX,linkedin.com,DEFAULT',
        'DOMAIN-SUFFIX,licdn.com,DEFAULT',
        'DOMAIN-SUFFIX,lithium.com,DEFAULT',
        'DOMAIN-SUFFIX,megaupload.com,DEFAULT',
        'DOMAIN-SUFFIX,mobile01.com,DEFAULT',
        'DOMAIN-SUFFIX,modmyi.com,DEFAULT',
        'DOMAIN-SUFFIX,mzstatic.com,DEFAULT',
        'DOMAIN-SUFFIX,nytimes.com,DEFAULT',
        'DOMAIN-SUFFIX,name.com,DEFAULT',
        'DOMAIN-SUFFIX,openvpn.net,DEFAULT',
        'DOMAIN-SUFFIX,openwrt.org,DEFAULT',
        'DOMAIN-SUFFIX,ow.ly,DEFAULT',
        'DOMAIN-SUFFIX,pinboard.in,DEFAULT',
        'DOMAIN-SUFFIX,path.com,DEFAULT',
        'DOMAIN-SUFFIX,DEFAULTl-images-amazon.com,DEFAULT',
        'DOMAIN-SUFFIX,slideshare.net,DEFAULT',
        'DOMAIN-SUFFIX,DEFAULTtatic.net,DEFAULT',
        'DOMAIN-SUFFIX,stackoverflow.com,DEFAULT',
        'DOMAIN-SUFFIX,staticflickr.com,DEFAULT',
        'DOMAIN-SUFFIX,sonyentertainmentnetwork.com,DEFAULT',
        'DOMAIN-SUFFIX,squarespace.com,DEFAULT',
        'DOMAIN-SUFFIX,symcd.com,DEFAULT',
        'DOMAIN-SUFFIX,symcb.com,DEFAULT',
        'DOMAIN-SUFFIX,symauth.com,DEFAULT',
        'DOMAIN-SUFFIX,ubnt.com,DEFAULT',
        'DOMAIN-SUFFIX,t.co,DEFAULT',
        'DOMAIN-SUFFIX,thepiratebay.org,DEFAULT',
        'DOMAIN-SUFFIX,tumblr.com,DEFAULT',
        'DOMAIN-SUFFIX,twimg.com,DEFAULT',
        'DOMAIN-SUFFIX,twitch.tv,DEFAULT',
        'DOMAIN-SUFFIX,twitter.com,DEFAULT',
        'DOMAIN-SUFFIX,usefedora.com,DEFAULT',
        'DOMAIN-SUFFIX,wikipedia.com,DEFAULT',
        'DOMAIN-SUFFIX,wikipedia.org,DEFAULT',
        'DOMAIN-SUFFIX,wikimedia.org,DEFAULT',
        'DOMAIN-SUFFIX,wordpreDEFAULT.com,DEFAULT',
        'DOMAIN-SUFFIX,wsj.com,DEFAULT',
        'DOMAIN-SUFFIX,wsj.net,DEFAULT',
        'DOMAIN-SUFFIX,wp.com,DEFAULT',
        'DOMAIN-SUFFIX,vimeo.com,DEFAULT',
        'DOMAIN-SUFFIX,youtu.be,DEFAULT',
        'DOMAIN-SUFFIX,ytimg.com,DEFAULT'
      ]
    },
    {
      desc: 'LAN',
      rules: [
        'IP-CIDR,192.168.0.0/16,DIRECT,no-resolve',
        'IP-CIDR,10.0.0.0/8,DIRECT,no-resolve',
        'IP-CIDR,172.16.0.0/12,DIRECT,no-resolve'
      ]
    },
    {
      type: 'direct',
      rules: [
        'GEOIP,CN,DIRECT'
      ]
    },
    {
      rules: [
        'FINAL,DEFAULT'
      ]
    }
  ]
}
