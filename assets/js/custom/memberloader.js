
var ownerList = document.getElementById("owners");
var ogsList = document.getElementById("ogs");
var captainList = document.getElementById("captains");
var memberList = document.getElementById("members");

var twitchList = document.getElementById("youtubers");
var youtubeList = document.getElementById("twitch");

var allMembers = [];

function loadMembers() {
    localStorage.clear();
    fetch("./members.json", {"mode": "no-cors"})
        .then(response => response.json())
        .then(json => {
            let file = JSON.parse(JSON.stringify(json));
            let membersJson = file.members;
        
            Object.keys(membersJson).forEach(function(key) {
                allMembers.push(getMemberObj(membersJson[key]))
                if (allMembers.length == Object.keys(membersJson).length) {
                    addMembers();
                }
            });
        })
}

function addMembers() {
    let ownerElement = "";
    let ogsElement = "";
    let captainElement = "";
    let memberElement = "";

    let twitchElement = "";
    let youtubeElement = "";

    for (var i = 0; i < allMembers.length; i++) {
        let name = allMembers[i].name;
        let uuid = allMembers[i].uuid;
        let rank = allMembers[i].rank;

        switch(rank) {

            case "leader":
                ownerElement += '<div class=strafe-panel-body><div class=strafe-member><img src=https://visage.surgeplay.com/full/256/' + uuid + '><div class=strafe-name><span>' + name + '</span></div></div></div>'
                ownerList.innerHTML = ownerElement;   
                break;
            
            case "ogs":
                ogsElement += '<div class=strafe-panel-body><div class=strafe-member><img src=https://visage.surgeplay.com/full/256/' + uuid + '><div class=strafe-name><span>' + name + '</span></div></div></div>'
                ogsList.innerHTML = ogsElement;   
                break;

            case "captain":
                captainElement += '<div class=strafe-panel-body><div class=strafe-member><img src=https://visage.surgeplay.com/full/256/' + uuid + '><div class=strafe-name><span>' + name + '</span></div></div></div>'
                captainList.innerHTML = captainElement;   
                break;
                
            case "member":
                memberElement += '<div class=strafe-panel-body><div class=strafe-member><img src=https://visage.surgeplay.com/full/256/' + uuid + '><div class=strafe-name><span>' + name + '</span></div></div></div>'
                memberList.innerHTML = memberElement;   
                break;

            case "twitch":
                twitchElement += '<div class=strafe-panel-body><div class=strafe-member><img src=https://visage.surgeplay.com/full/256/' + uuid + '><div class=strafe-name><span>' + name + '</span></div></div></div>'
                twitchList.innerHTML = twitchElement;   
                break;

            case "youtube":
                youtubeElement += '<div class=strafe-panel-body><div class=strafe-member><img src=https://visage.surgeplay.com/full/256/' + uuid + '><div class=strafe-name><span>' + name + '</span></div></div></div>'
                youtubeList.innerHTML = youtubeElement;   
                break;
        }
    }
}

function getMemberObj(json) {
    var member = {
        name: json.name,
        uuid: json.uuid,
        rank: json.rank
    }
    return member;
}