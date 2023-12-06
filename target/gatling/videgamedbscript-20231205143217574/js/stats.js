var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "100",
        "ok": "100",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "806",
        "ok": "806",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "6913",
        "ok": "6913",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "2304",
        "ok": "2304",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1015",
        "ok": "1015",
        "ko": "-"
    },
    "percentiles1": {
        "total": "2038",
        "ok": "2038",
        "ko": "-"
    },
    "percentiles2": {
        "total": "2905",
        "ok": "2905",
        "ko": "-"
    },
    "percentiles3": {
        "total": "3782",
        "ok": "3782",
        "ko": "-"
    },
    "percentiles4": {
        "total": "5584",
        "ok": "5584",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 13,
    "percentage": 13
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 87,
    "percentage": 87
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "14.286",
        "ok": "14.286",
        "ko": "-"
    }
},
contents: {
"req_get-all-games-c1289": {
        type: "REQUEST",
        name: "Get all games",
path: "Get all games",
pathFormatted: "req_get-all-games-c1289",
stats: {
    "name": "Get all games",
    "numberOfRequests": {
        "total": "100",
        "ok": "100",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "806",
        "ok": "806",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "6913",
        "ok": "6913",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "2304",
        "ok": "2304",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1015",
        "ok": "1015",
        "ko": "-"
    },
    "percentiles1": {
        "total": "2038",
        "ok": "2038",
        "ko": "-"
    },
    "percentiles2": {
        "total": "2905",
        "ok": "2905",
        "ko": "-"
    },
    "percentiles3": {
        "total": "3782",
        "ok": "3782",
        "ko": "-"
    },
    "percentiles4": {
        "total": "5584",
        "ok": "5584",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 13,
    "percentage": 13
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 87,
    "percentage": 87
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "14.286",
        "ok": "14.286",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
