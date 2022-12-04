$(document).ready(function () {
 

  $(".saveBtn").on("click", function () {
    console.log(this);
    var time = $(this).parent().attr("id");
    var info = $(this).siblings(".description").val();
    localStorage.setItem(time, info);
  });
  $("#h9 .description").val(localStorage.getItem("h9"));

  $("#h10 .description").val(localStorage.getItem("h10"));

  $("#h11 .description").val(localStorage.getItem("h11"));

  $("#h12 .description").val(localStorage.getItem("h12"));

  $("#h13 .description").val(localStorage.getItem("h13"));

  $("#h14 .description").val(localStorage.getItem("h14"));

  $("#h15 .description").val(localStorage.getItem("h15"));

  $("#h16 .description").val(localStorage.getItem("h16"));

  $("#h17 .description").val(localStorage.getItem("h17"));
  function hours() {
    var current = moment().hour();
    $(".time-block").each(function () {
      var block = parseInt($(this).attr("id").split("hour")[1]);

      console.log(block, current);
      if (block < current) {
        $(this).addClass("past");
        $(this).removeClass("future");
        $(this).removeClass("present");
      } else if (block == current) {
        $(this).removeClass("past");
        $(this).addClass("present");
        $(this).removeClass("future");
      } else {
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");
      }
    });
  }
  hours();
});
