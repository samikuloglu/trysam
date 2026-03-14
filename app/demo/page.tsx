import Script from 'next/script';
import Link from 'next/link';
import styles from './page.module.css';

export default function DemoPage() {
  return (
    <div className={styles.page}>
      {/* Demo Banner */}
      <div className={styles.demoBanner}>
        <strong>Demo:</strong> This is a preview of Sam, an AI admissions assistant for Pioneer Academy. Try chatting with Sam in the bottom right corner!
      </div>

      {/* Top Bar */}
      <div className={styles.topBar}>
        <div className={styles.topBarInner}>
          <span>National Blue Ribbon School of Excellence — U.S. Department of Education</span>
          <div className={styles.topBarLinks}>
            <a href="#">Veracross SIS</a>
            <a href="#">Calendar</a>
            <a href="#">Apply</a>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <div className={styles.logoArea}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://cdn.prod.website-files.com/61c52b1cf164120cc3c2f1f1/620c669d6175990196477512_pioneer-academy-logo.webp" alt="Pioneer Academy Logo" />
            <div className={styles.logoText}>
              PIONEER ACADEMY
              <span className={styles.logoTextSub}>Pre-K through 12 &bull; Wayne, NJ</span>
            </div>
          </div>
          <nav className={styles.nav}>
            <Link href="/widget">Widget</Link>
            <a href="#">About</a>
            <a href="#">Academics</a>
            <a href="#">Admissions</a>
            <a href="#">Athletics</a>
            <a href="#">Student Life</a>
            <a href="#" className={styles.navCta}>Apply Now</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={styles.heroContent}>
          <div className={styles.heroBadge}>Ranked #1 in Passaic County &bull; 8 Consecutive Years</div>
          <h1 className={styles.heroTitle}>Preparing Students for Exceptional Lives of Purpose</h1>
          <p className={styles.heroSub}>
            Pioneer Academy is an independent, college-preparatory day and boarding school offering a rigorous, ethics-driven PreK–12 education that empowers young people to achieve personal and academic success.
          </p>
          <div className={styles.heroButtons}>
            <a href="#" className={styles.btnPrimary}>Schedule a Visit</a>
            <a href="#" className={styles.btnOutline}>Learn More</a>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <div className={styles.statsBar}>
        <div className={styles.container}>
          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <h3>100%</h3>
              <p>College<br />Acceptance Rate</p>
            </div>
            <div className={styles.statItem}>
              <h3>8:1</h3>
              <p>Student to<br />Faculty Ratio</p>
            </div>
            <div className={styles.statItem}>
              <h3>$6.1M</h3>
              <p>Scholarships<br />Awarded 2025</p>
            </div>
            <div className={styles.statItem}>
              <h3>35</h3>
              <p>AP &amp; Honors<br />Courses</p>
            </div>
          </div>
        </div>
      </div>

      {/* Programs Section */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>Academic Programs</h2>
            <p>From Montessori Pre-K through college-preparatory Upper School, Pioneer offers a full spectrum of outstanding academic programs.</p>
            <div className={styles.goldLine} />
          </div>
          <div className={styles.programsGrid}>
            <div className={styles.programCard}>
              <div className={styles.cardImg}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://cdn.prod.website-files.com/61c52b1cf164120cc3c2f1f1/620f2536767ac94951cbfec8_middle-school.webp" alt="Pre-K" />
              </div>
              <div className={styles.cardBody}>
                <h3>Montessori Pre-K</h3>
                <p>Full-day program for ages 3–5 with certified Montessori educators fostering curiosity and independence.</p>
              </div>
            </div>
            <div className={styles.programCard}>
              <div className={styles.cardImg}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://cdn.prod.website-files.com/61c52b1cf164120cc3c2f1f1/6211b354d21edafe1897cd29_chemistry_lab.webp" alt="Lower School" />
              </div>
              <div className={styles.cardBody}>
                <h3>Lower School (K–4)</h3>
                <p>Inquiry-based learning building confidence, social-emotional intelligence, and a love of discovery.</p>
              </div>
            </div>
            <div className={styles.programCard}>
              <div className={styles.cardImg}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://cdn.prod.website-files.com/61c52b1cf164120cc3c2f1f1/6211b6de5b76a99e9b1d487a_college_guidance.webp" alt="Middle School" />
              </div>
              <div className={styles.cardBody}>
                <h3>Middle School (5–8)</h3>
                <p>STEAM-driven curriculum nurturing academic mastery, creative thinking, and collaborative skills.</p>
              </div>
            </div>
            <div className={styles.programCard}>
              <div className={styles.cardImg}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://cdn.prod.website-files.com/61c52b1cf164120cc3c2f1f1/622bb48def804dacdfd8c2e5_graduation_hall.webp" alt="Upper School" />
              </div>
              <div className={styles.cardBody}>
                <h3>Upper School (9–12)</h3>
                <p>35 AP &amp; Honors courses, NJIT Dual Degree, and personalized college counseling to top universities.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blue Ribbon Banner */}
      <section className={styles.ribbonBanner}>
        <div className={styles.container}>
          <div className={styles.ribbonBadge}>U.S. Department of Education 2024</div>
          <h2>National Blue Ribbon School of Excellence</h2>
          <p>The only K-12 school in New Jersey recognized as a National Blue Ribbon School by the U.S. Department of Education in 2024.</p>
        </div>
      </section>

      {/* College Results */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>Your Path to the Top</h2>
            <p>92% of Pioneer students are accepted to Top 50 colleges. From Harvard to Stanford, the results speak for themselves.</p>
            <div className={styles.goldLine} />
          </div>
          <div className={styles.collegeLogos}>
            {['Harvard', 'Princeton', 'Yale', 'Stanford', 'UPenn', 'Cornell', 'Johns Hopkins', 'Brown', 'Columbia', 'NYU'].map((name) => (
              <span key={name}>{name}</span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <h2>Begin Your Pioneer Journey</h2>
          <p>Schedule a campus visit and see firsthand why Pioneer has been ranked the best private school in Passaic County for eight years running.</p>
          <a href="#" className={styles.btnPrimary}>Schedule a Visit</a>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerInner}>
            <div>
              164 Totowa Rd. Wayne, NJ 07470 &nbsp;|&nbsp; (973) 405-5169 &nbsp;|&nbsp; <a href="mailto:admissions@pioneeracademy.org">admissions@pioneeracademy.org</a>
            </div>
            <div>
              &copy; 2025 Pioneer Academy. All Rights Reserved.
            </div>
          </div>
        </div>
      </footer>

      {/* Chatbase (legacy, to be migrated to Sam's backend) */}
      <Script
        id="chatbase-widget"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `(function(){if(!window.chatbase||window.chatbase("getState")!=="initialized"){window.chatbase=(...arguments)=>{if(!window.chatbase.q){window.chatbase.q=[]}window.chatbase.q.push(arguments)};window.chatbase=new Proxy(window.chatbase,{get(target,prop){if(prop==="q"){return target.q}return(...args)=>target(prop,...args)}})}const onLoad=function(){const script=document.createElement("script");script.src="https://www.chatbase.co/embed.min.js";script.id="e5uJ5w_uxFRG1UM7lTcqL";script.domain="www.chatbase.co";document.body.appendChild(script)};if(document.readyState==="complete"){onLoad()}else{window.addEventListener("load",onLoad)}})();`,
        }}
      />
    </div>
  );
}
