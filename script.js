// This is a Cloud Script function. "args" is set to the value of the "FunctionParameter" 
// parameter of the ExecuteCloudScript API.
// (https://api.playfab.com/Documentation/Client/method/ExecuteCloudScript)
// "context" contains additional information when the Cloud Script function is called from a PlayStream action.
handlers.getFriendsList = function (args, context) {
    
    var playerFriends = server.GetFriendsList (
        {
            PlayFabId: args['PlayFabID'], 
            IncludeSteamFriends: false,
            IncludeFacebookFriends : true
        }
    );
    
    log.debug(playerFriends);
    //return { messageValue: message };
}
