var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "100000",
        "ok": "308",
        "ko": "99692"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "3495",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "69526",
        "ok": "69501",
        "ko": "69526"
    },
    "meanResponseTime": {
        "total": "4594",
        "ok": "52358",
        "ko": "4447"
    },
    "standardDeviation": {
        "total": "12414",
        "ok": "7570",
        "ko": "12139"
    },
    "percentiles1": {
        "total": "928",
        "ok": "50775",
        "ko": "927"
    },
    "percentiles2": {
        "total": "1094",
        "ok": "57826",
        "ko": "1091"
    },
    "percentiles3": {
        "total": "37924",
        "ok": "60744",
        "ko": "35254"
    },
    "percentiles4": {
        "total": "61219",
        "ok": "69482",
        "ko": "61134"
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
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 308,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 99692,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1428.571",
        "ok": "4.4",
        "ko": "1424.171"
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
        "total": "100000",
        "ok": "308",
        "ko": "99692"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "3495",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "69526",
        "ok": "69501",
        "ko": "69526"
    },
    "meanResponseTime": {
        "total": "4594",
        "ok": "52358",
        "ko": "4447"
    },
    "standardDeviation": {
        "total": "12414",
        "ok": "7570",
        "ko": "12139"
    },
    "percentiles1": {
        "total": "928",
        "ok": "50775",
        "ko": "927"
    },
    "percentiles2": {
        "total": "1093",
        "ok": "57826",
        "ko": "1091"
    },
    "percentiles3": {
        "total": "37929",
        "ok": "60744",
        "ko": "35261"
    },
    "percentiles4": {
        "total": "61219",
        "ok": "69482",
        "ko": "61133"
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
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 308,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 99692,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1428.571",
        "ok": "4.4",
        "ko": "1424.171"
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
