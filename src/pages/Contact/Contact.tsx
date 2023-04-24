import React from "react";
import { instituteContactData, INSTITUTE_ADDRESS } from "./contact-data";
import "./contact.scss";

const Contact = () => {
  return (
    <div className="pz-contact pz-page">
      <div className="pz-slide">
        <div className="pz-contact-data">
          <div className="pz-slide-title">Kontakt</div>
          {instituteContactData.map((branch) => (
            <div className="branch-contact">
              <div className="branch-name">{branch.name}</div>
              {branch.contacts.map((contact) => (
                <div className="member-contact">
                  <div className="member-title">{contact.memberTitle}</div>
                  <div className="member-contact-info member-phone-number">
                    <i className="fa-solid fa-phone"></i>
                    {contact.phoneNumber}
                  </div>
                  <div className="member-contact-info member-email">
                    <i className="fa-solid fa-envelope"></i>
                    <a href={`mailto:${contact.email}`}>{contact.email}</a>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="pz-map-container">
          <div className="map-title">
            <div className="title">Institut za promociju znanosti</div>
            <div className="subtitle">
              <i className="fa-solid fa-location-arrow"></i>
              {INSTITUTE_ADDRESS}
            </div>
          </div>
          <div className="map">
            <iframe
              title="Prikaz Instituta na karti Zagreba"
              width="100%"
              height="600px"
              frameBorder="0"
              src="https://www.openstreetmap.org/export/embed.html?bbox=15.964057445526125%2C45.79803488972522%2C15.978219509124758%2C45.8049460123998&amp;layer=hot&amp;marker=45.80149055822347%2C15.97113847732544"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
