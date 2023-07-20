let btn = document.querySelector(".button");
btn.addEventListener("click", ageCalculator);

function ageCalculator() {
	let year = document.getElementById('year').value;
	let month = document.getElementById('month').value;
	let day = document.getElementById('day').value;
	
	let alertYear = document.getElementById('alertYear');
	let alertMonth = document.getElementById('alertMonth');
	let alertDay = document.getElementById('alertDay');
	
	let labelDay = document.getElementById('dd');
	let labelMonth = document.getElementById('mm');
	let labelYear = document.getElementById('yyyy');
	
	let inputDay = document.getElementById('day');
	let inputMonth = document.getElementById('month');
	let inputYear = document.getElementById('year');
	
	if (day === '' && month === '' && year === '') {
		alertDay.innerHTML = 'This field is required';
		alertMonth.innerHTML = 'This field is required';
		alertYear.innerHTML = 'This field is required';
		
		labelDay.style.color = 'rgb(255, 87, 87)';
		labelMonth.style.color = 'rgb(255, 87, 87)';
		labelYear.style.color = 'rgb(255, 87, 87)';
		
		inputDay.style.border = '1px solid rgb(255, 87, 87)';
		inputMonth.style.border = '1px solid rgb(255, 87, 87)';
		inputYear.style.border = '1px solid rgb(255, 87, 87)';
		
	} else if (day === '' && year === '') {
		alertDay.innerHTML = 'This field is required';
		alertMonth.innerHTML = '';
		alertYear.innerHTML = 'This field is required';
		
		labelDay.style.color = 'rgb(255, 87, 87)';
		labelMonth.style.color = 'rgb(219, 219, 219)';
		labelYear.style.color = 'rgb(255, 87, 87)';
		
		inputDay.style.border = '1px solid rgb(255, 87, 87)';
		inputMonth.style.border = '1px solid rgb(219, 219, 219)';
		inputYear.style.border = '1px solid rgb(255, 87, 87)';
		
		alertYear.style.marginLeft = '10rem';
		
	} else if (month === '' && year === '') {
		alertDay.innerHTML = '';
		alertMonth.innerHTML = 'This field is required';
		alertYear.innerHTML = 'This field is required';
		
		labelDay.style.color = 'rgb(219, 219, 219)';
		labelMonth.style.color = 'rgb(255, 87, 87)';
		labelYear.style.color = 'rgb(255, 87, 87)';
		
		inputDay.style.border = '1px solid rgb(219, 219, 219)';
		inputMonth.style.border = '1px solid rgb(255, 87, 87)';
		inputYear.style.border = '1px solid rgb(255, 87, 87)';
		
		alertMonth.style.marginLeft = '10rem';
		alertYear.style.marginLeft = '2.8rem';
		
	} else if (day === '' && month === '') {
		alertDay.innerHTML = 'This field is required';
		alertMonth.innerHTML = 'This field is required';
		alertYear.innerHTML = '';
		
		labelDay.style.color = 'rgb(255, 87, 87)';
		labelMonth.style.color = 'rgb(255, 87, 87)';
		labelYear.style.color = 'rgb(219, 219, 219)';
		
		inputDay.style.border = '1px solid rgb(255, 87, 87)';
		inputMonth.style.border = '1px solid rgb(255, 87, 87)';
		inputYear.style.border = '1px solid rgb(219, 219, 219)';
		
		alertMonth.style.marginLeft = '2.9rem';
		
	} else if (day === '') {
		alertDay.innerHTML = 'This field is required';
		alertMonth.innerHTML = '';
		alertYear.innerHTML = '';
		
		labelDay.style.color = 'rgb(255, 87, 87)';
		labelMonth.style.color = 'rgb(219, 219, 219)';
		labelYear.style.color = 'rgb(219, 219, 219)';
		
		inputDay.style.border = '1px solid rgb(255, 87, 87)';
		inputMonth.style.border = '1px solid rgb(219, 219, 219)';
		inputYear.style.border = '1px solid rgb(219, 219, 219)';
		
	} else if (month === '') {
		alertDay.innerHTML = '';
		alertMonth.innerHTML = 'This field is required';
		alertYear.innerHTML = '';
		
		labelDay.style.color = 'rgb(219, 219, 219)';
		labelMonth.style.color = 'rgb(255, 87, 87)';
		labelYear.style.color = 'rgb(219, 219, 219)';
		
		inputDay.style.border = '1px solid rgb(219, 219, 219)';
		inputMonth.style.border = '1px solid rgb(255, 87, 87)';
		inputYear.style.border = '1px solid rgb(219, 219, 219)';
		
		alertMonth.style.marginLeft = '10rem';
		
	} else if (year === '') {
		alertDay.innerHTML = '';
		alertMonth.innerHTML = '';
		alertYear.innerHTML = 'This field is required';
		
		labelDay.style.color = 'rgb(219, 219, 219)';
		labelMonth.style.color = 'rgb(219, 219, 219)';
		labelYear.style.color = 'rgb(255, 87, 87)';
		
		inputDay.style.border = '1px solid rgb(219, 219, 219)';
		inputMonth.style.border = '1px solid rgb(219, 219, 219)';
		inputYear.style.border = '1px solid rgb(255, 87, 87)';
		
		alertYear.style.marginLeft = '17rem';
		
	} else if ((day < 1 || day > 31) && (month < 0 || month > 12) && (year < 0 || year > new Date().getUTCFullYear())) {
		alertDay.innerHTML = 'Must be a valid day';
		alertMonth.innerHTML = 'Must be a valid month';
		alertYear.innerHTML = 'Must be in the past';
		
		labelDay.style.color = 'rgb(255, 87, 87)';
		labelMonth.style.color = 'rgb(255, 87, 87)';
		labelYear.style.color = 'rgb(255, 87, 87)';
		
		inputDay.style.border = '1px solid rgb(255, 87, 87)';
		inputMonth.style.border = '1px solid rgb(255, 87, 87)';
		inputYear.style.border = '1px solid rgb(255, 87, 87)';
		
		alertMonth.style.marginLeft = '2.8rem';
		alertYear.style.marginLeft = '2.1rem';
		
	} else if (day < 1 || day > 31) {
		alertDay.innerHTML = 'Must be a valid day';
		alertMonth.innerHTML = '';
		alertYear.innerHTML = '';
		
		labelDay.style.color = 'rgb(255, 87, 87)';
		labelMonth.style.color = 'rgb(219, 219, 219)';
		labelYear.style.color = 'rgb(219, 219, 219)';
		
		inputDay.style.border = '1px solid rgb(255, 87, 87)';
		inputMonth.style.border = '1px solid rgb(219, 219, 219)';
		inputYear.style.border = '1px solid rgb(219, 219, 219)';
		
		resYear.innerHTML = '--';
		resMonth.innerHTML = '--';
		resDay.innerHTML = '--';
		
	} else if (month < 0 || month > 12) {
		alertDay.innerHTML = '';
		alertMonth.innerHTML = 'Must be a valid month';
		alertYear.innerHTML = '';
		
		labelDay.style.color = 'rgb(219, 219, 219)';
		labelMonth.style.color = 'rgb(255, 87, 87)';
		labelYear.style.color = 'rgb(219, 219, 219)';
		
		inputDay.style.border = '1px solid rgb(219, 219, 219)';
		inputMonth.style.border = '1px solid rgb(255, 87, 87)';
		inputYear.style.border = '1px solid rgb(219, 219, 219)';
		
		alertMonth.style.marginLeft = '10rem';
		
		resYear.innerHTML = '--';
		resMonth.innerHTML = '--';
		resDay.innerHTML = '--';
		
	} else if (year < 0 || year > new Date().getUTCFullYear()) {
		alertDay.innerHTML = '';
		alertMonth.innerHTML = '';
		alertYear.innerHTML = 'Must be in the past';
		
		labelDay.style.color = 'rgb(219, 219, 219)';
		labelMonth.style.color = 'rgb(219, 219, 219)';
		labelYear.style.color = 'rgb(255, 87, 87)';
		
		inputDay.style.border = '1px solid rgb(219, 219, 219)';
		inputMonth.style.border = '1px solid rgb(219, 219, 219)';
		inputYear.style.border = '1px solid rgb(255, 87, 87)';
		
		alertYear.style.marginLeft = '17.1rem';
		
		resYear.innerHTML = '--';
		resMonth.innerHTML = '--';
		resDay.innerHTML = '--';
	
	} else if (month !== '') {
		if (((month <= 7 && month % 2 === 0) && day > 30) ||
			((month >= 8 && month % 2 === 1) && day > 30) ||
			(((month > 1 && month < 3) && day > 28) && !isLeapYear(year))) {
			alertDay.innerHTML = 'Must be a valid date';
			alertMonth.innerHTML = '';
			alertYear.innerHTML = '';
			
			labelDay.style.color = 'rgb(255, 87, 87)';
			labelMonth.style.color = 'rgb(255, 87, 87)';
			labelYear.style.color = 'rgb(255, 87, 87)';
			
			inputDay.style.border = '1px solid rgb(255, 87, 87)';
			inputMonth.style.border = '1px solid rgb(255, 87, 87)';
			inputYear.style.border = '1px solid rgb(255, 87, 87)';	
			
			resYear.innerHTML = '--';
			resMonth.innerHTML = '--';
			resDay.innerHTML = '--';
		
		} else {
			alertDay.innerHTML = '';
			alertMonth.innerHTML = '';
			alertYear.innerHTML = '';

			labelDay.style.color = 'rgb(219, 219, 219)';
			labelMonth.style.color = 'rgb(219, 219, 219)';
			labelYear.style.color = 'rgb(219, 219, 219)';
			
			inputDay.style.border = '1px solid rgb(219, 219, 219)';
			inputMonth.style.border = '1px solid rgb(219, 219, 219)';
			inputYear.style.border = '1px solid rgb(219, 219, 219)';
			generateDate();
		}
	
	} else {
		alertDay.innerHTML = '';
		alertMonth.innerHTML = '';
		alertYear.innerHTML = '';

		labelDay.style.color = 'rgb(219, 219, 219)';
		labelMonth.style.color = 'rgb(219, 219, 219)';
		labelYear.style.color = 'rgb(219, 219, 219)';
		
		inputDay.style.border = '1px solid rgb(219, 219, 219)';
		inputMonth.style.border = '1px solid rgb(219, 219, 219)';
		inputYear.style.border = '1px solid rgb(219, 219, 219)';

		generateDate();
	}	
}

function generateDate() {
	let year = document.getElementById('year').value;
	let month = document.getElementById('month').value;
	let day = document.getElementById('day').value;
	
	if (day !== '' && month !== '' && year !== '') {
		let actualDate = new Date();
		let birthDate = new Date(year, month - 1, day);
		let diff = actualDate - birthDate;
		let age = new Date(diff);

		let years = age.getUTCFullYear() - 1970;
		let months = age.getUTCMonth();
		let days = age.getUTCDate() - 1;
		
		let resYear = document.getElementById('resYear');
		let resMonth = document.getElementById('resMonth');
		let resDay = document.getElementById('resDay');
		
		resYear.innerHTML = years;
		resMonth.innerHTML = months;
		resDay.innerHTML = days;
		
	} else {
		resYear.innerHTML = '--';
		resMonth.innerHTML = '--';
		resDay.innerHTML = '--';
	}
}

function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}