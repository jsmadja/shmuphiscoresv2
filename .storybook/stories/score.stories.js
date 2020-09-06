import ScoreTemplate from "../../src/components/templates/ScoreTemplate";

const methods = {};

export default {
    title: "Template/Score",
};

export const withScore = () => ({
    components: {ScoreTemplate},
    template: `
      <score-template :history="history"/>`,
    methods,
    data: () => ({
        history: [{
            "id": 16723,
            "createdAt": "2020-08-16T22:20:58.000+00:00",
            "game": {
                "id": 25,
                "createdAt": "2013-12-18T22:45:50.000+00:00",
                "thread": "http://forum.shmup.com/viewtopic.php?f=20&t=15093",
                "cover": "/covers/25.jpg",
                "title": "Espgaluda II",
                "platforms": [{"id": 56, "createdAt": "2013-12-18T22:45:50.000+00:00", "name": "PCB"}, {
                    "id": 57,
                    "createdAt": "2013-12-18T22:45:50.000+00:00",
                    "name": "X360"
                }],
                "difficulties": [{
                    "id": 49,
                    "createdAt": "2013-12-18T22:45:50.000+00:00",
                    "name": "ARCADE/PCB",
                    "sortOrder": 49
                }, {
                    "id": 50,
                    "createdAt": "2013-12-18T22:45:50.000+00:00",
                    "name": "ARCADE/360",
                    "sortOrder": 50
                }, {"id": 51, "createdAt": "2013-12-18T22:45:50.000+00:00", "name": "NOVICE", "sortOrder": 51}],
                "modes": [{
                    "id": 77,
                    "createdAt": "2013-12-18T22:45:50.000+00:00",
                    "name": "PCB",
                    "sortOrder": 77,
                    "scoreType": ""
                }, {
                    "id": 78,
                    "createdAt": "2013-12-18T22:45:50.000+00:00",
                    "name": "Xbox 360",
                    "sortOrder": 78,
                    "scoreType": ""
                }, {
                    "id": 79,
                    "createdAt": "2013-12-18T22:45:50.000+00:00",
                    "name": "Black Label",
                    "sortOrder": 79,
                    "scoreType": ""
                }, {
                    "id": 80,
                    "createdAt": "2013-12-18T22:45:50.000+00:00",
                    "name": "Arrange",
                    "sortOrder": 80,
                    "scoreType": ""
                }, {
                    "id": 81,
                    "createdAt": "2013-12-18T22:45:50.000+00:00",
                    "name": "Novice Xbox360",
                    "sortOrder": 81,
                    "scoreType": ""
                }, {
                    "id": 82,
                    "createdAt": "2013-12-18T22:45:50.000+00:00",
                    "name": "Novice Black Label",
                    "sortOrder": 82,
                    "scoreType": ""
                }, {
                    "id": 83,
                    "createdAt": "2013-12-18T22:45:50.000+00:00",
                    "name": "Omake",
                    "sortOrder": 83,
                    "scoreType": ""
                }, {
                    "id": 84,
                    "createdAt": "2013-12-18T22:45:50.000+00:00",
                    "name": "Overheat - PCB & Xbox 360",
                    "sortOrder": 84,
                    "scoreType": ""
                }],
                "ships": [],
                "stages": [{
                    "id": 393,
                    "createdAt": "2013-12-18T22:45:50.000+00:00",
                    "name": "1",
                    "sortOrder": 3930
                }, {
                    "id": 394,
                    "createdAt": "2013-12-18T22:45:50.000+00:00",
                    "name": "1 BOSS",
                    "sortOrder": 3940
                }, {
                    "id": 395,
                    "createdAt": "2013-12-18T22:45:50.000+00:00",
                    "name": "2",
                    "sortOrder": 3950
                }, {
                    "id": 396,
                    "createdAt": "2013-12-18T22:45:50.000+00:00",
                    "name": "2 BOSS",
                    "sortOrder": 3960
                }, {
                    "id": 397,
                    "createdAt": "2013-12-18T22:45:50.000+00:00",
                    "name": "3",
                    "sortOrder": 3970
                }, {
                    "id": 398,
                    "createdAt": "2013-12-18T22:45:50.000+00:00",
                    "name": "3 BOSS",
                    "sortOrder": 3980
                }, {
                    "id": 399,
                    "createdAt": "2013-12-18T22:45:50.000+00:00",
                    "name": "4",
                    "sortOrder": 3990
                }, {
                    "id": 400,
                    "createdAt": "2013-12-18T22:45:50.000+00:00",
                    "name": "4 BOSS",
                    "sortOrder": 4000
                }, {
                    "id": 401,
                    "createdAt": "2013-12-18T22:45:50.000+00:00",
                    "name": "5",
                    "sortOrder": 4010
                }, {
                    "id": 402,
                    "createdAt": "2013-12-18T22:45:50.000+00:00",
                    "name": "5 BOSS",
                    "sortOrder": 4020
                }, {
                    "id": 403,
                    "createdAt": "2013-12-18T22:45:50.000+00:00",
                    "name": "6",
                    "sortOrder": 4030
                }, {
                    "id": 404,
                    "createdAt": "2013-12-18T22:45:50.000+00:00",
                    "name": "6 BOSS 1",
                    "sortOrder": 4040
                }, {
                    "id": 405,
                    "createdAt": "2013-12-18T22:45:50.000+00:00",
                    "name": "6 BOSS 2",
                    "sortOrder": 4050
                }, {"id": 406, "createdAt": "2013-12-18T22:45:50.000+00:00", "name": "ALL", "sortOrder": 4060}]
            },
            "player": {
                "id": 7,
                "createdAt": "2013-11-29T22:44:59.000+00:00",
                "name": "-S.L-",
                "shmupUserId": 32553,
                "hideMedals": false,
                "vip": true,
                "superAdministrator": false,
                "administrator": true,
                "authenticated": true
            },
            "stage": {"id": 400, "createdAt": "2013-12-18T22:45:50.000+00:00", "name": "4 BOSS", "sortOrder": 4000},
            "mode": {
                "id": 77,
                "createdAt": "2013-12-18T22:45:50.000+00:00",
                "name": "PCB",
                "sortOrder": 77,
                "scoreType": ""
            },
            "difficulty": {
                "id": 49,
                "createdAt": "2013-12-18T22:45:50.000+00:00",
                "name": "ARCADE/PCB",
                "sortOrder": 49
            },
            "ship": null,
            "platform": {"id": 56, "createdAt": "2013-12-18T22:45:50.000+00:00", "name": "PCB"},
            "comment": "Ageha",
            "photo": null,
            "inp": null,
            "replay": "",
            "value": 142701370,
            "onecc": false,
            "progression": null,
            "rank": null,
            "gapWithPreviousScore": null,
            "timeScore": false,
            "gameTitle": "Espgaluda II PCB ARCADE/PCB",
            "1CC": false,
            "stageName": "4 BOSS",
            "vip": true,
            "createdSinceInFrench": "il y a 3 semaines"
        }, {
            "id": 16724,
            "createdAt": "2020-08-16T22:23:15.000+00:00",
            "game": {
                "id": 25,
                "createdAt": "2013-12-18T22:45:50.000+00:00",
                "thread": "http://forum.shmup.com/viewtopic.php?f=20&t=15093",
                "cover": "/covers/25.jpg",
                "title": "Espgaluda II",
                "platforms": [{"id": 56, "createdAt": "2013-12-18T22:45:50.000+00:00", "name": "PCB"}, {
                    "id": 57,
                    "createdAt": "2013-12-18T22:45:50.000+00:00",
                    "name": "X360"
                }],
                "difficulties": [{
                    "id": 49,
                    "createdAt": "2013-12-18T22:45:50.000+00:00",
                    "name": "ARCADE/PCB",
                    "sortOrder": 49
                }, {
                    "id": 50,
                    "createdAt": "2013-12-18T22:45:50.000+00:00",
                    "name": "ARCADE/360",
                    "sortOrder": 50
                }, {"id": 51, "createdAt": "2013-12-18T22:45:50.000+00:00", "name": "NOVICE", "sortOrder": 51}],
                "modes": [{
                    "id": 77,
                    "createdAt": "2013-12-18T22:45:50.000+00:00",
                    "name": "PCB",
                    "sortOrder": 77,
                    "scoreType": ""
                }, {
                    "id": 78,
                    "createdAt": "2013-12-18T22:45:50.000+00:00",
                    "name": "Xbox 360",
                    "sortOrder": 78,
                    "scoreType": ""
                }, {
                    "id": 79,
                    "createdAt": "2013-12-18T22:45:50.000+00:00",
                    "name": "Black Label",
                    "sortOrder": 79,
                    "scoreType": ""
                }, {
                    "id": 80,
                    "createdAt": "2013-12-18T22:45:50.000+00:00",
                    "name": "Arrange",
                    "sortOrder": 80,
                    "scoreType": ""
                }, {
                    "id": 81,
                    "createdAt": "2013-12-18T22:45:50.000+00:00",
                    "name": "Novice Xbox360",
                    "sortOrder": 81,
                    "scoreType": ""
                }, {
                    "id": 82,
                    "createdAt": "2013-12-18T22:45:50.000+00:00",
                    "name": "Novice Black Label",
                    "sortOrder": 82,
                    "scoreType": ""
                }, {
                    "id": 83,
                    "createdAt": "2013-12-18T22:45:50.000+00:00",
                    "name": "Omake",
                    "sortOrder": 83,
                    "scoreType": ""
                }, {
                    "id": 84,
                    "createdAt": "2013-12-18T22:45:50.000+00:00",
                    "name": "Overheat - PCB & Xbox 360",
                    "sortOrder": 84,
                    "scoreType": ""
                }],
                "ships": [],
                "stages": [{
                    "id": 393,
                    "createdAt": "2013-12-18T22:45:50.000+00:00",
                    "name": "1",
                    "sortOrder": 3930
                }, {
                    "id": 394,
                    "createdAt": "2013-12-18T22:45:50.000+00:00",
                    "name": "1 BOSS",
                    "sortOrder": 3940
                }, {
                    "id": 395,
                    "createdAt": "2013-12-18T22:45:50.000+00:00",
                    "name": "2",
                    "sortOrder": 3950
                }, {
                    "id": 396,
                    "createdAt": "2013-12-18T22:45:50.000+00:00",
                    "name": "2 BOSS",
                    "sortOrder": 3960
                }, {
                    "id": 397,
                    "createdAt": "2013-12-18T22:45:50.000+00:00",
                    "name": "3",
                    "sortOrder": 3970
                }, {
                    "id": 398,
                    "createdAt": "2013-12-18T22:45:50.000+00:00",
                    "name": "3 BOSS",
                    "sortOrder": 3980
                }, {
                    "id": 399,
                    "createdAt": "2013-12-18T22:45:50.000+00:00",
                    "name": "4",
                    "sortOrder": 3990
                }, {
                    "id": 400,
                    "createdAt": "2013-12-18T22:45:50.000+00:00",
                    "name": "4 BOSS",
                    "sortOrder": 4000
                }, {
                    "id": 401,
                    "createdAt": "2013-12-18T22:45:50.000+00:00",
                    "name": "5",
                    "sortOrder": 4010
                }, {
                    "id": 402,
                    "createdAt": "2013-12-18T22:45:50.000+00:00",
                    "name": "5 BOSS",
                    "sortOrder": 4020
                }, {
                    "id": 403,
                    "createdAt": "2013-12-18T22:45:50.000+00:00",
                    "name": "6",
                    "sortOrder": 4030
                }, {
                    "id": 404,
                    "createdAt": "2013-12-18T22:45:50.000+00:00",
                    "name": "6 BOSS 1",
                    "sortOrder": 4040
                }, {
                    "id": 405,
                    "createdAt": "2013-12-18T22:45:50.000+00:00",
                    "name": "6 BOSS 2",
                    "sortOrder": 4050
                }, {"id": 406, "createdAt": "2013-12-18T22:45:50.000+00:00", "name": "ALL", "sortOrder": 4060}]
            },
            "player": {
                "id": 7,
                "createdAt": "2013-11-29T22:44:59.000+00:00",
                "name": "-S.L-",
                "shmupUserId": 32553,
                "hideMedals": false,
                "vip": true,
                "superAdministrator": false,
                "administrator": true,
                "authenticated": true
            },
            "stage": {"id": 400, "createdAt": "2013-12-18T22:45:50.000+00:00", "name": "4 BOSS", "sortOrder": 4000},
            "mode": {
                "id": 77,
                "createdAt": "2013-12-18T22:45:50.000+00:00",
                "name": "PCB",
                "sortOrder": 77,
                "scoreType": ""
            },
            "difficulty": {
                "id": 49,
                "createdAt": "2013-12-18T22:45:50.000+00:00",
                "name": "ARCADE/PCB",
                "sortOrder": 49
            },
            "ship": null,
            "platform": {"id": 56, "createdAt": "2013-12-18T22:45:50.000+00:00", "name": "PCB"},
            "comment": "Ageha",
            "photo": "http://hiscores.shmup.com/photos/1597616595106-IMG20200816231825resized20200816111854893.jpg",
            "inp": null,
            "replay": "",
            "value": 142701380,
            "onecc": false,
            "progression": 0,
            "rank": null,
            "gapWithPreviousScore": 0,
            "timeScore": false,
            "gameTitle": "Espgaluda II PCB ARCADE/PCB",
            "1CC": false,
            "stageName": "4 BOSS",
            "vip": true,
            "createdSinceInFrench": "il y a 3 semaines"
        }, {
            "id": 16736,
            "createdAt": "2020-08-17T23:45:05.000+00:00",
            "game": {
                "id": 25,
                "createdAt": "2013-12-18T22:45:50.000+00:00",
                "thread": "http://forum.shmup.com/viewtopic.php?f=20&t=15093",
                "cover": "/covers/25.jpg",
                "title": "Espgaluda II",
                "platforms": [{"id": 56, "createdAt": "2013-12-18T22:45:50.000+00:00", "name": "PCB"}, {
                    "id": 57,
                    "createdAt": "2013-12-18T22:45:50.000+00:00",
                    "name": "X360"
                }],
                "difficulties": [{
                    "id": 49,
                    "createdAt": "2013-12-18T22:45:50.000+00:00",
                    "name": "ARCADE/PCB",
                    "sortOrder": 49
                }, {
                    "id": 50,
                    "createdAt": "2013-12-18T22:45:50.000+00:00",
                    "name": "ARCADE/360",
                    "sortOrder": 50
                }, {"id": 51, "createdAt": "2013-12-18T22:45:50.000+00:00", "name": "NOVICE", "sortOrder": 51}],
                "modes": [{
                    "id": 77,
                    "createdAt": "2013-12-18T22:45:50.000+00:00",
                    "name": "PCB",
                    "sortOrder": 77,
                    "scoreType": ""
                }, {
                    "id": 78,
                    "createdAt": "2013-12-18T22:45:50.000+00:00",
                    "name": "Xbox 360",
                    "sortOrder": 78,
                    "scoreType": ""
                }, {
                    "id": 79,
                    "createdAt": "2013-12-18T22:45:50.000+00:00",
                    "name": "Black Label",
                    "sortOrder": 79,
                    "scoreType": ""
                }, {
                    "id": 80,
                    "createdAt": "2013-12-18T22:45:50.000+00:00",
                    "name": "Arrange",
                    "sortOrder": 80,
                    "scoreType": ""
                }, {
                    "id": 81,
                    "createdAt": "2013-12-18T22:45:50.000+00:00",
                    "name": "Novice Xbox360",
                    "sortOrder": 81,
                    "scoreType": ""
                }, {
                    "id": 82,
                    "createdAt": "2013-12-18T22:45:50.000+00:00",
                    "name": "Novice Black Label",
                    "sortOrder": 82,
                    "scoreType": ""
                }, {
                    "id": 83,
                    "createdAt": "2013-12-18T22:45:50.000+00:00",
                    "name": "Omake",
                    "sortOrder": 83,
                    "scoreType": ""
                }, {
                    "id": 84,
                    "createdAt": "2013-12-18T22:45:50.000+00:00",
                    "name": "Overheat - PCB & Xbox 360",
                    "sortOrder": 84,
                    "scoreType": ""
                }],
                "ships": [],
                "stages": [{
                    "id": 393,
                    "createdAt": "2013-12-18T22:45:50.000+00:00",
                    "name": "1",
                    "sortOrder": 3930
                }, {
                    "id": 394,
                    "createdAt": "2013-12-18T22:45:50.000+00:00",
                    "name": "1 BOSS",
                    "sortOrder": 3940
                }, {
                    "id": 395,
                    "createdAt": "2013-12-18T22:45:50.000+00:00",
                    "name": "2",
                    "sortOrder": 3950
                }, {
                    "id": 396,
                    "createdAt": "2013-12-18T22:45:50.000+00:00",
                    "name": "2 BOSS",
                    "sortOrder": 3960
                }, {
                    "id": 397,
                    "createdAt": "2013-12-18T22:45:50.000+00:00",
                    "name": "3",
                    "sortOrder": 3970
                }, {
                    "id": 398,
                    "createdAt": "2013-12-18T22:45:50.000+00:00",
                    "name": "3 BOSS",
                    "sortOrder": 3980
                }, {
                    "id": 399,
                    "createdAt": "2013-12-18T22:45:50.000+00:00",
                    "name": "4",
                    "sortOrder": 3990
                }, {
                    "id": 400,
                    "createdAt": "2013-12-18T22:45:50.000+00:00",
                    "name": "4 BOSS",
                    "sortOrder": 4000
                }, {
                    "id": 401,
                    "createdAt": "2013-12-18T22:45:50.000+00:00",
                    "name": "5",
                    "sortOrder": 4010
                }, {
                    "id": 402,
                    "createdAt": "2013-12-18T22:45:50.000+00:00",
                    "name": "5 BOSS",
                    "sortOrder": 4020
                }, {
                    "id": 403,
                    "createdAt": "2013-12-18T22:45:50.000+00:00",
                    "name": "6",
                    "sortOrder": 4030
                }, {
                    "id": 404,
                    "createdAt": "2013-12-18T22:45:50.000+00:00",
                    "name": "6 BOSS 1",
                    "sortOrder": 4040
                }, {
                    "id": 405,
                    "createdAt": "2013-12-18T22:45:50.000+00:00",
                    "name": "6 BOSS 2",
                    "sortOrder": 4050
                }, {"id": 406, "createdAt": "2013-12-18T22:45:50.000+00:00", "name": "ALL", "sortOrder": 4060}]
            },
            "player": {
                "id": 7,
                "createdAt": "2013-11-29T22:44:59.000+00:00",
                "name": "-S.L-",
                "shmupUserId": 32553,
                "hideMedals": false,
                "vip": true,
                "superAdministrator": false,
                "administrator": true,
                "authenticated": true
            },
            "stage": {"id": 400, "createdAt": "2013-12-18T22:45:50.000+00:00", "name": "4 BOSS", "sortOrder": 4000},
            "mode": {
                "id": 77,
                "createdAt": "2013-12-18T22:45:50.000+00:00",
                "name": "PCB",
                "sortOrder": 77,
                "scoreType": ""
            },
            "difficulty": {
                "id": 49,
                "createdAt": "2013-12-18T22:45:50.000+00:00",
                "name": "ARCADE/PCB",
                "sortOrder": 49
            },
            "ship": null,
            "platform": {"id": 56, "createdAt": "2013-12-18T22:45:50.000+00:00", "name": "PCB"},
            "comment": "Ageha",
            "photo": "http://hiscores.shmup.com/photos/1597707905618-IMG20200818004333resized20200818124357705.jpg",
            "inp": null,
            "replay": "",
            "value": 156995039,
            "onecc": false,
            "progression": 2,
            "rank": null,
            "gapWithPreviousScore": 10,
            "timeScore": false,
            "gameTitle": "Espgaluda II PCB ARCADE/PCB",
            "1CC": false,
            "stageName": "4 BOSS",
            "vip": true,
            "createdSinceInFrench": "il y a 3 semaines"
        }, {
            "id": 16805,
            "createdAt": "2020-08-29T00:29:50.000+00:00",
            "game": {
                "id": 25,
                "createdAt": "2013-12-18T22:45:50.000+00:00",
                "thread": "http://forum.shmup.com/viewtopic.php?f=20&t=15093",
                "cover": "/covers/25.jpg",
                "title": "Espgaluda II",
                "platforms": [{"id": 56, "createdAt": "2013-12-18T22:45:50.000+00:00", "name": "PCB"}, {
                    "id": 57,
                    "createdAt": "2013-12-18T22:45:50.000+00:00",
                    "name": "X360"
                }],
                "difficulties": [{
                    "id": 49,
                    "createdAt": "2013-12-18T22:45:50.000+00:00",
                    "name": "ARCADE/PCB",
                    "sortOrder": 49
                }, {
                    "id": 50,
                    "createdAt": "2013-12-18T22:45:50.000+00:00",
                    "name": "ARCADE/360",
                    "sortOrder": 50
                }, {"id": 51, "createdAt": "2013-12-18T22:45:50.000+00:00", "name": "NOVICE", "sortOrder": 51}],
                "modes": [{
                    "id": 77,
                    "createdAt": "2013-12-18T22:45:50.000+00:00",
                    "name": "PCB",
                    "sortOrder": 77,
                    "scoreType": ""
                }, {
                    "id": 78,
                    "createdAt": "2013-12-18T22:45:50.000+00:00",
                    "name": "Xbox 360",
                    "sortOrder": 78,
                    "scoreType": ""
                }, {
                    "id": 79,
                    "createdAt": "2013-12-18T22:45:50.000+00:00",
                    "name": "Black Label",
                    "sortOrder": 79,
                    "scoreType": ""
                }, {
                    "id": 80,
                    "createdAt": "2013-12-18T22:45:50.000+00:00",
                    "name": "Arrange",
                    "sortOrder": 80,
                    "scoreType": ""
                }, {
                    "id": 81,
                    "createdAt": "2013-12-18T22:45:50.000+00:00",
                    "name": "Novice Xbox360",
                    "sortOrder": 81,
                    "scoreType": ""
                }, {
                    "id": 82,
                    "createdAt": "2013-12-18T22:45:50.000+00:00",
                    "name": "Novice Black Label",
                    "sortOrder": 82,
                    "scoreType": ""
                }, {
                    "id": 83,
                    "createdAt": "2013-12-18T22:45:50.000+00:00",
                    "name": "Omake",
                    "sortOrder": 83,
                    "scoreType": ""
                }, {
                    "id": 84,
                    "createdAt": "2013-12-18T22:45:50.000+00:00",
                    "name": "Overheat - PCB & Xbox 360",
                    "sortOrder": 84,
                    "scoreType": ""
                }],
                "ships": [],
                "stages": [{
                    "id": 393,
                    "createdAt": "2013-12-18T22:45:50.000+00:00",
                    "name": "1",
                    "sortOrder": 3930
                }, {
                    "id": 394,
                    "createdAt": "2013-12-18T22:45:50.000+00:00",
                    "name": "1 BOSS",
                    "sortOrder": 3940
                }, {
                    "id": 395,
                    "createdAt": "2013-12-18T22:45:50.000+00:00",
                    "name": "2",
                    "sortOrder": 3950
                }, {
                    "id": 396,
                    "createdAt": "2013-12-18T22:45:50.000+00:00",
                    "name": "2 BOSS",
                    "sortOrder": 3960
                }, {
                    "id": 397,
                    "createdAt": "2013-12-18T22:45:50.000+00:00",
                    "name": "3",
                    "sortOrder": 3970
                }, {
                    "id": 398,
                    "createdAt": "2013-12-18T22:45:50.000+00:00",
                    "name": "3 BOSS",
                    "sortOrder": 3980
                }, {
                    "id": 399,
                    "createdAt": "2013-12-18T22:45:50.000+00:00",
                    "name": "4",
                    "sortOrder": 3990
                }, {
                    "id": 400,
                    "createdAt": "2013-12-18T22:45:50.000+00:00",
                    "name": "4 BOSS",
                    "sortOrder": 4000
                }, {
                    "id": 401,
                    "createdAt": "2013-12-18T22:45:50.000+00:00",
                    "name": "5",
                    "sortOrder": 4010
                }, {
                    "id": 402,
                    "createdAt": "2013-12-18T22:45:50.000+00:00",
                    "name": "5 BOSS",
                    "sortOrder": 4020
                }, {
                    "id": 403,
                    "createdAt": "2013-12-18T22:45:50.000+00:00",
                    "name": "6",
                    "sortOrder": 4030
                }, {
                    "id": 404,
                    "createdAt": "2013-12-18T22:45:50.000+00:00",
                    "name": "6 BOSS 1",
                    "sortOrder": 4040
                }, {
                    "id": 405,
                    "createdAt": "2013-12-18T22:45:50.000+00:00",
                    "name": "6 BOSS 2",
                    "sortOrder": 4050
                }, {"id": 406, "createdAt": "2013-12-18T22:45:50.000+00:00", "name": "ALL", "sortOrder": 4060}]
            },
            "player": {
                "id": 7,
                "createdAt": "2013-11-29T22:44:59.000+00:00",
                "name": "-S.L-",
                "shmupUserId": 32553,
                "hideMedals": false,
                "vip": true,
                "superAdministrator": false,
                "administrator": true,
                "authenticated": true
            },
            "stage": {"id": 401, "createdAt": "2013-12-18T22:45:50.000+00:00", "name": "5", "sortOrder": 4010},
            "mode": {
                "id": 77,
                "createdAt": "2013-12-18T22:45:50.000+00:00",
                "name": "PCB",
                "sortOrder": 77,
                "scoreType": ""
            },
            "difficulty": {
                "id": 49,
                "createdAt": "2013-12-18T22:45:50.000+00:00",
                "name": "ARCADE/PCB",
                "sortOrder": 49
            },
            "ship": null,
            "platform": {"id": 56, "createdAt": "2013-12-18T22:45:50.000+00:00", "name": "PCB"},
            "comment": "Ageha",
            "photo": "http://hiscores.shmup.com/photos/1598660990684-IMG20200829012340resized20200829012512621.jpg",
            "inp": null,
            "replay": "",
            "value": 242064025,
            "onecc": false,
            "progression": 3,
            "rank": null,
            "gapWithPreviousScore": 54,
            "timeScore": false,
            "gameTitle": "Espgaluda II PCB ARCADE/PCB",
            "1CC": false,
            "stageName": "5",
            "vip": true,
            "createdSinceInFrench": "il y a 1 semaine"
        }, {
            "id": 16825,
            "createdAt": "2020-09-04T23:25:02.000+00:00",
            "game": {
                "id": 25,
                "createdAt": "2013-12-18T22:45:50.000+00:00",
                "thread": "http://forum.shmup.com/viewtopic.php?f=20&t=15093",
                "cover": "/covers/25.jpg",
                "title": "Espgaluda II",
                "platforms": [{"id": 56, "createdAt": "2013-12-18T22:45:50.000+00:00", "name": "PCB"}, {
                    "id": 57,
                    "createdAt": "2013-12-18T22:45:50.000+00:00",
                    "name": "X360"
                }],
                "difficulties": [{
                    "id": 49,
                    "createdAt": "2013-12-18T22:45:50.000+00:00",
                    "name": "ARCADE/PCB",
                    "sortOrder": 49
                }, {
                    "id": 50,
                    "createdAt": "2013-12-18T22:45:50.000+00:00",
                    "name": "ARCADE/360",
                    "sortOrder": 50
                }, {"id": 51, "createdAt": "2013-12-18T22:45:50.000+00:00", "name": "NOVICE", "sortOrder": 51}],
                "modes": [{
                    "id": 77,
                    "createdAt": "2013-12-18T22:45:50.000+00:00",
                    "name": "PCB",
                    "sortOrder": 77,
                    "scoreType": ""
                }, {
                    "id": 78,
                    "createdAt": "2013-12-18T22:45:50.000+00:00",
                    "name": "Xbox 360",
                    "sortOrder": 78,
                    "scoreType": ""
                }, {
                    "id": 79,
                    "createdAt": "2013-12-18T22:45:50.000+00:00",
                    "name": "Black Label",
                    "sortOrder": 79,
                    "scoreType": ""
                }, {
                    "id": 80,
                    "createdAt": "2013-12-18T22:45:50.000+00:00",
                    "name": "Arrange",
                    "sortOrder": 80,
                    "scoreType": ""
                }, {
                    "id": 81,
                    "createdAt": "2013-12-18T22:45:50.000+00:00",
                    "name": "Novice Xbox360",
                    "sortOrder": 81,
                    "scoreType": ""
                }, {
                    "id": 82,
                    "createdAt": "2013-12-18T22:45:50.000+00:00",
                    "name": "Novice Black Label",
                    "sortOrder": 82,
                    "scoreType": ""
                }, {
                    "id": 83,
                    "createdAt": "2013-12-18T22:45:50.000+00:00",
                    "name": "Omake",
                    "sortOrder": 83,
                    "scoreType": ""
                }, {
                    "id": 84,
                    "createdAt": "2013-12-18T22:45:50.000+00:00",
                    "name": "Overheat - PCB & Xbox 360",
                    "sortOrder": 84,
                    "scoreType": ""
                }],
                "ships": [],
                "stages": [{
                    "id": 393,
                    "createdAt": "2013-12-18T22:45:50.000+00:00",
                    "name": "1",
                    "sortOrder": 3930
                }, {
                    "id": 394,
                    "createdAt": "2013-12-18T22:45:50.000+00:00",
                    "name": "1 BOSS",
                    "sortOrder": 3940
                }, {
                    "id": 395,
                    "createdAt": "2013-12-18T22:45:50.000+00:00",
                    "name": "2",
                    "sortOrder": 3950
                }, {
                    "id": 396,
                    "createdAt": "2013-12-18T22:45:50.000+00:00",
                    "name": "2 BOSS",
                    "sortOrder": 3960
                }, {
                    "id": 397,
                    "createdAt": "2013-12-18T22:45:50.000+00:00",
                    "name": "3",
                    "sortOrder": 3970
                }, {
                    "id": 398,
                    "createdAt": "2013-12-18T22:45:50.000+00:00",
                    "name": "3 BOSS",
                    "sortOrder": 3980
                }, {
                    "id": 399,
                    "createdAt": "2013-12-18T22:45:50.000+00:00",
                    "name": "4",
                    "sortOrder": 3990
                }, {
                    "id": 400,
                    "createdAt": "2013-12-18T22:45:50.000+00:00",
                    "name": "4 BOSS",
                    "sortOrder": 4000
                }, {
                    "id": 401,
                    "createdAt": "2013-12-18T22:45:50.000+00:00",
                    "name": "5",
                    "sortOrder": 4010
                }, {
                    "id": 402,
                    "createdAt": "2013-12-18T22:45:50.000+00:00",
                    "name": "5 BOSS",
                    "sortOrder": 4020
                }, {
                    "id": 403,
                    "createdAt": "2013-12-18T22:45:50.000+00:00",
                    "name": "6",
                    "sortOrder": 4030
                }, {
                    "id": 404,
                    "createdAt": "2013-12-18T22:45:50.000+00:00",
                    "name": "6 BOSS 1",
                    "sortOrder": 4040
                }, {
                    "id": 405,
                    "createdAt": "2013-12-18T22:45:50.000+00:00",
                    "name": "6 BOSS 2",
                    "sortOrder": 4050
                }, {"id": 406, "createdAt": "2013-12-18T22:45:50.000+00:00", "name": "ALL", "sortOrder": 4060}]
            },
            "player": {
                "id": 7,
                "createdAt": "2013-11-29T22:44:59.000+00:00",
                "name": "-S.L-",
                "shmupUserId": 32553,
                "hideMedals": false,
                "vip": true,
                "superAdministrator": false,
                "administrator": true,
                "authenticated": true
            },
            "stage": {"id": 403, "createdAt": "2013-12-18T22:45:50.000+00:00", "name": "6", "sortOrder": 4030},
            "mode": {
                "id": 77,
                "createdAt": "2013-12-18T22:45:50.000+00:00",
                "name": "PCB",
                "sortOrder": 77,
                "scoreType": ""
            },
            "difficulty": {
                "id": 49,
                "createdAt": "2013-12-18T22:45:50.000+00:00",
                "name": "ARCADE/PCB",
                "sortOrder": 49
            },
            "ship": null,
            "platform": {"id": 56, "createdAt": "2013-12-18T22:45:50.000+00:00", "name": "PCB"},
            "comment": "Ageha",
            "photo": "http://hiscores.shmup.com/photos/1599261902931-IMG20200905002016resized20200905122215292.jpg",
            "inp": null,
            "replay": "",
            "value": 263310727,
            "onecc": false,
            "progression": 0,
            "rank": 5,
            "gapWithPreviousScore": 9,
            "timeScore": false,
            "gameTitle": "Espgaluda II PCB ARCADE/PCB",
            "1CC": false,
            "stageName": "6",
            "vip": true,
            "createdSinceInFrench": "il y a 1 jour"
        }],
    })
});
