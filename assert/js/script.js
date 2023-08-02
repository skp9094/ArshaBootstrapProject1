const dropDown1 = document.querySelector(".drop_down1 a");
const dropDown2 = document.querySelector(".drop_down2 a");
const dropDownList1 = document.querySelector(".drop_down_list1");
const dropDownList2 = document.querySelector(".drop_down_list2");
dropDown1.addEventListener("click",function(){
    dropDownList1.classList.toggle("d_none_show");
})
dropDown2.addEventListener("click",function(){
    dropDownList2.classList.toggle("d_none_show");
})

window.addEventListener("scroll",function(){
    const value = this.scrollY;
    const nav = document.querySelector("nav");

    if(value >= 80){
        nav.style.backgroundColor = "rgba(36,53,90,0.9)"
    }
    else{
        nav.style.backgroundColor = ""
    }
    // console.clear()
    // console.log(value);
});