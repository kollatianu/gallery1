var num=0;
var arrofVid=["Waterfall1.mp4","Waterfall2.mp4","Waterfall3.mp4","Waterfall5.mp4","Waterfall6.mp4"]
var vidTag=document.querySelector("video")
function autoSlide()
{
    num++
    if(num<=arrofVid.length-1)
    {
        vidTag.src=`./${arrofVid[num]}`
    }
    else{
        num=0
        vidTag.src= `./${arrofVid[num]}`
    }
    setTimeout(autoSlide,10000)
}
autoSlide()