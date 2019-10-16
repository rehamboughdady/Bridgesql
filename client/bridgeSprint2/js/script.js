



//// Create All Boxs By Js 
//var gameContainerEnd = document.querySelector('.game .container .hide-end'),
//    loopBoxs,
//    loopBoxWrapper;
//var bgImg = ['','suit0.png','suit1.png','suit2.png','suit3.png'];
//for (loopBoxs = 0; loopBoxs < 5; loopBoxs++) {
//    var rowsJs = document.createElement('div'),
//        boxsWrapper,
//        boxsJs,
//        bgCover,
//        wrapperImg,
//        viewImg;
//    rowsJs.className = 'row';
//    gameContainerEnd.appendChild(rowsJs);
//    for (loopBoxWrapper = 0; loopBoxWrapper <10; loopBoxWrapper++) {
//        boxsWrapper = document.createElement('div');
//        boxsJs = document.createElement('div');
//        bgCover = document.createElement('div');
//        wrapperImg = document.createElement('div');
//        viewImg = document.createElement('img');
//        rowsJs.appendChild(boxsWrapper);
//        boxsWrapper.className = 'box-wrapper col-md-1 col-xs-1';
//        boxsWrapper.appendChild(boxsJs);
//        boxsJs.className = 'box click';
////        rowsJs.children[0].classList.add('col-md-offset-1', 'col-xs-offset-1');
//        boxsJs.appendChild(bgCover);
//        bgCover.className = 'bg-cover';
//        bgCover.style.backgroundImage = "url('images/"+ bgImg[loopBoxWrapper] + "')";
//        boxsJs.appendChild(wrapperImg);
//        wrapperImg.className = 'img';
//        wrapperImg.appendChild(viewImg);
//    }
//}
var // All Variable
    loading = document.querySelector('.loading'),
    loadingProgress = document.querySelector('.loading .progress-bar'),
    funcPlusProg,
    btnAbout = document.querySelector('.controls .opt-color-full .btn-about'),
    overlayAbout = document.querySelector('.overlay-about'),
    about = document.querySelector('.overlay-about .about'),
    btnHideAbout = document.querySelector('.full-screen .about .hide-about'),
    imgAbout = document.querySelectorAll('.full-screen .about .img'),
    imgAboutCount,
    fullScreen = document.querySelector('.full-screen'),
    
    // containerColorOpt = document.querySelector('.controls .opt-color-full'),
    inpOptColor = document.querySelector('.controls .opt-color-full .color-option .color-opt'),
    btnResetColor = document.querySelector('.controls .opt-color-full .reset-color'),
    options = document.querySelector('.options'),
    hideOptions = document.querySelector('.hide-options'),
    msgHideOptions = document.querySelector('.options .press-esc'),
    startGame = document.querySelector('.options .start'),
    msgStartGame = document.querySelector('.options .controls .msg-play'),
    btnStopTime = document.querySelector('.controls .stop-time'),
    rowBoxs = document.querySelectorAll('.game .row'),
    boxs = document.querySelectorAll('.game .row .click'),
    boxsmq = document.querySelectorAll('.game .row .box'),
    md,
    scoreEle = document.querySelector('.options .result .score span'),
    score = parseFloat(scoreEle.innerHTML),
    allScore = 0,
    // Vars History 
    historyGame = document.querySelector('.controls .history'),
    historyTitle = document.querySelector('.controls .history .title'),
    historyTitleNotifi = document.querySelector('.controls .history .title span'),
    listHistory = document.querySelector('.controls .history ul'),
    clearAllHistory = document.querySelector('.controls .history ul .clear-all'),
    containerListItem = document.querySelector('.controls .history ul .container-list'),
    emptyHistory = document.querySelector('.controls .history ul .msg-empty-history'),
    historyItemLocal = JSON.parse(localStorage.getItem('historyItemLocal')) || [],
    saveAutoHistory,
    statusHistory,
    setIndexHistory,
    // Login
    btnLogin = document.querySelector('.options .container .login'),
    btnCloseLogin = document.querySelector('.wrapper-login .view-question-user .close-login'),
    wrapperLogin = document.querySelector('.wrapper-login'),
    formLogin = document.querySelector('.wrapper-login .view-question-user'),
    nameUser = document.querySelector('.view-question-user .name input'),
    photoUser = document.querySelector('.view-question-user .image input'),
    photoUserSrc = '',
    wraViewPhotoUser = document.querySelector('.view-image'),
    viewPhotoUser = document.querySelector('.view-image img'),
    removePhotoUser = document.querySelector('.view-image span'),
    setDataUser,
    setUserName,
    setUserPhoto,
    brandName = document.querySelector('.options .container .brand-name'),
    // Confirm 
    btnConfirmLogin = document.querySelector('.wrapper-login .view-question-user .wrapper-confirm .confirm'),
    btnCancelLogin = document.querySelector('.wrapper-login .view-question-user .wrapper-confirm .cancel'),
    inputViewConfirm = document.querySelector('.wrapper-login .view-question-user .wrapper-confirm .show-msg input'),
    // End Var History
    timeView = document.querySelector('.options .time > span'),
    time = document.querySelector('.options .time > span span.min-sec'),
    timeMs = document.querySelector('.options .time > span sup.ms'),
    game = document.querySelector('.game'),
    gameContainer = document.querySelector('.game .container'),
    gameOverlay = document.querySelector('.game .overlay-start'),
    gameOverEle = document.querySelector('.game .game-over'),
    msgWinLoss = document.querySelector('.game .game-over .winLoss'),
    viewResult = document.querySelector('.view-result span'),
    viewTimeOut = document.querySelector('.time-out span'),
    tryAgain = document.querySelector('.game .game-over .again'),
    footer = document.querySelector('.footer'),
    timeDown,
    timeDownStart,
    mins,
    seconds,
    mSeconds,
    intervalCountDown,
    endCountDown,
    gameOver,
    levelGame = document.querySelector('.options .level select'),
    x,
    imgs = [],
    loopImgs;


// Get Src Imgs By Loop
for (loopImgs = 0; loopImgs < 51; loopImgs++) {
    if (loopImgs <= 4) {
        imgs[loopImgs] = 'images/suit' + loopImgs + '.pngs';
    } else {
        imgs[loopImgs] = 'http://khaled-test-smart.bitballoon.com/imgs/imgsRandom/' + loopImgs + '.JPG';
    }
}
imgs.shift();
/*****************************************************************************************/
// Start Function Hook

// function setTimeDownOnchangeLevel() {
//     'use strict';
//     switch (levelGame.value) {
//     case 'Easy':
//         timeDown = 6 * 10 * 10;
//         break;
//     case 'Middle':
//         timeDown = 3 * 60 * 10;
//         break;
//     case 'Hard':
//         timeDown = 5 * 60 * 10;
//         break;
//     case 'Very Hard':
//         timeDown = 10 * 60 * 10;
//         break;
//     }
//     timeDownStart = timeDown;
// }
/************************************Loading*****************************************************/
// Function Progress Bar In Load
function progressLoad() {
    'use strict';
    funcPlusProg = setInterval(function () {
        var widthProg = window.parseInt(loadingProgress.style.width),
            textProg = window.parseInt(loadingProgress.innerHTML);
        widthProg += 1;
        textProg += 1;
        loadingProgress.innerHTML = textProg + '%';
        loadingProgress.style.width = widthProg + '%';
        if (widthProg === 89) {
            clearInterval(funcPlusProg);
        }
       
    }, 1000);
}
/*****************************************************************************************/
function hideLoader() {
    'use strict';
    clearInterval(funcPlusProg);
    loadingProgress.style.width = '100%';
    loadingProgress.innerHTML = '100%';
    setTimeout(function () {
      funcShowOptions();
        loading.children[2].classList.add('hideLoad');
        loading.children[3].classList.add('hideLoad');
    }, 1200);
    setTimeout(function () {
        loading.children[0].classList.add('hideLoad');
        loading.children[1].classList.add('hideLoad');
       

    }, 1800);
    setTimeout(function () {
      loading.parentNode.removeChild(loading);
    
        document.body.style.overflow = 'visible';
       
        setPiddingId();
        setId();
        deck.shuffle();
        dist();
        
    }, 3300);
  
}
/*****************************************************************************************/
// Functions About Me 
function showAbout() {
    'use strict';
    btnAbout.classList.remove('animate-view');
    overlayAbout.classList.add('on');
}
function fixedAboutShow(e) {
    'use strict';
    e.stopPropagation();
    overlayAbout.classList.add('on');
}
function hideAbout(e) {
    'use strict';
    e.stopPropagation();
    overlayAbout.classList.remove('on');
    for (imgAboutCount = 0; imgAboutCount < imgAbout.length; imgAboutCount++) {
        imgAbout[imgAboutCount].classList.remove('open');
    }
}
//  function exitFullScreenGlobal() {
//      'use strict';
//      btnFullScreen.innerHTML = 'Full Screen';
//      fullScreen.classList.remove('on');
//      footer.style.display = 'block';
//      containerColorOpt.classList.remove('full');
//      if (document.exitFullscreen) {
//          document.exitFullscreen();
//      } else if (document.msExitFullscreen) {
//          document.msExitFullscreen();
//      } else if (document.mozCancelFullScreen) {
//          document.mozCancelFullScreen();
//      } else if (document.webkitExitFullscreen) {
//          document.webkitExitFullscreen();
//      }
//  }
//  function openFullScreen(ele) {
//      'use strict';
//      btnFullScreen.innerHTML = 'Exit Full Screen';
//      fullScreen.classList.add('on');
//      footer.style.display = 'none';
//      containerColorOpt.classList.add('full');
//      if (ele.requestFullscreen) {
//          ele.requestFullscreen();
//      } else if (ele.msRequestFullscreen) {
//          ele.msRequestFullscreen();
//      } else if (ele.mozRequestFullScreen) {
//          ele.mozRequestFullScreen();
//      } else if (ele.webkitRequestFullscreen) {
//          ele.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
//      }
//  }
//  function toggleFullScreenGlobal(ele) {
//      'use strict';
//      if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
//          openFullScreen(ele);
//      } else {
//          exitFullScreenGlobal();
//      }
//  }

