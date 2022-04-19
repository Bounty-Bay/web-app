import React from 'react';
import {
  Toolbar as CebusToolbar,
  ToolbarButton,
  Text,
  Stack,
  Avatar,
  Body,
  Button,
  Dialog,
  Container,
  SubHeadline,
  Menu,
  MenuTrigger,
  MenuPopover,
  MenuList,
  MenuItem,
  Divider,
  createIcon,
} from '@cebus/react-components';
import Image from 'next/image';
import type { DialogProps } from '@cebus/react-components';
import { signIn, signOut, useSession, getSession, getProviders } from 'next-auth/react';
import { makeStyles } from '@griffel/react';

const useStyles = makeStyles({
  dialogWrapper: {
    zIndex: '10000000',
  },
});

const ColorIcon = createIcon({
  path: (
    <path d="M151.582 326.852C402.548 -7.28013 922.112 -104.508 1291.97 125.455C1657.18 352.528 1791.5 789.099 1641.92 1198.72C1500.67 1585.51 1128.52 1738.75 860.288 1544.19C759.817 1471.3 720.862 1379.94 702.037 1231.54L693.043 1147.23L689.169 1113.32C678.699 1033.61 662.624 997.91 629.065 979.205C583.361 953.724 552.928 953.135 492.917 976.389L462.955 988.813L447.703 995.469C361.194 1033.03 303.646 1046.23 230.857 1030.98L213.769 1026.96L199.814 1022.98C-38.1773 949.236 -73.4276 626.426 151.582 326.852ZM235.569 899.99L246.057 903.096L257.487 905.733C294.955 913.148 326.976 906.962 380.113 885.091L431.498 863.143C534.081 821.082 600.905 816.969 691.379 867.392C769.681 911.04 800.205 978.121 815.77 1094.35L820.309 1133.53L824.934 1178.91L828.954 1214.96C843.64 1331.11 870.332 1393.34 935.45 1440.58C1129.61 1581.41 1407.72 1466.89 1521.68 1154.82C1651.07 800.5 1536.54 428.242 1224.38 234.157C910.848 39.2155 465.05 122.64 253.928 403.724C76.8794 639.443 98.595 854.243 235.569 899.99ZM1193.4 729.801C1178.15 672.899 1211.91 614.41 1268.81 599.163C1325.72 583.916 1384.21 617.684 1399.46 674.588C1414.71 731.491 1380.93 789.978 1324.03 805.227C1267.13 820.476 1208.64 786.701 1193.4 729.801ZM1235.59 1027.5C1220.35 970.595 1254.12 912.107 1311.02 896.858C1367.93 881.618 1426.42 915.384 1441.66 972.284C1456.9 1029.19 1423.14 1087.68 1366.24 1102.93C1309.33 1118.17 1250.84 1084.4 1235.59 1027.5ZM1024.56 473.573C1009.31 416.67 1043.08 358.181 1099.98 342.934C1156.89 327.687 1215.38 361.455 1230.63 418.358C1245.87 475.261 1212.1 533.751 1155.2 548.998C1098.29 564.245 1039.8 530.476 1024.56 473.573ZM1022.13 1241.43C1006.88 1184.53 1040.65 1126.05 1097.56 1110.8C1154.46 1095.55 1212.95 1129.31 1228.19 1186.22C1243.44 1243.12 1209.67 1301.61 1152.77 1316.86C1095.87 1332.11 1037.37 1298.33 1022.13 1241.43ZM723.721 390.664C708.48 333.761 742.246 275.271 799.147 260.025C856.055 244.777 914.543 278.546 929.792 335.449C945.033 392.352 911.266 450.841 854.366 466.089C797.457 481.336 738.97 447.567 723.721 390.664Z" />
  ),
  displayName: 'ColorIcon',
});

