import React from 'react';
import {
  Toolbar as CebusToolbar,
  Text,
  Stack,
  Avatar,
  Button,
  Dialog,
  CardHeader,
  Header2,
  SubHeadline,
} from '@cebus/react-components';
import type { DialogProps } from '@cebus/react-components';
import { signIn, signOut, useSession, getSession, getProviders } from 'next-auth/react';
import { makeStyles } from '@griffel/react';

const GoogleSvg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
    <g transform="matrix(1, 0, 0, 1, 27.009001, -39.238998)">
      <path
        fill="#4285F4"
        d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z"
      />
      <path
        fill="#34A853"
        d="M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z"
      />
      <path
        fill="#FBBC05"
        d="M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z"
      />
      <path
        fill="#EA4335"
        d="M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z"
      />
    </g>
  </svg>
);

const useStyles = makeStyles({
  dialogWrapper: {
    zIndex: '10000000',
  },
});

const ProviderButtons = (props: { provider: any }) => {
  const { provider } = props;

  const onSignIn = () => signIn(provider.id, { redirect: true });

  switch (provider.name) {
    case 'Google': {
      return (
        <Button size="large" onClick={onSignIn}>
          <GoogleSvg />
          Sign in with Google
        </Button>
      );
    }
    default: {
      return <Button color="danger">Unknown</Button>;
    }
  }
};

