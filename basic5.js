function bill(choice,quantity=0)
{
    var amt =0;
    if(choice==1)
        amt=30;
    else if(choice==2)
        amt=40;
    else if(choice==3)
        amt=20;
    else if(choice==4)
         amt=10;
    else
        document.write("Wrong choice");

    if (choice<=4 && choice>=1)
    {
        var bill_amt=amt*quantity;
        document.write("<h2> the total amount="+bill_amt + "</h2>");
    }

}