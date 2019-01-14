$('.share-button-clickable').click(function(e) {
    // Use a post to enter thank you page, ensures internet connection
    $.post("/invitefriends", { intent: "share", type: this.dataset.type }, function(data) {
        if (data == "OK") {
            enterThankYouPage();
        }
    });
});

function showHowItWorksPrompt() {
    $('.darkener').addClass('shown');
    $('.prompt-container').addClass('active');
}

function hideHowItWorksPrompt() {
    $('.darkener').removeClass('shown');
    $('.prompt-container').removeClass('active');
}

function enterThankYouPage() {
    window.location.href = "thankyou";
}