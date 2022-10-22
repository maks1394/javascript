function padIt(str,n){
  //coding here
  var left = true,count =0;
  while (count<n){
    (left) ? str = "*"+str : str+="*";
    left = !(left);
    count++;
  }
  return str;
}
