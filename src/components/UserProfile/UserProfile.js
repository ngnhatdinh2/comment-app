var UserProfile = (function() {
  var full_name = "unknown"
  let isAuthenticated = false;
  var getName = function() {
    return full_name;    // Or pull this from cookie/localStorage
  };
  var signIn = function(){
    isAuthenticated = true;
  }
  var signOut = function(){
    isAuthenticated = false;
    full_name = "unknown";
  }
  var setName = function(name) {
    full_name = name;
    // Also set this in cookie/localStorage
  };
  var getAuth = function(){
    return isAuthenticated;
  }

  return {
    getName: getName,
    setName: setName,
    signIn: signIn,
    signOut: signOut,
    isAuthenticated: getAuth,
  }

})();

export default UserProfile;
