/**
 * Created by kelvin on 10/20/15.
 */

angular.module("hmisPortal")
    .config(function() {

    })
    .controller("mainCtrl",function ($rootScope,$scope,$http,$location,$timeout,DTOptionsBuilder) {

        $scope.cards = {};
        $scope.data = {};
        $rootScope.selectedOrgUnit = "m0frOspS7JY";
        $rootScope.selectedPeriod = "2014";
        $scope.chartConfig = {
            title: {
                text: 'Combination chart'
            },
            xAxis: {
                categories: [],
                labels:{
                    rotation: -70,
                    style:{ "color": "#000000", "fontWeight": "normal" }
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: ''
                },labels:{
                    style:{ "color": "#000000", "fontWeight": "bold" }
                }
            },
            labels: {
                items: [{
                    html: 'doses',
                    style: {
                        left: '50px',
                        top: '18px',
                        color: (Highcharts.theme && Highcharts.theme.textColor) || 'black'
                    }
                }]
            },
            series: []
        };

        $scope.cards.malaria = [{
            title:'ANC IPT2 COVERAGE',
            description:'Maelezo ya ANC IPT2 COVERAGE',
            cardClass:"col s12 m6",
            data:'i47jm4Pkkq6',
            icons:[
                {name:'table',image:'table.jpg',action:''},
                {name:'bar',image:'bar.png',action:''},
                {name:'line',image:'line.png',action:''},
                {name:'combined',image:'combined.jpg',action:''},
                {name:'column',image:'column.png',action:''},
                {name:'area',image:'area.jpg',action:''},
                {name:'pie',image:'pie.png',action:''}
            ],
            dataSource:'',
            size:'small',
            displayTable:false,
            chartObject:{
                title: {
                    text: 'Combination chart'
                },
                xAxis: {
                    categories: [],
                    labels:{
                        rotation: -70,
                        style:{ "color": "#000000", "fontWeight": "normal" }
                    }
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: ''
                    },labels:{
                        style:{ "color": "#000000", "fontWeight": "bold" }
                    }
                },
                labels: {
                    items: [{
                        html: 'doses',
                        style: {
                            left: '50px',
                            top: '18px',
                            color: (Highcharts.theme && Highcharts.theme.textColor) || 'black'
                        }
                    }]
                },
                series: [],
                size:{
                    width:450
                }
            }

        },
            {
            title:'ANC MALARIA PREVELANCE',
            description:'Maelezo ya ANC MALARIA PREVELANCE',
            cardClass:"col m6 s12",
            cardSize:"medium",
            data:'vfaY7k6TINl',
            icons:[
                {name:'table',image:'table.jpg',action:''},
                {name:'bar',image:'bar.png',action:''},
                {name:'line',image:'line.png',action:''},
                {name:'pie',image:'pie.png',action:''}
            ],
            dataSource:'',
            size:'small',
                displayTable:false,
            chartObject:{
                title: {
                    text: 'Combination chart'
                },
                xAxis: {
                    categories: [],
                    labels:{
                        rotation: -70,
                        style:{ "color": "#000000", "fontWeight": "normal" }
                    }
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: ''
                    },labels:{
                        style:{ "color": "#000000", "fontWeight": "bold" }
                    }
                },
                labels: {
                    items: [{
                        html: 'doses',
                        style: {
                            left: '50px',
                            top: '18px',
                            color: (Highcharts.theme && Highcharts.theme.textColor) || 'black'
                        }
                    }]
                },
                series: [],
                size:{
                    width:450
                }
            }

        },
            {
            title:'ANC Proportion  of pregnant women receiving ITN Voucher',
            description:'Maelezo ya ANC Proportion  of pregnant women receiving ITN Voucher',
            cardClass:"col m12 s12",
            data:'tit1C1VPIV7',
            icons:[
                {name:'table',image:'table.jpg',action:''},
                {name:'bar',image:'bar.png',action:''},
                {name:'line',image:'line.png',action:''},
                {name:'pie',image:'pie.png',action:''}
            ],
            dataSource:'',
            size:'large',
                displayTable:false,
            chartObject:{
                title: {
                    text: 'Combination chart'
                },
                xAxis: {
                    categories: [],
                    labels:{
                        rotation: -70,
                        style:{ "color": "#000000", "fontWeight": "normal" }
                    }
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: ''
                    },labels:{
                        style:{ "color": "#000000", "fontWeight": "bold" }
                    }
                },
                labels: {
                    items: [{
                        html: 'doses',
                        style: {
                            left: '50px',
                            top: '18px',
                            color: (Highcharts.theme && Highcharts.theme.textColor) || 'black'
                        }
                    }]
                },
                series: [],
                size:{
                    width:900
                }
            }

        },


            {
            title:'Proportional of Malaria cases in OPD and IPD',
            description:'Maelezo ya Proportional of Malaria cases in OPD and IPD',
            cardClass:"col m6 s12",
                data:'aw1jQ1tJTmE',
            icons:[
                {name:'table',image:'table.jpg',action:''},
                {name:'bar',image:'bar.png',action:''},
                {name:'line',image:'line.png',action:''},
                {name:'pie',image:'pie.png',action:''}
            ],
            dataSource:'',
            size:'small',
                displayTable:false,
            chartObject:{
                title: {
                    text: 'Combination chart'
                },
                xAxis: {
                    categories: [],
                    labels:{
                        rotation: -70,
                        style:{ "color": "#000000", "fontWeight": "normal" }
                    }
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: ''
                    },labels:{
                        style:{ "color": "#000000", "fontWeight": "bold" }
                    }
                },
                labels: {
                    items: [{
                        html: 'doses',
                        style: {
                            left: '50px',
                            top: '18px',
                            color: (Highcharts.theme && Highcharts.theme.textColor) || 'black'
                        }
                    }]
                },
                series: [],
                size:{
                    width:450
                }
            }

        }]

        $scope.prepareData = function(jsonObject){
            var data = [];
           angular.forEach(jsonObject.metaData.ou,function(region){
               data.push({'name':jsonObject.metaData.names[region],'id':region,'value':getDataFromUrl(jsonObject.rows,region)});
           });
            console.log(data);
            return data;

        };






       var datads = {"headers":[{"name":"dx","column":"Data","type":"java.lang.String","hidden":false,"meta":true},{"name":"ou","column":"Organisation unit","type":"java.lang.String","hidden":false,"meta":true},{"name":"value","column":"Value","type":"java.lang.Double","hidden":false,"meta":false}],"metaData":{"pe":["2014"],"co":[],"ou":["lnOyHhoLzre","Cpd5l15XxwA","yyW17iCz9As","qg5ySBw9X5l","LGTVRhKSn1V","Crkg9BoUo5w","qarQhOt2OEh","DWSo42hunXH","vYT08q7Wo33","EO3Ps3ny0Nr","vU0Qt1A5IDz","RD96nI1JXVV","ZYYX8Q9SGoV","acZHYslyJLt","MAL4cfZoFhJ","VMgrQWSVIYn","bN5q5k5DgLA","Sj50oz9EHvD","IgTAEKMqKRe","YtVMnut7Foe","sWOWPBvwNY2","hAFRrgDK0fy","kZ6RlMnt2bp","A3b5mw8DJYC","vAtZ8a924Lx"],"names":{"2014":"2014","yyW17iCz9As":"Pwani Region","vU0Qt1A5IDz":"Tanga Region","dx":"Data","vYT08q7Wo33":"Mara Region","ZYYX8Q9SGoV":"Ruvuma Region","vAtZ8a924Lx":"Rukwa Region","RD96nI1JXVV":"Kigoma Region","Crkg9BoUo5w":"Kagera Region","Cpd5l15XxwA":"Dodoma Region","MAL4cfZoFhJ":"Geita Region","kZ6RlMnt2bp":"Tabora Region","hAFRrgDK0fy":"Mwanza Region","tit1C1VPIV7":"ANC Proportion of pregnant women receiving ITN Voucher","acZHYslyJLt":"Dar Es Salaam Region","ou":"Organisation unit","qg5ySBw9X5l":"Manyara Region","A3b5mw8DJYC":"Mbeya Region","sWOWPBvwNY2":"Iringa Region","EO3Ps3ny0Nr":"Shinyanga Region","lnOyHhoLzre":"Kilimanjaro Region","pe":"Period","bN5q5k5DgLA":"Mtwara Region","Sj50oz9EHvD":"Morogoro Region","VMgrQWSVIYn":"Lindi Region","YtVMnut7Foe":"Arusha Region","DWSo42hunXH":"Katavi Region","IgTAEKMqKRe":"Simiyu Region","LGTVRhKSn1V":"Singida Region","qarQhOt2OEh":"Njombe Region"}},"rows":[["tit1C1VPIV7","lnOyHhoLzre","38.3"],["tit1C1VPIV7","Cpd5l15XxwA","32.9"],["tit1C1VPIV7","yyW17iCz9As","40.0"],["tit1C1VPIV7","qg5ySBw9X5l","27.6"],["tit1C1VPIV7","LGTVRhKSn1V","42.6"],["tit1C1VPIV7","Crkg9BoUo5w","38.0"],["tit1C1VPIV7","qarQhOt2OEh","34.0"],["tit1C1VPIV7","DWSo42hunXH","21.9"],["tit1C1VPIV7","vYT08q7Wo33","30.8"],["tit1C1VPIV7","EO3Ps3ny0Nr","19.6"],["tit1C1VPIV7","vU0Qt1A5IDz","37.9"],["tit1C1VPIV7","RD96nI1JXVV","36.4"],["tit1C1VPIV7","ZYYX8Q9SGoV","36.9"],["tit1C1VPIV7","acZHYslyJLt","20.8"],["tit1C1VPIV7","MAL4cfZoFhJ","21.4"],["tit1C1VPIV7","VMgrQWSVIYn","41.7"],["tit1C1VPIV7","bN5q5k5DgLA","33.9"],["tit1C1VPIV7","Sj50oz9EHvD","35.4"],["tit1C1VPIV7","IgTAEKMqKRe","23.1"],["tit1C1VPIV7","YtVMnut7Foe","33.9"],["tit1C1VPIV7","sWOWPBvwNY2","32.4"],["tit1C1VPIV7","hAFRrgDK0fy","25.5"],["tit1C1VPIV7","kZ6RlMnt2bp","26.3"],["tit1C1VPIV7","A3b5mw8DJYC","27.9"],["tit1C1VPIV7","vAtZ8a924Lx","25.3"]],"width":3,"height":25};
