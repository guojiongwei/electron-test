const fs = require('fs')
const path = require('path')

const content = document.getElementsByClassName('content')[0]
btn.onclick = function(){
  fs.readFile(path.resolve(process.cwd(), 'render/static/index.txt'), ( err, data ) => {
    if(!err){
      console.log(data.toString())
      content.innerHTML = data.toString()
    } else {
      console.log(err)
    }
  })
}