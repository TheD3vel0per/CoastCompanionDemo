(function (embedUrl, defaultHidden, buttonColor) {

    // Insert iFrame into the Page
    var iframe = document.createElement('iframe');
    iframe.src = embedUrl;
    iframe.frameBorder = '0';
    iframe.style.height = '600px';
    iframe.style.width = '400px';
    iframe.style.borderRadius = '1em';
    iframe.style.position = 'fixed';
    iframe.style.bottom = '35px';
    iframe.style.right = '70px';
    iframe.style.display = 'none';
    iframe.style.zIndex = '100';
    iframe.style.boxShadow = 'rgba(0, 0, 0, 0.3) 0px 2px 4px';
    document.body.appendChild(iframe);
    
    // Insert the Show/Hide button
    var toggleBtn = document.createElement('button');
    var hidden = defaultHidden;
    iframe.style.display = hidden ? 'none' : 'block';
    toggleBtn.innerHTML = '<img src="assets/cc-logo.png" width="28"/>';
    toggleBtn.onclick = function () {
        hidden = !hidden;
        iframe.style.display = hidden ? 'none' : 'block';
        toggleBtn.style.borderColor = buttonColor;
        toggleBtn.style.borderLeftColor = buttonColor;
        toggleBtn.style.borderRightColor = buttonColor;
        toggleBtn.style.accentColor = buttonColor;
        toggleBtn.style.backgroundColor = buttonColor;
        toggleBtn.style.backgroundColor = buttonColor;
    };
    toggleBtn.style.position = 'fixed';
    toggleBtn.style.bottom = '20px';
    toggleBtn.style.right = '10px';
    toggleBtn.style.height = '50px';
    toggleBtn.style.width = '50px';
    toggleBtn.style.borderRadius = '100%';
    toggleBtn.style.borderColor = buttonColor;
    toggleBtn.style.accentColor = buttonColor;
    toggleBtn.style.backgroundColor = buttonColor;
    toggleBtn.style.backgroundColor = buttonColor;
    toggleBtn.style.zIndex = '100';
    toggleBtn.style.color = 'white';
    document.body.appendChild(toggleBtn);

})('https://chatbot.d2z99dzbnhjdr2.amplifyapp.com', true, '#007bff');