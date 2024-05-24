// let form = document.querySelector("#form");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   let formName = document.getElementById("#name");
//   //   var form_email = document.getElementById("Email").value;
//   //   var form_subject = document.getElementById("Subject").value;
//   //   var form_message = document.getElementById("Message").value;

//   console.log(formName);
// });

const TOKEN = "6279974089:AAH9uUaEgHk-B-wy54EIN-218yEGl-ySFiE";
const chat_ID = "-1001783465806"; // channel id
const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
const success = document.getElementById("success");

document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();

  let my_text = `New client\n Name: <i>${this.name.value}</i>\n Email: <i>${this.email.value}</i>\n Phone: <i>${this.phone.value}</i>\n Subject: <i>${this.subject.value}</i>\n Message: <i>${this.message.value}</i>`;

  axios
    .post(URI_API, {
      chat_id: chat_ID,
      parse_mode: "html",
      text: my_text,
    })
    .then((res) => {
      this.name.value = "";
      this.email.value = "";
      this.phone.value = "";
      this.subject.value = "";
      this.message.value = "";
      success.innerHTML = "Message has been sent successfully!";
      success.style.display = "block";
    })
    .catch((err) => {
      console.warn(err);
    })
    .finally(() => {
      // console.log("End");
    });
});
