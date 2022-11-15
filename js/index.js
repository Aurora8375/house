//底部点击❌
var fork = document.getElementsByClassName('fork')[0];

fork.onclick = function () {
    var box = this.parentNode;
    box.parentNode.removeChild(box);
}


//点击加载更多
var load = document.getElementsByClassName('load')[0];
load.ontechstart = function () {
    var str = `
  
                <div class="img">
                <img src="./image/index/img1.jpg" alt="">
                </div>
                <div class="text1">
                    <h3>文化部中间层 一层带阁楼</h3>
                    <p>
                        <span>2室1厅96㎡南北</span>
                        <strong>1105万</strong>
                    </p>
                    <p>
                        <span>红庙北里 </span>
                        <span>14268元/平</span>
                    </p>
                    <span>
                        <a href="#">学区房</a>
                        <a href="#">独家</a>
                    </span>
                </div>
          
    
    
    `
    var str2 = `
    <div class="img">
    <img src="./image/index/img2.png" alt="">
</div>
<div class="text1">
    <h3>光大水墨 精装复式 稀缺</h3>
    <p>
        <span>2室1厅96㎡南北 </span>
        <strong>280万</strong>
    </p>
    <p>
        <span>光大水墨 </span>
        <span>14268元/平</span>
    </p>
    <span>
        <a href="#">学区房</a>
        <a href="#">独家</a>
        <a href="#">满五唯一</a>
    </span>
</div>
    
    `
    var ul = document.getElementsByClassName('Ul')[0];
    var li = document.createElement('li');
    var li_ = document.createElement('li');
    li.innerHTML = str;
    li_.innerHTML = str2;
    ul.appendChild(li);
    ul.appendChild(li_);
}