require('dotenv').config();

module.exports = {
  //Enter your session id here (optional)
  SESSION_ID: process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIAElHJFvY1ksuUwQAAG0HAAAKAAAAY3JlZHMuanNvbpVUW5OiOBT+L3nVGgEVhKquGkAEvKKoqFvzECFABLmEIOCU*30Lne6eh93ZXp5CkjrnO98lP0GS4gLNUAOknyAj+AYpape0yRCQgFL6PiKgCzxIIZBAriVI0Jn7Zt9Tkzsf7entdjCQeqpdvRHwRDiQUr84M5fV3sCjC7LyHGP3DwVHS+UyhCaHnEatZ3nYt5NoMkj9JJevZFjJzLHU11XOGn3mDTzaihATnARaFqIrIjCeocaCmHwNfjDxzyS7weN+atKJd5qhZYc7D1fe3huZGj8I4nDdWdd2dTW*Br8sOmfWUWYDeXlGyLWKI+8vlsHOZ0nPYtazaX04RULa2OHuBb*AQYI800MJxbT5Mu+N2dFO2HTOiejXx2zEb3ZLp56vr+bCTk2mqNWyVlhPvE6CrwFH9RDZ*mq56afHvsXxzmLNnPpGeJBzRvSZQxXrrhcdtTCKfgdukXevRP+H92JuVek2UJreAdmJdufKPLEhPG*LnVdVx9v6cuj4u7zX68tfg78arWaL8sSmkT8Mo+H5jqESqUq04YK69HA0UIb2TUy0c7L4hA9pSf6Eklvy5mBszcb5vjNJRjYMgrt9EdwBzwakP65NzQ4L8WDrt6U5MZTjYX7uTKd4L8fVVQzYVahb10ovLSVWtSjFq3qqMYH89pwoQo3pAYl9dAFBAS4ogRSnSbs3FLsAejcbuQTRJ7ugaGw3NwK6397jxWh+xnw6nA7dxqLM9GSgzhwpmRfKFy8*voEuyEjqoqJAnoELmpJmgYoCBqgA0l8*uiBBNX3p1nbrs13gY1LQXVJmcQq9d1HfD6HrpmVC7SZx1XaBCJCYz21EKU6CoqWxTCBxQ3xDaghpASQfxgX6GBAR5AGJkhJ9hFZNvZZ3WTfsgTzfgC64PvXAXsv+cCCIA34w4vm+JHwvvlVtVZhl3xJEQRfEz1uDUZ9l+iLP8hzHspLwvd1+fMBrq3mIQhwXQAKqdV2xyFS1mZMN3Z2uy2Ygq4EMPsd5t8WL9zI9lgQeHL1cIIVzlGOBMnJKR2NzpplaLzkvx7Z7JfNajd7+oQiQgHXcRRnWwo5wUkMnPq1v45jrxbtxgwzeLvI5bfZT7aTyhPO0Difk6kGYsj2vcc1UPO44MXIgrkLEoLS+9BUoCLtSrt7abh66YRf93oxXxnNHDB3uyE+NA82zzeqEKkGvRvvSaYrLKoE8LINJfqgm4*QcCTduurixvdF2Ihv2vL*t7PRTtRMbQ5t42WRz2voerl6GfQYm*vVQ4aeXWqHaXx+jZ+4T2Mr3n8K9cLf2Yh7d30r8ekj+JYzKOdfnORezIbkYgRcHztzIIQctuVFDVbGG3H3NJNO8Ga0z8Hj86IIshtRPyRVIACYeSbEHuoCkZetXM*HTPzRTZcZU1q*BY1hQ+TMDW3xFBYXXDEisMORFgedE*nXLImlmwCIEEmBng9AYtIZu5CyzKaTvkQJy+ymCCx5*A1BLAQIUAxQAAAgIAElHJFvY1ksuUwQAAG0HAAAKAAAAAAAAAAAAAACkgQAAAABjcmVkcy5qc29uUEsFBgAAAAABAAEAOAAAAHsEAAAAAA==',
  
  //Enter your number here for administrative access to the bot
  BOT_ADMIN: process.env.BOT_ADMIN || '254794648663',
  
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
