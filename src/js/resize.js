
    resize();
    window.onresize = resize;
    function resize() {
        var body = document.getElementsByTagName('body')[0];
        var defaultWidth = 1920;
        var defaultFontSize = 16;
        var minWidth = 320;
        var vW = body.clientWidth;

        var k = Math.max(minWidth, vW) / defaultWidth;


        body.style.fontSize = (defaultFontSize * k) + 'px';
    }