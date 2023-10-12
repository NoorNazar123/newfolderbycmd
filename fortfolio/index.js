const navLinks = document.getElementById("nav_links");
const menuToggle = document.getElementById("menu_toggle");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

//----------- about-------------

const tablinks = document.getElementsByClassName("tab-links");
const tabcontents = document.getElementsByClassName("tab-contents");
function updateElem(elems,tabname) {
  for(elem of elems){
     if(elem.id == tabname ){
        elem.classList.add(`${elem.classList[0]=="tab-links"? "active-link" : "active-tab"}`)
     }else{
        elem.classList.remove(`${elem.classList[0]=="tab-links"? "active-link" : "active-tab"}`)
     }
  }
}
function opentab(tabname) {
   for(elems of [tablinks ,tabcontents]){
      updateElem(elems,tabname)
   }
 
  // for(tabli of tablinks){
  //    if(tabli.id == tabname ){
  //       tabli.classList.add("active-link")
  //    }else{
  //       tabli.classList.remove("active-link")
  //    }
  // }

  // for(tabcont of tabcontents){
  //    if(tabcont.id == tabname ){
  //       tabcont.classList.add("active-tab")
  //    }else{
  //       tabcont.classList.remove("active-tab")
  //    }
  // }

//   for (let i = 0; i < tablinks.length; i++) {
//     if (tablinks[i].id == tabname && tabcontents[i].id == tabname) {
//       addClass(tablinks[i], "active-link");
//       addClass(tabcontents[i], "active-tab");
//     } else {
//       tablinks[i].classList.remove("active-link");
//       tabcontents[i].classList.remove("active-tab");
//     }
//   }
}
