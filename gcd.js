function gcd(A, B) {
  var smallest = Math.min(A, B);
  var largest = Math.max(A, B);
  
  if (smallest === 0)
    return 0;

  if (largest % smallest === 0)
    return largest / smallest;
  
  return gcd(smallest, largest % smallest);
}
