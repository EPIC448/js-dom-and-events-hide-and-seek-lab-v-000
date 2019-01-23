
function getFirstSelector(selector){
    return document.querySelector(selector);
  
  }

  function nestedTarget(){
    return document.querySelector(".target ");
  }

  function deepestChild(){
    let n = document.getElementById("grand-node")
       let ch = n.children[0]
          while (ch.children[0]) {
          n = ch
         ch = n.children[0]
       }
       return ch

      //  alternative
    // return document.getElementById('grand-node').children[0].children[0].children[0].children[0]
  }

function increaseRankBy(p){
  let p = document.querySelectorAll(".ranked-list li")
  for (let i = 0; i < p.length; i++) {
    p[i].innerHTML = (i + 1)
    }

  }

