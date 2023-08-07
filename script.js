





let h = document.createElement("h1");

h.setAttribute("id","title");

h.setAttribute("style","text-align:center;color:white;font-family:Times New Roman;margin-top:30px;");

h.innerText="Creating Forms by Using Only DOM ";

document.body.append(h);




let des = document.createElement("p");

des.setAttribute("id","description");

des.setAttribute("style","text-align:center;color:white;font-family:Times New Roman;font-size:20px;");

des.innerText="With Responsive Table Which assigns width automatically itself";

document.body.append(des);

let newline = document.createElement("br");

let td = document.createElement("td");


let l = [];
let v=[];
let c=[];

let xyt = [];




















let a1 = document.createElement("div");

a1.setAttribute("class","row");




let table = document.createElement("table");






let thead = document.createElement("thead");



let tr = document.createElement("tr");







let th = document.createElement("th");


th.setAttribute("class","th-sm");


let tbody = document.createElement("tbody");





let c1 = document.createElement("div");



let f1 = document.createElement("form");

f1.setAttribute("id","form");

f1.setAttribute("style","margin:30px 20px 50px 40px;font-family:Times New Roman");




let f11 = document.createElement("div");

let l1 = document.createElement("label");

let i1 = document.createElement("input");


let f12 = document.createElement("div");

let l2 = document.createElement("label");

let i2 = document.createElement("input");


let f13 = document.createElement("div");

let l3 = document.createElement("label");

let i3 = document.createElement("textarea");


let f14 = document.createElement("div");

let l4 = document.createElement("label");

let i4 = document.createElement("input");


let f15 = document.createElement("div");

let l5 = document.createElement("label");

let i5 = document.createElement("input");


let f16 = document.createElement("div");

let l6 = document.createElement("label");

let i6 = document.createElement("input");


let f17 = document.createElement("div");

let l7 = document.createElement("label");

let i7 = document.createElement("input");


let f18 = document.createElement("div");

let l8 = document.createElement("label");

let i8 = document.createElement("input");


let f19 = document.createElement("div");

let l9 = document.createElement("label");


let f20 = document.createElement("div");





let l11 = document.createElement("label");




let f22 = document.createElement("div");

let l12 = document.createElement("label");

let i12 = document.createElement("input");


let f23 = document.createElement("div");

let l13 = document.createElement("label");

let i13 = document.createElement("input");


let f24 = document.createElement("div");

let l14 = document.createElement("label");

let i14 = document.createElement("input");


let f25 = document.createElement("div");

let l15 = document.createElement("label");

let i15 = document.createElement("input");


let f26 = document.createElement("div");

let l16 = document.createElement("label");

let i16 = document.createElement("input");


let form2 = document.createElement("form");

let form3 = document.createElement("form");


let a2 = document.createElement("div");
let input = document.createElement("button");


a2.setAttribute("class","col");

input.setAttribute("type","button");
input.setAttribute("style","font-style:Times New Roman;font-size:30px");
input.setAttribute("class","btn btn-primary");

input.setAttribute("id","submit");




input.addEventListener("click",submit);



let y = document.createElement('tr');
let yt = 0;

function submit(){


    yt++;
    let column = [];
    for(let i=0;i<=yt;i++)
       {
        xyt[i]=document.createElement("tr");
       }

    let z = [];
    let g = 0 ;

if(document.getElementById("first-name").value && document.getElementById("last-name").value && document.getElementById("address").value && document.getElementById("pincode").value && document.getElementById("state").value && document.getElementById("country").value && document.querySelector('input[name="gridRadios"]:checked') )
{
    z[0] = document.getElementById("first-name").value;
 
        z[1] = document.getElementById("last-name").value;
    
  
        z[2] = document.getElementById("address").value;

     z[3] = document.getElementById("pincode").value;
    

      z[4] = document.getElementById("state").value;
   

        z[5] = document.getElementById("country").value;
    

        z[6] = document.querySelector('input[name="gridRadios"]:checked').value;



        let z1 = [];
let z2 = [];

let z3 = [];



    z1[0] = document.getElementById("customControlValidation2");
    z1[1] = document.getElementById("customControlValidation3");
    z1[2] = document.getElementById("customControlValidation4");
    z1[3] = document.getElementById("customControlValidation5");
    z1[4] = document.getElementById("customControlValidation6");



    for(let i=0;i<5;i++)
    { 
       

        if(z1[i].checked !== false)
        { 
            g++;
            z3.push(z1[i].value);
            z2.push(z1[i].id);
        }

        

    }


    if(g < 2)
    {

        alert('Please Select Atleast Two Foods');

    }
    else{

    


    if( g >= 2 && z.length == 7)
    {


    for(let i=0;i<z.length;i++)
    {
 
    column[i] = document.createElement("td");
  
  column[i].setAttribute("style","font-family:Times New Roman;font-size:20px;color:white");
    column[i].append(z[i]);
 xyt[yt].append(column[i]);
    }


 
    column[6] = document.createElement("td");
 
    column[6].setAttribute("style","font-family:Times New Roman;font-size:20px;color:white");

    for(let i=0;i<z3.length;i++)

    {
   
    column[6].append(z3[i]+"      ");
  xyt[yt].append(column[6]);
    }

       
    
  tbody.append(xyt[yt]);
    }


   document.getElementById("first-name").value = "";
     
             document.getElementById("last-name").value = "";
        
      
            document.getElementById("address").value = "";
    
         document.getElementById("pincode").value = "";
        
    
          document.getElementById("state").value = "";
       
    
            document.getElementById("country").value = "";
        
    
            document.getElementById("gridRadios1").checked = false;

            document.getElementById("gridRadios2").checked = false;

            for(let i=0;i<z2.length;i++)
            {
                document.getElementById(z2[i]).checked= false;
            }
    



        }

    }

    else
    {
    alert("Please Enter All The Details");
    }
      
  
  
    


}





