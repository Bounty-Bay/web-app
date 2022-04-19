import React from 'react';
import {
  Toolbar as CebusToolbar,
  Text,
  Stack,
  Avatar,
  Button,
  Dialog,
  Container,
  SubHeadline,
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

const ProviderButton = (props: { provider: any }) => {
  const { provider } = props;

  const onSignIn = () => signIn(provider.id, { redirect: true });

  switch (provider.name) {
    case 'Google': {
      return (
        <Button size="large" onClick={onSignIn}>
          <Image src="/image/GoogleLogo.svg" height={24} width={24} />
          Sign in with Google
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
              <Stack grow>
                <ProviderButton provider={provider} key={provider?.name} />
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

  return (
    <CebusToolbar>
      <Stack wrap={false} verticalAlignment="center">
        <Text size={500} weight="bold" nowrap>
          Bounty Bay
        </Text>
      </Stack>
      <Stack grow />
      {session ? (
        <Stack wrap={false} verticalAlignment="center">
          <SignOut />
          <Avatar
            name={session?.user?.name || ''}
            image={{
              src: session?.user?.image || '',
              alt: 'Avatar of ' + session?.user?.name,
            }}
          />
        </Stack>
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
