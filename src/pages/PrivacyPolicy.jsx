import React, { useEffect } from 'react';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-wrapper" style={{ backgroundColor: '#fff', minHeight: '100vh', paddingTop: '120px' }}>
      <div className="container" style={{ maxWidth: '800px', margin: '0 auto', padding: '0 2rem 4rem' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '2rem', color: '#111' }}>Privacy Policy</h1>
        
        <div style={{ color: '#444', lineHeight: '1.8', fontSize: '1.05rem' }}>
          <p style={{ marginBottom: '1.5rem' }}>
            Last updated: September 2026
          </p>

          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#111', marginTop: '2.5rem', marginBottom: '1rem' }}>1. Introduction</h2>
          <p style={{ marginBottom: '1.5rem' }}>
            Welcome to RR MasterKey Motors. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
          </p>

          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#111', marginTop: '2.5rem', marginBottom: '1rem' }}>2. Data We Collect</h2>
          <p style={{ marginBottom: '1.5rem' }}>
            We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
          </p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
            <li style={{ marginBottom: '0.5rem' }}><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong>Contact Data</strong> includes email address and telephone numbers.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location.</li>
          </ul>

          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#111', marginTop: '2.5rem', marginBottom: '1rem' }}>3. How We Use Your Data</h2>
          <p style={{ marginBottom: '1.5rem' }}>
            We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
          </p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
            <li style={{ marginBottom: '0.5rem' }}>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
            <li style={{ marginBottom: '0.5rem' }}>Where we need to comply with a legal obligation.</li>
          </ul>

          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#111', marginTop: '2.5rem', marginBottom: '1rem' }}>4. Contact Us</h2>
          <p style={{ marginBottom: '1.5rem' }}>
            If you have any questions about this privacy policy or our privacy practices, please contact us.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
