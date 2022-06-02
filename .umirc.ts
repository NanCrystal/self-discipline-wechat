import { defineConfig } from 'umi';
import routes from './config/router';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: routes,

  // routes: [
  //   { path: '/', component: '@/pages/index' },
  // ],
  fastRefresh: {},
  chainWebpack(memo) {
    memo.module
      .rule('media')
      .test(/\.(mp3|4)$/)
      .use('file-loader')
      .loader(require.resolve('file-loader'))
  }, 
});
