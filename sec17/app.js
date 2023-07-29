const button = document.querySelector('button');
const output = document.querySelector('p');
const getPosition = (opts)=>{
  const promise = new Promise((resolve,reject)=>{
    navigator.geolocation.getCurrentPosition(success =>{
resolve(success)
  },error=>{

  },opts)})
  return promise
}
const setTimer = (duration)=>{
  const promise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve('Done!')
    },duration)

  })
  return promise
}


function trackUserHandler() {
  getPosition().then(posData=>{
    console.log(posData)
  })


setTimer(1000).then(()=>{
  console.log("Timer Done!")
})
console.log("Gettin Position ....")
}


button.addEventListener('click', trackUserHandler);