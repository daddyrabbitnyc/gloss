import { useStyletron } from 'baseui';
import { Paragraph1 } from 'baseui/typography';
import Link from 'common/link';
import { legalName } from 'data/config';
import * as React from 'react';

const Footer = () => {
  const [, theme] = useStyletron();
  return (
    <footer>
      <Paragraph1
        overrides={{
          Block: {
            style: {
              textAlign: 'center',
              color: theme.colors.primaryB
            },
          },
        }}
      >
        Copyright © {new Date().getFullYear()}{' '}
        <Link href="#">{legalName}</Link>
      </Paragraph1>
    </footer>
  );
};

export default Footer;
