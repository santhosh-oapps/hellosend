import React, { useState, useEffect } from 'react';
import '../assets/FactCss/fact.css';
import { Row, Col, Typography, Statistic } from 'antd';
import FactStar from '../img/FactStar.png'
// import factsTitle from '../img/FactImage/FactsTitle.png'

const { Title } = Typography;

const formatterWithPlus = (value) => `${value}+`;
const formatterWithComma = (value) => `${value.toLocaleString()}`;
const formatterWithStar = (value) => `${value.toFixed(1)}`;

function Facts() {
  const [refreshCountClient, setRefreshCountClient] = useState(0);
  const [refreshCountMessage, setRefreshCountMessage] = useState(0);
  const [refreshCountCountries, setRefreshCountCountries] = useState(0);
  const [refreshCountRating, setRefreshCountRating] = useState(0);

  useEffect(() => {
    const animateNumbers = () => {
      let count = 0;
      const interval = setInterval(() => {
        if (count <= 20) {
          setRefreshCountClient(count * 60);
          setRefreshCountMessage(count * 10000+ "+");
          setRefreshCountCountries(count);
          setRefreshCountRating(count / 4.444444444444444);
          count++;
        } else {
          clearInterval(interval);
        }
      }, 100);
    };

    animateNumbers();
  }, []);

  return (
    <>
      <div className='factSeciton'>
        <div className='topPad factsBackgroundImage'>
          <div className="factsContainer">
          <Row align='center'>
            <Col style={{fontSize:'30px', color:'#b5b6be', fontWeight:"500"}}>Highlights</Col>
          </Row>
            <Row >
              <Col xl={6} md={12} xs={12} align='center'>
                <Statistic className='factNumberSize' value={refreshCountClient} precision={0} formatter={formatterWithPlus} style={{ fontWeight: "500" }} />
                <Title className='factTitleSize' level={4} >Customers</Title>
              </Col>
              <Col xl={6} md={12} xs={12} align='center'>
                <Statistic className='factNumberSize' value={refreshCountCountries} precision={0} formatter={formatterWithPlus} style={{ fontWeight: "500" }} />
                <Title className='factTitleSize' level={4} >Countries</Title>
              </Col>
              <Col xl={6} md={12} xs={12} align='center'>
                <Statistic className='factNumberSize' value={refreshCountMessage} precision={0} formatter={formatterWithComma} style={{ fontWeight: "500" }} />
                <Title className='factTitleSize' level={4} >Messages sent</Title>
              </Col>
              
              <Col xl={6} md={12} xs={12} align='center'>
              <StatisticWithStar
                value={refreshCountRating.toFixed(1)}
                suffix={<img src={FactStar} alt='Star' className='starIcon' />}
              />
              <Title className='factTitleSize' level={4}>
              Reviews
              </Title>
        </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  );
};
function StatisticWithStar({ value, suffix }) {
  return (
    <Statistic
      className='factNumberSize'
      value={value}
      suffix={suffix}
      style={{ fontWeight: '500' }}
    />
  );
}


export default Facts;
