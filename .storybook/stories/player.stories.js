import PlayerTemplate from "../../src/components/templates/PlayerTemplate";
import {action} from "@storybook/addon-actions";

const methods = {
  goToGame: action('goToGame'),
  goToPlatform: action('goToPlatform'),
};

export default {
    title: "Template/Player",
};

export const withoutPlayer = () => ({
    components: {PlayerTemplate},
    template: `
      <player-template :scores="scores" :loading="false"/>`,
    data: () => ({
        scores: []
    })
});

export const withPlayerLoading = () => ({
    components: {PlayerTemplate},
    template: `
      <player-template :scores="scores" :loading="true"/>`,
    data: () => ({
        scores: []
    })
});

export const withPlayer = () => ({
    components: {PlayerTemplate},
    template: `
      <player-template :scores="scores" :loading="false" @goToGame="goToGame" @goToPlatform="goToPlatform" />`,
    methods,
    data: () => ({
        scores: [{
            "id": 5356,
            "createdAt": "2014-02-20T22:21:20.000+00:00",
            "game": {
                "id": 59,
                "createdAt": "2013-12-27T21:34:26.000+00:00",
                "thread": "http://forum.shmup.com/viewtopic.php?t=9571",
                "cover": "/covers/59.jpg",
                "title": "Andro Dunos",
                "platforms": [{"id": 126, "createdAt": "2013-12-27T21:34:26.000+00:00", "name": "MAME"}, {
                    "id": 125,
                    "createdAt": "2013-12-27T21:34:26.000+00:00",
                    "name": "NG"
                }],
                "difficulties": [{
                    "id": 114,
                    "createdAt": "2013-12-27T21:34:26.000+00:00",
                    "name": "MVS",
                    "sortOrder": 114
                }],
                "modes": [],
                "ships": [],
                "stages": [{
                    "id": 979,
                    "createdAt": "2013-12-27T21:34:26.000+00:00",
                    "name": "1-1",
                    "sortOrder": 9790
                }, {
                    "id": 980,
                    "createdAt": "2013-12-27T21:34:26.000+00:00",
                    "name": "1-1 BOSS",
                    "sortOrder": 9800
                }, {
                    "id": 981,
                    "createdAt": "2013-12-27T21:34:26.000+00:00",
                    "name": "1-2",
                    "sortOrder": 9810
                }, {
                    "id": 982,
                    "createdAt": "2013-12-27T21:34:26.000+00:00",
                    "name": "1-2 BOSS",
                    "sortOrder": 9820
                }, {
                    "id": 983,
                    "createdAt": "2013-12-27T21:34:26.000+00:00",
                    "name": "1-3",
                    "sortOrder": 9830
                }, {
                    "id": 984,
                    "createdAt": "2013-12-27T21:34:26.000+00:00",
                    "name": "1-3 BOSS",
                    "sortOrder": 9840
                }, {
                    "id": 985,
                    "createdAt": "2013-12-27T21:34:26.000+00:00",
                    "name": "1-4",
                    "sortOrder": 9850
                }, {
                    "id": 986,
                    "createdAt": "2013-12-27T21:34:26.000+00:00",
                    "name": "1-4 BOSS",
                    "sortOrder": 9860
                }, {
                    "id": 987,
                    "createdAt": "2013-12-27T21:34:26.000+00:00",
                    "name": "1-5",
                    "sortOrder": 9870
                }, {
                    "id": 988,
                    "createdAt": "2013-12-27T21:34:26.000+00:00",
                    "name": "1-5 BOSS",
                    "sortOrder": 9880
                }, {
                    "id": 989,
                    "createdAt": "2013-12-27T21:34:26.000+00:00",
                    "name": "1-6",
                    "sortOrder": 9890
                }, {
                    "id": 990,
                    "createdAt": "2013-12-27T21:34:26.000+00:00",
                    "name": "1-6 BOSS",
                    "sortOrder": 9900
                }, {
                    "id": 991,
                    "createdAt": "2013-12-27T21:34:26.000+00:00",
                    "name": "1-7",
                    "sortOrder": 9910
                }, {
                    "id": 992,
                    "createdAt": "2013-12-27T21:34:26.000+00:00",
                    "name": "1-7 BOSS",
                    "sortOrder": 9920
                }, {
                    "id": 993,
                    "createdAt": "2013-12-27T21:34:26.000+00:00",
                    "name": "1ALL",
                    "sortOrder": 9930
                }, {
                    "id": 994,
                    "createdAt": "2013-12-27T21:43:02.000+00:00",
                    "name": "2-1",
                    "sortOrder": 9940
                }, {
                    "id": 995,
                    "createdAt": "2013-12-27T21:43:02.000+00:00",
                    "name": "2-2",
                    "sortOrder": 9950
                }, {
                    "id": 996,
                    "createdAt": "2013-12-27T21:43:02.000+00:00",
                    "name": "2-2 BOSS",
                    "sortOrder": 9960
                }, {
                    "id": 997,
                    "createdAt": "2013-12-27T21:43:02.000+00:00",
                    "name": "2-3",
                    "sortOrder": 9970
                }, {
                    "id": 998,
                    "createdAt": "2013-12-27T21:43:02.000+00:00",
                    "name": "2-3 BOSS",
                    "sortOrder": 9980
                }, {
                    "id": 999,
                    "createdAt": "2013-12-27T21:43:02.000+00:00",
                    "name": "2-4",
                    "sortOrder": 9990
                }, {
                    "id": 1000,
                    "createdAt": "2013-12-27T21:43:02.000+00:00",
                    "name": "2-4 BOSS",
                    "sortOrder": 10000
                }, {
                    "id": 1001,
                    "createdAt": "2013-12-27T21:43:02.000+00:00",
                    "name": "2-5",
                    "sortOrder": 10010
                }, {
                    "id": 1002,
                    "createdAt": "2013-12-27T21:43:02.000+00:00",
                    "name": "2-5 BOSS",
                    "sortOrder": 10020
                }, {
                    "id": 1003,
                    "createdAt": "2013-12-27T21:43:02.000+00:00",
                    "name": "2-6",
                    "sortOrder": 10030
                }, {
                    "id": 1004,
                    "createdAt": "2013-12-27T21:43:02.000+00:00",
                    "name": "2-6 BOSS",
                    "sortOrder": 10040
                }, {
                    "id": 1005,
                    "createdAt": "2013-12-27T21:43:02.000+00:00",
                    "name": "2-7",
                    "sortOrder": 10050
                }, {
                    "id": 1006,
                    "createdAt": "2013-12-27T21:43:02.000+00:00",
                    "name": "2-7 BOSS",
                    "sortOrder": 10060
                }, {"id": 1007, "createdAt": "2013-12-27T21:43:02.000+00:00", "name": "2ALL", "sortOrder": 10070}]
            },
            "player": {
                "id": 1,
                "createdAt": "2013-11-29T19:13:32.000+00:00",
                "name": "anzymus",
                "shmupUserId": 33489,
                "hideMedals": false,
                "vip": true,
                "superAdministrator": true,
                "administrator": true,
                "authenticated": true
            },
            "stage": {"id": 993, "createdAt": "2013-12-27T21:34:26.000+00:00", "name": "1ALL", "sortOrder": 9930},
            "mode": null,
            "difficulty": {"id": 114, "createdAt": "2013-12-27T21:34:26.000+00:00", "name": "MVS", "sortOrder": 114},
            "ship": null,
            "platform": {"id": 125, "createdAt": "2013-12-27T21:34:26.000+00:00", "name": "NG"},
            "comment": "1CC ! Mon premier sur un shmup !\r\n\r\nJe pensais faire une partie tranquille, aller jusqu'au dernier niveau et le travailler tranquillement. Et puis, je one-life jusqu'au niveau 5, je fais une belle partie j'arrive au dernier niveau, ça se passe plutôt bien. Je dépasse l'endroit où je mourrais dernièrement ... Et arrive le dernier boss. Alors là, le pauvre, il prend bombe sur bome, puis il passe en deuxiième forme. Mon coeur s'accélère, je reste concentré, l'enjeu est énorme, je me dis que c'est possible. On garde son sang froid ... et pouf, le boss explose, ça y est, j'ai 1CC Andro Dunos. Je prends conscience que mon coeur est à 200, j'ai un sourire de satisfaction, ça fait des mois que j'attends ce moment. Il me restait 2 vies ! Alors forcément je démarre le second loop à poil, et sans le connaitre, je meurs rapidement au stage 1 :)",
            "photo": "http://i.imgur.com/moFEgRa.jpg",
            "inp": null,
            "replay": "",
            "value": 1190470,
            "onecc": true,
            "progression": null,
            "rank": 2,
            "gapWithPreviousScore": null,
            "timeScore": false,
            "gameTitle": "Andro Dunos MVS",
            "1CC": true,
            "stageName": "1ALL",
            "vip": true,
            "createdSinceInFrench": "il y a 7 ans"
        }]
    })
});
