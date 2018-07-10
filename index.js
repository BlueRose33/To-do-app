// $(document.ready(function(){
//     $("ul").on("click",input[type="checkbox"]function
//      $(this).closest("li").toggleclass("completed-todo")}
//      $(#createbutton1).click(function(){
$(document).ready(function(){
    $("#createbutton1").click(function(){
        var nameOfToDo=$("#write-to-do").val();
        var timeInMinutes=$("#minutesneeded").val();
        $("ul").append("<li><input type='checkbox'/>"+nameOfToDo+"<span>: "+timeInMinutes+" min.</span></li>");
        console.log(timeInMinutes);
    });
    
    $("input[type='checkbox']").click(function(){
        $(this).closest("li").toggleClass("completed");
    console.log("Working button");
});
    
});