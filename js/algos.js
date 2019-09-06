// Converts from degrees to radians.
Number.prototype.toRadians = function () {
  return this * Math.PI / 180;
};


// Calculates the distance between Grenoble and the given city
function distanceFromGrenoble(city) {
  //console.log("distanceFromGrenoble - implement me !");
  var GrenobleLat = 45.166667;
  var GrenobleLong = 5.716667;
  var R = 6371; // metres
  var lat1 = GrenobleLat
  var lon1 = GrenobleLong
  var lat2 = Number(city.latitude)
  var lon2 = Number(city.longitude)
  var φ1 = lat1.toRadians();
  var φ2 = lat2.toRadians();
  var Δφ = (lat2 - lat1).toRadians();
  var Δλ = (lon2 - lon1).toRadians();

  var a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) *
    Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  var d = R * c;

  return d;
}

// Swap 2 values in array csvData
// i is the index of the first city
// j is the index of the second city
function swap(i, j) {
  let a = csvData[i]
  csvData[i] = csvData[j]
  csvData[j] = a
  displayBuffer.push(['swap', i, j]); // Do not delete this line (for display)
}

// Returns true if city with index i in csvData is closer to Grenoble than city with index j
// i is the index of the first city
// j is the index of the second city
function isLess(i, j) {
  a = csvData[i].dist
  b = csvData[j].dist
  if (a <= b) {
    return true
  }
  displayBuffer.push(['compare', i, j]); // Do not delete this line (for display)
}


function insertsort() {

  for (let i = 1; i < csvData.length; i++) {
    for (let k = i; k > 0 && isLess(k, k - 1); k--) {
      swap(k, k - 1)
    }
  }
  console.log("insertsort - implement me !");
}

function selectionsort() {
  for (let i = 0; i < csvData.length; i++) {
    let k = i
    for (let j = i + 1; j < csvData.length; j++) {
      if (isLess(j, k)) { k = j }
    }
    if (isLess(k, i)) {
      swap(i, k)
    }
  }
  console.log("selectionsort - implement me !");
}

function bubblesort() {

  for (let i = 0; i < csvData.length; i++) {
    swapped = false
    for (let j = 0; j < csvData.length - (i + 1); j++) {
      if (!isLess(j, j + 1)) { swap(j, j + 1); swapped = true }
    }
    if (swapped == false) { break }
    console.log("bubblesort - implement me !");
  }
  ////////////////////////deuxieme inversé /////////////////////////////////

  // for (let i = 0; i < csvData.length; i++) {
  //   swapped = false
  //   for (let j = csvData.length-1; j > 0; j--) {
  //     if (isLess( j,j - 1)) { swap( j, j-1); swapped = true }
  //   }
  //   if (swapped == false) { break }
  //   console.log("bubblesort - implement me !");
  // }

}

function shellsort() {
  let gap = 1
  while (gap < csvData.length) {
    gap = 3 * gap + 1
  }
  while (gap >= 1) {
    for (let i = gap; i < csvData.length; i++) {

      for (let k = i; k >= gap && isLess(k, k - gap); k = k - gap) {
        swap(k, k - gap)
      }
    }
    gap = Math.round((gap - 1) / 3)
  }
  console.log("shellsort - implement me !");
}

// function mergesort(array) {
// if(array.length =){
// let tabM =array.length/2
// let tabL =array.slice(0, tabM)
// let tabR =array.slice(tabM, array.length)
//   mergesort(tabL)

//   mergesort(tabR)
// }
//   console.log("mergesort - implement me !");
// }

function heapsort() {
  console.log("heapsort - implement me !");
}

console.log('qui'+Math.random(11))

function partition(left, right) {
  let pivot = Math.floor(Math.random() * (right - left) + left);
  swap(pivot, right);
  pivot = right;

  let i = left - 1;
  let j = left;
  while (j < pivot) {
      if (isLess(pivot, j)) {
          j++;
      } else {
          i++;
          swap(i, j);
          j++;
      }
  }
  swap(i+1, pivot);
  return i + 1;
}

function quick(left, right) {
  if (left < right) {
      let pivot = partition(left, right);
      quick(left, pivot - 1);
      quick(pivot + 1, right);
  }
}


function quicksort(){
  console.log('qui:'+Math.random(2)*(10)
quick(0, csvData.length - 1);

  // partitionner(T, premier, dernier, pivot){
  //   swap(pivot, dernier) // échange le pivot avec le dernier du tableau , le pivot devient le dernier du tableau
  //   j = premier
  //   for (i = premier; i < dernier - 1; i++) {  // la boucle se termine quand i = (dernier-1).
  //     if (T[i] <= T[dernier]) {
  //       swap(i, j)

  //       j = j + 1
  //       swap(dernier, j)
  //     }
  //   }
  //   return j
  // }

  // tri_rapide(T, premier, dernier){
  //   if (premier < dernier) { 
  //   pivot = choix_pivot(T, premier, dernier)
  //   pivot = partitionner(T, premier, dernier, pivot)
  //   tri_rapide(T, premier, pivot - 1)
  //   tri_rapide(T, pivot + 1, dernier)}
  // }

  console.log("quicksort - implement me !");
}


function quick3sort() {
  console.log("quick3sort - implement me !");
}


function sort(algo) {
  switch (algo) {
    case 'insert': insertsort(); break;
    case 'select': selectionsort(); break;
    case 'bubble': bubblesort(); break;
    case 'shell': shellsort(); break;
    case 'merge': mergesort(); break;
    case 'heap': heapsort(); break;
    case 'quick': quicksort(); break;
    case 'quick3': quick3sort(); break;
    default: throw 'Invalid algorithm ' + algo;
  }
}
