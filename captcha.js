(function(){
    const fonts = ['Arial', 'Times New Roman', 'Courier New', 'Georgia', 'Verdana', 'Geneva', 'Comic Sans MS', 'Trebuchet MS', 'Arial Black', 'Impact', 'Bookman Old Style', 'Consolas', 'Lucida Console', 'Lucida Sans Unicode', 'Lucida Grande', 'Tahoma', 'Geneva', 'Helvetica', 'sans-serif'];
    let captchaValue = "";
    function generateCaptcha(){
        let value= btoa(Math.random()*1000000);
        value= value.substr(0, 5+Math.random()*5);
        captchaValue= value;
    }
    function setCaptcha(){
        let html = captchaValue.split("").map((char) =>{
            const rotate = -20 + Math.trunc(Math.random()*30);
            const font = Math.trunc(Math.random()*fonts.length);
            return `<span
                style="
                transform:rotate(${rotate}deg);
                font-family: ${fonts[font]}
                "
            >${char}</span>`;
        }).join("");
        document.querySelector(".login-form .captcha .preview").innerHTML = html;
    }
    function initCaptcha(){
        document.querySelector(".login-form .captcha .captcha-refresh").addEventListener("click", function(){
            generateCaptcha();
            setCaptcha();
        });
        generateCaptcha();
        setCaptcha();
    }
    initCaptcha();
})();