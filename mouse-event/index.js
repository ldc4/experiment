var timer = null;
var show = false;

function enter() {
  console.log('enter')
  clearTimeout(timer);
  timer = setTimeout(function() {
    document.getElementById('top').innerHTML = '有'
  }, 200)
}

function leave() {
  console.log('leave')
  clearTimeout(timer);
  timer = setTimeout(function() {
    document.getElementById('top').innerHTML = '无'
  }, 200)
}

var testDom = document.getElementById('test');
testDom.addEventListener('mouseenter', enter, false);
testDom.addEventListener('mouseleave', leave, false);


var testDom2 = document.getElementById('test2');
testDom2.addEventListener('mouseenter', enter, false);
testDom2.addEventListener('mouseleave', leave, false);
// testDom2.addEventListener('mousedown', () => { console.log('down') }, false);
// testDom2.addEventListener('mouseup', () => { console.log('up') }, false);
// testDom2.addEventListener('mousemove', () => { console.log('move') }, false);
// testDom2.addEventListener('mouseover', () => { console.log('over') }, false);
// testDom2.addEventListener('mouseout', () => { console.log('out') }, false);