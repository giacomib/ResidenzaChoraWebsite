$(document).ready(() => {
    setupErrorBox();
    $(".submit-form").click(checkControl);
    $(".sc_services_item").click(onServiceClick);
    $(".dark-box").click(onDarkBoxClick);
})

function onServiceClick() {
    console.log("a");
    $(".sc_services_item").removeClass("active");
    /*$("#services-section").addClass("dark");*/
    $("#services-section .dark-box").fadeIn();
    /*$(this).addClass("active");*/
    let top = $(this).offset().top - $("#services-section").offset().top;
    let left = $(this).offset().left - $("#services-section").offset().left;
    let width = $(this).width();
    let height = $(this).height();
    let growerBox = $("#services-section .grower-box");
    growerBox.css("top", top + "px");
    growerBox.css("left", left + "px");
    growerBox.css("width", width + "px");
    //growerBox.css("height", height + "px");

    setTimeout(() => {
        growerBox.addClass("grown");
    }, 500);

    
    if($(this).attr("id") == "box-1") {
        growerBox.append('<h3 class="intern-box-title">CLASSE ENERGETICA A3</h3>');
        growerBox.append('<p class="intern-box-subtitle">La classe energetica A3 è quella più efficiente dal punto di vista del risparmio dell\'energia</p>');
        growerBox.append('<img class ="boxImage" src="images/boxes/classeEnergetica2.png">');
    }

    if($(this).attr("id") == "box-2") {
        growerBox.append('<h3 class="intern-box-title">IMPIANTI TECNOLOGICI</h3>');
        growerBox.append('<p class="intern-box-paragraph">Riscaldamento: l\'edificio darà dotato di impianto centralizzato a pompa di calore, con apparecchiature per la gestione e la contabilizzazione dei consumi.</br> Il riscaldamento sarà assicurato da un impianto radiante a pavimento e da termoarredi a supporto nei bagni.</p>');
        growerBox.append('<ul class="intern-box-ul"><li class="intern-box-text">Negli appartamenti sarà installato un sistema di ventilazione al fine di assicurare il ricambio d\'aria necessario ad elevare lo standard abitativo.</li> <li class="intern-box-text">Predisposizione impanto di climatizzazione in ogni locale.</li></ul>');
    }

    if($(this).attr("id") == "box-3") {
        growerBox.append('<h3 class="intern-box-title">SMART HOME</h3>');
        growerBox.append('<ul class="intern-box-ul"> <li class="intern-box-text">Gli alloggi saranno dotati di un impianto di domotica base, comprendente comando centralizzato, luci, tapparelle e gestione carichi con possibilità di collegamento e gestione da remoto.</li> <li class="intern-box-text">Impianto fotovoltaico per la produzionedi energia elettrica a servizio delle parti comuni.</li> <li class="intern-box-text">Predisposizione impianto antintrusione.</li> <li class="intern-box-text">Realizzazione della sola predisposizione per la presa per ricarica auto elettrica nei box.</li> <li class="intern-box-text">Videocitofono Bticino.</li> </ul>');
    }

    if($(this).attr("id") == "box-4") {
        growerBox.append('<h3 class="intern-box-title">FINITURE</h3>');
        growerBox.append('<ul class="intern-box-ul"> <li class="intern-box-text">Il bagno principale sarà dotato di sanitari Ideal Standard sospesi serie Connect Air con tecnologia AquaBlade.</li> <li class="intern-box-text">Il bagno di servizio sarà dotato di sanitari Ideal Standard sospesi serie Life B con tecnologia AquaBlade.</li> <li class="intern-box-text">Ceramica di primarie aziende Italiane.</li> <li class="intern-box-text">Miscelatori Ideal Standard serie Ceraline.</li> <li class="intern-box-text">Pavimento in legno marca Berti.</li> </ul>');
    }

    if($(this).attr("id") == "box-5") {
        growerBox.append('<h3 class="intern-box-title">SERVIZI</h3>');
        growerBox.append('<ul class="intern-box-ul"> <li class="intern-box-text">Stazione ferroviaria di Canegrate a 3,3 km, raggiungibile in 7 minuti d\'auto.</li> <li class="intern-box-text">Supermercato Carrefour a 2,5 km, raggiungibile in 5 minuti d\'auto.</li> <li class="intern-box-text">Olona greenway raggiungibile in 3 minuti a piedi.</li> <li class="intern-box-text">Centro di Legnano a 4,5 km, raggiungibile in 11 minuti d\'auto.</li> <li class="intern-box-text">Fermata autobus Sempione a 400 m, raggiungibile in 7 minuti a piedi.</li> <li class="intern-box-text">Ingresso autostrada a 4,3 km, raggiungibile in 10 minuti d\'auto.</li> </ul>');
    }

    if($(this).attr("id") == "box-6") {
        growerBox.append('<h3 class="intern-box-title">SICUREZZA</h3>');
        growerBox.append('<ul class="intern-box-ul"> <li class="intern-box-text">Videosorveglianza corsello box e ingressi con possibilità di collegamento remoto.</li> <li class="intern-box-text">Apertura basculante automatica.</li> <li class="intern-box-text">Porta di ingresso blindata con apertura a codice numerico.</li> <li class="intern-box-text">Chiusura notturna automatizzata corsello box.</li> </ul>');
    }
}

function onDarkBoxClick() {
    let growerBox = $("#services-section .grower-box");
    growerBox.empty();
    growerBox.removeClass("grown");
    growerBox.css("top", "100vh");
    $("#services-section .dark-box").fadeOut();
    /*$(".sc_services_item").removeClass("active");*/
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