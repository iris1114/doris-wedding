import styled from "styled-components";
import { DEVICE } from "../utils/device";
import { COLOR } from "../utils/styles";
import { menu } from "../utils/data";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openMobileMenu = () => {
    if (window.innerWidth <= 768) {
      setIsOpen(!isOpen);
    }
  };

  const closeMobileMenu = () => {
    setIsOpen(false);
  };

  const getOpenClass = () => {
    if (isOpen) {
      return "open";
    }
  };

  return (
    <StyledHeader>
      <div className={`container header ${getOpenClass()}`}>
        <StyledLogo>
          <div> Tim ❤ Doris</div>
        </StyledLogo>
        <StyledNav className="nav m-none">
          <div className="nav__ul">
            {menu.map((element, index) => {
              return (
                <div className="nav__li" key={index} onClick={closeMobileMenu}>
                  <div className={`nav__link `} to={element.pathname}>
                    {element.title}
                  </div>
                </div>
              );
            })}
          </div>
        </StyledNav>

        <StyledBurger className="pc-none burger" onClick={openMobileMenu}>
          <div className="burger__box">
            <span className="burger__line burger__line1"></span>
            <span className="burger__line burger__line2"></span>
            <span className="burger__line burger__line3"></span>
          </div>
        </StyledBurger>
      </div>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  margin: auto;
  position: fixed;
  top: 0px;
  z-index: 2;
  width: 100%;
  background-color: hsl(0, 0%, 100%, 0.6);

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;

    @media ${DEVICE.tablet} {
      height: 65px;
    }

    &.open {
      .nav {
        display: block;
        position: absolute;
        top: 0%;
        left: 0%;
        width: 100%;
        height: 100vh;
        background-color: hsl(0, 0%, 100%, 0.9);
        border-radius: 5px;

        &__ul {
          position: absolute;
          top: 40%;
          left: 50%;
          transform: translate(-50%, -40%);
        }

        &__link {
          display: block;
          text-align: center;
          padding: 5px 0px;
          cursor: pointer;
          margin-bottom: 20px;
          color: ${COLOR.darkPink};
        }
      }
      .burger {
        &__line1 {
          transform: rotate(45deg);
        }
        &__line2 {
          opacity: 0;
        }
        &__line3 {
          transform: rotate(-45deg);
        }
      }
    }
  }
`;

const StyledLogo = styled.div`
  width: 150px;
  z-index: 2;
  padding: 25px 20px 20px;
  color: ${COLOR.darkPink};

  @media ${DEVICE.tablet} {
    width: 180px;
  }
`;

const StyledNav = styled.nav`
  @media ${DEVICE.tablet} {
    .nav {
      &__ul {
        display: flex;
        position: relative;
      }

      &__li {
        margin-right: 5px;
      }

      &__link {
        display: block;
        text-align: center;
        padding: 3px 5px;
        cursor: pointer;
        margin-right: 20px;
        color: ${COLOR.darkPink};

        &:hover {
          + .nav__submenu {
            display: block;
          }
        }
      }

      &__submenu {
        position: absolute;
        margin-left: 10px;
        background-color: hsl(0, 0%, 100%, 0.85);
        display: none;

        &:hover {
          display: block;
        }
      }

      &__sublink {
        padding: 10px 20px;
        display: block;
        cursor: pointer;
        color: ${COLOR.black};

        &:hover {
          color: ${COLOR.hoverBg};
        }
      }
    }
  }
`;

const StyledBurger = styled.div`
  width: 50px;
  height: 35px;
  cursor: pointer;
  border: 1px solid ${COLOR.white};
  border-radius: 5px;
  z-index: 2;

  .burger {
    &__box {
      height: 35px;
    }
    &__line {
      width: 26px;
      height: 2px;
      background-color: ${COLOR.darkPink};
      display: block;
      margin: 6.5px auto;
      transform-origin: 1px 1px;
      transition: all 300ms ease-in-out;

      &:last-child {
        margin-bottom: 0px;
      }
    }
  }
`;

export default Header;
