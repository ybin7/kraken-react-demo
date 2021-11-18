import styled from 'styled-components'

export const Header = styled.div`
  font-size: .5rem;
  line-height: 1rem;
  color: skyblue;
  text-align: center;
`

export const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: .20rem;
  flex-wrap: wrap;

  .func-item {
    width: 2.08rem;
    font-size: .28rem;
    font-weight: 400;
    color: #333333;
    line-height: .40rem;
    display: flex;
    padding: .30rem 0 .10rem;
    flex-direction: column;
    align-items: center;
  }

  .func-item img {
    width: .96rem;
    height: .96rem;
    margin-bottom: .12rem;
  }
`
