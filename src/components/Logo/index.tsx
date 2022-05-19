import React from 'react';

interface Props {
  height: string;
  src: string;
  href: string;
}

export default function Logo({ src, height, href }: Props) {
  return (
    <a href={href}>
      <img src={src} height={height} alt="study notes logo" />
    </a>
  );
}
