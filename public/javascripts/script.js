$(document).ready(function() {
    var id,url;
    console.log("ready");
    $(".link").css("display","none");
    var fLink=false;
    $(".getLink").click(function(){
        var par = $(this).parent().siblings("#id");
        console.log(par);
        id = par[0].innerText;
        console.log(id );
        url="https://es6-ashishsah1000.c9users.io/upd?id="+id+"&month=feb";
       
        $("#qrlink").html(url);
         $(".link").css("display","block");
    });
    
});