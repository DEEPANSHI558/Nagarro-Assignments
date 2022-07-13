$(document).ready(function () {

    const addTask = ()=>{
      var input = $("#text").val();
      if (input !== "") {
        $("ul").append(
          "<li>" + '<div class="input">'+input +'</div>'+ '<button class="delete"><i class="fa fa-trash "></i></button>'+'<button class="done"><i class="fa fa-check "></i></button>'+'</li>'
        );
        $("#text").val("");
      }
    }
    
    $("#text").change(function () {
      addTask();
    });
    $("#btn").click(() => {
      addTask();
    });
    $("ul").on("click",'.delete', function () {
      $(this).parent("li").fadeOut(200);
    });
    $("ul").on("click",'.done', function () {
      $(this).parent("li").css("background-color", "green");
    });
    });