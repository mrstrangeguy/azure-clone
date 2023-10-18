const dropdown=document.querySelector('.dropdown')

const select=dropdown.querySelector('.select')
const caret=dropdown.querySelector('.caret')
const caret_logo=dropdown.querySelector('.caret i')
const menu=dropdown.querySelector('.menu')
const options=dropdown.querySelectorAll('.menu li')
const selected=dropdown.querySelector('.selected')

select.addEventListener('click',()=>{
    caret.classList.toggle('caret-rotate')

    menu.classList.toggle('menu-open')
})

options.forEach((option)=>{
    option.addEventListener('click',()=>{
        selected.innerText=option.innerText
    })
})

const navbar=document.querySelector('.nav-bar-content')

const navbar_links=navbar.querySelectorAll('.nav-bar-content a')
let currentLink;


// navbar_links.forEach((link,linkIndex)=>{
     
//     link.addEventListener('click',()=>{
       
//     navbar_links.forEach((e,index)=>{
//         e.classList.remove('link-underline')
//     })
//      link.classList.add('link-underline')
//      console.log(link)
//     })
// })

//tab navigation js
let leftBtns=document.querySelectorAll('.left-btn')
let rightBtns=document.querySelectorAll('.right-btn')

let leftBtn1=leftBtns[0]
let leftBtn2=leftBtns[1]

let rightBtn1=rightBtns[0]
let rightBtn2=rightBtns[1]

let tabMenus=document.querySelectorAll('.tab-navigation')
let tabMenu1=tabMenus[0]
let tabMenu2=tabMenus[1]
const btnVisibility=(currentTab)=>{
      let scrollLeftValue=Math.ceil(currentTab.scrollLeft);
      let scrollableWidth=currentTab.scrollWidth-currentTab.clientWidth
      leftBtn1.style.display=scrollLeftValue>0?"flex":"none";
      leftBtn2.style.display=scrollLeftValue>0?"flex":"none";
      rightBtn1.style.display=scrollableWidth>scrollLeftValue?"flex":"none"
      rightBtn2.style.display=scrollableWidth>scrollLeftValue?"flex":"none"
     
}

    rightBtn1.addEventListener("click",()=>{
        tabMenu1.scrollLeft+=150
        setTimeout(()=>{btnVisibility(tabMenu1)},50)
        console.log("Hello")
    })
    rightBtn2.addEventListener("click",()=>{
        tabMenu2.scrollLeft+=150
        setTimeout(()=>{btnVisibility(tabMenu2)},50)
        console.log("Hello")
    })


    leftBtn1.addEventListener("click",()=>{
        tabMenu1.scrollLeft-=150
        setTimeout(()=>{btnVisibility(tabMenu1)},50)
    })
    leftBtn2.addEventListener("click",()=>{
        tabMenu2.scrollLeft-=150
        setTimeout(()=>{btnVisibility(tabMenu2)},50)
    })


//tab navigation style
let tmlists=document.querySelectorAll('.tab-menu li')

tmlists.forEach((li)=>{
    li.addEventListener("click",()=>{
       tmlists.forEach((list)=>{
          list.style.backgroundColor="#e6f2fb"
          list.style.color="#243A5e"
       })
       li.style.backgroundColor="#005597"
       li.style.color="white"
    })
})

//accordion js
let accordion=document.querySelector('.solutions-accordion')
let accordionTabs=document.querySelectorAll('.parent-tab')



accordionTabs.forEach((tab)=>{
    tab.addEventListener("click",(e,elemindex)=>{
        let currentIcon=tab.querySelector('label i')
        let check=currentIcon.classList.contains('accordion-rotate')
        let content=tab.querySelector('.content')
        console.log(check)
        if(check){
            currentIcon.classList.remove('accordion-rotate')
            content.classList.remove('display-content')
            content.style.height="0px"
            tab.style.borderLeft="none";
        }
        else{
        accordionTabs.forEach((e)=>{
            let Icon=e.querySelector('label i')
            Icon.classList.remove('accordion-rotate')
            let currentContent=e.querySelector('.content')
            currentContent.classList.remove('display-content')
            e.style.borderLeft="none"
            
        })
        currentIcon.classList.add('accordion-rotate')
        content.classList.add('display-content')
        content.style.height=`${content.scrollHeight}px`
        
        if(Math.ceil(screen.width)>=860){
            tab.style.borderLeft="4px solid #0078D4"
        }
       
    }
    })
  
})

//resource tab menu
let resource_navbar=document.querySelector('.resource-navbar')
let menu_item=document.querySelector('.menu-item')
let menu_items=document.querySelectorAll('.menu-item')
let resource_Navigation=resource_navbar.querySelector('.resource-navigation')
let resourceLeft_Btn=resource_navbar.querySelector('.resource-left-btn')
let resourceRight_Btn=resource_navbar.querySelector('.resource-right-btn')

