document.querySelector(".year").innerHTML = new Date().getFullYear()


const menu_btn = document.querySelector(".menu-btn")



menu_btn.addEventListener("click",  function(){
    const show_nav = document.querySelector("nav")
    show_nav.classList.toggle("show-nav")
    menu_btn.classList.toggle("change-nav")

})

const clear_btn = document.querySelector(".clear-btn")

const show_next = document.querySelector(".calculate")

const close_btn = document.querySelector(".close-btn")

const container_1 = document.querySelector("section")
const container_2 = document.querySelector("form")
const container_3 = document.querySelector("article")
 const payment = document.querySelector(".Payment")
 let bo_amount = document.querySelector(".b-amount")
 let i_amount = document.querySelector(".i-amount")
 let a_amount = document.querySelector(".amount")
 let input = document.querySelector(".input")

close_btn.addEventListener("click", function(){
    container_1.style.display = "none"
    container_2.style.display = "flex"
    container_3.style.display = "none"
})

show_next.addEventListener("click", function(){
    container_1.style.display = "none"
    container_2.style.display = "flex"
    container_3.style.display = "none"
})

const calculate_btn = document.querySelector(".calculate-btn")



calculate_btn.addEventListener("click", function(){
    
    container_1.style.display = "none"
    container_2.style.display = "none"
    container_3.style.display = "flex"
 



    if(payment.value === "3-months"){
      let  b_amount = "₦" + Number(input.value)
        bo_amount.innerHTML = b_amount

       let  interest = "₦" + Number(5000)

        i_amount.innerHTML = interest

      let  amount = "₦" +  (Number(input.value ) + 5000)

        a_amount.innerHTML = amount
    }

    if(payment.value === "6-months"){
        let  b_amount = "₦" + Number(input.value)
        bo_amount.innerHTML = b_amount

       let  interest = "₦" + Number(10000)

        i_amount.innerHTML = interest

      let  amount = "₦" +  (Number(input.value ) + 10000)

        a_amount.innerHTML = amount
    }

    if(payment.value === "12-months"){
        let  b_amount = "₦" + Number(input.value)
        bo_amount.innerHTML = b_amount

       let  interest = "₦" + Number(20000)

        i_amount.innerHTML = interest

      let  amount = "₦" +  (Number(input.value ) + 20000)

        a_amount.innerHTML = amount
    }

    if(payment.value === "18-months"){
        let  b_amount = "₦" + Number(input.value)
        bo_amount.innerHTML = b_amount

       let  interest = "₦" + Number(30000)

        i_amount.innerHTML = interest

      let  amount = "₦" +  (Number(input.value ) + 30000)

        a_amount.innerHTML = amount
    }

    if(payment.value === "24-months"){
        let  b_amount = "₦" + Number(input.value)
        bo_amount.innerHTML = b_amount

       let  interest = "₦" + Number(40000)

        i_amount.innerHTML = interest

      let  amount = "₦" +  (Number(input.value ) + 40000)

        a_amount.innerHTML = amount
    }
})


clear_btn.addEventListener("click", function(){
  

    
payment.innerHTML = "00"
input.innerHTML = "1"
    
     
 })


