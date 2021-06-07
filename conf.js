jsproxy_config({
  ver: '110',

  static_boost: {
    enable: true,
    ver: 62
  },

  node_map: {
    'demo-hk': {
      label: 'demo-hk',
      lines: {
        'node-aliyun-hk-1.etherdream.com:8443': 1,
        'node-aliyun-hk-2.etherdream.com:8443': 2,
      }
    },
    'demo-sg': {
      label: 'demo-sg',
      lines: {
        'node-aliyun-sg.etherdream.com:8443': 1,
      },
    },
    'mysite': {
      label: 'new',
      lines: {
        [location.host]: 1,
      }
    },
    'cfworker': {
      label: '',
      hidden: true,
      lines: {
      }
    }
  },

  node_default: 'mysite',
  node_acc: 'cfworker',
  assets_cdn: 'assets/',
  index_path: 'index_v3.html',
  direct_host_list: 'cors_v1.txt',
  inject_html: '<!-- custom html -->',

  url_handler: {
    'http://lol.com/': {
      content: 'Hello World'
    },
  }
})
