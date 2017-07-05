
//图表
//新增关注用户
$(function () {
    Highcharts.setOptions({  //设置曲线图颜色
        colors: ['#337ab7']
    });
    $('#container').highcharts({
        chart: {
            // backgroundColor: '#303031',       
            type: 'spline',
            colors: ['#000'] 
        },
        marker: {
                    enabled: false,
                    states:{
                        hover:{
                            enabled: false
                        }
                    },
                    symbol: 'circle'
                },

        xAxis: {
            categories: ['2015/3/1', '2015/3/2', '2015/3/3', '2015/3/4', '2015/3/5', '2015/3/6','2015/3/7', '2015/3/8', '2015/3/9', '2015/3/10', '2015/3/11', '2015/3/12', '2015/3/13', '2015/3/14', '2015/3/15', '2015/3/16', '2015/3/17', '2015/3/18', '2015/3/19', '2015/3/20', '2015/3/21', '2015/3/22', '2015/3/23', '2015/3/24', '2015/3/25', '2015/3/26', '2015/3/27', '2015/3/28', '2015/3/29', '2015/12/30', '今日'],
            lineWidth :0,                    //去掉x轴线
            tickWidth:0,                    //去掉x轴线
            crosshair: true,
        },
        yAxis: [{ // Primary yAxis  
                    min:0, // 定义最小值  
                    minPadding: 0.2,   
                    maxPadding: 0.2,  
                    tickInterval:1, // 刻度值  
                    title: {  
                        style: {  
                            color: '#000'   //Y轴文字颜色
                        }  
                    },  
                    labels: {  
                        format: '{value}人',//Y轴后缀名字  
                    }, 
                }],          
        // legend: {                                   //关闭下面的线
        //     enabled: false
        // },
        series: [{
            name:'新用户',
            marker: {
            // enabled: false
        },
            data: [1, 5, 7, 8, 2, 12, 3, 8, 10, 11, 3, 7, 8, 2, 1, 8, 9, 5, 5, 3, 13, 1, 1, 2, 7, 1, 4, 6, 7,6,9]
        }]
    });
});

//取消关注用户
$(function () {
    Highcharts.setOptions({         //设置曲线图颜色
        colors: ['#e7505a']
    });
    $('#container2').highcharts({
        chart: {
            type: 'spline',
            colors: ['#000'] 
        },
        marker: {
                    enabled: false,
                    states:{
                        hover:{
                            enabled: false
                        }
                    },
                    symbol: 'circle'
                },

        xAxis: {
            categories: ['2015/3/1', '2015/3/2', '2015/3/3', '2015/3/4', '2015/3/5', '2015/3/6','2015/3/7', '2015/3/8', '2015/3/9', '2015/3/10', '2015/3/11', '2015/3/12', '2015/3/13', '2015/3/14', '2015/3/15', '2015/3/16', '2015/3/17', '2015/3/18', '2015/3/19', '2015/3/20', '2015/3/21', '2015/3/22', '2015/3/23', '2015/3/24', '2015/3/25', '2015/3/26', '2015/3/27', '2015/3/28', '2015/3/29', '2015/12/30', '今日'],
            lineWidth :0,                    //去掉x轴线
            tickWidth:0,                    //去掉x轴线
            crosshair: true,
        },
        yAxis: [{ // Primary yAxis  
                    min:0, // 定义最小值  
                    minPadding: 0.2,   
                    maxPadding: 0.2,  
                    tickInterval:1, // 刻度值  
                    title: {  
                        style: {  
                            color: '#000'   //Y轴文字颜色
                        }  
                    },  
                    labels: {  
                        format: '{value}人',//Y轴后缀名字  
                    }, 
                }],          
        // legend: {                                   //关闭下面的线
        //     enabled: false
        // },
        series: [{
            name:'老用户',
            marker: {
            // enabled: false
        },
            data: [1, 5, 7, 8, 2, 12, 3, 8, 10, 11, 3, 7, 8, 2, 1, 8, 9, 5, 5, 3, 13, 1, 1, 2, 7, 1, 4, 6, 7,6,9]
        }]
    });
});

