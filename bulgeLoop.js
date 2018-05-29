/* Author: Shanthi Kollu
 * date: 3/24/2018
 * Description: Identify bulge loop in the given RNA 2D structure and identify the 
 * positions.
 */
function submit(){
	var myInput, myArray, myArrayList, i, j, k, y1, x1, x2, px1, px2,b1, pb1,c1, c2, pc2, count =0, start, end;
	myInput = document.getElementById('num').value;
	
	 myArray= myInput.split(" ");
     myArrayList =myArray.map(function(val){
         return parseInt(val);
     })
     
     start = performance.now();
     
     for(i=0; i<myArrayList.length; i++){
    	 if(myArrayList[i]>0){
    		 if(i<myArrayList.length){
    			 
    				 x1= myArrayList[i];
    				 px1 = i;
    				 
    				 i++;
    				 
    				 for(j=i+1; j<myArrayList.length; j++){
    					 
    					 if(myArrayList[j]<0 && myArrayList[j]==-x1){
    						 if(j<myArrayList.length){
    							 if(myArrayList[j+1]==0){
    								 x2 = myArrayList[j];
    								 px2 = j;
    								 
    								 j++;
    								 
    								 while(j<myArrayList.length && myArrayList[j]==0){
    									 j++;
    								 }
    								 
    								 if(myArrayList[j]<0 && j<myArrayList.length){
    									 if(myArrayList[j]!=x2){
    										 
    										 y1 = myArrayList[j];
    										 py1 = j;
    										 
    										 j++;
    										 
    										 for(k=j+1; k<myArrayList.length; k++){
    											 if(myArrayList[k]== -y1){
    												 if(k<myArrayList.length){
    													 
    													 y2 = myArrayList[k];
    													 py2 = k;
    													 
    													 count = count+1;
    													 document.getElementById('index').innerHTML+= "Beginning =" + px1 + " "+ " Ending =" + py2 + "<br />";
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
    			 
    		 
    	 
     }
     
     for(i=0; i<myArrayList.length; i++){
    	 if(myArrayList[i]<0){
    		 if(i<myArrayList.length){
    			 if(myArrayList[i+1]==0 && i<myArrayList.length){
    				 b1 = myArrayList[i];
    				 pb1 = i;
    				 
    				 i++;
    				 
    				 while(myArrayList[i]==0 && i<myArrayList.length){
    					 i++;
    				 }
    				 
    				 if(i<myArrayList.length && myArrayList[i]<0){
    					 if(myArrayList[i]!=b1){
    						 c1 = myArrayList[i];
    						 i++;
    						 
    						 for(j=i+1; j<myArrayList.length; j++){
    							 if(myArrayList[j]==-c1){
    								 if(j<myArrayList.length){
    									 c2 = myArrayList[j];
    									 pc2 = j;
    									 
    									 count = count+1;
    									 document.getElementById('index').innerHTML+= "Beginning =" + pb1 + " "+ " Ending =" + pc2 + "<br />";
    									 
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
