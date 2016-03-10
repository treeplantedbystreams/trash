//Create an object and make the background turn random colors when clicked upon
(document).addEventListener('DOMContentLoaded',function(){//DOMContentLoaded when using the dom
   var reminder=document.getElementById('reminder');//declare the object
   reminder.addEventListener('click',changeColor);//state the eventlistener instead of doing onclick
   function changeColor (event){//declare the function
        var colorArray = ['#F2F3F4', '#CD9575', '#915C83','#FAEBD7','#008000','#8DB600','#FBCEB1',
        '#00FFFF','#7FFFD4','#4B5320','#3B444B','#E9D66B','#B2BEB5', '#87A96B', '#FF9966'];//declare the array
        var index = Math.floor(Math.random() * colorArray.length);//mathrandom the length of the array
        reminder.style.backgroundColor = colorArray[index];//target.target.target.function=array[]
   }   
        pushHere.onclick= function() {
        var pushHere=document.getElementById('pushHere');
        var words= document.getElementById('myValue').value;
        alert(words);
    }
     addName.onclick = function() {
          var addName=document.getElementById('addName');
        var nameContainer = document.getElementById('nameContainer');
        var spanHere = document.createElement('spanHere');
        var text = document.createTextNode('David');
        spanHere.appendChild(text);
        nameContainer.appendChild(spanHere);
     }
              // 6. Create a button and a `ul` in your HTML. 
              //In JavaScript, create an array containing the names of your friends (at least 10. 
              //If you don't have that many, include your imaginary ones). 
              //When the button is clicked, add each friend's name as an `li` to the `ul` on the page.
  
            friends.onclick = function() { //friends function
            var friends=document.getElementById('friends'); //define friends
            var friendsArray=["jason", "sammy", "tobey", "sarah", 'bill'];//present array
            
            for(i = 0; i <friendsArray.length; i++){//array function
            
            var liPerClick=friendsArray.shift(); //define function that limits li per click
            var listItem = document.createElement('li');//create li to append text node to
            listItem.appendChild(document.createTextNode(liPerClick)); //create and append child(node)
           
            var ul= document.getElementById('ul'); //define ul
            ul.appendChild(listItem);     
            };
        }
;})
   

