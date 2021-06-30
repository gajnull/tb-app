var state = {
  ticket: 0,
  view: "page-list", // page-list/page-find/page-ticket
  template: ""
};

var model = {};

model.getAnswers = function(numb) {
  if(numb == 0) return '';
  var s = '';
  var aa = data[numb - 1].items;
  for (var i = 0; i < aa.length; i++) {
    var a = aa[i];
    s = s + a.q + a.a.replace(/\)$/,'') + ',';
  }
  return s.replace(/,$/,'');
};

model.getCurrentAnswers = function() {
  return model.getAnswers(state.ticket);
};


model.getSuitableTickets = function() {
  var s = state.template;
  s = s.replace('+','.+');
  var res = [];
  var reg = new RegExp(s, 'i');
  for (var i = 0; i < 15; i++) {
    var tt = data[i].items;
    var t =  + data[i].t; // номер билета
    for (var j = 0; j < tt.length; j++) {
      var txt = tt[j].txt;
      if(reg.test(txt)) {
        var a = tt[j].a;
        var q = + tt[j].q;
        var answer = '';
        for (var k = 0; k < tt[j].aa.length; k++) {
          if(a == tt[j].aa[k][0]) answer = tt[j].aa[k][1];
        }
        res.push({t, q, txt, a, answer});
      }
    }
  }
  return res;
}