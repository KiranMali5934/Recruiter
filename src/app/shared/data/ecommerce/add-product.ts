export interface staps {
    icon:string;
    mainTitle:string;
    subTitle:string;
    stepNumber:number;
}

export const AddProduct:staps[] = [
    {
        stepNumber:1,
        icon:'product-detail',
        mainTitle:'Add Product Details',
        subTitle:'Add Product name & details'
       },
       {
        stepNumber:2,
        icon:'product-gallery',
        mainTitle:'Product gallery',
        subTitle:'thumbnail & Add Product Gallery'
       },
       {
        stepNumber:3,
        icon:'product-category',
        mainTitle:'Product Categories',
        subTitle:'Add Product category, Status and Tags'
       },
       {
       stepNumber:4,
        icon:'pricing',
        mainTitle:'Selling prices',
        subTitle:'Add Product basic price & Discount'
       },
       {
        stepNumber:5,
        icon:'advance',
        mainTitle:'Advance',
        subTitle:'Add Meta details & Inventory details'
       },
]

export const advance =[
    {
        mainTitle:'inventory',
        stepNumber:6,
    },
    {
        mainTitle:'inventory',
        stepNumber:7,
    },
    {
        mainTitle:'inventory',
        stepNumber:8,
    },
]
