import { motion } from "framer-motion";
import emailjs from "emailjs-com";  // Ensure correct import

const ContactForm = () => {
  const styles = {
    container: {
      padding: '2rem',
      textAlign: 'center',
      maxWidth: '600px',
      margin: '0 auto',
      background: 'transparent'
    },
    title: {
      fontSize: '2.5rem',
      fontWeight: '500',
      marginBottom: '2rem',
      color: '#fff'
    },
    highlight: {
      color: '#4b93ff',
      fontSize: '2.5rem'
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem'
    },
    inputGroup: {
      display: 'flex',
      gap: '1rem'
    },
    inputField: {
      backgroundColor: 'transparent',
      border: '2px solid black',
      padding: '1rem',
      color: '#fff',
      borderRadius: '12px',
      flex: '1',
      outline: 'none'
    },
    messageField: {
      backgroundColor: 'transparent',
      border: '2px solid black',
      padding: '1rem',
      color: '#fff',
      borderRadius: '12px',
      height: '150px',
      outline: 'none'
    },
    submitBtn: {
      backgroundColor: '#4b93ff',
      color: '#fff',
      padding: '0.7rem',
      border: 'none',
      borderRadius: '12px',
      width: '150px',
      margin: '0 auto',
      cursor: 'pointer',
      fontSize: '1rem',
      transition: 'background-color 0.3s'
    },
    submitBtnHover: {
      backgroundColor: '#3d7ccc'
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  };

  const sendEmail = (e) => {
    e.preventDefault();

    // Ensure service ID, template ID, and user ID are correct
    emailjs.sendForm(
      'service_yn8zlww',  // Replace with your EmailJS Service ID
      'template_au4no9a',  // Replace with your EmailJS Template ID
      e.target,            // The form element
      '7Mp4TLVogvx3UDcpz'  // Replace with your EmailJS User ID (API key)
    ).then(
      (result) => {
        console.log("Message sent: ", result.text);
        alert("Message sent successfully!");
      },
      (error) => {
        console.error("Failed to send message: ", error);
        alert("Failed to send message, please try again.");
      }
    );

    e.target.reset();  // Clear the form after submission
  };

  return (
    <div style={styles.container}>
      <motion.h2
        style={styles.title}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <span>Get In</span> <span style={styles.highlight}>Touch</span>
      </motion.h2>
      <motion.form
        style={styles.form}
        onSubmit={sendEmail}  // Hook up the form submit event to sendEmail
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div style={styles.inputGroup}>
          <motion.input
            type="text"
            name="name"            // Name attribute required for EmailJS
            placeholder="Enter your name"
            style={styles.inputField}
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
          />
          <motion.input
            type="email"
            name="email"           // Name attribute required for EmailJS
            placeholder="Enter your email"
            style={styles.inputField}
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
          />
        </div>
        <motion.textarea
          name="message"           // Name attribute required for EmailJS
          placeholder="Enter your message"
          style={styles.messageField}
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
        />
        <motion.button
          type="submit"
          style={styles.submitBtn}
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          onMouseOver={(e) => e.target.style.backgroundColor = styles.submitBtnHover.backgroundColor}
          onMouseOut={(e) => e.target.style.backgroundColor = styles.submitBtn.backgroundColor}
        >
          Send Message
        </motion.button>
      </motion.form>
    </div>
  );
};

export default ContactForm;
