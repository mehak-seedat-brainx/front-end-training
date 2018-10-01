$(document).ready(function() {
    $("#sub").click(function(){
        var em=$("#email").val();
        var pw=$("#pwd").val();
        $.ajax({
            url: "https://reqres.in/api/users",
            type: "POST",
            dataType:"json",
            data: {
                email:em ,
                password:pw
            },
            async:false,
            success: function(response){
                alert("Email: " + response.email + "\nPassword: "+response.password+"\nUser Id: " + response.id);
                console.log(response);
            }
        });

    });

    $("#btn1").click(function(){
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(myMap,showError);

        }
        else {
            alert("Geolocation is not supported by this browser.)");
        }

        function myMap(position) {
            lat=position.coords.latitude;
            lon=position.coords.longitude;
            $.ajax({
                url: 'https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon +  '&units=metric&APPID=bd9e0afad0dbafd083efd98322a0a272',
                type: "GET",
                dataType: "jsonp",
                success: function(data){
                    alert("Latitude: "+data.coord["lat"] + " Longitude: "+data.coord["lon"]+"\nCountry: " + data.sys["country"]+ "\nTemperature: " + data.main["temp"]);
                }
            });

        }
    });
    function showError(){alert ("Cannot get location");}

});
