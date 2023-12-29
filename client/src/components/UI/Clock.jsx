import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import '../../components/base/mixin'
import { mixinFont, mixinFontPrimary } from "../base/mixin";

const ClockStyle = styled.time`
  width: 27.33vw;
  text-align: right;
  color: #ffffff;
  //font-family: 'Roboto', sans-serif;
  ${mixinFontPrimary('Roboto')}
  ${mixinFont({size: '2.2rem', weight: 600})}
  //font-size: 2.2rem;
  //line-height: normal;
  //font-weight: 600;
  //font-style: normal;
  //letter-spacing: 0;
`

export default function Clock() {
  const [clock, setClock] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setClock(new Date()), 1000);

    return () => {
      clearInterval(interval)
      console.log('cleaning...');
    }
  }, []);

  return <ClockStyle>{clock.toLocaleTimeString()}</ClockStyle>;
}