//净增关注用户
$(function () {
    Highcharts.setOptions({         //设置曲线图颜色
        colors: ['#32c5d2']
    });
    $('#container3').highcharts({
        chart: {
            type: 'spline',
            colors: ['#000'] 
        },
        marker: {
                    enabled: false,
                    states:{
                        hover:{
                            enabled: false
                        }
                    },
                    symbol: 'circle'
                },

        xAxis: {
            categories: ['2015/3/1', '2015/3/2', '2015/3/3', '2015/3/4', '2015/3/5', '2015/3/6','2015/3/7', '2015/3/8', '2015/3/9', '2015/3/10', '2015/3/11', '2015/3/12', '2015/3/13', '2015/3/14', '2015/3/15', '2015/3/16', '2015/3/17', '2015/3/18', '2015/3/19', '2015/3/20', '2015/3/21', '2015/3/22', '2015/3/23', '2015/3/24', '2015/3/25', '2015/3/26', '2015/3/27', '2015/3/28', '2015/3/29', '2015/12/30', '今日'],
            lineWidth :0,                    //去掉x轴线
            tickWidth:0,                    //去掉x轴线
            crosshair: true,
        },
        yAxis: [{ // Primary yAxis  
                    min:0, // 定义最小值  
                    minPadding: 0.2,   
                    maxPadding: 0.2,  
                    tickInterval:1, // 刻度值  
                    title: {  
                        style: {  
                            color: '#000'   //Y轴文字颜色
                        }  
                    },  
                    labels: {  
                        format: '{value}人',//Y轴后缀名字  
                    }, 
                }],          
        // legend: {                                   //关闭下面的线
        //     enabled: false
        // },
        series: [{
            name:'新用户',
            marker: {
            // enabled: false
        },
            data: [1, 5, 7, 8, 2, 12, 3, 8, 10, 11, 3, 7, 8, 2, 1, 8, 9, 5, 5, 3, 13, 1, 1, 2, 7, 1, 4, 6, 7,6,9]
        }]
    });
});
//累计关注用户
$(function () {
    Highcharts.setOptions({         //设置曲线图颜色
        colors: ['#8E44AD']
    });
    $('#container4').highcharts({
        chart: {
            type: 'spline',
            colors: ['#000'] 
        },
        marker: {
                    enabled: false,
                    states:{
                        hover:{
                            enabled: false
                        }
                    },
                    symbol: 'circle'
                },

        xAxis: {
            categories: ['2015/3/1', '2015/3/2', '2015/3/3', '2015/3/4', '2015/3/5', '2015/3/6','2015/3/7', '2015/3/8', '2015/3/9', '2015/3/10', '2015/3/11', '2015/3/12', '2015/3/13', '2015/3/14', '2015/3/15', '2015/3/16', '2015/3/17', '2015/3/18', '2015/3/19', '2015/3/20', '2015/3/21', '2015/3/22', '2015/3/23', '2015/3/24', '2015/3/25', '2015/3/26', '2015/3/27', '2015/3/28', '2015/3/29', '2015/12/30', '今日'],
            lineWidth :0,                    //去掉x轴线
            tickWidth:0,                    //去掉x轴线
            crosshair: true,
        },
        yAxis: [{ // Primary yAxis  
                    min:0, // 定义最小值  
                    minPadding: 0.2,   
                    maxPadding: 0.2,  
                    tickInterval:1, // 刻度值  
                    title: {  
                        style: {  
                            color: '#000'   //Y轴文字颜色
                        }  
                    },  
                    labels: {  
                        format: '{value}人',//Y轴后缀名字  
                    }, 
                }],          
        // legend: {                                   //关闭下面的线
        //     enabled: false
        // },
        series: [{
            name:'累计关注用户',
            marker: {
            // enabled: false
        },
            data: [1, 5, 7, 8, 2, 12, 3, 8, 10, 11, 3, 7, 8, 2, 1, 8, 9, 5, 5, 3, 13, 1, 1, 2, 7, 1, 4, 6, 7,6,9]
        }]
    });
});
//活跃关注用户
$(function () {
    Highcharts.setOptions({         //设置曲线图颜色
        colors: ['#337ab7']
    });
    $('#container5').highcharts({
        chart: {
            type: 'spline',
            colors: ['#000'] 
        },
        marker: {
                    enabled: false,
                    states:{
                        hover:{
                            enabled: false
                        }
                    },
                    symbol: 'circle'
                },

        xAxis: {
            categories: ['2015/3/1', '2015/3/2', '2015/3/3', '2015/3/4', '2015/3/5', '2015/3/6','2015/3/7', '2015/3/8', '2015/3/9', '2015/3/10', '2015/3/11', '2015/3/12', '2015/3/13', '2015/3/14', '2015/3/15', '2015/3/16', '2015/3/17', '2015/3/18', '2015/3/19', '2015/3/20', '2015/3/21', '2015/3/22', '2015/3/23', '2015/3/24', '2015/3/25', '2015/3/26', '2015/3/27', '2015/3/28', '2015/3/29', '2015/12/30', '今日'],
            lineWidth :0,                    //去掉x轴线
            tickWidth:0,                    //去掉x轴线
            crosshair: true,
        },
        yAxis: [{ // Primary yAxis  
                    min:0, // 定义最小值  
                    minPadding: 0.2,   
                    maxPadding: 0.2,  
                    tickInterval:1, // 刻度值  
                    title: {  
                        style: {  
                            color: '#000'   //Y轴文字颜色
                        }  
                    },  
                    labels: {  
                        format: '{value}人',//Y轴后缀名字  
                    }, 
                }],          
        // legend: {                                   //关闭下面的线
        //     enabled: false
        // },
        series: [{
            name:'活跃用户',
            marker: {
            // enabled: false
        },
            data: [1, 5, 7, 8, 2, 12, 3, 8, 10, 11, 3, 7, 8, 2, 1, 8, 9, 5, 5, 3, 13, 1, 1, 2, 7, 1, 4, 6, 7,6,9]
        }]
    });
});
//访问用户
$(function () {
    Highcharts.setOptions({         //设置曲线图颜色
        colors: ['#e7505a']
    });
    $('#container6').highcharts({
        chart: {
            type: 'spline',
            colors: ['#000'] 
        },
        marker: {
                    enabled: false,
                    states:{
                        hover:{
                            enabled: false
                        }
                    },
                    symbol: 'circle'
                },

        xAxis: {
            categories: ['2015/3/1', '2015/3/2', '2015/3/3', '2015/3/4', '2015/3/5', '2015/3/6','2015/3/7', '2015/3/8', '2015/3/9', '2015/3/10', '2015/3/11', '2015/3/12', '2015/3/13', '2015/3/14', '2015/3/15', '2015/3/16', '2015/3/17', '2015/3/18', '2015/3/19', '2015/3/20', '2015/3/21', '2015/3/22', '2015/3/23', '2015/3/24', '2015/3/25', '2015/3/26', '2015/3/27', '2015/3/28', '2015/3/29', '2015/12/30', '今日'],
            lineWidth :0,                    //去掉x轴线
            tickWidth:0,                    //去掉x轴线
            crosshair: true,
        },
        yAxis: [{ // Primary yAxis  
                    min:0, // 定义最小值  
                    minPadding: 0.2,   
                    maxPadding: 0.2,  
                    tickInterval:1, // 刻度值  
                    title: {  
                        style: {  
                            color: '#000'   //Y轴文字颜色
                        }  
                    },  
                    labels: {  
                        format: '{value}人',//Y轴后缀名字  
                    }, 
                }],          
        // legend: {                                   //关闭下面的线
        //     enabled: false
        // },
        series: [{
            name:'访问用户',
            marker: {
            // enabled: false
        },
            data: [1, 5, 7, 8, 2, 12, 3, 8, 10, 11, 3, 7, 8, 2, 1, 8, 9, 5, 5, 3, 13, 1, 1, 2, 7, 1, 4, 6, 7,6,9]
        }]
    });
});
//SN码用户
$(function () {
    Highcharts.setOptions({         //设置曲线图颜色
        colors: ['#32c5d2']
    });
    $('#container7').highcharts({
        chart: {
            type: 'spline',
            colors: ['#000'] 
        },
        marker: {
                    enabled: false,
                    states:{
                        hover:{
                            enabled: false
                        }
                    },
                    symbol: 'circle'
                },

        xAxis: {
            categories: ['2015/3/1', '2015/3/2', '2015/3/3', '2015/3/4', '2015/3/5', '2015/3/6','2015/3/7', '2015/3/8', '2015/3/9', '2015/3/10', '2015/3/11', '2015/3/12', '2015/3/13', '2015/3/14', '2015/3/15', '2015/3/16', '2015/3/17', '2015/3/18', '2015/3/19', '2015/3/20', '2015/3/21', '2015/3/22', '2015/3/23', '2015/3/24', '2015/3/25', '2015/3/26', '2015/3/27', '2015/3/28', '2015/3/29', '2015/12/30', '今日'],
            lineWidth :0,                    //去掉x轴线
            tickWidth:0,                    //去掉x轴线
            crosshair: true,
        },
        yAxis: [{ // Primary yAxis  
                    min:0, // 定义最小值  
                    minPadding: 0.2,   
                    maxPadding: 0.2,  
                    tickInterval:1, // 刻度值  
                    title: {  
                        style: {  
                            color: '#000'   //Y轴文字颜色
                        }  
                    },  
                    labels: {  
                        format: '{value}人',//Y轴后缀名字  
                    }, 
                }],          
        // legend: {                                   //关闭下面的线
        //     enabled: false
        // },
        series: [{
            name:'SN码用户',
            marker: {
            // enabled: false
        },
            data: [1, 5, 7, 8, 2, 12, 3, 8, 10, 11, 3, 7, 8, 2, 1, 8, 9, 5, 5, 3, 13, 1, 1, 2, 7, 1, 4, 6, 7,6,9]
        }]
    });
});
//活跃用户构成
$(function () {
    $('#container8').highcharts({
        chart: {
            // backgroundColor: '#000',
            zoomType: 'xy'
        },
        title: {
            // text: 'Average Monthly Temperature and Rainfall in Tokyo'
        },
        subtitle: {
            // text: 'Source: WorldClimate.com'
        },
        xAxis: [{
            categories: ['2015/3/1', '2015/3/2', '2015/3/3', '2015/3/4', '2015/3/5', '2015/3/6','2015/3/7', '2015/3/8', '2015/3/9', '2015/3/10', '2015/3/11', '2015/3/12', '2015/3/13', '2015/3/14', '2015/3/15', '2015/3/16', '2015/3/17', '2015/3/18', '2015/3/19', '2015/3/20', '2015/3/21', '2015/3/22', '2015/3/23', '2015/3/24', '2015/3/25', '2015/3/26', '2015/3/27', '2015/3/28', '2015/3/29', '2015/12/30', '今日']
        }],
        yAxis: [{ // Primary yAxis
            labels: {
                format: '{value}人',
                style: {
                    color: '#89A54E'
                }
            },
            title: {
                // text: '曲线图',
                style: {
                    color: '#89A54E'
                }
            }
        }, { // Secondary yAxis
            title: {
                // text: '柱状图',
                style: {
                    color: '#4572A7'
                }
            },
            labels: {
                format: '{value} 人',
                style: {
                    color: '#4572A7'
                }
            },
            opposite: true
        }],
        tooltip: {
            shared: true
        },
        // legend: { //控制下面引导
        //     layout: 'vertical',
        //     align: 'left',
        //     x: 120,
        //     verticalAlign: 'top',
        //     y: 100,
        //     floating: true,
        //     backgroundColor: '#FFFFFF'
        // },
        plotOptions: {
            column: {
                stacking: 'parents'//控制柱状图重叠
            }
        },
        series: [{
            name: '新用户',
            color: '#3598DC',
            type: 'column',
            yAxis: 1,
            data: [20, 6, 9, 14, 18, 21, 25, 26, 23, 18, 13, 9, 6, 9, 14, 18, 21, 25, 26, 23, 6, 9, 14, 18, 21, 50, 26, 23, 18, 13, 13],
            tooltip: {
            valueSuffix: '人'
            }

        }, {
            name: '老用户',
            color: '#F2784B',
            type: 'column',
            yAxis: 1,
            data: [49, 71, 80, 78, 90, 100, 95, 70, 85, 96, 105, 80, 71, 90, 100, 103, 97, 88, 100, 102, 90, 95, 103, 100, 105, 90, 70, 88, 100, 95, 95],
            tooltip: {
            valueSuffix: '人'
            }
        },{
            name: '新用户占比',
            color: '#32C5D2',
            type: 'spline',
            data: [7, 6, 9, 14, 18, 21, 25, 26, 23, 18, 13, 9, 6, 9, 14, 18, 21, 25, 26, 23, 6, 9, 14, 18, 21, 25, 26, 23, 18, 13, 13],
            tooltip: {
            valueSuffix: '人'
            }
        }]
    });
});
//留存率
$(function () {
    $('#container9').highcharts({
        chart: {
            // backgroundColor: '#000',
            zoomType: 'xy'
        },
        title: {
            // text: 'Average Monthly Temperature and Rainfall in Tokyo'
        },
        subtitle: {
            // text: 'Source: WorldClimate.com'
        },
        xAxis: [{
            categories: ['2015/3/1', '2015/3/2', '2015/3/3', '2015/3/4', '2015/3/5', '2015/3/6','2015/3/7', '2015/3/8', '2015/3/9', '2015/3/10', '2015/3/11', '2015/3/12', '2015/3/13', '2015/3/14', '2015/3/15', '2015/3/16', '2015/3/17', '2015/3/18', '2015/3/19', '2015/3/20', '2015/3/21', '2015/3/22', '2015/3/23', '2015/3/24', '2015/3/25', '2015/3/26', '2015/3/27', '2015/3/28', '2015/3/29', '2015/12/30', '今日']
        }],
        yAxis: [{ // Primary yAxis
            labels: {
                format: '{value}人',
                style: {
                    color: '#89A54E'
                }
            },
            title: {
                // text: '曲线图',
                style: {
                    color: '#89A54E'
                }
            }
        }, { // Secondary yAxis
            title: {
                // text: '柱状图',
                style: {
                    color: '#4572A7'
                }
            },
            labels: {
                format: '{value} 人',
                style: {
                    color: '#4572A7'
                }
            },
            opposite: true
        }],
        tooltip: {
            shared: true
        },
        // legend: {
        //     layout: 'vertical',
        //     align: 'left',
        //     x: 120,
        //     verticalAlign: 'top',
        //     y: 100,
        //     floating: true,
        //     backgroundColor: '#FFFFFF'
        // },
        series: [{
            name: '新用户',
            color: '#32c5d2',
            type: 'column',
            yAxis: 1,
            data: [49, 71, 106, 129, 144, 176, 135, 148, 216, 194, 95, 54, 71, 106, 129, 144, 176, 135, 148, 216, 71, 106, 129, 144, 176, 135, 148, 216, 194, 95, 95],
            tooltip: {
                valueSuffix: '人'
            }

        }, {
            name: '次日留存率',
            color: '#90ED7D',
            type: 'spline',
            data: [7, 6, 9, 14, 18, 21, 25, 26, 23, 18, 13, 9, 6, 9, 14, 18, 21, 25, 26, 23, 6, 9, 14, 18, 21, 25, 26, 23, 18, 13, 13],
            tooltip: {
                valueSuffix: '人'
            }
        }]
    });
});
//平均单次访问时长
$(function () {
    Highcharts.setOptions({         //设置曲线图颜色
        colors: ['#8E44AD']
    });
    $('#container10').highcharts({
        chart: {
            type: 'spline',
            colors: ['#000'] 
        },
        marker: {
                    enabled: false,
                    states:{
                        hover:{
                            enabled: false
                        }
                    },
                    symbol: 'circle'
                },

        xAxis: {
            categories: ['2015/3/1', '2015/3/2', '2015/3/3', '2015/3/4', '2015/3/5', '2015/3/6','2015/3/7', '2015/3/8', '2015/3/9', '2015/3/10', '2015/3/11', '2015/3/12', '2015/3/13', '2015/3/14', '2015/3/15', '2015/3/16', '2015/3/17', '2015/3/18', '2015/3/19', '2015/3/20', '2015/3/21', '2015/3/22', '2015/3/23', '2015/3/24', '2015/3/25', '2015/3/26', '2015/3/27', '2015/3/28', '2015/3/29', '2015/12/30', '今日'],
            lineWidth :0,                    //去掉x轴线
            tickWidth:0,                    //去掉x轴线
            crosshair: true,
        },
        yAxis: [{ // Primary yAxis  
                    min:0, // 定义最小值  
                    minPadding: 0.2,   
                    maxPadding: 0.2,  
                    tickInterval:1, // 刻度值  
                    title: {  
                        style: {  
                            color: '#000'   //Y轴文字颜色
                        }  
                    },  
                    labels: {  
                        format: '{value}人',//Y轴后缀名字  
                    }, 
                }],          
        // legend: {                                   //关闭下面的线
        //     enabled: false
        // },
        series: [{
            name:'平均单次访问时长',
            marker: {
            // enabled: false
        },
            data: [1, 5, 7, 8, 2, 12, 3, 8, 10, 11, 3, 7, 8, 2, 1, 8, 9, 5, 5, 3, 13, 1, 1, 2, 7, 1, 4, 6, 7,6,9]
        }]
    });
});
//平均日点击次数
$(function () {
    Highcharts.setOptions({  //设置曲线图颜色
        colors: ['#337ab7']
    });
    $('#container11').highcharts({
        chart: {
            // backgroundColor: '#303031',       
            type: 'spline',
            colors: ['#000'] 
        },
        marker: {
                    enabled: false,
                    states:{
                        hover:{
                            enabled: false
                        }
                    },
                    symbol: 'circle'
                },

        xAxis: {
            categories: ['2015/3/1', '2015/3/2', '2015/3/3', '2015/3/4', '2015/3/5', '2015/3/6','2015/3/7', '2015/3/8', '2015/3/9', '2015/3/10', '2015/3/11', '2015/3/12', '2015/3/13', '2015/3/14', '2015/3/15', '2015/3/16', '2015/3/17', '2015/3/18', '2015/3/19', '2015/3/20', '2015/3/21', '2015/3/22', '2015/3/23', '2015/3/24', '2015/3/25', '2015/3/26', '2015/3/27', '2015/3/28', '2015/3/29', '2015/12/30', '今日'],
            lineWidth :0,                    //去掉x轴线
            tickWidth:0,                    //去掉x轴线
            crosshair: true,
        },
        yAxis: [{ // Primary yAxis  
                    min:0, // 定义最小值  
                    minPadding: 0.2,   
                    maxPadding: 0.2,  
                    tickInterval:1, // 刻度值  
                    title: {  
                        style: {  
                            color: '#000'   //Y轴文字颜色
                        }  
                    },  
                    labels: {  
                        format: '{value}人',//Y轴后缀名字  
                    }, 
                }],          
        // legend: {                                   //关闭下面的线
        //     enabled: false
        // },
        series: [{
            name:'平均日点击次数',
            marker: {
            // enabled: false
        },
            data: [1, 5, 7, 8, 2, 12, 3, 8, 10, 11, 3, 7, 8, 2, 1, 8, 9, 5, 5, 3, 13, 1, 1, 2, 7, 1, 4, 6, 7,6,9]
        }]
    });
});

