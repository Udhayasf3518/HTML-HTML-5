var start, end, clear, myCanvas;
var choice =0;
var count = 0;
var zoomout = 1;
var topmargin = 150;
var leftmargin = 700;
var letter="Deliver innovation with ease";
var i=0;
var xaxis=75;
function dofirst()
{
    myCanvas = document.getElementById("myCanvas").getContext('2d');
    myCanvas.fillStyle="white";
    start = window.setInterval(block,120);
}
//Company logo
function block()
{
    choice++;
    switch(choice)
    {
        case 1:
            myCanvas.fillRect(120,180,25,25);
            break;

        case 2:
            myCanvas.fillRect(120,150,25,25);
            document.getElementById("Main").style.transform = "rotate(-10deg)";
            break;

        case 3:
            myCanvas.fillRect(120,120,25,25);
            document.getElementById("Main").style.transform = "rotate(-20deg)";
            break;

        case 4:
            myCanvas.fillRect(150,180,25,25);
            document.getElementById("Main").style.transform = "rotate(-30deg)";
            break;

        case 5:
            myCanvas.fillRect(150,150,25,25);
            document.getElementById("Main").style.transform = "rotate(-40deg)";
            break;

        case 6:
            myCanvas.fillRect(150,120,25,25);
            document.getElementById("Main").style.transform = "rotate(-50deg)";
            break;

        case 7:
            myCanvas.fillRect(180,180,25,25);
            document.getElementById("Main").style.transform = "rotate(-65deg)";
            break;

        case 8:
            myCanvas.fillRect(180,150,25,25);
            document.getElementById("Main").style.transform = "rotate(-80deg)";
            break;

        case 9:
            myCanvas.fillRect(180,120,25,25);
            document.getElementById("Main").style.transform = "rotate(-90deg)";
            break;
        case 10:
            myCanvas.clearRect(180,180,25,25);
            myCanvas.rotate(.8);
            myCanvas.translate(70,-10);
            myCanvas.fillRect(200,0,25,25);
            break;
        case 11:
            myCanvas.rotate(.77);
            myCanvas.font = "bold 90px Tahoma";
            myCanvas.fillText("Syncfusion",190,-65,500);
            break;
        case 12:
            //Reduce the zoom size of canvas
            leftmargin += 40;
            document.getElementById("Main").style.marginLeft = `${leftmargin}px`;
            document.getElementById("Main").style.marginTop = `${topmargin}px`;
            document.getElementById("Main").style.zoom = 0.65;
            break;
        case 13:
            myCanvas.beginPath();
            myCanvas.arc(690,-130,8,0,2*Math.PI);
            myCanvas.strokeStyle="white";
            myCanvas.stroke();
            myCanvas.font = "12px Tahoma";
            myCanvas.fillText("R",686,-126);
            break;
        
        default:
            window.clearInterval(start);
            clear = window.setInterval(words,100);
            break;
    }
}

//Content below the logo and company name
function words()
{
    var linewidth=0.3
    myCanvas.font = "37px Tahoma";
    if(i<letter.length)
    {
        myCanvas.fillText(`${letter[i]}`,xaxis,5);
        myCanvas.translate(5,0);
        xaxis +=myCanvas.measureText(letter[i++]).width + linewidth;
    }
    else
    {
        myCanvas.beginPath();
        myCanvas.arc(555,-16,8,0,2*Math.PI);
        myCanvas.strokeStyle="white";
        myCanvas.stroke();
        myCanvas.font = "12px Tahoma";
        myCanvas.fillText("R",551,-12);
        window.clearInterval(clear);
    } 
}


window.addEventListener("load",dofirst,false);