var newFuncToggleScale = function (e) { 'use strict'; toggleFullScreenGlobal(this); e.stopPropagation(); };
for (imgAboutCount = 0; imgAboutCount < imgAbout.length; imgAboutCount++) {
    imgAbout[imgAboutCount].onclick = newFuncToggleScale;
}
/*****************************************************************************************/
// Start Function Full Screen
window.onkeyup = function (e) {
    'use strict';
    if (e.keyCode === 27) {
        exitFullScreenGlobal();
    }
};
// btnFullScreen.onclick = function () {
//     'use strict';
//     toggleFullScreenGlobal(fullScreen);
// };
/*****************************************************************************************/
// Start Function Color Option
function saveColorOpt() {
    'use strict';
    localStorage.setItem('colorOpt', inpOptColor.value);
}
function getColorOpt() {
    'use strict';
    var oldColorSave = localStorage.getItem('colorOpt') || '#F50057';
    inpOptColor.value = oldColorSave;
    document.documentElement.style.setProperty('--main_color', inpOptColor.value);
}
getColorOpt();
function changeColorOpt() {
    'use strict';
    document.documentElement.style.setProperty('--main_color', inpOptColor.value);
    saveColorOpt();
}
function resetColor() {
    'use strict';
    inpOptColor.value = '#f50057';
    document.documentElement.style.setProperty('--main_color', '#F50057');
    saveColorOpt();
}
/*****************************************************************************************/
// Function Hide Options By Click Button Hide
// function funcHideOptions() {
//     'use strict';
//     options.classList.remove('off');
//     time.classList.remove('off');
//     startGame.classList.remove('off');
//     hideOptions.textContent = 'Hide';
//     hideOptions.classList.remove('view');
//     game.classList.remove('off');
//     msgHideOptions.classList.remove('on');
// }
function funcShowOptions() {
    'use strict';
    options.classList.add('off');
    time.classList.add('off');
    startGame.classList.add('off');
    hideOptions.textContent = 'Level';
    hideOptions.classList.add('view');
    btnStopTime.classList.remove('on');
    game.classList.add('off');
    setTimeout(function () {
        msgHideOptions.classList.remove('on');
    }, 2500);
}
/*****************************************************************************************/
function funcToggleOptions() {
    'use strict';
    if (options.classList.contains('off')) {
        funcHideOptions();
    } else {
        msgHideOptions.classList.add('on');
        funcShowOptions();
    }
}
/*****************************************************************************************/
// Function Random Imgs
function randomImgs(arrImgs) {
    'use strict';
    arrImgs = [].concat(arrImgs);
    var i,
        randarr = [];
    while (arrImgs.length) {
        i = Math.floor(Math.random() * arrImgs.length);
        randarr.push(arrImgs[i]);
        arrImgs.splice(i, 1);
    }
    return randarr;
}
/*****************************************************************************************/
// Function Print or Run Random Imgs 
var arrImgs,
    newarrImgs;
