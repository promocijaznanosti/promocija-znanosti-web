import React from "react";
import "./about.scss";
import { instituteBranchesData } from "./members-data";

const About = () => {
  return (
    <div className="pz-about pz-page">
      <div className="pz-slide pz-about-introduction">
        <div className="intro-image">
          <img
            alt="Dario Bojanjac"
            src={require("../../resources/about-page/intro-image.png")}
          />
        </div>
        <div className="intro-data">
          <div className="intro-text">
            Promocija znanosti nije znanstvenicima primarni posao, nije nešto od
            čega znanstvenici žive, napreduju ili primaju plaću, ali u doba
            lakog i brzog širenja informacija promocija znanosti postaje jedan
            od najvažnijih zadataka kojima se znanstvenik može baviti. Put od
            znanstvenog istraživanja do primjene rezultata tog istog
            istraživanja u nekom proizvodu danas je uvelike skraćen u odnosu na
            razdoblje od prije 30 godina i to je jedan od glavnih razloga zašto
            djecu, mlade, ali i sve ostale treba potaknuti na razumijevanje
            znanosti.
            <br />
            <br />
            Dublje razumijevanje znanosti i prihvaćanje znanstvenog načina
            razmišljanja omogućit će bolje snalaženje u vremenu u kojem živimo,
            vremenu ubrzanog rasta i razvoja. Institut za promociju znanosti
            osnovali smo upravo iz tog razloga, kako bismo okupili sve one
            entuzijaste koji žele rezultate svojih istraživanja podijeliti s
            društvom unutar kojeg neumorno, ali najčešće samozatajno djeluju.
          </div>
          <div className="intro-author">izv. prof. dr. sc. Dario Bojanjac</div>
          <div className="intro-signature">
            <img
              alt="Potpis: Dario Bojanjac"
              src={require("../../resources/about-page/dario-signature.png")}
            />
          </div>
        </div>
      </div>

      {instituteBranchesData.map((branch) => (
        <div className="pz-slide" key={branch.name}>
          <div className="institute-branch">
            <div className="pz-slide-title">{branch.name}</div>
            <div className="branch-members">
              {branch.members.map((member) => (
                <div className="branch-member" key={member.key}>
                  <img
                    className="member-image"
                    src={member.imagePath}
                    alt={member.key}
                  />
                  <div className="border" />
                  <div className="member-title">{member.memberTitle}</div>
                  <div className="member-association">{member.association}</div>
                  <div className="member-description">{member.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default About;
