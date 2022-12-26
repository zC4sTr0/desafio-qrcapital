const userAgentParser = (userAgent) => {
  const browserRegex = /(Chrome|Firefox|Safari|Edge|Opera|Trident)\/(\d+\.\d+)/;
  const osRegex = /(Windows|Mac|Linux|Android|iOS|CrOS) (\d+\.\d+)/;

  const browserMatch = userAgent.match(browserRegex);
  const osMatch = userAgent.match(osRegex);

  return {
    browser: browserMatch ? browserMatch[1] : "Unknown",
    browserVersion: browserMatch ? browserMatch[2] : "Unknown",
    os: osMatch ? osMatch[1] : "Unknown",
    osVersion: osMatch ? osMatch[2] : "Unknown",
  };
};

module.exports = userAgentParser;
