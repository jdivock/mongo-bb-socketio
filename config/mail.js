// Copy in your particulars and rename this to mail.js
module.exports = {
  service: "SendGrid",
  host: "smtp.mandrillapp.com",
  port: 587,
  secureConnection: false,
  //name: "servername",
  auth: {
    user: "jdivock@gmail.com",
    pass: "tKmIH4Tp5IEosWZW0TLhhQ"
  },
  ignoreTLS: false,
  debug: false,
  maxConnections: 5 // Default is 5
}
