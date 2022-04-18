import { Toolbar as CebusToolbar, createIcon, Text, Stack, Avatar } from '@cebus/react-components';

const LogoIcon = createIcon({
  path: (
    <svg width="2048" height="2048" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_9_27)">
        <rect width="180" height="180" fill="url(#paint0_linear_9_27)" />
        <path
          d="M35.4685 132.281C24.8516 136.289 16.8232 122.315 25.6331 115.162L121.294 37.4887C126.077 33.6054 133.199 34.9284 136.269 40.2701L155.89 74.4217C158.959 79.7634 156.515 86.583 150.751 88.7589L35.4685 132.281Z"
          fill="url(#paint1_linear_9_27)"
        />
        <path
          d="M26.5786 116.326L122.24 38.6531C126.305 35.3523 132.359 36.4769 134.968 41.0174L154.589 75.1689C157.198 79.7094 155.12 85.5061 150.221 87.3556L34.9387 130.877C25.9143 134.284 19.0902 122.407 26.5786 116.326Z"
          stroke="black"
          stroke-opacity="0.5"
          stroke-width="3"
        />
        <mask id="path-3-inside-1_9_27" fill="white">
          <path d="M25.5766 114.345C24.9262 113.704 23.876 113.688 23.2863 114.385C21.5027 116.493 20.3722 119.033 20.0648 121.674C19.6971 124.833 20.5326 127.919 22.414 130.35C24.2954 132.78 27.093 134.389 30.28 134.872C32.9344 135.274 35.7063 134.873 38.2308 133.742C39.0771 133.362 39.3439 132.326 38.8798 131.523V131.523C38.4099 130.71 37.3704 130.45 36.4977 130.796C34.7716 131.48 32.9098 131.708 31.121 131.437C28.789 131.083 26.7419 129.906 25.3653 128.128C23.9886 126.349 23.3773 124.092 23.6463 121.78C23.8505 120.025 24.5512 118.332 25.6552 116.88C26.2357 116.117 26.2596 115.018 25.5766 114.345V114.345Z" />
        </mask>
        <path
          d="M25.5766 114.345C24.9262 113.704 23.876 113.688 23.2863 114.385C21.5027 116.493 20.3722 119.033 20.0648 121.674C19.6971 124.833 20.5326 127.919 22.414 130.35C24.2954 132.78 27.093 134.389 30.28 134.872C32.9344 135.274 35.7063 134.873 38.2308 133.742C39.0771 133.362 39.3439 132.326 38.8798 131.523V131.523C38.4099 130.71 37.3704 130.45 36.4977 130.796C34.7716 131.48 32.9098 131.708 31.121 131.437C28.789 131.083 26.7419 129.906 25.3653 128.128C23.9886 126.349 23.3773 124.092 23.6463 121.78C23.8505 120.025 24.5512 118.332 25.6552 116.88C26.2357 116.117 26.2596 115.018 25.5766 114.345V114.345Z"
          fill="url(#paint2_linear_9_27)"
          fill-opacity="0.9"
          stroke="black"
          stroke-opacity="0.5"
          stroke-width="2"
          mask="url(#path-3-inside-1_9_27)"
        />
        <ellipse
          cx="129.635"
          cy="64.9672"
          rx="33.5"
          ry="19.5403"
          transform="rotate(64.1011 129.635 64.9672)"
          fill="url(#paint3_angular_9_27)"
        />
        <path
          d="M143.83 94.2031C139.429 96.3401 133.79 95.2906 128.109 91.4808C122.452 87.6868 116.934 81.2564 112.957 73.0654C108.979 64.8743 107.339 56.5615 107.856 49.7693C108.376 42.9488 111.038 37.8683 115.439 35.7314C119.841 33.5944 125.48 34.6439 131.161 38.4537C136.818 42.2477 142.336 48.6781 146.313 56.8691C150.29 65.0602 151.931 73.373 151.414 80.1652C150.894 86.9857 148.232 92.0661 143.83 94.2031Z"
          stroke="black"
          stroke-opacity="0.5"
          stroke-width="2"
        />
        <ellipse
          cx="134.653"
          cy="62.9238"
          rx="33.5"
          ry="19.5403"
          transform="rotate(64.1011 134.653 62.9238)"
          fill="url(#paint4_linear_9_27)"
        />
        <path
          d="M148.848 92.1597C144.447 94.2967 138.808 93.2472 133.127 89.4373C127.469 85.6433 121.952 79.213 117.974 71.0219C113.997 62.8309 112.356 54.518 112.874 47.7258C113.393 40.9053 116.056 35.8249 120.457 33.6879C124.858 31.5509 130.497 32.6004 136.178 36.4102C141.836 40.2042 147.354 46.6346 151.331 54.8257C155.308 63.0167 156.949 71.3295 156.431 78.1217C155.912 84.9423 153.249 90.0227 148.848 92.1597Z"
          stroke="black"
          stroke-opacity="0.5"
          stroke-width="2"
        />
        <ellipse
          cx="134.732"
          cy="62.4626"
          rx="29.9948"
          ry="16.405"
          transform="rotate(64.1011 134.732 62.4626)"
          fill="url(#paint5_linear_9_27)"
          fill-opacity="0.9"
        />
        <path
          d="M147.396 88.5454C143.803 90.2899 139.055 89.2899 134.14 85.7939C129.26 82.3224 124.433 76.521 120.874 69.1913C117.315 61.8615 115.741 54.4804 116.031 48.4984C116.324 42.4741 118.474 38.1244 122.067 36.3798C125.66 34.6353 130.408 35.6353 135.323 39.1313C140.203 42.6028 145.03 48.4042 148.589 55.7339C152.148 63.0637 153.722 70.4449 153.432 76.4268C153.14 82.4511 150.989 86.8008 147.396 88.5454Z"
          stroke="black"
          stroke-opacity="0.5"
          stroke-width="2"
        />
        <path
          d="M135.596 41.8576C139.391 43.6257 138.263 49.2975 134.081 49.4796L124.648 49.8902C122.056 50.003 120.045 47.6579 120.55 45.114L121.425 40.7156C121.931 38.1717 124.686 36.7745 127.037 37.8699L135.596 41.8576Z"
          fill="white"
          fill-opacity="0.8"
        />
      </g>
      <defs>
        <linearGradient
          id="paint1_linear_9_27"
          x1="-22.3177"
          y1="154.096"
          x2="202.212"
          y2="25.0958"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.395833" stop-color="#CF4646" />
          <stop offset="0.53125" stop-color="#CF4646" />
          <stop offset="0.9999" stop-color="#FFE600" />
          <stop offset="1" stop-color="#A94141" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_9_27"
          x1="29.8637"
          y1="104.022"
          x2="38.2865"
          y2="138.831"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#E9E9E9" />
          <stop offset="1" stop-color="#BABABA" />
        </linearGradient>
        <radialGradient
          id="paint3_angular_9_27"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(129.635 64.9672) rotate(90) scale(19.5403 33.5)"
        >
          <stop stop-color="#CF4646" />
          <stop offset="0.229167" stop-color="#FFE600" />
          <stop offset="0.9999" stop-color="#A94141" />
        </radialGradient>
        <linearGradient
          id="paint4_linear_9_27"
          x1="94.6744"
          y1="55.3113"
          x2="180.941"
          y2="64.5037"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FFA800" />
          <stop offset="1" stop-color="#BABABA" />
        </linearGradient>
        <linearGradient
          id="paint5_linear_9_27"
          x1="98.9364"
          y1="56.0716"
          x2="176.058"
          y2="64.8359"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#E9E9E9" />
          <stop offset="1" stop-color="#BABABA" />
        </linearGradient>
        <clipPath id="clip0_9_27">
          <rect width="180" height="180" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ),
  displayName: 'LogoIcon',
});

export const Toolbar = () => {
  return (
    <CebusToolbar>
      <Stack wrap={false} verticalAlignment="center">
        <LogoIcon size="large" />
        <Text size={400} weight="bold" nowrap>
          Bounty Bay
        </Text>
      </Stack>
      <Stack grow />
      <Avatar name="czearing" />
    </CebusToolbar>
  );
};
