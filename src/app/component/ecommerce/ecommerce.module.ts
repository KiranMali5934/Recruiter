import { NgModule } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { AddProductComponent } from './add-product/add-product.component';
import { SharedModule } from '../../shared/shared.module'
import { BarRatingModule } from 'ngx-bar-rating';
import { NgxSliderModule } from 'ngx-slider-v2';

import { NgxDropzoneModule } from 'ngx-dropzone';
import { NgxPrintModule } from 'ngx-print';
import { TagInputModule } from 'ngx-chips';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { GalleryModule } from '@ks89/angular-modal-gallery';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { EcommerceRoutingModule } from './ecommerce-routing.module';

import { ProductsCategoriesComponent } from './add-product/products-categories/products-categories.component';
import { ProductsFormStepeComponent } from './add-product/products-form-stepe/products-form-stepe.component';
import { ProductsGalleryComponent } from './add-product/products-gallery/products-gallery.component';
import { AdvanceComponent } from './add-product/advance/advance.component';
import { AddProductsDetailsComponent } from './add-product/add-products-details/add-products-details.component';
import { SellingPriceComponent } from './add-product/selling-price/selling-price.component';
import { NewCategoriesComponent } from './add-product/products-categories/new-categories/new-categories.component';
import { AdditionalOptionsComponent } from './add-product/advance/additional-options/additional-options.component';
import { InventoryComponent } from './add-product/advance/inventory/inventory.component';
import { ShippingComponent } from './add-product/advance/shipping/shipping.component';
import { ProductComponent } from './product/product.component';
import { PorductPageComponent } from './porduct-page/porduct-page.component';
import { CategoryPageComponent } from './category-page/category-page.component';
import { ProductListComponent } from './product-list/product-list.component';
import { PaymentDetalisComponent } from './payment-detalis/payment-detalis.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { CartComponent } from './cart/cart.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { PricingComponent } from './pricing/pricing.component';
import { ProductListService } from '../../shared/services/ecommerce/product-list.service';
import { ProductListDirective } from '../../shared/directives/product-list.directive';
import { TopSectionComponent } from './product-list/top-section/top-section.component';
import { ProductDataTableComponent } from './product-list/product-data-table/product-data-table.component';
import { CategoryDataTableComponent } from './category-page/category-data-table/category-data-table.component';
import { CategoriesDirective } from '../../shared/directives/categories-page.directive';
import { CategoriesService } from '../../shared/services/ecommerce/categories-page.service';
import { BrandComponent } from './porduct-page/brand/brand.component';
import { DescriptionTabComponent } from './porduct-page/description-tab/description-tab.component';
import { DetailsComponent } from './porduct-page/details/details.component';
import { FilterComponent } from './product/filter/filter.component';
import { ProductBoxComponent } from './product/product-box/product-box.component';
import { QuickViewComponent } from './product/quick-view/quick-view.component';
import { CodComponent } from './payment-detalis/cod/cod.component';
import { CreditCardComponent } from './payment-detalis/credit-card/credit-card.component';
import { NetBankingComponent } from './payment-detalis/net-banking/net-banking.component';
import { DebitCardComponent } from './payment-detalis/debit-card/debit-card.component';
import { EmiComponent } from './payment-detalis/emi/emi.component';
import { BillingDetailsComponent } from './checkout/billing-details/billing-details.component';
import { ProductTotalComponent } from './checkout/product-total/product-total.component';
import { OrderDataTableComponent } from './order-history/order-data-table/order-data-table.component';
import { NewOrdersComponent } from './order-history/new-orders/new-orders.component';
import { ShippedOrdersComponent } from './order-history/shipped-orders/shipped-orders.component';
import { CancelledOrdersComponent } from './order-history/cancelled-orders/cancelled-orders.component';
import { OrderService } from '../../shared/services/ecommerce/order.service';
import { OrderdataTableDirective } from '../../shared/directives/orderdata.directive';

@NgModule({
  declarations: [
    AddProductComponent,
    ProductsCategoriesComponent,
    ProductsFormStepeComponent,
    ProductsGalleryComponent,
    AdvanceComponent,
    AddProductsDetailsComponent,
    SellingPriceComponent,
    NewCategoriesComponent,
    AdditionalOptionsComponent,
    InventoryComponent,
    ShippingComponent,
    ProductComponent,
    PorductPageComponent,
    CategoryPageComponent,
    ProductListComponent,
    PaymentDetalisComponent,
    OrderHistoryComponent,
    CartComponent,
    WishlistComponent,
    CheckoutComponent,
    PricingComponent,
    ProductListDirective,
    TopSectionComponent,
    ProductDataTableComponent,
    CategoryDataTableComponent,
    CategoriesDirective,
    BrandComponent,
    DescriptionTabComponent,
    DetailsComponent,
    FilterComponent,
    ProductBoxComponent,
    QuickViewComponent,
    CodComponent,
    CreditCardComponent,
    DebitCardComponent,
    NetBankingComponent,
    EmiComponent,
    BillingDetailsComponent,
    ProductTotalComponent,
    OrderDataTableComponent,
    NewOrdersComponent,
    ShippedOrdersComponent,
    CancelledOrdersComponent,
    OrderdataTableDirective
  ],
  imports: [
    CommonModule,
    EcommerceRoutingModule,
    ReactiveFormsModule,
    AngularEditorModule,
    BarRatingModule,
    NgxSliderModule,
    SharedModule,
    CarouselModule,
    FormsModule,
    NgxDropzoneModule,
    NgxPrintModule,
    NgbModule,
    GalleryModule,
    TagInputModule
  ],
  providers : [
   ProductListService,DecimalPipe ,CategoriesService , OrderService
 ]
})
export class EcommerceModule { }
