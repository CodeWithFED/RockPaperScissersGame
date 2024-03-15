const computer = document.getElementById('Computer_choice');
const player = document.getElementById('Player_choice');
const comparison = document.getElementById('comparison');
const player1_status = document.getElementById('player1_status');
const player2_status = document.getElementById('player2_status');
const btns = document.querySelectorAll('.btn').forEach((btn) => {
    btn.addEventListener('click', () => {
        computer.classList.toggle('animate__tada');
    })
})
const rock = document.getElementById('rock').addEventListener('click', () => logic(0))
const paper = document.getElementById('paper').addEventListener('click', () => logic(1))
const scissors = document.getElementById('scissors').addEventListener('click', () => logic(2))
let score1 = 0;
let score2 = 0;

function logic(playerChoice) {
    const choices = ['<span id="rock">✊</span>', '<span id="paper">🖐️</span>', '<span id="scissors">✌️</span>'];
    let randomnumber = Math.floor(Math.random() * 3);
    computer.innerHTML = choices[randomnumber];
    if (playerChoice === randomnumber) {
        comparison.innerText = '=';
        player1_status.innerText = 'tie';
        player2_status.innerText = 'tie';
    } else {
        if (playerChoice === 0) {
            if (choices[randomnumber] == choices[1]) {
                player1_status.innerText = 'Failed';
                player2_status.innerText = 'won';
                score2++;
                const player2_score = document.getElementById('player2_score').innerText = score2;
                comparison.innerText = '<'

            } if (choices[randomnumber] == choices[2]) {
                console.log('you won');
                player2_status.innerText = 'Failed';
                player1_status.innerText = 'won';
                score1++;
                const player1_score = document.getElementById('player1_score').innerText = score1;
                comparison.innerText = '>';
            }
        } if (playerChoice === 1) {
            if (choices[randomnumber] == choices[2]) {
                player1_status.innerText = 'Failed';
                player2_status.innerText = 'won';
                score2++;
                const player2_score = document.getElementById('player2_score').innerText = score2;
                comparison.innerText = '<';
            } if (choices[randomnumber] == choices[0]) {
                player2_status.innerText = 'Failed';
                player1_status.innerText = 'won';
                score1++;
                const player1_score = document.getElementById('player1_score').innerText = score1;
                comparison.innerText = '>';
            }
        } if (playerChoice === 2) {
            if (choices[randomnumber] == choices[0]) {
                console.log('you failed! fuck');
                player1_status.innerText = 'Failed';
                player2_status.innerText = 'won';
                score2++;
                const player2_score = document.getElementById('player2_score').innerText = score2;
                comparison.innerText = '<';
            } if (choices[randomnumber] == choices[1]) {
                player2_status.innerText = 'Failed';
                player1_status.innerText = 'won';
                score1++;
                const player1_score = document.getElementById('player1_score').innerText = score1;
                comparison.innerText = '>';
            }
        }
    }
}