let db = require("./db.js");

const getClient = (clientId, clientSecret) => {
  let confidentialClients = db.confidentialClients.filter((client) => {
    return client.clientId === clientId && client.clientSecret === clientSecret;
  });
  return confidentialClients[0];
};

const saveTokens = (token, client, user) => {
  token.client = {
    id: client.clientId,
  };
  token.user = {
    username: user.username,
  };
  db.tokens.push(token);
  return token;
};

const getUserFromClient = (client) => {
  return {};
};

const getAccessToken = (accessToken) => {
  let tokens = db.tokens.filter((savedToken) => {
    return savedToken.accessToken === accessToken;
  });
  return tokens[0];
};

module.exports = {
  getClient: getClient,
  saveTokens: saveTokens,
  getUserFromClient: getUserFromClient,
  getAccessToken: getAccessToken,
};
