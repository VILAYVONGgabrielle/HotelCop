//datepicker from to
var dateFormat = "mm/dd/yy",
    from = $("#inputDateFrom")
        .datepicker({
            minDate: 0,
            defaultDate: "+1w",
            changeMonth: true,
            numberOfMonths: 2,
            closeText: 'Fermer',
            prevText: 'Précédent',
            nextText: 'Suivant',
            dateFormat: "dd/mm/yy",
            monthNames: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
            monthNamesShort: ['Janv.', 'Févr.', 'Mars', 'Avril', 'Mai', 'Juin', 'Juil.', 'Août', 'Sept.', 'Oct.', 'Nov.', 'Déc.'],
            dayNames: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
            dayNamesShort: ['Dim.', 'Lun.', 'Mar.', 'Mer.', 'Jeu.', 'Ven.', 'Sam.'],
            dayNamesMin: ['D', 'L', 'M', 'M', 'J', 'V', 'S'],
            weekHeader: 'Sem.',
            firstDay: 1
        })
        .on("change", function () {
            to.datepicker("option", "minDate", getDate(this));
        }),
    to = $("#inputDateTo").datepicker({
        defaultDate: "+1w",
        changeMonth: true,
        numberOfMonths: 2,
        closeText: 'Fermer',
        prevText: 'Précédent',
        nextText: 'Suivant',
        dateFormat: "dd/mm/yy",
        monthNames: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
        monthNamesShort: ['Janv.', 'Févr.', 'Mars', 'Avril', 'Mai', 'Juin', 'Juil.', 'Août', 'Sept.', 'Oct.', 'Nov.', 'Déc.'],
        dayNames: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
        dayNamesShort: ['Dim.', 'Lun.', 'Mar.', 'Mer.', 'Jeu.', 'Ven.', 'Sam.'],
        dayNamesMin: ['D', 'L', 'M', 'M', 'J', 'V', 'S'],
        weekHeader: 'Sem.',
        firstDay: 1
    })
        .on("change", function () {
            from.datepicker("option", "maxDate", getDate(this));
        });

function getDate(element) {
    var date;
    try {
        var parts = element.value.split("/");
        var dt = parseInt(parts[1]) + "/" + parseInt(parts[0]) + "/" + parseInt(parts[2]);
        date = $.datepicker.parseDate(dateFormat, dt);
    } catch (error) {
        date = null;
    }
    return date;
}

//fonction d'impression onClick sur l'id print = ('Imprimer la page' dans le footer)
document.getElementById('print').addEventListener('click', function () { window.print(); });

/****   Page chambers.html  gabrielle ******/
function fDetail() {
    var detail = document.getElementById('detailClas');
    if (detail.style.display === "block") {
        detail.style.display = "none";
    } else {
        detail.style.display = "block";
    }
}
function fDetail1() {
    var detail = document.getElementById('detailClas1');
    if (detail.style.display === "block") {
        detail.style.display = "none";
    } else {
        detail.style.display = "block";
    }
}
function fDetail2() {
    var detail = document.getElementById('detailClas2');
    if (detail.style.display === "block") {
        detail.style.display = "none";
    } else {
        detail.style.display = "block";
    }
}