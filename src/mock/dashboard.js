import Mock from 'mockjs'

const Random = Mock.Random;
let list = [];
const count = 4;

for(let i = 0; i <= count; i++) {
  list.push({
    num: Random.integer(1, 999999),
    name: Random.string(3, 999)
  });
}

export default {
  // 首页 - 获取卡片信息
  getCards: () => {
    return {
      code: 200,
      data: {
        cards: list
      }
    }
  }
}
