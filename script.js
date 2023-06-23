let country;
let city;
let latitude;
let longitude;
let ipAddress;
const img = document.getElementById('char-img');
const var1 = document.getElementById('var1');
const var2 = document.getElementById('var2');
const var3 = document.getElementById('var3');
const var4 = document.getElementById('var4');


fetch('https://api.ipify.org?format=json')
  .then(response => response.json())
  .then(data => {
    ipAddress=data.ip;
    getLocation(data.ip)
  })
  .catch(error => {
    console.error('Error:', error);
  });

 
const getLocation = (ipAddress)=>{
    
    fetch(`https://reallyfreegeoip.org/json/${ipAddress}`)
        .then(response => response.json())
        .then(data => {
          // Access the geolocation data and extract the desired information
             country = data.country_name;
             city = data.region_name;
             latitude = data.latitude;
             longitude = data.longitude;
          // ...
        })
        .catch(error => {
          console.error('Error:', error);
        });
      
}


const questions = [
    {
        possibleAnsw: ['Jonathan','Josuke','Giorno','Jodio'],
        correctAnsw: 'Jonathan',
        img: './images/jonathan.jpg'
    },
    {
        possibleAnsw: ['Jolyne','Josuke','Giorno','Joseph'],
        correctAnsw: 'Joseph',
        img: './images/joseph.jpg'
    },
    {
        possibleAnsw: ['Jonathan','Jotaro','Giorno','Jodio'],
        correctAnsw: 'Jotaro',
        img: './images/jotaro.jpg'
    },
    {
        possibleAnsw: ['Josuke','Jolyne','Giorno','Jodio'],
        correctAnsw: 'Josuke',
        img: './images/josuke.jpg'
    },
    {
        possibleAnsw: ['Jonathan','Josuke','Giorno','Jotaro'],
        correctAnsw: 'Giorno',
        img: './images/giorno.jpg'
    },
    {
        possibleAnsw: ['Jotaro','Josuke','Giorno','Jolyne'],
        correctAnsw: 'Jolyne',
        img: './images/jolyne.jpg'
    },
    {
        possibleAnsw: ['Jonathan','Johnny','Giorno','Jodio'],
        correctAnsw: 'Johnny',
        img: './images/johnny.jpg'
    },
    {
        possibleAnsw: ['Johnny','Josuke','Giorno','Jodio'],
        correctAnsw: 'Josuke',
        img: './images/josuke2.jpg'
    },
    {
        possibleAnsw: ['Jonathan','Josuke','Giorno','Jodio'],
        correctAnsw: 'Jodio',
        img: './images/jodio.jpg'
    }
]

const randomiseArray = (array) =>{
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
}
const container = document.getElementById('game-body');
const finishGame = (result)=>{
    const resultBody = document.createElement('div')
    resultBody.classList.add('result-body');
    img.remove();
    var1.remove();
    var2.remove();
    var3.remove();
    var4.remove();
    if(result==='win'){
        resultBody.innerHTML = "Congrats! You are safe for now!"
    }else if(result==='lost'){
        const ip = document.createElement('div');
        ip.innerHTML = ipAddress;
        ip.classList.add('ip-element');
        resultBody.appendChild(ip);

        const countryDiv = document.createElement('div');
        countryDiv.innerHTML = country;
        countryDiv.classList.add('countryDiv-element');
        resultBody.appendChild(countryDiv);

        const cityDiv = document.createElement('div');
        cityDiv.classList.add('cityDiv-element');
        cityDiv.innerHTML = city;
        resultBody.appendChild(cityDiv);

        const lat = document.createElement('div');
        lat.classList.add('lat-element');
        lat.innerHTML = latitude;
        resultBody.appendChild(lat);

        const lot = document.createElement('lat');
        lot.classList.add('lot-element');
        lot.innerHTML = longitude;
        resultBody.appendChild(lot);

        const msg = document.createElement('div');
        ip.classList.add('msg-element');
        msg.innerHTML = "Data send to random leaks databases..."
        resultBody.appendChild(msg)

    }
    container.appendChild(resultBody);
}

let score = 0;



const handleAnswer = (chosenAns, correctAns) =>{
    console.log(chosenAns,correctAns)
    if(chosenAns===correctAns){
        startGame();
        score++;
    }else{
        finishGame('lost');
    }
}

const startGame = () =>{
    let randomised = randomiseArray(questions);
    if(randomised.length<=0){
        finishGame('win');
    }else{

        
        img.setAttribute('src',randomised[0].img);
        var1.innerHTML = randomised[0].possibleAnsw[0];
        var2.innerHTML = randomised[0].possibleAnsw[1];
        var3.innerHTML = randomised[0].possibleAnsw[2];
        var4.innerHTML = randomised[0].possibleAnsw[3];
        var1.setAttribute('onClick', `handleAnswer('${randomised[0].possibleAnsw[0]}', '${randomised[0].correctAnsw}')`);
        var2.setAttribute('onClick', `handleAnswer('${randomised[0].possibleAnsw[1]}', '${randomised[0].correctAnsw}')`);
        var3.setAttribute('onClick', `handleAnswer('${randomised[0].possibleAnsw[2]}', '${randomised[0].correctAnsw}')`);
        var4.setAttribute('onClick', `handleAnswer('${randomised[0].possibleAnsw[3]}', '${randomised[0].correctAnsw}')`);
    
        randomised.shift();
    }

}
startGame();










