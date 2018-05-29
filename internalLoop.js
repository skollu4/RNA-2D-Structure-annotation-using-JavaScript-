/* Author: Shanthi Kollu
 * date: 3/24/2018
 * Description: Identify internal loop in the given RNA 2D structure and identify the 
 * positions.
 */
function submit(){
	var myInput, myArray, myArrayList, i, j, y1, y2, x1, x2, px1, px2, py2, count =0, start, end;
	myInput = document.getElementById('num').value;
	
	 myArray= myInput.split(" ");
     myArrayList =myArray.map(function(val){
         return parseInt(val);
     })
     
     start = performance.now();
     
     for(i=0; i<myArrayList.length; i++){
    	 if(myArrayList[i]>0){
    		 if(i<myArrayList.length){
    			 if(myArrayList[i+1]==0){
    				 y1= myArrayList[i];
    				 py1 = i;
    				 
    				 i++;
    				 
    				 while(i<myArrayList.length && myArrayList[i]==0){
    					 i++;
    				 }
    				 
    				 if(i<myArrayList.length){
    					 if(myArrayList[i]>0 && myArrayList[i]!= y1){
    						 x1 = myArrayList[i];
    						 px1 = i;
    						 
    						 i++;
    						 
    						 for(j= 0; j<myArrayList.length; j++){
    							 if(myArrayList[j]<0 && myArrayList[j]==-x1){
    								 if(j<myArrayList.length){
    									 if(myArrayList[j+1]==0){
    										 x2 = myArrayList[j];
    										 px2 = j;
    										 
    										 j++;
    										 
    										 while(j<myArrayList.length && myArrayList[j]==0){
    											 j++;
    										 }
    										 
    										 if(myArrayList[j]==-y1){
    											 count = count+1;
    											 y2 = myArrayList[j];
    											 py2 = j;
    											 
    											 document.getElementById('index').innerHTML+= "Beginning =" + py1 + " "+ " Ending =" + py2 + "<br />";
    										 }
    									 }
    								 }
    							 }
    						 }
    						 
    					 }
    				 }
    			 }
    		 }
    	 }
     }
     
     end = performance.now();
     
     document.getElementById('count').innerHTML="Count ="+(count);
     document.getElementById('demo').innerHTML="Execution Time =" +(end-start)+ " ms";
}
