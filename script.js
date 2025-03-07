const prompt = document.getElementById('prompt');
const message = document.getElementById('m1');
const messageElement = document.querySelector('.Message');
const img1size = document.getElementById('img1');
const mbackg = document.querySelector('.imagelist');

const header = document.querySelector('.Message');
const card = document.getElementById('monthsary-card');
const closeBtn = document.getElementById('close-card');

const messageStyle = {
    display: 'flex',
    position: 'static',
    width: '100vh',
    height: '50vh',
    color: 'black',
    marginTop: '3vh',
    marginLeft: '52vh',
    marginBottom: '50vh',
    borderBottom: '1vh white solid',
    borderRight: '1vh white solid',
    boxShadow: 'black 1px 2px 2px 2px',
    backgroundColor: 'rgb(248, 229, 119)',
};
const messageStyle2 = {
    display: 'flex',
    position: 'static',
    width: '100vh',
    height: '50vh',
    color: 'white',
    marginTop: '3vh',
    marginLeft: '52vh',
    marginBottom: '50vh',
    borderBottom: '1vh white solid',
    borderRight: '1vh white solid',
    boxShadow: 'black 1px 2px 2px 2px',
    backgroundColor: 'rgb(29, 26, 26)',
};


function appendtoDisplay(input){
    prompt.value += input;
    
}
function deleteLastCharacter() {
    prompt.value = prompt.value.slice(0, -1);
}


function messageDisplay(text){
    document.getElementById('m1').textContent = text;
    message.style.color = "white";
    message.style.fontSize = "22px";
    message.style.fontFamily = "Times New Roman";
    message.style.fontStyle = "italic";
}

function clearDisplay(){
    prompt.value = "";
}

function img1(){
     document.getElementById('img1').style.width = '50vh';
     document.getElementById('img1').style.height = '35vh';
     document.getElementById('img1').src = 'image1.jpg';
}
function img2(){
   const img2 =  document.getElementById('img2');
   img2.style.width = '25vh';
   img2.style.height = '35vh';
   img2.style.borderRight = '1.5vh solid black'
   img2.style.borderTop = '2vh solid black'
   img2.style.borderBottom = '2vh solid black'

}

function img4(){
    const img4 = document.getElementById('img4');
    img4.style.width = '25vh';
    img4.style.height = '35vh';
    img4.style.borderRight = '2vh solid black'
    img4.style.borderTop = '2vh solid black'
    img4.style.borderBottom = '2vh solid black'
}

document.addEventListener("DOMContentLoaded", function() {
    var audio = document.getElementById("background-music");
    audio.currentTime = 38; // Start at 14 seconds
    
    // Try to play the audio on page load
    audio.play().catch(function() {
        // If autoplay is blocked, wait for user interaction
        document.addEventListener("click", function() {
            audio.currentTime = 38; // Ensure it starts at 14 seconds on click
            audio.play();
        }, { once: true });
    });
});

function monthsarypic(){
    const img1 = document.getElementById('img1');
    img1.src = 'imagem1.jpg';
    img1.style.borderLeft = '2vh solid black';

    const img2 = document.getElementById('img2');
    img2.src = 'imagem2.jpg';

    const img3 = document.getElementById('img4');
    img3.src = 'imagem3.jpg';

    const elements = {
        borderRight: '1.5vh solid black',
        borderTop: '2vh solid black',
        borderBottom: '2vh solid black',
        width: '35vh',
        height: '25vh'
    };
    Object.assign(img2.style, elements);
    Object.assign(img3.style, elements);
    Object.assign(img1.style, elements);

    messageElement.style.width = '135vh';
    messageElement.style.height = '45vh';
    messageElement.style.marginLeft = '35vh';
    messageElement.style.display = 'inline-block';

    mbackg.style.marginLeft = '12vh';
    img3.style.borderRight = '2vh solid black';

}

function calculate(){
    try{
        prompt.value = eval(prompt.value);
        if (prompt.value == 5){
            prompt.value = " I Miss you,";  
            document.getElementById('prompt').style.color = "aqua";
            prompt.style.fontSize = "18px";}

         if (prompt.value == 6){
                prompt.value = " I love you :)";  
                document.getElementById('prompt').style.color = "aqua";
                prompt.style.fontSize = "15px";}

        if (prompt.value == 9-8-24){
            prompt.value = " Our First date";
            document.getElementById('prompt').style.color = "aqua";
            prompt.style.width = "30vh";
            prompt.style.marginRight = "0vh";
            prompt.style.paddingLeft = "0vh";
            messageDisplay(" This is the time when our relationship started its memorable day by you accept my love");
            message.style.color = 'black';
            Object.assign(messageElement.style, messageStyle);
            img1();
        }
        if (prompt.value == 2-19-25){
            prompt.value = " Reconciled Day";
            document.getElementById('prompt').style.color = "aqua";
            prompt.style.width = "30vh";
            prompt.style.marginRight = "0vh";
            prompt.style.paddingLeft = "0vh";
            messageDisplay(" This the 3rd day after of our arguments you`re too much clingy here and i like it 💖")
            
            Object.assign(messageElement.style, messageStyle2);
            message.style.color = "white"
            const newimg = document.getElementById('img1');
            newimg.src = 'image3.jpg';
            newimg.style.width = '25vh';
            newimg.style.height = '35vh';
            newimg.style.borderLeft = '2vh solid black';
            newimg.style.borderRight = '1.5vh solid black';
            newimg.style.borderTop = '2vh solid black';
            newimg.style.borderBottom = '2vh solid black';
            img2();
            img4();
        }
        if (prompt.value == 3-8-25){
            prompt.value = " Happy Monthsary To Us By";
            document.getElementById('prompt').style.color = "aqua";
            prompt.style.width = "30vh";
            prompt.style.marginRight = "0vh";
            prompt.style.paddingLeft = "0vh";
            messageDisplay("  Click me by💖")
            Object.assign(messageElement.style, messageStyle2);
            monthsarypic();
            
            header.addEventListener('click', () => {
                card.style.display = 'grid';
    card.style.placeItems = 'center';
    card.style.marginTop = '10vh auto';
    card.style.width = '90%';
    card.style.maxWidth = '400px';
    card.style.padding = '20px';
    card.style.borderRadius = '10px';
    card.style.boxShadow = '0 4px 8px rgba(0,0,0,0.3)';
    card.style.backgroundColor = 'white';
            });
            
            closeBtn.addEventListener('click', () => {
                card.style.display = 'none';
            });
        }
            
    }
    catch(error){
        prompt.value = "ERROR";
    }
}
