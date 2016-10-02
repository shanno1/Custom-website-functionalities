// JavaScript Document

var selected= [];

function bodySelector(bodypart){
	 
	var flag=0;
	
	//check to see if slected item has already
	for (var i = 0; i<selected.length;i++){
		if(selected[i] == bodypart){
			
			flag=1;
		} 
		
	}
	//window.alert(bodypart);
	if(selected.length <= 2 && flag != 1){
		selected.push(bodypart); 
	}
	else{
	
	}
	var collect="";
	//window.alert(flag);
	for (i = 0; i < selected.length ; i++)	{
			collect += " <li id='"+selected[i]+"'>" + selected[i] + " <a id='"+selected[i]+"' style='color:red;' href='javascript: remove("+i+")'>[x]</a><br></li>";
    };
	$("#Selected-body").empty();
	$("#Selected-body").append(collect);
}


//when [x] is clicked the function is called to remove the selected bodypart
function remove(u){
	
	//removes item from list
	selected.splice(u,1);
	
	//holding variable for list
	var collect="";
	//window.alert(flag);
	
	//refreshing list
	for (i = 0; i < selected.length ; i++)	{
			collect += " <li id='"+selected[i]+"'>" + selected[i] + " <a id='"+selected[i]+"' style='color:red;' href='javascript: remove("+i+")'>[x]</a><br></li>";
    };
	//clearing and appending the list.
	$("#Selected-body").empty();
	$("#Selected-body").append(collect);
}