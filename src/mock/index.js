import Mock from 'mockjs'
import dashboardAPI from './dashboard'

Mock.setup({
  timeout: '100-5000'
});

Mock.mock(/\/dashboard\/cards/, 'get', dashboardAPI.getCards);

export default Mock