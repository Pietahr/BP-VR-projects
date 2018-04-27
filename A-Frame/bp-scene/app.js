let scene = document.querySelector('a-scene');

addBoxFunctions();
updateCount();


function updateCount(){
    var objs = document.querySelectorAll('.obj');
    var count = objs.length;

    var countTxt = document.querySelector('#count')
    countTxt.setAttribute('value',`number of items: ${count}`);
}

function addBoxFunctions(){
    var trumpBox = document.querySelector('#trumpBox');
    trumpBox.addEventListener('click', function() {
        generateFigure('trump');
        updateCount();
    })
    
    var gokuBox = document.querySelector('#gokuBox');
    gokuBox.addEventListener('click', function() {
        generateFigure('goku');
        updateCount();
    })
    
    var deerBox = document.querySelector('#deerBox');
    deerBox.addEventListener('click', function() {
        generateFigure('deer');
        updateCount();
    })
    
    var troopBox = document.querySelector('#troopBox');
    troopBox.addEventListener('click', function() {
        generateFigure('trooper');
        updateCount();
    })
    
    var rickBox = document.querySelector('#rickBox');
    rickBox.addEventListener('click', function() {
        generateFigure('rick');
        updateCount();
    })
    
    var clearBox = document.querySelector('#clearBox');
    clearBox.addEventListener('click', function() {
        clearObjects();
        updateCount();
    })
}
function clearObjects(){
    var deletes = document.querySelectorAll('.obj');
    for(let del of deletes){
        scene.removeChild(del)
    }
}

function generateFigure(typeName){
   var theIdString = defineCurve();

    var obj = document.createElement('a-entity');
    obj.setAttribute('class','obj');
    switch (typeName){
        case 'trump':     
        obj.setAttribute('obj-model','obj: #trump-obj; mtl: #trump-mtl');
        break;
        case 'goku':
        obj.setAttribute('obj-model','obj: #goku-obj; mtl: #goku-mtl');
        obj.setAttribute('scale','10 10 10');
        break;
        case 'deer':
        obj.setAttribute('obj-model','obj: #deer-obj;');
        obj.setAttribute('material','color: saddlebrown');
        break;
        case 'trooper':
        obj.setAttribute('obj-model','obj: #trooper-obj; mtl: #trooper-mtl');
        obj.setAttribute('scale','0.5 0.5 0.5');
        break;
        case 'rick':
        obj.setAttribute('obj-model','obj: #rick-obj;');
        obj.setAttribute('scale','0.01 0.01 0.01');
        obj.setAttribute('material','color: green');
        break;
    }

    obj.setAttribute('alongpath', `curve: #${theIdString}; dur:16000; loop:true;`);
    obj.appendChild(createRotateAnimation());
    scene.appendChild(obj);
  }


function createRotateAnimation(){
    var animRot = document.createElement('a-animation');
    animRot.setAttribute('attribute', "rotation")
    animRot.setAttribute('from', "0 0 0")
    animRot.setAttribute('to', "0 360 0")
    animRot.setAttribute('dur', "1000")
    animRot.setAttribute('easing', "linear");
    animRot.setAttribute('repeat', "indefinite");   
    return animRot;
}

var id = 0

function defineCurve() {
    var curve = document.createElement('a-curve');

    idString = "block" + (++id);
    curve.setAttribute('id', `${idString}`)
    createPoints(curve);
    scene.appendChild(curve);

    return idString;
}

function createPoints(curve){

    posX = generateRandomNumber(4,12);
    posY = generateRandomNumber(-7,7);
    posZ = generateRandomNumber(5,20);

    var point1 = document.createElement('a-curve-point');
    point1.setAttribute('position', `${posX} ${posY} ${-posZ}`);

    var point2 = document.createElement('a-curve-point');
    point2.setAttribute('position', `${-posX} ${posY} ${-posZ}`);

    var point3 = document.createElement('a-curve-point');
    point3.setAttribute('position', `${-posX} ${posY} ${posZ}`);

    var point4 = document.createElement('a-curve-point');
    point4.setAttribute('position', `${posX} ${posY} ${posZ}`);

    var point5 = document.createElement('a-curve-point');
    point5.setAttribute('position', `${posX} ${posY} ${-posZ}`);

    curve.appendChild(point1);
    curve.appendChild(point2);
    curve.appendChild(point3);
    curve.appendChild(point4);
    curve.appendChild(point5);
}

function generateRandomNumber(min, max){
    return rand = min + Math.random() * (max - min);
}