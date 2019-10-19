/* КОММЕНТАРИЙ. 
В условии задачи сказано:
"Допустим есть массив строк. Все строки содержар одинаковые символы, кроме одной строки."

Здесь не вполне ясно, должно ли быть количество символов (не считая пробелов) обязательно одинаковым для всех строк,
 или же символы, общие для всех строк, могут быть в произвольном количестве в каждой строке. Поэтому я решил сделать 
 решения для обоих вариантов, которые выбираются булевой переменной при вызове функции. 
 Таким образом,  моя функция вызывается findUniq (mas, canBePlural), где
 -- canBePlural = true  означает, что элементы массива могут содержать одинаковые символы в разном количестве, 
 а чужой элемент должен содержать какой-то другой   символ или не иметь одного из требуемых. 
 -- canBePlural = false означает, что все элементы, кроме одного должны содержать одинаковые символы в одинаковом количестве (кроме пробелов). 

*/


function findUniq (mas, canBePlural) {	
	var orderedMas = [];				
	for (var i = 0, prob; i < mas.length; i++) {
	orderedMas[i] = mas[i].split('').sort().join('');

		if (canBePlural)								 // Если canBePlural = true, т.е. разрешены повторы символов,
 		orderedMas[i] = removeRepeats(orderedMas[i]);  // то перед нахождением чужого элемента удаляем все повторы из каждой строки

		while (orderedMas[i].indexOf(' ') != -1) {			// удаление всех пробелов из каждого элемента
			orderedMas[i] = orderedMas[i].replace(' ','');
		}
	}

	var ind = whoIsAlien (orderedMas, canBePlural);
	if (ind === null) return "В данном массиве не обнаружено искомой строки с отличными символами.";
	return mas[ind];
}

function whoIsAlien (arr) {
			
	for (var i = 1; i < arr.length; i++) {   // проверка всех элементов массива, кроме самого первого
		if (arr[i]!= arr[i-1] && arr[i]!= arr[i+1])  
		return i;
	}
	if (arr[0] != arr [1]) return 0;  // если цикл не нашел искомого элемента, то проверяем первый
	else return null;				// если и первый не оказался искомым, то выдаем сообщение, что элемента нет в массиве
}


function removeRepeats(elem) {	

    var arr = elem.split(''), arrUndubled = [], k = 0;
    for (var i = 0; i < arr.length; i++) { 
    	var j = 0;
        while (j < k && arrUndubled[j] !== arr[i]) 
       	j++;
        if (j == k) arrUndubled[k++] = arr[i];
    }
    return arrUndubled.join('');
}


 




