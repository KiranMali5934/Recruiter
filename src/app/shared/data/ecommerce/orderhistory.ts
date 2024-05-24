export interface Order {
    id: number;
    name: string;
    img: string;
}

export interface ORDERS {
    id: number,
    product: string,
    status: string,
    productimg: string,
    color: string,
    size: string,
    articleNumber: number,
    units: number,
    price: string;
    class: string;
}


export const Neworders: Order[] = [
    {
        id: 1,
        name: 'Women Top',
        img: 'assets/images/ecommerce/product-table-6.png'
    },
    {
        id: 2,
        name: 'Women Shorts',
        img: 'assets/images/ecommerce/product-table-5.png'
    },
    {
        id: 3,
        name: 'Cyclamen',
        img: 'assets/images/ecommerce/product-table-4.png'

    },
    {
        id: 4,
        name: 'Men Solid Denim jacke',
        img: 'assets/images/ecommerce/product-table-3.png'

    },
    {
        id: 5,
        name: 'Blue shirt',
        img: 'assets/images/ecommerce/product-table-2.png'
    },
    {
        id: 6,
        name: 'red shirt',
        img: 'assets/images/ecommerce/product-table-1.png'
    },
    {
        id: 7,
        name: 'red shirt',
        img: 'assets/images/ecommerce/product-table-1.png'
    },
    {
        id: 8,
        name: 'Women Top',
        img: 'assets/images/ecommerce/product-table-6.png'
    },
    {
        id: 9,
        name: 'Women shorts',
        img: 'assets/images/ecommerce/product-table-5.png'
    },
]

export const CancelledOrders: Order[] = [
    {
        id: 1,
        name: 'Women Top',
        img: 'assets/images/ecommerce/product-table-6.png'
    },
    {
        id: 2,
        name: 'Women Shorts',
        img: 'assets/images/ecommerce/product-table-5.png'
    },
    {
        id: 3,
        name: 'Cyclamen',
        img: 'assets/images/ecommerce/product-table-4.png'

    },
    {
        id: 4,
        name: 'Men Solid Denim jacke',
        img: 'assets/images/ecommerce/product-table-3.png'

    },
    {
        id: 5,
        name: 'Blue shirt',
        img: 'assets/images/ecommerce/product-table-2.png'
    },
    {
        id: 6,
        name: 'red shirt',
        img: 'assets/images/ecommerce/product-table-1.png'
    },
    {
        id: 7,
        name: 'red shirt',
        img: 'assets/images/ecommerce/product-table-1.png'
    },
    {
        id: 8,
        name: 'Women Top',
        img: 'assets/images/ecommerce/product-table-6.png'
    },
    {
        id: 9,
        name: 'Women shorts',
        img: 'assets/images/ecommerce/product-table-5.png'
    },
]

export const ShippedOrders: Order[] = [
    {
        id: 1,
        name: 'Women Top',
        img: 'assets/images/ecommerce/product-table-6.png'
    },
    {
        id: 2,
        name: 'Women Shorts',
        img: 'assets/images/ecommerce/product-table-5.png'
    },
    {
        id: 3,
        name: 'Cyclamen',
        img: 'assets/images/ecommerce/product-table-4.png'

    },
    {
        id: 4,
        name: 'Men Solid Denim jacke',
        img: 'assets/images/ecommerce/product-table-3.png'

    },
    {
        id: 5,
        name: 'Blue shirt',
        img: 'assets/images/ecommerce/product-table-3.png'
    },
    {
        id: 6,
        name: 'red shirt',
        img: 'assets/images/ecommerce/product-table-2.png'
    },
    {
        id: 7,
        name: 'red shirt',
        img: 'assets/images/ecommerce/product-table-6.png'
    },
    {
        id: 8,
        name: 'Women Top',
        img: 'assets/images/ecommerce/product-table-5.png'
    },
    {
        id: 9,
        name: 'Women shorts',
        img: 'assets/images/ecommerce/product-table-1.png'
    },
]

export const orderHistory: ORDERS[] = [
    {
        id: 1,
        productimg: "assets/images/product/1.png",
        product: "Long Top",
        status: "Processing",
        size: " M",
        color: "Lavander",
        articleNumber: 4215738,
        class: 'process-circle',
        units: 1,
        price: '$21'
    },
    {
        id: 2,
        productimg: "assets/images/product/13.png",
        product: "Fancy watch",
        status: "Processing",
        size: "35mm",
        color: "Blue",
        articleNumber: 5476182,
        class: 'process-circle',
        units: 1,
        price: '$10'
    },
    {
        id: 3,
        productimg: "assets/images/product/4.png",
        product: "Man shoes",
        status: "Processing",
        size: "8",
        color: "Black & white",
        articleNumber: 1756457,
        class: 'process-circle',
        units: 1,
        price: '$18'
    },
    {
        id: 4,
        productimg: "assets/images/product/10.png",
        product: "Ledis side bag",
        status: "Shipped",
        size: "22cm x 18cm",
        color: "Brown",
        articleNumber: 7451725,
        class: 'process-circle shipped-order',
        units: 1,
        price: '$13'
    },
    {
        id: 5,
        productimg: "assets/images/product/12.png",
        product: "Ledis Slipper",
        status: "Shipped",
        size: "6",
        color: "Brown & white",
        articleNumber: 4127421,
        class: 'process-circle shipped-order',
        units: 1,
        price: '$6'
    },
    {
        id: 6,
        productimg: "assets/images/product/3.png",
        product: "Fancy ledis Jacket",
        status: "Shipped",
        size: "xl",
        color: "Light gray",
        articleNumber: 3581714,
        class: 'process-circle shipped-order',
        units: 1,
        price: '$24'
    },
    {
        id: 7,
        productimg: "assets/images/product/2.png",
        product: "Ledis Handbag",
        status: "Shipped",
        size: "25cm x 20cm",
        color: "Black",
        articleNumber: 67481429,
        class: 'process-circle shipped-order',
        units: 1,
        price: '$14'
    },
    {
        id: 8,
        productimg: "assets/images/product/15.png",
        product: "Iphone6 mobile",
        status: "Cancelled",
        size: "10cm x 15cm",
        color: "Black",
        articleNumber: 5748214,
        class: 'process-circle cancel-order',
        units: 1,
        price: '$25'
    },
    {
        id: 9,
        productimg: "assets/images/product/14.png",
        product: "Watch",
        status: "Cancelled",
        size: "27mm",
        color: "Brown",
        articleNumber: 247125,
        class: 'process-circle cancel-order',
        units: 1,
        price: '$12'
    },
    {
        id: 10,
        productimg: "assets/images/product/11.png",
        product: "Slipper",
        class: 'process-circle cancel-order',
        size: "6",
        color: "Blue",
        articleNumber: 8475112,
        status: "Cancelled",
        units: 1,
        price: '$6'
    },
]
