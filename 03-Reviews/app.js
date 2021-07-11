const reviews = [
    {
      id: 1,
      name: "susan smith",
      job: "web developer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
      text:
        "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: "anna johnson",
      job: "web designer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
      text:
        "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
      id: 3,
      name: "peter jones",
      job: "intern",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
      text:
        "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
      id: 4,
      name: "bill anderson",
      job: "the boss",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
      text:
        "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
  ];

// Select Items
let img =document.getElementById('image');
let name =document.getElementById('name');
let profession =document.getElementById('profession');
let text =document.getElementById('text');

// Select Button
let prevButton = document.querySelector('.prev-button');
let nextButton = document.querySelector('.next-button');
let randomButton = document.querySelector('.btn');

let contentItem = 0;

// Initial Load Person
window.addEventListener("DOMContentLoaded",()=>{
    let index = reviews[contentItem];
    img.src=  index.img;
    name.textContent = index.name;
    profession.textContent =index.job;
    text.textContent = index.text;
});

// Show Person
function showPerson(person){
    let index = reviews[contentItem];
    img.src=  index.img;
    name.textContent = index.name;
    profession.textContent =index.job;
    text.textContent = index.text;
}


// Previous Button
prevButton.addEventListener('click', ()=>{
if(contentItem< 0){
    contentItem = reviews.length -1;
}
else{
    contentItem--;
    
}
showPerson(contentItem);
});

// Next Button
nextButton.addEventListener('click', ()=>{
    if(contentItem < reviews.length){
       contentItem++;
    }
    else{
        contentItem =0;
    }
    showPerson(contentItem);
});

// Random Button
randomButton.addEventListener('click', ()=>{
    contentItem= Math.floor(Math.random() * reviews.length);
    console.log(contentItem);
    showPerson(contentItem); 
});
