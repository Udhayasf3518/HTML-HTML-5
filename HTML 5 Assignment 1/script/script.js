function Do()
{
    var count =0;
    var formArr = [];
    var Name = document.getElementById("Name");
    var Email = document.getElementById("Email");
    var Phone = document.getElementById("Phone");
    var WebSite =document.getElementById("WebSite");
    var Message = document.getElementById("Message");

// Name
    var regex = /^[A-Za-z ]+$/;
    if (Name.value != "") 
    {
        if (!regex.test(Name.value)) 
        {
            alert("Only alphabet is allowed! in Name");
            Name.style.border = "1px solid red";

        }
        else 
        {
            Name.style.border = "1px solid green";
            document.getElementById("Name").innerHTML="";
            count++;
        }
    }
    else
    {
        alert("Name Field Required");
        Name.style.border = "1px solid red";
    }

//Email

    if (Email.value != "") 
    {
        if (!/(.+)@(.+){2,}\.(.+){2,}$/.test(Email.value))
        {
            alert("Please Enter a valid Email Id");
            Email.style.border = "1px solid red";
        }
        else 
        {
            Email.style.border = "1px solid green";
            document.getElementById("Email").innerHTML="";
            count++;
        }
    }
    else
    {
        alert("Email Id Required");
        Email.style.border = "1px solid red";
    }
    
//Phone Number

    if (Phone.value != "") 
    {
        if (!/^([6-9]{1})-([0-9]{3})-([0-9]{3})-([0-9]{3})$/.test(Phone.value)) 
        {
            alert("Please Enter a valid Phone Number");
            Phone.style.border = "1px solid red";
        }
        else 
        {
            Phone.style.border = "1px solid green";
            document.getElementById("Phone").innerHTML="";
            count++;
        }
    }
    else
    {
        alert("Phone Number Required");
        Phone.style.border = "1px solid red";
    }

//WebSite
    if (!/^(https):\/\/[^ "]+$/.test(WebSite.value)) 
    {
        WebSite.style.border = "1px solid red";
        count++;
    }
    else 
    {
        WebSite.style.border = "1px solid green";
        document.getElementById("WebSite").innerHTML="";
        count++;
    }

//Message 

    if (Message.value != "")
    {
        Message.style.border = "1px solid green";
        document.getElementById("Message").innerHTML="";
        count++;
    }
    else
    {
        alert("Please Enter your Message")
        Message.style.border = "1px solid red";
    }


    if(count>=4)
    {
        //var Result=document.getElementById("Result");
        Result.style.display="block";
        var store=document.getElementById("store");
        var formElements=document.getElementById("Form").elements;
        for (var i=0; i<formElements.length; i++)
        {   
            formArr.push(formElements[i].value);
        }
        sessionStorage.setItem('key', JSON.stringify(formArr));
        document.getElementById("Form").reset();
        for(var x=0; x < sessionStorage.length;x++)
        {
            var result=JSON.parse(sessionStorage.getItem('key'));
            store.innerHTML +="<br><br> Name:" + result[0] + "<br><br> Email:" +result[1] + "<br><br> phone:" +result[2]+ "<br><br> web:" +result[3]+ "<br><br> Message:" +result[4]+ "<br>";
        }
    }
}