var td=document.querySelectorAll("td");
var result=document.querySelector(".winning-message h1");
var result1=document.querySelector(".winning-messages h1");



var count=0;

for(var i=0;i<td.length;i++)
{
    td[i].addEventListener("click",function()
    {
        count++;

        if(count%2==0)
        this.textContent="0";
        else
        this.textContent="x";
    })
}


for(var i=0;i<td.length;i++)
{
    td[i].addEventListener("click",function()
    {
        if(td[0].textContent===td[1].textContent && td[0].textContent===td[2].textContent)
        {
            if(td[0].textContent==='x')
            {
                result.innerText="X Wins";
                document.getElementById("winning-message").className="winning-messages";
            }
            else if(td[0].textContent==='0')
            {
                result.innerText="0 Wins";
                document.getElementById("winning-message").className="winning-messages";
            }
        }
        if(td[3].textContent===td[4].textContent && td[3].textContent===td[5].textContent)
        {
            if(td[3].textContent==='x')
            {console.log("WIN");
                result.innerHTML="X Wins";
                document.getElementById("winning-message").className="winning-messages";
            }
            else if(td[3].textContent==='0')
            {console.log("WIN");
                result.innerHTML="0 Wins";
                document.getElementById("winning-message").className="winning-messages";
            }
        }
        if(td[6].textContent===td[7].textContent && td[6].textContent===td[8].textContent)
        {
            if(td[6].textContent==='x')
            {
                result.innerHTML="X Wins";
                document.getElementById("winning-message").className="winning-messages";
            }
            else if(td[6].textContent==='0')
            {
                result.innerHTML="0 Wins";
                document.getElementById("winning-message").className="winning-messages";
            }
        }
        if(td[0].textContent===td[3].textContent && td[0].textContent===td[6].textContent)
        {
            if(td[0].textContent==='x')
            {
                result.innerHTML="X Wins";
                document.getElementById("winning-message").className="winning-messages";
            }
            else if(td[0].textContent==='0')
            {
                result.innerHTML="0 Wins";
                document.getElementById("winning-message").className="winning-messages";
            }
        }
        if(td[1].textContent===td[4].textContent && td[1].textContent===td[7].textContent)
        {
            if(td[1].textContent==='x')
            {
                result.innerHTML="X Wins";
                document.getElementById("winning-message").className="winning-messages";
                
            }
            else if(td[1].textContent==='0')
            {
                result.innerHTML="0 Wins";
                document.getElementById("winning-message").className="winning-messages";
            }
        }
        if(td[2].textContent===td[5].textContent && td[2].textContent===td[8].textContent)
        {
            if(td[2].textContent==='x')
            {
                result.innerHTML="X Wins";
                document.getElementById("winning-message").className="winning-messages";
            }
            else if(td[2].textContent==='0')
            {
                result.innerHTML="0 Wins";
                document.getElementById("winning-message").className="winning-messages";
            }
        }
        if(td[0].textContent===td[4].textContent && td[0].textContent===td[8].textContent)
        {
            if(td[0].textContent==='x')
            {
                result.innerHTML="X Wins";
                document.getElementById("winning-message").className="winning-messages";
            }
            else if(td[0].textContent==='0')
            {
                result.innerHTML="0 Wins";
                document.getElementById("winning-message").className="winning-messages";
            }
        }
        if(td[2].textContent===td[4].textContent && td[2].textContent===td[6].textContent)
        {
            if(td[2].textContent==='x')
            {
                result.innerHTML="X Wins";
                document.getElementById("winning-message").className="winning-messages";
            }
            else if(td[2].textContent==='0')
            {
                result.innerHTML="0 Wins";
                document.getElementById("winning-message").className="winning-messages";
            }
        }
        if(count==9)
        {
            if(td[0].textContent===td[1].textContent && td[0].textContent===td[2].textContent){
                if(td[0].textContent==='x')
                result.innerText="X Wins";
                else
                result.innerText="0 Wins";
            }
            else if(td[3].textContent===td[4].textContent && td[3].textContent===td[5].textContent){
                if(td[3].textContent==='x')
                result.innerText="X Wins";
                else
                result.innerText="0 Wins";
            }
            else if(td[6].textContent===td[7].textContent && td[6].textContent===td[8].textContent){
                if(td[6].textContent==='x')
                result.innerText="X Wins";
                else
                result.innerText="0 Wins";
            }
            else if(td[0].textContent===td[3].textContent && td[0].textContent===td[6].textContent){
                if(td[0].textContent==='x')
                result.innerText="X Wins";
                else
                result.innerText="0 Wins";
            }
            else if(td[1].textContent===td[4].textContent && td[1].textContent===td[7].textContent){
                if(td[1].textContent==='x')
                result.innerText="X Wins";
                else
                result.innerText="0 Wins";
            }
            else if(td[2].textContent===td[5].textContent && td[2].textContent===td[8].textContent){
                if(td[2].textContent==='x')
                result.innerText="X Wins";
                else
                result.innerText="0 Wins";
            }
            else if(td[0].textContent===td[4].textContent && td[0].textContent===td[8].textContent){
                if(td[0].textContent==='x')
                result.innerText="X Wins";
                else
                result.innerText="0 Wins";
            }
            else if(td[2].textContent===td[4].textContent && td[2].textContent===td[6].textContent){
                if(td[2].textContent==='x')
                result.innerText="X Wins";
                else
                result.innerText="0 Wins";
            }
            else
            result.innerHTML="No One Won, Play Again";
            
            document.getElementById("winning-message").className="winning-messages";
        }
    });
}