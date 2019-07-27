$ (function() {
// const name = document.getElementById('name');
// const mail = document.getElementById('mail');
// const message = document.getElementById('message');
// const agreementOne = document.getElementById('zgoda-marketingowa-1');
// const submit = document.getElementById('submit-message');

// const validation = (e) => {
//     const text1 = name.value;
//     const text2 = mail.value;
//     const text3 = message.value;
//     // let check1 = agreementOne.checked;


//     if (text1 == null || text2 == null ||  text3 == null ){ 
//         setCustomValidity("Please enter any text into the input");
//     // } else if (check3.checked) {
//     //     let check1 = ;
//     //     let check2 = ;
//     } else {

//     }
// }

// submit.addEventListener('click', validation);


/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
// function myFunction() {
//     var x = document.getElementById("myLinks");
//     if (x.style.display === "block") {
//       x.style.display = "none";
//     } else {
//       x.style.display = "block";
//     }
//   }


  $(".mobile-menu").on({
    click: function(){


       if($(this).hasClass("active")){

          $(".mobile-menu").removeClass("active");
          $("home nav").removeClass("open");

       }else{

          $(".mobile-menu").addClass("active");
          $("home nav").addClass("open");

       }

    }
 });

});