// document.querySelector('.send-btn').addEventListener('click', async () => {
//     const userInput = document.querySelector('.user-input').value;

//     const response = await fetch('https://gemini-api-url.com/endpoint', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//             'Authorization': 'Bearer YOUR_API_KEY_HERE',
//         },
//         body: JSON.stringify({ message: userInput }),
//     });

//     const data = await response.json();
//     document.querySelector('.chatbot-body').innerHTML += `
//         <div class="chat-message bot-message">
//             <span class="message-content">${data.reply}</span>
//         </div>
//     `;
// });



    

document.querySelector('.send-btn').addEventListener('click', async () => {
    const userInput = document.querySelector('.user-input').value;
    document.querySelector('.chatbot-body').innerHTML += `
        <div class="chat-message user-message">
            <span class="message-content">${userInput}</span>
        </div>
    `;

    try {
    const response = await fetch('https://gemini-api-url.com/v1beta/models/gemini-1.5-flash:generateMessage', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer AIzaSyB_Ta-tIuKBeXq3r1Berc49pXYasNzgork',
        },
        body: JSON.stringify({ message: userInput }),
        
    });
    const data = await response.json();
    console.log(data)
} 
  
    catch (chodu) {
        alert(`Error getting response from api : ${chodu}`);
    }
    document.querySelector('.chatbot-body').innerHTML += `
        <div class="chat-message bot-message">
            <span class="message-content">${data.reply}</span>
        </div>
    `;

    return document.querySelector('.user-input').value = ''
})