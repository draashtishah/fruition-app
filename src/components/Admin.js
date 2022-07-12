import React from "react";
import logo from "../images/logo.png";
import { useState, useEffect } from "react";
import { db,auth } from "./fire";
import { collection, getDocs, doc, deleteDoc  , updateDoc} from "firebase/firestore";

function Admin() {
  const [events, setevents] = useState([]);
  const [messages, setMessages] = useState([]);
  const [refresh, setRefresh] = useState(true);
  const [response, setResponse] = useState("");


  const updateMessage = async (message) => {
    
    setRefresh(false);
    console.log(message)
    console.log(response)
    const eventDoc = await doc(db, "UserMsgs", message.id);
    
    await updateDoc(eventDoc, {
      email: message.email,
      message: message.message,
      response: response
    });
    setRefresh(true);
  };


  useEffect(() => {
    // console.log("afater data");
    const eventCollectionRef = collection(db, "EventRegs");

    const getevents = async () => {
      const data = await getDocs(eventCollectionRef);
      // console.log(data);
      await setevents(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getevents();

    const messageCollectionRef = collection(db, "UserMsgs");
    const getMessages = async () => {
      const data = await getDocs(messageCollectionRef);
      setMessages(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getMessages();
  }, [refresh]);

  const deleteEvent = async (id) => {
    const eventDoc = await doc(db, "EventRegs", id);
    console.log(eventDoc);
    // setMessages(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    deleteDoc(eventDoc).then(() => {
      window.location.reload(false);
    });
  };


  const deleteMessage = async (id) => {
    const messageDoc = await doc(db, "UserMsgs", id);
    deleteDoc(messageDoc).then(() => {
      window.location.reload(false);
    });
  };

  return (
    <div>
      <div className="admin-event-card">
        <h2>Bookings:</h2>

        {events.map((event) => {
          return (
            <section>
              <div class="container py-5">
                <div class="row justify-content-center">
                  <div class="col-md-8 col-lg-6 col-xl-4">
                    <div class="card text-black event-details">
                      <i class="fab fa-apple fa-lg pt-3 pb-1 px-3"></i>
                      <img
                        src={logo}
                        class="card-img-top w-50 booking-logo"
                        alt="Apple Computer"
                      />
                      <div class="card-body">
                        <div class="text-center">
                          <h5 class="card-title">{event.name}</h5>
                          <p class="text-muted mb-4">{event.hotel}</p>
                        </div>
                        <div>
                          <div class="d-flex justify-content-between">
                            <span>Phone Number</span>
                            <span>{event.number}</span>
                          </div>
                          <hr />
                          <div class="d-flex justify-content-between">
                            <span>Event Date</span>
                            <span>{event.date}</span>
                          </div>
                          <hr />
                          <div class="d-flex justify-content-between">
                            <span>Event Time</span>
                            <span>{event.time}</span>
                          </div>
                          <hr />
                          <div class="d-flex justify-content-between">
                            <span>Total Guests</span>
                            <span>{event.totalGuest}</span>
                          </div>
                          <hr />
                        </div>

                        <div class="d-flex justify-content-between total font-weight-bold mt-4">
                          <span>Event Type</span>
                          <span>{event.eventType}</span>
                        </div>
                        <button
                          type="button"
                          class="btn btn-secondary event-details-button mt-5"
                          onClick={() => deleteEvent(event.id)}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>




      <div className="admin-messages-card">
        <h2>Received Messages:</h2>
        {messages.map((message) => {
          return (
            <div className="admin-message-card">
              <div class="container">
                <section class="mx-auto my-5">
                  <div class="card message">
                    <div class="card-body">
                      <h4>{message.email}</h4>
                      <hr />
                      <blockquote class="blockquote blockquote-custom px-3 pt-4">
                        <div class="blockquote-custom-icon bg-info shadow-1-strong">
                          <i class="fa fa-quote-left text-white"></i>
                        </div>
                        <p class="mb-0 mt-2 font-italic">{message.message}</p>
                        <footer class="blockquote-footer pt-4 mt-4 border-top">
                          <cite>{message.response && message.response}</cite>
                        </footer>
                      </blockquote>

                      {!message.response && (
                        <>
                          <div class="form-group">
                            <label for="exampleInputEmail1">
                              Respond to user query:{" "}
                            </label>
                            <textarea
                              type="textarea"
                              class="form-control"
                              id="Message"
                              aria-describedby="booker-Message"
                              placeholder="Enter your Message please.."
                              onChange={(event) => {
                                setResponse(event.target.value);
                              }}
                            />
                          </div>
                          <button
                            type="submit"
                            class="btn btn-secondary event-details-button mt-2"
                            onClick={()=>updateMessage(message)}
                            
                          >
                            Send Response
                          </button>
                          
                        </>
                      )}
                      <button
                          type="button"
                          class="btn btn-secondary event-details-button mt-5"
                          onClick={() => deleteMessage(message.id)}
                        >
                          Delete Message
                        </button>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Admin;
