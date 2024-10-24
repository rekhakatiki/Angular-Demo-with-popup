import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  selected = true;
  productList: any = [{
    brand: "Lenovo",
    modelName: "Ideapad3",
    screensize: "15.6 Inches",
    description: "Make a statement wherever you go with the IdeaPad Slim 3 laptop, built for lightness and thinness, measuring up to 10% slimmer than the previous generation. Available in Arctic Grey and Abyss Blue, this sturdy build stands up to harsh drops with military-grade durability for extreme travel conditions."
  },
  {
    brand: "HP",
    modelName: "HP 15.6 Touch-Screen Laptop",
    screensize: "15.6 Inches",
    description: "Power to do what matters most. The reliable processing power of an Intel processor, plus ample storage, powerful graphics and design with recycled materials, give you the power and capacity to do more."
  },
  {
    brand: "DELL",
    modelName: "Inspiron 15 Laptop",
    screensize: "15.6 Inches",
    description: "Your Inspiron 15 is EPEAT Silver certified, so you can feel good about your purchase. In addition, your laptop’s painted parts use low VOC (Volatile Organic Compounds) waterborne paint while the bottom cover incorporates post-consumer recycled plastics to help keep waste out of landfills."
  }
  ];
  selectedProduct: any;
  prdDetails: boolean = false;
  constructor(public router: Router, public dialog: MatDialog) { }
  viewDetails(product: any) {
    this.selectedProduct = product;
    this.prdDetails = true;
    this.selected = false
  }
  close() {
    const dialogRef = this.dialog.open(PopupComponent, {
      data: {
        message: "Sales startes from Tomorrow",
        buttonText: {
          cancel: 'Ok'
        }
      },
      width: '50%',
      height: '30%'
    });
    dialogRef.afterClosed().subscribe((res) => {
      this.router.navigate(['/home']);
    });
  }
  back() {
    this.prdDetails = false;
    this.selected = true;
  }
}