function addRandomImgs(numArr) {
    'use strict';
    arrImgs = imgs.slice(0, numArr);
    arrImgs = arrImgs.concat(arrImgs);
    newarrImgs = randomImgs(arrImgs);
    for (x = 0; x < numArr * 2; x = x + 1) {
        boxs[x].children[1].children[0].setAttribute('src', newarrImgs[x]);
    }
}
/*****************************************************************************************/
// Function Click On Imgs
var e = 0;
function visibileImg($this, numSc, delayGoker) {
    'use strict';
    if ($this.classList.contains('click')) {
        e++;
        $this.classList.add('visibile');
        $this.classList.remove('click');
        var boxsVisibile = document.querySelectorAll('.game .row .box.visibile'),
            firstVisibile = boxsVisibile[0],
            fristSrc = firstVisibile.children[1].children[0].getAttribute('src'),
            lastVisibile,
            lastSrc,
            creMarkGoker;
        
        if ($this.classList.contains('goker')) {
            e = 0;
            $this.parentNode.style.zIndex = '9999';
            creMarkGoker = document.createElement('div');
            creMarkGoker.className = 'mark-goker';
            creMarkGoker.innerHTML = '*';
            $this.children[1].appendChild(creMarkGoker);
            $this.classList.add('visibile-fixed');
            $this.classList.add('visibile-mark');
            $this.classList.remove('goker');
            allScore += 0.5;
            score += 25;
            scoreEle.innerHTML = score;
            for (x = 0; x < boxs.length; x++) {
                boxs[x].classList.add('visibile');
                boxs[x].classList.remove('click');
            }
            setTimeout(function () {
                for (x = 0; x < boxs.length; x++) {
                    boxs[x].classList.remove('visibile');
                    if (boxs[x].classList.contains('visibile-fixed')) {
                        boxs[x].classList.remove('click');
                    } else {
                        boxs[x].classList.add('click');
                    }
                }
            }, delayGoker);
        }
        if (e >= 2) {
            lastVisibile = boxsVisibile[1];
            lastSrc = lastVisibile.children[1].children[0].getAttribute('src');
            if (fristSrc === lastSrc) {
                e = 0;
                firstVisibile.classList.remove('visibile');
                lastVisibile.classList.remove('visibile');
                firstVisibile.classList.add('visibile-fixed');
                lastVisibile.classList.add('visibile-fixed');
                setTimeout(function () {
                    firstVisibile.classList.add('off');
                    lastVisibile.classList.add('off');
                }, 350);
                score += 25;
                scoreEle.innerHTML = score;
                allScore++;
                if (allScore === numSc / 2) {
                    setTimeout(function () {
                        gameOver();
                    }, 500);
                }
            } else {
                e = 0;
                setTimeout(function () {
                    firstVisibile.classList.remove('visibile');
                    lastVisibile.classList.remove('visibile');
                    firstVisibile.classList.add('click');
                    lastVisibile.classList.add('click');
                }, 300);
                score -= 5;
                scoreEle.innerHTML = score;
            }
        }
    }
}
/*****************************************************************************************/
// Function Remove Class Visibile and visibile-fixed When Game Over
function removeVisibileImgs() {
    'use strict';
    var f;
    for (f = 0; f < boxs.length; f++) {
        boxs[f].classList.remove('visibile');
        boxs[f].classList.remove('visibile-fixed');
        boxs[f].classList.remove('off');
        boxs[f].classList.add('click');
    }
}
/*****************************************************************************************/
// Function Set Height Boxs
function setHeightBoxs() {
    'use strict';
    var re;
    for (re = 0; re < boxsmq.length; re++) {
        boxsmq[re].style.height = boxsmq[re].offsetWidth + 'px';
    }
}
setHeightBoxs();
/*****************************************************************************************/
// Function Create Mins And Seconds
function creatTime(yourTimeWithSeconds) {
    'use strict';
    mins = Math.floor((yourTimeWithSeconds / 60) / 10);
    seconds = Math.floor((yourTimeWithSeconds / 10) % 60);
    mSeconds = Math.floor(yourTimeWithSeconds % 10);
    if (mins < 10) { mins = '0' + mins; }
    if (seconds < 10) { seconds = '0' + seconds; }
    if (mSeconds < 10) { mSeconds = '0' + mSeconds; }
}
/*****************************************************************************************/
// Function Run End Game or End Time 
function gameOver() {
    'use strict';
    var newTimeOut = timeDownStart - timeDown,
        objHistory,
        f;
    /****************************/
    creatTime(newTimeOut);
    time.innerHTML = 'Finsh Time';
    timeMs.innerHTML = '';
    timeMs.style.display = 'none';
    endCountDown();
    setTimeout(function () {
        for (f = 0; f < boxs.length; f++) {
            boxs[f].classList.remove('click');
            boxs[f].classList.remove('off');
            boxs[f].classList.add('visibile-fixed');
        }
    }, 1000);
    setTimeout(function () {
        gameContainerEnd.classList.add('hidden-game');
    }, 2000);
    setTimeout(function () {
        gameContainer.classList.add('end-game');
        setTimeout(function () {
            gameOverEle.classList.add('show-game-over');
        }, 100);
        startGame.style.zIndex = '25';
        btnStopTime.style.zIndex = '-1';
        removeVisibileImgs();
    }, 2500);
    btnStopTime.classList.add('on');
    btnStopTime.classList.remove('view-color');
    btnStopTime.classList.add('hide-game-over');
    btnStopTime.innerHTML = 'Pause';
    viewResult.innerHTML = score;
    viewTimeOut.innerHTML = mins + ':' + seconds;
    if (newTimeOut < timeDownStart) {
        if (score <= 0) {
            statusHistory = 'Lose';
            msgWinLoss.innerHTML = 'You Lose';
            msgWinLoss.style.color = '#f00';
            viewResult.style.color = '#f00';
        } else {
            statusHistory = 'Win';
            msgWinLoss.innerHTML = 'You Win';
            msgWinLoss.style.color = '#67e333';
            viewResult.style.color = '#67e333';
        }
        viewTimeOut.style.color = '#67e333';
    } else {
        statusHistory = 'Lose';
        msgWinLoss.innerHTML = 'You Lose';
        msgWinLoss.style.color = '#f00';
        viewResult.style.color = '#f00';
        viewTimeOut.style.color = '#f00';
    }
    /* LocalStorage */
    objHistory = {
        statusUser: statusHistory,
        scoreUser: score,
        levelUser: levelGame.value,
        timeUser: mins + ':' + seconds
    };
    historyItemLocal.push(objHistory);
    saveAutoHistory(historyItemLocal, containerListItem);
    localStorage.setItem('historyItemLocal', JSON.stringify(historyItemLocal));
    historyTitleNotifi.style.display = 'block';
}
function saveAutoHistory(arrs, wrapper) {
    'use strict';
    wrapper.innerHTML = arrs.map(function (arr) {
        if (statusHistory === 'Win') {
            statusHistory = 'Win';
        } else {
            statusHistory = 'Lose';
        }
        emptyHistory.style.display = 'none';
        setUserName();
        setUserPhoto();
        brandName.children[0].innerHTML = nameUser.dataset.name;
        brandName.children[1].src = viewPhotoUser.src;
        return '<li class="' + arr.statusUser + '"> <div class="index-history"> ' + nameUser.dataset.name + ' <img src="' + viewPhotoUser.src + '"></div> <div class="view-history"> <div> <div><span>Status</span><span>' + arr.statusUser + '</span></div> <div><span>Level</span><span>' + arr.levelUser + '</span></div> </div> <div> <div><span>Score</span><span>' + arr.scoreUser + '</span></div> <div><span>Time</span><span>' + arr.timeUser + '</span></div> </div> </div> </li>';
    }).join('');
    historyTitleNotifi.innerHTML = containerListItem.children.length;
    if (containerListItem.children.length >= 1) {
        historyTitleNotifi.style.display = 'block';
    }
}
saveAutoHistory(historyItemLocal, containerListItem);
/*****************************************************************************************/
// All Functions History
function toggleListHistory(e) {
    'use strict';
    e.stopPropagation();
    msgStartGame.classList.remove('on');
    listHistory.classList.toggle('on');
    historyTitleNotifi.style.display = 'none';
}
function viewListHistory(e) {
    'use strict';
    e.stopPropagation();
    listHistory.classList.add('on');
}
function funcClearAllHistory() {
    'use strict';
    listHistory.classList.remove('on');
    setTimeout(function () {
        historyTitleNotifi.style.display = 'none';
        containerListItem.innerHTML = ' ';
        emptyHistory.style.display = 'block';
        historyItemLocal.splice(0, historyItemLocal.length);
        localStorage.removeItem('historyItemLocal');
    }, 300);
}
function clearAllHisByClickClear(e) {
    'use strict';
    e.stopPropagation();
    funcClearAllHistory();
}
/*****************************************************************************************/
function viewPhoto($this) {
    'use strict';
    if ($this.files && $this.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            photoUserSrc = e.target.result;
            viewPhotoUser.src = photoUserSrc;
        };
        reader.readAsDataURL($this.files[0]);
    }
}
/*****************************************************************************************/
btnLogin.onclick = function () {
    'use strict';
    wrapperLogin.classList.add('on');
};
btnCloseLogin.onclick = function () {
    'use strict';
    wrapperLogin.classList.remove('on');
};
photoUser.onchange = function () {
    'use strict';
    viewPhoto(this);
};
wraViewPhotoUser.onmouseover = function () {
    'use strict';
    if (viewPhotoUser.getAttribute('src') === '') {
        this.classList.remove('change');
    } else {
        this.classList.add('change');
    }
};
removePhotoUser.onclick = function () {
    'use strict';
    localStorage.setItem('userphoto', '');
    viewPhotoUser.src = localStorage.getItem('userphoto');
    wraViewPhotoUser.classList.remove('change');
    photoUser.value = '';
};
function setUserName() {
    'use strict';
    var newName = localStorage.getItem('username') || 'username';
    nameUser.dataset.name = newName;
    brandName.children[0].innerHTML = nameUser.dataset.name;
}
setUserName();
function setUserPhoto() {
    'use strict';
    var newPhoto = localStorage.getItem('userphoto') || '';
    viewPhotoUser.src = newPhoto;
    brandName.children[1].src = viewPhotoUser.src;
}
setUserPhoto();
function chainConfirm() {
    'use strict';
    nameUser.dataset.name = nameUser.value;
    localStorage.setItem('username', nameUser.dataset.name);
    localStorage.setItem('userphoto', viewPhotoUser.src);
    wrapperLogin.classList.remove('on');
    funcClearAllHistory();
    brandName.children[0].innerHTML = nameUser.dataset.name;
    brandName.children[1].src = viewPhotoUser.src;
}
setDataUser = function (e) {
    'use strict';
    e.preventDefault();
    var nameVal = nameUser.value;
    nameVal.trim();
    if (nameVal === '') { return; }
    if (/^\s+$/.test(nameVal)) { return; }
    if (localStorage.getItem('checked') === 'false') {
        this.classList.add('sub');
    } else {
        chainConfirm();
        this.reset();
    }
};
inputViewConfirm.onchange = function () {
    'use strict';
    localStorage.setItem('checked', this.checked);
};
if (localStorage.getItem('checked') === 'true') {
    inputViewConfirm.checked = true;
} else {
    inputViewConfirm.checked = false;
}
localStorage.setItem('checked', inputViewConfirm.checked);