let wrap = document.createElement("div");

wrap.setAttribute("class","table-responsive");



c1.setAttribute("class","col");




table.setAttribute("class","table table-striped w-auto"); 


table.setAttribute("display","block");

table.setAttribute("style","font-family:Times New Roman;margin-top:50px;font-size:25px;margin-left:15px;");

thead.setAttribute("position","sticky");

thead.setAttribute("top",0);

table.setAttribute("overflow","scroll");

table.setAttribute("height","300px");

table.setAttribute("width","200px");







f11.setAttribute("class","form-group");

f12.setAttribute("class","form-group");



l1.setAttribute("for","formGroupExampleInput");

i1.setAttribute("type","text");

i1.setAttribute('class','form-control');

i1.setAttribute('id','first-name');

i1.setAttribute('required','');

i1.setAttribute("placeholder","First Name");













l2.setAttribute("for","formGroupExampleInput2");

i2.setAttribute("type","text");

i2.setAttribute("class","form-control");

i2.setAttribute("id","last-name");

i2.setAttribute("required","");

i2.setAttribute("placeholder","Last Name");





f13.setAttribute("class","form-group");

f14.setAttribute("class","form-group");



l3.setAttribute("for","formGroupExampleInput");

i3.setAttribute("type","text");

i3.setAttribute("class","form-control");

i3.setAttribute("id","address");

i3.setAttribute("name","address");

i3.setAttribute("required","");

i3.setAttribute("placeholder","address");



l4.setAttribute("for","formGroupExampleInput2");

i4.setAttribute("type","text");

i4.setAttribute("class","form-control");

i4.setAttribute("id","pincode");

i4.setAttribute("required","");

i4.setAttribute("placeholder","pincode");


f15.setAttribute("class","form-group");

f16.setAttribute("class","form-group");


l5.setAttribute("for","formGroupExampleInput");

i5.setAttribute("type","text");

i5.setAttribute("class","form-control");

i5.setAttribute("id","state");

i5.setAttribute("required","");

i5.setAttribute("placeholder","state");



l6.setAttribute("for","formGroupExampleInput2");

i6.setAttribute("type","text");

i6.setAttribute("class","form-control");

i6.setAttribute("id","country");

i6.setAttribute("required","");

i6.setAttribute("placeholder","country");



f17.setAttribute("class","form-check");

f18.setAttribute("class","form-check");


l7.setAttribute("for","gridRadios1");

l7.setAttribute("class","form-check-label");



i7.setAttribute("type","radio");

i7.setAttribute("class","form-check-input");

i7.setAttribute("id","gridRadios1");

i7.setAttribute("name","gridRadios");

i7.setAttribute("value","Male");



l8.setAttribute("for","gridRadios2");

l8.setAttribute("class","form-check-label");


i8.setAttribute("type","radio");

i8.setAttribute("class","form-check-input");

i8.setAttribute("id","gridRadios2");

i8.setAttribute("name","gridRadios");

i8.setAttribute("value","Female");


f19.setAttribute("class","form-group");

l9.setAttribute("for","formGroupExampleInput");


f20.setAttribute("class","form-group");





l11.setAttribute("for","formGroupExampleInput");



f22.setAttribute("class","custom-control custom-checkbox mb-3");

l12.setAttribute("for","customControlValidation2");

l12.setAttribute("class","custom-control-label");



i12.setAttribute("type","checkbox");

i12.setAttribute("class","custom-control-input");

i12.setAttribute("id","customControlValidation2");

i12.setAttribute("value","Chicken Rice");



f23.setAttribute("class","custom-control custom-checkbox mb-3")

l13.setAttribute("for","customControlValidation3");

l13.setAttribute("class","custom-control-label");

i13.setAttribute("value","Curd Rice");



i13.setAttribute("type","checkbox");

i13.setAttribute("class","custom-control-input");

