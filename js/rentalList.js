//一级菜单
var quyu = document.getElementsByClassName('quyu')[0];
// <!-- 隐藏部分 -->
var box6 = document.getElementsByClassName('box6')[0];

// console.log(monthly);



//页面上的列表
var more = document.getElementsByClassName('more');
var color = document.getElementsByClassName('quyu');

// 隐藏部分最大的盒子
var box5 = document.getElementsByClassName('box5');
console.log(box5);

//区域
var box7 = document.getElementsByClassName('box7')[0];
//月租
var box8 = document.getElementsByClassName('box8')[0];
// 房型
var box9 = document.getElementsByClassName('box9')[0];
var box10 = document.getElementsByClassName('box10')[0];



for (var m = 0; m < more.length; m++) {
    // console.log(more[m]);
    more[m].setAttribute('num', m);
    more[m].onclick = function () {
        var num = this.getAttribute('num');
        //三角
        for (var p = 0; p < more.length; p++) {

            more[p].className = 'more';
            more[num].className = 'more li';


        }
        //字体颜色
        for (var v = 0; v < color.length; v++) {
            color[v].className = ' quyu';
            color[num].className = 'quyu red';


        }


    }

    // 点击区域

    more[0].onclick = function () {
        window.event.cancelBubble = true;
        window.event.stopPropagation();
        box5[0].style.display = 'block';

    }
    //点击月租
    more[1].onclick = function () {
        window.event.cancelBubble = true;
        window.event.stopPropagation();
        box5[1].style.display = 'block';
    }

    //房型
    more[2].onclick = function () {
        window.event.cancelBubble = true;
        window.event.stopPropagation();
        box5[2].style.display = 'block';



    }
    more[3].onclick = function () {
        window.event.cancelBubble = true;
        window.event.stopPropagation();
        box5[3].style.display = 'block';

    }


}

// //内部列表头部变颜色
//内部区域列表
var area = document.getElementsByClassName('area');
console.log(area);
var monthly = document.getElementsByClassName('monthly');

for (var i = 0; i < area.length; i++) {
    // console.log(area.length);
    area[i].setAttribute('index', i);

    area[i].onclick = function () {
        var index = this.getAttribute('index');
        console.log(index);
        if (index == 0 || index == 4 || index == 8 || index == 12) {
            box10.style.display = 'none';
            box7.style.display = 'block';
            box8.style.display = 'none';
            box9.style.display = 'none';
            console.log("哈哈哈哈");

        } else {
            console.log("hhhhh");
        }


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


box5.onclick = function () {
    box5.style.display = 'none';
}