//新增用户饼图
$(function () {
Highcharts.getOptions().colors = Highcharts.map(Highcharts.getOptions().colors, function (color) {
    return {
        radialGradient: {
            cx: 0.5,
            cy: 0.3,
            r: 0.7
        },
        stops: [
            [0, color],
            [1, Highcharts.Color(color).brighten(-0.3).get('rgb')] // darken
        ]
    };
});
// Build the chart
$('#container-pie1').highcharts({
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
     colors:[
        '#90ED7D', 
        '#9ED7FF'
    ],
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            // depth: 50,
            dataLabels: {
                color:'black',
                enabled: true,
                formatter:function(){
                    return '<b>'+this.point.name+'</b>:'+this.point.percentage.toFixed(2)+"%";
                },
                connectorWidth:0,
                connectorPadding:0,
                distance:-100
            },
            showInLegend: true
    },
    },
    series: [{
        name: '数量',
        data: [
            { name: '人数', y:150 },
            { name: '次数', y: 90 }
        ]
        }]
    });
});

//活跃用户饼图
$(function () {
Highcharts.getOptions().colors = Highcharts.map(Highcharts.getOptions().colors, function (color) {
    return {
        radialGradient: {
            cx: 0.5,
            cy: 0.3,
            r: 0.7
        },
        stops: [
            [0, color],
            [1, Highcharts.Color(color).brighten(-0.3).get('rgb')] // darken
        ]
    };
});
// Build the chart
$('#container-pie2').highcharts({
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
     colors:[
        '#E7505A', 
        '#5C9BD1'
    ],
    plotOptions: {
        pie: {
            style: {fontSize:"18px", color :'#fff'  } ,
            allowPointSelect: true,
            cursor: 'pointer',
            // depth: 50,
            dataLabels: {
                color:'black',
                enabled: true,
                formatter:function(){
                    return '<b>'+this.point.name+'</b>:'+this.point.percentage.toFixed(2)+"%";
                },
                connectorWidth:0,
                connectorPadding:0,
                distance:-100
            },
            showInLegend: true,
    },
    },
    series: [{
        name: '数量',
        data: [
            { name: '人数', y:150 },
            { name: '次数', y: 90 }
        ]
        }]
    });
});

//累计用户饼图
$(function () {
Highcharts.getOptions().colors = Highcharts.map(Highcharts.getOptions().colors, function (color) {
    return {
        radialGradient: {
            cx: 0.5,
            cy: 0.3,
            r: 0.7
        },
        stops: [
            [0, color],
            [1, Highcharts.Color(color).brighten(-0.3).get('rgb')] // darken
        ]
    };
});
// Build the chart
$('#container-pie3').highcharts({
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
     colors:[
        '#3598DC', 
        '#F7CA18'
    ],
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            // depth: 50,
            dataLabels: {
                color:'black',
                enabled: true,
                formatter:function(){
                    return '<b>'+this.point.name+'</b>:'+this.point.percentage.toFixed(2)+"%";
                },
                connectorWidth:0,
                connectorPadding:0,
                distance:-100
            },
            showInLegend: true
    },
    },
    series: [{
        name: '数量',
        data: [
            { name: '人数', y:150 },
            { name: '次数', y: 90 }
        ]
        }]
    });
});
//SN码用户饼图
$(function () {
Highcharts.getOptions().colors = Highcharts.map(Highcharts.getOptions().colors, function (color) {
    return {
        radialGradient: {
            cx: 0.5,
            cy: 0.3,
            r: 0.7
        },
        stops: [
            [0, color],
            [1, Highcharts.Color(color).brighten(-0.3).get('rgb')] // darken
        ]
    };
});
// Build the chart
$('#container-pie4').highcharts({
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
     colors:[
        '#8E44AD', 
        '#E1E5EC'
    ],
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            // depth: 50,
            dataLabels: {
                color:'black',
                enabled: true,
                formatter:function(){
                    return '<b>'+this.point.name+'</b>:'+this.point.percentage.toFixed(2)+"%";
                },
                connectorWidth:0,
                connectorPadding:0,
                distance:-100
            },
            showInLegend: true
    },
    },
    series: [{
        name: '数量',
        data: [
            { name: '人数', y:150 },
            { name: '次数', y: 90 }
        ]
        }]
    });
});

//用户分析-KPI
//新增关注用户
$(function () {
    $('#user-container').highcharts({
        chart: {
            // backgroundColor: '#000',
            zoomType: 'xy'
        },
        title: {
            // text: 'Average Monthly Temperature and Rainfall in Tokyo'
        },
        subtitle: {
            // text: 'Source: WorldClimate.com'
        },
        xAxis: [{
            categories: ['2015/3/1', '2015/3/2', '2015/3/3', '2015/3/4', '2015/3/5', '2015/3/6','2015/3/7', '2015/3/8', '2015/3/9', '2015/3/10', '2015/3/11', '2015/3/12', '2015/3/13', '2015/3/14', '2015/3/15', '2015/3/16', '2015/3/17', '2015/3/18', '2015/3/19', '2015/3/20', '2015/3/21', '2015/3/22', '2015/3/23', '2015/3/24', '2015/3/25', '2015/3/26', '2015/3/27', '2015/3/28', '2015/3/29', '2015/12/30', '今日']
        }],
        yAxis: [{ // Primary yAxis
            labels: {
                format: '{value}人',
                style: {
                    color: '#89A54E'
                }
            },
            title: {
                // text: '曲线图',
                style: {
                    color: '#89A54E'
                }
            }
        }, { // Secondary yAxis
            title: {
                // text: '柱状图',
                style: {
                    color: '#4572A7'
                }
            },
            labels: {
                format: '{value} 人',
                style: {
                    color: '#4572A7'
                }
            },
            opposite: true
        }],
        tooltip: {
            shared: true
        },
        // legend: { //控制下面引导
        //     layout: 'vertical',
        //     align: 'left',
        //     x: 120,
        //     verticalAlign: 'top',
        //     y: 100,
        //     floating: true,
        //     backgroundColor: '#FFFFFF'
        // },
        plotOptions: {
            column: {
                stacking: 'parents'//控制柱状图重叠
            }
        },
        series: [{
            name: '新用户',
            color: '#3598DC',
            type: 'column',
            yAxis: 1,
            data: [20, 6, 9, 14, 18, 21, 25, 26, 23, 18, 13, 9, 6, 9, 14, 18, 21, 25, 26, 23, 6, 9, 14, 18, 21, 50, 26, 23, 18, 13, 13],
            tooltip: {
            valueSuffix: '人'
            }

        }, {
            name: '老用户',
            color: '#32C5D2',
            type: 'column',
            yAxis: 1,
            data: [49, 71, 80, 78, 90, 100, 95, 70, 85, 96, 105, 80, 71, 90, 100, 103, 97, 88, 100, 102, 90, 95, 103, 100, 105, 90, 70, 88, 100, 95, 95],
            tooltip: {
            valueSuffix: '人'
            }
        },{
            name: '新用户占比',
            color: '#2F353B',
            type: 'spline',
            data: [7, 6, 9, 14, 18, 21, 25, 26, 23, 18, 13, 9, 6, 9, 14, 18, 21, 25, 26, 23, 6, 9, 14, 18, 21, 25, 26, 23, 18, 13, 13],
            tooltip: {
            valueSuffix: '人'
            }
        }]
    });
});

