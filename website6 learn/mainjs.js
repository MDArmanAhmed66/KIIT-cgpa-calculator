function funn(){
  let sum=0,str='',e=0;
  const arr1=[4,3,1,4,2,2,1,2,2];
  for(let i=1; i<10;i++){
    str="sub"+i;
    console.log(str);///---
    e=document.getElementById(str).value;
    if(e=="default"){
      alert("Please Select Grade in Each.");
      break;
    }
    sum=sum+(e*arr1[i-1]);
  }
  console.log(sum);///---
  document.getElementById("display").textContent=(sum/21).toFixed(2);
  document.getElementById("CGPA").textContent=(sum/21).toFixed(2);
}



