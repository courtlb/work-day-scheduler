var jumboDate = moment().format('dddd, MMMM Do');
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

auditTime();