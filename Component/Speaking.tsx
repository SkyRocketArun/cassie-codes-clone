import Link from 'next/link'
import { useTheme } from "next-themes";
import styled from 'styled-components'

const Speaking = () => {
  const { theme, setTheme } = useTheme();
  return (
    <>
      <SpeackingSection className='speaking_section content_section bg-[#fef8b4] dark:bg-[#2c2a32] md:pt-[200px] pt-[80px]' theme={theme}>
        <div className="speaking container">
          <div className='top_section flex md:flex-row flex-col' >
            <div className='flex-1'>
              <h1 className='font-Mosk-Ultra-Bold text-[color:var(--P-D-color)] dark:text-[color:var(--P-L-color)]'>Speaking.</h1>
              <p className='text-[20px] my-[16px]'>The first time I got asked to speak at a conference, my gut reaction was “heck no. That sounds terrifying”.</p>
              <p className='text-[20px] my-[16px]'>So naturally I said yes. Since then I’ve spoken at conferences and meet-ups all over the world. It still terrifies me.</p>
              <Link href="#" ><a className='underline text-[24px]'>Check out my videos and upcoming talks.</a></Link>
            </div>
            <div className='flex-1 img_section'>
              <img src='./images/bg.jpg' className='w-[400px] border-2 border-white shadow-[8px 8px 0px 0px_#ffffff] mx-auto' style={{ boxShadow: '8px 8px 0px 0px_#ffffff' }} />
            </div>
          </div>
          <div className='bottom_section'>
            <div className="speaking_content">
              <h3>workshop</h3>
              <div>
                <Link href="#">
                  <a>
                    <h2>Getting started with SVG animation</h2>
                    <p>Animation is one of the best ways to bring brand personality and character to an online experience, but in the busy world of front-end development, it can often be overlooked.</p>
                    <p>In this workshop we cover everything you need to know to get started with, and master SVG animation.</p>
                  </a>
                </Link>
              </div>
            </div>
            <div className="speaking_content">
              <h3>talk</h3>
              <div>
                <Link href="#">
                  <a>
                    <h2>Getting started</h2>
                    <p>Animation is one of the best ways to bring brand personality and character to an online experience, but in the busy world of front-end development, it can often be overlooked.</p>
                    <p>In this workshop we cover everything you need to know to get started with, and master SVG animation.</p>
                  </a>
                </Link>
              </div>
            </div>
            <div className="speaking_content">
              <h3>talk</h3>
              <div>
                <Link href="#">
                  <a>
                    <h2>Getting started with SVG animation</h2>
                    <p>Animation is one of the best ways to bring brand personality and character to an online experience, but in the busy world of front-end development, it can often be overlooked.</p>
                    <p>In this workshop we cover everything you need to know to get started with, and master SVG animation.</p>
                  </a>
                </Link>
              </div>
            </div>
            <div className="speaking_content">
              <h3>talk</h3>
              <div>
                <Link href="#">
                  <a>
                    <h2>Getting started with SVG animation</h2>
                    <p>Animation is one of the best ways to bring brand personality and character to an online experience, but in the busy world of front-end development, it can often be overlooked.</p>
                    <p>In this workshop we cover everything you need to know to get started with, and master SVG animation.</p>
                  </a>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </SpeackingSection>
    </>
  )
}

export default Speaking
const SpeackingSection = styled.section`

/* .top_section p {
  margin: 16px 0px;
  font-size: 20px;
  font-family: system-ui;
} */
/* .top_section a {
  text-decoration: underline;
  font-size: 24px;
} */
.img_section > img {
  border: 2px solid #fff;
  width: 400px;
  margin: 0 auto;
  box-shadow: 8px 8px 0px 0px #fff;
}
.bottom_section {
  margin-top: 200px;
}
.speaking_content {
  display: flex;
  justify-content: space-between;
  margin: 30px 0px;
  @media (max-width:450px){
    flex-direction: column;
  }
}
.speaking_content > div {
  width: 62%;
  position: relative;
  @media (max-width:450px){
    width: 100%;
  }
}
.speaking_content > div:before {
  content: "";
  position: absolute;
  top: 24px;
  left: -196px;
  background: ${props => props.theme === 'light' ? '#000' : '#fff'};
  height: 2px;
  width: 170px;
  @media (max-width: 768px) {
    display:none;
  }
}
.speaking_content > h3 {
  font-family: "Jenthill";
  font-size: 24px;
  transform: rotate(350deg);
  margin-left: 30px;
  @media (max-width:450px){
    margin-left: 0px;
    margin-bottom: 60px;
  }
}
.speaking_content h2 {
  width: fit-content;
  font-size: 34px;
  font-family: "Mosk-Ultra-Bold";
  position: relative;
  z-index: 20;
  line-height: 1;
  display: inline;
  background-image: linear-gradient(transparent 50%, ${props => props.theme == 'light' ? '#f2c3c0 50%,#f2c3c0 85%' : '#774069 50%,#774069 85%'},transparent 85%,transparent 100%);
  background-repeat: no-repeat;
  background-size: 0% 100%;
}
.speaking_content > div a:hover h2 {
  transition: 0.5s cubic-bezier(0.645, 0.045, 0.355, 1);
  background-size: 100% 100%;
}

.speaking_content p {
  margin: 16px 0px;
  font-size: 20px;
  font-family: system-ui;
}
`