const ProviderButton = (props: { provider: any }) => {
  const { provider } = props;

  const onSignIn = () => signIn(provider.id);

  switch (provider.name) {
    case 'Google': {
      return (
        <Button size="large" onClick={onSignIn}>
          <Image src="/image/GoogleLogo.svg" height={24} width={24} />
          Sign in with Google
        </Button>
      );
    }
    case 'GitHub': {
      return (
        <Button size="large" onClick={onSignIn}>
          <Image src="/image/GithubLogo.svg" height={24} width={24} />
          Sign in with Github
        </Button>
      );
    }
    default: {
      return <Button color="danger">Unknown</Button>;
    }
  }
};

const SignInDialog = (props: { open: boolean; handleOpenChange: DialogProps['onOpenChange'] }) => {
  const { open, handleOpenChange } = props;
  const [providers, setProviders] = React.useState(null);

  React.useEffect(() => {
    (async () => {
      const res: any = await getProviders();
      setProviders(res);
    })();
  }, []);

  const styles = useStyles();

  return (
    <Dialog open={open} onOpenChange={handleOpenChange} label="Sign in" className={styles.dialogWrapper}>
      <Container appearance="relaxed" horizontalAlignment="center" style={{ minWidth: '300px' }}>
        <Stack vertical horizontalAlignment="center">
          <Image src="/image/signinArt.svg" height={200} width={200} />
          <SubHeadline>Grow your idea with others</SubHeadline>
        </Stack>
        <Stack vertical horizontalAlignment="center" grow>
          {providers &&
            Object.values(providers).map((provider: any) => (
              <Stack grow key={provider?.name}>
                <ProviderButton provider={provider} />
              </Stack>
            ))}
        </Stack>
      </Container>
    </Dialog>
  );
};

const Login = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpenChange: DialogProps['onOpenChange'] = (ev, data) => setOpen(data.open);

  return (
    <div>
      <Button color="brand" size="small" onClick={ev => handleOpenChange(ev, { open: true })}>
        Sign in
      </Button>
      <SignInDialog open={open} handleOpenChange={handleOpenChange} />
    </div>
  );
};

const SignOut = () => {
  const onSignOut = () => signOut();

  return (
    <Button appearance="subtle" color="brand" onClick={onSignOut} size="small">
      <Text nowrap>Log Out</Text>
    </Button>
  );
};

export const Toolbar = () => {
  const { data: session } = useSession();

  const onSignOut = () => signOut();

  return (
    <CebusToolbar>
      <Stack wrap={false} verticalAlignment="center">
        <Text size={500} weight="bold" nowrap>
          Bounty Bay
        </Text>
      </Stack>
      <Stack grow />

      {session ? (
        <Menu>
          <MenuTrigger>
            <ToolbarButton>
              <Avatar
                name={session?.user?.name || ''}
                image={{
                  src: session?.user?.image || '',
                  alt: session ? 'Avatar of ' + session?.user?.name : '',
                }}
              />
            </ToolbarButton>
          </MenuTrigger>
          <MenuPopover>
            <MenuList>
              <Container style={{ minWidth: '260px' }}>
                <Stack verticalAlignment="center">
                  <Avatar
                    size="medium"
                    name={session?.user?.name || ''}
                    image={{
                      src: session?.user?.image || '',
                      alt: session ? 'Avatar of ' + session?.user?.name : '',
                    }}
                  />
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <Text size={400} weight="bold" color="base">
                      {session?.user?.name}
                    </Text>
                    <Body>{session?.user?.email}</Body>
                  </div>
                </Stack>
              </Container>
              <Divider />
              <MenuItem icon={<ColorIcon color="inherit" />}>Theme</MenuItem>
              <MenuItem onClick={onSignOut}>Sign Out</MenuItem>
            </MenuList>
          </MenuPopover>
        </Menu>
      ) : (
        <Login />
      )}
    </CebusToolbar>
  );
};

export async function getServerSideProps(context: any) {
  return {
    props: { session: await getSession(context) },
  };
}
