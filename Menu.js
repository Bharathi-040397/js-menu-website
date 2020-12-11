const  productstore=document.querySelector(".product-center");
   const items=[
      {
        sys: { id: 1 },
        fields: {
          type: "bed",
          title: "queen panel bed",
          price: 10.99,
          image: { fields: { file: { url: "images/product-1.jpeg" } } },
          info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium sunt sed neque ex ipsum, maxime quidem saepe. Doloremque quibusdam enim corporis aut eum."
        }
      },
      
         
      {
        sys: { id: 2},
        fields: {
          type: "fridge",
          title: "Fridge",
          price: 88.99,
          image: { fields: { file: { url: "images/product-5.jpeg" } } },
          info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium sunt sed neque ex ipsum, maxime quidem saepe. Doloremque quibusdam enim corporis aut eum."
        }
      },
      {
        sys: { id: 3 },
        fields: {
          type: "bed",
          title: "twin panel bed",
          price: 22.99,
          image: { fields: { file: { url: "images/product-4.jpeg" } } },
          info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium sunt sed neque ex ipsum, maxime quidem saepe. Doloremque quibusdam enim corporis aut eum."
        }
      },
      {
        sys: { id: 4},
        fields: {
          type: "dresser",
          title: "dresser",
          price: 32.99,
          image: { fields: { file: { url: "images/product-6.jpeg" } } },
          info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium sunt sed neque ex ipsum, maxime quidem saepe. Doloremque quibusdam enim corporis aut eum."
        }
      },
      
      {
        sys: { id: 5},
        fields: {
          type: "couch",
          title: "couch",
          price: 45.99,
          image: { fields: { file: { url: "images/product-7.jpeg" } } },
          info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium sunt sed neque ex ipsum, maxime quidem saepe. Doloremque quibusdam enim corporis aut eum."
        }
      },
      {
        sys: { id: 6 },
        fields: {
          type: "table",
          title: "table",
          price: 34.99,
          image: { fields: { file: { url: "images/product-8.jpeg" } } },
          info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium sunt sed neque ex ipsum, maxime quidem saepe. Doloremque quibusdam enim corporis aut eum."
        }
      }, 
      {
        sys: { id: 7 },
        fields: {
          type: "bed",
          title: "king panel bed",
          price: 12.99,
          image: { fields: { file: { url: "images/product-2.jpeg" } } },
          info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium sunt sed neque ex ipsum, maxime quidem saepe. Doloremque quibusdam enim corporis aut eum."
        }
      },
      {
        sys: { id: 8},
        fields: {
          type: "chair",
          title: "chair",
          price: 34.99,
          image: { fields: { file: { url: "images/product-8.jpeg" } } },
          info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium sunt sed neque ex ipsum, maxime quidem saepe. Doloremque quibusdam enim corporis aut eum."
        }
      },
       {
        sys: { id: 9 },
        fields: {
          type: "bed",
          title: "Single panel bed",
          price: 12.99,
          image: { fields: { file: { url: "images/product-3.jpeg" } } },
          info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium sunt sed neque ex ipsum, maxime quidem saepe. Doloremque quibusdam enim corporis aut eum."
        }
      },

       
      
        ];
 /* const  item=items[0];
  const itemindi=item.fields.image.fields.file["url"];
  console.log(itemindi);*/
window.addEventListener("DOMContentLoaded",function(){
     displaymenu(items);
      displaybtn();
});
  
     

//display buttons
function displaybtn(){
  const  btndynamic=items.reduce(function(value,item){
    if(!value.includes(item.fields.type))
    {
      value.push(item.fields.type);
    }
    return value;

},["all"]);

const buttons=btndynamic.map(function(button1){
  return `<button class="filter-btn btn btn-outline-dark" data-id=${button1}>${button1}</button>`
}).join(``);
btncontainer.innerHTML=buttons;
const filbtn=document.querySelectorAll(".filter-btn");

//filter items
filbtn.forEach(btn=>{
  btn.addEventListener("click",e=>{
    const btnid=e.currentTarget.dataset.id;
    console.log(btnid);
    const filterid=items.filter(menuItem=>{
      if(btnid === menuItem.fields.type)
      {
        return menuItem;
      }
      
    });
    if(btnid === "all")
    {
      displaymenu(items);
    }
    else
    {
      displaymenu(filterid);
    }
  });
});
}


//display all items
function displaymenu(menuitems)
{
   let display=menuitems.map(function(item)
  {
    return  `<div class="card">
    <img src=${item.fields.image.fields.file.url} class="card-img-top">
    <div class="card-title">
        <h4>${item.fields.title}</h4>
        <h4>$${item.fields.price}</h4>
    </div>
    <div class="underline"></div>
    <p class="card-text">${item.fields.info}</p>
    <button class="add">Add to cart</button>
</div>`
  });
  display=display.join(``);
  productstore.innerHTML=display;
}
const btncontainer=document.querySelector(".btn-container");


