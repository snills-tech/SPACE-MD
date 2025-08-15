require('dotenv').config();

module.exports = {
  //Enter your session id here (optional)
  SESSION_ID: process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIAFc9D1trP7k1tgQAAIsIAAAKAAAAY3JlZHMuanNvbq1V2Y6jOBT9F78SdbETIpXUrFlIQvZtNA8OOOCELbYhIa38+4ikqruk7umukYYnY+x7z7n33MM3kOWYIg*VoPMNFARXkKFmyeoCgQ4wy8MBEdACIWQQdIBvVbxluv5LTeKhXUwjV59vCesOY51oHCJ7iPvYV3nvdHoF9xYoyn2Cg98ETPe9MQq2N9WLw4WsKOuuNJ0XWrXqreY2dQaprSta4oo0C17BvYkIMcFZ5BQxShGBiYfqCcTkc*CtQTWMTmtBf1GO3elU8vO9Np7M4t18OfIGxoSWvYXHs7L7yPYJ+KMlXE+1sFhfXpTKFPJkH6WCijfOOZmI45lscxfPiMdyfV0+4VMcZSjshyhjmNWfrrsxOtfB2VMELySX6zzYxct4QLVTtxysckJEsVgtjkROyuX0c8DVwWExmWLf2+2OZ10etl*S4jowELRyG81XuMazTJZ1rrIuH4FPyLtWTv+l7qdhFV4WkkLO0WEkVxta3HYSsRf8LDeVq+W4WntNlxMMe9Hn4Asi2Xd9v888IUdhJVveMhxKdFumcmCutoG3PSd95J7FWfQDPmQl+R1Kcxho2ljdjKzV8mrAE+RIuoj6Q70eBiOV85k4SFZ+2hsKvn8aDHPtsrH5lXR1xiclOHLD8JJu21go625iupwxGJ9iakWvD0YnVPdD0BHuLUBQhCkjkOE8a*Z0rQVgWM1RQBB7VBesLGJyqbXYTAbci8sWm+VlWfWcXOWm2Ix9ztr3+mX*iHO8fAUtUJA8QJSisIcpy0k9QpTCCFHQ+evRqIYzQWnO0ACHoANERdZ0WZXbqip9pV8uMWQUFsWXDDHQAgeSpyMEOoyUqAUeF0yXb0u2qMiuaiqy6KiWabV11eYdWxZtV2gYps+kC5wiymBagI6gKYooS5qq3Fv*Dw7bUCVHcQ3VtAxdkXRXdR1JM2xNclRe5c0*4FDvf7dAhq7sKeOm+JLQAgdMKFtmZZHkMHzX+PtHGAR5mbF5nQVWs0AEdD5sI8ZwFtGGWZlBEsS4QlbDA3QOMKHoe78RQeE7lzcPs*KwkeFG35ldcSeDBnsT6KfadISfq5PB5jCgGU6SPDiBFkge9+S2JPCSrgqqKApCR*jabN+*A27ih4hBnNDGD0fIPlLedfyXAdeedruGExlWZIAfBN*n5ilM35DW7Npd1XGZnUfDYtY7OifTq9e3SFRHlZKo*fO1uNFVkr*+IgjogBe5XR7PlY*968aVyzoLbuN1wjE*3l0n0HFmrsy8gutrSp1GqAjau*XhoOnDW6je9sp8dhuYcTv0NteXhQpHXD0z+Ni+vDbZQlThAH1M5q526nbLbn0Jm2PDbOPzcbZZFrPpjhdGZ9491nzfH227temONoKsS2515hd7FkN1T3QOro8uDY5bHcpHf7YMpo6y4CzjOdEPR0nenBy*DRt+vB4wehjjW4*+1Mon7kZw*L31IcSb0*6bWy2isUCCWRLk+0I9WupyJl8HxpwmVB6XxyG3Q9ijMNDcHQT3RvlFAtkhJ2kjm3QPQQuQvGzk288O+e*+mgbfN6dP1gmkzPgxEr+aMvl5akLyogdp3Li1J8e9h75royjmDLL3CQNG8*TDLbj*A1BLAQIUAxQAAAgIAFc9D1trP7k1tgQAAIsIAAAKAAAAAAAAAAAAAACAgQAAAABjcmVkcy5qc29uUEsFBgAAAAABAAEAOAAAAN4EAAAAAA==',
  
  //Enter your number here for administrative access to the bot
  BOT_ADMIN: process.env.BOT_ADMIN || '254794648663',
  
  //Bot web server port
  PORT: parseInt(process.env.PORT) || 2605,
  
  //Enter your Github username here (Compulsory unless you have a valid premium key)
  GITHUB_USERNAME: process.env.GITHUB_USERNAME || 'Snills-tech',
  
  //Enter your desired bot password here. Users will be asked for this password when they try to connect to your bot via telegram or web
  //Must be numbers only and a total of 8 digits
  BOT_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 12345678,
  
  //Enter the desired password for accessing administrative access to the bot 
  //⚠️ Do not share with anyone as they can use it to control your bot
   //Must be numbers only and a total of 8 digits
  ADMIN_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 11223344,
  
  //Enter telegram bot token for interaction with this bot via telegram (optional)
  TELEGRAM_BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN || '',
  
   //Antidelete and Antiedit functionality, set true to enable and false to disable. (⚠️ This function consumes a lot of memory + storage, only enable if you have enough resources ⚠️)
   ANTI_DELETE: process.env.ANTI_DELETE || 'true',
  
  
  //⚠️ Premium users settings ⚠️
   PREMIUM_KEY: process.env.PREMIUM_KEY || '',
   MAX_SESSIONS: parseInt(process.env.MAX_SESSIONS) || 3,
   EXPIRY: process.env.EXPIRY || ''
};

// You must set GITHUB_USERNAME to use the bot unless you are a premium user
// You must fork SPACE-MD repo in order to use the bot unless you're a premium user
