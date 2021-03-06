import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { setTool } from '../store/actions/toolbar';

const Bar = styled.div`
  background: #fff;
  grid-area: toolbar;
  border-right: 1px solid #d9d9d9;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Button = styled.button`
  background: transparent;
  border: 0;
  cursor: pointer;
  align-self: stretch;
  height: calc(1.4rem * 2.5);
  position: relative;
  &:after {
    content: '';
    background: var(--orange);
    display: ${ props => props.active ? 'block' : 'none' };
    position: absolute;
    right: -1px;
    top: 0;
    bottom: 0;
    width: 2px;
  }

  &:hover {
    &:after {
      display: block;
    }
  }

  &:nth-child(1) {
    background: url('../img/tools.png') no-repeat left 0;
  }
  &:nth-child(2) {
    background: url('../img/tools.png') no-repeat left -48px;
  }
  &:nth-child(3) {
    background: url('../img/tools.png') no-repeat left -96px;
  }
  &:nth-child(4) {
    background: url('../img/tools.png') no-repeat left -144px;
  }
`;

const Fill = styled.div`
  background: linear-gradient(to right bottom, #fff 40%, #ff0000 40%, #ff0000 60%, #fff 60%);
  width: 2.45rem;
  height: 2.45rem;
  margin-top: 1.4rem;
  border: 1px solid #d9d9d9;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.2) inset;
`;

const Stroke = styled.div`
  background: linear-gradient(to right bottom, #fff 40%, #ff0000 40%, #ff0000 60%, #fff 60%);
  width: 2.45rem;
  height: 2.45rem;
  margin-top: 0.7rem;
  border: 1px solid #d9d9d9;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.2) inset;
  position: relative;
  &:after {
    content: '';
    background: #fff;
    display: block;
    position: absolute;
    top: 0.35rem;
    left: 0.35rem;
    right: 0.35rem;
    bottom: 0.35rem;
    border: 1px solid #d9d9d9;
    box-shadow: 0 0 1px rgba(0, 0, 0, 0.2);
  }
`;

const ToolBar = ({ tool, fill, stroke, clickButton }) => (
  <Bar>
    <Button onClick={ clickButton.bind(this, 'select') } active={ tool === 'select' }></Button>
    {/* <Button onClick={ clickButton.bind(this, 'path') } active={ tool === 'path' }></Button> */}
    <Button onClick={ clickButton.bind(this, 'line') } active={ tool === 'line' }></Button>
    <Button onClick={ clickButton.bind(this, 'circle') } active={ tool === 'circle' }></Button>
    <Button onClick={ clickButton.bind(this, 'rect') } active={ tool === 'rect' }></Button>
    {/* <Button onClick={ clickButton.bind(this, 'text') } active={ tool === 'text' }></Button> */}
    {/* <Button onClick={ clickButton.bind(this, 'image') } active={ tool === 'image' }></Button> */}
    <Fill style={{ background: fill }}/>
    <Stroke style={{ background: stroke }}/>
  </Bar>
)

const mapStateToProps = state => {
  const { tool, fill, stroke } = state.toolbar;
  return {
    tool,
    fill,
    stroke
  }
};

const mapDispatchToProps = dispatch => ({
  clickButton: (tool) => {
    dispatch(setTool(tool));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ToolBar);