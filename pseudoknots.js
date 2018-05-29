/* Author: Shanthi Kollu
 * date: 3/24/2018
 * Description: Identify Pseudoknots in the given RNA 2D structure and identify the 
 * positions.
 */
function submit(){
	var myInput, myArray, myArrayList, i, j, k, x1, px1, x2, px2, count =0, x3, px3, x4, px4, start, end;
	myInput = document.getElementById('num').value;
    
    myArray= myInput.split(" ");
      myArrayList =myArray.map(function(val){
          return parseInt(val);
      })
      
      start = performance.now();
      
      for(i=0; i<myArrayList.length; i++){
    	  if(myArrayList[i]>0){
    		  x1 = myArrayList[i];
    		  px1 = i;
    		  i++;
    		  
    		  for(j=i; j<myArrayList.length; j++){
    			  if(myArrayList[j]<0 && myArrayList[j]==-x1){
    				  x2 = myArrayList[j];
    				  px2 = j;
    				
    				  for(k=i; k<myArrayList.length; k++){
    					  if(myArrayList[k]>0 && k<px2){
    						  
    						  x3 = myArrayList[k];
    						  px3 = k;
    						  
    						  k++;
    						  
    						  while(myArrayList[k]!=-x3 && k<myArrayList.length){
    							  k++;
    						  }
    						  
    						  if(myArrayList[k]==-x3 && k>px2){
    							  x4 = myArrayList[k];
    							  px4 = k;
    							  count = count+1;
    							  document.getElementById('index').innerHTML+= "Beginning =" + px1 + " "+ " Ending =" + px4 + "<br />";
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