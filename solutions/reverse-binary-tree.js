function reverseBinaryTree(root) {
  if (root === null) {
    return null;
  }

  let left = root.left;
  let right = root.right;

  root.left = right;
  root.right = left;

  reverseBinaryTree(root.left);
  reverseBinaryTree(root.right);

  return root;
}

console.log(reverseBinaryTree([4, 2, 7, 1, 3, 6, 9]));
