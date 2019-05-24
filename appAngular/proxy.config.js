const proxy = [
  {
    context: '/api',
    target: 'http://192.168.80.206:3000',
    pathRewrite: {'^/api' : ''}
  }
];
module.exports = proxy;
