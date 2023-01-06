import styles from "../../styles/components/Header.module.scss";
import logo from "../../public/img/logo.svg";

const NavbarHeader = () => {
  return (
    <div>
      <header className={styles.header}>
        <div className={`container-fluid ${styles.pos_static_desktop}`}>
          <nav className={styles.navbar}>
            <a className={styles.brand}>
              <img src={logo.src} className="" alt="" />
            </a>
            <button type="button" className={styles.burger} id="burger">
              <span className={styles.burgerLine}></span>
              <span className={styles.burgerLine}></span>
              <span className={styles.burgerLine}></span>
            </button>
            <div className={styles.menu} id="menu">
              <ul className={styles.menu_block}>
                <li
                  className={`${styles.menu_item} ${styles.whoWeArePageActive}`}
                >
                  <a href="eng/who-we-are-overview.php">Who We Are</a>
                  {/* <div className="sub-menu">
              <div className="sub-menu-inner">
                <ul className="sub-menu-item">
                  <li><a href="eng/who-we-are-overview.php">About Us</a></li>
                  <li>
                    <a href="eng/who-we-are-founders-journey.php"
                      >Founder's Journey</a
                    >
                  </li>
                </ul>
                <ul className="sub-menu-item">
                  <li>
                    <a href="eng/who-we-are-leadership.php">Leadership</a>
                  </li>
                  <li>
                    <a href="eng/who-we-are-awards-recognition.php">
                      Awards & Recognitions
                    </a>
                  </li>
                </ul>
              </div>
            </div> */}
                </li>
                <li className="menu-item ourBusinesses_page_active">
                  <a href="eng/businesses-overview.php">Our Businesses</a>
                  {/* <div className="sub-menu">
              <div className="sub-menu-inner">
                <ul className="sub-menu-item">
                  <li><a href="eng/businesses-overview.php">Overview</a></li>
                  <li><a href="eng/businesses-aluminium.php">Aluminium</a></li>
                  <li>
                    <a href="eng/businesses-zinc-lead-silver.php"
                      >Zinc, Lead & Silver</a
                    >
                  </li>
                </ul>
                <ul className="sub-menu-item">
                  <li>
                    <a href="eng/businesses-oil-gas.php">Oil & Gas</a>
                  </li>
                  <li>
                    <a href="eng/businesses-iron-ore.php">Iron Ore</a>
                  </li>
                  <li>
                    <a href="eng/businesses-steel.php">Steel</a>
                  </li>
                </ul>
                <ul className="sub-menu-item">
                  <li>
                    <a href="eng/businesses-copper.php">Copper</a>
                  </li>
                  <li>
                    <a href="eng/businesses-power.php">Power</a>
                  </li>
                  <li>
                    <a href="eng/businesses-ferro-chrome.php">Ferro Chrome</a>
                  </li>
                </ul>
                <ul className="sub-menu-item">
                  <li>
                    <a href="eng/businesses-semiconductors-glass.php">Semiconductors and Glass</a>
                  </li>
                  <li>
                    <a
                      href="https://vedantametalbazaar.com/"
                      className="btn_vedanta_default"
                      target="_blank"
                      >Vedanta Metal Bazaar</a
                    >
                  </li>
                </ul>
              </div>
            </div> */}
                </li>
                <li className="menu-item esgPageActive">
                  <a href="eng/esg-overview.php">ESG</a>
                  {/* <div className="sub-menu">
              <div className="sub-menu-inner">
                <ul className="sub-menu-item">
                  <li><a href="eng/esg-overview.php">Overview</a></li>
                  <li>
                    <a href="eng/esg-key-sustainability-topics.php"
                      >Key Sustainability Topics</a
                    >
                  </li>
                </ul>
                <ul className="sub-menu-item">
                  <li>
                    <a href="eng/esg-reporting.php">Reporting</a>
                  </li>
                  <li>
                    <a href="eng/esg-sustainability-framework.php"
                      >Vedanta Sustainability Framework</a
                    >
                  </li>
                </ul>
              </div>
            </div> */}
                </li>
                <li className="menu-item digi_ino_page_active">
                  <a href="eng/digi-innovation.php">Digi Innovation</a>
                  {/* <div className="sub-menu">
              <div className="sub-menu-inner">
                <ul className="sub-menu-item">
                  <li><a href="eng/digi-innovation.php">Overview</a></li>
                  <li>
                    <a href="eng/project-pratham.php">Project Pratham</a>
                  </li>
                </ul>
                <ul className="sub-menu-item">
                  <li>
                    <a href="eng/digital-businesses.php">Digital Businesses</a>
                  </li>
                  <li>
                    <a href="eng/blog_listing.php#blogList">Blogs</a>
                  </li>
                </ul>
              </div>
            </div> */}
                </li>
                <li className="menu-item careerPageActive">
                  <a href="eng/work-at-vedanta.php">Careers</a>
                  {/* <div className="sub-menu">
              <div className="sub-menu-inner">
                <ul className="sub-menu-item">
                  <li><a href="eng/work-at-vedanta.php">Work at Vedanta</a></li>
                  <li>
                    <a href="eng/life_at_vedanta.php">Our Family</a>
                  </li>
                </ul>
                <ul className="sub-menu-item">
                  <li>
                    <a href="eng/careers-empowering-the-youth.php"
                      >Career Growth</a
                    >
                  </li>
                  <li>
                    <a href="https://vhr.darwinbox.in/ms/candidate/careers">
                      Join us
                    </a>
                  </li>
                </ul>
              </div>
            </div> */}
                </li>
                <li className="menu-item investorPageActive">
                  <a href="eng/investor-relations-overview.php">
                    Investor Relations
                  </a>
                  {/* <div className="sub-menu">
              <div className="sub-menu-inner">
                <ul className="sub-menu-item">
                  <li>
                    <a href="eng/investor-relations-overview.php">Overview</a>
                  </li>
                  <li>
                    <a href="eng/investor-relations-overview.php#resultsReports"
                      >Results and Reports
                    </a>
                  </li>
                  <li>
                    <a href="eng/investor-relations-investors-presentation.php"
                      >Investor Presentation</a
                    >
                  </li>
                </ul>
                <ul className="sub-menu-item">
                  <li>
                    <a href="eng/investor-relations-credit-rating.php"
                      >Credit Rating</a
                    >
                  </li>
                  <li>
                    <a href="eng/investor-relations-shareholder-information.php"
                      >Shareholder Information</a
                    >
                  </li>
                  <li>
                    <a href="eng/investor-relations-corporate-governance.php"
                      >Corporate Governance</a
                    >
                  </li>
                </ul>
                <ul className="sub-menu-item">
                  <li>
                    <a href="eng/investor-relations-sec-filings.php"
                      >Stock Exchange Filings</a
                    >
                  </li>
                  <li>
                    <a href="eng/investor-relations-analyst-coverage.php"
                      >Analyst Coverage</a
                    >
                  </li>
                  <li>
                    <a
                      href="eng/investor-relations-stock-exchange-announcements.php"
                      >Stock Exchange Announcements</a
                    >
                  </li>
                </ul>
                <ul className="sub-menu-item">
                  <li>
                    <a href="eng/investor-relations-sebi.php"
                      >SEBI Disclosures</a
                    >
                  </li>
                  <li>
                    <a href="eng/investor-relations-corporate-calendar.php"
                      >Corporate Calendar</a
                    >
                  </li>
                  <li>
                    <a href="eng/investor-relations-contact.php">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div> */}
                </li>
                <li className="menu-item si_page_active">
                  <a href="eng/social_impact_overview.php">Social Impact</a>
                  {/* <div className="sub-menu">
              <div className="sub-menu-inner">
                <ul className="sub-menu-item">
                  <li><a href="eng/social_impact_overview.php">Overview</a></li>
                  <li>
                    <a href="eng/social_impact_aaf.php">AAF</a>
                  </li>
                  <li>
                    <a href="eng/social_impact_nand_ghar.php">Nand Ghar</a>
                  </li>
                </ul>
                <ul className="sub-menu-item">
                  <li>
                    <a href="eng/social_impact_swasth_gaon.php"
                      >Swasth Gaon Abhiyaan</a
                    >
                  </li>
                  <li>
                    <a href="eng/social_impact_taco.php">TACO</a>
                  </li>
                  <li>
                    <a href="eng/social_impact_csr.php">CSR at Businesses</a>
                  </li>
                </ul>
                <ul className="sub-menu-item">
                  <li>
                    <a href="eng/social_impact_balco.php">Balco Medical</a>
                  </li>
                  <li>
                    <a href="eng/social_impact_sports.php">Vedanta Sports</a>
                  </li>
                </ul>
                <ul className="sub-menu-item">
                  <li>
                    <a href="eng/social_impact_vedanta_foundation.php">VF</a>
                  </li>
                  <li>
                    <a href="eng/social_impact_covid19.php">COVID 19</a>
                  </li>
                </ul>
              </div>
            </div> */}
                </li>
                <li className="menu-item media_page_active">
                  <a href="eng/media-press-releases.php">Media</a>
                  {/* <div className="sub-menu">
              <div className="sub-menu-inner">
                <ul className="sub-menu-item">
                  <li>
                    <a href="eng/media-press-releases.php">In the News</a>
                  </li>
                  <li>
                    <a href="eng/media-brand-campaigns.php">Brand Campaigns</a>
                  </li>
                  <li>
                    <a href="eng/blog_listing.php">Blogs</a>
                  </li>
                </ul>
                <ul className="sub-menu-item">
                  <li>
                    <a href="eng/media-kit.php">Media Kit</a>
                  </li>
                  <li>
                    <a href="eng/media-contact.php">Media Contact</a>
                  </li>
                </ul>
              </div>
            </div> */}
                </li>
                <li className="menu-item visible-xs">
                  <a href="eng/contact-map.php">Global Presence</a>
                </li>
              </ul>
            </div>
            <div className="right_sec hidden-xs">
              <div className="contact_icn hidden-xs">
                <a href="eng/contact-map.php">
                  <img
                    src="img/contact-icn.gif"
                    title="Global Presence"
                    alt=""
                  />
                </a>
              </div>
              <div className="search-box-main">
                <a id="search_bx" className="search_bx">
                  <img src="img/search-icon.png" alt="" id="searchIcn" />
                  <i
                    id="clasoIcn"
                    className="fa fa-times hidden"
                    aria-hidden="true"
                  ></i>
                </a>
                <div className="search-box" id="search-box">
                  <div id="autocomplete"></div>
                </div>
              </div>

              <div className="select-box">
                <select className="language">
                  <option value="100">Eng</option>
                  <option value="200">Hin</option>
                </select>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default NavbarHeader;
