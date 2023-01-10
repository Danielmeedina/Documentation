import React from "react";

const SendEmail = () => {
  return (
    <article id="sendemail">
      <h2>Send Email</h2>
      <p>
        Send an email easily and quickly with just html, just put
        "https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&source=mailto&to=
        <span>myMail</span>" inside the href from one label a
      </p>
      <small>this ONLY works for gmail emails</small>
    </article>
  );
};

export default SendEmail;
