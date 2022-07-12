
// these are for services on main page


import React from "react";
import backround from "../images/background.png";
import backround2 from "../images/background2.png";
function FrontPage() {
  return (
    <div>
      <img src={backround} className="background"></img>
      <img src={backround2} className="background2"></img>
      <h1 className="background-logo">Fruition Event Planners</h1>

      <div className="row mt-5 justify-content-center">
        <div className="col-3 text-center">
          <h3>Our Services</h3>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-sm">
          <div class="card contain">
            <div class="card-body">
              <h5 class="card-title font-weight-bold">
                Hospitality & Accommodation
              </h5>
              <p class="card-text mt-5">
                We are pleased to welcome and host all your guests from all
                around the world and taking care of their all accomodation
                details on your event.
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm">
          <div class="card contain">
            <div class="card-body">
              <h5 class="card-title font-weight-bold ">
                Choosing The Best Venues & Hotels
              </h5>
              <p class="card-text mt-5">
                We assists you in choosing the best hotels and venues for your
                event or wedding and we follow up with all of the details
                including inspection visits.
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm">
          <div class="card contain">
            <div class="card-body">
              <h5 class="card-title font-weight-bold">
                {" "}
                Save The Dates & RSVPS
              </h5>
              <p class="card-text mt-5 font-weight-normal">
                It’s our mission to send all the Save the Dates and invitations
                and follow up with RSVPs.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-sm">
          <div class="card contain">
            <div class="card-body">
              <h5 class="card-title font-weight-bold">
                Customized Sightseeing Tours
              </h5>
              <p class="card-text mt-5">
                What about customized tours about your destination just before
                or after the event/ wedding?
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm">
          <div class="card contain">
            <div class="card-body">
              <h5 class="card-title font-weight-bold ">
                Availability in your area
              </h5>
              <p class="card-text mt-5">
                Just pick a location on map and we will take care of your event
                in your desired area.
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm">
          <div class="card contain">
            <div class="card-body">
              <h5 class="card-title font-weight-bold">
                {" "}
                Team of top class planners
              </h5>
              <p class="card-text mt-5 font-weight-normal">
                We are a team of expecired and artistist planners who will plan
                your event just according to your taste.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FrontPage;
