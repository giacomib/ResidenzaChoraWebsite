$(document).ready(() => {
    setupErrorBox();
    $(".submit-form").click(checkControl);
    $(".sc_services_item").click(onServiceClick);
    $(".dark-box").click(onDarkBoxClick);
})

function onServiceClick() {
    $(".sc_services_item").removeClass("active");
    $("#services-section").addClass("dark");
    $("#services-section .dark-box").fadeIn();
    $(this).addClass("active");
    let top = $(this).offset().top - $("#services-section").offset().top;
    let left = $(this).offset().left - $("#services-section").offset().left;
    let width = $(this).width();
    let height = $(this).height();
    let growerBox = $("#services-section .grower-box");
    growerBox.css("top", top + "px");
    growerBox.css("left", left + "px");
    growerBox.css("width", width + "px");
    growerBox.css("height", height + "px");
    setTimeout(() => {
        growerBox.addClass("grown");
    }, 500);
}
function onDarkBoxClick() {
    let growerBox = $("#services-section .grower-box");
    growerBox.removeClass("grown");
    $("#services-section .dark-box").fadeOut();
    $(".sc_services_item").removeClass("active");
}

let errorBox = $(".trx_addons_message_box");
let errorItem1 = $('<p class="error_item"></p>');
let errorItem2 = $('<p class="error_item"></p>');
function setupErrorBox() {
    errorBox.addClass("trx_addons_message_box_error");
    errorBox.append(errorItem1);
    errorBox.append(errorItem2);
}

function checkControl() {
    let username = $("#contact_form_username").val();
    if(username == ""){
        errorItem1.html("ERRORE");
        errorItem2.html("Il campo 'Nome' è obbligatorio");
        showErrorBox();
        return;
    }

    let surname = $("#contact_form_surname").val();
    if(surname == ""){
        errorItem1.html("ERRORE");
        errorItem2.html("Il campo 'Cognome' è obbligatorio");
        showErrorBox();
        return;
    }

    let phone = $("#contact_form_phone").val();
    if(phone == ""){
        errorItem1.html("ERRORE");
        errorItem2.html("Il campo 'Telefono' è obbligatorio");
        showErrorBox();
        return;
    }

    let email = $("#contact_form_email").val();
    if(email == ""){
        errorItem1.html("ERRORE");
        errorItem2.html("Il campo 'email' è obbligatorio");
        showErrorBox();
        return;
    }

    let city = $("#contact_form_city").val();
    if(city == ""){
        errorItem1.html("ERRORE");
        errorItem2.html("Il campo 'Comune' è obbligatorio");
        showErrorBox();
        return;
    }
    
    let city_2 = $("#contact_form_city_2").val();
    if(city_2 == ""){
        errorItem1.html("ERRORE");
        errorItem2.html("Il campo 'CAP' è obbligatorio");
        showErrorBox();
        return;
    }

    let msg = $("#contact_form_message").val();
    if(msg == ""){
        errorItem1.html("ERRORE");
        errorItem2.html("Il testo del messaggio è obbligatorio");
        showErrorBox();
        return;
    }

    let cb1 = $("#privacy-1").is(':checked');
    if(!cb1){
        errorItem1.html("ERRORE");
        errorItem2.html("Prima casella obbligatoria");
        showErrorBox();
        return;
    }

    let cb2 = $("#privacy-2").is(':checked');
    if(!cb2){
        errorItem1.html("ERRORE");
        errorItem2.html("Seconda casella obbligatoria");
        showErrorBox();
        return;
    }

    let cb3 = $("#privacy-3").is(':checked');
    if(!cb3){
        errorItem1.html("ERRORE");
        errorItem2.html("Terza casella obbligatoria");
        showErrorBox();
        return;
    }
}

function showErrorBox() {
    errorBox.fadeIn();
    setTimeout(()=>errorBox.fadeOut(), 1500);
}