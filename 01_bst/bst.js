function BinarySearchTree(value){
  this.left = null;
  this.right = null;
  this.value = value;
  this.count = 1;
}

BinarySearchTree.prototype.insert = function (value) {

  //if value is greater than, then (meaning it's on the right side of tree)
     //if right is empty (null) then assign a new binary tree with value to this.right
     //else , call this.right.insert(value)
  this.count++;
  if (value >= this.value) {
    if (this.right === null) {
      this.right = new BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  } else { //left side
    if (this.left === null) {
      this.left = new BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  }




};

BinarySearchTree.prototype.contains = function (searchTerm) {
  if(searchTerm === this.value){
   return true;
 }else{
   if(searchTerm > this.value && this.right){
     return this.right.contains(searchTerm);
   }else if(searchTerm < this.value && this.left){
     return this.left.contains(searchTerm);
     }
 }
  return false;
};

BinarySearchTree.prototype.depthFirstForEach = function (func) {
  var result = [];

  //Base case! IF there is no left && there is no right. push this.value & return the result
  if((!this.left) && (!this.right)){
    result.push(this.value);
  }else if(!this.left){
    //if there is a right but no left call depthFirstForEach on right and add it to the result and add the current value to the tree
    result.push(this.value);
    this.right.depthFirstForEach().forEach(function(i){result.push(i)});
  }else if(!this.right){
    //if there is a left but no right call depthFirstForEach on left and add it to the result
    this.left.depthFirstForEach().forEach(function(i){result.push(i)});
    result.push(this.value);
  }else{
    //if there is both a left and the right. first call the left, then add the value, then the right
    this.left.depthFirstForEach().forEach(function(i){result.push(i)});
    result.push(this.value);
    this.right.depthFirstForEach().forEach(function(i){result.push(i)});
  }


  console.log(func);
  return result;
};

BinarySearchTree.prototype.breadthFirstForEach = function () {

};

BinarySearchTree.prototype.size = function () {
  return this.count;
};



// var tree = new BinarySearchTree(20);

// tree.insert(22);

// console.log(tree.right);

// console.log(BinarySearchTree.prototype);
// tree.size();

// tree.insert(23);
// tree.contains(23);