function resourceBtnVisibility(){
    let scrollLeftValue=Math.ceil(resource_Navigation.scrollLeft)
    let scrollableWidth=resource_Navigation.scrollWidth-resource_Navigation.clientWidth
    resourceLeft_Btn.style.display=scrollLeftValue>0?"flex":"none";
    
    resourceRight_Btn.style.display=scrollableWidth>scrollLeftValue?"flex":"none"
  
}
console.log(resource_Navigation.scrollWidth)
resourceRight_Btn.addEventListener("click",()=>{
    console.log(menu_item.clientWidth)
    let item_width=Math.ceil(menu_item.scrollWidth)
    let nav_width=resource_Navigation.scrollWidth
    resource_Navigation.scrollLeft+=item_width
   
     resourceBtnVisibility()
})

resourceLeft_Btn.addEventListener("click",()=>{
    let item_width=Math.ceil(menu_item.scrollWidth)
    let nav_width=resource_Navigation.scrollWidth
    resource_Navigation.scrollLeft-=item_width
   
     resourceBtnVisibility()
})
menu_items.forEach((current_item)=>{
    current_item.addEventListener("click",()=>{
        menu_items.forEach((item)=>{
            item.children[1].style.display="none"
        })
       
        current_item.children[1].style.display="block"
    })
})

//carousel 3
let track=document.querySelector('.slide-track')
let slides=Array.from(track.children)
let sliderNav=document.querySelector('.slider-tabs')
let sliderTabs=Array.from(sliderNav.children)
console.log(slides)

let prevButton=document.querySelector('.slider-left-btn')

let nextButtom=document.querySelector('.slider-right-btn')

const slideSize=slides[0].getBoundingClientRect()
const slideWidth=slideSize.width



const setSlidePosition=(slide,index)=>{
    slide.style.left=slideWidth*index+"px"
    
}

slides.forEach(setSlidePosition)



const moveToSlide=(track,currentSlide,targetSlide)=>{
    track.style.transform='translateX(-'+targetSlide.style.left+')'
    currentSlide.classList.remove('current-slide')
    targetSlide.classList.add('current-slide')
    if(slides[0].classList.contains('current-slide')){
       
        nextButtom.classList.remove('opacity-change')
    }
    else if(slides[4].classList.contains('current-slide')){
        
        prevButton.classList.remove('.opacity-change')
    }
}

nextButtom.addEventListener("click",()=>{
    
    const currentSlide=track.querySelector('.current-slide')
    const nextSlide=currentSlide.nextElementSibling
    
   moveToSlide(track,currentSlide,nextSlide)
    
})

prevButton.addEventListener("click",()=>{
    const currentSlide=track.querySelector('.current-slide')
    const prevSlide=currentSlide.previousElementSibling

   moveToSlide(track,currentSlide,prevSlide)  
})

// sliderNav.addEventListener("click",(e)=>{
//     console.log(e.target)
//     const targetTab=e.target

//     if(targetTab){
//         console.log("Target tab clicked")
//     }
// })
let sliderParent=document.querySelector('.slider-tabs')
sliderTabs.forEach((tab,index)=>{
    tab.addEventListener("click",()=>{
       
        sliderTabs.forEach((e,index)=>{
            e.children[2].classList.add('show-display')
        })
        tab.children[2].classList.remove('show-display')

        const currentSlide=track.querySelector('.current-slide')
        const currentTab=sliderParent.querySelector('.current-slide')
        const targetIndex=sliderTabs.findIndex(findtab => findtab===tab)
        const targetSlide=slides[targetIndex]
        console.log("index "+targetIndex)
        moveToSlide(track,currentSlide,targetSlide)
    })
   
})

//image accordion(tablet)

let tai_Container=document.querySelector('.tablet-accordion-image')

let tai_Tabs=document.querySelectorAll('.tablet-accordion-image .tai-container')

let tablet_Accordion_tabs=document.querySelectorAll('.tablet-accordion .parent-tab')

tablet_Accordion_tabs.forEach((tab,index)=>{
    tab.addEventListener("click",()=>{
       tai_Tabs.forEach((img_tab)=>{
        img_tab.classList.remove('active-container')
       })
       tai_Tabs[index].classList.add('active-container')
    })
})


//active links

let sections=document.querySelectorAll('.scroll-section')
console.log("These are sections--")
let navLinks=document.querySelectorAll('.nav-bar-content a')
console.log(navLinks)

window.onscroll=()=>{
    sections.forEach(sec=>{
        let top=window.scrollY;
        let offset=sec.offsetTop-100;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id')

        if(top>=offset && top<offset+height){
            navLinks.forEach(links =>{
                links.classList.remove('link-underline')
                document.querySelector('.nav-bar-content a[href*='+id+']').classList.add('link-underline')
            })
        }
    })
}
