//js for scroller 
function ScrollBooks(side){
    const elem = document.getElementById("horizontal-scroll");
    let scroller = elem.scrollLeft;
    let elemWidth = elem.clientWidth;
    let scrollableWidth = elem.scrollWidth;
    let total = scrollableWidth - scroller - elemWidth;

    if( side == "left")
    {
        if(total != elem.offsetWidth)
        {
            elem.scrollLeft += 200;
        }
    }
    else{
        if( elem.scrollLeft != 0)
        {
            elem.scrollLeft -= 200;
        }
    }
}
