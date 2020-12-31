   let cart=document.querySelectorAll('.order');
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
              let cart_Items = localStorage.getItem('productsInCart');
              cart_Items =JSON.parse(cart_Items);
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

    function OnLoadCartFunction(){
            let productNumbers = localStorage.getItem('cartNumbers');
            if(productNumbers){
               document.querySelector('.add').textContent=productNumbers;
            }
    }
    function display_cart(){
              let table         = document.getElementById("tableContent");
              table.innerHTML='';
              let cart_Items    = localStorage.getItem('productsInCart');
              cart_Items        = JSON.parse(cart_Items);
//              console.log(cart_Items);
              var i= 0;
              for (items in cart_Items){
                  i++;
                  let image = "../";
//                  let valuess=JSON.stringify(cart_Items);
                 let valuess=Object.keys(cart_Items);
                  let id    = cart_Items[items].id;
//                  console.log( valuess);
                  table.innerHTML+=   `<tr class= product${id}>
                                       <th scope="row">#</th>
                                       <td><img class="images_in_cart" src=${image}${cart_Items[items].image}></td>
                                       <td>${ cart_Items[items].name  }</td>
                                       <td>${ cart_Items[items].count }</td>
                                       <td>
                                       <span class="delete">
                                       <i onclick = delete_oncart_product(${id}) id="hello" class="fa fa-times" aria-hidden="true"></i>
                                       </span>
                                       </td>
                                       </tr>`;
              }
    }

    OnLoadCartFunction();
    display_cart();

    function delete_oncart_product(delete_pr_id){
//        console.log(removeproductid);
        var obj = localStorage.getItem('productsInCart');
        obj     = JSON.parse(obj);
//        delete_pr_id.toString();
//        var rem=localStorage.removeItem();
//        var objectsincart =[];
//        for(let i in obj){
//            objectsincart.push(obj[i]);
//        }
//        console.log(objectsincart);
        for (let value of Object.values(obj)) {
             if (value.id == delete_pr_id) {
                console.log(delete_pr_id,"id has been deleted");
                let product_to_remove_from_localStorage = value;
                console.log(product_to_remove_from_localStorage);
                document.getElementById("hello").style.display = "none" ;
             }

         }
//         const filteredcart = objectsincart.filter((item) => item.id !== delete_pr_id);
//         var object = filteredcart.reduce((obj, item) => (obj[item.key] = item.value, obj) ,{});
//         console.log(filteredcart);
//         localStorage.setItem('productsInCart',JSON.stringify(object));

//
    }