function myFunction() {
    
    const input = document.getElementById('input-text').value;
    const cardToastFailed = document.getElementById('card-toast-failed')
    const cardToastSuccess = document.getElementById('card-toast-success')

    if(input == "") {
        cardToastFailed.className = "failed"
        setTimeout(function() {
            cardToastFailed.className = cardToastFailed.className.replace("failed", "");
        },3000)
    } else {
        cardToastSuccess.className = "success"
        setTimeout(function() {
            cardToastSuccess.className = cardToastSuccess.className.replace("success", "");
        },3000)
    }
}