i13.setAttribute("id","customControlValidation3");



f24.setAttribute("class","custom-control custom-checkbox mb-3")

l14.setAttribute("for","customControlValidation4");

l14.setAttribute("class","custom-control-label");



i14.setAttribute("type","checkbox");

i14.setAttribute("class","custom-control-input");

i14.setAttribute("id","customControlValidation4");

i14.setAttribute("value","Fried Rice");

f25.setAttribute("class","custom-control custom-checkbox mb-3")

l15.setAttribute("for","customControlValidation5");

l15.setAttribute("class","custom-control-label");

i15.setAttribute("value","Lemon Rice");




i15.setAttribute("type","checkbox");

i15.setAttribute("class","custom-control-input");

i15.setAttribute("id","customControlValidation5");


f26.setAttribute("class","custom-control custom-checkbox mb-3")


l16.setAttribute("for","customControlValidation6");

l16.setAttribute("class","custom-control-label");



i16.setAttribute("type","checkbox");

i16.setAttribute("class","custom-control-input");

i16.setAttribute("id","customControlValidation6");

i16.setAttribute("value","Noodles");



form3.setAttribute("class","was-validated");


l1.innerText="First Name";

l2.innerText="Last Name";

l3.innerText="Address";

l4.innerText="Pincode";

l5.innerText="State";

l6.innerText="Country";

l7.innerText="Male";

l8.innerText="Female";

l9.innerText="Gender";



l11.innerText="Food";


l12.innerText="Chicken Rice";

l13.innerText="Curd Rice";

l14.innerText="Fried Rice";

l15.innerText="Lemon Rice";

l16.innerText="Noodles";

input.innerText="Submit";



c1.append(f1);


f1.append(f11,f12,f13,f14,f15,f16,f19,f20,input);


f11.append(l1,i1);


f12.append(l2,i2);


f13.append(l3,i3);


f14.append(l4,i4);


f15.append(l5,i5);


f16.append(l6,i6);


f17.append(i7,l7);


f18.append(i8,l8);

f19.append(l9,f17,f18);


f20.append(l11,form3);



f22.append(i12,l12);

f23.append(i13,l13);

f24.append(i14,l14);

f25.append(i15,l15);

f26.append(i16,l16);



form3.append(f22,f23,f24,f25,f26);



let tr1 = document.createElement("tr");



let th1 = [];








  for(let i=0;i<8;i++)

  {
    th1[i]=document.createElement("th");
  }


  th1[0].innerText="First Name";
  th1[0].setAttribute("position","sticky");
  th1[0].setAttribute("top",0);
  th1[0].setAttribute("style","color:white");

  th1[1].innerText="Last Name";
  th1[1].setAttribute("position","sticky");
  th1[1].setAttribute("top",0);
  th1[1].setAttribute("style","color:white");

  th1[2].innerText="Address";
  th1[2].setAttribute("position","sticky");
  th1[2].setAttribute("top",0);
  th1[2].setAttribute("style","color:white");

  th1[3].innerText="Pincode";
  th1[3].setAttribute("position","sticky");
  th1[3].setAttribute("top",0);
  th1[3].setAttribute("style","color:white");

  th1[4].innerText="State";
  th1[4].setAttribute("position","sticky");
  th1[4].setAttribute("top",0);
  th1[4].setAttribute("style","color:white");

  th1[5].innerText="Country";
  th1[5].setAttribute("position","sticky");
  th1[5].setAttribute("top",0);
  th1[5].setAttribute("style","color:white");

  th1[6].innerText="Gender";
  th1[6].setAttribute("position","sticky");
  th1[6].setAttribute("top",0);
  th1[6].setAttribute("style","color:white");

  th1[7].innerText="Food";
  th1[7].setAttribute("position","sticky");
  th1[7].setAttribute("top",0);
  th1[7].setAttribute("style","color:white");


  for(let i=0;i<8;i++)

  {
    tr1.append(th1[i]);
  }




thead.append(tr1);



table.append(thead,tbody);

wrap.append(table);
a2.append(wrap);

a1.append(c1,a2);

document.body.style.backgroundImage = "url('img1.jpg')";

document.body.style.backgroundSize = "2200px 2200px";



document.body.append(a1);






v = document.getElementsByTagName("label");

c = document.querySelectorAll(".custom-control-label");

let r = [];

let u = [];

u = document.querySelectorAll(".form-control");

r = document.querySelectorAll(".form-check-label");

for(let i=0;i<v.length;i++)
{
    v[i].setAttribute("style","font-size:30px;color:white");

}

for(let i=0;i<c.length;i++)
{
    c[i].setAttribute("style","font-size:25px;color:white");
    
}

for(let i=0;i<r.length;i++)
{
    r[i].setAttribute("style","font-size:25px;color:white");
    
}

for(let i=0;i<u.length;i++)
{
    u[i].setAttribute("style","font-size:25px;color:black");
    
}






