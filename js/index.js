window.onload = function () {
    //主页标题
    let home = document.getElementById('headerBox1')
    home.onmouseenter = function () {
        home.style.color = 'red'
    }
    home.onmouseleave = function () {
        home.style.color = '#fff'
    }
    //图片轮播
    let imglist = document.querySelectorAll('.bodyBox1 > a > img')
    let Rbtn = document.querySelector('.rightbtn')
    let Lbtn = document.querySelector('.leftbtn')
    let next = 0, now = 0;
    let w = imglist[0].offsetWidth;
    let flag = true
    Rbtn.onclick = function () {
        if (flag == false) {
            return
        }
        flag = false
        next++
        if (next == imglist.length) {
            next = 0;
        }
        imglist[next].style.left = w + 'px'
        btn[now].classList.remove('red')
        btn[next].classList.add('red')
        animate(imglist[now], {left: -w})
        animate(imglist[next], {left: 0}, function () {
            flag = true
        })
        now = next;
    }
    Lbtn.onclick = function () {
        if (flag == false) {
            return
        }
        flag = false
        next--
        if (next < 0) {
            next = imglist.length - 1;
        }
        btn[now].classList.remove('red')
        btn[next].classList.add('red')
        imglist[next].style.left = -w + 'px'
        animate(imglist[now], {left: w},)
        animate(imglist[next], {left: 0}, function () {
            flag = true
        })
        now = next;
    }
    let btn = document.querySelectorAll('.downbtn li')
    for (let i = 0; i < btn.length; i++) {

        btn[i].onclick = function () {
            if (flag == false) {
                return
            }
            if (now == i) {
                return;
            }
            flag = false
            next = i
            if (now < i) {
                imglist[next].style.left = w + 'px'
                animate(imglist[now], {left: -w})
            } else {
                imglist[next].style.left = -w + 'px'
                animate(imglist[now], {left: w})
            }
            btn[now].classList.remove('red')
            btn[next].classList.add('red')
            animate(imglist[next], {left: 0}, function () {
                flag = true
            })
            now = next;
        }
    }
    //个人日志
    let lefttoplist = document.getElementsByClassName('leftTop')[0]
    let LFTli = lefttoplist.getElementsByTagName('li')
    let divlist = document.querySelectorAll('.footLeft > div')
    let lilist = document.querySelectorAll('.footLeft .show .tebiebox >ul >li')
    for (let i = 0; i < LFTli.length; i++) {
        LFTli[i].index = i;
        LFTli[i].onclick = function f() {
            for (let j = 0; j < LFTli.length; j++) {
                LFTli[j].className = ''
                divlist[j].className = 'hide'
            }
            this.className = 'newscurrent'
            divlist[this.index].className = "show";
            lilist = document.querySelectorAll('.footLeft .show .tebiebox >ul >li')
            // console.log(lilist);
            lilist.forEach(function (value, index) {
                value.onmouseenter = function () {
                    for (let i = 0; i < lilist.length; i++) {
                        lilist[i].classList.remove('hot')
                    }
                    this.classList.add('hot')
                    // console.log(lilist);
                }

            })
        }
        lilist.forEach(function (value, index) {
            value.onmouseenter = function () {
                for (let i = 0; i < lilist.length; i++) {
                    lilist[i].classList.remove('hot')
                }
                this.classList.add('hot')
                // console.log(lilist);
            }

        })

    }
    //图片轮播
    let t = setInterval(Rbtn.onclick, 1000)
    let box = document.querySelector('.bodyBox1')
    box.onmouseenter = function () {
        clearInterval(t)
    }
    box.onmouseleave = function () {
        t = setInterval(Rbtn.onclick, 1000)
    }
    //延迟加载图片
    let layimg = document.querySelectorAll('.layload')
    let viewH = window.innerHeight
    let layArr = []
    layimg.forEach(function (ele) {
        let parent = ele.offsetParent;
        let parent2 = parent.offsetParent
        layArr.push(parent2.offsetTop)
    })
    window.onscroll = function () {
        let scrolltop = Math.floor(document.documentElement.scrollTop)
        for (let i = 0; i < layArr.length; i++) {
            if (scrolltop + viewH >= layArr[i]) {
                if (!layimg[i].src) {
                    layimg[i].src = layimg[i].getAttribute('aa')
                    console.log(i);
                }
            }
        }
    }
}