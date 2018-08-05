var date = new Date()//, y = date.getFullYear(), m = date.getMonth();
console.log(date.getDate())
if (16 > date.getDate()) {
    alert(1)
    for (var d = 1; d < 16; d++) {
        var fifteenDays = new Date(date.getFullYear(), date.getMonth(), d).toDateString();
        console.log(fifteenDays)
        document.write(fifteenDays + "<br>")
    }
}
else {
    alert(2)
    var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    for (var d = 16; d <= lastDay; d++) {
        var fifteenDays = new Date(date.getFullYear(), date.getMonth(), d).toDateString();
        console.log(fifteenDays)
        document.write(fifteenDays + "<br>")
    }
}