//取消关注用户
$(function () {
    $('#user-container2').highcharts({
        chart: {
            // backgroundColor: '#000',
            zoomType: 'xy'
        },
        title: {
            // text: 'Average Monthly Temperature and Rainfall in Tokyo'
        },
        subtitle: {
            // text: 'Source: WorldClimate.com'
        },
        xAxis: [{
            categories: ['2015/3/1', '2015/3/2', '2015/3/3', '2015/3/4', '2015/3/5', '2015/3/6','2015/3/7', '2015/3/8', '2015/3/9', '2015/3/10', '2015/3/11', '2015/3/12', '2015/3/13', '2015/3/14', '2015/3/15', '2015/3/16', '2015/3/17', '2015/3/18', '2015/3/19', '2015/3/20', '2015/3/21', '2015/3/22', '2015/3/23', '2015/3/24', '2015/3/25', '2015/3/26', '2015/3/27', '2015/3/28', '2015/3/29', '2015/12/30', '今日']
        }],
        yAxis: [{ // Primary yAxis
            labels: {
                format: '{value}人',
                style: {
                    color: '#89A54E'
                }
            },
            title: {
                // text: '曲线图',
                style: {
                    color: '#89A54E'
                }
            }
        }, { // Secondary yAxis
            title: {
                // text: '柱状图',
                style: {
                    color: '#4572A7'
                }
            },
            labels: {
                format: '{value} 人',
                style: {
                    color: '#4572A7'
                }
            },
            opposite: true
        }],
        tooltip: {
            shared: true
        },
        // legend: { //控制下面引导
        //     layout: 'vertical',
        //     align: 'left',
        //     x: 120,
        //     verticalAlign: 'top',
        //     y: 100,
        //     floating: true,
        //     backgroundColor: '#FFFFFF'
        // },
        plotOptions: {
            column: {
                stacking: 'parents'//控制柱状图重叠
            }
        },
        series: [{
            name: '新用户',
            color: '#3598DC',
            type: 'column',
            yAxis: 1,
            data: [20, 6, 9, 14, 18, 21, 25, 26, 23, 18, 13, 9, 6, 9, 14, 18, 21, 25, 26, 23, 6, 9, 14, 18, 21, 50, 26, 23, 18, 13, 13],
            tooltip: {
            valueSuffix: '人'
            }

        }, {
            name: '老用户',
            color: '#32C5D2',
            type: 'column',
            yAxis: 1,
            data: [49, 71, 80, 78, 90, 100, 95, 70, 85, 96, 105, 80, 71, 90, 100, 103, 97, 88, 100, 102, 90, 95, 103, 100, 105, 90, 70, 88, 100, 95, 95],
            tooltip: {
            valueSuffix: '人'
            }
        },{
            name: '新用户占比',
            color: '#2F353B',
            type: 'spline',
            data: [7, 6, 9, 14, 18, 21, 25, 26, 23, 18, 13, 9, 6, 9, 14, 18, 21, 25, 26, 23, 6, 9, 14, 18, 21, 25, 26, 23, 18, 13, 13],
            tooltip: {
            valueSuffix: '人'
            }
        }]
    });
});

//净增关注用户
$(function () {
    $('#user-container3').highcharts({
        chart: {
            // backgroundColor: '#000',
            zoomType: 'xy'
        },
        title: {
            // text: 'Average Monthly Temperature and Rainfall in Tokyo'
        },
        subtitle: {
            // text: 'Source: WorldClimate.com'
        },
        xAxis: [{
            categories: ['2015/3/1', '2015/3/2', '2015/3/3', '2015/3/4', '2015/3/5', '2015/3/6','2015/3/7', '2015/3/8', '2015/3/9', '2015/3/10', '2015/3/11', '2015/3/12', '2015/3/13', '2015/3/14', '2015/3/15', '2015/3/16', '2015/3/17', '2015/3/18', '2015/3/19', '2015/3/20', '2015/3/21', '2015/3/22', '2015/3/23', '2015/3/24', '2015/3/25', '2015/3/26', '2015/3/27', '2015/3/28', '2015/3/29', '2015/12/30', '今日']
        }],
        yAxis: [{ // Primary yAxis
            labels: {
                format: '{value}人',
                style: {
                    color: '#89A54E'
                }
            },
            title: {
                // text: '曲线图',
                style: {
                    color: '#89A54E'
                }
            }
        }, { // Secondary yAxis
            title: {
                // text: '柱状图',
                style: {
                    color: '#4572A7'
                }
            },
            labels: {
                format: '{value} 人',
                style: {
                    color: '#4572A7'
                }
            },
            opposite: true
        }],
        tooltip: {
            shared: true
        },
        // legend: { //控制下面引导
        //     layout: 'vertical',
        //     align: 'left',
        //     x: 120,
        //     verticalAlign: 'top',
        //     y: 100,
        //     floating: true,
        //     backgroundColor: '#FFFFFF'
        // },
        plotOptions: {
            column: {
                stacking: 'parents'//控制柱状图重叠
            }
        },
        series: [{
            name: '新用户',
            color: '#3598DC',
            type: 'column',
            yAxis: 1,
            data: [20, 6, 9, 14, 18, 21, 25, 26, 23, 18, 13, 9, 6, 9, 14, 18, 21, 25, 26, 23, 6, 9, 14, 18, 21, 50, 26, 23, 18, 13, 13],
            tooltip: {
            valueSuffix: '人'
            }

        }, {
            name: '老用户',
            color: '#32C5D2',
            type: 'column',
            yAxis: 1,
            data: [49, 71, 80, 78, 90, 100, 95, 70, 85, 96, 105, 80, 71, 90, 100, 103, 97, 88, 100, 102, 90, 95, 103, 100, 105, 90, 70, 88, 100, 95, 95],
            tooltip: {
            valueSuffix: '人'
            }
        },{
            name: '新用户占比',
            color: '#2F353B',
            type: 'spline',
            data: [7, 6, 9, 14, 18, 21, 25, 26, 23, 18, 13, 9, 6, 9, 14, 18, 21, 25, 26, 23, 6, 9, 14, 18, 21, 25, 26, 23, 18, 13, 13],
            tooltip: {
            valueSuffix: '人'
            }
        }]
    });
});

//累计关注用户
$(function () {
    $('#user-container4').highcharts({
        chart: {
            // backgroundColor: '#000',
            zoomType: 'xy'
        },
        title: {
            // text: 'Average Monthly Temperature and Rainfall in Tokyo'
        },
        subtitle: {
            // text: 'Source: WorldClimate.com'
        },
        xAxis: [{
            categories: ['2015/3/1', '2015/3/2', '2015/3/3', '2015/3/4', '2015/3/5', '2015/3/6','2015/3/7', '2015/3/8', '2015/3/9', '2015/3/10', '2015/3/11', '2015/3/12', '2015/3/13', '2015/3/14', '2015/3/15', '2015/3/16', '2015/3/17', '2015/3/18', '2015/3/19', '2015/3/20', '2015/3/21', '2015/3/22', '2015/3/23', '2015/3/24', '2015/3/25', '2015/3/26', '2015/3/27', '2015/3/28', '2015/3/29', '2015/12/30', '今日']
        }],
        yAxis: [{ // Primary yAxis
            labels: {
                format: '{value}人',
                style: {
                    color: '#89A54E'
                }
            },
            title: {
                // text: '曲线图',
                style: {
                    color: '#89A54E'
                }
            }
        }, { // Secondary yAxis
            title: {
                // text: '柱状图',
                style: {
                    color: '#4572A7'
                }
            },
            labels: {
                format: '{value} 人',
                style: {
                    color: '#4572A7'
                }
            },
            opposite: true
        }],
        tooltip: {
            shared: true
        },
        // legend: { //控制下面引导
        //     layout: 'vertical',
        //     align: 'left',
        //     x: 120,
        //     verticalAlign: 'top',
        //     y: 100,
        //     floating: true,
        //     backgroundColor: '#FFFFFF'
        // },
        plotOptions: {
            column: {
                stacking: 'parents'//控制柱状图重叠
            }
        },
        series: [{
            name: '新用户',
            color: '#3598DC',
            type: 'column',
            yAxis: 1,
            data: [20, 6, 9, 14, 18, 21, 25, 26, 23, 18, 13, 9, 6, 9, 14, 18, 21, 25, 26, 23, 6, 9, 14, 18, 21, 50, 26, 23, 18, 13, 13],
            tooltip: {
            valueSuffix: '人'
            }

        }, {
            name: '老用户',
            color: '#32C5D2',
            type: 'column',
            yAxis: 1,
            data: [49, 71, 80, 78, 90, 100, 95, 70, 85, 96, 105, 80, 71, 90, 100, 103, 97, 88, 100, 102, 90, 95, 103, 100, 105, 90, 70, 88, 100, 95, 95],
            tooltip: {
            valueSuffix: '人'
            }
        },{
            name: '新用户占比',
            color: '#2F353B',
            type: 'spline',
            data: [7, 6, 9, 14, 18, 21, 25, 26, 23, 18, 13, 9, 6, 9, 14, 18, 21, 25, 26, 23, 6, 9, 14, 18, 21, 25, 26, 23, 18, 13, 13],
            tooltip: {
            valueSuffix: '人'
            }
        }]
    });
});

//活跃用户
$(function () {
    $('#user-container5').highcharts({
        chart: {
            // backgroundColor: '#000',
            zoomType: 'xy'
        },
        title: {
            // text: 'Average Monthly Temperature and Rainfall in Tokyo'
        },
        subtitle: {
            // text: 'Source: WorldClimate.com'
        },
        xAxis: [{
            categories: ['2015/3/1', '2015/3/2', '2015/3/3', '2015/3/4', '2015/3/5', '2015/3/6','2015/3/7', '2015/3/8', '2015/3/9', '2015/3/10', '2015/3/11', '2015/3/12', '2015/3/13', '2015/3/14', '2015/3/15', '2015/3/16', '2015/3/17', '2015/3/18', '2015/3/19', '2015/3/20', '2015/3/21', '2015/3/22', '2015/3/23', '2015/3/24', '2015/3/25', '2015/3/26', '2015/3/27', '2015/3/28', '2015/3/29', '2015/12/30', '今日']
        }],
        yAxis: [{ // Primary yAxis
            labels: {
                format: '{value}人',
                style: {
                    color: '#89A54E'
                }
            },
            title: {
                // text: '曲线图',
                style: {
                    color: '#89A54E'
                }
            }
        }, { // Secondary yAxis
            title: {
                // text: '柱状图',
                style: {
                    color: '#4572A7'
                }
            },
            labels: {
                format: '{value} 人',
                style: {
                    color: '#4572A7'
                }
            },
            opposite: true
        }],
        tooltip: {
            shared: true
        },
        // legend: { //控制下面引导
        //     layout: 'vertical',
        //     align: 'left',
        //     x: 120,
        //     verticalAlign: 'top',
        //     y: 100,
        //     floating: true,
        //     backgroundColor: '#FFFFFF'
        // },
        plotOptions: {
            column: {
                stacking: 'parents'//控制柱状图重叠
            }
        },
        series: [{
            name: '新用户',
            color: '#3598DC',
            type: 'column',
            yAxis: 1,
            data: [20, 6, 9, 14, 18, 21, 25, 26, 23, 18, 13, 9, 6, 9, 14, 18, 21, 25, 26, 23, 6, 9, 14, 18, 21, 50, 26, 23, 18, 13, 13],
            tooltip: {
            valueSuffix: '人'
            }

        }, {
            name: '老用户',
            color: '#32C5D2',
            type: 'column',
            yAxis: 1,
            data: [49, 71, 80, 78, 90, 100, 95, 70, 85, 96, 105, 80, 71, 90, 100, 103, 97, 88, 100, 102, 90, 95, 103, 100, 105, 90, 70, 88, 100, 95, 95],
            tooltip: {
            valueSuffix: '人'
            }
        },{
            name: '新用户占比',
            color: '#2F353B',
            type: 'spline',
            data: [7, 6, 9, 14, 18, 21, 25, 26, 23, 18, 13, 9, 6, 9, 14, 18, 21, 25, 26, 23, 6, 9, 14, 18, 21, 25, 26, 23, 18, 13, 13],
            tooltip: {
            valueSuffix: '人'
            }
        }]
    });
});

