import { foodItem } from "./fooditem.js";

console.log(foodItem);

function displayItems (){
    var cripsy= document.getElementById('cripsy');
    var stuffed= document.getElementById('stuffed');
    var glutenFree= document.getElementById('glutenfree');
    var toppinggs= document.getElementById('toppings');
    
    
    const cripsyData= foodItem.filter(item=> item.category== 'cripsy' );
    console.log(cripsyData);
    const stuffedData= foodItem.filter(item=> item.category== 'stuffed' );
    console.log(stuffedData);
    const glutenFreeData= foodItem.filter(item=> item.category== 'glutenfree' );
    console.log(glutenFreeData);
    const toppingsData= foodItem.filter(item=> item.category== 'toppings' );
    console.log(glutenFreeData);

    cripsyData.map(item=> {
        var itemCard= document.createElement('div');
        itemCard.setAttribute('id','item-card');

        var cardTop= document.createElement('div');
        cardTop.setAttribute('id','card-top'); 
        
        var star= document.createElement('i');
        star.setAttribute('class','fa fa-star');
        star.setAttribute('id','rating');
        star.innerText= ''+ item.rating;
        
        var heart= document.createElement('i');
        heart.setAttribute('class','fa fa-heart add-to-cart');
        heart.setAttribute('id',item.id);
       
        cardTop.appendChild(star);
        cardTop.appendChild(heart);

        var img= document.createElement('img');
        img.src= item.img;

        var itemName= document.createElement('p');
        itemName.setAttribute('id','item-name');
        itemName.innerText=item.name;
        
        var itemPrice= document.createElement('p');
        itemPrice.setAttribute('id','item-price');
        itemPrice.innerText= 'Price : $' + item.price;
        
        itemCard.appendChild(cardTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);

        cripsy.appendChild(itemCard);
    })  
    stuffedData.map(item=>{
        var itemCard= document.createElement('div');
        itemCard.setAttribute('id','item-card');

        var cardTop= document.createElement('div');
        cardTop.setAttribute('id','card-top'); 
        
        var star= document.createElement('i');
        star.setAttribute('class','fa fa-star');
        star.setAttribute('id','rating');
        star.innerText= ''+ item.rating;
        
        var heart= document.createElement('i');
        heart.setAttribute('class','fa fa-heart add-to-cart');
        heart.setAttribute('id',item.id);
       
        cardTop.appendChild(star);
        cardTop.appendChild(heart);

        var img= document.createElement('img');
        img.src= item.img;

        var itemName= document.createElement('p');
        itemName.setAttribute('id','item-name');
        itemName.innerText=item.name;
        
        var itemPrice= document.createElement('p');
        itemPrice.setAttribute('id','item-price');
        itemPrice.innerText= 'Price : $' + item.price;
        
        itemCard.appendChild(cardTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);

        stuffed.appendChild(itemCard);
    }) 
    glutenFreeData.map(item=>{
      var itemCard= document.createElement('div');
      itemCard.setAttribute('id','item-card');

      var cardTop= document.createElement('div');
      cardTop.setAttribute('id','card-top'); 
      
      var star= document.createElement('i');
      star.setAttribute('class','fa fa-star');
      star.setAttribute('id','rating');
      star.innerText= ''+ item.rating;
      
      var heart= document.createElement('i');
      heart.setAttribute('class','fa fa-heart add-to-cart');
      heart.setAttribute('id',item.id);
     
      cardTop.appendChild(star);
      cardTop.appendChild(heart);

      var img= document.createElement('img');
      img.src= item.img;

      var itemName= document.createElement('p');
      itemName.setAttribute('id','item-name');
      itemName.innerText=item.name;
      
      var itemPrice= document.createElement('p');
      itemPrice.setAttribute('id','item-price');
      itemPrice.innerText= 'Price : $' + item.price;
      
      itemCard.appendChild(cardTop);
      itemCard.appendChild(img);
      itemCard.appendChild(itemName);
      itemCard.appendChild(itemPrice);

      glutenFree.appendChild(itemCard);
  })
   toppingsData.map(item=>{
    var itemCard= document.createElement('div');
    itemCard.setAttribute('id','item-card');

    var cardTop= document.createElement('div');
    cardTop.setAttribute('id','card-top'); 
    
    var star= document.createElement('i');
    star.setAttribute('class','fa fa-star');
    star.setAttribute('id','rating');
    star.innerText= ''+ item.rating;
    
    var heart= document.createElement('i');
    heart.setAttribute('class','fa fa-heart add-to-cart');
    heart.setAttribute('id',item.id);
   
    cardTop.appendChild(star);
    cardTop.appendChild(heart);

    var img= document.createElement('img');
    img.src= item.img;

    var itemName= document.createElement('p');
    itemName.setAttribute('id','item-name');
    itemName.innerText=item.name;
    
    var itemPrice= document.createElement('p');
    itemPrice.setAttribute('id','item-price');
    itemPrice.innerText= 'Price : $' + item.price;
    
    itemCard.appendChild(cardTop);
    itemCard.appendChild(img);
    itemCard.appendChild(itemName);
    itemCard.appendChild(itemPrice);

    toppings.appendChild(itemCard);
})
}
displayItems();

const categoryListData= [...new Map(foodItem.map(item=>[item['category'],item])).values()];
console.log(categoryListData);

