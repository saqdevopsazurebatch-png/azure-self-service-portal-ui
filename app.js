async function callBackend() {
    const response = await fetch("https://self-service-backend-api.azurewebsites.net/api/provision");
    const text = await response.text();
    alert(text);
}

