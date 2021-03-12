import request from '@/utils/request';

export function dashboardShopList(data) {
    return request({
        url: '/mall/hot_shop_list',
        method: 'get',
        data
    })
} 

export function dashboardCustomerList(data) {
    return request({
        url: '/mall/customer_interaction_list',
        method: 'get',
        data
    })
} 