btnConfirmLogin.onclick = function () {
    'use strict';
    formLogin.classList.remove('sub');
    chainConfirm();
    formLogin.reset();
};
btnCancelLogin.onclick = function () {
    'use strict';
    formLogin.classList.remove('sub');
};
formLogin.addEventListener('submit', setDataUser);
/*****************************************************************************************/
// Function Time Down
function countDown() {
    'use strict';
    intervalCountDown = setInterval(function () {
        creatTime(timeDown);
        time.innerHTML = mins + ':' + seconds;
        timeMs.innerHTML = mSeconds;
        if (timeDown !== 0) {
            timeDown--;
        } else { gameOver(); }
    }, 100);
}
/*****************************************************************************************/
// Function End Time Down
function endCountDown() {
    'use strict';
    clearInterval(intervalCountDown);
}
// Function Reset Score 
function resetScore() {
    'use strict';
    allScore = 0;
    score = 0;
    scoreEle.innerHTML = score;
}
/*****************************************************************************************/
// Function Run On Change Level Game
function resetBoxs() {
    'use strict';
    for (x = 0; x < rowBoxs.length; x++) {
        rowBoxs[x].style.display = 'none';
    }
    rowBoxs[0].style.display = 'block';
    rowBoxs[1].style.display = 'block';
}
function resetMarginBoxsMd() {
    'use strict';
    for (md = 0; md < rowBoxs.length; md++) {
        rowBoxs[md].children[0].classList.remove('media-easy');
        rowBoxs[md].children[5].classList.remove('media-easy');
    }
}
/*****************************************************************************************/
function funcLoopChangeLevel(numBoxs, numDelayGoker) {
    'use strict';
    var newFuncAddVisibile = function () { visibileImg(this, numBoxs, numDelayGoker); },
        imgGoker = document.querySelectorAll('img[src="http://khaled-test-smart.bitballoon.com/imgs/imgsRandom/20.JPG"]'),
        gok;
    for (x = 0; x < boxs.length; x++) {
        boxs[x].onclick = newFuncAddVisibile;
        boxs[x].classList.remove('goker');
        if (boxs[x].children[1].children.length === 2) {
            boxs[x].children[1].removeChild(boxs[x].children[1].children[1]);
        }
    }
    setTimeDownOnchangeLevel();
    timeMs.style.display = 'inline';
    time.innerHTML = '00:00';
    timeMs.innerHTML = '00';
    endCountDown();
    startGame.style.zIndex = '25';
    btnStopTime.style.zIndex = '-1';
    btnStopTime.classList.add('on');
    btnStopTime.classList.remove('view-color');
    btnStopTime.innerHTML = 'Pause';
    gameOverlay.style.display = 'block';
    hideOptions.classList.remove('viewport');
    removeVisibileImgs();
    resetScore();
    setHeightBoxs();
    // Set Class In Imgs Goker 
    for (gok = 0; gok < imgGoker.length; gok++) {
        imgGoker[gok].parentNode.parentNode.classList.add('goker');
    }
}
/*****************************************************************************************/
// Function Run On Change Level Game Is Easy Game
function showEasy() {
    'use strict';
    resetBoxs();
    addRandomImgs(10);
    game.classList.remove('very-hard');
    funcLoopChangeLevel(20, 2000);
    levelGame.value = 'Easy';
    for (md = 0; md < rowBoxs.length; md++) {
        rowBoxs[md].children[0].classList.add('media-easy');
        rowBoxs[md].children[5].classList.add('media-easy');
    }
}
/*****************************************************************************************/
// Function Run On Change Level Game Is Middle Game
function showMiddle() {
    'use strict';
    resetBoxs();
    rowBoxs[2].style.display = 'block';
    rowBoxs[3].style.display = 'block';
    addRandomImgs(20);
    game.classList.remove('very-hard');
    funcLoopChangeLevel(40, 6000);
    levelGame.value = 'Middle';
    resetMarginBoxsMd();
}
/*****************************************************************************************/
// Function Run On Change Level Game Is Hard Game
function showHard() {
    'use strict';
    resetBoxs();
    rowBoxs[2].style.display = 'block';
    rowBoxs[3].style.display = 'block';
    rowBoxs[4].style.display = 'block';
    rowBoxs[5].style.display = 'block';
    addRandomImgs(30);
    game.classList.add('very-hard');
    funcLoopChangeLevel(60, 10000);
    levelGame.value = 'Hard';
    resetMarginBoxsMd();
}
function showVeryHard() {
    'use strict';
    for (x = 0; x < rowBoxs.length; x++) {
        rowBoxs[x].style.display = 'block';
    }
    addRandomImgs(50);
    game.classList.add('very-hard');
    funcLoopChangeLevel(100, 15000);
    levelGame.value = 'Very Hard';
    resetMarginBoxsMd();
}
/*****************************************************************************************/
// Run Function Change Level
function selectOptionLevel(ele) {
    'use strict';
    switch (ele) {
    case 'Easy':
        showEasy();
        break;
    case 'Middle':
        showMiddle();
        break;
    case 'Hard':
        showHard();
        break;
    case 'Very Hard':
        showVeryHard();
        break;
    }
    localStorage.setItem('level', levelGame.value);
}
/*****************************************************************************************/
// Function Try Again Game
function gameAgain() {
    'use strict';
    var re,
        levelNow = levelGame.value;
    gameOverEle.classList.remove('show-game-over');
    setTimeout(function () {
        for (re = 0; re < boxsmq.length; re++) {
            boxsmq[re].style.height = '60px';
        }
        gameContainer.classList.remove('end-game');
        setHeightBoxs();
        setTimeout(function () {
            gameContainerEnd.classList.remove('hidden-game');
        }, 100);
    }, 700);
    funcShowOptions();
    selectOptionLevel(levelNow);
    countDown();
    resetScore();
    removeVisibileImgs();
    gameOverlay.style.display = 'none';
    hideOptions.classList.add('viewport');
    startGame.style.zIndex = '-1';
    btnStopTime.style.zIndex = '25';
    btnStopTime.innerHTML = 'Pause';
    btnStopTime.classList.remove('hide-game-over');
    setTimeout(function () {
        timeView.classList.add('on');
    }, 200);
    setTimeout(function () {
        timeView.classList.remove('on');
    }, 2000);
}
function pauseTime() {
    'use strict';
    if (btnStopTime.classList.contains('on')) {
        btnStopTime.classList.remove('on');
        btnStopTime.classList.add('view-color');
        endCountDown();
        btnStopTime.innerHTML = 'Play';
        gameOverlay.style.display = 'block';
    } else {
        btnStopTime.classList.add('on');
        btnStopTime.classList.remove('view-color');
        btnStopTime.innerHTML = 'Pause';
        countDown();
        gameOverlay.style.display = 'none';
    }
}
/*****************************************************************************************/
function funcStartGame() {
    'use strict';
    if (startGame.classList.contains('on')) {
        gameAgain();
    }
}
function showMsgPlay(e) {
    'use strict';
    var body = document.body,
        animateScroll;
    listHistory.classList.remove('on');
    e.stopPropagation();
    if (body.scrollTop > 130) {
        animateScroll = setInterval(function () {
            body.scrollTop -= 40;
            if (body.scrollTop === 0) {
                clearInterval(animateScroll);
            }
        }, 10);
    }
    msgStartGame.classList.add('on');
    msgStartGame.classList.add('animate');
    setTimeout(function () {
        msgStartGame.classList.remove('animate');
    }, 600);
}
/*****************************************************************************************/
// Run Functions Here
window.onclick = function (e) {
    'use strict';
    e.stopPropagation();
    msgStartGame.classList.remove('on');
    listHistory.classList.remove('on');
    setHeightBoxs();
};
window.onload = function () {
    'use strict';
    hideLoader();
    var oldLevel = localStorage.getItem('level') || 'Middle';
    selectOptionLevel(oldLevel);
};
progressLoad();
window.onkeydown = function (e) {
    'use strict';
    if (e.keyCode === 27) {
        funcHideOptions();
    }
};
window.onresize = function () {
    'use strict';
    setHeightBoxs();
};
window.onbeforeunload = function () {
    'use strict';
    if (score !== 0) {
        return 'Do you want to leave this site';
    }
};
btnAbout.addEventListener('click', showAbout);
overlayAbout.addEventListener('click', hideAbout);
about.addEventListener('click', fixedAboutShow);
btnHideAbout.addEventListener('click', hideAbout);
tryAgain.addEventListener('click', gameAgain);
levelGame.addEventListener('change', function () {
    'use strict';
    var lvlNow = this.value;
    selectOptionLevel(lvlNow);
});
inpOptColor.addEventListener('change', changeColorOpt);
inpOptColor.addEventListener('mousemove', changeColorOpt);
btnResetColor.addEventListener('click', resetColor);
hideOptions.addEventListener('click', funcToggleOptions);
startGame.addEventListener('click', funcStartGame);
btnStopTime.addEventListener('click', pauseTime);
gameOverlay.onclick = function (e) {
    'use strict';
    showMsgPlay(e);
    setHeightBoxs();
};

