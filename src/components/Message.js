import React from "react";
import { db } from "./fire";
import { collection, getDocs, addDoc } from "firebase/firestore";

import { auth } from "./fire";
import { useState, useEffect } from "react";
function Message() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [refresh, setRefresh] = useState(true);
  useEffect(() => {
    console.log("after data");
    const eventCollectionRef = collection(db, "UserMsgs");
    const getMessages = async () => {
      const data = await getDocs(eventCollectionRef);
      setMessages(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getMessages();
  }, [refresh]);

  const handleSubmit = async (evt) => {
    setRefresh(false);
    evt.preventDefault();

    const userCollectionRef = collection(db, "UserMsgs");
    await addDoc(userCollectionRef, {
      email: auth.currentUser.email,
      message: newMessage,
    });
    setRefresh(true);
  };




  return (
    <div>
      <div className="message-card">
        <h3>Send us your message:</h3>
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">
              Type your message down bellow:{" "}
            </label>
            <textarea
              type="textarea"
              class="form-control"
              id="Message"
              aria-describedby="booker-Message"
              placeholder="Enter your Message please.."
              onChange={(event) => {
                setNewMessage(event.target.value);
              }}
            />
          </div>
          <button
            type="submit"
            onClick={handleSubmit}
            class="btn btn-secondary mt-5 send-message-button"
          >
            Send Message
          </button>
        </form>
        
        
        <h4>Your Messages:</h4>

        {messages.map((message) => {
          if (message.email === auth.currentUser.email) {
            return (
              <div class="container">
                <section class="mx-auto my-5">
                  <div class="card message">
                    <div class="card-body">
                      <blockquote class="blockquote blockquote-custom px-3 pt-4">
                        <div class="blockquote-custom-icon bg-info shadow-1-strong">
                          <i class="fa fa-quote-left text-white"></i>
                        </div>
                        <p class="mb-0 mt-2 font-italic">{message.message}</p>
                        <footer class="blockquote-footer pt-4 mt-4 border-top">
                          <cite>{message.response && message.response}</cite>
                        </footer>
                      </blockquote>
                    </div>
                  </div>
                </section>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

export default Message;
