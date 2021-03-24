var gamepade=document.getElementById('gamepade');



window.addEventListener('resize',fun);

function fun(EO){
    EO=EO||window.event;

    var fieldHeight=document.getElementById('box-content');
    document.getElementById('press-swipe').style.top=fieldHeight.offsetHeight-15+'px';

    if(window.innerWidth<450){
        gamepade.classList.add('done');
        gamepade.style.height=window.innerHeight-fieldHeight.offsetHeight-30+'px';
        gamepade.style.top=fieldHeight.offsetHeight+20+'px';
    }else{
        gamepade.classList.remove('done');
    }
}

setInterval(function(){
    fun();
    },100);

var checkInput=document.getElementById('checkInput');

checkInput.addEventListener('click',funCheckBox);

function funCheckBox(EO){
    EO=EO||EO.event;
    if(!(checkInput.cheked)){
        checkInput.cheked=true;
        gamepade.style.width=100+'%';
        document.getElementById('butTable').classList.add('done');
    }else if(checkInput.cheked){
        checkInput.cheked=false;
        gamepade.style.width=0;
        document.getElementById('butTable').classList.remove('done');
    }
}

