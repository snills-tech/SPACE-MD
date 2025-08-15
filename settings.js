require('dotenv').config();

module.exports = {
  //Enter your session id here (optional)
  SESSION_ID: process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIAJlBD1tf9x+ZUwQAAHAHAAAKAAAAY3JlZHMuanNvbpVUwZKiSBD9l7pqjCAiaERHLKAiot0goOjGHkoooAQLLAoFJvz3Dezp6TnszvZyKrIyMl++fK++A5LjEpmoAdPvoKD4BhnqjqwpEJgCtYoiREEfhJBBMAXOsvCLAgVKkpTuPuHEXbTnj0XVitbeuHhvA28fOVF4RiR9AY8+KKpThoPfFDyprhANWOxT3srNVdrc76nPV4NBMhNet2Z8i1Jnu6svorN5AY+uIsQUk3heJOiCKMxM1FgQ06*B1y3nsjweV*Y6OKKJHOGVu6KcuNzq9rkopdRdtAOLpNvxfP41+KieqeZmPILapY41*9ycZP+G*DY*mK+WrSuuJGTxeuSdhsE7*BLHBIVGiAjDrPky75rJCB0hy96s4vK83fR0hRIzmlzL+80aK1RDdmsgGOJ5+TXgq6G*wCa3WMuJ*ObpaTaseUHhzj3lcHAgdyGc3po3M5*5xq*ALfqhlfT*8H7QTW8lXzcmORinxZsozHdHpcoyta0P1HImvlhhby9bmSd*DT7bvA5lL0Hyum5pzzvVm5JtT1sElZBIbivEboV7i6oK3PgTPmQV*R1KdFy4gYaERXhl6JD7slIFxIuqgeRN0A4K3twTaJ7l9qJR2dC+zehpfd6ulevbzJqN5smmPa2ka7NcmO6d572jdLqOFPvlOVGKGiMEU*7RBxTFuGQUMpyTZ4zj+wCGNwcFFLEnvUDEVuZsDs7QOhm5iha9TVCsyHo5acb2wF7461VPJZJjkpx7AX1Q0DxAZYnCJS5ZTpsNKksYoxJM**yrDwiq2fviunYC3wcRpiXzSFVkOQw*tvpxCYMgrwhzGhJo3QFRMOU+w4gxTOKy47EikAYJviEtgawE0whmJfo5IaIoBFNGK*TTtVoedsTbr6O5aW0d0AeX50JwCKZgKI6kicSNJ6OxPB1O*ii*3buysCi+EcRAH2TPNInjhJEwFCYCz09GXWIXf*wE2NULEYM4KzvjWPiNR4Y2twS*J9u6rmxiRYsV8DnQhzLema*yQ0Whv9erDVKHe*VQooIec3lmmHNjPiCn15kTXOi61tKXfygCpsBo9bXQq6VDXOdUEUpUjLRQcFezupU5y9is2QWHM3sc21dzkbviZLKTVndpOxuLcCffZmoUB1y9O9RIkq2ojOrU5bX7S9ctRDccoF+b0fZAlbdosE1zvDTb8RlWxyrU*Xt4qeFJ1D3fW97QVTPbUHXx4pKn4TngXFIe9hNppCDLKMRjzO+g3Ht15NjU6D1R7u+afXom+*FW4aeaulV1vxFGT+sT2C3wv1f3DrxTGPfo*1Ljx2PyL4ZUT1d9fR1mfELPyzjM4v16eYVDaCmNlmiqJQ5bmyOrayPbBXg8*uqDIoMsyukFTAEkIc1xCPqA5lUnWYNE+e+eWNUwlPh98gyWTPm0gYsvqGTwUoApL4nicCSKY*k9y6J5sYRlAqbA2qei2km6UYrCYZB9mAoo3bcmKXj8DVBLAQIUAxQAAAgIAJlBD1tf9x+ZUwQAAHAHAAAKAAAAAAAAAAAAAACAgQAAAABjcmVkcy5qc29uUEsFBgAAAAABAAEAOAAAAHsEAAAAAA=='
  //Enter your number here for administrative access to the bot
  BOT_ADMIN: process.env.BOT_ADMIN || '254797069468',
  
  //Bot web server port
  PORT: parseInt(process.env.PORT) || 2605,
  
  //Enter your Github username here (Compulsory unless you have a valid premium key)
  GITHUB_USERNAME: process.env.GITHUB_USERNAME || 'snills-tech',
  
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
