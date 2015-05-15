function drafted(){
	//here I want all the functions that are applicable to drafted players to be in here 
	

function collegestat(){
	
//this function pulls college stats from 2014 and 2013 NCAAF season
	
}

function combinestat(){
	//this function will display the stats from the NFL combine
	
}

function projectedstat(){
//this function will give the user projected stats, and projected fantasy points of every player that is searched	
	
}

function compare(){
	//in this function I would like to compare the stats of 2014 rookies and 2015 drafted rookies 

}

function experts(){
	//this function serves as a way to display what the "experts" have been saying about searched player 
}

	
function draftpick(){
	//this will give us what position the players (rookies & 2014 rookies) were drafted in
}
	
function standing(){
	//this function will call only the 2014 rookies and tell the user where they stand on a particular roster, or on the fantasy football rating
}

function search(){
	//this function is for my serach query function 
}

}



/*function calcscore(tds,ints,rate,tyds){
	 var td = "TD"
	 var "TD"val = "TD"*.35
	 
	 
	 
	 var qbrate = tdval+intval+rushval
	 //loop through and get an average
	 
 }*/

function qbrate(){
	
 $.getJSON("collegeqbs2014.json", function(data){
	 $.each(data, function (key,val){
		var tds = val["TD"];
		var ints = val["Int"];
		var rate = val["Rate"];
		var tyds = val ["Yds"]
		var qbscore = (tds * 0.35) + (ints * 0.30) + (rate * 0.20) + (tyds * 0.15);
		if(tds >= 20 && val["Int"] < 10 && val["Yds"] > 2500 && val["Rate"] > 120.00){
			console.log(val["Player"] + "  "+ val["TD"] + "  " + val["Int"] + "  "+ val["Yds"] + " " +val["Rate"]);
			//$("#QB").append("<div>" + val["Player"] + "  "+ val["TD"] + "  " + val["Int"] + "  "+ val["Yds"] + " " +val["Rate"] + "<b>" + "/ " + qbscore + " /" + "</b>" + "</div>");

			$("#QB").append("<p><a id='" + key + "' href='#'>" + val["Player"] + "</a></p>");
			var desc = "'<center><strong>" + val["Player"] + "</strong></center><br />Touchdowns: " + tds + "<br />Interceptions: " + ints + "<br />Total Yards: " + tyds + "<br />QB Rating: " + rate + "<br />" + "<strong>Charlie Score: " + qbscore + "</strong>'";
			$("#" + key).attr("onmouseover", "nhpup.popup( " + desc +  ");");

			
		}
		 
			
		 
			
		 //console.log(tds);
		 
	 });
 });
     

 
};
  
	 
	 
    
 
 
 //load JSON  file here-------
 //put JSON info into an array-----------
 //
 // this will list by importance....
 //1) (35%)TDs (if the qb has more than 20+ tds in his sr. yr. of college then show qbs, conversely, if qb has < 20+ tds, then don't show)
 //2) (30%)INTs (If the qb has < than 10 ints, show QB, if > 10, then don't show qb)
 //3) (20%)QB rating (if the qb rating is less than 120.00 pts, then don't show qbs)
 //4) (15%)Total Yds(If the QB has 2500+ yds, then show qb, else, don't show qb)




function rbscore(){
	$.getJSON("rushingcfb.json", function(data){
	 $.each(data, function (key,val){
		 var tds = val["TD"];
		 var tyds = val["Yds"];
		 var avg = val["Avg"];
		 var rbscore = (tds * 0.40) + (tyds * 0.30) + (avg * 0.30);
		 if(tds >= 15 && val["Yds"] > 1100 && val["Avg"] > 5){
		 console.log(val["Player"] + "  "+ val["TD"] + "  " + val["Yds"] + " " +val["Avg"]);
		 //$("#RB").append("<div>" + val["Player"] + "  "+ val["TD"] + "  " + val["Yds"] + "  "+ val["Avg"] + "<b>" + "/ " + rbscore + " /" + "</b>" + "</div>");
		 
		 
		 $("#RB").append("<p><a id='" + key + "' href='#'>" + val["Player"] + "</a></p>");
			var desc = "'<center><strong>" + val["Player"] + "</strong></center><br />Touchdowns: " + tds + "<br />Total Yards: "  + tyds +  "<br/> Average Yards per Carry:"+  avg + " <br/>" + "<strong>Charlie Score: " + rbscore + "</strong>'";
			$("#" + key).attr("onmouseover", "nhpup.popup( " + desc +  ");");

		 
		 }
	
	//1) (35%) TDs(if RB has More than 15+ tds, then show rbs, if not, then don't show rbs)
	//2) (30%)Total yds(If RB has more than 1100 yds, then show RBS, if not then don't show rbs)
	//3)  (20%) yds/carry (if RB has less than 5 yards a carry then don't show, else show RBS)
	//4)    (%15) combine, (if rb has less a 4.5 seconds in 40 yd dash then show RB, else don't show)
	 });	

	});
};

function WRscore(){
		$.getJSON("WRCFB2014.json", function(data){
	 $.each(data, function (key,val){
		 var tds = val["TD"];
		 var tyds = val["Yds"];
		 var avg = val["Avg"];
		 var wrscore = (tds * 0.40) + (tyds * 0.30) + (avg * 0.30);
		 if(tds >= 8 && val["Yds"] > 600 && val["Avg"] > 5.5){
		 console.log(val["Player"] + "  "+ val["TD"] + "  " + val["Yds"] + " " +val["Avg"]);
		 //$("#WR").append("<div>" + val["Player"] + "  "+ val["TD"] + "  " + val["Yds"] + "  "+ val["Avg"] +"<b>" + "/" + wrscore + "/" +"</b>" + "</div>");
		 
		 $("#WR").append("<p><a id='" + key + "' href='#'>" + val["Player"] + "</a></p>");
			var desc2 = "'<center><strong>" + val["Player"] + "</strong></center><br />Touchdowns: " + tds + "<br />Total Yards: "  + tyds +  "<br/> Average Yards per Carry:"+  avg + " <br/>" + "<strong>Charlie Score: " + wrscore + "</strong>'";
			$("#" + key).attr("onmouseover", "nhpup.popup( " + desc2 +  ");");
		 
		 
		 
		 }
	//1) (35%) Tds (if WR has more than 8 tds, show WR, else don't show WR)
	//2) (25%) Total Yds (if WR has more than 600yds then show WR, else don't show WR )
	//3) (25%) Yds/Catch (if WR has more than 10 yds a catch, then show WR, else don't show WRs)
	//4)  (15%) combine 40 yd dash(if WR has less than 4.5 seconds in 40 yd dash then show WR, else don't show)
 });	

	});
};
	
	
	
	
	
	
	
	
	
	