// 用户分组、增长页面
//新增用户饼图
$(function () {
Highcharts.getOptions().colors = Highcharts.map(Highcharts.getOptions().colors, function (color) {
    return {
        radialGradient: {
            cx: 0.5,
            cy: 0.3,
            r: 0.7
        },
        stops: [
            [0, color],
            [1, Highcharts.Color(color).brighten(-0.3).get('rgb')] // darken
        ]
    };
});
// Build the chart
$('#group-pie1').highcharts({
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
     colors:[
        '#90ED7D', 
        '#9ED7FF'
    ],
    plotOptions: {
        pie: {
            // size:80,//饼状图大小
            innerSize:'100',//饼状图内径大小
            allowPointSelect: true,
            cursor: 'pointer',
            // depth: 50,
            dataLabels: {
                color:'black',
                enabled: true,
                formatter:function(){
                    return '<b>'+this.point.name+'</b>:'+this.point.percentage.toFixed(2)+"%";
                },
                connectorWidth:0,
                connectorPadding:0,
                distance:-60
            },
            showInLegend: true
    },
    },
    series: [{
        name: '数量',
        data: [
            { name: '人数', y:150 },
            { name: '次数', y: 90 }
        ]
        }]
    });
});

//活跃用户饼图
$(function () {
Highcharts.getOptions().colors = Highcharts.map(Highcharts.getOptions().colors, function (color) {
    return {
        radialGradient: {
            cx: 0.5,
            cy: 0.3,
            r: 0.7
        },
        stops: [
            [0, color],
            [1, Highcharts.Color(color).brighten(-0.3).get('rgb')] // darken
        ]
    };
});
// Build the chart
$('#group-pie2').highcharts({
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
     colors:[
        '#E7505A', 
        '#5C9BD1'
    ],
    plotOptions: {
        pie: {
            // size:80,//饼状图大小
            innerSize:'100',//饼状图内径大小
            style: {fontSize:"18px", color :'#fff'  } ,
            allowPointSelect: true,
            cursor: 'pointer',
            // depth: 50,
            dataLabels: {
                color:'black',
                enabled: true,
                formatter:function(){
                    return '<b>'+this.point.name+'</b>:'+this.point.percentage.toFixed(2)+"%";
                },
                connectorWidth:0,
                connectorPadding:0,
                distance:-60
            },
            showInLegend: true,
    },
    },
    series: [{
        name: '数量',
        data: [
            { name: '人数', y:150 },
            { name: '次数', y: 90 }
        ]
        }]
    });
});

//累计用户饼图
$(function () {
Highcharts.getOptions().colors = Highcharts.map(Highcharts.getOptions().colors, function (color) {
    return {
        radialGradient: {
            cx: 0.5,
            cy: 0.3,
            r: 0.7
        },
        stops: [
            [0, color],
            [1, Highcharts.Color(color).brighten(-0.3).get('rgb')] // darken
        ]
    };
});
// Build the chart
$('#group-pie3').highcharts({
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
     colors:[
        '#3598DC', 
        '#F7CA18'
    ],
    plotOptions: {
        pie: {
            // size:80,//饼状图大小
            innerSize:'100',//饼状图内径大小
            allowPointSelect: true,
            cursor: 'pointer',
            // depth: 50,
            dataLabels: {
                color:'black',
                enabled: true,
                formatter:function(){
                    return '<b>'+this.point.name+'</b>:'+this.point.percentage.toFixed(2)+"%";
                },
                connectorWidth:0,
                connectorPadding:0,
                distance:-60
            },
            showInLegend: true
    },
    },
    series: [{
        name: '数量',
        data: [
            { name: '人数', y:150 },
            { name: '次数', y: 90 }
        ]
        }]
    });
});
//浏览器用户饼图
$(function () {
Highcharts.getOptions().colors = Highcharts.map(Highcharts.getOptions().colors, function (color) {
    return {
        radialGradient: {
            cx: 0.5,
            cy: 0.3,
            r: 0.7
        },
        stops: [
            [0, color],
            [1, Highcharts.Color(color).brighten(-0.3).get('rgb')] // darken
        ]
    };
});
// Build the chart
$('#group-pie4').highcharts({
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
     colors:[
        '#8E44AD', 
        '#E1E5EC'
    ],
    plotOptions: {
        pie: {
            // size:80,//饼状图大小
            innerSize:'100',//饼状图内径大小
            allowPointSelect: true,
            cursor: 'pointer',
            // depth: 50,
            dataLabels: {
                color:'black',
                enabled: true,
                formatter:function(){
                    return '<b>'+this.point.name+'</b>:'+this.point.percentage.toFixed(2)+"%";
                },
                connectorWidth:0,
                connectorPadding:0,
                distance:-60
            },
            showInLegend: true
    },
    },
    series: [{
        name: '数量',
        data: [
            { name: '人数', y:150 },
            { name: '次数', y: 90 }
        ]
        }]
    });
});
//曲线图
//新增用户
$(function () {
    Highcharts.setOptions({  //设置曲线图颜色
        colors: ['#337ab7']
    });
    $('#group-line').highcharts({
        chart: {
            // backgroundColor: '#303031',       
            type: 'spline',
            colors: ['#000'] 
        },
        marker: {
                    enabled: false,
                    states:{
                        hover:{
                            enabled: false
                        }
                    },
                    symbol: 'circle'
                },

        xAxis: {
            categories: ['2015/3/1', '2015/3/2', '2015/3/3', '2015/3/4', '2015/3/5', '2015/3/6','2015/3/7', '2015/3/8', '2015/3/9', '2015/3/10', '2015/3/11', '2015/3/12', '2015/3/13', '2015/3/14', '2015/3/15', '2015/3/16', '2015/3/17', '2015/3/18', '2015/3/19', '2015/3/20', '2015/3/21', '2015/3/22', '2015/3/23', '2015/3/24', '2015/3/25', '2015/3/26', '2015/3/27', '2015/3/28', '2015/3/29', '2015/12/30', '今日'],
            lineWidth :0,                    //去掉x轴线
            tickWidth:0,                    //去掉x轴线
            crosshair: true,
        },
        yAxis: [{ // Primary yAxis  
                    min:0, // 定义最小值  
                    minPadding: 0.2,   
                    maxPadding: 0.2,  
                    tickInterval:1, // 刻度值  
                    title: {  
                        style: {  
                            color: '#000'   //Y轴文字颜色
                        }  
                    },  
                    labels: {  
                        format: '{value}人',//Y轴后缀名字  
                    }, 
                }],          
        // legend: {                                   //关闭下面的线
        //     enabled: false
        // },
        series: [{
            name:'新用户',
            marker: {
            // enabled: false
        },
            data: [1, 5, 7, 8, 2, 12, 3, 8, 10, 11, 3, 7, 8, 2, 1, 8, 9, 5, 5, 3, 13, 1, 1, 2, 7, 1, 4, 6, 7,6,9]
        }]
    });
});

//活跃用户
$(function () {
    Highcharts.setOptions({         //设置曲线图颜色
        colors: ['#e7505a']
    });
    $('#group-line2').highcharts({
        chart: {
            type: 'spline',
            colors: ['#000'] 
        },
        marker: {
                    enabled: false,
                    states:{
                        hover:{
                            enabled: false
                        }
                    },
                    symbol: 'circle'
                },

        xAxis: {
            categories: ['2015/3/1', '2015/3/2', '2015/3/3', '2015/3/4', '2015/3/5', '2015/3/6','2015/3/7', '2015/3/8', '2015/3/9', '2015/3/10', '2015/3/11', '2015/3/12', '2015/3/13', '2015/3/14', '2015/3/15', '2015/3/16', '2015/3/17', '2015/3/18', '2015/3/19', '2015/3/20', '2015/3/21', '2015/3/22', '2015/3/23', '2015/3/24', '2015/3/25', '2015/3/26', '2015/3/27', '2015/3/28', '2015/3/29', '2015/12/30', '今日'],
            lineWidth :0,                    //去掉x轴线
            tickWidth:0,                    //去掉x轴线
            crosshair: true,
        },
        yAxis: [{ // Primary yAxis  
                    min:0, // 定义最小值  
                    minPadding: 0.2,   
                    maxPadding: 0.2,  
                    tickInterval:1, // 刻度值  
                    title: {  
                        style: {  
                            color: '#000'   //Y轴文字颜色
                        }  
                    },  
                    labels: {  
                        format: '{value}人',//Y轴后缀名字  
                    }, 
                }],          
        // legend: {                                   //关闭下面的线
        //     enabled: false
        // },
        series: [{
            name:'活跃用户',
            marker: {
            // enabled: false
        },
            data: [1, 5, 7, 8, 2, 12, 3, 8, 10, 11, 3, 7, 8, 2, 1, 8, 9, 5, 5, 3, 13, 1, 1, 2, 7, 1, 4, 6, 7,6,9]
        }]
    });
});

