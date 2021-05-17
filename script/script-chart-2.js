var realDW = $(document).width(), // @int --> real document width
    answer06ChartPersentClass, 
    position; // @string ---------------------> side of legend position in charts

$(document).ready(function () {
    // add charts
    setSize();
    generateCharts();
    $(window).on('resize', function () {
        setTimeout(function () {
            checkMedia($(document).width(), getmediaPeriod(realDW));
        }, 80);
    })
});
/**
 *   function create chart
 */
function generateCharts() {

    
    // doughnut chart
    var answer06ElementPersenage = document.getElementById('answer-06');
    try {
        if (answer06Data && answer06ElementPersenage) {
            var answer06ChartPersent = new Chart(answer06ElementPersenage, {
                type: 'pie',
                data: answer06Data,
                responsive: true,
                options: {
                    animation: {
                        duration: 500,
                        easing: "easeOutQuart",
                        onComplete: function () {
                            var showPercent = true;
                            if (this.tooltip._active) {
                                if (this.tooltip._active[0]) {
                                    showPercent = false;
                                }
                            }
                            if (showPercent) {
                                var ctx = this.chart.ctx;
                                ctx.font = 20 + "px Arial";
                                ctx.textAlign = 'center';
                                ctx.textBaseline = 'bottom';
                                this.data.datasets.forEach(function (dataset) {
                                    for (var i = 0; i < dataset.data.length; i++) {
                                        var model = dataset._meta[Object.keys(dataset._meta)[0]].data[i]._model,
                                            total = dataset._meta[Object.keys(dataset._meta)[0]].total,
                                            mid_radius = model.innerRadius + (model.outerRadius - model.innerRadius) / 2,
                                            start_angle = model.startAngle,
                                            end_angle = model.endAngle,
                                            mid_angle = start_angle + (end_angle - start_angle) / 2;

                                        var x = mid_radius * Math.cos(mid_angle);
                                        var y = mid_radius * Math.sin(mid_angle);

                                        ctx.fillStyle = '#fff';
                                        if (i == 3) { // Darker text color for lighter background
                                            ctx.fillStyle = '#444';
                                        }
                                        var percent = String(Math.round(dataset.data[i] / total * 100)) + "%";
                                        if (dataset.data[i] != 0) {
                                            ctx.fillText(percent, model.x + x, model.y + y + 15);
                                        }
                                    }
                                });
                            }
                        }
                    },
                    onHover: function (evt, elements) {
                        if (elements && elements.length) {
                            segment = elements[0];
                            this.chart.update();
                            selectedIndex = segment["_index"];
                            segment._model.outerRadius += 10;
                        } else {
                            if (segment) {
                                segment._model.outerRadius -= 10;
                            }
                            segment = null;
                        }
                    },
                    tooltips: {
                        // Disable the on-canvas tooltip
                        enabled: false,
                        callbacks: {
                            label: function(tooltipItem, data) {
                                var label = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index] || '';
                                label = label + ' шт.';
                                return label;
                            }
                        },
                        custom: function(tooltipModel) {
                            // Tooltip Element
                            var tooltipEl = document.getElementById('chartjs-tooltip');
                            // Create element on first render
                            if (!tooltipEl) {
                                tooltipEl = document.createElement('div');
                                tooltipEl.id = 'chartjs-tooltip';
                                tooltipEl.innerHTML = '<table></table>';
                                document.body.appendChild(tooltipEl);
                            }
                            // Hide if no tooltip
                            if (tooltipModel.opacity === 0) {
                                tooltipEl.style.opacity = 0;
                                return;
                            }

                            // Set caret Position
                            tooltipEl.classList.remove('above', 'below', 'no-transform');
                            if (tooltipModel.yAlign) {
                                tooltipEl.classList.add(tooltipModel.yAlign);
                            } else {
                                tooltipEl.classList.add('no-transform');
                            }

                            function getBody(bodyItem) {
                                return bodyItem.lines;
                            }

                            // Set Text
                            if (tooltipModel.body) {
                                var titleLines = tooltipModel.title || [];
                                var bodyLines = tooltipModel.body.map(getBody);

                                var innerHtml = '<thead>';

                                titleLines.forEach(function(title) {
                                    innerHtml += '<tr><th>' + title + '</th></tr>';
                                });
                                innerHtml += '</thead><tbody>';
                                bodyLines.forEach(function(body, i) {
                                    innerHtml +='<tr><td><div style="background:' + '#F1F1F0; border-radius: 4px; box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);">';
                                    innerHtml += '<div style="padding: 10px; font-size: 12px; line-height: 14px; color: #777676;">' + body + '</div></td></tr></div>';
                                });
                                innerHtml += '</tbody>';
                                var tableRoot = tooltipEl.querySelector('table');
                                tableRoot.innerHTML = innerHtml;
                            }

                            // `this` will be the overall tooltip
                            var position = this._chart.canvas.getBoundingClientRect();

                            // Display, position, and set styles for font
                            tooltipEl.style.opacity = 1;
                            tooltipEl.style.position = 'absolute';
                            tooltipEl.style.left = position.left + window.pageXOffset + tooltipModel.caretX + 'px';
                            tooltipEl.style.top = position.top + window.pageYOffset + tooltipModel.caretY + 'px';
                            tooltipEl.style.fontFamily = 'Arial';
                            tooltipEl.style.fontSize = '12px';
                            tooltipEl.style.fontStyle = tooltipModel._bodyFontStyle;
                            tooltipEl.style.padding = '10px ' +  '10px';
                            tooltipEl.style.pointerEvents = 'none';
                        }
                    },
                    responsive: true,
                    maintainAspectRatio: false,
                    legend: {
                        display: false,
                    },
                    pieceLabel: {
                        render: 'РІlabel',
                        fontColor: '#fff',
                        fontSize: 15,
                        precision: 0
                    },
                    layout: {
                        padding: {
                            left: 200,
                            right: 10,
                            top: 10,
                            bottom: 10
                        }
                    }
                },

            });
            answer06ChartPersentClass = answer06ChartPersent;
        }
    }
    catch (err) {
        console.warn(err);
    }
}
/**
 *   function generate new charts
 */
