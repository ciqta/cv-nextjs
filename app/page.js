import styles from '../styles/CV.module.css';
import Image from 'next/image';

export default function Home() {
  return (
    <main className={styles.container}>
      {/* Header CV */}
      <header className={styles.header}>
        <Image src="/akid.jpg" alt="Profile" width={120} height={120} />

        

        
        <div>
          <h1 className={styles.name}>Ciqta Audika</h1>
          <p className={styles.role}>Junior FrontEnd Developer</p>

          {/* Tombol Link PDF */}
          <a
            href="https://drive.google.com/file/d/1B6sjTcszAZpGoEIa9wwnr2-R2tjd-LCJ/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.cvButton}
          >
            📄 Full CV and Portofolio (PDF)
          </a>
        </div>
      </header>

      {/* About Me */}
      <section className={styles.section}>
        <h2>About Me</h2>
        <p>
          I&apos;m a student at Taruna Bhakti School in Depok with a passion for building clean,
          responsive, and user-friendly web interfaces. I have experience in HTML, CSS, and JavaScript, And Laravel
          and I am continuously learning more about modern frontend frameworks like React and Next.js.
        </p>
      </section>

      {/* Skills */}
      <section className={styles.section}>
        <h2> Hard Skills</h2>
        <ul>
          <li>HTML,CSS</li>
          <li>Javascript</li>
          <li>Laravel</li>
          <li>Mobile Design</li>
          <li>UI/UX Design</li>
        </ul>
      </section>

      {/* Experience */}
      <section className={styles.section}>
        <h2>Soft Skills</h2>
        <ul>
          <li>Teamwork</li>
          <li>Time Development</li>
          <li>Public Speaking</li>
          <li>Adaptability</li>
          <li>Presentation</li>
        </ul>
      </section>

      {/* Education */}
      <section className={styles.section}>
        <h2>Education</h2>
        <p><strong>Taruna Bhakti Vocational High School</strong> – Software Engineering (2023 - Present)</p>
      </section>

      {/* Projects */}
      <section className={styles.section}>
        <h2>Projects</h2>
        <p><strong>Story Horror Game</strong> – My team made a horror game called
Mystery Goa Ngawi for the final
semester assignment.</p>
        <p><strong>School Management App</strong> – Created a web-based app for managing school payments and student data.</p>
        <p><strong>Digital Library</strong> – I created the UI/UX of a digital
library, and I combined concepts
and references between real
and digital books, so that
readers can experience the
reality of reading a physical book
in digital pages.
semester assignment.</p>
      </section>
    </main>
  );
}
