$(document).ready(() => {
    setupErrorBox();
    $(".submit-form").click(checkControl);
    $(".sc_services_item").click(onServiceClick);
    $(".dark-box").click(onDarkBoxClick);
    $(".img-zoom-result").hide();

    /*
    $("#img-punti").css({
        'width': calc(100 + 'vw' - $(".menu_side_wrap.scheme_side").width())
    });
    */
})

function onServiceClick() {
    //prima di aprire la sezione, riporto la visualizzazione al centro dell'animazione
    let top = document.getElementById("services-section").offsetTop;
    window.scrollTo(0, top);

    let slidingBox = $("#services-section .sliding-box");
    slidingBox.empty();

    /*let bottom = $("#box-4").offset().bottom - $("#services-section").offset().top;*/
    
    /*slidingBox.css("bottom", bottom + "px");*/

    if($("#services-section .my_container").width() < 600) {
        $(".sc_services_item").addClass("unactive");
    }

    $("#services-section .dark-box").fadeIn();

    $("#services-section .my_container").fadeIn();

    if($("#services-section .my_container").width() > 600) {
        $("#services-section .dark-box").css("background-color", "#0000");
    }

    slidingBox.css("left", "0");
    
    if($(this).attr("id") == "box-1") {
        slidingBox.append('<button class="close-button" onclick="onCloseButtonClick()" type="button">&#x2715</button>');
        slidingBox.append('<h3 class="intern-box-title">CLASSE ENERGETICA NZEB</h3>');
        slidingBox.append('<p class="intern-box-subtitle">Nearly Zero Emission Building: Chora è un edificio ad alta prestazione energetica con fabbisogno energetico vicino allo zero.</p>');
        slidingBox.append('<img class ="boxImage" src="images/boxes/NZEB_Logo.png">');
    }

    if($(this).attr("id") == "box-2") {
        slidingBox.append('<button class="close-button" onclick="onCloseButtonClick()" type="button">&#x2715</button>');
        slidingBox.append('<h3 class="intern-box-title">IMPIANTI TECNOLOGICI</h3>');
        slidingBox.append('<ul class="intern-box-ul"> <li class="intern-box-text">Riscaldamento: Chora è dotato di impianto centralizzato a pompa di calore, con apparecchiature per la gestione e la contabilizzazione dei consumi.</li> <li class="intern-box-text">Il riscaldamento sarà assicurato da un impianto radiante a pavimento e da termoarredi a supporto nei bagni.</li> <li class="intern-box-text">Negli appartamenti sarà installato un sistema di ventilazione al fine di assicurare il ricambio d\'aria necessario ad elevare lo standard abitativo.</li> <li class="intern-box-text">Predisposizione impanto di climatizzazione in ogni locale.</li> <li class="intern-box-text">Impianto fotovoltaico per la produzionedi energia elettrica a servizio delle parti comuni.</li> <li class="intern-box-text">Predisposizione ricarica auto elettrica nei box.</li> <li class="intern-box-text">Basculante motorizzata.</li></ul>');
    }

    if($(this).attr("id") == "box-3") {
        slidingBox.append('<button class="close-button" onclick="onCloseButtonClick()" type="button">&#x2715</button>');
        slidingBox.append('<h3 class="intern-box-title">SMART HOME</h3>');
        slidingBox.append('<ul class="intern-box-ul"> <li class="intern-box-text">Gli alloggi saranno dotati di un impianto di domotica base, comprendente comando centralizzato, luci, tapparelle e gestione carichi con possibilità di collegamento e gestione da remoto.</li> <li class="intern-box-text">Predisposizione impianto antintrusione.</li> <li class="intern-box-text">Videocitofono con tecnologia wireless per effetuare collegamento da remoto.</li> <li class="intern-box-text">Termostati ambiente con tecnologia wireless per effettuare collegamento da remoto.</li> </ul>');
    }

    if($(this).attr("id") == "box-4") {
        slidingBox.append('<button class="close-button" onclick="onCloseButtonClick()" type="button">&#x2715</button>');
        slidingBox.append('<h3 class="intern-box-title">FINITURE</h3>');
        slidingBox.append('<ul class="intern-box-ul"> <li class="intern-box-text">Il bagno principale sarà dotato di sanitari Ideal Standard sospesi serie Connect Air con tecnologia AquaBlade.</li> <li class="intern-box-text">Il bagno di servizio sarà dotato di sanitari Ideal Standard sospesi serie Life B con tecnologia AquaBlade.</li> <li class="intern-box-text">Ceramica di primarie aziende Italiane.</li> <li class="intern-box-text">Miscelatori Ideal Standard serie Ceraline.</li> <li class="intern-box-text">Pavimento in legno marca Berti.</li> <li class="intern-box-text">Impianto elettrico BTicino serie Livinglight.</li> <li class="intern-box-text">Serramenti in PVC dotati di sistema di microventilazione.</li> <li class="intern-box-text">Tapparelle in alluminio motorizzate.</li> </ul>');
    }

    if($(this).attr("id") == "box-5") {
        slidingBox.append('<button class="close-button" onclick="onCloseButtonClick()" type="button">&#x2715</button>');
        slidingBox.append('<h3 class="intern-box-title">SERVIZI</h3>');
        slidingBox.append('<ul class="intern-box-ul"> <li class="intern-box-text">Stazione ferroviaria di Canegrate circa a 3 km, raggiungibile in 5 minuti d\'auto.</li> <li class="intern-box-text">Supermercato a 2 km, raggiungibile in 3 minuti d\'auto.</li> <li class="intern-box-text">Residenza Chora è adiacente all\'Olona greenway.</li> <li class="intern-box-text">Centro di Legnano raggiungibile facilmente in pochi minuti.</li> <li class="intern-box-text">Fermata autobus Sempione a 400 m, raggiungibile in 5 minuti a piedi.</li> <li class="intern-box-text">Ingresso autostrada a 4 km, raggiungibile in 8 minuti d\'auto.</li> </ul>');
    }

    if($(this).attr("id") == "box-6") {
        slidingBox.append('<button class="close-button" onclick="onCloseButtonClick()" type="button">&#x2715</button>');
        slidingBox.append('<h3 class="intern-box-title">SICUREZZA</h3>');
        slidingBox.append('<ul class="intern-box-ul"> <li class="intern-box-text">Videosorveglianza corsello box e ingressi con possibilità di collegamento remoto.</li> <li class="intern-box-text">Apertura basculante automatica.</li> <li class="intern-box-text">Porta di ingresso blindata elettrificata, con possibilità di aperture a codice numerico, impronta digitale o badge.</li> </ul>');
    }
}

function onDarkBoxClick() {
    let slidingBox = $("#services-section .sliding-box");
    slidingBox.css("left", "-100%");
    $("#services-section .dark-box").fadeOut();
    $("#services-section .my_container").fadeOut();

    setTimeout(() => {
        slidingBox.empty();
        $("#services-section .dark-box").css("background-color", "#0008");
    }, 500);
}

function onCloseButtonClick() {
    console.log('bravooooo');
    let slidingBox = $("#services-section .sliding-box");
    slidingBox.css("left", "-100%");
    $("#services-section .dark-box").fadeOut();
    $("#services-section .my_container").fadeOut();

    setTimeout(() => {
        slidingBox.empty();
        $("#services-section .dark-box").css("background-color", "#0008");
        $(".sc_services_item").removeClass("unactive");
    }, 500);
    
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