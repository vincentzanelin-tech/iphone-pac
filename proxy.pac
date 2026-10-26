// Generated for the current Wi-Fi. Unlisted destinations connect directly.
function FindProxyForURL(url, host) {
  host = String(host).toLowerCase().replace(/\.$/, "");
  var domains = ["youtube.com","youtu.be","youtube-nocookie.com","googlevideo.com","ytimg.com","ggpht.com","google.com","google.com.hk","google.com.tw","gstatic.com","googleapis.com","googleusercontent.com","gvt1.com","gvt2.com","chatgpt.com","openai.com","oaistatic.com","oaiusercontent.com","openai.auth0.com","telegram.org","t.me","x.com","twitter.com","twimg.com","t.co","twttr.com"];
  for (var i = 0; i < domains.length; i++) {
    var d = domains[i];
    if (host === d || host.slice(-(d.length + 1)) === "." + d) {
      return "PROXY 192.168.0.103:7897; DIRECT";
    }
  }
  return "DIRECT";
}
