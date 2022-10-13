async function displayHelloWorld() {
    let helloHttpResponse = await fetch('http://localhost:3000/hello')
    let text = await helloHttpResponse.text()
    document.querySelector('body').innerHTML += text
}
  
async function displayFantasy() {
  let httpFantasy = await fetch('http://localhost:3000/fantasy')
  let textFantasy = await httpFantasy.json()
  console.log(document.getElementById('fantasy'))
  for (const fantasyBook of textFantasy) {
    document.querySelector('#contenitor').innerHTML += `<p>${fantasyBook.title}</p>`
  }
}
  
  window.onload = async() => {
    await displayHelloWorld()
    await displayFantasy()
  }