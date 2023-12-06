var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "1000",
        "ok": "742",
        "ko": "258"
    },
    "minResponseTime": {
        "total": "2794",
        "ok": "2794",
        "ko": "10187"
    },
    "maxResponseTime": {
        "total": "60005",
        "ok": "38015",
        "ko": "60005"
    },
    "meanResponseTime": {
        "total": "8840",
        "ok": "7549",
        "ko": "12554"
    },
    "standardDeviation": {
        "total": "4257",
        "ok": "3649",
        "ko": "3654"
    },
    "percentiles1": {
        "total": "7546",
        "ok": "6724",
        "ko": "11386"
    },
    "percentiles2": {
        "total": "11375",
        "ok": "8409",
        "ko": "13657"
    },
    "percentiles3": {
        "total": "15889",
        "ok": "14108",
        "ko": "18056"
    },
    "percentiles4": {
        "total": "20198",
        "ok": "20578",
        "ko": "18163"
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
    "count": 742,
    "percentage": 74
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 258,
    "percentage": 26
},
    "meanNumberOfRequestsPerSecond": {
        "total": "16.393",
        "ok": "12.164",
        "ko": "4.23"
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
        "total": "1000",
        "ok": "742",
        "ko": "258"
    },
    "minResponseTime": {
        "total": "2794",
        "ok": "2794",
        "ko": "10187"
    },
    "maxResponseTime": {
        "total": "60005",
        "ok": "38015",
        "ko": "60005"
    },
    "meanResponseTime": {
        "total": "8840",
        "ok": "7549",
        "ko": "12554"
    },
    "standardDeviation": {
        "total": "4257",
        "ok": "3649",
        "ko": "3654"
    },
    "percentiles1": {
        "total": "7546",
        "ok": "6724",
        "ko": "11386"
    },
    "percentiles2": {
        "total": "11375",
        "ok": "8409",
        "ko": "13657"
    },
    "percentiles3": {
        "total": "15889",
        "ok": "14108",
        "ko": "18056"
    },
    "percentiles4": {
        "total": "20198",
        "ok": "20578",
        "ko": "18163"
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
    "count": 742,
    "percentage": 74
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 258,
    "percentage": 26
},
    "meanNumberOfRequestsPerSecond": {
        "total": "16.393",
        "ok": "12.164",
        "ko": "4.23"
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
