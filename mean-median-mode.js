var numbers = process.argv;
numbers.splice(0,2);

function mean (numbers) {
	var total = 0;
	for(var i = 0; i<numbers.length; i++) {
		total += parseFloat(numbers[i]);
	}

	console.log("The mean is " + total/numbers.length);

}

function median (numbers) {
	var median = 0;
	numbers.sort();
	if(numbers.length % 2 === 0) {
		median = (parseFloat(numbers[numbers.length / 2 - 1]) + parseFloat(numbers[numbers.length / 2])) / 2;
	} 
	else {
		median = parseFloat(numbers[(numbers.length - 1) / 2]);
	}
	console.log("The median is " + median);
}

function modes (numbers) {
    var counter = [];
    var mode = [];
    var max = 0;
    for (var i in numbers) {
        if (counter[numbers[i]] === undefined)
            counter[numbers[i]] = 0;
        counter[numbers[i]]++;
 
        if (counter[numbers[i]] == max) { 
            mode.push(numbers[i]);
        }
        if (counter[numbers[i]] > max) {
            max = counter[numbers[i]];
            mode = [numbers[i]];
        }
    }

	console.log("The mode/modes is/are " + mode);

}

mean(numbers);
median(numbers);
modes(numbers);