// Active Function History
historyTitle.addEventListener('click', toggleListHistory);
listHistory.addEventListener('click', viewListHistory);
clearAllHistory.addEventListener('click', clearAllHisByClickClear);
/*****************************************************************************************/





// card place
var cardsValues = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king", "ace"];
var cardsSuits = ["clubs", "diamonds", "spades", "hearts"];
var handsOrder = ["High Card", "Pair", "Double Pair", "Three of Kind", "Straight", "Flush", "Full House", "Four of Kind", "Straight Flush", "Royal Flush"];
var handsToPrint = 3; //Set number of hands to print

var pickedCards = [];
var displayedHands = [];
"use strict";

//Generating cards to the list
$(document).ready(function() {

	(function initiation() {
		for (var i=0; i<cardsSuits.length; i++){
			for (var j=0; j<cardsValues.length; j++){
				if (j === 0){
					var position = "0px";
				}else{
					var temp = 12/j;
					temp = temp.toFixed(2);
					var position = "calc((100% - 80px)/"+temp;
				}
				
				var fileName = cardsValues[j]+"_of_"+cardsSuits[i];
				var url = 'https://res.cloudinary.com/bosmanone/image/upload/v1477397924/cards/'+fileName +'.png';
				var cardDiv = "<div class='card "+fileName +"' onclick='pickCard(this)' style='background-image: url("+url +"); left: "+position +");'></div>";
				$('#'+cardsSuits[i]).append(cardDiv);
			}
		}
	})();
});


function resetButton(){
  $('.on-table').remove();
  $('.card').show();
  pickedCards = [];
  checkIfMax();
  $(".hand-combo-area").html("");


}

function pickCard(card){
  var selector = card.className.split(" ");
  var cardName = selector[1];
  var clonedDiv = $('.'+cardName).clone();
  clonedDiv.attr("onclick", "returnCard(this)"); 
  clonedDiv.addClass("on-table");
  clonedDiv.css("left", "");
  $('.picked-cards-area').append(clonedDiv);

  $("."+cardName +":not(.on-table)").hide();

  pickedCards.push(cardName);

  checkIfMax();
  checkHand();

}

function returnCard(card){
  var selector = card.className.split(" ");
  var cardName = selector[1];
  
  $('.'+cardName+'.on-table').remove(); //Removing card from the table
  $('.'+cardName).show(); //Bringing back card to the list
  var index = pickedCards.indexOf(cardName);
  pickedCards.splice(index, 1);
  
  checkIfMax();
  checkHand();
}

function checkIfMax(){
  if (pickedCards.length == 4){
    var cards =  $(".card:not(.on-table)")
    cards.attr("onclick", " ");
  }else{
    var cards =  $(".card:not(.on-table)")
    cards.attr("onclick", "pickCard(this)");
  }
}
function getValueFromId(cardId){ //cardId example: ace_of_spades
  var index = cardId.indexOf("_"); 
  return cardId.slice(0, index);
}
function getSuitFromId(cardId){ //cardId example: ace_of_spades
  var index = cardId.lastIndexOf("_");
  return cardId.slice(index+1, cardId.length);
}



function checkHand(){
  var pickedCardsValues = [];
  var pickedCardsSuits = [];
  var possibleHands = []; 
  
  function Hand(type, cardsArray, order){ //types: pair, double pair, three of kind, straight, flush, full house, four of kind, straight flush, royal flush//
    this.type = type;
    this.cardsArray = cardsArray;
    this.order = order;
  }
    
  for (i=0; i<pickedCards.length; i++){
    var value = getValueFromId(pickedCards[i]);
    pickedCardsValues.push(value);
    var suit = getSuitFromId(pickedCards[i]);
    pickedCardsSuits.push(suit); 
  }
  
  checkForMultiple();
    
  function checkForMultiple(){
    var multiples = [];
    var used = [];
    
    checkForHighcard();
    checkForPairs();
    checkForThrees();
    checkForFours();
    checkForDoublePairs();
    checkForFull();
    checkForStraight();
    checkForFlush();
    
    sortHandsByOrder();
    printHighestHands();
    
    function checkForHighcard(){
      if (pickedCardsValues.length>0){
        var max = 0;
        var highCard = '';
        
        for (i=0; i<pickedCardsValues.length; i++){
          var order = cardsValues.indexOf(pickedCardsValues[i])+1;
          if (order > max){
            max = order;
            highCard = pickedCardsValues[i] +"_of_" +pickedCardsSuits[i];
          }
        }
        var hand = new Hand("High Card", highCard, 0);
        possibleHands.push(hand);
      }
    }   
    
    //Check for ALL possible pairs
    function checkForPairs(){
      var pairs = [];
      if (pickedCardsValues.length>1){
        for (i=0; i<pickedCardsValues.length-1; i++){
          for (j=i+1; j<pickedCardsValues.length; j++){
            if (pickedCardsValues[i] == pickedCardsValues[j]){
              var temp1 = pickedCardsValues[i]+"_of_"+pickedCardsSuits[i];
              var temp2 = pickedCardsValues[j]+"_of_"+pickedCardsSuits[j];
              var hand = new Hand("Pair", [temp1, temp2], 1);
              possibleHands.push(hand);
            }
          }
        }
      }
      
    }
    //Check for ALL possible threes
    function checkForThrees(){
      
      if (pickedCardsValues.length>2){
        for (i=0; i<pickedCardsValues.length-2; i++){
          for (j=i+1; j<pickedCardsValues.length-1; j++){
            if (pickedCardsValues[i] == pickedCardsValues[j]){
              for (k=j+1; k<pickedCardsValues.length; k++){
                if (pickedCardsValues[j] == pickedCardsValues[k]){
                  var temp1 = pickedCardsValues[i]+"_of_"+pickedCardsSuits[i];
                  var temp2 = pickedCardsValues[j]+"_of_"+pickedCardsSuits[j];
                  var temp3 = pickedCardsValues[k]+"_of_"+pickedCardsSuits[k];
                  var hand = new Hand("Three of Kind", [temp1, temp2, temp3], 3);
                  possibleHands.push(hand);
                }
              }
            }
          }
        }
      }
            
    }
    
    //Check for four
    function checkForFours(){
      
      if (pickedCardsValues.length>3){
        for (i=0; i<pickedCardsValues.length-1; i++){
          var indexes = [i];
          
          for (j=i+1; j<pickedCardsValues.length; j++){
            if (pickedCardsValues[i] == pickedCardsValues[j]){
              indexes.push(j);
            }
          }
          if (indexes.length == 4){
            var cardsArr = [];
            for (i=0; i<indexes.length; i++){
              var temp = pickedCardsValues[indexes[i]]+"_of_"+pickedCardsSuits[indexes[i]];
              cardsArr.push(temp);
            }
            var hand = new Hand("Four of Kind", cardsArr, 7);
            possibleHands.push(hand);
            break;
          }
        }
      }
            
    }
       
    //Function to check for double pairs. Will not check in threes and fours, only strict double pairs
    function checkForDoublePairs(){
      var pairs = [];
      
      for (i=0; i<possibleHands.length; i++){
        if (possibleHands[i].type == "Pair"){
          pairs.push(possibleHands[i].cardsArray);
        }
      }
      
      if (pairs.length >= 2){
        for (i=0; i<pairs.length-1; i++){
          for (j=i+1; j<pairs.length; j++){
            if (pairs[i][0].charAt(0) != pairs[j][0].charAt(0)){
              var temp = pairs[i];
              var temp2 = pairs[j];
              var doublePairCards = temp.concat(temp2);

              var hand = new Hand("Double Pair", doublePairCards, 2);
              possibleHands.push(hand);
            }
          }
        }
      } 
    }
    
    //Function checking for full, only the biggest full is added to possiblehands
    function checkForFull(){
      var pairs = [];
      var threes = [];
      var usedCards = [];
           
      for (i=0; i<possibleHands.length; i++){
        if(possibleHands[i].type == "Three of Kind"){
          threes.push(possibleHands[i].cardsArray); //Add possible three     
        }else if (possibleHands[i].type == "Pair"){
          pairs.push(possibleHands[i].cardsArray);
        }
      }
      
      if (threes.length == 0){
        return;
      }
      
      var biggestThrees = [];
      var max = 0;
      
      for (i=0; i<threes.length; i++){
        var value = getValueFromId(threes[i][0]);
        var order = cardsValues.indexOf(value);
        if (order >= max){
          max = order;
          biggestThrees = threes[i];
        }
      }
      usedCards = biggestThrees;
      
      var biggestPair = [];
      var max = 0;
      
      
      loop1:
      for (i=0; i<pairs.length; i++){
        for (j=0; j<usedCards.length; j++){
          if ((usedCards[j] == pairs[i][0]) || (usedCards[j] == pairs[i][1])){
            continue loop1;
          }
        }

        var value = getValueFromId(pairs[i][0]);
        var order = cardsValues.indexOf(value);
        if (order >= max){
          max = order;
          biggestPair = pairs[i];
        }  
      }
      
      if (biggestThrees.length != 0 && biggestPair.length != 0){
        var hand = new Hand("Full House", biggestThrees.concat(biggestPair), 6);
        possibleHands.push(hand);   
      }  
    }
    
    //Check for highest flush
    function checkForFlush(){
      var list = [];
      var cardsArr = pickedCards;
      
      //creating list of all picked cards
      for (i=0; i<cardsArr.length; i++){
        var suit = getSuitFromId(cardsArr[i]);
        var value = getValueFromId(cardsArr[i]);
        var order = cardsValues.indexOf(value)+1;
        list.push({card: cardsArr[i], suit: suit, order: order});
      }
      //sorting list by suit
      list.sort(function(a, b) {
        return ((a.suit < b.suit) ? -1 : ((a.suit == b.suit) ? 0 : 1));
      });

      loop1:
      for (i=0; i<list.length-4; i++){
        var sameSuitList = [list[i]];
        
        for (j=i+1; j<list.length; j++){
          if (list[i].suit == list[j].suit){
            sameSuitList.push(list[j]);
          }
        }
        
        if (sameSuitList.length >= 5){
          sameSuitList.sort(function(a, b) {
            return ((a.order > b.order) ? -1 : ((a.order == b.order) ? 0 : 1));
          });
          
          var cards = [];
          for (k=0; k<5; k++){
            cards.push(sameSuitList[k].card);
          }

          var hand = new Hand("Flush", cards, 5);
          possibleHands.push(hand);   
          
          break loop1; 
        }
      }
      
    }
    
    //Check for highest straight and for flush straight/royal flush
    function checkForStraight(){
      var values = [];
      var list = [];
      var highestStraightAdded = false;
      var highestStraightFlushAdded = false;
      
      if (pickedCards.length >= 5){
        for (i=0; i<pickedCards.length; i++){
          var value = getValueFromId(pickedCards[i]);
          var order = cardsValues.indexOf(value);
          var suit = getSuitFromId(pickedCards[i]);
          list.push({card: pickedCards[i], order: order+1, suit: suit});
          //Adding additional order for Ace as this card can be last and first in straight
          if (value == "ace"){
            list.push({card: pickedCards[i], order: 0});
          }
        }
      }
      //Sorting by order
      list.sort(function(a, b) {
        return ((a.order > b.order) ? -1 : ((a.order == b.order) ? 0 : 1));
      });
      
      loop2:
      for (i=0; i<list.length-4; i++){
        var orderMove = 1;
        
        for (j=i+1; j<i+5; j++){
          if (list[i].order != list[j].order+orderMove){
            continue loop2;
          }else{
            orderMove = orderMove +1;
          }
        }
        if (orderMove == 5){ //5 Cards found, straight
          var cards = [];
          var suits = [];
          
          for (k=i; k<i+5; k++){
            cards.push(list[k].card);
            suits.push(list[k].suit)
          }
          
          //Checking if highest straight was added. Highest will always be first as list is sorted
          if (highestStraightAdded === false){ 
            var hand = new Hand("Straight", cards, 4);
            possibleHands.push(hand);  
            highestStraightAdded = true;
          }
          
          //Checking if found straight is also flush (straight flush)
          var suitCount = 1;
          var cards2 = [cards[0]];

          for (i=1; i<suits.length; i++){
            if (suits[0] == suits[i]){
              suitCount = suitCount +1;
              cards2.push(cards[i]);
            }
          }
          if (suitCount == 5 && highestStraightFlushAdded === false){
            var name = '';
            var highestCard = getValueFromId(cards2[0]);
            
            if (highestCard == "ace"){
              name = "Royal Flush";
              var order = 9;
            }else{
              name = "Straight Flush";
              var order = 8;
            }
            
            var hand2 = new Hand(name, cards2, order);
            possibleHands.push(hand2);  
            highestStraightFlushAdded = true;
          }
        }
      }

    }
       
    
  }//end of checkForMultiple()
  
  //need to add sorting by value if order is same!
  function sortHandsByOrder(){
  possibleHands.sort(function(a, b) {
    return ((a.order > b.order) ? -1 : ((a.order == b.order) ? 0 : 1));
  });
}
  
  function printHighestHands(){
    $(".hand-combo-area").html("");
    displayedHands = [];
    
    if (handsToPrint > possibleHands.length){
      n = possibleHands.length;
    } else{
      n = handsToPrint;
    }
    
    for (i=0; i<n; i++){
      $(".hand-combo-area").append("<div class=' hand-list-element' id='" +i +"_hand'>" +possibleHands[i].type +"</div>");
      displayedHands[i] = possibleHands[i];
    }
  }
  
}

