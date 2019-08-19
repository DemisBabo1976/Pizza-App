// let size, email;
// size = document.getElementById('#size').value;
// email = document.getElementById('#email').value;
//
// function subscribe() {
//     alert("Hello " + email + "Thank for reaching out");
//     console.log(email);
// }
//
// let validateInput = () => {
//     if (size === "") {
//         console.log("Please specify the size");
//     }
// }

// $(function () {
//     $("form#data").on('submit',function(event){
//         event.preventDefault();
//         let name = $("#name").val();
//         let number = $("#phone").val();
//         let location = $("#location").val();
//
//         if ($("input#name").val() && $("input#phone").val()){
//             alert("Hey " + name + ", Your order will be delivered to " + location + "in around 35 minutes.");
//         }
//         else {
//             alert("Please provide your correct name and location!");
//         }
//
//     });
// })

$(".go").click(function () {
    let name = $("#name").val();
    console.log(name);
})