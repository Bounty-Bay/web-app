import * as React from 'react';
import {
  Button,
  Header1,
  Header3,
  Text,
  Card,
  Body,
  Stack,
  Divider,
  Avatar,
  createIcon,
} from '@cebus/react-components';
import { AppContainer } from '../components';

import type { GetServerSideProps, InferGetServerSidePropsType } from 'next';

const ArtIcon = createIcon({
  path: (
    <path d="M490.667 170.667C455.321 170.667 426.667 199.321 426.667 234.667V1216.04C426.667 1322.09 512.628 1408.04 618.667 1408.04H810.646V1664C810.646 1781.82 906.155 1877.33 1023.98 1877.33C1141.8 1877.33 1237.32 1781.82 1237.32 1664V1408.04H1429.33C1535.37 1408.04 1621.33 1322.09 1621.33 1216.04V234.667C1621.33 199.321 1592.68 170.667 1557.33 170.667H490.667ZM554.667 938.692V298.667H1066.65V448.132C1066.65 483.478 1095.3 512.132 1130.65 512.132C1165.99 512.132 1194.65 483.478 1194.65 448.132V298.667H1279.98V533.429C1279.98 568.776 1308.63 597.429 1343.98 597.429C1379.33 597.429 1407.98 568.776 1407.98 533.429V298.667H1493.33V938.692H554.667ZM554.667 1216.04V1066.69H1493.33V1216.04C1493.33 1251.39 1464.68 1280.04 1429.33 1280.04H1173.32C1137.96 1280.04 1109.32 1308.7 1109.32 1344.04V1664C1109.32 1711.13 1071.1 1749.33 1023.98 1749.33C976.853 1749.33 938.65 1711.13 938.65 1664V1344.04C938.65 1308.7 909.995 1280.04 874.65 1280.04H618.667C583.321 1280.04 554.667 1251.39 554.667 1216.04Z" />
  ),
  displayName: 'ArtIcon',
});

const Home: InferGetServerSidePropsType<typeof getServerSideProps> = ({}) => {
  const onClick = () => null;

  return (
    <AppContainer>
      <Header1>Newest bounties</Header1>
      <Divider />
      <Card onClick={onClick} style={{ width: '300px' }}>
        <Stack verticalAlignment="center" wrap={false}>
          <Avatar name="Matt" size="small" />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Body weight="medium" size={400}>
              Matt
            </Body>
            {/* <Body color="inherit">Level 50</Body> */}
          </div>
          {/* <Stack grow />
          <Body>Art</Body>
          <div>
            <ArtIcon />
          </div> */}
          {/*
          <Body>Art</Body>
          <div>
            <ArtIcon />
          </div> */}
        </Stack>
        <Divider />
        <div>
          <Header3>I need logo artwork</Header3>
        </div>

        <Stack verticalAlignment="center" wrap={false}>
          <div>
            <Body color="inherit" nowrap>
              Asking for:{' '}
            </Body>
            <Text weight="medium" size={500}>
              $15
            </Text>
          </div>
        </Stack>
      </Card>
    </AppContainer>
  );
};

// const prisma = new PrismaClient();

// export async function getServerSideProps() {
//   const star = await prisma.star.findMany();

//   return {
//     props: star,
//   };
// }

export default Home;
