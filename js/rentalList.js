//一级菜单
var quyu = document.getElementsByClassName('quyu')[0];
// <!-- 隐藏部分 -->
var area = document.getElementsByClassName('area');
var monthly = document.getElementsByClassName('monthly');
var box5 = document.getElementsByClassName('box5')[0];
var box6 = document.getElementsByClassName('box6')[0];

// console.log(monthly);

for (var i = 0; i < area.length; i++) {
    // console.log(area.length);
    area[i].setAttribute('index', i);

    area[i].onclick = function () {
        var index = this.getAttribute('index');

        for (var j = 0; j < 4; j++) {

            area[j].className = 'area';

            area[index].className = 'area li';

        }

        for (var k = 0; k < monthly.length; k++) {
            monthly[k].className = ' monthly';

            monthly[index].className = 'monthly red';

        }


    }
}
// 区域
quyu.onclick = function () {
    window.event.cancelBubble = true;
    window.event.stopPropagation();
    box5.style.display = 'block';

    area[0].className = 'area li';
    monthly[0].className = 'monthly red';


}

// 月租
var box7 = document.getElementsByClassName('box7')[0];
var box8 = document.getElementsByClassName('box8')[0];
monthly[1].onclick = function () {
    window.event.cancelBubble = true;
    window.event.stopPropagation();
    box8.style.display = 'block';

    box7.style.display = 'none';
    box9.style.display = 'none';
    // area[1].className = 'area li';
    // monthly[1].className = 'monthly red';
}

// 房型
var box9 = document.getElementsByClassName('box9')[0];
monthly[2].onclick = function () {
    window.event.cancelBubble = true;
    window.event.stopPropagation();
    box7.style.display = 'none';
    box8.style.display = 'none';
    box9.style.display = 'block';
}


//更多
var box10 = document.getElementsByClassName('box10')[0];
monthly[3].onclick = function () {
    window.event.cancelBubble = true;
    window.event.stopPropagation();
    box7.style.display = 'none';
    box8.style.display = 'none';
    box9.style.display = 'none';
    box10.style.display = 'block';
}

box6.onclick = function () {
    window.event.cancelBubble = true;
    window.event.stopPropagation();
    box5.style.display = 'block';
}

box5.onclick = function () {
    box5.style.display = 'none';
}


