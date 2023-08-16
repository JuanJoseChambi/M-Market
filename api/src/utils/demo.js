const arr = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'John' },
    { id: 4, name: 'Jane' },
    { id: 5, name: 'John' }
  ];
  
  const count = arr.reduce((acc, curr) => {
    if (curr.name in acc) {
      acc[curr.name]++;
    } else {
      acc[curr.name] = 1;
    }
    
    return acc;
  }, {});
  
  const repeated = [];
  
  for (let name in count) {
    if (count[name] > 1) {
      repeated.push({ name, count: count[name] });
    }
  }
  
  console.log(repeated);
  