let up = document.getElementById('upperPhotos');
let low = document.getElementById('lowerPhotos');
let big = document.getElementsByName('bigp')[0];

let photo = [];

onload = _=>{

    // Create all photos and add event listeners
    for(let i = 0; i < 12; i++){
        photo[i] = document.createElement('img');
        photo[i].src = `images/${(i % 6) + 1}.jpeg`;
        
        // Add to appropriate container
        if(i < 6) {
            up.appendChild(photo[i]);
            photo[i].addEventListener('click', clickAdder);
        } else {
            low.appendChild(photo[i]);
            photo[i].addEventListener('mouseover', clickAdderOver);
        }
        
        // Add event listeners immediately
        
        
    }
} 


function clickAdder(){
    big.src = this.src;
}

function clickAdderOver(){
    big.src = this.src;
}

