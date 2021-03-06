/**
 * Created by kelvin on 10/20/15.
 */
/**
 * Created by kelvin on 10/20/15.
 */

angular.module("hmisPortal")
    .config(function() {

    })
    .controller("dashboardCtrl",function ($rootScope,$scope,$http,$location,$timeout,DTOptionsBuilder) {

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
            title:'POPULATION',
            description:'Maelezo ya ANC IPT2 COVERAGE',
            cardClass:"col s12 m6",
            data:'h8JRv8POdfy;LBipXEMD6mq;aZcKJ9XxvaF;FfN1mqXvpR7;HKU7NijIEIH;p1b4SYcdjJw',
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
            var dataElement=$scope.prepareDataElement(jsonObject);
             angular.forEach(jsonObject.metaData.ou,function(region){
                 angular.forEach(dataElement,function(value){
                data.push({'name':jsonObject.metaData.names[region],'id':region,'value':getDataFromUrl(jsonObject.rows,region,dataelement)});
                 });
                 });
            //console.log(data);
             return data;

        };
        //creating dataelement

        $scope.prepareDataElement = function(jsonObject){

            $scope.dataElement=[];
            $scope.dataElement1=[];
            angular.forEach(jsonObject.rows,function(valueRow){
                console.log($scope.dataElement1.indexOf(valueRow[0])==-1)
                if($scope.dataElement1.indexOf(valueRow[0])==-1){
                    $scope.dataElement.push({'name':jsonObject.metaData.names[valueRow[0]],'id':valueRow[0]})
                    $scope.dataElement1.push(valueRow[0]);
                }
            });
        console.log($scope.dataElement);
        return dataElement;

        };
        var dataElement={"headers":[{"name":"Cow9nZikDgD","column":"Age Population","type":"java.lang.String","hidden":false,"meta":true},{"name":"ou","column":"Organisation unit","type":"java.lang.String","hidden":false,"meta":true},{"name":"value","column":"Value","type":"java.lang.Double","hidden":false,"meta":false}],"metaData":{"pe":["2014"],"co":[],"ou":["lnOyHhoLzre","Cpd5l15XxwA","yyW17iCz9As","qg5ySBw9X5l","LGTVRhKSn1V","Crkg9BoUo5w","qarQhOt2OEh","DWSo42hunXH","vYT08q7Wo33","EO3Ps3ny0Nr","vU0Qt1A5IDz","RD96nI1JXVV","ZYYX8Q9SGoV","acZHYslyJLt","MAL4cfZoFhJ","VMgrQWSVIYn","bN5q5k5DgLA","Sj50oz9EHvD","IgTAEKMqKRe","YtVMnut7Foe","sWOWPBvwNY2","hAFRrgDK0fy","kZ6RlMnt2bp","A3b5mw8DJYC","vAtZ8a924Lx"],"names":{"2014":"2014","yyW17iCz9As":"Pwani Region","vU0Qt1A5IDz":"Tanga Region","dx":"Data","vYT08q7Wo33":"Mara Region","ZYYX8Q9SGoV":"Ruvuma Region","p1b4SYcdjJw":"60+","vAtZ8a924Lx":"Rukwa Region","RD96nI1JXVV":"Kigoma Region","Crkg9BoUo5w":"Kagera Region","aZcKJ9XxvaF":"5-14","Cpd5l15XxwA":"Dodoma Region","MAL4cfZoFhJ":"Geita Region","HKU7NijIEIH":"50 - 60","kZ6RlMnt2bp":"Tabora Region","Cow9nZikDgD":"Age Population","FfN1mqXvpR7":"15-49","hAFRrgDK0fy":"Mwanza Region","acZHYslyJLt":"Dar Es Salaam Region","ou":"Organisation unit","LBipXEMD6mq":"1-4","qg5ySBw9X5l":"Manyara Region","A3b5mw8DJYC":"Mbeya Region","sWOWPBvwNY2":"Iringa Region","EO3Ps3ny0Nr":"Shinyanga Region","h8JRv8POdfy":"< 1","lnOyHhoLzre":"Kilimanjaro Region","pe":"Period","bN5q5k5DgLA":"Mtwara Region","VMgrQWSVIYn":"Lindi Region","Sj50oz9EHvD":"Morogoro Region","DWSo42hunXH":"Katavi Region","YtVMnut7Foe":"Arusha Region","IgTAEKMqKRe":"Simiyu Region","qarQhOt2OEh":"Njombe Region","LGTVRhKSn1V":"Singida Region"}},"rows":[["aZcKJ9XxvaF","Crkg9BoUo5w","799335.0"],["LBipXEMD6mq","lnOyHhoLzre","170417.0"],["HKU7NijIEIH","sWOWPBvwNY2","108978.0"],["h8JRv8POdfy","vU0Qt1A5IDz","72418.0"],["HKU7NijIEIH","qg5ySBw9X5l","143312.0"],["HKU7NijIEIH","lnOyHhoLzre","280184.0"],["LBipXEMD6mq","Crkg9BoUo5w","397885.0"],["HKU7NijIEIH","RD96nI1JXVV","213868.0"],["LBipXEMD6mq","acZHYslyJLt","471460.0"],["HKU7NijIEIH","kZ6RlMnt2bp","216607.0"],["HKU7NijIEIH","Cpd5l15XxwA","250310.0"],["FfN1mqXvpR7","sWOWPBvwNY2","452072.0"],["HKU7NijIEIH","MAL4cfZoFhJ","130861.0"],["aZcKJ9XxvaF","LGTVRhKSn1V","438941.0"],["h8JRv8POdfy","VMgrQWSVIYn","26603.0"],["LBipXEMD6mq","bN5q5k5DgLA","142127.0"],["h8JRv8POdfy","LGTVRhKSn1V","49948.0"],["h8JRv8POdfy","vYT08q7Wo33","71345.0"],["LBipXEMD6mq","hAFRrgDK0fy","444407.0"],["aZcKJ9XxvaF","VMgrQWSVIYn","247651.0"],["LBipXEMD6mq","qarQhOt2OEh","91328.0"],["FfN1mqXvpR7","Cpd5l15XxwA","941784.0"],["aZcKJ9XxvaF","YtVMnut7Foe","515584.0"],["aZcKJ9XxvaF","bN5q5k5DgLA","342715.0"],["FfN1mqXvpR7","hAFRrgDK0fy","1343188.0"],["LBipXEMD6mq","DWSo42hunXH","97940.0"],["aZcKJ9XxvaF","acZHYslyJLt","995672.0"],["LBipXEMD6mq","VMgrQWSVIYn","98580.0"],["HKU7NijIEIH","ZYYX8Q9SGoV","158139.0"],["FfN1mqXvpR7","Sj50oz9EHvD","1110185.0"],["aZcKJ9XxvaF","A3b5mw8DJYC","867348.0"],["FfN1mqXvpR7","ZYYX8Q9SGoV","667165.0"],["FfN1mqXvpR7","VMgrQWSVIYn","406615.0"],["FfN1mqXvpR7","yyW17iCz9As","536493.0"],["h8JRv8POdfy","YtVMnut7Foe","58848.0"],["HKU7NijIEIH","IgTAEKMqKRe","138303.0"],["FfN1mqXvpR7","IgTAEKMqKRe","667357.0"],["FfN1mqXvpR7","YtVMnut7Foe","892990.0"],["HKU7NijIEIH","qarQhOt2OEh","84652.0"],["aZcKJ9XxvaF","vU0Qt1A5IDz","658765.0"],["h8JRv8POdfy","lnOyHhoLzre","46476.0"],["h8JRv8POdfy","DWSo42hunXH","26532.0"],["HKU7NijIEIH","EO3Ps3ny0Nr","137702.0"],["aZcKJ9XxvaF","kZ6RlMnt2bp","759716.0"],["HKU7NijIEIH","acZHYslyJLt","382078.0"],["FfN1mqXvpR7","qg5ySBw9X5l","668847.0"],["FfN1mqXvpR7","A3b5mw8DJYC","1345604.0"],["LBipXEMD6mq","vAtZ8a924Lx","175230.0"],["aZcKJ9XxvaF","qg5ySBw9X5l","460675.0"],["h8JRv8POdfy","vAtZ8a924Lx","47570.0"],["FfN1mqXvpR7","DWSo42hunXH","260899.0"],["aZcKJ9XxvaF","MAL4cfZoFhJ","605850.0"],["LBipXEMD6mq","vYT08q7Wo33","287070.0"],["aZcKJ9XxvaF","IgTAEKMqKRe","530086.0"],["HKU7NijIEIH","vYT08q7Wo33","168519.0"],["FfN1mqXvpR7","MAL4cfZoFhJ","784535.0"],["h8JRv8POdfy","Crkg9BoUo5w","109671.0"],["FfN1mqXvpR7","EO3Ps3ny0Nr","705973.0"],["HKU7NijIEIH","LGTVRhKSn1V","156610.0"],["h8JRv8POdfy","EO3Ps3ny0Nr","75920.0"],["h8JRv8POdfy","RD96nI1JXVV","88763.0"],["LBipXEMD6mq","kZ6RlMnt2bp","386977.0"],["aZcKJ9XxvaF","RD96nI1JXVV","667926.0"],["h8JRv8POdfy","Cpd5l15XxwA","71408.0"],["aZcKJ9XxvaF","qarQhOt2OEh","244148.0"],["LBipXEMD6mq","MAL4cfZoFhJ","295163.0"],["FfN1mqXvpR7","qarQhOt2OEh","330981.0"],["LBipXEMD6mq","LGTVRhKSn1V","206758.0"],["h8JRv8POdfy","kZ6RlMnt2bp","96211.0"],["FfN1mqXvpR7","LGTVRhKSn1V","611291.0"],["h8JRv8POdfy","hAFRrgDK0fy","118109.0"],["aZcKJ9XxvaF","vYT08q7Wo33","579281.0"],["LBipXEMD6mq","YtVMnut7Foe","221836.0"],["HKU7NijIEIH","Sj50oz9EHvD","265355.0"],["FfN1mqXvpR7","kZ6RlMnt2bp","1051111.0"],["h8JRv8POdfy","IgTAEKMqKRe","62808.0"],["FfN1mqXvpR7","bN5q5k5DgLA","595009.0"],["FfN1mqXvpR7","Crkg9BoUo5w","1142761.0"],["aZcKJ9XxvaF","hAFRrgDK0fy","890951.0"],["aZcKJ9XxvaF","DWSo42hunXH","185460.0"],["LBipXEMD6mq","Sj50oz9EHvD","279596.0"],["h8JRv8POdfy","ZYYX8Q9SGoV","50189.0"],["HKU7NijIEIH","bN5q5k5DgLA","209146.0"],["aZcKJ9XxvaF","Cpd5l15XxwA","662035.0"],["h8JRv8POdfy","yyW17iCz9As","41440.0"],["LBipXEMD6mq","vU0Qt1A5IDz","276637.0"],["LBipXEMD6mq","sWOWPBvwNY2","119466.0"],["aZcKJ9XxvaF","lnOyHhoLzre","486187.0"],["FfN1mqXvpR7","lnOyHhoLzre","781725.0"],["h8JRv8POdfy","bN5q5k5DgLA","40826.0"],["FfN1mqXvpR7","vYT08q7Wo33","762808.0"],["LBipXEMD6mq","EO3Ps3ny0Nr","247565.0"],["LBipXEMD6mq","qg5ySBw9X5l","218213.0"],["h8JRv8POdfy","acZHYslyJLt","153979.0"],["HKU7NijIEIH","DWSo42hunXH","46890.0"],["HKU7NijIEIH","vU0Qt1A5IDz","256501.0"],["LBipXEMD6mq","ZYYX8Q9SGoV","184585.0"],["LBipXEMD6mq","IgTAEKMqKRe","274742.0"],["HKU7NijIEIH","yyW17iCz9As","157913.0"],["HKU7NijIEIH","vAtZ8a924Lx","79856.0"],["h8JRv8POdfy","sWOWPBvwNY2","31909.0"],["h8JRv8POdfy","qg5ySBw9X5l","56958.0"],["h8JRv8POdfy","A3b5mw8DJYC","97768.0"],["aZcKJ9XxvaF","vAtZ8a924Lx","345954.0"],["HKU7NijIEIH","A3b5mw8DJYC","280270.0"],["h8JRv8POdfy","MAL4cfZoFhJ","76178.0"],["h8JRv8POdfy","qarQhOt2OEh","24886.0"],["LBipXEMD6mq","A3b5mw8DJYC","384774.0"],["LBipXEMD6mq","yyW17iCz9As","139520.0"],["HKU7NijIEIH","YtVMnut7Foe","160985.0"],["aZcKJ9XxvaF","Sj50oz9EHvD","642089.0"],["FfN1mqXvpR7","vAtZ8a924Lx","456580.0"],["FfN1mqXvpR7","acZHYslyJLt","3026051.0"],["FfN1mqXvpR7","vU0Qt1A5IDz","964540.0"],["aZcKJ9XxvaF","ZYYX8Q9SGoV","441865.0"],["aZcKJ9XxvaF","sWOWPBvwNY2","303981.0"],["HKU7NijIEIH","Crkg9BoUo5w","242641.0"],["aZcKJ9XxvaF","yyW17iCz9As","321863.0"],["LBipXEMD6mq","Cpd5l15XxwA","288400.0"],["HKU7NijIEIH","VMgrQWSVIYn","129630.0"],["FfN1mqXvpR7","RD96nI1JXVV","939473.0"],["aZcKJ9XxvaF","EO3Ps3ny0Nr","489683.0"],["LBipXEMD6mq","RD96nI1JXVV","347151.0"],["h8JRv8POdfy","Sj50oz9EHvD","73435.0"],["HKU7NijIEIH","hAFRrgDK0fy","241478.0"]],"width":3,"height":125}

        $scope.prepareDataElement(dataElement);




        //var datads = {"headers":[{"name":"dx","column":"Data","type":"java.lang.String","hidden":false,"meta":true},{"name":"ou","column":"Organisation unit","type":"java.lang.String","hidden":false,"meta":true},{"name":"value","column":"Value","type":"java.lang.Double","hidden":false,"meta":false}],"metaData":{"pe":["2014"],"co":[],"ou":["lnOyHhoLzre","Cpd5l15XxwA","yyW17iCz9As","qg5ySBw9X5l","LGTVRhKSn1V","Crkg9BoUo5w","qarQhOt2OEh","DWSo42hunXH","vYT08q7Wo33","EO3Ps3ny0Nr","vU0Qt1A5IDz","RD96nI1JXVV","ZYYX8Q9SGoV","acZHYslyJLt","MAL4cfZoFhJ","VMgrQWSVIYn","bN5q5k5DgLA","Sj50oz9EHvD","IgTAEKMqKRe","YtVMnut7Foe","sWOWPBvwNY2","hAFRrgDK0fy","kZ6RlMnt2bp","A3b5mw8DJYC","vAtZ8a924Lx"],"names":{"2014":"2014","yyW17iCz9As":"Pwani Region","vU0Qt1A5IDz":"Tanga Region","dx":"Data","vYT08q7Wo33":"Mara Region","ZYYX8Q9SGoV":"Ruvuma Region","vAtZ8a924Lx":"Rukwa Region","RD96nI1JXVV":"Kigoma Region","Crkg9BoUo5w":"Kagera Region","Cpd5l15XxwA":"Dodoma Region","MAL4cfZoFhJ":"Geita Region","kZ6RlMnt2bp":"Tabora Region","hAFRrgDK0fy":"Mwanza Region","tit1C1VPIV7":"ANC Proportion of pregnant women receiving ITN Voucher","acZHYslyJLt":"Dar Es Salaam Region","ou":"Organisation unit","qg5ySBw9X5l":"Manyara Region","A3b5mw8DJYC":"Mbeya Region","sWOWPBvwNY2":"Iringa Region","EO3Ps3ny0Nr":"Shinyanga Region","lnOyHhoLzre":"Kilimanjaro Region","pe":"Period","bN5q5k5DgLA":"Mtwara Region","Sj50oz9EHvD":"Morogoro Region","VMgrQWSVIYn":"Lindi Region","YtVMnut7Foe":"Arusha Region","DWSo42hunXH":"Katavi Region","IgTAEKMqKRe":"Simiyu Region","LGTVRhKSn1V":"Singida Region","qarQhOt2OEh":"Njombe Region"}},"rows":[["tit1C1VPIV7","lnOyHhoLzre","38.3"],["tit1C1VPIV7","Cpd5l15XxwA","32.9"],["tit1C1VPIV7","yyW17iCz9As","40.0"],["tit1C1VPIV7","qg5ySBw9X5l","27.6"],["tit1C1VPIV7","LGTVRhKSn1V","42.6"],["tit1C1VPIV7","Crkg9BoUo5w","38.0"],["tit1C1VPIV7","qarQhOt2OEh","34.0"],["tit1C1VPIV7","DWSo42hunXH","21.9"],["tit1C1VPIV7","vYT08q7Wo33","30.8"],["tit1C1VPIV7","EO3Ps3ny0Nr","19.6"],["tit1C1VPIV7","vU0Qt1A5IDz","37.9"],["tit1C1VPIV7","RD96nI1JXVV","36.4"],["tit1C1VPIV7","ZYYX8Q9SGoV","36.9"],["tit1C1VPIV7","acZHYslyJLt","20.8"],["tit1C1VPIV7","MAL4cfZoFhJ","21.4"],["tit1C1VPIV7","VMgrQWSVIYn","41.7"],["tit1C1VPIV7","bN5q5k5DgLA","33.9"],["tit1C1VPIV7","Sj50oz9EHvD","35.4"],["tit1C1VPIV7","IgTAEKMqKRe","23.1"],["tit1C1VPIV7","YtVMnut7Foe","33.9"],["tit1C1VPIV7","sWOWPBvwNY2","32.4"],["tit1C1VPIV7","hAFRrgDK0fy","25.5"],["tit1C1VPIV7","kZ6RlMnt2bp","26.3"],["tit1C1VPIV7","A3b5mw8DJYC","27.9"],["tit1C1VPIV7","vAtZ8a924Lx","25.3"]],"width":3,"height":25};
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
                url = "https://dhis.moh.go.tz/api/analytics.xls?dimension=dx:"+id+"&dimension=pe:"+$scope.selectedPeriod+"&dimension=ou:LEVEL-2;"+$scope.selectedOrgUnit+"&displayProperty=NAME&tableLayout=true&columns=dx&rows=pe;ou";
            }else{
                url = "https://dhis.moh.go.tz/api/analytics.xls?dimension=dx:"+id+"&dimension=pe:"+$scope.selectedPeriod+"&dimension=ou:LEVEL-3;"+$scope.selectedOrgUnit+"&displayProperty=NAME&tableLayout=true&columns=dx&rows=pe;ou";
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
                  $scope.url="https://dhis.moh.go.tz/api/analytics.json?dimension=Cow9nZikDgD:FfN1mqXvpR7;HKU7NijIEIH;LBipXEMD6mq;aZcKJ9XxvaF;h8JRv8POdfy;p1b4SYcdjJw&dimension=ou:LEVEL-2;m0frOspS7JY&filter=pe:2014&displayProperty=NAME"
//                $scope.url = "https://dhis.moh.go.tz/api/analytics.json?dimension=dx:"+cardObject.data+"&dimension=ou:LEVEL-2;m0frOspS7JY&filter=pe:"+$scope.selectedPeriod+"&displayProperty=NAME";
            }else{
                $scope.url="https://dhis.moh.go.tz/api/analytics.json?dimension=Cow9nZikDgD:FfN1mqXvpR7;HKU7NijIEIH;LBipXEMD6mq;aZcKJ9XxvaF;h8JRv8POdfy;p1b4SYcdjJw&dimension=ou:LEVEL-2;m0frOspS7JY&filter=pe:2014&displayProperty=NAME"
//                $scope.url = "https://dhis.moh.go.tz/api/analytics.json?dimension=dx:"+cardObject.data+"&dimension=ou:LEVEL-3;"+$scope.selectedOrgUnit+"&filter=pe:"+$scope.selectedPeriod+"&displayProperty=NAME";
            }
            cardObject.chartObject.loading = true;
            $http.get($scope.url,{withCredentials: true, params : {
                j_username : "tuzoengelbert",
                j_password : "TUZO2015"

            }}).success(function(data){
                $scope.area = [];
                cardObject.chartObject.xAxis.categories = [];
                //
                var dataToUse = $scope.prepareData(data);
                var dataElement=$scope.prepareDataElement(data);
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
                    angular.forEach(dataElement,function(value){
                        var serie = [];
                        angular.forEach(dataToUse,function(val){
                            var number = getDataFromUrl(jsonObject.rows,region,dataelement);
                            serie.push(number);
                        });
                        $scope.normalseries.push({type: $scope.data.chartType, name: value.name, data: serie})
                    });
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

function getDataFromUrl(arr,ou,de){
    var num = 0
    $.each(arr,function(k,v){
        if(v[1] == ou && v[0]==de){
            num = parseInt(v[2])
        }
    });
    return num;
}

