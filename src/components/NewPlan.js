import React from "react";
import logo from "../images/logo.png";
import sheraton from "../images/sheraton.png";
import holiday from "../images/holiday.png";
import pavilion from "../images/pavilion.png";
import sunway from "../images/sunway.png";
import four from "../images/four.png";
import { db, auth } from "./fire";
import { collection, addDoc } from "firebase/firestore";
import { useState } from "react";
import Datepicker from "react-datepicker";
import TimePicker from "react-time-picker";

function NewPlan() {
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [hotel, setHotel] = useState("");
  const [totalGuest, setTotalGuest] = useState("");
  const [time, setTime] = useState("10:00");
  const [eventDate, setEventDate] = useState("");
  const [eventType, setEventType] = useState("Wedding Ceremony");
  const [showDate, setShowDate] = useState("");
  const handleSubmit = async (evt) => {
    evt.preventDefault();
    if (newName == "") {
      alert("Name field is empty");
    } else if (newNumber == "") {
      alert("Phone Number field is empty");
    } else if (hotel == "") {
      alert("Please choose a hotel");
    } else if (totalGuest == "") {
      alert("Total guest field is empty");
    }
    else if (eventDate == "") {
      alert("Please select a date");
    } 
    else {
      const userCollectionRef = collection(db, "EventRegs");
      await addDoc(userCollectionRef, {
        name: newName,
        number: newNumber,
        time: time,
        date: eventDate,
        hotel: hotel,
        totalGuest: totalGuest,
        eventType: eventType,
        user: auth.currentUser.uid,
      });
      alert("Event Booked Successfully");
      setNewName("");
      setNewNumber("");
      setTotalGuest("");
      setHotel("");
      setTime("10:00");
      setEventType("Wedding Ceremony");
      setEventDate("");
    }
  };

  const [serviceList, setServiceList] = useState([""]);

  const handleServiceChange = (e, index) => {
    const list = [...serviceList];
    list[index] = e.target.value;
    setServiceList(list);
  };

  const handleServiceRemove = (index) => {
    const list = [...serviceList];
    list.splice(index, 1);
    setServiceList(list);
  };

  const handleServiceAdd = () => {
    setServiceList([...serviceList, ""]);
  };
  return (
    <div>
      <div className="row mt-5 justify-content-center">
        <div className="col-10">
          <div class="new-plan-form">
            <img src={logo} class="logo-form"></img>

            <form>
              <div class="form-group">
                <label for="exampleInputEmail1">Booking by the name: </label>
                <input
                  type="text"
                  className="form-control w-50"
                  id="name"
                  aria-describedby="booker-name"
                  placeholder="Enter your name please.."
                  onChange={(event) => {
                    setNewName(event.target.value);
                  }}
                  value={newName}
                />
                <small id="emailHelp" class="form-text text-muted">
                  This name will be displayed over your booking appointment.
                </small>
              </div>

              <div class="form-group">
                <label for="exampleInputEmail1">Phone Number: </label>
                <input
                  type="text"
                  class="form-control w-50"
                  id="number"
                  aria-describedby="booker-phone"
                  placeholder="Enter your phone number please.."
                  onChange={(event) => {
                    setNewNumber(event.target.value);
                  }}
                  value={newNumber}
                />
              </div>

              <div class="form-group ml-1 mt-1">
                <label for="exampleInputEmail1">Total guests: </label>
                <input
                  type="text"
                  class="form-control w-50"
                  id="guest"
                  aria-describedby="total-guests"
                  placeholder="Enter total guests please.."
                  onChange={(event) => {
                    setTotalGuest(event.target.value);
                  }}
                  value={totalGuest}
                />
              </div>

              <div class="form-group">
                <label for="exampleInputEmail1">Type of event: </label>
                <select
                  id="fruits"
                  value={eventType}
                  onChange={(e) => setEventType(e.target.value)}
                  className="form-select w-50"
                >
                  <option value="Wedding Ceremony">Wedding Ceremony</option>
                  <option value="Business Meeting">Business Meeting</option>
                  <option value="Birthday Celebration">
                    Birthday Celebration
                  </option>
                  <option value="Workshop or Seminar">
                    Workshop or Seminar
                  </option>
                </select>
              </div>

              <div className="form-group ">
                <label className="ml-1">Enter event date:</label>
                <Datepicker
                  format="MM-dd-y"
                  closeOnScroll={true}
                  selected={showDate}
                  onChange={(date) => {
                    setEventDate(
                      `${
                        date.getMonth() + 1
                      }/${date.getDate()}/${date.getFullYear()}`
                    );
                    setShowDate(date);
                  }}
                  placeholder="Pick your event date..."
                  className="w-50"
                />
              </div>

              <div className="form-group mt-2 ml-1">
                <label className="ml-1 d-block">Enter event time:</label>
                <TimePicker
                  onChange={setTime}
                  value={time}
                  className="w-50 bg-white"
                />
              </div>

              {/* <div class="form-group mt-5">
                <label for="exampleInputPassword1">Enter event location:</label>
                <Autocomplete
                  apiKey="AIzaSyBSPMnmzyqd8IGZRRioUuyP-kbhWHx6fRo"
                  onPlaceSelected={(place) => {
                    setNewLocation(place.formatted_address);
                  }}
                  class="form-control"
                  placeholder="Map search..."
                />
              </div> */}

              <div className="hotels mb-5 mt-5">
                <div className="row mb-5">
                  <div class="ml-4" className="col-4 hotel-card">
                    <div class="card hotel">
                      <img
                        src={sheraton}
                        class="card-img-top hotel-img"
                        alt="Sample Image"
                      />
                      <div class="card-body text-center">
                        <h6 class="card-title font-weight-bold ">
                          SHERATON PETALING JAYA HOTEL
                        </h6>
                        <p class="card-text mt-4">
                          Explore Malaysia from 5-star hotel in Petaling Jaya
                        </p>
                        <button
                          type="button"
                          onClick={() =>
                            setHotel("SHERATON PETALING JAYA HOTEL")
                          }
                          class="btn btn-primary hotel-button "
                        >
                          Book Hotel
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="ml-4" className="col-4 hotel-card">
                    <div class="card hotel">
                      <img
                        src={holiday}
                        class="card-img-top hotel-img"
                        alt="Sample Image"
                      />
                      <div class="card-body text-center">
                        <h6 class="card-title font-weight-bold text-uppercase">
                          Holiday Inn Express
                        </h6>
                        <p class="card-text mt-4">
                          An IHG hotel in the Kuala Lumpur’s Golden Triangle
                        </p>
                        <button
                          type="button"
                          onClick={() => setHotel("Holiday Inn Express")}
                          class="btn btn-primary hotel-button"
                        >
                          Book Hotel
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="ml-4" className="col-4 hotel-card">
                    <div class="card hotel">
                      <img
                        src={pavilion}
                        class="card-img-top hotel-img"
                        alt="Sample Image"
                      />
                      <div class="card-body text-center">
                        <h6 class="card-title font-weight-bold text-uppercase mb-3">
                          pavilion hotel
                        </h6>
                        <p class="card-text mt-4">
                          An urban sanctuary in the heart of kuala lampur
                        </p>
                        <button
                          type="button"
                          onClick={() => setHotel("pavilion hotel")}
                          class="btn btn-primary hotel-button"
                        >
                          Book Hotel
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row justify-content-center">
                  <div class="ml-4" className="col-4">
                    <div class="card hotel">
                      <img
                        src={four}
                        class="card-img-top hotel-img"
                        alt="Sample Image"
                      />
                      <div class="card-body text-center">
                        <h6 class="card-title font-weight-bold">
                          FOUR SEASONS HOTEL
                        </h6>
                        <p class="card-text">
                          Surrounded by the multicultural energy of Malaysia’s
                          dynamic capital
                        </p>
                        <button
                          type="button"
                          onClick={() => setHotel("FOUR SEASONS HOTEL")}
                          class="btn btn-primary hotel-button mt-3"
                        >
                          Book Hotel
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="ml-4" className="col-4">
                    <div class="card hotel">
                      <img
                        src={sunway}
                        class="card-img-top hotel-img"
                        alt="Sample Image"
                      />
                      <div class="card-body text-center">
                        <h6 class="card-title font-weight-bold">
                          SUNWAY PYRAMID HOTEL
                        </h6>
                        <p class="card-text">
                          Offering 4-star accommodations in Kuala Lumpur
                        </p>
                        <button
                          type="button"
                          onClick={() => setHotel("SUNWAY PYRAMID HOTEL")}
                          class="btn btn-primary hotel-button mt-3"
                        >
                          Book Hotel
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className="form-field">
                <label htmlFor="service">Service(s)</label>
                {serviceList.map((singleService, index) => (
                  <div key={index}>
                    <div>
                      <input
                        className="form-control"
                        name="service"
                        type="text"
                        id="service"
                        value={singleService.service}
                        onChange={(e) => handleServiceChange(e, index)}
                        required
                        placeholder="Enter service..."
                      />
                      {serviceList.length !== 1 && (
                        <button
                          type="button"
                          onClick={() => handleServiceRemove(index)}
                          className="btn btn-outline-dark mt-2 mb-3"
                        >
                          <span>Remove</span>
                        </button>
                      )}
                    </div>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={handleServiceAdd}
                  className="btn btn-outline-info mt-5"
                >
                  <span>Add a Service</span>
                </button>
              </div> */}

              <button
                type="submit"
                onClick={handleSubmit}
                class="btn btn-primary mt-5 new-plan-form-button w-25 "
              >
                Set your booking
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewPlan;