//沉默用户面积图
$(function () {
    $('#group-line3').highcharts({
        chart: {
            type: 'area'
        },
        title: {
            // text: 'US and USSR nuclear stockpiles'
        },
        subtitle: {
            // text: 'Source: <a href="http://thebulletin.metapress.com/content/c4120650912x74k7/fulltext.pdf">' +
            //     'thebulletin.metapress.com</a>'
        },
        xAxis: {
            categories: ['2015/3/1', '2015/3/2', '2015/3/3', '2015/3/4', '2015/3/5', '2015/3/6','2015/3/7', '2015/3/8', '2015/3/9', '2015/3/10', '2015/3/11', '2015/3/12', '2015/3/13', '2015/3/14', '2015/3/15', '2015/3/16', '2015/3/17', '2015/3/18', '2015/3/19', '2015/3/20', '2015/3/21', '2015/3/22', '2015/3/23', '2015/3/24', '2015/3/25', '2015/3/26', '2015/3/27', '2015/3/28', '2015/3/29', '2015/12/30', '今日'],

        },
        yAxis: {
            title: {
                // text: 'Nuclear weapon states'
            },
        },
        tooltip: {
            pointFormat: '{series.name} 数量 <b>{point.y:,.0f}</b><br/>时间{point.x}'
        },
        plotOptions: {
            area: {
                // pointStart: 2016/4/1,
                marker: {
                    enabled: false,
                    symbol: 'circle',
                    radius: 2,
                    states: {
                        hover: {
                            enabled: true
                        }
                    }
                }
            }
        },
        series: [{
            color:'#3598DC',
            name: '新增用户',
            data: [1436, 3057, 4618, 9822, 15468, 9822, 11, 32, 110, 235, 369, 640,
                1005, 1436, 2063, 3057, 4618, 6444, 9822, 15468, 20434, 24126,
                27387, 29459, 31056, 31982, 32040, 31233, 29224, 27342, 26662]
        }, {
            color:'578EBE',
            name: '沉默用户',
            data: [1436, 3057, 4618, 9822, 15468,1436, 3057, 4618, 9822, 15468,
                5, 25, 50, 120, 150, 200, 426, 660, 869, 1060, 1605, 2471, 3322,
                4238, 5221, 6129, 7089, 8339, 9399, 9399, 9399]
        }]
    });
});
//SN码用户
$(function () {
    Highcharts.setOptions({         //设置曲线图颜色
        colors: ['#8E44AD']
    });
    $('#group-line4').highcharts({
        chart: {
            type: 'spline',
            colors: ['#000'] 
        },
        marker: {
                    enabled: false,
                    states:{
                        hover:{
                            enabled: false
                        }
                    },
                    symbol: 'circle'
                },

        xAxis: {
            categories: ['2015/3/1', '2015/3/2', '2015/3/3', '2015/3/4', '2015/3/5', '2015/3/6','2015/3/7', '2015/3/8', '2015/3/9', '2015/3/10', '2015/3/11', '2015/3/12', '2015/3/13', '2015/3/14', '2015/3/15', '2015/3/16', '2015/3/17', '2015/3/18', '2015/3/19', '2015/3/20', '2015/3/21', '2015/3/22', '2015/3/23', '2015/3/24', '2015/3/25', '2015/3/26', '2015/3/27', '2015/3/28', '2015/3/29', '2015/12/30', '今日'],
            lineWidth :0,                    //去掉x轴线
            tickWidth:0,                    //去掉x轴线
            crosshair: true,
        },
        yAxis: [{ // Primary yAxis  
                    min:0, // 定义最小值  
                    minPadding: 0.2,   
                    maxPadding: 0.2,  
                    tickInterval:1, // 刻度值  
                    title: {  
                        style: {  
                            color: '#000'   //Y轴文字颜色
                        }  
                    },  
                    labels: {  
                        format: '{value}人',//Y轴后缀名字  
                    }, 
                }],          
        // legend: {                                   //关闭下面的线
        //     enabled: false
        // },
        series: [{
            name:'SN码用户',
            marker: {
            // enabled: false
        },
            data: [1, 5, 7, 8, 2, 12, 3, 8, 10, 11, 3, 7, 8, 2, 1, 8, 9, 5, 5, 3, 13, 1, 1, 2, 7, 1, 4, 6, 7,6,9]
        }]
    });
});
//属性分布页面
//男女分布
$(function () {
    $('#g-b-containe').highcharts({
        chart: {
            type: 'bar'
        },
        // title: {
        //     text: 'Stacked bar chart'
        // },
        xAxis: {
            categories: ['2015/3/1','2015/3/2','2015/3/3']
        },
        yAxis: {
            // min: 0,
            // title: {
            //     text: 'Total fruit consumption'
            // }
        },
        legend: {
            reversed: true
        },
        plotOptions: {
            series: {
                stacking: 'normal'
            }
        },
        series: [{
            color:'#26C281',
            name: '男',
            data: [5,5,5]
        }, {
            color:'#3598DC',
            name: '女',
            data: [2,2,2]
        }, {
            color:'#F7CA18',
            name: '其他',
            data: [3,3,3]
        }]
    });
});
//终端分布
$(function () {
Highcharts.getOptions().colors = Highcharts.map(Highcharts.getOptions().colors, function (color) {
    return {
        radialGradient: {
            cx: 0.5,
            cy: 0.3,
            r: 0.7
        },
        stops: [
            [0, color],
            [1, Highcharts.Color(color).brighten(-0.3).get('rgb')] // darken
        ]
    };
});
// Build the chart
$('#tercontaine').highcharts({
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
     colors:[
        '#90ED7D', 
        '#9ED7FF'
    ],
    plotOptions: {
        pie: {
            // size:80,//饼状图大小
            innerSize:'100',//饼状图内径大小
            allowPointSelect: true,
            cursor: 'pointer',
            // depth: 50,
            dataLabels: {
                color:'black',
                enabled: true,
                formatter:function(){
                    return '<b>'+this.point.name+'</b>:'+this.point.percentage.toFixed(2)+"%";
                },
                connectorWidth:0,
                connectorPadding:0,
                distance:-60
            },
            showInLegend: true
    },
    },
    series: [{
        name: '数量',
        data: [
            { name: '人数', y:150 },
            { name: '次数', y: 90 }
        ]
        }]
    });
});

//产品机型
$(function () {
    $('#procontaine').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            // text: 'Monthly Average Rainfall'
        },
        subtitle: {
            // text: 'Source: WorldClimate.com'
        },
        xAxis: {
            categories:['2015/3/1', '2015/3/2', '2015/3/3', '2015/3/4', '2015/3/5', '2015/3/6','2015/3/7', '2015/3/8', '2015/3/9', '2015/3/10', '2015/3/11', '2015/3/12', '2015/3/13', '2015/3/14', '2015/3/15', '2015/3/16', '2015/3/17', '2015/3/18', '2015/3/19', '2015/3/20', '2015/3/21', '2015/3/22', '2015/3/23', '2015/3/24', '2015/3/25', '2015/3/26', '2015/3/27', '2015/3/28', '2015/3/29', '2015/12/30', '今日'],
            crosshair: true
        },
        yAxis: {

        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            color:'#2F353B',
            name: 'Tokyo',
            data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]

        }, {
            color:'#3598DC',
            name: 'New York',
            data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3]

        }, {
            color:'#E7505A',
            name: 'London',
            data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2]

        }, {
            color:'#8E44AD',
            name: 'Berlin',
            data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1]

        }]
    });
});