//       var datads = {"headers":[{"name":"dx","column":"Data","type":"java.lang.String","hidden":false,"meta":true},{"name":"ou","column":"Organisation unit","type":"java.lang.String","hidden":false,"meta":true},{"name":"value","column":"Value","type":"java.lang.Double","hidden":false,"meta":false}],"metaData":{"pe":["2014"],"co":[],"ou":["QKEr8DFutO8","lgZ6HfZaj3f","aQEZnk4RzKv","uafqZbOYpVL","zHa2ohFrpPM","PHWaJvzTmL8","D21VsjNL2LB"],"names":{"2014":"2014","pe":"Period","lgZ6HfZaj3f":"Arusha City Council","ou":"Organisation unit","dx":"Data","uafqZbOYpVL":"Meru District Council","D21VsjNL2LB":"Monduli District Council","QKEr8DFutO8":"Karatu District Council","zHa2ohFrpPM":"Arusha District Council","tit1C1VPIV7":"ANC Proportion of pregnant women receiving ITN Voucher","aQEZnk4RzKv":"Longido District Council","PHWaJvzTmL8":"Ngorongoro District Council"}},"rows":[["tit1C1VPIV7","QKEr8DFutO8","35.3"],["tit1C1VPIV7","lgZ6HfZaj3f","32.6"],["tit1C1VPIV7","aQEZnk4RzKv","33.6"],["tit1C1VPIV7","uafqZbOYpVL","42.1"],["tit1C1VPIV7","zHa2ohFrpPM","30.7"],["tit1C1VPIV7","PHWaJvzTmL8","27.7"],["tit1C1VPIV7","D21VsjNL2LB","36.8"]],"width":3,"height":7};


        $scope.data.chartType = 'column';
        $scope.displayTable = false;
        $scope.changeChart = function(type,card){
            card.displayTable = false;

            $scope.showReport = true;
            if(type == 'table'){
                card.displayTable = true;
                $scope.data.chartType = 'table';
            }else{
                $scope.data.chartType = type;
            }
            $scope.prepareSeries(card);
        };

        $scope.downloadExcel = function(id){
            var url = "";
            if($scope.selectedOrgUnit == "m0frOspS7JY"){
                 url = "https://dhis.moh.go.tz/api/analytics.csv?dimension=dx:"+id+"&dimension=pe:"+$scope.selectedPeriod+"&dimension=ou:LEVEL-2;"+$scope.selectedOrgUnit+"&displayProperty=NAME&tableLayout=true&columns=dx&rows=pe;ou";
            }else{
                 url = "https://dhis.moh.go.tz/api/analytics.csv?dimension=dx:"+id+"&dimension=pe:"+$scope.selectedPeriod+"&dimension=ou:LEVEL-3;"+$scope.selectedOrgUnit+"&displayProperty=NAME&tableLayout=true&columns=dx&rows=pe;ou";
            }
            $http.get(url,{withCredentials: true, params : {
                j_username : " ",
                j_password : " "

            },'Content-Type': 'application/octet-stream'}).success(function(data){
                var a = document.createElement('a');
                var blob = new Blob([data]);
                a.href = window.URL.createObjectURL(blob);
                a.download = "data.xls";
                a.click();
            });
        }

        $scope.prepareSeries = function(cardObject){
            cardObject.chartObject.title.text = cardObject.title;
            cardObject.chartObject.yAxis.title.text = cardObject.title.toLowerCase();
            if($scope.selectedOrgUnit == "m0frOspS7JY"){
                $scope.url = "https://dhis.moh.go.tz/api/analytics.json?dimension=dx:"+cardObject.data+"&dimension=ou:LEVEL-2;m0frOspS7JY&filter=pe:"+$scope.selectedPeriod+"&displayProperty=NAME";
            }else{
                $scope.url = "https://dhis.moh.go.tz/api/analytics.json?dimension=dx:"+cardObject.data+"&dimension=ou:LEVEL-3;"+$scope.selectedOrgUnit+"&filter=pe:"+$scope.selectedPeriod+"&displayProperty=NAME";
            }
            cardObject.chartObject.loading = true;
            $http.get($scope.url,{withCredentials: true, params : {
                j_username : " ",
                j_password : " "

            }}).success(function(data){
                $scope.area = [];
                cardObject.chartObject.xAxis.categories = [];
                //
                var dataToUse = $scope.prepareData(data);
                //
                angular.forEach(dataToUse,function(val){
                    cardObject.chartObject.xAxis.categories.push(val.name);
                });
                $scope.normalseries = [];
                if($scope.data.chartType == "pie"){
                    delete cardObject.chartObject.chart;
                    var serie = [];
                    angular.forEach(dataToUse,function(val){
                        serie.push({name: val.name, y: parseInt(val.value)})
                    });
                    $scope.normalseries.push({type: $scope.data.chartType, name:cardObject.title , data: serie,showInLegend: true,
                        dataLabels: {
                            enabled: false
                        } });
                    cardObject.chartObject.series = $scope.normalseries;
                }
                else if($scope.data.chartType == "combined"){
                    delete cardObject.chartObject.chart;
                    var serie1 = [];
                    var serie = [];

                    angular.forEach(dataToUse,function(val){
                        serie.push(parseInt(val.value));
                        serie1.push({name: val.name , y: parseInt(val.value) })
                    });
                    $scope.normalseries.push({type: 'column', name: cardObject.title, data: serie});
                    $scope.normalseries.push({type: 'spline', name: cardObject.title, data: serie});
                    $scope.normalseries.push({type: 'pie', name: cardObject.title, data: serie1,center: [100, 80],size: 150,showInLegend: false,
                        dataLabels: {
                            enabled: false
                        }})
                    cardObject.chartObject.series = $scope.normalseries;
                }
                else if($scope.data.chartType == 'table'){
                    cardObject.table = {};
                    cardObject.table.colums =[];
                    angular.forEach(dataToUse,function(val){
                        cardObject.table.colums.push({name:val.name,value:parseInt(val.value)});
                    });
                }
                else{
                    delete cardObject.chartObject.chart;
                    var serie = [];
                    angular.forEach(dataToUse,function(val){
                        serie.push(val.value);
                    });
                    cardObject.chartObject.chart={};
                    cardObject.chartObject.chart.type=$scope.data.chartType;
                    $scope.normalseries.push({type: $scope.data.chartType, name: cardObject.title, data: serie})
                    cardObject.chartObject.series = $scope.normalseries;
                }
                cardObject.chartObject.loading = false
            });


        };


        $rootScope.firstClick = function(){
            angular.forEach($scope.cards.malaria,function(value){
                $scope.prepareSeries(value);
            });
        }
        $scope.firstClick();
    });

function getDataFromUrl(arr,ou){
    var num = 0
    $.each(arr,function(k,v){
        if(v[1] == ou){
            num = parseInt(v[2])
        }
    });
    return num;
}