const SignInSvg = () => (
  <svg width="200" height="200" viewBox="0 0 456 397" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="228" cy="315" rx="228" ry="82" fill="#48D2FF" />
    <path
      d="M453.5 315C453.5 325.308 447.699 335.46 436.463 345.014C425.238 354.559 408.847 363.267 388.374 370.63C347.45 385.348 290.75 394.5 228 394.5C165.25 394.5 108.55 385.348 67.6257 370.63C47.1532 363.267 30.7623 354.559 19.5368 345.014C8.3012 335.46 2.5 325.308 2.5 315C2.5 304.692 8.3012 294.54 19.5368 284.986C30.7623 275.441 47.1532 266.733 67.6257 259.37C108.55 244.652 165.25 235.5 228 235.5C290.75 235.5 347.45 244.652 388.374 259.37C408.847 266.733 425.238 275.441 436.463 284.986C447.699 294.54 453.5 304.692 453.5 315Z"
      stroke="black"
      stroke-opacity="0.2"
      stroke-width="5"
    />
    <ellipse cx="236.5" cy="315" rx="166.5" ry="61" fill="#35AED6" />
    <path
      d="M402 307.5C402 330.972 322.083 318.5 223.5 318.5C124.917 318.5 45 330.972 45 307.5C45 284.028 124.917 265 223.5 265C322.083 265 402 284.028 402 307.5Z"
      fill="#C29857"
    />
    <path
      d="M399.5 307.5C399.5 309.592 398.664 311.276 396.81 312.761C394.852 314.33 391.761 315.658 387.398 316.688C378.685 318.744 365.881 319.394 349.733 319.302C335.966 319.224 319.951 318.611 302.23 317.932C299.226 317.817 296.173 317.7 293.074 317.584C271.713 316.781 248.195 316 223.5 316C198.805 316 175.287 316.781 153.926 317.584C150.827 317.7 147.774 317.817 144.77 317.932C127.049 318.611 111.034 319.224 97.2672 319.302C81.119 319.394 68.3154 318.744 59.6016 316.688C55.239 315.658 52.1478 314.33 50.1898 312.761C48.3364 311.276 47.5 309.592 47.5 307.5C47.5 303.122 51.3087 298.171 60.2538 293.136C68.9949 288.215 81.8096 283.702 97.8605 279.88C129.923 272.246 174.344 267.5 223.5 267.5C272.656 267.5 317.077 272.246 349.139 279.88C365.19 283.702 378.005 288.215 386.746 293.136C395.691 298.171 399.5 303.122 399.5 307.5Z"
      stroke="black"
      stroke-opacity="0.5"
      stroke-width="5"
    />
    <path
      d="M402 318.634C402 343.837 327.679 330.445 236 330.445C144.321 330.445 70 343.837 70 318.634C70 293.431 144.321 273 236 273C327.679 273 402 293.431 402 318.634Z"
      fill="#EECB98"
    />
    <path
      d="M399.5 318.634C399.5 321.077 398.637 322.963 396.93 324.543C395.135 326.203 392.309 327.607 388.298 328.7C380.26 330.89 368.411 331.59 353.396 331.491C340.604 331.407 325.721 330.749 309.239 330.02C306.446 329.897 303.606 329.771 300.723 329.646C280.857 328.784 258.977 327.945 236 327.945C213.023 327.945 191.143 328.784 171.277 329.646C168.394 329.771 165.554 329.897 162.761 330.02C146.279 330.749 131.396 331.407 118.604 331.491C103.589 331.59 91.74 330.89 83.7023 328.7C79.6907 327.607 76.8646 326.203 75.0703 324.543C73.3628 322.963 72.5 321.077 72.5 318.634C72.5 313.648 76.2053 308.298 84.4075 302.967C92.5022 297.706 104.381 292.873 119.283 288.777C149.052 280.593 190.318 275.5 236 275.5C281.682 275.5 322.948 280.593 352.717 288.777C367.619 292.873 379.498 297.706 387.592 302.967C395.795 308.298 399.5 313.648 399.5 318.634Z"
      stroke="black"
      stroke-opacity="0.5"
      stroke-width="5"
    />
    <path d="M143 148L158.588 301H127.412L143 148Z" fill="#6D571D" />
    <path d="M130.179 298.5L143 172.664L155.821 298.5H130.179Z" stroke="black" stroke-opacity="0.5" stroke-width="5" />
    <path d="M155.966 82.5915L157.966 236.371L126.911 233.614L155.966 82.5915Z" fill="#6D571D" />
    <path
      d="M129.889 231.369L153.785 107.159L155.43 233.636L129.889 231.369Z"
      stroke="black"
      stroke-opacity="0.5"
      stroke-width="5"
    />
    <path d="M173.857 29.3535L158.696 182.049L135.672 177.972L173.857 29.3535Z" fill="#6D571D" />
    <path
      d="M138.765 175.981L168.137 61.6629L156.475 179.117L138.765 175.981Z"
      stroke="black"
      stroke-opacity="0.5"
      stroke-width="5"
    />
    <path d="M173.876 20.3332L166.207 131.683L143.176 127.642L173.876 20.3332Z" fill="#6D571D" />
    <path
      d="M146.344 125.66L169.751 43.8409L163.904 128.741L146.344 125.66Z"
      stroke="black"
      stroke-opacity="0.5"
      stroke-width="5"
    />
    <path
      d="M169 0L194.819 34.2037H278.371L210.776 55.3427L236.595 89.5463L169 68.4073L101.405 89.5463L127.224 55.3427L59.6285 34.2037H143.181L169 0Z"
      fill="#4FDE88"
    />
    <path
      d="M169 4.1495L192.824 35.7099L193.574 36.7037H194.819H262.001L210.03 52.9566L206.642 54.016L208.781 56.8489L229.907 84.8352L169.746 66.0213L169 65.7879L168.254 66.0213L108.093 84.8352L129.219 56.8489L131.358 54.016L127.97 52.9566L75.9986 36.7037H143.181H144.426L145.176 35.7099L169 4.1495Z"
      stroke="black"
      stroke-opacity="0.5"
      stroke-width="5"
    />
    <path
      d="M166.5 23L180.308 41.3111H224.99L188.841 52.6279L202.649 70.9389L166.5 59.6221L130.351 70.9389L144.159 52.6279L108.01 41.3111H152.692L166.5 23Z"
      fill="#45FF8F"
    />
    <path
      d="M166.5 26.3219L178.711 42.5152L179.311 43.3111H180.308H211.907L188.244 50.7192L185.536 51.5668L187.244 53.832L197.301 67.1691L167.098 57.7134L166.5 57.5264L165.902 57.7134L135.699 67.1691L145.756 53.832L147.464 51.5668L144.756 50.7192L121.093 43.3111H152.692H153.689L154.289 42.5152L166.5 26.3219Z"
      stroke="black"
      stroke-opacity="0.5"
      stroke-width="4"
    />
    <path
      d="M206 240C206 223.431 219.431 210 236 210H291C307.569 210 321 223.431 321 240V265H206V240Z"
      fill="#AE6444"
    />
    <path
      d="M236 212.5H291C306.188 212.5 318.5 224.812 318.5 240V262.5H208.5V240C208.5 224.812 220.812 212.5 236 212.5Z"
      stroke="black"
      stroke-opacity="0.5"
      stroke-width="5"
    />
    <rect x="206" y="240" width="115" height="63" fill="#994F30" />
    <rect x="208.5" y="242.5" width="110" height="58" stroke="black" stroke-opacity="0.5" stroke-width="5" />
    <rect x="224" y="240" width="74" height="63" fill="#7D432A" />
    <rect x="226.5" y="242.5" width="69" height="58" stroke="black" stroke-opacity="0.5" stroke-width="5" />
    <rect x="242" y="240" width="37" height="16" fill="#6B6B6B" />
    <rect x="244.5" y="242.5" width="32" height="11" stroke="black" stroke-opacity="0.5" stroke-width="5" />
  </svg>
);

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
      <Stack appearance="relaxed" vertical horizontalAlignment="center" grow>
        <SignInSvg />
        <SubHeadline>Grow your idea with others</SubHeadline>
        <Stack vertical style={{ width: '500px' }}>
          {providers &&
            Object.values(providers).map(
              (provider: any) =>
                provider.id !== 'credentials' && <ProviderButtons provider={provider} key={provider?.name} />,
            )}
        </Stack>
      </Stack>
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
