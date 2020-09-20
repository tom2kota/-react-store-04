import imageProductCategory1 from '../../images/09.png'
import imageProductCategory2 from '../../images/02.png'
import imageProductCategory3 from '../../images/03.png'

export const SHOP_DATA = [
    {
        id: 1,
        title: 'Product Category #1',
        routeName: 'product_category_1',
        items: [
            {
                id: '1_1',
                name: 'Product #1-1',
                image: imageProductCategory1,
                price: 10
            },
            {
                id: '1_2',
                name: 'Product #1-2',
                image: imageProductCategory1,
                price: 20
            },
            {
                id: '1_3',
                name: 'Product #1-3',
                image: imageProductCategory1,
                price: 30
            }

        ]
    },
    {
        id: 2,
        title: 'Product Category #2',
        routeName: 'product_category_2',
        items: [
            {
                id: '2_1',
                name: 'Product #2-1',
                image: imageProductCategory2,
                price: 10
            },
            {
                id: '2_2',
                name: 'Product #2-2',
                image: imageProductCategory2,
                price: 20
            },
            {
                id: '2_3',
                name: 'Product #2-3',
                image: imageProductCategory2,
                price: 30
            }

        ]
    },
    {
        id: 3,
        title: 'Product Category #3',
        routeName: 'product_category_3',
        items: [
            {
                id: '3_1',
                name: 'Product #3-1',
                image: imageProductCategory3,
                price: 10
            },
            {
                id: '3_2',
                name: 'Product #3-2',
                image: imageProductCategory3,
                price: 20
            },
            {
                id: '3_3',
                name: 'Product #3-3',
                image: imageProductCategory3,
                price: 30
            }

        ]
    }

]