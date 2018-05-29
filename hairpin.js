/* Author: Shanthi Kollu
 * date: 3/24/2018
 * Description: Identify hairpin loop in the given RNA 2D structure and identify the 
 * positions.
 */
function submit(){
		var myInput, myArray, myArrayList, i, k, l, m, n, kIndex, mIndex, count =0, start, end;
        myInput = document.getElementById('num').value
        
        myArray= myInput.split(" ");
          myArrayList =myArray.map(function(val){
              return parseInt(val);
          })
          
          start = performance.now();
        //Looping through the Array
        for(i=0; i<myArrayList.length; i++){
            if(myArrayList[i]>0){
            	if(i<myArrayList.length){
                	if(myArrayList[i+1] ==0){
                	k=myArrayList[i];
                    kIndex = i;
                    l=i;
                    i++;
                    	
                    	while(i<myArrayList.length && myArrayList[i]==0){
				 		i++;
                   		}
                   		m=myArrayList[i];
                        mIndex = i;
                    	if(k==-m){
				 		count =count+1;
                        document.getElementById('index').innerHTML+= "Beginning =" + kIndex + " "+ " Ending =" + mIndex + "<br />";
                       	}
                        }
               		               }
               }
           
               }
               end = performance.now();
               
               document.getElementById('count').innerHTML="Count ="+(count);
               document.getElementById('demo').innerHTML="Execution Time =" +(end-start)+ " ms";
               }