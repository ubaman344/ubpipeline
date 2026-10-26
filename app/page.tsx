import {
  BarChart3,
  CalendarDays,
  Check,
  Mail,
  MessageCircle,
  PenTool,
  Search,
  Send,
  ShieldCheck,
  Sparkles,
  Target,
  UserRound,
  X,
} from 'lucide-react';

const comparisonRows = [
  { criterion: 'LinkedIn handled for you', ub: 'Included', manager: 'Included', agency: 'Included' },
  { criterion: 'Monthly content output', ub: 'Included', manager: 'Included', agency: 'Included' },
  { criterion: 'Regular reporting', ub: 'Included', manager: 'Included', agency: 'Included' },
  { criterion: 'LinkedIn-only specialists', ub: 'Included', manager: 'Not standard', agency: 'Not standard' },
  { criterion: '100 manual industry comments daily', ub: 'Included', manager: 'Not standard', agency: 'Not standard' },
  { criterion: 'DMs in your tone of voice', ub: 'Included', manager: 'Not standard', agency: 'Not standard' },
  { criterion: 'Posts written in your voice', ub: 'Included', manager: 'Not standard', agency: 'Not standard' },
  { criterion: 'No account-connected automation', ub: 'Included', manager: 'Not standard', agency: 'Not standard' },
  { criterion: 'LinkedIn account safety protocols', ub: 'Included', manager: 'Not standard', agency: 'Not standard' },
  { criterion: 'Strategic input from LinkedIn specialists', ub: 'Included', manager: 'Not standard', agency: 'Not standard' },
  { criterion: 'Live in seven days', ub: 'Included', manager: 'Not standard', agency: 'Not standard' },
  { criterion: 'Multi-platform marketing', ub: 'Included', manager: 'Included', agency: 'Included' },
  { criterion: 'Brand and creative strategy', ub: 'Included', manager: 'Not standard', agency: 'Included' },
];

