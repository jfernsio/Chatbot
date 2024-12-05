
    function scrollToBottom() {
        var messageBody = document.getElementById("messageFormeight");
        messageBody.scrollTop = messageBody.scrollHeight;
    }

    document.addEventListener("DOMContentLoaded", function () {
        document.getElementById("messageArea").addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent the default form submission

            const date = new Date();
            const hour = date.getHours();
            const minute = date.getMinutes();
            const str_time = hour + ":" + minute;
            var rawText = document.getElementById("text").value;

            var userHtml =
                '<div class="d-flex justify-content-end mb-4"><div class="msg_cotainer_send">' +
                rawText +
                '<span class="msg_time_send">' +
                str_time +
                '</span></div><div class="img_cont_msg"><img src="https://i.ibb.co/d5b84Xw/Untitled-design.png" class="rounded-circle user_img_msg"></div></div>';

            document.getElementById("text").value = ""; 
            document.getElementById("messageFormeight").insertAdjacentHTML('beforeend', userHtml); // Append user message

            scrollToBottom();

            
            fetch("/get", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ msg: rawText }),
            })
            .then(response => response.json()) // Assuming the server responds with plain text
            .then(data => {
                const botResponseText = data.response.candidates[0].content.parts[0].text;
                console.log(botResponseText)
                var botHtml =
                    '<div class="d-flex justify-content-start mb-4"><div class="img_cont_msg"><img src="https://i.ibb.co/fSNP7Rz/icons8-chatgpt-512.png" class="rounded-circle user_img_msg"></div><div class="msg_cotainer">' +
                    botResponseText +
                    '<span class="msg_time">' +
                    str_time +
                    '</span></div></div>';
                document.getElementById("messageFormeight").insertAdjacentHTML('beforeend', botHtml); // Append bot response
                scrollToBottom();
            })
            .catch(error => console.error('Error:', error)); 
        });
    });
