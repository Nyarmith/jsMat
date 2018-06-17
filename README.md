## Javascript Matrix Library
### Aims to cover all vector and matrix operations I'd need in javascript

Pros:
- Ease of use
- Convenient abstractions
- Clear code

Cons:
- Lots of object creation
- No performant tricks

Note: By default, vectors are column-vectors

#### Initialization
```
let r=3,c=3;
let rotMat = Matrix(r,c);

//special initializations in Mat function
M = Mat.rotx(10); //make a rotation matrix about the x-axis that rotates 10 degrees
v = Mat.vec(0,1,2); //make a vector, accepts an arbitrary number of objects
M = Mat.rotv(10); //make a rotation matrix about the x-axis that rotates 10 degrees
```

Indexing starts from 1

#### Available Operations
```
A.mul(B); //Standard matrix multiplication
rotMat.eleWise(otherMat,function(a,b){ return a*b;}); //perform a element-wise binary operation on the corresponding elements of matrix A and B, returns a new matrix
let smolMat = A.subMat(r-1,c); //return a subMatrix
let smulMat = A.subMat(begin,end,rsize,csize); //submatrix starting at other index
A.tpose(); //returns transpose of a matrix
A.at(row,col); //returns element at row,col
A.set(row,col,e); //sets element at row,col
A.getcol(colnum); //get a column of the matrix
A.getrow(rownum); //same for row
A.scale(scalar); //returns a copy fo the matrix scaled by input
A.add(B);       //alias for eleWise addition
A.sub(scalar);  //alias for eleWise subtraction

//vector abstraction available for column-vector matrices, uses same underlying matrix object
let myVec = vec3.create(a,b,c);
let s = vec3.dot(V,U);
vec3.cross(V,U); //cross-product
vec3.scale(V,s); //scales a vector
vec3.multiply(V,U); //element-wise multiplication
vec3.add(V,U);
vec3.subtract(V,U);
vec3.size(V);
vec3.normalize(V):
```

#### Usage Examples:
```
--TODO--
M = Mat.rotx(4);
```


#### Future Features:
```
A.det(); //returns determinant of a matrix
A.pow(n) //return the matrix exponentiated n times
A.ldiv(B) //performs left-division  i.e. x = A.ldiv(B) returns the solution to Ax = B
A.rdiv(B) //performs right-division i.e. x = A.rdiv(B) returns the solution to xA = B
```
