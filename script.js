const nav = document.querySelector('nav')
const burgerBtn = document.querySelector('.burger')
const burgerIcon = document.querySelector('.fa-bars')
const closeIcon = document.querySelector('.fa-times')
const navItem = document.querySelectorAll('.nav-item')
const phoneNumber = document.querySelector('#tel')
const lastName = document.querySelector('#lastName')
const persons = document.querySelector('#persons')
const error = document.querySelector('#error')
const errormsg = document.querySelector('#errormsg')
const personError = document.querySelector('#personError')
const form = document.querySelector('#form')
const book = document.querySelector('#book')
const days = document.querySelector('#days')
const hoursWeek = document.querySelector('#hours-week')
const hoursEnd = document.querySelector('#hours-end') 
const small = document.querySelector('i.fas.fa-times.small')

const handle = () => {
    nav.classList.toggle('active')
    burgerBtn.classList.toggle('active')
    if(burgerBtn.classList.contains('active')){
    burgerIcon.classList.add('hide')
    closeIcon.classList.remove('hide')
    } else{
        burgerIcon.classList.remove('hide')
    closeIcon.classList.add('hide')
    }
}
small.addEventListener('click', handle)
burgerBtn.addEventListener('click', handle)
navItem.forEach(item => item.addEventListener('click',handle))

    const menuBtns = document.querySelectorAll('.menu-btn');
    const foodItems = document.querySelectorAll('.food-item');
    
    let activeBtn = "Pasta";
    
    showFoodMenu(activeBtn);
    
    menuBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
            resetActiveBtn();
            showFoodMenu(btn.id);
            btn.classList.add('active-btn');
        });
    });
    
    function resetActiveBtn(){
        menuBtns.forEach((btn) => {
            btn.classList.remove('active-btn');
        });
    }
    
    function showFoodMenu(newMenuBtn){
        activeBtn = newMenuBtn;
        foodItems.forEach((item) => {
            if(item.classList.contains(activeBtn)){
                item.style.display = "flex";
            } else {
                item.style.display = "none";
            }
        });
    }
function getSelectValue()
{
    const selectedValue = document.getElementById("days").value;
    if(selectedValue==='Friday'){
        hoursEnd.classList.add('active-hours')
          hoursWeek.classList.remove('active-hours')
    }
    else if(selectedValue==='Saturday'){
        hoursEnd.classList.add('active-hours')
        hoursWeek.classList.remove('active-hours')
    }
    else{
        hoursEnd.classList.remove('active-hours')
          hoursWeek.classList.add('active-hours')
    }
}
getSelectValue();

  form.addEventListener('submit',(e)=>{
      e.preventDefault();
      checkInputs();
  }) 

  const checkInputs = ()=>{
    const lastNameValue = lastName.value.trim()
    const phoneNumberValue = phoneNumber.value.trim()
    const personsValue = persons.value
    const regName = /^([a-z]{2,3} [A-ZŁŻ][a-ząęóżźćńłś]{2,})|([A-ZŁŻ][a-ząęóżźćńłś]{2,})(-[A-ZŁŻ][a-ząęóżźćńłś]{2,})?$/;
    const regPhone = /^[0-9\-\+]{9,15}$/;

    if(lastNameValue==='') {errormsg.innerHTML=`Last name can not be blank`}
    else if(regName.test(lastNameValue)) {errormsg.innerHTML=``}
    else{
        errormsg.innerHTML=`Enter valid last name`
    }
    if(phoneNumberValue===''){
        error.innerHTML=`Enter Your phone number`
    } 
    else if(regPhone.test(phoneNumberValue)){
        error.innerHTML=``
    } else {
        error.innerHTML=`Enter valid phone number`
    }
    if(personsValue==='') {personError.innerHTML=`Enter number of persons`}
    else {personError.innerHTML = ``}
  }
  