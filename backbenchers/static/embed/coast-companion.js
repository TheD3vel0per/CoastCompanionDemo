(function (embedUrl, defaultHidden, buttonColor, showToggleBtnPrompt) {

    // Insert iFrame into the Page
    var iframe = document.createElement('iframe');
    iframe.src = embedUrl;
    iframe.frameBorder = '0';
    iframe.style.minHeight = '600px';
    iframe.style.minWidth = '400px';
    iframe.id = 'chatbot-iframe';
    iframe.style.width = "400px"
    iframe.style.height = "600px"
    iframe.style.borderRadius = '10px';
    iframe.style.position = 'fixed';
    iframe.style.bottom = '35px';
    iframe.style.right = '70px';
    iframe.style.display = 'none';
    iframe.style.zIndex = '10000';
    iframe.style.boxShadow = 'rgba(0, 52, 164, 0.4) 0px 4px 12px';
    document.body.appendChild(iframe);

    // Insert the Show/Hide button
    var toggleBtn = document.createElement('button');
    var hidden = defaultHidden;
    iframe.style.display = hidden ? 'none' : 'block';
    toggleBtn.innerHTML = '<img src="assets/cc-logo.png" width="28"/>';
    toggleBtn.onclick = function () {
        hidden = !hidden;
        alert.style.display = 'none';
        closeAlert.style.display = "none";
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
    toggleBtn.style.cursor = 'pointer';
    toggleBtn.style.color = 'white';
    document.body.appendChild(toggleBtn);


    window.addEventListener('message', function (event) {
        if (event.origin !== embedUrl) {
            return;
        }
        console.log(JSON.stringify(event.data));
        if (event.data.action === 'grow') {
            iframe.style.width = "400px";
            iframe.style.height = "600px";
        } else if(event.data.action === 'shrink') {
            iframe.style.width = "800px";
            iframe.style.height = "700px";
        }
    });


    var alert = document.createElement('div');
    alert.style.display = showToggleBtnPrompt? 'flex' : none;
    alert.innerHTML = 'Hello! &#128075; Click here to ask me a question!';

    alert.style.boxShadow = "rgba(22, 91, 239, 0.4) 0px 4px 8px";
    alert.style.backgroundColor = '#FFFFFF';
    alert.style.color = "black"

    alert.style.position = 'fixed';
    alert.style.bottom = '40px';
    alert.style.right = '70px';
    alert.style.borderRadius = '8px';
    alert.style.paddingBlock = '0.5em 0.5em';
    alert.style.paddingInline = '1.5em 1.5em';
    alert.style.inline = '1.5em 1.5em';
    alert.style.width = '220px';
    alert.style.justifyContent = 'center';
    alert.style.alignItems = 'center';
    document.body.appendChild(alert);

    var closeAlert = document.createElement('button');
    closeAlert.style.display = showToggleBtnPrompt? 'flex' : none;

    closeAlert.style.position = 'fixed';
    closeAlert.style.bottom = '80px';
    closeAlert.style.right = '65px';
    closeAlert.style.width = "20px";
    closeAlert.style.height = "20px";
    closeAlert.style.backgroundColor = 'red';
    closeAlert.style.color = "white";
    closeAlert.style.justifyContent = "center";
    closeAlert.style.alignItems = "center";
    closeAlert.innerHTML = "x";
    closeAlert.style.fontWeight = "600";
    closeAlert.style.border = "none";
    closeAlert.style.borderRadius = "20px";
    closeAlert.style.opacity = "0.7";
    closeAlert.onclick = function () {
        alert.style.display = "none";
        closeAlert.style.display = "none";
    };
    document.body.appendChild(closeAlert);

})('http://localhost:3000', true, '#007bff', true);
