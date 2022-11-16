var area = document.getElementsByClassName('area')
var more = document.getElementsByClassName('more')
var box5 = document.getElementsByClassName('box5')[0]
var box6 = document.getElementsByClassName('box6')[0]
var quyu = document.getElementsByClassName('quyu')
var monthly = document.getElementsByClassName('monthly')
var box7 = document.getElementsByClassName('box7')[0]
var box8 = document.getElementsByClassName('box8')[0]
var box9 = document.getElementsByClassName('box9')[0]
var box10 = document.getElementsByClassName('box10')[0]
for (var i = 0; i < area.length; i++) {
    more[i].setAttribute('index', i)
    more[i].onclick = function () {
        var num = this.getAttribute('index')
        console.log(num);
        for (var j = 0; j < more.length; j++) {
            more[j].className = 'more'
            area[j].className = 'area'
            quyu[j].className = 'quyu'
            monthly[j].className = 'monthly'
        }
        this.className = 'more li'
        quyu[num].className = 'quyu red'
        box5.style.display = 'block'
        box6.style.display = 'block'
        area[num].className = 'area li'
        monthly[num].className = 'monthly red'
        box7.style.display = 'none'
        box8.style.display = 'none'
        box9.style.display = 'none'
        box10.style.display = 'none'
        if (num == 0) {
            box7.style.display = 'block'
        } else if (num == 1) {
            box8.style.display = 'block'
        } else if (num == 2) {
            box9.style.display = 'block'
        } else {
            box10.style.display = 'block'
        }

        for (var s = 0; s < area.length; s++) {
            area[s].setAttribute('index1', s)
            area[s].onclick = function () {
                var num1 = this.getAttribute('index1')
                for (var c = 0; c < area.length; c++) {
                    area[c].className = 'area'
                    monthly[c].className = 'monthly'
                }
                area[num1].className = 'area li'
                monthly[num1].className = 'monthly red'
                box7.style.display = 'none'
                box8.style.display = 'none'
                box9.style.display = 'none'
                box10.style.display = 'none'
                if (num1 == 0) {
                    box7.style.display = 'block'
                } else if (num1 == 1) {
                    box8.style.display = 'block'
                } else if (num1 == 2) {
                    box9.style.display = 'block'
                } else {
                    box10.style.display = 'block'
                }
            }
        }
    }
}


box5.addEventListener('click', function () {
    box5.style.display = 'none'


}, false)
box6.addEventListener('click', function () {
    window.event ? window.event.cancelBubble = true : window.event.stopPropagation()
    box5.style.display = 'block'

}, false)