window.onload = function() {
  for (var i = 0; i < aktivitet.length; i++) {
    aktivitet[i].addEventListener('click', aktivitetPush, false);
}
for (var i = 0; i < brukere.length; i++) {
  brukere[i].addEventListener('click', brukerePush, false);
}
for (var i = 0; i < melding.length; i++) {
  melding[i].addEventListener('click', meldingPush, false);
}
}


var nyAktivitetPush = function () {
  myNavigator.pushPage('nyAktivitet.html')
};

var redigerProfilPush = function () {
  myNavigator.pushPage('redigerProfil.html')
};

// klikk fra meldinger til meldingstråd
var customPush = function () {
    myNavigator.pushPage('meldingstrad.html')
  };
 


  //klikk fra aktivitetliste til eventside
  var aktivitet = document.getElementsByClassName("aktivitet-container");

  var aktivitetPush = function () {
      myNavigator.pushPage('eventside.html')
    };

    //klikk fra brukere i nærheten til bruker profil
    var brukere = document.getElementsByClassName("karusell-bruker");

    var brukerePush = function () {
      myNavigator.pushPage('annenBruker.html')
    };

    var melding = document.getElementsByClassName("meldingIkon");

    var meldingPush = function () {
      myNavigator.pushPage('meldingstrad.html')
    }