//Hovering on hand list and unhovering. Highlights cards that are contained in hand hovered and shows list of cards.
$(document).on("mouseenter", ".hand-list-element", function() {
  hoverHandId = $(this).attr('id');
  var index = hoverHandId.indexOf("_"); 
  hoverHandId = hoverHandId.slice(0, index);

  var type = displayedHands[hoverHandId].type;
  hoverCardsArr = displayedHands[hoverHandId].cardsArray
  var cards = '';

  if (typeof hoverCardsArr === 'string') {
    cards = hoverCardsArr;
    hoverCardsArr = [];
    hoverCardsArr.push(cards);
  } else {
    cards = hoverCardsArr.join(', ');
  }

  cards = cards.replace(/_/g, ' ');
  $(this).html(type +": " +cards);

 	$(".on-table").css("opacity", "0.5");
  for (i=0; i<hoverCardsArr.length; i++){
    $('.'+hoverCardsArr[i]).css("opacity", "1");
  }

});

$(document).on("mouseleave", ".hand-list-element", function() {

  $(".on-table").css("opacity", "1");
  
  $(this).html(displayedHands[hoverHandId].type);

});

//play

var $container = document.getElementById('container');

// create Deck
var deck = Deck();

// add to DOM
deck.mount($container);
//set card sorting id
function setId(){
  
  var y="";
  var cardsId = ["dk","dq","dj","d10","d9", "d8", "d7", "d6", "d5", "d4", "d3", "d2", "d1", 
                  "ck","cq","cj","c10","c9", "c8", "c7", "c6", "c5", "c4", "c3", "c2", "c1", 
                  "hk","hq","hj","h10","h9", "h8", "h7", "h6", "h5", "h4", "h3", "h2", "h1", 
                  "sk","sq","sj","s10","s9", "s8", "s7", "s6", "s5", "s4", "s3", "s2", "s1" 
                ] 

  deck.cards.forEach(function (card, i) {
      document.getElementsByClassName("card")[i].setAttribute("id", cardsId[i]); 
  });
}


