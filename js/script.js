//use the target property of the HTML event object to get the element that triggered the event
//we can then check wether it is checked or unchecked for our handler behavior.

function Node(inputBox, checkBox) {
  this.inbox = inputBox;
  this.check = checkBox;
  this.lch = null;
  this.rch = null;
  this.brother = null;
  this.value = 0;
  this.rowAverage = 0;

  this.disable = function() {
    inbox.disabled = true;
    check.disabled = true;
  };

  this.enable = function() {
    inbox.disabled = false;
    check.disabled = false;
  };
}

CR = new Node(document.getElementById("CR"), document.getElementById("CRLock"));
OCR = new Node(document.getElementById("OCR"), document.getElementById("OCRLock"));
DCR = new Node(document.getElementById("DCR"), document.getElementById("DCRLock"));
Damage = new Node(document.getElementById("Damage"), null);
Attack = new Node(document.getElementById("Attack"), null);
HP = new Node(document.getElementById("HP"), null);
AC = new Node(document.getElementById("AC"), null);

CR.lch = OCR;
CR.rch = DCR;

OCR.lch = Damage;
OCR.rch = Attack;

DCR.lch = HP;
DCR.rch = AC;

function checkHandler(ev) {
  var caller = ev.target;
  var node;

  if (caller.id === "CRLock") {
    node = CR;
  } else if (caller.id === "OCRLock") {
    node = OCR;
  } else if (caller.id === "DCRLock") {
    node = DCR;
  } else {
    return;
  }

  if (caller.checked) {
    node.inbox.disabled = true;
    lch.enable();
    rch.enable();
  } else {
    lch.disable();
    rch.disable();
    node.inbox.disabled = false;
  }
}
