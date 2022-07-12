import { useRef, React } from 'react'
import emailjs from "emailjs-com"
function Invite() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_76cxmj9', 'template_qxz3knc', form.current, 'qt69NaOJDpZpcZRHa')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset()
  };

  return (

    <>
      {/* <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form> */}



      <div className='invite-box'>
      <form ref={form} onSubmit={sendEmail}>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" class="form-control" aria-describedby="emailHelp" placeholder="Enter email" name="email" />
        </div>

        <div class="form-group">
          <label for="exampleInputEmail1">Invite Message</label>
          <textarea type="input" class="form-control" aria-describedby="messageHelp" placeholder="Enter Invite message" name="message" />
        </div>

        <button type="submit" class="btn btn-primary" value="Send">Send Invite</button>
      </form>
      </div>
    </>
  );
}

export default Invite