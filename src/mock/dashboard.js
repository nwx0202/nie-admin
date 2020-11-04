import Mock from 'mockjs'

const Random = Mock.Random;

const cardNames = ['New Visits', 'Messages', 'Purchases', 'Shoppings'];
// const cardIcon = [];
let list = [];
const count = 4;

for(let i = 0; i < count; i++) {
  list.push(Mock.mock({
    num: Random.integer(1, 999999),
    'name|+1': cardNames
  }));
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
