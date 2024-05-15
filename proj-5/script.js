let isStatus=document.querySelector("h5");
let pic = document.querySelector("img");
let add= document.querySelector(".add");
let btnStatus=document.querySelector("button");

check=true;
add.addEventListener("click",()=>{
    if(check){
    isStatus.innerHTML="Friends";
    isStatus.style.color="green";
    pic.src="https://media.istockphoto.com/id/1144179032/photo/close-up-brunette-half-naked-woman-20s-with-perfect-skin-nude-make-up-isolated-on-beige.jpg?s=612x612&w=0&k=20&c=6ELXc-gGHEBK_sPkGvJ9jE85SAlr83LieRU87z3O4B8=";
    btnStatus.innerHTML="Remove";
    btnStatus.style.background="gray";
    check=false;
    }
    else{
        isStatus.innerHTML="Stranger";
        isStatus.style.color="red";
        pic.src="https://media.istockphoto.com/id/1310539819/photo/shot-of-a-young-woman-holding-glass-of-water-standing-isolated-over-yellow-background.jpg?s=612x612&w=0&k=20&c=xDUYFypD6Y3ru5fFHWXKmjgxx9PO9PhQbu0xWzMBspM=";
        btnStatus.innerHTML="Add Friend";
        btnStatus.style.background="cadetblue";
        check=true;
    }
})