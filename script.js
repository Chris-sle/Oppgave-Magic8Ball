//M
let replies = [
    'dont worry',
    'we will fix it',
    'Everything is doomed!',
    'Nope',
    'Cannot understand. . .',
    'The bad thing will happen'
]
let answer = '8';
let classFont = 'font'
//V
updateView()
function updateView() {
    let html = '';
    html += /*HTML*/`
        <div class="ball8">
            <div class="whiteCircle" onclick="getAnswer()">
                <div class=${classFont}>
                    ${answer}
                </div>
            </div>
        </div>
    `;
    document.getElementById('app').innerHTML = html;
}
//C
function getAnswer() {
    let randomI = Math.floor(Math.random() * replies.length);
    let replyText = replies[randomI]

    if(answer === replyText) {
        return;
    } else {
        answer = replyText; 
        classFont = '';
    }
    updateView()
}

// function getRandomAnswer() {
//     let randomIndex = Math.floor(Math.random() * replies.length);
//     let replieTxt = replies.length > 0 ? replies[randomIndex] : 'Nå må du klare deg selv!'
//     classFont = '';
//     answer = replieTxt;
//     replies.splice(randomIndex, 1);
//     updateView();
// }