function categoryLists(){
    var categoryList= document.getElementById('category-list');

    categoryListData.map(item => {
        var listCard= document.createElement('div');
        listCard.setAttribute('class','list-card');

        var listImg= document.createElement('img');
        listImg.src= item.img;

        var listName= document.createElement('a');
        listName.setAttribute('class','list-name');
        listName.innerText= item.category;
        listName.setAttribute('href','#'+item.category);


        listCard.appendChild(listImg);
        listCard.appendChild(listName);

        var cloneListCard= listCard.cloneNode(true);
        categoryList.appendChild(listCard);
     //    document.querySelector('.category-header').appendChild(cloneListCard);
    })
}

categoryLists();
    

   document.querySelectorAll('.add-to-cart').forEach(item=> {
        item.addEventListener('click',addToCart);
})
 
var cartData = [];

function addToCart(){
    console.log(this.parentNode.nextSibling.nextSibling);
    var itemToAdd= this.parentNode.nextSibling.nextSibling.innerText;
    var itemObj= foodItem.find(element=>element.name==itemToAdd);

    console.log(itemObj);

    var index= cartData.indexOf(itemObj);
    if(index=== -1){
        document.getElementById(itemObj.id).classList.add('toggle-heart');
        cartData= [...cartData,itemObj];
        console.log(cartData);
    }
    else if(index > -1){
        alert("Added to cart");
    }
    document.getElementById('cart-plus').innerText=' ' +cartData.length + ' Items';
    // document.getElementById('m-cart-plus').innerText= ' ' +cartData.length;
    totalAmount();
    cartItems();
}
function cartItems(){
  var tableBody= document.getElementById('table-body');
  tableBody.innerHTML= '';

  cartData.map(item=> {
      var tableRow= document.createElement('tr');

      var rowData1= document.createElement('td');
      var img= document.createElement('img');
      img.src= item.img;
      rowData1.appendChild(img);

      var rowData2= document.createElement('td');
      rowData2.innerText= item.name;
      
      var rowData3= document.createElement('td');
      var btn1= document.createElement('button');
      btn1.setAttribute('class','decrease-item');
      btn1.innerHTML= '-';
      var span= document.createElement('span');
      span.innerText= item.quantity;
      var btn2= document.createElement('button');
      btn2.setAttribute('class','increase-item');
      btn2.innerText= '+';

      rowData3.appendChild(btn1);
            rowData3.appendChild(span);
            rowData3.appendChild(btn2);

            var  rowData4= document.createElement('td');
            rowData4.innerText= item.price;

            tableRow.appendChild(rowData1);
            tableRow.appendChild(rowData2);
            tableRow.appendChild(rowData3);
            tableRow.appendChild(rowData4);

            tableBody.appendChild(tableRow);
        })
        
        document.querySelectorAll('.increase-item').forEach(item=> {
          item.addEventListener('click',incrementItem);
      })
      document.querySelectorAll('.decrease-item').forEach(item=> { 
          item.addEventListener('click',decrementItem);
      })
  }
  var currPrice= 0;

  function incrementItem(){
      let itemToInc= this.parentNode.previousSibling.innerText;
      console.log(itemToInc);

      var incObj= cartData.find(element=>element.name= itemToInc);
      incObj.quantity+= 1;

      currPrice= (incObj.price*incObj.quantity - incObj.price*(incObj.quantity-1))/(incObj.quantity-1);

      incObj.price= currPrice*incObj.quantity;
      totalAmount();
      cartItems();
  }
      var flag= false;
  function decrementItem(){
      let itemToDec= this.parentNode.previousSibling.innerText;
      let decObj= cartData.find(element=> element.name== itemToDec);
      let ind=cartData.indexOf(decObj);
      if(decObj.quantity > 1){
          currPrice= (decObj.price*decObj.quantity - decObj.price*(decObj.quantity-1))/(decObj.quantity);
          decObj.quantity-=1;
          decObj.price= currPrice*decObj.quantity;
      }
      else {
          document.getElementById(decObj.id).classList.remove('toggle-heart');
          cartData.splice(ind,1);
          document.getElementById('cart-plus').innerHTML=''+ cartData.length +'Items';
          // document.getElementById('m-cart-plus').innerHTML=''+ cartData.length;
          if (cartData.length < 1 && flag){ 
            document.getElementById('food-items').classList.toggle('food-items');
            document.getElementById('category-list').classList.toggle('food-items'); 
            // document.getElementById('m-cart-plus').classList.toggle('m-cart-toogle');
             document.getElementById('cart-page').classList.toggle('cart-toogle'); 
            //  document.getElementById('category-header').classList.toggle('toggle-category'); 
             document.getElementById('checkout').classList.toggle('cart-toogle');
             flag= false;
             alert("Currently no item in cart");
        }
    } 
    totalAmount();
    cartItems();
}
function totalAmount(){
  var sum=0;
  cartData.map(item=>{
      sum+= item.price;
  })
  document.getElementById('total-item').innerText='Total Item:'+ cartData.length;
  document.getElementById('total-price').innerText='Total Price: $'+ sum; 
  document.getElementById('m-total-amount').innerText='Total price: $' + sum;

}
document.getElementById('cart-plus').addEventListener('click',cartToggle);
// document.getElementById('m-cart-plus').addEventListener('click',cartToggle);

function cartToggle(){
  if(cartData.length > 0){
      document.getElementById('food-items').classList.toggle('food-items');
      document.getElementById('category-list').classList.toggle('food-items'); 
      // document.getElementById('m-cart-plus').classList.toggle('m-cart-toogle');
       document.getElementById('cart-page').classList.toggle('cart-toogle'); 
      //  document.getElementById('category-header').classList.toggle('toggle-category'); 
       document.getElementById('checkout').classList.toggle('cart-toogle');
       flag= true;
  }



