/*
class Product{
    constructor(brand,price,model){
        ////object initialization logic
        this.brand=brand;
        this.price=price;
        this.model=model;
        //this.basic=basic;
    }
    getDiscountPrice(discount){
        //discount
        this.discount=discount*this.price;
        
        console.log(this.discount);
    }

}
let Product1=new Product("brand1",1000,"model1");
Product1.getDiscountPrice(0.15);
let Product2=new Product("brand2",1000,"model2");
Product2.getDiscountPrice(0.1);
let Product3=new Product("brand3",1000,"model3");
Product3.getDiscountPrice(0.2);
let Product4=new Product("brand4",1000,"model4");
Product4.getDiscountPrice(2.0);
let Product5=new Product("brand5",1000,"model5");
Product5.getDiscountPrice(3.0);
*/

function Product(brand,price,model){
        ////object initialization logic
        this.brand=brand;
        this.price=price;
        this.model=model;
        //this.basic=basic;
    }

Product.prototype.getDiscountPrice=function(discount){
        //discount
        this.discount=discount*this.price;
        
        console.log(this.discount);
    }
let Product1=new Product("brand1",1000,"model1");
Product1.getDiscountPrice(0.15);
let Product2=new Product("brand2",1000,"model2");
Product2.getDiscountPrice(0.1);
let Product3=new Product("brand3",1000,"model3");
Product3.getDiscountPrice(0.2);
let Product4=new Product("brand4",1000,"model4");
Product4.getDiscountPrice(2.0);
let Product5=new Product("brand5",1000,"model5");
Product5.getDiscountPrice(3.0);


