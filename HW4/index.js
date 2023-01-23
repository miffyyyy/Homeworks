/* myReduce */

Array.prototype.myReduce = function (...args) {
	let [acc, index] = args.length === 1
    ? [this[0], 1]
    : [args[1], 0];

	for (let i = index; i < this.length; i++) {
		acc = args[0](acc, this[i], i, this);
	}
	return acc;
};



/* myReduce */

// Declare an accumulator
// Run a for loop from start to n
// Accumulate the sum all the elements in the array in the accumulator in step(1)
// Return the accumulator


Array.prototype.myReduce = function (callBack, initialVal) {
    const start = initialVal === undefined ? 1 : 0;
    let accumulator = initialVal === undefined ? this[0] : initialVal;
  
    for (let i = start; i < this.length; i++) {
      accumulator = callBack(accumulator, this[i]);
      // console.log('current accumulator is:', accumulator,'currentValue is:', this[i]);
    }
    return accumulator;
  };
  
  /* ------------------------- Test 1  sum with initial value ----------------------------- */
  const array1 = [1, 2, 3, 4];
  // 0-1-2-3-4
  const initialValue = 0;
  const sumWithInitial = array1.myReduce(
    (accumulator, currentValue) => accumulator - currentValue,
    initialValue
  );
  
  console.log('test1:', sumWithInitial);
  // Expected output: -10
  
  /* ------------------------ Test 2  sum without initial value --------------------------- */
  const array2 = [1, 2, 3, 4];
  // 1-2-3-4
  const sumWithoutInitial = array2.myReduce(
    (accumulator, currentVal) => accumulator - currentVal
  );
  
  console.log('test2:', sumWithoutInitial);
  // Expected output: -8
  