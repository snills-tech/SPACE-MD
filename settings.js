require('dotenv').config();

module.exports = {
  //Enter your session id here (optional)
  SESSION_ID: process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIACMu*VoxeSHeUQQAAHAHAAAKAAAAY3JlZHMuanNvbpVU246jOBD9F792NMFccpNaWiB0Qjp0SOee1Tw4YMABDNiGQEb59xXp6e5ZaXe2lydTLlWdOnWOfwCaEY6fcQNGP0DOSIUEbo+iyTEYAaMMAsxAB*hIIDAC8XNkLvOG5sty3s8O8bJa9JpX+pCcUTXdzKlWPVmFriG6vzyCWwfk5Skh3m8K8hOCHsyDyVnt4mXQbMdmWht2upgF45XaXRrHbsk3NXYj5xHc2oqIMEJDK49wihlKnnHjIsK+Bt+26x6y9n4+q8PnjQaZd43946xeJ34ziSp9WEzTJz08DiXva*A9YR6gk3aDtJiet95pGO749OAe91C7uAdqbopwwbSpGr4e3uBzElLs2z6mgojmy7ybTyKuc9arN7m3zpJFaHWZW88Ufmw2*rQg0D6fHe+8otD5GvDIqB88ZbcIZF6EzoOuDVyZn0rnRQRsKs+q036wfYWLTffpb8Bd9q6V+P*wjsdr+bAIfBvyXnAme3W7Vo6xuJ7gYGEv9nNoYmveL5iV8q*Br3x9O1TzcsjHF5auaqYFdJ95zCsM0sVHbRVspPX14s1X*BM+EiX7HcrJg+LM9iuteSm3eHwVzTqCL2nW3diUy+c8ROIw4GKVndLyDJnrJlt0DQ2u7uTkuoczfTkcrIrDabsmuwerCFCv3OFQf7xPFOPG9sEI3jqA4ZBwwZAgGb3HVKkDkF+tsMewuNMLnrr24BhbukRrUz6*qDRVenQo+HV*7DOThv1Xmxz0V9QMrEfQATnLPMw59qeEi4w1DuYchZiD0Z*fO4DiWrwtrm2nwA4ICONiQ8s8yZD*vtX3S+R5WUnFqqGe2R4wAyPpM4yFIDTkLY8lRcyLSIXNCAkORgFKOP6YEDPsg5FgJf5wrZn5LfE7R9Hc*u4IOiC9L4T4YARkTe0P+1JvqPYGI7n*B*92acuiPP9GsQAdkNzT+pKkqIqsDBUIh2qb2MZvHwDbej4WiCS8NY5LFhDbpuUoRuYtJxPdCnUz1MHnQO*KeGO+zA4lQ*vdpHSwIe+MA8c5O2aDsf1s2VaXnl7GKy9l89qMH*+hCBiBbOyQ3aqZq3n6OsgWOirgQ*zydCDxGUYv9Dk62IoV1*mp0h11o8Ilr+DyYl16m5Bk5r5K4ksmF9m+G66XORy7T7NZbYaPbTcfV8TDvzarrZ20d42KS07WOzWBa9e7sqtfIJvQiTybVM6UqUJ2WWoaaLJVHuSTs4xmWgOVmQkXJ0OyJ5YkbScuzldWETXcmZPLm2bvnkl+vlXkrqZ2Ve1vQPDd+hS1C*zv1b0BbxUm3Tq*1Pj5mPyLIY1TMZkXcgIjdp6GfhLu5tMCycjVGzMyDVeTr0uJzopmsMzB7fa9A*IEiSBjKRgBRH2WER90AMvKVrI2DbLfPbGGbevh2+QJ4kL*tMGapJgLlOZgBPua0u8NoNp7y3JZlk8Rj8AIuLtYM1pJN3qerwQS76YCevvNaQxufwFQSwECFAMUAAAICAAjLv1aMXkh3lEEAABwBwAACgAAAAAAAAAAAAAAgIEAAAAAY3JlZHMuanNvblBLBQYAAAAAAQABADgAAAB5BAAAAAA=',
  
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
