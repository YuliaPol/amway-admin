
jQuery(function ($) {
    $(document).ready(function () {
        if(typeof dataCSI !== 'undefined') {
            if(dataCSI.data.length > 0){
                bulidVerticalLines(dataCSI.container, dataCSI.data, dataCSI.background);
            }
        }
        if(typeof dataNPS !== 'undefined') {
            if(dataNPS.data.length > 0){
                bulidHorizontalLines(dataNPS.container, dataNPS.data, dataNPS.background);
            }
        }
        if(typeof dataNPS2 !== 'undefined') {
            if(dataNPS2.data.length > 0){
                bulidVerticalLinesMono(dataNPS2.container, dataNPS2.data, dataNPS2.background);
            }
        }
        if(typeof dataCSI2 !== 'undefined') {
            if(dataNPS2.data.length > 0){
                bulidVerticalLinesMono(dataCSI2.container, dataCSI2.data, dataCSI2.background);
            }
        }
    });
});
function bulidHorizontalLines(container, data, background){
    if($(container).length>0){
        if(data.length>0){
            var items = '<div class="chart-horizontal-wrapper">'
            for (let index = 0; index < data.length; index++) {
                var line = buildHorizontalLine(data[index], background);
                if(line){
                    items += line;
                }
            }
            items+='</div>';
            $(items).appendTo($(container));
        }

    }
};
function buildHorizontalLine(lineData, background){
    var data = lineData.values;
    var label = lineData.label;
    var total = 0;
    for (let index = 0; index < data.length; index++) {
        total += data[index];
    }
    var percent = new Array(data.length);
    if(total>0){
        var result =
            '<div class="chart-item">'
            +'<div class="label">'+ label + '</div>'
            +'<div class="line">';
        var prevpercent = 0;
        for (let index = 0; index < data.length; index++) {
            var percent = GetPercent(data[index], total);
            var percentWidth = GetPercent(data[index], total);
            if(prevpercent > 0 ){
                percentWidth = percentWidth + prevpercent
                prevpercent = 0;
            }
            if(percent > 2){
                result += 
                '<div class="line-item" style="width: ' + percentWidth +'%; background: '+ background[index] +';"">'
                +'    <div class="value">' + Math.round(percent) + '%</div>'
                +'</div>';
            }
            else {
                prevpercent = percent;
            }
        }
        result +=
        '   </div>'
        +'</div>'
        return result;
    }
    else {
        return false;
    }
}
function bulidVerticalLines(container, data, background){
    if($(container).length>0){
        var wrapper = '<div class="chart-ver-wrapper"></div>';
        $(wrapper).appendTo($(container));
        var scale = 
        '<div class="vert-scale">'
        +'  <div class="scale-label">100</div>'
        +'  <div class="scale-label">90</div>'
        +'  <div class="scale-label">80</div>'
        +'  <div class="scale-label">70</div>'
        +'  <div class="scale-label">60</div>'
        +'  <div class="scale-label">50</div>'
        +'  <div class="scale-label">40</div>'
        +'  <div class="scale-label">30</div>'
        +'  <div class="scale-label">20</div>'
        +'  <div class="scale-label">10</div>'
        +'  <div class="scale-label">0</div>'
        +'</div>';
        $(scale).appendTo($(container).find('.chart-ver-wrapper'));
        if(data.length>0){
            var items = '<div class="items-list">'
            for (let index = 0; index < data.length; index++) {
                var width = 100/data.length;
                var line = buildVerticalLine(data[index], background, width);
                if(line){
                    items += line;
                }
            }
            items+='</div>';
            $(items).appendTo($(container).find('.chart-ver-wrapper'));
        }
    }
}
function buildVerticalLine(lineData, background, width){
    var data = lineData.values;
    var label = lineData.label;
    var total = 0;
    for (let index = 0; index < data.length; index++) {
        total += data[index];
    }
    var percent = new Array(data.length);
    if(total>0){
        var result =
            '<div class="chart-item" style="width: '+ width + '%;min-width:60px">'
            +'<div class="line-item">';
        for (let index = 0; index < data.length; index++) {
            result += '<div class="value-1" style="height: '+ GetPercent(data[index], total) +'%; background: '+ background[index] +';"></div>';
        }
        result +=
        '   </div>'
        +'<div class="label">'+ label + '</div>'
        +'</div>'
        return result;
    }
    else {
        return false;
    }
}
function GetPercent(value, total){
    return (value/total)*100;
};

function bulidVerticalLinesMono(container, data, background){
    if($(container).length>0){
        var wrapper = '<div class="chart-vertmono-wrapper"></div>';
        $(wrapper).appendTo($(container));
        var scale = 
        '<div class="vert-scale">'
        +'  <div class="scale-label">100</div>'
        +'  <div class="scale-label">90</div>'
        +'  <div class="scale-label">80</div>'
        +'  <div class="scale-label">70</div>'
        +'  <div class="scale-label">60</div>'
        +'  <div class="scale-label">50</div>'
        +'  <div class="scale-label">40</div>'
        +'  <div class="scale-label">30</div>'
        +'  <div class="scale-label">20</div>'
        +'  <div class="scale-label">10</div>'
        +'  <div class="scale-label">0</div>'
        +'</div>';

        data.sort((a, b) => b.percent - a.percent);
        $(scale).appendTo($(container).find('.chart-vertmono-wrapper'));
        if(data.length>0){
            var items = '<div class="items-list">'
            for (let index = 0; index < data.length; index++) {
                var width = 100/data.length;
                var line = buildVerticalLineMono(data[index], background, width);
                if(line){
                    items += line;
                }
            }
            items+='</div>';
            $(items).appendTo($(container).find('.chart-vertmono-wrapper'));
        }
    }
}
function buildVerticalLineMono(lineData, background, width){
    var count = lineData.count;
    var percent = lineData.percent;
    var label = lineData.label;
    var addClass = ' ';
    if(Math.abs(percent)<6) {
        addClass = 'countBlack';
    }
    if(percent < 0){
        addClass += ' redbackground';
    }
    var result =
        '<div class="chart-item ' + addClass + '" style="width: '+ width + '%;">'
        +'<div class="line-item">'
        +'<div class="line-content">'
        +'    <div class="active-line" style="background:'+ background +';height: ' + Math.abs(percent) +'%;">'
        +'    <div class="percent-label">'+ percent +'%</div>'
        +'        </div>'
        +'    </div>'
        +'    <div class="count-label">'+ count +'</div>'
        +'   </div>'
        +'<div class="label">'+ label + '</div>'
        +'</div>'
    return result;
}