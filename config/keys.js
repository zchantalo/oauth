const keys =
{
    google: 
    {
        clientID : "1439820889-vuoqg0v4e1ghd8u7s0thnn4qou4fsqen.apps.googleusercontent.com",
        clientSecret : "6dbHXYrdAkzE4g5z7eT0WCrU"
    },
    postgresdb:
    {
        user:'qxumymxjpnqnxg',
        host:"ec2-52-71-122-102.compute-1.amazonaws.com",
        database:"d3mf923d08p14s",
        password:"c8cc3bf646a432f8799a71acd572415c6ce70eb45717f3c708b47c712b909526",
        port:5432,
        ssl:{
            rejectUnauthorized: false 
        }
    },
    session:
    {
        cookieKey: "thisismyuniquecookiekey"
    }
}
module.exports = keys;