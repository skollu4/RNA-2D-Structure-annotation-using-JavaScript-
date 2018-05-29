/* Author: Shanthi Kollu
 * date: 3/24/2018
 * Description: Identify multi-branch loop in the given RNA 2D structure and identify 
 */
function submit(){
		var myInput, myArray, myArrayList, i, x1, px1,px2, count =0, start, end;
        myInput = document.getElementById('num').value
        
        myArray= myInput.split(" ");
          myArrayList =myArray.map(function(val){
              return parseInt(val);
          })
          
          start = performance.now();
          
          for(i=0; i<myArrayList.length; i++){
        	  if(myArrayList[i]>0){
        		  x1 = myArrayList[i];
        		  px1 =i;
        		  i++;
        		  
        		  while(i<myArrayList.length && myArrayList[i]!=-x1){
        			  i++;
        		  }
        		  
        		  px2 = i;
        		  
        		  if(i<myArrayList.length && myArrayList[i+1]==0){
        			  i++;
        			  
        			  while(i<myArrayList.length && myArrayList[i]==0){
        				  i++;
        			  }
        			  count = count+1;
        			  
        			  document.getElementById('index').innerHTML+= "Beginning =" + px1 + " "+ " Ending =" + px2 + "<br />";
        		  }
        		  
        	  }
          }

          end = performance.now();
          
          document.getElementById('count').innerHTML="Count ="+(count);
          document.getElementById('demo').innerHTML="Execution Time =" +(end-start)+ " ms";

}
