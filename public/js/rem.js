function remSize(){
    let deviceWidth = document.documentElement.clientWidth || window.innerWidth;
    if(deviceWidth >= 750 ){
        deviceWidth = 750;
    }
    if(deviceWidth <= 320) {
        deviceWidth = 320;
    }
    document.documentElement.style.fontSize = (deviceWidth/7.5) + 'px';
    document.querySelector('body').style.fontSize = 0.3+'rem'
    //设计稿750px
    //设置一半的宽度375ox
    //1rem == 100px的设计稿设计稿宽度
    //一半的宽度就是3.75rem
}

remSize();

window.onresize =function (){
    remSize();
}
