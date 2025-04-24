import React, { ReactElement } from "react";
import clsx from "clsx";
import styles from "./Footer.module.scss";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faMessage, faPhone } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Footer = (): ReactElement => {
  return (
    <footer className={clsx(styles.wrapper)}>
      <Container fluid>
        <Row className="py-5">
          <Col md={6}>
            <Link to="/" className={clsx(styles.brandName)}>
              zus
            </Link>
            <p>
              Le Lorem Ipsum est simplement du faux texte employé dans la
              composition et la mise en page avant impression. Le Lorem Ipsum
              est simplement du faux texte employé dans la composition et la
              mise en page avant impression.
            </p>
            <p>
              Le Lorem Ipsum est simplement du faux texte employé dans la
              composition et la mise en page avant impression. Le Lorem Ipsum
              est simplement du faux texte employé dans la composition et la
              mise en page avant impression.
            </p>
          </Col>
          <Col md={6} className={clsx(styles.info)}>
            <ul>
              <li>
                <FontAwesomeIcon className={clsx(styles.icon)} icon={faLocationDot} />
                41 Trần Duy Hưng, Trung Hoà, Cầu Giấy, Hà Nội
              </li>
              <li>
                <FontAwesomeIcon className={clsx(styles.icon)} icon={faPhone} />
                0123456789
              </li>
              <li>
                <FontAwesomeIcon className={clsx(styles.icon)} icon={faMessage} />
                zuswatch@gmail.com
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
