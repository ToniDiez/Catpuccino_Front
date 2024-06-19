import styled from "styled-components";

const Topbar = styled.div`
  padding: 0;
  font-size: 15px;
  height: 50px;
  transition: all 0.5s;
  background: rgba(26, 24, 22, 0.8);
  z-index: 996;
  color: rgba(255, 255, 255, 0.7);

  &.topbar-transparent {
    background: transparent;
  }

  &.topbar-scrolled {
    top: -50px;
  }

  i {
    color: #ffb03b;
    line-height: 0;

    span {
      color: #fff;
      font-style: normal;
      padding-left: 5px;
    }
  }
`;

const Header = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Satisfy&display=swap");

  top: 50px;
  height: 70px;
  z-index: 997;
  transition: all 0.5s;
  padding: 10px 0;
  background: rgba(26, 24, 22, 0.85);

  &.header-transparent {
    background: transparent;
  }

  &.header-scrolled {
    top: 0;
    background: transparent;
  }

  .logo h1 {
    font-size: 32px;
    margin: 0;
    padding: 0;
    line-height: 1;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
    font-family: "Satisfy", sans-serif;
  }

  .logo h1 a,
  .logo h1 a:hover {
    color: #fff;
    text-decoration: none;
  }

  .logo img {
    max-height: 40px;
    margin-right: 6px;
  }
`;

const Nav = styled.nav`
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;

    @media (max-width: 991px) {
      display: none;
    }
  }

  li {
    position: relative;
    white-space: nowrap;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 8px;
    font-size: 14px;
    font-weight: 700;
    color: #fff;
    white-space: nowrap;
    transition: 0.3s;
  }

  a:hover,
  a:active,
  a.nav-link.active {
    color: #ffb03b;
  }

  .dropdown ul {
    display: block;
    position: absolute;
    left: 10px;
    top: calc(100% + 30px);
    margin: 0;
    padding: 10px 0;
    z-index: 99;
    opacity: 0;
    visibility: hidden;
    background: white;
    transition: 0.3s;

    li {
      min-width: 200px;
    }

    a {
      padding: 10px 20px;
      font-size: 14px;
      text-transform: none;
    }

    a:hover,
    a:active {
      color: #ffb03b;
    }
  }

  .dropdown > .dropdown-active {
    display: block;
    top: 100%;
    opacity: 1;
    visibility: visible;
  }

  /* @media (max-width: 1366px) {
    .dropdown .dropdown ul {
      left: -90%;
    }

    .dropdown .dropdown:hover > ul {
      left: -100%;
      text-decoration: none;
    }
    position: fixed;
    overflow: hidden;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: rgba(39, 37, 34, 0.9);
    transition: 0.3s;
    z-index: 0;

    .mobile-nav-toggle {
      position: absolute;
      top: 15px;
      right: 15px;
    }

    ul {
      display: block;
      position: absolute;
      top: 55px;
      right: 15px;
      bottom: 15px;
      left: 15px;
      padding: 10px 0;
      border-radius: 8px;
      background-color: #fff;
      overflow-y: auto;
      transition: 0.3s;
    }

    a,
    a:focus {
      padding: 10px 20px;
      font-size: 15px;
      color: #433f39;
    }

    a:hover,
    .active,
    li:hover > a {
      color: #ffb03b;
    }

    .getstarted,
    .getstarted:focus {
      margin: 15px;
    }

    .dropdown ul {
      position: static;
      display: none;
      margin: 10px 20px;
      padding: 10px 0;
      z-index: 99;
      opacity: 1;
      visibility: visible;
      background: #fff;
      box-shadow: 0px 0px 30px rgba(127, 137, 161, 0.25);
      text-decoration: none;
    }

    .dropdown ul li {
      min-width: 200px;
      text-decoration: none;
    }

    .dropdown ul a {
      padding: 10px 20px;
      text-decoration: none;
    }

    .dropdown ul a i {
      font-size: 12px;
    }

    .dropdown ul a:hover,
    .dropdown ul .active:hover,
    .dropdown ul li:hover > a {
      color: #ffb03b;
    }

    .dropdown > .dropdown-active {
      display: block;
    }
  } */
`;

const MobileNavToggle = styled.div`
  color: #fff;
  font-size: 28px;
  cursor: pointer;
  display: none;
  line-height: 0;
  transition: 0.5s;

  @media (max-width: 991px) {
    display: block;
  }
`;

export { Header, Nav, MobileNavToggle, Topbar };
