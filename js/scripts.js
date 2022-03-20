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