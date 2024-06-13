// SideNav.tsx
import React from "react";

interface SideNavProps {
  isOpen: boolean;
  toggleNav: () => void;
}

const SideNav: React.FC<SideNavProps> = ({ isOpen, toggleNav }) => {
  return (
    <div className={`sidenav ${isOpen ? "open" : ""}`}>
      <button className="closebtn" onClick={toggleNav}>
        &times;
      </button>
      <div className="up-side-navbar">
        <a href="/protein">
          <p className="d-flex justify-content-between p-0 m-0">
            <span>PROTEİN</span> <i className="fa-solid fa-chevron-right"></i>
          </p>
        </a>
        <a href="#">
          <p className="d-flex justify-content-between p-0 m-0  py-1">
            <span>SPOR GIDALARI</span>{" "}
            <i className="fa-solid fa-chevron-right"></i>
          </p>
        </a>
        <a href="#">
          <p className="d-flex justify-content-between p-0 m-0  py-1">
            <span>SAĞLIK</span> <i className="fa-solid fa-chevron-right"></i>
          </p>
        </a>
        <a href="#">
          <p className="d-flex justify-content-between p-0 m-0  py-1">
            <span>GIDA</span> <i className="fa-solid fa-chevron-right"></i>
          </p>
        </a>
        <a href="#">
          <p className="d-flex justify-content-between p-0 m-0 py-1">
            <span>VİTAMİN</span> <i className="fa-solid fa-chevron-right"></i>
          </p>
        </a>
        <a href="#">TÜM ÜRÜNLER</a>
      </div>

      <div className="down-side-navbar">
        <a href="#">HESABIM</a>
        <a href="#">MÜŞTERİ YORUMLARI</a>
        <a href="#">İLETİŞİM</a>
      </div>
    </div>
  );
};

export default SideNav;
