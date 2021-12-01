// ;
let time = process.argv.slice(2);
const timer = function(time){
for(let n of time){
  if(n <0 || undefined || isNaN(n)) {
    process.exit();
  } else {
    setTimeout(()=>{
      process.stdout.write('\x07');
    },n*1000);
  }
}
}
timer(time);