function ComparisonStatus({ value }: { value: string }) {
  const isIncluded = value === 'Included' || value === 'Often included';
  return <span className={`comparison-status ${isIncluded ? 'included' : 'excluded'}`} role="img" aria-label={isIncluded ? 'Included' : 'Not included'}>{isIncluded ? <Check aria-hidden="true" /> : <X aria-hidden="true" />}</span>;
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="UB Pipeline home">
          <span className="brand-word"><span className="brand-prefix">UB</span><strong>Pipeline</strong></span>
        </a>
        <p className="nav-positioning"><Sparkles aria-hidden="true" /><span>For founders who are ready to be seen</span><Sparkles aria-hidden="true" /></p>
        <a className="header-cta" href="#contact">
          <span>TALK TO US</span>
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <h1>You run the business. <span>We run your LinkedIn.</span></h1>
          <p className="hero-lead">
            <span>The right people may already be reading your LinkedIn. We turn their</span>
            <span>attention into trust, meaningful conversations, and long-term business growth.</span>
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="#system"><span>SEE HOW IT WORKS</span></a>
            <a className="secondary-button" href="#contact"><span>BOOK A STRATEGY CALL</span></a>
          </div>
          <ul className="hero-notes" aria-label="Key service benefits">
            <li><Check aria-hidden="true" /> Human-led, never generic</li>
            <li><Check aria-hidden="true" /> Live in your voice</li>
            <li><Check aria-hidden="true" /> Built for US, UK, GCC &amp; Europe</li>
          </ul>
        </div>

        <div className="hero-visual">
          <div className="visual-glow" />
          <div className="pipeline-orbit" role="img" aria-label="UB Pipeline connects positioning, content, and outreach to recognition, conversations, pipeline, and revenue growth">
            <div className="orbit-ring orbit-ring-outer" aria-hidden="true" />
            <div className="orbit-ring orbit-ring-middle" aria-hidden="true" />
            <div className="orbit-ring orbit-ring-inner" aria-hidden="true" />
            <div className="orbit-sweep" aria-hidden="true" />

            <div className="orbit-core" aria-hidden="true"><i /></div>

            <div className="orbit-mover orbit-node-mover mover-node-one"><div className="orbit-node"><UserRound /><span>Position</span></div></div>
            <div className="orbit-mover orbit-node-mover mover-node-two"><div className="orbit-node"><PenTool /><span>Content</span></div></div>
            <div className="orbit-mover orbit-node-mover mover-node-three"><div className="orbit-node"><MessageCircle /><span>Outreach</span></div></div>

            <div className="orbit-mover orbit-signal-mover mover-signal-one"><span className="orbit-signal"><i />Recognition</span></div>
            <div className="orbit-mover orbit-signal-mover mover-signal-two"><span className="orbit-signal"><i />GTM</span></div>
            <div className="orbit-mover orbit-signal-mover mover-signal-three"><span className="orbit-signal"><i />Pipeline created</span></div>
            <div className="orbit-mover orbit-signal-mover mover-signal-four"><span className="orbit-signal"><i />Revenue growth</span></div>
            <div className="orbit-mover orbit-signal-mover mover-signal-five"><span className="orbit-signal"><i />Conversations</span></div>
            <div className="orbit-mover orbit-signal-mover mover-signal-six"><span className="orbit-signal"><i />Trust</span></div>
          </div>
        </div>
      </section>

      <section className="problem-section section-shell">
        <div className="section-kicker">The founder problem</div>
        <div className="split-heading">
          <h2>Your expertise is strong.<br />Your LinkedIn should show it.</h2>
          <div>
            <p>You know your market, your customers, and the value your business creates. But when that expertise stays invisible or appears inconsistently, the right people cannot recognise it, trust it, or remember you.</p>
            <p>Meaningful conversations never begin, pipeline remains unpredictable, and potential revenue quietly passes to more visible competitors.</p>
          </div>
        </div>
        <div className="problem-chain" aria-label="How invisible expertise becomes missed revenue">
          <span><small>01</small><strong>Invisible expertise</strong></span><div className="problem-connector" aria-hidden="true" />
          <span><small>02</small><strong>Weak trust</strong></span><div className="problem-connector" aria-hidden="true" />
          <span><small>03</small><strong>Fewer conversations</strong></span><div className="problem-connector" aria-hidden="true" />
          <span><small>04</small><strong>Unpredictable pipeline</strong></span><div className="problem-connector" aria-hidden="true" />
          <span><small>05</small><strong>Missed revenue</strong></span>
        </div>
      </section>

      <section className="system-section" id="system">
        <div className="section-shell">
          <div className="section-kicker light">The UB system</div>
          <div className="system-heading">
            <h2>From expertise to visibility.<br />From visibility to pipeline.</h2>
            <p>We position your profile, publish ideas in your voice, build the right relationships, and turn earned attention into meaningful business conversations.</p>
          </div>
          <div className="system-grid">
            <article>
              <span>01</span><UserRound /><h3>Position</h3>
              <p>Make your expertise, audience, and value immediately clear.</p>
              <ul><li>ICP &amp; offer clarity</li><li>Profile copy</li><li>Banner &amp; visual direction</li></ul>
              <strong>Creates clarity</strong>
            </article>
            <article>
              <span>02</span><PenTool /><h3>Publish</h3>
              <p>Turn your knowledge and point of view into content that sounds like you.</p>
              <ul><li>Voice capture</li><li>Writing &amp; design</li><li>Consistent publishing</li></ul>
              <strong>Builds authority</strong>
            </article>
            <article>
              <span>03</span><MessageCircle /><h3>Participate</h3>
              <p>Place your expertise inside the conversations your market already cares about.</p>
              <ul><li>Thoughtful comments</li><li>Relevant connections</li><li>Relationship nurturing</li></ul>
              <strong>Builds familiarity &amp; trust</strong>
            </article>
            <article>
              <span>04</span><Target /><h3>Pipeline</h3>
              <p>Turn earned attention into relevant, human business conversations.</p>
              <ul><li>Conversation-led DMs</li><li>Warm follow-ups</li><li>Opportunity tracking</li></ul>
              <strong>Creates opportunities</strong>
            </article>
          </div>
          <div className="system-flow" aria-label="The UB system journey">
            <span>Expertise</span><i aria-hidden="true" /><span>Visibility</span><i aria-hidden="true" /><span>Recognition</span><i aria-hidden="true" /><span>Trust</span><i aria-hidden="true" /><span>Conversations</span><i aria-hidden="true" /><span>Pipeline</span>
          </div>
        </div>
      </section>

      <section className="services-section section-shell" id="services">
        <div className="section-kicker">Everything handled</div>
        <div className="services-intro">
          <h2>Not just posting.<br />A complete LinkedIn operation.</h2>
          <p>Daily engagement, personalised DMs, relevant connections, seven posts a week, account safety, and weekly reporting, all handled consistently by one team.</p>
        </div>
        <div className="service-list">
          <article>
            <div className="service-card-top"><div className="service-icon"><MessageCircle /></div><span>100 / day</span></div>
            <h3>Daily engagement</h3>
            <ul><li>100 manual comments every day</li><li>Industry-curated accounts and conversations</li><li>No automated or generic replies</li></ul>
          </article>
          <article>
            <div className="service-card-top"><div className="service-icon"><Send /></div><span>20+ / day</span></div>
            <h3>DM management</h3>
            <ul><li>At least 20 new conversations daily</li><li>Personalised, context-aware opening messages</li><li>Replies written in your tone of voice</li></ul>
          </article>
          <article>
            <div className="service-card-top"><div className="service-icon"><UserRound /></div><span>Relevant only</span></div>
            <h3>Connection building</h3>
            <ul><li>Weekly invitation capacity managed carefully</li><li>Often 200 to 250 requests when available</li><li>Only people relevant to your industry and goals</li></ul>
          </article>
          <article>
            <div className="service-card-top"><div className="service-icon"><PenTool /></div><span>7 / week</span></div>
            <h3>Content production</h3>
            <ul><li>Seven posts every week, weekends included</li><li>Writing and visual design handled together</li><li>A content plan shaped around your expertise</li></ul>
          </article>
          <article>
            <div className="service-card-top"><div className="service-icon"><ShieldCheck /></div><span>Human-managed</span></div>
            <h3>Account safety</h3>
            <ul><li>No automation connected to your LinkedIn account</li><li>All account activity remains human-managed</li><li>AI limited to off-platform support work</li></ul>
          </article>
          <article>
            <div className="service-card-top"><div className="service-icon"><BarChart3 /></div><span>Every week</span></div>
            <h3>Weekly reporting</h3>
            <ul><li>Weekly content and engagement summary</li><li>Conversation and opportunity insights</li><li>Clear learnings and next adjustments</li></ul>
          </article>
        </div>
      </section>

      <section className="comparison-section" id="compare">
        <div className="section-shell">
          <div className="section-kicker light">Why UB Pipeline</div>
          <h2>How <span>UB Pipeline</span> compares<br />to a social media manager<br />or full-service agency.</h2>
          <div className="comparison-table-wrap">
            <table className="comparison-table">
              <thead>
                <tr><th scope="col">Criteria</th><th scope="col">UB Pipeline</th><th scope="col">Social media<br />manager</th><th scope="col">Full-service<br />agency</th></tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.criterion}>
                    <th scope="row">{row.criterion}</th>
                    <td><ComparisonStatus value={row.ub} /></td>
                    <td><ComparisonStatus value={row.manager} /></td>
                    <td><ComparisonStatus value={row.agency} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="why-section">
        <div className="section-shell">
          <div className="section-kicker">Why it works</div>
          <h2 className="why-title">Be recognised before the conversation begins.</h2>
          <div className="why-grid">
            <article><div className="why-icon"><Search /></div><span>01</span><h3>Recognition</h3><ul><li>The right people repeatedly see your name and ideas</li><li>Your profile clearly communicates who you are</li><li>Your expertise becomes familiar and memorable</li></ul></article>
            <article><div className="why-icon"><ShieldCheck /></div><span>02</span><h3>Trust</h3><ul><li>Consistent insights demonstrate how you think</li><li>Useful content builds credibility before a call</li><li>Your founder presence strengthens the business</li></ul></article>
            <article><div className="why-icon"><MessageCircle /></div><span>03</span><h3>Warmer conversations</h3><ul><li>Engagement creates context before outreach</li><li>Messages feel relevant instead of completely cold</li><li>Conversations develop into business opportunities</li></ul></article>
          </div>
        </div>
      </section>

      <section className="fit-section">
        <div className="section-shell fit-grid">
          <div className="fit-copy">
            <div className="section-kicker light">Who we are built for</div>
            <h2>Founders with something real to say.</h2>
            <p>UB Pipeline is built for experienced professionals turning their expertise into a business, and startup founders building recognition with buyers, investors, partners, and talent.</p>
          </div>
          <div className="fit-cards">
            <article><strong>Experienced professionals turned founders</strong><p>Deep market experience becoming a consultancy, advisory practice, or specialised service business.</p></article>
            <article><strong>Startup and SaaS founders</strong><p>Building recognition with buyers, investors, partners, future hires, and the wider startup ecosystem.</p></article>
            <article><strong>Expert-led service businesses</strong><p>Strong delivery and expertise already in place, but no consistent founder-led LinkedIn growth channel.</p></article>
          </div>
        </div>
      </section>

      <section className="process-section" id="process">
        <div className="section-shell">
          <div className="section-kicker">How it works</div>
          <div className="process-head"><h2>We learn. We build.<br />We run it.</h2><p>Two focused setup weeks, followed by a consistent operating rhythm built around your voice, approvals, and business goals.</p></div>
          <div className="process-grid">
            <article>
              <span>Week 1</span>
              <h3>Learn everything</h3>
              <ul>
                <li>Founder interviews and working sessions</li>
                <li>Offer, audience, strategy, and business context</li>
                <li>Voice, documentation, past content, and existing LinkedIn presence</li>
                <li>A structured working hub in Notion and planning sheets</li>
              </ul>
            </article>
            <article>
              <span>Week 2</span>
              <h3>Build and approve</h3>
              <ul>
                <li>Profile picture direction, headline, About section, and banner</li>
                <li>Content themes, writing approach, and visual system</li>
                <li>Audience, prospect, and engagement planning</li>
                <li>Founder review, feedback, and revisions</li>
              </ul>
            </article>
            <article>
              <span>Week 3 onwards</span>
              <h3>Run and improve</h3>
              <ul>
                <li>Seven weekly posts with supporting visuals</li>
                <li>Daily engagement, relevant connections, and personalised DMs</li>
                <li>Weekly measurement, reporting, and adjustments</li>
                <li>A consistent channel built to support pipeline and improve return over time</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="about-section section-shell" id="about">
        <div className="about-panel">
          <div className="about-heading"><div className="section-kicker light">A team-led brand</div><h2>Founder insight.<br />Team execution.</h2></div>
          <div className="about-copy">
            <p>UB Pipeline is being built as a specialist team, not a personality dependent freelance service.</p>
            <ul>
              <li><strong>One connected team</strong><span>Strategy, writing, design, engagement, and relationship support work together.</span></li>
              <li><strong>Built around your voice</strong><span>We learn how you think and communicate before we represent you.</span></li>
              <li><strong>Trust protected at every step</strong><span>Human-led execution keeps your presence credible while the channel feels fully handled.</span></li>
            </ul>
          </div>
        </div>
      </section>

      <section className="faq-section section-shell" id="faq">
        <div className="section-kicker">Questions founders ask</div>
        <div className="faq-grid">
          <h2>Clear before<br />we start.</h2>
          <div className="faq-list">
            <details><summary>Will the content sound like me?</summary><p>That is the goal. We begin by learning how you speak, think, disagree, explain, and tell stories. You approve the content until the voice feels unmistakably yours.</p></details>
            <details><summary>How involved do I need to be?</summary><p>Expect a focused onboarding and short recurring input. UB Pipeline handles the day-to-day execution, while you provide the insight only you can provide.</p></details>
            <details><summary>Are the comments and DMs automated?</summary><p>Our positioning is human-led and relevance-first. We do not want your name attached to generic comments, copied outreach, or conversations that damage trust.</p></details>
            <details><summary>Do you guarantee leads or sales?</summary><p>We do not promise a fixed number of leads or sales because results also depend on your offer, market, and sales process. What we do commit to is consistent execution: stronger positioning, seven weekly posts, daily relationship building, relevant outreach, and continuous improvement, all designed to create more qualified conversations and a healthier pipeline.</p></details>
            <details><summary>What does it cost?</summary><p>Every engagement is scoped privately around your current LinkedIn presence, target market, publishing needs, and level of relationship management. After reviewing your profile and goals, we recommend a clear scope and fee so you know exactly what UB Pipeline will handle and how the work is designed to support a return.</p></details>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-inner">
          <div className="section-kicker light">Start the conversation</div>
          <h2>Build a LinkedIn presence<br />that matches your expertise.</h2>
          <p>Start over text or meet on Google Meet. We will look at your profile first, explain what we would change, and recommend the right scope.</p>
          <div className="contact-options" id="contact-details">
  <a href="https://www.linkedin.com/in/ubaman34/" target="_blank" rel="noreferrer"><div className="contact-icon"><UserRound aria-hidden="true" /></div><div><strong>Aman Patel</strong><span>Connect with the founder</span></div></a>
            <a href="mailto:ubpipeline@gmail.com"><div className="contact-icon"><Mail aria-hidden="true" /></div><div><strong>Email</strong><span>ubpipeline@gmail.com</span></div></a>
            <article><div className="contact-icon"><CalendarDays aria-hidden="true" /></div><div><strong>Calendly</strong><span>Booking link coming soon</span></div></article>
          </div>
        </div>
      </section>

      <footer>
        <a className="brand footer-brand" href="#top"><span className="brand-word"><span className="brand-prefix">UB</span><strong>Pipeline</strong></span></a>
        <div className="footer-message"><p>Fully managed LinkedIn growth for founders.</p><span>Remote team serving the US, UK, GCC, and Europe.</span></div>
        <div className="footer-nav"><a href="#services">Services</a><a href="#process">Process</a><a href="#faq">FAQ</a></div>
      </footer>
    </main>
  );
}
