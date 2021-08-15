const menu = [
    {
      id: 1,
      title: "buttermilk pancakes",
      category: "breakfast",
      price: 15.99,
      img: "./images/item-1.jpeg",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 2,
      title: "diner double",
      category: "lunch",
      price: 13.99,
      img: "./images/item-2.jpeg",
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
      id: 3,
      title: "godzilla milkshake",
      category: "shakes",
      price: 6.99,
      img: "./images/item-3.jpeg",
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
      id: 4,
      title: "country delight",
      category: "breakfast",
      price: 20.99,
      img: "./images/item-4.jpeg",
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
      id: 5,
      title: "egg attack",
      category: "lunch",
      price: 22.99,
      img: "./images/item-5.jpeg",
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
      id: 6,
      title: "oreo dream",
      category: "shakes",
      price: 18.99,
      img: "./images/item-6.jpeg",
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
      id: 7,
      title: "bacon overflow",
      category: "breakfast",
      price: 8.99,
      img: "./images/item-7.jpeg",
      desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
      id: 8,
      title: "american classic",
      category: "lunch",
      price: 12.99,
      img: "./images/item-8.jpeg",
      desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
      id: 9,
      title: "quarantine buddy",
      category: "shakes",
      price: 16.99,
      img: "./images/item-9.jpeg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
      id: 10,
      title: "bison steak",
      category: "dinner",
      price: 22.99,
      img: "./images/item-10.jpeg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
  ];

$(document).ready(function(){
  displaymenuItem(menu);
  displayMenuButton(menu);

    // Filter Item
    $('.btn').on('click', (e)=>{
      let category = e.currentTarget.dataset.id;
      let filterItem = menu.filter(function(item){
        if(item.category == category){
          return item;
        }
      })
      console.log(filterItem);
      if(category === "all"){
        displaymenuItem(menu);
      }else{
        displaymenuItem(filterItem);
      }
    })

})

// Display Item
const displaymenuItem = (itemArray)=>{
  let displayItem = itemArray.map((item)=>{
    return `<div class="menu">
    <div class="image">
        <img src=${item.img} alt=${item.category}>
    </div>
    <div class="info-container">
        <div class="heading">
            <h2 class="name">${item.title}</h2>
            <h2>$ ${item.price}</h2>
        </div>
        <div class="items-info">
            <p>${item.desc}
            </p>
        </div>
    </div>
</div> `
  })

  displayItem = displayItem.join(" ");
  //console.log(displayItem);
  $('.itemsContainer').html(displayItem);
}

// Display Button
const displayMenuButton = (menuArray)=>{
  let distinctItemArray = ['all'];
  for (let i = 0; i < menuArray.length; i++) {
    if(!distinctItemArray.includes(menuArray[i].category)){
      distinctItemArray.push(menuArray[i].category);
    }
  }

  let displayButton = distinctItemArray.map((itemBtn)=>{
      return `<button class="btn" data-id =${itemBtn}>${itemBtn}</button>`;
  })

  console.log(displayButton);  
  displayButton = displayButton.join(" ");
  $('#btn-container').html(displayButton);
}




//   const itemsContainer = document.querySelector('.itemsContainer');
//   const btnContainer = document.querySelector('#btn-container');

// window.addEventListener('DOMContentLoaded' ,()=>{
//   displayItemMenu(menu);
//   displayMenuButton(menu);

//   const btns = document.querySelectorAll('.btn');
//   btns.forEach((btn)=>{
//     btn.addEventListener('click', (e)=>{
//       const category = e.currentTarget.dataset.id;

//       const menuItem = menu.filter((item)=>{
//           if(category == item.category){
//             return item;
//           }
//       })
      
//       if(category == 'all'){
//         displayItemMenu(menu);
//       }else{
//         displayItemMenu(menuItem);
//       }
//     })
//   })

  
// }); 


// let displayItemMenu = (menuItem)=>{
//   let displayMenu = menuItem.map(function(item){

//     return `<div class="menu">
//     <div class="image">
//         <img src=${item.img} alt=${item.title}>
//     </div>
//     <div class="info-container">
//         <div class="heading">
//             <h2 class="name">${item.title}</h2>
//             <h2>$ ${item.price}</h2>
//         </div>
//         <div class="items-info">
//             <p>${item.desc}
//             </p>
//         </div>
//     </div>
// </div>`
  
//   });
//   displayMenu = displayMenu.join(" ");
//   itemsContainer.innerHTML = displayMenu; 
// }

// let displayMenuButton = (menuButton)=>{
//   const itemButton =['all'];

//   for (let i = 0; i < menuButton.length; i++) {
//     if(!itemButton.includes(menuButton[i].category)){
//       itemButton.push(menuButton[i].category);
//     }
//   }

//   let displayButton =itemButton.map((itemBtn)=>{
//     return `<button class="btn" data-id =${itemBtn}>${itemBtn}</button>
//     `
//   })

//   displayButton = displayButton.join(" ");
//   btnContainer.innerHTML = displayButton;
// }