//留存用户页面
$(function () {
    $('#stack-container1').highcharts({
        chart: {
            type: 'areaspline',

        },
        title: {
            // text: 'Average fruit consumption during one week'
        },
        legend: {
            // layout: 'vertical',
            // align: 'left',
            // verticalAlign: 'top',
            // x: 150,
            // y: 100,
            // floating: true,
            // borderWidth: 1,
            // backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
        },
        xAxis: {
            categories: ['2015/3/1', '2015/3/2', '2015/3/3', '2015/3/4', '2015/3/5', '2015/3/6','2015/3/7', '2015/3/8', '2015/3/9', '2015/3/10', '2015/3/11', '2015/3/12', '2015/3/13', '2015/3/14', '2015/3/15', '2015/3/16', '2015/3/17', '2015/3/18', '2015/3/19', '2015/3/20', '2015/3/21', '2015/3/22', '2015/3/23', '2015/3/24', '2015/3/25', '2015/3/26', '2015/3/27', '2015/3/28', '2015/3/29', '2015/12/30', '今日'],
            plotBands: [{ // visualize the weekend
                // from: 4.5,
                // to: 6.5,
                // color: 'rgba(68, 170, 213, .2)'
            }]
        },
        yAxis: {
            title: {
                // text: 'Fruit units'
            }
        },
        tooltip: {
            shared: true,
            // valueSuffix: ' units'
        },
        credits: {
            enabled: false
        },
        plotOptions: {
               series: {
                marker: {
                    enabled: false
                }
            },
            areaspline: {
                fillOpacity: 0.5
            }
        },
        series: [{
            color:'#32C5D2',
            name: 'John',
            data: [0, 4, 3, 5, 4, 10, 12]
        }, {
            color:'#E5E5E5',
            name: 'Jane',
            data: [0, 3, 4, 7, 8, 5, 4]
        }, {
            color:'#F4D03F',
            name: 'aa',
            data: [0, 6, 4, 3, 3, 5, 4]
        }]
    });
});
//用户互动频次
$(function () {
    $('#interact-container1').highcharts({
        chart: {
            type: 'column'
        },
        // title: {
        //     text: 'Stacked column chart'
        // },
        xAxis: {
            categories: ['2015/3/1', '2015/3/2', '2015/3/3', '2015/3/4', '2015/3/5', '2015/3/6','2015/3/7', '2015/3/8', '2015/3/9', '2015/3/10', '2015/3/11', '2015/3/12', '2015/3/13', '2015/3/14', '2015/3/15', '2015/3/16', '2015/3/17', '2015/3/18', '2015/3/19', '2015/3/20', '2015/3/21', '2015/3/22', '2015/3/23', '2015/3/24', '2015/3/25', '2015/3/26', '2015/3/27', '2015/3/28', '2015/3/29', '2015/12/30', '今日'],
        },
        yAxis: {
            // min: 0,
            title: {
                // text: 'Total fruit consumption'
            },
            stackLabels: {
                enabled: true,
                style: {
                    // fontWeight: 'bold',
                    // color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                }
            }
        },
        legend: {
            // align: 'right',
            // x: -30,
            // verticalAlign: 'top',
            // y: 25,
            // floating: true,
            // // backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
            // // borderColor: '#CCC',
            // borderWidth: 1,
            // shadow: false
        },
        // tooltip: {
        //     headerFormat: '<b>{point.x}</b><br/>',
        //     pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
        // },
        plotOptions: {
            series: {
               pointPadding: 0.5, //数据点之间的距离值
               groupPadding: 0.5, //分组之间的距离值
               borderWidth: 0.5,
               shadow: true,
               pointWidth:50 //柱子之间的距离值
           },
            column: {
                stacking: 'normal'//控制柱状图重叠
            }
        },
        series: [{
            color:'#F4D03F',
            name: 'a',
            data: [100,100,100,100]
        }, {
            color:'#F3C200',
            name: 'b',
            data: [130,130,130,130]
        }, {
            color:'#F2784B',
            name: 'c',
            data: [140,140,140,140]
        }, {
            color:'#E87E04',
            name: 'd',
            data: [150,150,150,150]
        }, {
            color:'#EF4836',
            name: 'e',
            data: [400,400,400,400]
        }, {
            color:'#D91E18',
            name: 'f',
            data: [1000,1000,1000,1000]
        }]
    });
});
// 用户来源TOP10页面
$(function () {
    $('#source-container1').highcharts({
        title: {
            // text: 'Monthly Average Temperature',
            // x: -20 //center
        },
        subtitle: {
            // text: 'Source: WorldClimate.com',
            // x: -20
        },
        xAxis: {
            categories: ['2015/3/1', '2015/3/2', '2015/3/3', '2015/3/4', '2015/3/5', '2015/3/6','2015/3/7', '2015/3/8', '2015/3/9', '2015/3/10', '2015/3/11', '2015/3/12', '2015/3/13', '2015/3/14', '2015/3/15', '2015/3/16', '2015/3/17', '2015/3/18', '2015/3/19', '2015/3/20', '2015/3/21', '2015/3/22', '2015/3/23', '2015/3/24', '2015/3/25', '2015/3/26', '2015/3/27', '2015/3/28', '2015/3/29', '2015/12/30', '今日'],
        },
        yAxis: {
            title: {
                // text: 'Temperature (째C)'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: '人'
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            color:'#3598DC',
            name: 'APP Store1',
            data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
        }, {
            color:'#2F353B',
            name: '123',
            data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
        }, {
            color:'#1BBC9B',
            name: 'Umeng',
            data: [2,3, 5, 11, 16, 21, 24, 24, 20, 14, 6, 5]
        }, {
            color:'#E87E04',
            name: 'channel',
            data: [3,8, 5, 11, 17, 20, 28, 24, 20, 11, 8, 2]
        }]
    });
})
//用户来源-渠道分析页面
//微信后台
$(function () {
Highcharts.getOptions().colors = Highcharts.map(Highcharts.getOptions().colors, function (color) {
    return {
        radialGradient: {
            cx: 0.5,
            cy: 0.3,
            r: 0.7
        },
        stops: [
            [0, color],
            [1, Highcharts.Color(color).brighten(-0.3).get('rgb')] // darken
        ]
    };
});
// Build the chart
$('#stat-container1').highcharts({
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
     colors:[
        '#90ED7D', 
        '#9ED7FF',
        '#EF4836',
        '#3598DC',
        '#F7CA18',
    ],
    plotOptions: {
        pie: {
            // size:80,//饼状图大小
            innerSize:'150',//饼状图内径大小
            allowPointSelect: true,
            cursor: 'pointer',
            // depth: 50,
            dataLabels: {
                color:'black',
                enabled: true,
                formatter:function(){
                    return '<b>'+this.point.name+'</b>:'+this.point.percentage.toFixed(2)+"%";
                },
                connectorWidth:0,
                connectorPadding:0,
                distance:-40
            },
            showInLegend: true
    },
    },
    series: [{
        name: '数量',
        data: [
            { name: '公众会话', y:150 },
            { name: '好友转发', y:60 },
            { name: '朋友圈', y:70 },
            { name: '历史消息', y:80 },
            { name: '其他', y: 90 }
        ]
        }]
    });
});

//大后台
$(function () {
Highcharts.getOptions().colors = Highcharts.map(Highcharts.getOptions().colors, function (color) {
    return {
        radialGradient: {
            cx: 0.5,
            cy: 0.3,
            r: 0.7
        },
        stops: [
            [0, color],
            [1, Highcharts.Color(color).brighten(-0.3).get('rgb')] // darken
        ]
    };
});
// Build the chart
$('#stat-container2').highcharts({
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
     colors:[
        '#90ED7D', 
        '#9ED7FF',
        '#EF4836',
        '#3598DC',
        '#F7CA18',
    ],
    plotOptions: {
        pie: {
            // size:80,//饼状图大小
            innerSize:'150',//饼状图内径大小
            allowPointSelect: true,
            cursor: 'pointer',
            // depth: 50,
            dataLabels: {
                color:'black',
                enabled: true,
                formatter:function(){
                    return '<b>'+this.point.name+'</b>:'+this.point.percentage.toFixed(2)+"%";
                },
                connectorWidth:0,
                connectorPadding:0,
                distance:-40
            },
            showInLegend: true
    },
    },
    series: [{
        name: '数量',
        data: [
            { name: '公众会话', y:150 },
            { name: '好友转发', y:60 },
            { name: '朋友圈', y:70 },
            { name: '历史消息', y:80 },
            { name: '其他', y: 90 }
        ]
        }]
    });
});


//阅读发展-1趋势
$(function () {
    Highcharts.setOptions({  //设置曲线图颜色
        colors: ['#337ab7']
    });
    $('#stat-line1').highcharts({
        chart: {
            // backgroundColor: '#303031',       
            type: 'spline',
            colors: ['#000'] 
        },
        marker: {
                    enabled: false,
                    states:{
                        hover:{
                            enabled: false
                        }
                    },
                    symbol: 'circle'
                },

        xAxis: {
            categories: ['2015/3/1', '2015/3/2', '2015/3/3', '2015/3/4', '2015/3/5', '2015/3/6','2015/3/7', '2015/3/8', '2015/3/9', '2015/3/10', '2015/3/11', '2015/3/12', '2015/3/13', '2015/3/14', '2015/3/15', '2015/3/16', '2015/3/17', '2015/3/18', '2015/3/19', '2015/3/20', '2015/3/21', '2015/3/22', '2015/3/23', '2015/3/24', '2015/3/25', '2015/3/26', '2015/3/27', '2015/3/28', '2015/3/29', '2015/12/30', '今日'],
            lineWidth :0,                    //去掉x轴线
            tickWidth:0,                    //去掉x轴线
            crosshair: true,
        },
        yAxis: [{ // Primary yAxis  
                    min:0, // 定义最小值  
                    minPadding: 0.2,   
                    maxPadding: 0.2,  
                    tickInterval:1, // 刻度值  
                    title: {  
                        style: {  
                            color: '#000'   //Y轴文字颜色
                        }  
                    },  
                    labels: {  
                        format: '{value}人',//Y轴后缀名字  
                    }, 
                }],          
        // legend: {                                   //关闭下面的线
        //     enabled: false
        // },
        series: [{
            name:'新用户',
            marker: {
            // enabled: false
        },
            data: [7500, 7400, 7300, 7200, 7100, 7000, 6900, 6800, 6700, 6600, 6500,6500, 6500, 6500, 6500, 6500, 6200, 6100, 6000, 5900, 5800, 5700, 5600, 5500, 5400, 5300, 5200, 5100, 5000,4900,4800]
        }]
    });
});
//转化率页面
//送达后转化率
$(function () {
    $('#change-containe').highcharts({
        chart: {
            type: 'bar'
        },
        title: {
            // text: 'Historic World Population by Region'
        },
        subtitle: {
            // text: 'Source: <a href="https://en.wikipedia.org/wiki/World_population">Wikipedia.org</a>'
        },
        xAxis: {
            categories: ['送达', '公众号会话阅读', '从公众号分享到朋友圈', '在朋友圈两次分享', '在朋友圈阅读'],
            title: {
                text: null
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Population (millions)',
                align: 'high'
            },
            labels: {
                overflow: 'justify'
            }
        },
        tooltip: {
            valueSuffix: ' millions'
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true
                }
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            x: -40,
            y: 80,
            floating: true,
            borderWidth: 1,
            backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
            shadow: true
        },
        credits: {
            enabled: false
        },
        series: [{
            color:'#3598DC',
            name: '一次传播',
            data: [107, 31, 635, 203,200]
        }, {
            color:'#26C281',
            name: '二次传播',
            data: [133, 156, 947, 408, 600]
        }]
    });
});
//渠道趋势微信
//全部渠道
$(function () {
    $('#change-line1').highcharts({
        title: {
            // text: 'Monthly Average Temperature',
            // x: -20 //center
        },
        subtitle: {
            // text: 'Source: WorldClimate.com',
            // x: -20
        },
        xAxis: {
            categories: ['2015/3/1', '2015/3/2', '2015/3/3', '2015/3/4', '2015/3/5', '2015/3/6','2015/3/7', '2015/3/8', '2015/3/9', '2015/3/10', '2015/3/11', '2015/3/12', '2015/3/13', '2015/3/14', '2015/3/15', '2015/3/16', '2015/3/17', '2015/3/18', '2015/3/19', '2015/3/20', '2015/3/21', '2015/3/22', '2015/3/23', '2015/3/24', '2015/3/25', '2015/3/26', '2015/3/27', '2015/3/28', '2015/3/29', '2015/12/30', '今日'],
        },
        yAxis: {
            title: {
                // text: 'Temperature (째C)'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: '人'
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            color:'#3598DC',
            name: '图文页阅读次数',
            data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
        }, {
            color:'#2F353B',
            name: '图文页阅读人数',
            data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
        }]
    });
});
//大后台
$(function () {
    $('#big-change-line1').highcharts({
        title: {
            // text: 'Monthly Average Temperature',
            // x: -20 //center
        },
        subtitle: {
            // text: 'Source: WorldClimate.com',
            // x: -20
        },
        xAxis: {
            categories: ['2015/3/1', '2015/3/2', '2015/3/3', '2015/3/4', '2015/3/5', '2015/3/6','2015/3/7', '2015/3/8', '2015/3/9', '2015/3/10', '2015/3/11', '2015/3/12', '2015/3/13', '2015/3/14', '2015/3/15', '2015/3/16', '2015/3/17', '2015/3/18', '2015/3/19', '2015/3/20', '2015/3/21', '2015/3/22', '2015/3/23', '2015/3/24', '2015/3/25', '2015/3/26', '2015/3/27', '2015/3/28', '2015/3/29', '2015/12/30', '今日'],
        },
        yAxis: {
            title: {
                // text: 'Temperature (째C)'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: '人'
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            color:'#32C5D2',
            name: '图文页阅读次数',
            data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
        }, {
            color:'#9B59B6',
            name: '图文页阅读人数',
            data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
        }]
    });
});
// H5运营分析-kpi页面
// TOP热点BUTTON 10
$(function () {
    $('#h5-kpi-container').highcharts({
        title: {
            // text: 'Monthly Average Temperature',
            // x: -20 //center
        },
        subtitle: {
            // text: 'Source: WorldClimate.com',
            // x: -20
        },
        xAxis: {
            categories: ['2015/3/1', '2015/3/2', '2015/3/3', '2015/3/4', '2015/3/5', '2015/3/6','2015/3/7', '2015/3/8', '2015/3/9', '2015/3/10', '2015/3/11', '2015/3/12', '2015/3/13', '2015/3/14', '2015/3/15', '2015/3/16', '2015/3/17', '2015/3/18', '2015/3/19', '2015/3/20', '2015/3/21', '2015/3/22', '2015/3/23', '2015/3/24', '2015/3/25', '2015/3/26', '2015/3/27', '2015/3/28', '2015/3/29', '2015/12/30', '今日'],
        },
        yAxis: {
            title: {
                // text: 'Temperature (째C)'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: '人'
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            color:'#3598DC',
            name: 'a',
            data: [7, 6, 9, 14, 18, 21, 25, 26, 23, 18, 13, 9]
        }, {
            color:'#2F353B',
            name: 'b',
            data: [2, 0.8, 5.7, 11, 17, 22, 24, 24, 20, 14, 8, 2]
        },{
            color:'#E87E04',
            name: 'c',
            data: [3,8, 5, 11, 17, 20, 28, 24, 20, 11, 8, 2]
        }]
    });
})
//H5运营分析H5-KPI页面
//营销链导入分布
$(function () {
Highcharts.getOptions().colors = Highcharts.map(Highcharts.getOptions().colors, function (color) {
    return {
        radialGradient: {
            cx: 0.5,
            cy: 0.3,
            r: 0.7
        },
        stops: [
            [0, color],
            [1, Highcharts.Color(color).brighten(-0.3).get('rgb')] // darken
        ]
    };
});
$('#h5-kpi2-container').highcharts({
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
     colors:[
        '#90ED7D', 
        '#9ED7FF'
    ],
    plotOptions: {
        pie: {
            // size:80,//饼状图大小
            innerSize:'150',//饼状图内径大小
            allowPointSelect: true,
            cursor: 'pointer',
            // depth: 50,
            dataLabels: {
                color:'black',
                enabled: true,
                formatter:function(){
                    return '<b>'+this.point.name+'</b>';
                },
                connectorWidth:0,
                connectorPadding:0,
                distance:-40
            },
            showInLegend: true
    },
    },
    series: [{
        name: '数量',
        data: [
            { name: '3.2', y:150 },
            { name: '3.0', y:60 }
        ]
        }]
    });
});
//一级二级
$(function () {
    $('#h5-kpi3-container').highcharts({
        title: {
            // text: 'Monthly Average Temperature',
            // x: -20 //center
        },
        subtitle: {
            // text: 'Source: WorldClimate.com',
            // x: -20
        },
        xAxis: {
            categories: ['2015/3/1', '2015/3/2', '2015/3/3', '2015/3/4', '2015/3/5', '2015/3/6','2015/3/7', '2015/3/8', '2015/3/9', '2015/3/10', '2015/3/11', '2015/3/12', '2015/3/13', '2015/3/14', '2015/3/15', '2015/3/16', '2015/3/17', '2015/3/18', '2015/3/19', '2015/3/20', '2015/3/21', '2015/3/22', '2015/3/23', '2015/3/24', '2015/3/25', '2015/3/26', '2015/3/27', '2015/3/28', '2015/3/29', '2015/12/30', '今日'],
        },
        yAxis: {
            title: {
                // text: 'Temperature (째C)'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: '人'
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            color:'#3598DC',
            name: 'a',
            data: [7, 6, 9, 14, 18, 21, 25, 26, 23, 18, 13, 9]
        }]
    });
});

