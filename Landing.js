var Firstname="";
var Lastname="";
var Phonenumber="";
var mailid="";
var password="";
var rpassword="";
var chr=[];

function start()
{
var count=0;      Firstname=document.getElementById("firstname").value
      Lastname=document.getElementById("lastname").value
      Phonenumber=document.getElementById("phonenumber").value
      mailid=document.getElementById("Mailid").value
      password=document.getElementById("Psword").value
      rpassword=document.getElementById("RPsword").value
for(i=0;i<Firstname.length;i++)
{
    var val=Firstname.charCodeAt(i)
    
    if((val>64)&&(val<91))
    {
                document.getElementById("caution").style.visibility="hidden";
      count=1;
    }
    else
    {
 document.getElementById("caution").style.color="red";
    }
 
 }
   
  for(k=0;k<Lastname.length;k++)
{
    var value=Lastname.charCodeAt(k)
    
    if((value>64)&&(value<91))
    {
                document.getElementById("caution1").style.visibility="hidden";
      if(count==1)
        {
          count=2;
        }        
      
    }
    else
    {
 document.getElementById("caution1").style.color="red";
    }
  
 }
  
  for(x=0;x<Phonenumber.length;x++)
{
    var number=Phonenumber.charCodeAt(x)
    
    if((number>47)&&(number<58))
    {
                document.getElementById("caution2").style.visibility="hidden";
        if(count==2)
        {
          count=3;
        }
    }
    else
    {
 document.getElementById("caution2").style.color="red";
    }

 }
  
  for(m=0;m<mailid.length;m++)
{
    var Mailid=mailid.charCodeAt(m)
    
    if((Mailid>63)&&(Mailid<123))
    {
                document.getElementById("caution3").style.visibility="hidden";
        if(count==3)
        {
          count=4;
        }
    }
    else
    {
 document.getElementById("caution3").style.color="red";
    }
  
}

  for(p=0;p<password.length;p++)
{
    if(password.length>7)
    {
                document.getElementById("caution4").style.visibility="hidden";
        if(count==4)
        {
          count=5;
        }
    }
    else
    {
 document.getElementById("caution4").style.color="red";
    }
  
    if(password==rpassword)
    {
                document.getElementById("caution5").style.visibility="hidden";
       if(count==5)
        {
          count=6;
        }
    }
    else
    {
 document.getElementById("caution5").style.color="red";
    }
  
 }

  if(count==6){
  document.getElementById("success").style.color="green";
    document.getElementById("warning").style.color="white";
}
 
  else{
 document.getElementById("warning").style.color="red";
    document.getElementById("success").style.color="white";
    
  }

}
