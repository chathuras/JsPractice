solution([1, 3, 6, 4, 1, 2]);

function solution(A) {
  let asc = A.sort((a, b) => (a < b));
  let r = asc[0] || 1;

  console.log('r', r);
  console.log('asc.indexOf(r + 1)', asc.indexOf(r + 1));

  while(asc.indexOf(r + 1) !== -1) {

    console.log('in r', r);
    console.log('in asc.indexOf(r + 1)', asc.indexOf(r + 1));


    r++;
  }

  return r;
}

module.exports = solution;
