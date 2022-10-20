function transpose(matrix) {
  //var matrixTranspose =[];
  //console.log(matrixTranspose.push([]));
  var b = matrix.length;
  var a = matrix[0].length;
  console.log("a = "+a + "b = " + b);
  var matrixTranspose=[];
  var matrixStroka=[];
  /*if (b==1) {
    var matrixTranspose = [[]];
  } else {
    var matrixTranspose= [[],[],[]];
  }*/
  //console.log(a + " "+b);
  for (let i = 0;i<a;i++){
    for (let j =0;j<b;j++){
      console.log("matrix[j][i] = " +matrix[j][i]);
      matrixStroka[j]=matrix[j][i];
      console.log("Matrixstroka " +matrixStroka);
     // matrixStroka.push(matrix[j][i]);
     // matrixTranspose.push(matrixStroka);
      //console.log(matrix[i][j]+" a");
    }
    matrixTranspose.push(matrixStroka);
    matrixStroka=[];
    console.log("MatrixTranspose " + matrixTranspose);
  }
  //matrixTranspose.push(matrixStroka);
  return matrixTranspose;
}