function result() {
    
    var person = document.getElementById("p1").value;
    if ( person == null ) {
        var obj=document.getElementById("result");
        obj.innerHTML = "Ghosts don't love."
    } else {
    var a = Math.floor(Math.random() * 101 );
	if ( a == 100 ) {
    var obj=document.getElementById("result");
    obj.innerHTML = a + " percents of love." + "<br/>" + "<br/>" + "Have a wedding now."
    }
    if ( a === 0 ) {
    var obj=document.getElementById("result");
    obj.innerHTML = a + " percents of love." + "<br/>" + "<br/>" + "Just no, hell no."
    }
    if ( a > 50 ) {
    var obj=document.getElementById("result");
    obj.innerHTML = a + " percents of love." + "<br/>" + "<br/>" + "High hope, I guess."
    }
    if ( a < 51 ) {
    var obj=document.getElementById("result");
    obj.innerHTML = a + " percents of love." + "<br/>" + "<br/>" + "It's hard."
    }
    }
}
