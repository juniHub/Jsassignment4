/*****************************************
File: asgn4_Nguyen.html
Author: Thuy Tien Nguyen
Assignment: 4
Create Date: 7/10/2019
Last Modified: 7/13/2019
****************************************/

//global array variable
var BeatlesArray;

var $ = function (id) 
{
    return document.getElementById(id);
}

//handle click John image and add "John" to the array
var clickJohn = function()
{
	this.border = "4px";
	this.style.color = "yellow";
	$("paul").border = "0px";
	$("george").border = "0px";
	$("ringo").border = "0px";
	BeatlesArray.push("John");
}

//handle click Paul image and add "Paul" to the array
var clickPaul = function()
{
	this.border = "4px";
	this.style.color = "yellow";
	$("john").border = "0px";
	$("george").border = "0px";
	$("ringo").border = "0px";
	BeatlesArray.push("Paul");
}

//handle click George image and add "George" to the array
var clickGeorge = function()
{
	this.border = "4px";
	this.style.color = "yellow";
	$("john").border = "0px";
	$("paul").border = "0px";
	$("ringo").border = "0px";
	BeatlesArray.push("George");
}

//handle click Ringo image and add "Ringo" to the array
var clickRingo = function()
{
	this.border = "4px";
	this.style.color = "yellow";
	$("john").border = "0px";
	$("paul").border = "0px";
	$("george").border = "0px";
	BeatlesArray.push("Ringo");
}

var processInfo = function()
{
	var myListStr = "";
	
	//add list to BeatlesArray
	for(cntr = 0; cntr < BeatlesArray.length; cntr++)
	{
	    
		myListStr += cntr+1 + ". " + BeatlesArray[cntr] + ", ";
			
	}
	
	//print out list message 
	$("list").innerHTML = myListStr.substring(0,myListStr.length-2);
	
}



window.onload = function () 
{
  	//handle onclick event
	$("john").onclick = clickJohn;
	$("paul").onclick = clickPaul;
	$("george").onclick = clickGeorge;
	$("ringo").onclick = clickRingo;
	$("showlist").onclick = processInfo;
	
	BeatlesArray = new Array();
		
}
