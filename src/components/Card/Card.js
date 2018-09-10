import styled from 'styled-components'
import CardComponent from './Card.jsx'

export const Card = styled(CardComponent)`
  width: 420px;
  height: 280px;
  perspective: 1000px;
  .card-content{
    transition: 0.6s;
    transform-style: preserve-3d;
    position: relative;
    border: 1px solid #eee;
  }
  .card-content.flip {
    transform: rotateY(180deg);
  }

  .front, .back, .card-content {
    width: 100%;
    height: 100%;
  }


  .front, .back {
    padding: 20px;
    box-sizing: border-box;
    backface-visibility: hidden;
    position: absolute;
    top: 0;
    left: 0;
  }
  .front {
    z-index: 2;
    /* for firefox 31 */
    transform: rotateY(0deg);
  }
  .back {
    transform: rotateY(180deg);
  }
`
