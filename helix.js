/* Author: Shanthi Kollu
 * date: 3/24/2018
 * Description: Identify helix loop in the given RNA 2D structure and identify the 
 * positions.
 */
function submit(){
		var myInput, myArray, myArrayList, i,j,x1, px1,x2, px2,y1, py1,y2, py2,count =0, start, end;
        myInput = document.getElementById('num').value
        
        myArray= myInput.split(" ");
          myArrayList =myArray.map(function(val){
              return parseInt(val);
          })
          
          start = performance.now();
          
          for(i=0; i<myArrayList.length; i++){
        	  if(myArrayList[i]>0){
        		  x1 = myArrayList[i];
        		  px1 = i;
        		  
        		  while(myArrayList[i+1]==myArrayList[i]-2 && myArrayList[i+1]!=0){
        			  i++;
        		  }
        		  
        		  x2 = myArrayList[i];
        		  px2 = i;
        		  
        		  for(j=i; j<myArrayList.length; j++){
        			  while(j<myArrayList.length && myArrayList[j]!=-x2){
        				  j++;
        			  }
        			if(j<myArrayList.length){ 
        			  y1 = myArrayList[j];
        			  py1 = j;
        			  
        			  while(myArrayList[j+1]==myArrayList[j]-2 && myArrayList[j+1]>= -x1){
        				  if(j<myArrayList.length)
        					  j++;
        			  }
        			  
        			  y2 = myArrayList[j];
        			  py2 = j;
        			  j++;
        			  count = count+1;
        			  document.getElementById('index').innerHTML+= "Beginning =" + px1 + " "+ " Ending =" + py2 + "<br />";
        			  
        		  }
        	  }
        	  } 
          }
          
          end = performance.now();
          
          document.getElementById('count').innerHTML="Count ="+(count);
          document.getElementById('demo').innerHTML="Execution Time =" +(end-start)+ " ms";
}