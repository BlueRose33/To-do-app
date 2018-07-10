// $(document.ready(function(){
//     $("ul").on("click",input[type="checkbox"]function
//      $(this).closest("li").toggleclass("completed-todo")}
//      $(#createbutton1).click(function(){
$(document).ready(function(){
    console.log("this works");
    $("#createbutton1").click(function(){
        var nameOfToDo=$("#write-to-do").val();
console.log(nameOfToDo);
var timeInMinutes=$("#minutesneeded").val();
$("ul").append("<li><input type='checkbox'/>"+nameOfToDo+"<span>"+": "+timeInMinutes+" min."+"</span></li>");
console.log(timeInMinutes);


    });
});