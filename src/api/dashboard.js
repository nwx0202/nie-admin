import request from '@/utils/axios'


export function getCards() {
  return request({
    url: '/dashboard/cards',
    method: 'get',
    data: ''
  });
}