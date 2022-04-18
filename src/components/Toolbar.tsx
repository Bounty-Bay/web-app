import { Toolbar as CebusToolbar, Text, Stack, Avatar, Button } from '@cebus/react-components';
import { signIn, signOut, useSession, getSession } from 'next-auth/react';

const LoginButton = () => {
  const onSignIn = () => signIn();

  return (
    <div>
      <Button color="brand" onClick={onSignIn} size="small">
        Sign in
      </Button>
    </div>
  );
};

const SignOutButton = () => {
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
          <SignOutButton />
          <Avatar
            name={session?.user?.name || ''}
            image={{
              src: session?.user?.image || '',
              alt: 'Avatar of ' + session?.user?.name,
            }}
          />
        </Stack>
      ) : (
        <LoginButton />
      )}
    </CebusToolbar>
  );
};

export async function getServerSideProps(context: any) {
  return {
    props: {
      session: await getSession(context),
    },
  };
}
