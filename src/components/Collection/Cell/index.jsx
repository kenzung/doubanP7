import React from 'react';
import './cell.less';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Rating from '../../Rating';

// cell的图片
const CellImage = ({ image }) => {
  const style = { backgroundImage: `url(${image})` };
  return (
    <div className="item-cell-poster" style={style} />
  );
};

// cell title描述
const CellTitle = ({ title }) => (
  <span className="item-cell-title">{title}</span>
);

// cell 底部控件
const CellRating = ({ score }) => (
  <div className="item-cell-bottom">
    <Rating score={score} showScore />
  </div>
);

CellRating.propTypes = {
  score: PropTypes.number,
};

// cell 底部控件
const CellText = ({ text, style }) => (
  <div className="item-cell-bottom" style={style}>
    {text}
  </div>
);

// 更加自定义的cell
const CellFrame = props => (
  <li className="item-cell">
    <Link to={props.url}>
      {props.children}
    </Link>
  </li>
);

// 简化的cell
const Cell = props => (
  <CellFrame url={props.url}>
    <CellImage image={props.image} />
    <CellTitle title={props.title} />
    {props.children}
  </CellFrame>
);

Cell.propTypes = {
  url: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string,
};

export {
  CellImage, CellTitle, CellRating, CellText, Cell, CellFrame,
};
