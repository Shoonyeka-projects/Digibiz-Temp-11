import React, { Component } from 'react';
import infoSectionData from '../json/Comp_8.json'; // Adjust the path accordingly

export default class Component_8 extends Component {
  render() {
    const {
    logoSrc,
    formPlaceholder,
    formButton,
    contactInfo,
    socialLinks,
    usefulLinks,
    latestPosts,
    news
    } = infoSectionData;

    return (
      <section className="info_section ">
        <div className="container">
          <div className="info_top">
            <div className="info_logo">
              <a href="/">
                <img src={logoSrc} alt="" />
              </a>
            </div>
            <div className="info_form">
              <form action="">
                <input type="email" placeholder={formPlaceholder} />
                <button>{formButton}</button>
              </form>
            </div>
          </div>
          <div className="info_bottom layout_padding2">
            <div className="row info_main_row">
              {/* Contact Info */}
              <div className="col-md-6 col-lg-3">
                <h5>Address</h5>
                <div className="info_contact">
                  {contactInfo.map((info, index) => (
                    <a key={index} href={info.link}>
                      <i className={`fa ${info.icon}`} aria-hidden="true"></i>
                      <span>{info.text}</span>
                    </a>
                  ))}
                </div>
                <div className="social_box">
                  {socialLinks.map((link, index) => (
                    <a key={index} href={link.link}>
                      <i className={`fa ${link.icon}`} aria-hidden="true"></i>
                    </a>
                  ))}
                </div>
              </div>
              {/* Useful Links */}
              <div className="col-md-6 col-lg-3">
                <div className="info_links">
                  <h5>Useful link</h5>
                  <div className="info_links_menu">
                    {usefulLinks.map((link, index) => (
                      <a key={index} className={link.active ? "active" : ""} href={link.link}>
                        {link.text}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              {/* Latest Posts */}
              <div className="col-md-6 col-lg-3">
                <div className="info_post">
                  <h5>LATEST POSTS</h5>
                  {latestPosts.map((post, index) => (
                    <div key={index} className="post_box">
                      <div className="img-box">
                        <img src={post.imgSrc} alt="" />
                      </div>
                      <p>{post.text}</p>
                    </div>
                  ))}
                </div>
              </div>
              {/* News */}
              <div className="col-md-6 col-lg-3">
                <div className="info_post">
                  <h5>News</h5>
                  {news.map((post, index) => (
                    <div key={index} className="post_box">
                      <div className="img-box">
                        <img src={post.imgSrc} alt="" />
                      </div>
                      <p>{post.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
