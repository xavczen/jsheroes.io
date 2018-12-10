import Section from '../common/section';
// import { styles } from '../../constants';

const ContactForm = () => (
  <Section id="contactForm">
    <form className="flex-container">
      <div className="row">
        <h2>Contact us</h2>
      </div>
      <div className="row">&nbsp;</div>
      <div className="row">
        <textarea className="textAreaBox" rows="5" name="message" placeholder="Message" />
      </div>
      <div className="row">
        <input className="textBox" name="email" type="email" placeholder="E-mail" />
      </div>
      <div className="row">
        <button className="buttonBox" type="submit">
          Send
        </button>
      </div>
    </form>
    <style jsx>
      {`
        .flex-container {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;

          height: 400px;
        }

        .row {
          margin-top: 10px;
        }

        .textAreaBox {
          padding: 10px;
          width: 40vw;
          border: 1px solid #d7d7d7;
          border-radius: 5px;
          font-size: 16px;
        }

        .textBox {
          padding: 10px;
          width: 40vw;
          border-radius: 5px;
          border: 1px solid #d7d7d7;
          font-size: 16px;
        }

        .buttonBox {
          background-color: #0098ff;
          color: white;
          font-size: 16px;
          border: none;
          border-radius: 5px;
          padding: 15px 32px;
          text-align: center;
          text-decoration: none;
          display: inline-block;
          font-size: 16px;
        }

        .buttonBox:hover {
          background-color: #228dcb;
        }
      `}
    </style>
  </Section>
);

export default ContactForm;
