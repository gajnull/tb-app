var v = {};

v.template = document.querySelector('#page-find>input.top');
v.answerList = document.querySelector('#page-list>.top');
v.answerTicket = document.querySelector('#page-ticket>.top');

v.mainList = document.querySelector('#page-list>.main');
v.mainFind = document.querySelector('#page-find>.main');
v.mainTicket = document.querySelector('#page-ticket>.main');

v.btns = document.getElementById('btns');


/********  btns  ***********/

v.btns.onclick = function(e) {
  var el = e.target;
  if (!el.classList.contains('btn')) return;
  if (el.hasAttribute('act')) return;
  var els = document.querySelectorAll('#btns .btn');
  for (var i = 0; i < els.length; i++) {
      els[i].removeAttribute('act');
  }
  el.setAttribute('act', '');
  var page = el.getAttribute('page');
  v.setPage(page);
}


v.setPage = function(page) {
	var oldPage = document.getElementById(state.view);
	var newPage = document.getElementById(page);
	oldPage.setAttribute('hidden', '');
	newPage.removeAttribute('hidden');
	switch (page) {
		case 'page-list':
			v.goList();
			break;
		case 'page-find':
			v.goFind();
			break;
		case 'page-ticket':
			v.goTicket();
			break;
	}
	state.view = page;
  //window.scrollTo(0,1);
}



/********  page-list  ***********/

v.goList = function() {
  var els = document.querySelectorAll('#page-list .ticket');
  for (var i = 0; i < els.length; i++) {
      var el = els[i];
      el.removeAttribute('act');
      var t = + el.getAttribute('ticket');
      if (t == state.ticket) el.setAttribute('act', '');
  }
  v.answerList.innerHTML = model.getCurrentAnswers();
}

v.mainList.onclick = function(e) {
  var el = e.target;
  if (!el.classList.contains('ticket')) return;
  if (el.hasAttribute('act')) return;

  var ticket = + el.getAttribute('ticket');
  state.ticket = ticket;
  v.goList();
}





/********  page-find  ***********/

v.template.onkeypress = function(e) {
  v.template.value = v.template.value.toLowerCase();
  if(e.keyCode == 13) {
    state.template = v.template.value;
    v.goFind();
  }
}

v.answerTicket.onclick = function() {
  v.btns.setAttribute('hidden', '');
  v.answerTicket.setAttribute('hidden', '');
}


v.mainFind.onclick = function(e) {
  var target = e.target;
  var el = target.parentNode;
  if(!el.hasAttribute('ticket')) return;
  var ticket = + el.getAttribute('ticket');
  state.ticket = ticket;
  var oldEl = v.mainFind.querySelector('[act]');
  if(oldEl) {
    oldEl.removeAttribute('act');
    oldEl.querySelector('.findAnswer').setAttribute('hidden', '');
  }
  el.setAttribute('act', '');
  el.querySelector('.findAnswer').removeAttribute('hidden', '');
}

v.goFind = function() {
  if(state.template == '') return;
  v.template.innerHTML = state.template;
  v.mainFind.innerHTML = v.getHtmlSuitableTickets();
}

v.getHtmlSuitableTickets = function() {
  var res = model.getSuitableTickets();
  var s = '';
  for (var i = 0; i < res.length; i++) {
    s += '<div ticket="' + res[i].t + '"><p class="findTicket">' +
        res[i].q + '.' + res[i].txt + ' - ' + res[i].a + '</p>\n' +
        '<p class="findAnswer" hidden>' + res[i].answer + '</p></div>\n';    
  }  
  return s;
}


/********  page-ticket  ***********/

v.goTicket = function() {
  if(state.ticket == 0) return ''; 
  v.answerTicket.innerHTML = model.getCurrentAnswers();
  v.mainTicket.innerHTML = v.getHtmlCurrentTicket();
}

v.getHtmlCurrentTicket = function() {
  if(state.ticket == 0) return ''; 
  var s1 = '<p class="headTicket">БИЛЕТ №' + state.ticket + '</p>\n';
  var qq = data[state.ticket - 1].items;
  var s2 = '';
  for (var i = 0; i < qq.length; i++) {
    s2 += '<div class="border">'
    s2 += '<p class="question">' + qq[i].q + '.' + qq[i].txt + '</p>\n';
    s2 += getAnswers(qq[i]);
    s2 += '</div>';
  }
  
  return '<div>' + s1 + s2 + '</div>';

  function getAnswers(q) {
    var s3 = '';
    var act = '';
    for (var i = 0; i < q.aa.length; i++) {
      if(q.aa[i][0] == q.a) act = ' act'; else act = '';
      s3 += '<p class="answer' + act + '">&nbsp' + q.aa[i][0] + '&nbsp' + q.aa[i][1] + '</p>';
    }
    return s3;
  }

}

v.mainTicket.onclick = function(e) {
  var w = document.documentElement.clientWidth;
  var h = document.documentElement.clientHeight;
  
  v.btns.removeAttribute('hidden');
  v.answerTicket.removeAttribute('hidden');
  
  if (e.clientY > h*2/3) return;
  if (e.clientY < h*1/3) return;
  //if (e.clientX < w*7/8 && e.clientX > w*1/8) return;  
  if(e.clientX > w*7/8 && state.ticket < 15) {
    state.ticket++;
    v.goTicket();
  }
  if(e.clientX < w*1/8 && state.ticket > 1) {
    state.ticket--;
    v.goTicket();
  }  
}

