/*I am by no means a JavaScript developer, but this is a personal duty for the good of humanity. Thank me later. */


const allUserPanelsXPath = "/html/body/div[1]/c-wiz/div[1]/div/div[9]/div[3]/div[2]/div[1]";
const userTag = "/div[4]/div[2]/div[1]/div[3]";
const userVideo = "/div[4]/div[1]/div[3]/video"
const rootElement = "/html/body/div[1]/c-wiz/div[1]";

const blockedUsers = []

function retrieveValueByFullXPath(path) {
    return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}

const letsssssssgooooo = function() {
    try {
    var userPanels = retrieveValueByFullXPath(allUserPanelsXPath);
    if (userVideo == undefined) {
        return setTimeout(letsssssssgooooo, 40000)
    }

    for (var i = 0, l = userPanels.childElementCount; i < l; i++) {
        let childComponent = userPanels.children[i]
        let nameTag = childComponent.children[1].children[0].children[2].valueOf().innerHTML
        if (blockedUsers.includes(nameTag)) {
            childComponent.children[0].remove()
        }
    }
    
    } catch (error) {}
    setTimeout(letsssssssgooooo, 20000)
}

const observer = new MutationObserver(letsssssssgooooo);
observer.observe(retrieveValueByFullXPath(rootElement), 
    {
        attributes: true,
        childList: true,
        subtree: true
    });