function dist(){
  var g2=0;
  var g3=0;
  var g4=0;
  var northArr = [];
  var southArr = [];
  var eastArr = [];
  var westArr = [];
  var cardTemp = "";

  deck.cards.forEach(function (card, i) {
    card.setSide('back');
    /////////////////////////////player1////////////////////////////////
      
      if(i==0){
        card.animateTo({
          delay: 1000 + i * 2, // wait 1 second + i * 2 ms
          duration: 500,
          ease: 'quartOut',
          x:-70,
          y: -170
          
      });
      cardTemp = card.$el.id;
      northArr.push(cardTemp);
      console.log(northArr);
      }
      else if(i>=0 && i<13){
          card.animateTo({
          delay: 1000 + i * 2, // wait 1 second + i * 2 ms
          duration: 500,
          ease: 'quartOut',
          x:-70+i*30,
          y: -170
          
      });
      cardTemp = card.$el.id;
      northArr.push(cardTemp);
      console.log(northArr);
      }
      /////////////////////////////player2////////////////////////////////
      if(i==13 && i<26){
        card.animateTo({
          delay: 1000 + i * 2, // wait 1 second + i * 2 ms
          duration: 500,
          ease: 'quartOut',
          x:550,
          y: -120
          
      });
    }
      else if(i>=13 && i<26){
        card.animateTo({
          delay: 1000 + i * 2, // wait 1 second + i * 2 ms
          duration: 500,
          ease: 'quartOut',
          x:550,
          y:-120+g2*30
      });
      g2 ++;
      cardTemp = card.$el.id;
     eastArr.push(cardTemp);
      console.log(eastArr);
    }
    /////////////////////////////player3////////////////////////////////
      if(i==26 && i<39){
          card.animateTo({
          delay: 1000 + i * 2, // wait 1 second + i * 2 ms
          duration: 500,
          ease: 'quartOut',
          x:-70,
          y:170
          
      });
      }
      
     else if(i>=26 && i<39){
        card.setSide('front');
          card.animateTo({
          delay: 1000 + i * 2, // wait 1 second + i * 2 ms
          duration: 500,
          ease: 'quartOut',
  
          x: -70+g3*30,
          y:170
          
      });
      g3 ++;
      cardTemp = card.$el.id;
      southArr.push(cardTemp);
      console.log(southArr);
      }
      /////////////////////////////player4////////////////////////////////
      if(i==39 && i<52){
        card.animateTo({
        delay: 1000 + i * 2, // wait 1 second + i * 2 ms
        duration: 500,
        ease: 'quartOut',
        x:-550,
        y:-120
        
    });
    }
    else  if(i>=39 && i<52){
          card.animateTo({
          delay: 1000 + i * 2, // wait 1 second + i * 2 ms
          duration: 500,
          ease: 'quartOut',
  
          x: -550,
          y: -120+g4*30
          
      });
      g4 ++;
      cardTemp = card.$el.id;
      westArr.push(cardTemp);
      console.log(westArr);
    
      }
      card.enableDragging();
      card.enableFlipping();
  });
  
  //convert to json format
  var jsonResult = '[';
  jsonResult += '   {';
  jsonResult += '      "direction":"north",';
  jsonResult += '      "cards":{';
  for(var i=0; i < northArr.length; i++) {
    jsonResult += '         "e' + (i+1) + '":"' + northArr[i] + '",';
  }
  jsonResult = jsonResult.substring(0, jsonResult.length - 1);
  jsonResult += '      }';
  jsonResult += '   },';
  jsonResult += '   {';
  jsonResult += '      "direction":"south",';
  jsonResult += '      "cards":{';
  for(var i=0; i < southArr.length; i++) {
    jsonResult += '         "e' + (i+1) + '":"' + southArr[i] + '",';
  }
  jsonResult = jsonResult.substring(0, jsonResult.length - 1);
  jsonResult += '      }';
  jsonResult += '   },';
  jsonResult += '   {';
  jsonResult += '      "direction":"east",';
  jsonResult += '      "cards":{';
  for(var i=0; i < eastArr.length; i++) {
    jsonResult += '         "e' + (i+1) + '":"' + eastArr[i] + '",';
  }
  jsonResult = jsonResult.substring(0, jsonResult.length - 1);
  jsonResult += '      }';
  jsonResult += '   },';
  jsonResult += '   {';
  jsonResult += '      "direction":"west",';
  jsonResult += '      "cards":{';
  for(var i=0; i < westArr.length; i++) {
    jsonResult += '         "e' + (i+1) + '":"' + westArr[i] + '",';
  }
  jsonResult = jsonResult.substring(0, jsonResult.length - 1);
  jsonResult += '      }';
  jsonResult += '   }';
  jsonResult += ']';
  jsonResult = jsonResult.replace(/\s/g, "");
  console.log(jsonResult);
  
}

var pidId = []
// set pidding id
function setPiddingId(){
  
  var j="";
  var pidId = ["pn1","ps1","ph1","pd1","pc1",
               "pn2","ps2","ph2","pd2","pc2",
               "pn3","ps3","ph3","pd3","pc3",
               "pn4","ps4","ph4","pd4","pc4",
               "pn5","ps5","ph5","pd5","pc5",
               "pn6","ps6","ph6","pd6","pc6",
               "pn7","ps7","ph7","pd7","pc7",
                
     ] 

     for(var i=0 ; i<pidId.length;i++){
   j=document.getElementsByClassName("flex-item")[i].setAttribute("id", pidId[i]); 
      console.log(pidId[i]);
     }
 
}

