function loadPage(page) {
    const contentDiv = document.getElementById('content');
    let htmlContent = '';
  
    switch (page) {
      case 'home':
        htmlContent = `
          <section class="about">
            <p>SurroCare is dedicated to supporting women through their surrogacy and fertility journeys. We provide personalized guidance, health tracking, and emotional support to ensure a safe and fulfilling experience for all parties involved.</p>
            <p>85% of intended parents struggle to find a trusted surrogate. We’re changing that.</p>
          </section>
  
          <section class="hero">
            <h2>Empowering Women, One Connection at a Time.</h2>
            <p>A trusted platform for surrogacy, fertility support, and women’s health.</p>
            <div class="cta-buttons">
              <a href="#" class="cta-button">Find a Surrogate</a>
              <a href="#" class="cta-button">Become a Surrogate</a>
              <a href="#" class="cta-button">Learn More</a>
            </div>
          </section>
  
          <section class="core-features">
            <h2>Why Choose Us?</h2>
            <div class="feature">
              <p>Safe & Verified Matchmaking</p>
            </div>
            <div class="feature">
              <p>Legal & Financial Guidance</p>
            </div>
            <div class="feature">
              <p>Health & Wellness Tracking</p>
            </div>
            <div class="feature">
              <p>Emotional Support & Counseling</p>
            </div>
            <div class="feature">
              <p>Fertility Resources & Postpartum Care</p>
            </div>
          </section>
  
          <section class="testimonials">
            <h2>What Our Users Say</h2>
            <div class="testimonial">
              <p>"SurroCare made my surrogacy journey so much easier. The support and guidance I received were invaluable."</p>
              <h4>- Priya Sharma, Surrogate Mother</h4>
            </div>
            <div class="testimonial">
              <p>"Finding a surrogate felt overwhelming until we discovered SurroCare. They connected us with a wonderful surrogate and provided all the support we needed."</p>
              <h4>- Ankur and Neha Mehta, Intended Parents</h4>
            </div>
          </section>
  
          <section class="cta-section">
            <h2>Ready to Start Your Journey?</h2>
            <a href="#" class="cta-button">Sign Up Now</a>
          </section>
        `;
        break;
      case 'surrogacy':
        htmlContent = `
          <div class="surrogacy">
            <div class="grid">
              <div class="sub-tab" onclick="loadPage('find-surrogate')">
                <h3>Find a Surrogate / Intended Parent</h3>
                <p>AI-based matchmaking, profile verification, secure communication.</p>
              </div>
              <div class="sub-tab" onclick="loadPage('surrogacy-process-guide')">
                <h3>Surrogacy Process Guide</h3>
                <p>Step-by-step journey, eligibility check, legal and ethical guidelines.</p>
              </div>
              <div class="sub-tab" onclick="loadPage('health-medical-support')">
                <h3>Health & Medical Support</h3>
                <p>Medical pre-screening, pregnancy health tracker, doctor consultations.</p>
              </div>
              <div class="sub-tab" onclick="loadPage('legal-contractual-agreements')">
                <h3>Legal & Contractual Agreements</h3>
                <p>Contract generator, legal document vault, lawyer consultations, dispute resolution.</p>
              </div>
              <div class="sub-tab" onclick="loadPage('financial-planning')">
                <h3>Financial Planning & Cost Estimator</h3>
                <p>Surrogacy cost breakdown, insurance options, funding assistance.</p>
              </div>
              <div class="sub-tab" onclick="loadPage('post-surrogacy-support')">
                <h3>Post-Surrogacy Support</h3>
                <p>Postpartum care, emotional counseling, childcare guidance, surrogate recovery.</p>
              </div>
              <div class="sub-tab" onclick="loadPage('request-legal-review')">
                <h3>Request Legal Review</h3>
                <p>Review legal documents before finalizing matches.</p>
              </div>
            </div>
          </div>
        `;
        break;
      case 'pregnancy':
        htmlContent = `
        <div class="pregnancy">
            <div class="grid">
              <div class="sub-tab" onclick="loadPage('ongoing-pregnancy')">
                <h3>Ongoing Pregnancy</h3>
                <p>Tracking health, doctor consultations, medical alerts.</p>
              </div>
            </div>
        </div>
        `;
        break;
    }
}