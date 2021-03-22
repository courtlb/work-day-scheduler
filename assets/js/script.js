var jumboDate = moment().format('dddd, MMMM Do');
var scheduleContainer = $(".container");

var dateEl = $("<p>")
    .addClass("lead")
    .text(jumboDate);
$(".jumbotron").append(dateEl);


var auditTime = function() {
    $(".time-block").each(function() {
        var timeBlock = parseInt($(this).attr("id").split("hour")[1]);
        if (timeBlock < moment().hour()) {
            $(this).addClass("past");
            $(this).removeClass("present");
            $(this).removeClass("future");
        } else if (timeBlock === moment().hour()) {
            $(this).removeClass("past");
            $(this).addClass("present");
            $(this).removeClass("future");
        } else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
    })
};

var loadSchedule = function() {
    $("#hour8 .description").val(localStorage.getItem("hour8"));
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));

    auditTime();
};

$(".saveBtn").on("click", function() {
    var schedDescr = $(this).siblings(".description").val();
    var schedTime = $(this).parent().attr("id");
    console.log(schedDescr);
    console.log(schedTime);
    
    localStorage.setItem(schedTime, schedDescr);
});

setInterval(function() {
    $(".time-block").each(function(index, el) {
      auditTime(el);
    });
  }, (1000 * 60) * 15);

  loadSchedule();