   let cart=document.querySelectorAll('.order');
   let camera = [];
   console.log(cart.length);
   for(let i=0; i < cart.length;i++){
            cart[i].addEventListener("click",myFunction);
   }
    function myFunction(e) {
              let productNumbers = localStorage.getItem('cartNumbers');
              var product_id   = this.dataset.id;
              var product_name = this.dataset.product_name;
              var product_count= this.dataset.count;
              var product_image= this.dataset.image;
              product_count    = parseInt(product_count);
//              product_price    = parseInt(product_price);
               let Products = {
                'name'  : product_name,
                'id'    : product_id,
                'count' : product_count,
                'image' : product_image
              }
              productNumbers   = parseInt(productNumbers);
              if (productNumbers){
               localStorage.setItem('cartNumbers',productNumbers + 1);
               document.querySelector('.add').textContent=productNumbers+1;
              }
              else{
               localStorage.setItem('cartNumbers',1);
               document.querySelector('.add').textContent=1;
              }
              setItems(Products);
    }


    function setItems(Products){
               //another method
//                 let cart_Items = localStorage.getItem('productsInCart');
//                 cart_Items =JSON.parse(cart_Items);
//                 if (cart_Items!=null){
//                 if(camera){
//                    camera.push(Products);
//                 }

//
//                 console.log(camera);
//                 localStorage.setItem('productsInCart',JSON.stringify(camera));
//                 cart_Items[Products.name].count +=1;


              let cart_Items = localStorage.getItem('productsInCart');
              cart_Items =JSON.parse(cart_Items);
              console.log(cart_Items);
              if (cart_Items!=null){
                 if(cart_Items[Products.name] == undefined){
                    cart_Items={
                      ...cart_Items,
                      [Products.name]:Products
                    }
                 }
                 cart_Items[Products.name].count +=1;
              }else{
                 Products.count=1;
                 cart_Items={
                    [Products.name]:Products
                 }
              }
              localStorage.setItem('productsInCart',JSON.stringify(cart_Items));
    }

    //number of products in cart
    function OnLoadCartFunction(){
            let productNumbers = localStorage.getItem('cartNumbers');
            if(productNumbers){
               document.querySelector('.add').textContent=productNumbers;
            }
    }

    // products added on cart page
    function display_cart(){
              let table         = document.getElementById("tableContent");
              table.innerHTML='';
              let cart_Items    = localStorage.getItem('productsInCart');
              cart_Items        = JSON.parse(cart_Items);
              console.log(cart_Items);
              var i= 0;
              for (items in cart_Items){
                  i++;
                  let image = "../";
//                  let valuess=JSON.stringify(cart_Items);
//                 let valuess=Object.keys(cart_Items);
                  let id    = cart_Items[items].id;
                  table.innerHTML+=   `<tr class= product${id} id=${id}>
                                       <th scope="row">#</th>
                                       <td><img class="images_in_cart" src=${image}${cart_Items[items].image}></td>
                                       <td>${ cart_Items[items].name  }</td>
                                       <td>${ cart_Items[items].count }</td>
                                       <td>
                                       <span class="delete">
                                       <i onclick = delete_oncart_product(this) class="fa fa-times hello" aria-hidden="true"></i>
                                       </span>
                                       </td>
                                       </tr>`;
              }
    }

    OnLoadCartFunction();
    display_cart();

    //delete cart products
    function delete_oncart_product(e){
          console.log(e.parentElement.parentElement.parentElement.id);
          let del = localStorage.getItem('cartNumbers');
          var obj = localStorage.getItem('productsInCart');
          obj     = JSON.parse(obj);
          var objectsincart =[];
          for(let i in obj){
                    objectsincart.push(obj[i]);
          }
          let item=[];
          objectsincart.map((data) =>{
          if(data.id !== e.parentElement.parentElement.parentElement.id){
               item.push(data);
           }
         });
            localStorage.setItem('productsInCart',JSON.stringify(item));
            if( del >=0 ){
                localStorage.setItem('cartNumbers',del - 1);
            }
            window.location.reload();
    };


//filtered list
 function search(){
     let inputedtext=document.getElementById('inputedtext').value.toLowerCase();
     console.log(inputedtext);
     let cards =document.getElementsByTagName("h5");
     for(let i=0;i<=cards.length;i++){
         let filteredlist = cards[i].textContent.toLowerCase();
         if(filteredlist.includes(inputedtext)){
             cards[i].parentElement.parentElement.style.display='';
         }
         else{
             cards[i].parentElement.parentElement.style.display='none';
         }
     }
 }