//用户来源分析-维度
$(function () {
    $('#user-from').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            // text: 'Monthly Average Rainfall'
        },
        subtitle: {
            // text: 'Source: WorldClimate.com'
        },
        xAxis: {
            categories:['公众号搜索', '扫描二维码', '图文页右上角菜单', '图文页内公众号名称', '名片分享', '朋友圈广告','支付后关注', '其它合计'],
            crosshair: true
        },
        yAxis: {

        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            color:'#3598DC',
            name: '42401',
            data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]

        }, {
            color:'#F2784B',
            name: '42402',
            data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3]

        }, {
            color:'#BFBFBF',
            name: '42403',
            data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2]

        }, {
            color:'#E87E04',
            name: '42404',
            data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2]

        }, {
            color:'#4C87B9',
            name: '42405',
            data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2]

        }, {
            color:'#1BBC9B',
            name: '42406',
            data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2]

        }, {
            color:'#E7505A',
            name: '42407',
            data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2]

        }, {
			type: 'line',
            color:'#D05454',
            name: '占比',
            data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1]

        }]
    });
});

//用户来源分析-维度 圆
$(function () {
	$('#user-from2').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Browser market shares January, 2015 to May, 2015'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
				// size:80,//饼状图大小
				innerSize:'150',//饼状图内径大小
				allowPointSelect: true,
				cursor: 'pointer',
				// depth: 50,
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                }
            }
        },
		 colors:[
			'#3598DC',
            '#F2784B',
            '#BFBFBF',
            '#E87E04',
            '#4C87B9',
            '#1BBC9B',
            '#E7505A',
			'#D05454'
		],
        series: [{
            name: 'Brands',
            colorByPoint: true,
            data: [
				{ name: '公众号搜索', y:408 },
				{ name: '扫描二维码', y:1753 },
				{ name: '图文页右上角菜单', y:3 },
				{ name: '图文页内公众号名称', y:15 },
				{ name: '名片分享', y:79 },
				{ name: '朋友圈广告', y:0 },
				{ name: '支付后关注', y:189 },
				{ name: '其他合计', y:149 }
			]
        }]
    });
});
//菜单H5运营分析
$(function () {
Highcharts.getOptions().colors = Highcharts.map(Highcharts.getOptions().colors, function (color) {
    return {
        radialGradient: {
            cx: 0.5,
            cy: 0.3,
            r: 0.7
        },
        stops: [
            [0, color],
            [1, Highcharts.Color(color).brighten(-0.3).get('rgb')] // darken
        ]
    };
});
$('#analyze-container').highcharts({
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
     colors:[
        '#90ED7D', 
        '#9ED7FF'
    ],
    plotOptions: {
        pie: {
            // size:80,//饼状图大小
            innerSize:'150',//饼状图内径大小
            allowPointSelect: true,
            cursor: 'pointer',
            // depth: 50,
            dataLabels: {
                color:'black',
                enabled: true,
                formatter:function(){
                    return '<b>'+this.point.name+'</b>';
                },
                connectorWidth:0,
                connectorPadding:0,
                distance:-40
            },
            showInLegend: true
    },
    },
    series: [{
        name: '数量',
        data: [
            { name: '3.2', y:150 },
            { name: '3.0', y:60 }
        ]
        }]
    });
});

$(function () {
    $('#dell-fx1').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Monthly Average Rainfall'
        },
        subtitle: {
            text: 'Source: WorldClimate.com'
        },
        xAxis: {
            categories: [
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun',
                'Jul',
                'Aug',
                'Sep',
                'Oct',
                'Nov',
                'Dec'
            ],
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Rainfall (mm)'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: 'Tokyo',
            data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]

        }, {
            name: 'New York',
            data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3]

        }, {
            name: 'London',
            data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2]

        }, {
            name: 'Berlin',
            data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1]

        }]
    });/*
	
    $('#dell-fx2').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Monthly Average Rainfall'
        },
        subtitle: {
            text: 'Source: WorldClimate.com'
        },
        xAxis: {
            categories: [
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun',
                'Jul',
                'Aug',
                'Sep',
                'Oct',
                'Nov',
                'Dec'
            ],
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Rainfall (mm)'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: 'Tokyo',
            data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]

        }, {
            name: 'New York',
            data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3]

        }, {
            name: 'London',
            data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2]

        }, {
            name: 'Berlin',
            data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1]

        }]
    });*/
});







//地图
$(function () {

    Highcharts.setOptions({
        lang:{
            drillUpText:"返回 > {series.name}"
        }
    });

    var data = Highcharts.geojson(Highcharts.maps['countries/cn/custom/cn-all-china']),small = $('#map-containe1').width() < 400;

    // 给城市设置随机数据
    $.each(data, function (i) {
        this.drilldown = this.properties['drill-key'];
        this.value = i;
    });
        function getPoint(e){
            console.log(e.point.name);
        }
    function getShow(e){
        alert(1);
    }
    //初始化地图
    $('#map-containe1').highcharts('Map', {

        chart : {
            events: {
                drilldown: function (e) {

                    if (!e.seriesOptions) {
                        var chart = this;
                        var cname=e.point.properties["cn-name"];
                        chart.showLoading('<i class="icon-spinner icon-spin icon-3x"></i>');
                        // 加载城市数据
                        $.ajax({
                            type: "GET",
                            url: "http://data.hcharts.cn/jsonp.php?filename=GeoMap/json/"+ e.point.drilldown+".geo.json",
                            contentType: "application/json; charset=utf-8",
                            dataType:'jsonp',
                            crossDomain: true,
                            success: function(json) {
                                data = Highcharts.geojson(json);
                                                             
                                $.each(data, function (i) {
                                                                         
                                    this.value = i;
                                                                        this.events={};
                                                                        this.events.click=getPoint;
                                                                        
                                });
                                chart.hideLoading();

                                chart.addSeriesAsDrilldown(e.point, {
                                    name: e.point.name,
                                    data: data,
                                                                        events:{
                                                                            show:function(){
                                                                                alert(1);
                                                                            }
                                                                        },
                                    dataLabels: {
                                        enabled: true,
                                        format: '{point.name}'
                                    }
                                });
                            },
                            error: function (XMLHttpRequest, textStatus, errorThrown) {

                            }
                        });
                    }


                    this.setTitle(null, { text: cname });
                },
                drillup: function () {
                    this.setTitle(null, { text: '中国' });
                }
            }
        },
        tooltip: { 
            formatter:function(){
                 return "你为什么这么犀利？<br />"+this.point.name+":"+this.point.value;
                 
            }
        },
        credits:{
                    href:"javascript:goHome()",
            // text:"www.peng8.net"
        },
        title : {
            // text : 'highmap中国地图By peng8'
        },

        subtitle: {
            text: '中国',
            floating: true,
            align: 'right',
            y: 50,
            style: {
                fontSize: '16px'
            }
        },

        legend: small ? {} : {
                     
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle'
        },
        colorAxis: {
            min: 0,
            minColor: '#E6E7E8',
            maxColor: '#005645'
        },

        mapNavigation: {
            enabled: true,
            buttonOptions: {
                verticalAlign: 'bottom'
            }
        },

        plotOptions: {
            map: {
                states: {
                    hover: {
                        color: '#EEDD66'
                    }
                }
            }
        },

        series : [{
            data : data,
            name: '中国',
            dataLabels: {
                enabled: true,
                format: '{point.properties.cn-name}'
            }
        }],

        drilldown: {
                    
            activeDataLabelStyle: {
                color: '#FFFFFF',
                textDecoration: 'none',
                textShadow: '0 0 3px #000000'
            },
            drillUpButton: {
                relativeTo: 'spacingBox',
                position: {
                    x: 0,
                    y: 60
                }
            }
        }
    });
})






























































































