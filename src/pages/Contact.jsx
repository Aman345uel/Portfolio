export default function Contact() {
  return (
    <section>
      <p className="eyebrow">Get in touch</p>
      <h1>Contact</h1>
      <p className="intro">
        Have a question or want to work together? Send me a message using the form below.
      </p>

      {/* We use FormSubmit to send the form directly to your email without needing a backend */}
      <form 
        action="https://formsubmit.co/dark2sun4@gmail.com" 
        method="POST"
        style={{ display: "flex", flexDirection: "column", gap: "1.5rem", maxWidth: "600px", marginTop: "2rem" }}
      >
        {/* Optional: Disables the captcha for a smoother experience */}
        <input type="hidden" name="_captcha" value="false" />

        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <label htmlFor="name" style={{ fontWeight: 600, color: "#17202a" }}>Name</label>
          <input 
            type="text" 
            name="name" 
            id="name" 
            required 
            placeholder="Your Name"
            style={{ padding: "0.8rem", borderRadius: "8px", border: "1px solid #e5e7eb", fontSize: "1rem", fontFamily: "inherit" }}
          />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <label htmlFor="email" style={{ fontWeight: 600, color: "#17202a" }}>Email Address</label>
          <input 
            type="email" 
            name="email" 
            id="email" 
            required 
            placeholder="your.email@example.com"
            style={{ padding: "0.8rem", borderRadius: "8px", border: "1px solid #e5e7eb", fontSize: "1rem", fontFamily: "inherit" }}
          />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <label htmlFor="message" style={{ fontWeight: 600, color: "#17202a" }}>Message</label>
          <textarea 
            name="message" 
            id="message" 
            rows="6" 
            required 
            placeholder="How can I help you?"
            style={{ padding: "0.8rem", borderRadius: "8px", border: "1px solid #e5e7eb", fontSize: "1rem", fontFamily: "inherit", resize: "vertical" }}
          ></textarea>
        </div>

        <button 
          type="submit" 
          className="button"
          style={{ border: "none", cursor: "pointer", fontSize: "1rem", fontFamily: "inherit", alignSelf: "flex-start" }}
        >
          Send Message
        </button>
      </form>
    </section>
  );
}