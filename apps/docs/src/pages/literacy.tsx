import Image from "next/image";
import {Section, SubSection} from "../components/Section";

const Literacy = () => (
  <>
    <h1 className="font-bold text-4xl text-center">Literacy</h1>
    <div className="divider" />

    <div id="demo" className="mx-auto text-center">
      <Image src="/literacy/demo.gif" alt="demo" className="rounded-box" width="769" height="560" />
    </div>

    <Section id="about" title="About">
      <p className="prose mx-auto">
        Literacy app with support for touchscreens. User inputs words and starts the game. User then
        has to spell the word correctly to move to the next word. If help is needed you can hear the
        word being spoken or take a peak at the word. After all words have been spelled correctly
        there is a stats page showing how many tries it took to guess correctly for each word.
      </p>
    </Section>

    <Section id="usage" title="Usage">
      <SubSection imgSrc="/literacy/landing.png" imgAlt="landing page">
        <p>
          When you first load the page you will be greeted with a button that says &quot;Add words
          to start&quot;.
        </p>
      </SubSection>

      <SubSection imgSrc="/literacy/word-list.png" imgAlt="Word list page">
        <p>When you click this button you will be directed to a page to manage word lists.</p>
      </SubSection>

      <SubSection imgSrc="/literacy/word-list.gif" imgAlt="Word list usage gif">
        <p className="my-4">You can see how the word list works in this GIF</p>
        <p>
          Once you start adding words you will see a &quot;start&quot; button appear. When you are
          done adding words, click this.
        </p>
      </SubSection>

      <SubSection imgSrc="/literacy/game.png" imgAlt="game page">
        <p className="mb-4">
          For every new word the word will be spoken and shown on the screen for some amount of time
          (defined in{" "}
          <a href="#settings" className="link">
            settings
          </a>
          )
        </p>
        <p>
          When in the game You will see 2 buttons. Listen and Peak. Clicking listen will speak out
          the word, clicking peak will show the word on the screen for some amount of time (as above
          defined in{" "}
          <a href="#settings" className="link">
            settings
          </a>
          )
        </p>
      </SubSection>

      <SubSection imgSrc="/literacy/incorrect.png" imgAlt="Incorrect guess">
        <p>
          When a guess is incorrect you will see this popup. This popup will stay for 2 seconds.
          Afterwards the guess input will be reset, the word will be spoken again and the word will
          appear on the screen.
        </p>
      </SubSection>

      <SubSection imgSrc="/literacy/correct.png" imgAlt="Correct guess">
        <p>
          When a guess is correct you will see this popup. This popup will stay for 2 seconds.
          Afterwards the next word will be loaded or if there are no more words to guess the
          feedback page will be loaded.
        </p>
      </SubSection>

      <SubSection imgSrc="/literacy/feedback.png" imgAlt="Feedback page">
        <p>
          When all words have been guessed correctly you will see a feedback page which gives you
          the stats.
        </p>
      </SubSection>
    </Section>

    <Section id="settings" title="Settings">
      <SubSection imgSrc="/literacy/settings.png" imgAlt="settings page">
        <div>
          <h3 className="text-xl font-semibold">Peak time</h3>
          <p>
            Changes the amount of time the word stays on the screen when peak button is clicked.
          </p>
          <p>Options are:</p>
          <ul>
            <li>1 second - default</li>
            <li>2 seconds</li>
            <li>3 seconds</li>
            <li>4 seconds</li>
            <li>5 seconds</li>
            <li>Always</li>
          </ul>
        </div>

        <div className="mt-4">
          <h3 className="text-xl font-semibold">Touchscreen</h3>
          <p>Toggles weather to use the on screen keyboard. Default is true</p>
        </div>

        <div className="mt-4">
          <h3 className="text-xl font-semibold">Select voice</h3>
          <p>
            List of possible voices to use when the word is spoken. You can hear what the voice
            sounds like be click the test button.
          </p>
        </div>
      </SubSection>
    </Section>
  </>
);

export default Literacy;
