
$.ajax({
    url:"/cv/per",
    method: "GET",
    cache : false,
    success :alert('hi i am raja'),
    error : function () {
        // some error handling part
        alert("Oops! Something went wrong.");
    }
});