//pidding button action (able and diasable ) 

  
var count= 0;
$( ".pidClick" ).click(function() {
  
  // get id
    let input = $( this ).attr("id");
    // alert(input);
  
    var r=input.substring(0,2);  // r for letters
      var n=input.substr(2,1);     // n for number
      var result = [];
      // case pass
     
      if( r=="pa"){
        count=count+1;
        alert(count);
      }
  
      if( r!="pa"){
        count=0;
        alert(count);
      }
  
      if( count==3){
        for(var i=0;i<pidId.length;i++){
          document.getElementById(pidId[i]).style.background = "red";
        }
        document.getElementById('modalOverlay').style.display = 'none'
      }
  
   //---------------------------case no trump ---------------------------------------
  
      if(r == 'pn')
      {
        
        if(n == '1')
        {
       
       result = [
       "pn1",
       "ps1",
       "ph1",
       "pd1",
       "pc1"];
      
        console.log(result);
      }
  
  
  
      if(n == '2')
        {
       
         result = [
       "pn1","pn2",
       "ps1","ps2",
       "ph1","ph2",
       "pd1","pd2",
       "pc1","pc2",];
  
       console.log(result);
      }
  
      if(n == '3')
        {
        result = [
       "pn1","pn2","pn3",
       "ps1","ps2","ps3",
       "ph1","ph2","ph3",
       "pd1","pd2","pd3",
       "pc1","pc2","pc3"];
  
       console.log(result);
      }
  
      if(n == '4')
        {
        result = [
       "pn1","pn2","pn3","pn4",
       "ps1","ps2","ps3","ps4",
       "ph1","ph2","ph3","ph4",
       "pd1","pd2","pd3","pd4",
       "pc1","pc2","pc3","pc4"];
  
       console.log(result);
      }
  
      if(n == '5')
        {
        result = [
       "pn1","pn2","pn3","pn4","pn5",
       "ps1","ps2","ps3","ps4","ps5",
       "ph1","ph2","ph3","ph4","ph5",
       "pd1","pd2","pd3","pd4","pd5",
       "pc1","pc2","pc3","pc4","pc5"];
  
       console.log(result);
      }
  
      if(n == '6')
        {
        result = [
       "pn1","pn2","pn3","pn4","pn5","pn6",
       "ps1","ps2","ps3","ps4","ps5","ps6",
       "ph1","ph2","ph3","ph4","ph5","ph6",
       "pd1","pd2","pd3","pd4","pd5","pd6",
       "pc1","pc2","pc3","pc4","pc5","pc6"];
  
       console.log(result);
      }
  
      if(n == '7')
        {
        result = [
       "pn1","pn2","pn3","pn4","pn5","pn6","pn7",
       "ps1","ps2","ps3","ps4","ps5","ps6","ps7",
       "ph1","ph2","ph3","ph4","ph5","ph6","ph7",
       "pd1","pd2","pd3","pd4","pd5","pd6","pd7",
       "pc1","pc2","pc3","pc4","pc5","pc6","pc7"];
  
       console.log(result);
      }
      }
      
  
  
  //---------------------------case spade ---------------------------------------
     
      if(r == 'ps')
      {
        //console.log("noo");
        if(n == '1')
        {
       result = [
         "ph1",
         "ps1",
       "pd1",
       "pc1"];
  
       console.log(result);
      }
      
  
      if(n == '2')
        {
        result = [
       "pn1",
       "ps1","ps2",
       "ph1","ph2",
       "pd1","pd2",
       "pc1","pc2"];
  
       console.log(result);
      }
     
  
      if(n == '3')
        {
        result = [
       "pn1","pn2",
       "ps1","ps2","ps3",
       "ph1","ph2","ph3",
       "pd1","pd2","pd3",
       "pc1","pc2","pc3"];
  
       console.log(result);
      }
      
  
      if(n == '4')
        {
        result = [
       "pn1","pn2","pn3",
       "ps1","ps2","ps3","ps4",
       "ph1","ph2","ph3","ph4",
       "pd1","pd2","pd3","pd4",
       "pc1","pc2","pc3","pc4"];
  
       console.log(result);
      }
      
  
      if(n == '5')
        {
        result = [
       "pn1","pn2","pn3","pn4",
       "ps1","ps2","ps3","ps4","ps5",
       "ph1","ph2","ph3","ph4","ph5",
       "pd1","pd2","pd3","pd4","pd5",
       "pc1","pc2","pc3","pc4","pc5"];
  
       console.log(result);
      }
      
  
      if(n == '6')
        {
        result = [
       "pn1","pn2","pn3","pn4","pn5",
       "ps1","ps2","ps3","ps4","ps5","ps6",
       "ph1","ph2","ph3","ph4","ph5","ph6",
       "pd1","pd2","pd3","pd4","pd5","pd6",
       "pc1","pc2","pc3","pc4","pc5","pc6"];
  
       console.log(result);
      }
      
  
      if(n == '7')
        {
        result = [
       "pn1","pn2","pn3","pn4","pn5","pn6",
       "ps1","ps2","ps3","ps4","ps5","ps6","ps7",
       "ph1","ph2","ph3","ph4","ph5","ph6","ph7",
       "pd1","pd2","pd3","pd4","pd5","pd6","pd7",
       "pc1","pc2","pc3","pc4","pc5","pc6","pc7"];
  
       console.log(result);
      }
      
      
      
  
      }
  
  
  
  
  //---------------------------case heart---------------------------------------
  
      if(r == 'ph')
      {
        //console.log("noo");
        if(n == '1')
        {
        result = [
       "ph1",
       "pd1",
       "pc1"];
  
       console.log(result);
      }
  
      if(n == '2')
        {
        result = [
       "pn1",
       "ps1",
       "ph1","ph2",
       "pd1","pd2",
       "pc1","pc2",];
  
       console.log(result);
      }
  
      if(n == '3')
        {
        result = [
       "pn1","pn2",
       "ps1","ps2",
       "ph1","ph2","ph3",
       "pd1","pd2","pd3",
       "pc1","pc2","pc3"];
  
       console.log(result);
      }
  
      if(n == '4')
        {
        result = [
       "pn1","pn2","pn3",
       "ps1","ps2","ps3",
       "ph1","ph2","ph3","ph4",
       "pd1","pd2","pd3","pd4",
       "pc1","pc2","pc3","pc4"];
  
       console.log(result);
      }
  
      if(n == '5')
        {
        result = [
       "pn1","pn2","pn3","pn4",
       "ps1","ps2","ps3","ps4",
       "ph1","ph2","ph3","ph4","ph5",
       "pd1","pd2","pd3","pd4","pd5",
       "pc1","pc2","pc3","pc4","pc5"];
  
       console.log(result);
      }
  
      if(n == '6')
        {
        result = [
       "pn1","pn2","pn3","pn4","pn5",
       "ps1","ps2","ps3","ps4","ps5",
       "ph1","ph2","ph3","ph4","ph5","ph6",
       "pd1","pd2","pd3","pd4","pd5","pd6",
       "pc1","pc2","pc3","pc4","pc5","pc6"];
  
       console.log(result);
      }
  
      if(n == '7')
        {
        result = [
       "pn1","pn2","pn3","pn4","pn5","pn6",
       "ps1","ps2","ps3","ps4","ps5","ps6",
       "ph1","ph2","ph3","ph4","ph5","ph6","ph7",
       "pd1","pd2","pd3","pd4","pd5","pd6","pd7",
       "pc1","pc2","pc3","pc4","pc5","pc6","pc7"];
  
       console.log(result);
      }
      }
      
  
  
   
  //---------------------------case diamond ---------------------------------------
  
      if(r == 'pd')
      {
        //console.log("noo");
        if(n == '1')
        {
        result = [
       "pd1",
       "pc1"];
  
       console.log(result);
      }
  
      if(n == '2')
        {
        result = [
       "pn1",
       "ps1",
       "ph1",
       "pd1","pd2",
       "pc1","pc2"];
  
       console.log(result);
      }
  
      if(n == '3')
        {
        result = [
       "pn1","pn2",
       "ps1","ps2",
       "ph1","ph2",
       "pd1","pd2","pd3",
       "pc1","pc2","pc3"];
  
       console.log(result);
      }
  
      if(n == '4')
        {
        result = [
       "pn1","pn2","pn3",
       "ps1","ps2","ps3",
       "ph1","ph2","ph3",
       "pd1","pd2","pd3","pd4",
       "pc1","pc2","pc3","pc4"];
  
       console.log(result);
      }
  
      if(n == '5')
        {
        result = [
       "pn1","pn2","pn3","pn4",
       "ps1","ps2","ps3","ps4",
       "ph1","ph2","ph3","ph4",
       "pd1","pd2","pd3","pd4","pd5",
       "pc1","pc2","pc3","pc4","pc5"];
  
       console.log(result);
      }
  
      if(n == '6')
        {
        result = [
       "pn1","pn2","pn3","pn4","pn5",
       "ps1","ps2","ps3","ps4","ps5",
       "ph1","ph2","ph3","ph4","ph5",
       "pd1","pd2","pd3","pd4","pd5","pd6",
       "pc1","pc2","pc3","pc4","pc5","pc6"];
  
       console.log(result);
      }
  
      if(n == '7')
        {
        result = [
       "pn1","pn2","pn3","pn4","pn5","pn6",
       "ps1","ps2","ps3","ps4","ps5","ps6",
       "ph1","ph2","ph3","ph4","ph5","ph6",
       "pd1","pd2","pd3","pd4","pd5","pd6","pd7",
       "pc1","pc2","pc3","pc4","pc5","pc6","pc7"];
  
       console.log(result);
      }
      }
      
  
  
  //---------------------------case club ---------------------------------------
  
      if(r == 'pc')
      {
        //console.log("noo");
        if(n == '1')
        {
        result = [
        "pc1"
       ];
  
       console.log(result);
      }
  
      if(n == '2')
        {
        result = [
       "pn1",
       "ps1",
       "ph1",
       "pd1",
       "pc1","pc2"];
  
       console.log(result);
      }
  
      if(n == '3')
        {
        result = [
       "pn1","pn2",
       "ps1","ps2",
       "ph1","ph2",
       "pd1","pd2",
       "pc1","pc2","pc3"];
  
       console.log(result);
      }
  
      if(n == '4')
        {
        result = [
       "pn1","pn2","pn3",
       "ps1","ps2","ps3",
       "ph1","ph2","ph3",
       "pd1","pd2","pd3",
       "pc1","pc2","pc3","pc4"];
  
       console.log(result);
      }
  
      if(n == '5')
        {
        result = [
       "pn1","pn2","pn3","pn4",
       "ps1","ps2","ps3","ps4",
       "ph1","ph2","ph3","ph4",
       "pd1","pd2","pd3","pd4",
       "pc1","pc2","pc3","pc4","pc5"];
  
       console.log(result);
      }
  
      if(n == '6')
        {
        result = [
       "pn1","pn2","pn3","pn4","pn5",
       "ps1","ps2","ps3","ps4","ps5",
       "ph1","ph2","ph3","ph4","ph5",
       "pd1","pd2","pd3","pd4","pd5",
       "pc1","pc2","pc3","pc4","pc5","pc6"];
  
       console.log(result);
      }
  
      if(n == '7')
        {
        result = [
       "pn1","pn2","pn3","pn4","pn5","pn6",
       "ps1","ps2","ps3","ps4","ps5","ps6",
       "ph1","ph2","ph3","ph4","ph5","ph6",
       "pd1","pd2","pd3","pd4","pd5","pd6",
       "pc1","pc2","pc3","pc4","pc5","pc6","pc7"];
  
       console.log(result);
      }
      }
      
      
  
  
  //---------------------------case pass ---------------------------------------
  
      // if(r == 'pa')
      // {   
      // 	console.log('pass');
      // 	result = [];
      // }
  
  
  //---------------------------case double ---------------------------------------
  
      if(r == 'do')
      {   
        console.log('double');
        result = [];
      }
      
  
  //---------------------------case hint ---------------------------------------
      
      if(r == 'hi')
      {   
          console.log('hint'); 
        result = [];
      }
  
  
  //---------------------------case continue ---------------------------------------
  
      if(r == 'co')
      {
        console.log('continue');
        result = [];
      }
  
   for(var i=0; i<result.length;i++){
    var disBtn=document.getElementById(result[i]);
    disBtn.disabled = true;
    disBtn.style.background = "#000 url('images/locker.png') no-repeat center";
   }
  
    });
    

    document.getElementById('buttons').onclick = function() {
      
    };
  
      