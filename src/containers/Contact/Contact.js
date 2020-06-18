import React, { Component } from "react";
import styles from "./Contact.module.scss";
import Spinner from "../../components/UI/Spinner/Spinner";
import validator from "validator";
import Tertiary from "../../components/UI/Heading/Tertiary/Tertiary";
import Text from "../../components/UI/Inputs/Text/Text";
import Radio from "../../components/UI/Inputs/Radio/Radio";
import Big from "../../components/UI/Button/Big/Big";
import TextArea from "../../components/UI/Inputs/TextArea/TextArea";

class Contact extends Component {
  state = {
    name: "",
    email: "",
    message: "",
    loading: false,
  };


  render() {
    
    return (
      <section className={styles.sectionContact}>
        <div className={styles.row}>
          <div className={styles.contact}>
              <Tertiary margin="small" center="false">
                Email me your dishes at wholemamameals@gmail.com!
              </Tertiary>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