function setNewPosition() {

    // kill old charts
    answer06ChartPersentClass.destroy();
    var chartArr = [
        $('#answer-06'),
    ];

    chartArr.forEach(function (item) {
        var id = $(item).attr('id');
        var parent = $(item).parent();
        $(item).remove();
        $(parent).append('<canvas id="' + id + '"><canvas>');
    });

    // set width and height
    setSize();

    // generate chart
    generateCharts();


    answer06ChartPersentClass.update();
} // set new width and height for charts
function getmediaPeriod(w) {
    var mediaperiodsArr = [  // media array
        [1700, 2900],
        [1600, 1700],
        [1500, 1600],
        [1400, 1500],
        [1350, 1400],
        [1300, 1350],
        [1200, 1300],
        [1000, 1200],
        [767, 1000],
        [600, 767],
        [0, 600]
    ];

    for (var i = 0; i < mediaperiodsArr.length; i++) {
        if (w > mediaperiodsArr[i][0]) {
            return mediaperiodsArr[i];
            break;
        }
    } // return Media Period

}

/**
 *   function check id media period was chenget
 *   if period was changed set new width
 *   @param{Integer} width
 *   @param{Array} period
 */
function checkMedia(w, period) {

    if (w < period[0] || w > period[1]) {
        setNewPosition();
        realDW = w;
    }

} // check is media period changed
/**
 *   function set new width for canvas
 */
function setSize() {
    // if ($(document).width() > 1700) {
    //     //line chart
    //     position = 'right';
    //     $('#answer-06').attr('width', 700);
    //     $('#answer-06').attr('height', 700);
    // }
    // else if ($(document).width() > 1600) {
    //     position = 'right';
    //     $('#answer-06').attr('width', 700);
    //     $('#answer-06').attr('height', 700);
    // }
    // else if ($(document).width() > 1500) {
    //     position = 'right';
    //     $('#answer-06').attr('width', 700);
    //     $('#answer-06').attr('height', 700);
    // }
    // else if ($(document).width() > 1400) {
    //     position = 'right';
    //     $('#answer-06').attr('width', 210);
    //     $('#answer-06').attr('height', 210);
    // }
    // else if ($(document).width() > 1350) {
    //     position = 'right';
    //     $('#answer-06').attr('width', 200);
    //     $('#answer-06').attr('height', 200);
    // }
    // else if ($(document).width() > 1300) {
    //     position = 'bottom';
    //     $('#answer-06').attr('width', 200);
    //     $('#answer-06').attr('height', 200);
    // }
    // else if ($(document).width() > 1200) {
    //     position = 'bottom';
    //     $('#answer-06').attr('width', 200);
    //     $('#answer-06').attr('height', 200);
    // }
    // else if ($(document).width() > 1000) {
    //     position = 'bottom';
    //     $('#answer-06').attr('width', 200);
    //     $('#answer-06').attr('height', 200);

    // }
    // else if ($(document).width() > 767) {
    //     position = 'bottom';
    //     $('#answer-06').attr('width', 150);
    //     $('#answer-06').attr('height', 150);
    // }
    // else if ($(document).width() > 600) {
    //     position = 'bottom';
    //     $('#answer-06').attr('width', 200);
    //     $('#answer-06').attr('height', 200);
    // }
    // else if ($(document).width() < 600) {
    //     position = 'bottom';
    //     $('#answer-06').attr('width', 200);
    //     $('#answer-06').attr('height', 200);
    // }
    // else {
    //     position = 'bottom';
    //     $('#answer-06').attr('width', 200);
    //     $('#answer-06').attr('height', 200);
    // }

} // add media sizes
