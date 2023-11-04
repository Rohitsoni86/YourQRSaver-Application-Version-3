const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
const SendEmail = async (userEmail, password) => {
  let testAccount = await nodemailer.createTestAccount();

  //connecct With SMTP

  const transporter = await nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "realkingrohitsoni444@gmail.com",
      pass: "swvhgpegkuuzuxwy",
    },
  });

  //Congig Email Content

  const mailOptions = {
    from: "realkingrohitsoni444@gmail.com",
    to: userEmail,
    subject:
      "This is a Email Verification From Node Application Your Account is created !!",
    text: `Your Account is created Successfully ! \n Your Password is ${password}`,
  };

  // Now Send Emails

  try {
    const emailResults = await transporter.sendMail(mailOptions); //returs a promise
    console.log("Email Successfully Sent !!");

    return true;
  } catch (error) {
    console.log("Error Sending Email !!", error);
    return false;
  }
};

module.exports = { SendEmail };

/*SendEmail("rohitsonimax@gmail.com", "ENJOY !")
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("Finally Email Sent To The User !");
  });
*/
