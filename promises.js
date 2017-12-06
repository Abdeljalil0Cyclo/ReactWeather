function getTempCallback(location){
  return new Promise (function(resolve,reject){
      resolve(78);
      reject('city not found');
  });
 
}

getTempCallback('tanger').then(function(temp){
 console.log('success',temp);
},function(err){
  console.log('error',err);
});