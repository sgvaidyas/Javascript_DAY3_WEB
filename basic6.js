function callme()
{
    ch = prompt("Enter the choice = ",0);
    ch = parseInt(ch);
    if (ch<=4 && ch>=1)
    {
        qty = prompt("Enter the qty = ",0);
        qty = parseInt(qty);
    }    
    switch(ch)
    {
        case 1:document.write("<h2>BILL = " + (30*qty) + "<h2>");break;
        case 2:document.write("<h2>BILL = " + (40*qty) + "<h2>");break;
        case 3:document.write("<h2>BILL = " + (20*qty) + "<h2>");break;
        case 4:document.write("<h2>BILL = " + (10*qty) + "<h2>");break;
        default:document.write("<h2>INVALID CHOICE <h2>");break;
    }
}