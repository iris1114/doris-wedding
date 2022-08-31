import { Reveal } from "react-awesome-reveal";
import styled from "styled-components";
import Title from "../../components/Title";
import { DEVICE } from "../../utils/device";
import { COLOR, fadeInLeft, fadeInRight, fadeInUp } from "../../utils/styles";

const StyledWelcom = styled.div`
  padding: 0px 15px;
  position: relative;

  .text {
    max-width: 1200px;
    margin: auto;
    z-index: 1;
    padding: 100px 0px;

    @media ${DEVICE.tablet} {
      width: 50%;
    }

    .sub {
      font-size: 18px;
      display: flex;
      align-items: baseline;

      .line {
        width: 500px;
        height: 2px;
        background-color: ${COLOR.black};
      }
    }

    .title {
      font-size: 50px;
      margin-top: 30px;
    }

    .info {
      margin-top: 50px;

      p {
        margin-bottom: 30px;
        margin-top: 10px;
      }

      .map {
        margin-top: 10px;
      }

      .btn {
        display: inline-block;
        margin-top: 30px;
        padding: 10px 20px;
        border: 1px solid ${COLOR.black};

        &:hover {
          background-color: ${COLOR.darkPink};
          color: ${COLOR.white};
          border: 1px solid ${COLOR.darkPink};
        }
      }
    }

    .line {
      margin: 30px 0px;
    }

    .notice {
      .note {
        margin-bottom: 10px;
      }
      li {
        margin-bottom: 10px;
      }
    }
  }

  .pic {
    width: 50%;
    position: absolute;

    @media ${DEVICE.tablet} {
      width: 20%;
    }

    &.flower1 {
      right: 0px;
      bottom: 0px;

      @media ${DEVICE.tablet} {
        right: 0px;
        bottom: 0px;
      }
    }

    &.flower2 {
      right: 0px;
      bottom: 250px;

      @media ${DEVICE.tablet} {
        right: 0px;
        bottom: 200px;
      }
    }

    &.flower3 {
      left: 0px;
      top: 0px;
      @media ${DEVICE.tablet} {
        width: 20%;
      }
    }

    &.car {
      right: 0%;
      top: 7%;
      z-index: 1;
      animation: move-m 4s linear infinite;

      @media ${DEVICE.tablet} {
        right: 16%;
        top: 6%;
        animation: move-pc 3s linear infinite;

        @keyframes move-pc {
          50% {
            right: 14%;
          }
        }
      }

      @keyframes move-m {
        50% {
          right: 5%;
        }
      }
    }
  }

  img {
    width: 100%;
    vertical-align: middle;
  }
`;

const WelcomeSection = () => {
  return (
    <StyledWelcom>
      <div className="pic flower1">
        <Reveal keyframes={fadeInRight} delay={1000} duration={800}>
          <img src={require("../../images/welcome/flower1.png")} alt="flower" />
        </Reveal>
      </div>

      <div className="pic flower2">
        <Reveal keyframes={fadeInRight} delay={1000} duration={800}>
          <img src={require("../../images/welcome/flower2.png")} alt="flower" />
        </Reveal>
      </div>

      <div className="pic flower3">
        <Reveal keyframes={fadeInLeft} delay={1000} duration={800}>
          <img src={require("../../images/welcome/flower3.png")} alt="flower" />
        </Reveal>
      </div>
      <div className="pic car">
        <Reveal keyframes={fadeInRight} delay={1000} duration={1200}>
          <img src={require("../../images/welcome/car.png")} alt="flower" />
        </Reveal>
      </div>

      <div className="text">
        <Reveal keyframes={fadeInUp} delay={600} duration={600}>
          <Title sub="WHEN AND WHERE" title="WELCOME" />
        </Reveal>

        <div className="info">
          <div className="note">
            <Reveal keyframes={fadeInUp} delay={800} duration={600}>
              <div>親愛的家人朋友們，</div>
              <p>
                感謝您願意來參加仲廷&玟蓉的婚禮，很榮幸有您一同參與這個對我們意義重大的時刻，再請您留意以下資訊，期待9/17(六)與您相見！
              </p>
            </Reveal>
            <Reveal keyframes={fadeInUp} delay={800} duration={600}>
              <div>日期｜2022年9月17日（星期六）</div>
              <div>時間｜12:00午宴開始</div>
              <div>地點｜台北市萬華區艋舺大道101號15樓 天闊廳</div>
            </Reveal>
            <Reveal keyframes={fadeInUp} delay={800} duration={600}>
              <img
                className="map"
                src={require("../../images/welcome/map.jpg")}
                alt="map"
              />
            </Reveal>
          </div>
          <Reveal keyframes={fadeInUp} delay={800} duration={600}>
            <a
              href="https://www.google.com/maps/place/%E6%A0%BC%E8%90%8A%E5%A4%A9%E6%BC%BE%E5%A4%A7%E9%A3%AF%E5%BA%97+Great+Skyview/@25.0334163,121.50139,15z/data=!4m5!3m4!1s0x0:0x321fb4825e85fb39!8m2!3d25.0334163!4d121.50139?sa=X&ved=2ahUKEwjY6Zee8-75AhU_pVYBHa8nBokQ_BJ6BAhfEAU&shorturl=1"
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              打開 Google 地圖
            </a>
          </Reveal>
        </div>

        <Reveal keyframes={fadeInUp} delay={800} duration={600}>
          <div className="line">/</div>
          <div className="notice">
            <div className="note">溫馨提醒：</div>
            <ul>
              <li>
                1.
                若因疫情因素或臨時有事無法出席婚禮，都沒關係的唷！請隨時與我們聯繫
              </li>
              <li>
                2.
                當天每桌都備有紅、白酒&威士忌，想痛快暢飲的朋友記得搭乘大眾運輸前來喔
              </li>
            </ul>
          </div>
        </Reveal>
      </div>
    </StyledWelcom>
  );
};

export default WelcomeSection;
