$(function(){
    if($("#answer06").length>0){
        $("#answer06").drawPieChart(data06);
    }
    if($("#answer78").length>0){
        $("#answer78").drawPieChart(data78);
    }
    if($("#answer910").length>0){
        $("#answer910").drawPieChart(data78);
    }
});


var realDW = $(document).width(), // @int --> real document width
    answer063ChartPersentClass,
    answer783ChartPersentClass,
    ageChartPersentClass,
    statusChartPersentClass,
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
    var answer063ElementPersenage = document.getElementById('answer-06-3');
    try {
        if (answer063Data && answer063ElementPersenage) {
            var answer063ChartPersent = new Chart(answer063ElementPersenage, {
                type: 'pie',
                data: answer063Data,
                responsive: true,
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    legend: {
                        display: false,
                    },
                    layout: {
                        padding: {
                            left: 10,
                            right: 10,
                            top: 10,
                            bottom: 10
                        }
                    },
                    cutoutPercentage: 70,
                    tooltips: {
                      // Disable the on-canvas tooltip
                      enabled: false,
                      callbacks: {
                          label: function(tooltipItem, data) {
                              var label = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index] || '';
                              label = label + '%';
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
                },

            });
            answer063ChartPersentClass = answer063ChartPersent;
        }
    }
    catch (err) {
        console.warn(err);
    }

      // doughnut chart
      var answer783ElementPersenage = document.getElementById('answer-78-3');
      try {
          if (answer783Data && answer783ElementPersenage) {
              var answer783ChartPersent = new Chart(answer783ElementPersenage, {
                  type: 'pie',
                  data: answer783Data,
                  responsive: true,
                  options: {
                      responsive: true,
                      maintainAspectRatio: false,
                      legend: {
                          display: false,
                      },
                      layout: {
                          padding: {
                              left: 10,
                              right: 10,
                              top: 10,
                              bottom: 10
                          }
                      },
                      cutoutPercentage: 70,
                      tooltips: {
                        // Disable the on-canvas tooltip
                        enabled: false,
                        callbacks: {
                            label: function(tooltipItem, data) {
                                var label = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index] || '';
                                label = label + ' %';
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
                  },
  
              });
              answer783ChartPersentClass = answer783ChartPersent;
          }
      }
      catch (err) {
          console.warn(err);
      }

      
      // doughnut chart
      var ageElementPersenage = document.getElementById('agechart');
      try {
          if (ageData && ageElementPersenage) {
              var ageChartPersent = new Chart(ageElementPersenage, {
                  type: 'pie',
                  data: ageData,
                  responsive: true,
                  options: {
                      responsive: true,
                      maintainAspectRatio: false,
                      legend: {
                          display: false,
                      },
                      layout: {
                          padding: {
                              left: 10,
                              right: 10,
                              top: 10,
                              bottom: 10
                          }
                      },
                      cutoutPercentage: 70,
                      tooltips: {
                        // Disable the on-canvas tooltip
                        enabled: false,
                        callbacks: {
                            label: function(tooltipItem, data) {
                                var label = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index] || '';
                                label = label + ' %';
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
                  },
  
              });
              ageChartPersentClass = ageChartPersent;
          }
      }
      catch (err) {
          console.warn(err);
      }

          
      // doughnut chart
      var statusElementPersenage = document.getElementById('statuschart');
      try {
          if (statusData && statusElementPersenage) {
              var statusChartPersent = new Chart(statusElementPersenage, {
                  type: 'pie',
                  data: statusData,
                  responsive: true,
                  options: {
                      responsive: true,
                      maintainAspectRatio: false,
                      legend: {
                          display: false,
                      },
                      layout: {
                          padding: {
                              left: 10,
                              right: 10,
                              top: 10,
                              bottom: 10
                          }
                      },
                      cutoutPercentage: 70,
                      tooltips: {
                        // Disable the on-canvas tooltip
                        enabled: false,
                        callbacks: {
                            label: function(tooltipItem, data) {
                                var label = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index] || '';
                                label = label + ' %';
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
                  },
  
              });
              statusChartPersentClass = statusChartPersent;
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
    if(answer063ChartPersentClass){
        answer063ChartPersentClass.destroy();
    }
    if(statusChartPersentClass){
        statusChartPersentClass.destroy();
    }
    if(ageChartPersentClass){
        ageChartPersentClass.destroy();
    }
    if(answer783ChartPersentClass){
        answer783ChartPersentClass.destroy();
    }
    var chartArr = [
        $('#answer-06-3'),
        $('#answer-78-3'),
        $('#statuschart'),
        $('#agechart'),
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


    if(answer063ChartPersentClass){
        answer063ChartPersentClass.update();
    }
    if(ageChartPersentClass){
        ageChartPersentClass.update();
    }
    if(statusChartPersentClass){
        statusChartPersentClass.update();
    }
    if(answer783ChartPersentClass){
        answer783ChartPersentClass.update();
    }
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
    if ($(document).width() > 1700) {
        //line chart
        position = 'right';
        $('#answer-06-3').attr('width', 120);
        $('#answer-06-3').attr('height', 120);

        $('#answer-78-3').attr('width', 120);
        $('#answer-78-3').attr('height', 120);


        $('#agechart').attr('width', 150);
        $('#agechart').attr('height', 150);


        $('#statuschart').attr('width', 150);
        $('#statuschart').attr('height', 150);

    }
    else if ($(document).width() > 1600) {
        position = 'right';
        $('#answer-06-3').attr('width', 120);
        $('#answer-06-3').attr('height', 120);

        $('#answer-78-3').attr('width', 120);
        $('#answer-78-3').attr('height', 120);


        $('#agechart').attr('width', 150);
        $('#agechart').attr('height', 150);


        $('#statuschart').attr('width', 150);
        $('#statuschart').attr('height', 150);;
    }
    else if ($(document).width() > 1500) {
        position = 'right';
        $('#answer-06-3').attr('width', 120);
        $('#answer-06-3').attr('height', 120);

        $('#answer-78-3').attr('width', 120);
        $('#answer-78-3').attr('height', 120);


        $('#agechart').attr('width', 150);
        $('#agechart').attr('height', 150);


        $('#statuschart').attr('width', 150);
        $('#statuschart').attr('height', 150);
    }
    else if ($(document).width() > 1400) {
        position = 'right';
        $('#answer-06-3').attr('width', 120);
        $('#answer-06-3').attr('height', 120);

        $('#answer-78-3').attr('width', 120);
        $('#answer-78-3').attr('height', 120);


        $('#agechart').attr('width', 150);
        $('#agechart').attr('height', 150);


        $('#statuschart').attr('width', 150);
        $('#statuschart').attr('height', 150);
    }
    else if ($(document).width() > 1350) {
        position = 'right';
        $('#answer-06-3').attr('width', 120);
        $('#answer-06-3').attr('height', 120);

        $('#answer-78-3').attr('width', 120);
        $('#answer-78-3').attr('height', 120);


        $('#agechart').attr('width', 150);
        $('#agechart').attr('height', 150);


        $('#statuschart').attr('width', 150);
        $('#statuschart').attr('height', 150);
    }
    else if ($(document).width() > 1300) {
        position = 'bottom';
        $('#answer-06-3').attr('width', 120);
        $('#answer-06-3').attr('height', 120);

        $('#answer-78-3').attr('width', 120);
        $('#answer-78-3').attr('height', 120);


        $('#agechart').attr('width', 150);
        $('#agechart').attr('height', 150);


        $('#statuschart').attr('width', 150);
        $('#statuschart').attr('height', 150);
    }
    else if ($(document).width() > 1200) {
        position = 'bottom';
        $('#answer-06-3').attr('width', 120);
        $('#answer-06-3').attr('height', 120);

        $('#answer-78-3').attr('width', 120);
        $('#answer-78-3').attr('height', 120);


        $('#agechart').attr('width', 150);
        $('#agechart').attr('height', 150);


        $('#statuschart').attr('width', 150);
        $('#statuschart').attr('height', 150);
    }
    else if ($(document).width() > 1000) {
        position = 'bottom';
        $('#answer-06-3').attr('width', 120);
        $('#answer-06-3').attr('height', 120);

        $('#answer-78-3').attr('width', 120);
        $('#answer-78-3').attr('height', 120);


        $('#agechart').attr('width', 150);
        $('#agechart').attr('height', 150);


        $('#statuschart').attr('width', 150);
        $('#statuschart').attr('height', 150);

    }
    else if ($(document).width() > 767) {
        position = 'bottom';
        $('#answer-06-3').attr('width', 120);
        $('#answer-06-3').attr('height', 120);

        $('#answer-78-3').attr('width', 120);
        $('#answer-78-3').attr('height', 120);


        $('#agechart').attr('width', 150);
        $('#agechart').attr('height', 150);


        $('#statuschart').attr('width', 150);
        $('#statuschart').attr('height', 150);
    }
    else if ($(document).width() > 600) {
        position = 'bottom';
        $('#answer-06-3').attr('width', 120);
        $('#answer-06-3').attr('height', 120);

        $('#answer-78-3').attr('width', 120);
        $('#answer-78-3').attr('height', 120);


        $('#agechart').attr('width', 150);
        $('#agechart').attr('height', 150);


        $('#statuschart').attr('width', 150);
        $('#statuschart').attr('height', 150);
    }
    else if ($(document).width() < 600) {
        position = 'bottom';
        $('#answer-06-3').attr('width', 120);
        $('#answer-06-3').attr('height', 120);

        $('#answer-78-3').attr('width', 120);
        $('#answer-78-3').attr('height', 120);


        $('#agechart').attr('width', 150);
        $('#agechart').attr('height', 150);


        $('#statuschart').attr('width', 150);
        $('#statuschart').attr('height', 150);
    }
    else {
        position = 'bottom';
        $('#answer-06-3').attr('width', 120);
        $('#answer-06-3').attr('height', 120);

        $('#answer-78-3').attr('width', 120);
        $('#answer-78-3').attr('height', 120);


        $('#agechart').attr('width', 150);
        $('#agechart').attr('height', 150);


        $('#statuschart').attr('width', 150);
        $('#statuschart').attr('height', 150);
    }

} // add media sizes
