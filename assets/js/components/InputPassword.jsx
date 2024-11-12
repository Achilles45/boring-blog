import { useState } from 'react'
import InputBase from '@/components/InputBase'

export default function InputPassword(props) {
  const [showPassword, setShowPassword] = useState(false)

  function toggleShowPassword() {
    setShowPassword(!showPassword)
  }

  return (
    <InputBase
      label="Password"
      id="password"
      type={showPassword ? 'text' : 'password'}
      placeholder="Your password"
      icon={
        <svg
          className="h-5 w-5 fill-gray"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_185_119)">
            <path
              d="M12.6666 5.616V4.66667C12.6666 3.42899 12.175 2.242 11.2998 1.36684C10.4246 0.491665 9.23766 0 7.99998 0C6.7623 0 5.57532 0.491665 4.70015 1.36684C3.82498 2.242 3.33331 3.42899 3.33331 4.66667V5.616C2.73955 5.87514 2.23417 6.30168 1.87898 6.84347C1.52378 7.38527 1.33417 8.01882 1.33331 8.66667V12.6667C1.33437 13.5504 1.6859 14.3976 2.31079 15.0225C2.93568 15.6474 3.78292 15.9989 4.66665 16H11.3333C12.217 15.9989 13.0643 15.6474 13.6892 15.0225C14.3141 14.3976 14.6656 13.5504 14.6666 12.6667V8.66667C14.6658 8.01882 14.4762 7.38527 14.121 6.84347C13.7658 6.30168 13.2604 5.87514 12.6666 5.616ZM4.66665 4.66667C4.66665 3.78261 5.01784 2.93477 5.64296 2.30964C6.26808 1.68452 7.11592 1.33333 7.99998 1.33333C8.88403 1.33333 9.73188 1.68452 10.357 2.30964C10.9821 2.93477 11.3333 3.78261 11.3333 4.66667V5.33333H4.66665V4.66667ZM13.3333 12.6667C13.3333 13.1971 13.1226 13.7058 12.7475 14.0809C12.3725 14.456 11.8637 14.6667 11.3333 14.6667H4.66665C4.13621 14.6667 3.62751 14.456 3.25243 14.0809C2.87736 13.7058 2.66665 13.1971 2.66665 12.6667V8.66667C2.66665 8.13623 2.87736 7.62753 3.25243 7.25245C3.62751 6.87738 4.13621 6.66667 4.66665 6.66667H11.3333C11.8637 6.66667 12.3725 6.87738 12.7475 7.25245C13.1226 7.62753 13.3333 8.13623 13.3333 8.66667V12.6667Z"
              fill="#878787"
            />
            <path
              d="M7.99998 9.33337C7.82317 9.33337 7.6536 9.40361 7.52858 9.52864C7.40355 9.65366 7.33331 9.82323 7.33331 10V11.3334C7.33331 11.5102 7.40355 11.6798 7.52858 11.8048C7.6536 11.9298 7.82317 12 7.99998 12C8.17679 12 8.34636 11.9298 8.47138 11.8048C8.59641 11.6798 8.66665 11.5102 8.66665 11.3334V10C8.66665 9.82323 8.59641 9.65366 8.47138 9.52864C8.34636 9.40361 8.17679 9.33337 7.99998 9.33337Z"
              fill="#878787"
            />
          </g>
          <defs>
            <clipPath id="clip0_185_119">
              <rect width="16" height="16" fill="white" />
            </clipPath>
          </defs>
        </svg>
      }
      suffix={
        <span className="absolute right-2 top-[57%]">
          <button
            type="button"
            onClick={toggleShowPassword}
            aria-label="Toggle Password Visibility"
          >
            {showPassword ? (
              <svg
                className="h-5 w-5 fill-gray"
                viewBox="0 0 16 16"
                role="img"
                aria-label="Password is not visible"
                fill="none"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_198_553)">
                  <path
                    d="M15.514 6.27935C14.48 4.59535 12.128 1.77002 8.00003 1.77002C3.87203 1.77002 1.52003 4.59535 0.486034 6.27935C0.166386 6.79636 -0.00292969 7.39218 -0.00292969 8.00002C-0.00292969 8.60786 0.166386 9.20368 0.486034 9.72069C1.52003 11.4047 3.87203 14.23 8.00003 14.23C12.128 14.23 14.48 11.4047 15.514 9.72069C15.8337 9.20368 16.003 8.60786 16.003 8.00002C16.003 7.39218 15.8337 6.79636 15.514 6.27935ZM14.3774 9.02269C13.4894 10.4667 11.4794 12.8967 8.00003 12.8967C4.5207 12.8967 2.5107 10.4667 1.6227 9.02269C1.43279 8.71538 1.3322 8.36127 1.3322 8.00002C1.3322 7.63877 1.43279 7.28466 1.6227 6.97735C2.5107 5.53335 4.5207 3.10335 8.00003 3.10335C11.4794 3.10335 13.4894 5.53069 14.3774 6.97735C14.5673 7.28466 14.6679 7.63877 14.6679 8.00002C14.6679 8.36127 14.5673 8.71538 14.3774 9.02269Z"
                    fill="#878787"
                  />
                  <path
                    d="M8.00008 4.66675C7.34081 4.66675 6.69635 4.86224 6.14818 5.22852C5.60002 5.59479 5.17278 6.11538 4.92048 6.72447C4.66819 7.33356 4.60218 8.00378 4.7308 8.65038C4.85942 9.29699 5.17689 9.89093 5.64306 10.3571C6.10924 10.8233 6.70318 11.1407 7.34978 11.2694C7.99639 11.398 8.66661 11.332 9.27569 11.0797C9.88478 10.8274 10.4054 10.4001 10.7716 9.85198C11.1379 9.30382 11.3334 8.65935 11.3334 8.00008C11.3324 7.11635 10.9808 6.26912 10.3559 5.64423C9.73104 5.01934 8.88381 4.66781 8.00008 4.66675ZM8.00008 10.0001C7.60452 10.0001 7.21784 9.88278 6.88894 9.66302C6.56004 9.44326 6.3037 9.1309 6.15232 8.76545C6.00095 8.4 5.96134 7.99786 6.03851 7.6099C6.11568 7.22194 6.30616 6.86557 6.58587 6.58587C6.86557 6.30616 7.22194 6.11568 7.6099 6.03851C7.99786 5.96134 8.4 6.00095 8.76545 6.15232C9.1309 6.3037 9.44326 6.56004 9.66302 6.88894C9.88278 7.21784 10.0001 7.60452 10.0001 8.00008C10.0001 8.53051 9.78937 9.03922 9.4143 9.4143C9.03922 9.78937 8.53052 10.0001 8.00008 10.0001Z"
                    fill="#878787"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_198_553">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            ) : (
              <svg
                className="h-5 w-5 fill-gray"
                viewBox="0 0 16 16"
                role="img"
                aria-label="Password is visible"
                fill="none"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_208_684)">
                  <path
                    d="M15.514 6.27935C14.9121 5.29384 14.153 4.41352 13.2666 3.67335L15.1333 1.80669C15.2547 1.68095 15.3219 1.51255 15.3204 1.33775C15.3189 1.16296 15.2488 0.995748 15.1252 0.872142C15.0016 0.748537 14.8344 0.678424 14.6596 0.676905C14.4848 0.675386 14.3164 0.742582 14.1906 0.864021L12.1606 2.89669C10.9022 2.14924 9.46359 1.75966 7.99997 1.77002C3.87264 1.77002 1.52064 4.59535 0.485973 6.27935C0.166325 6.79636 -0.00299072 7.39218 -0.00299072 8.00002C-0.00299072 8.60786 0.166325 9.20368 0.485973 9.72069C1.08781 10.7062 1.84697 11.5865 2.73331 12.3267L0.86664 14.1934C0.802966 14.2549 0.752178 14.3284 0.717239 14.4098C0.6823 14.4911 0.663909 14.5786 0.66314 14.6671C0.66237 14.7556 0.679238 14.8434 0.712759 14.9253C0.746279 15.0073 0.795781 15.0817 0.858377 15.1443C0.920972 15.2069 0.995406 15.2564 1.07734 15.2899C1.15927 15.3234 1.24705 15.3403 1.33557 15.3395C1.42409 15.3388 1.51157 15.3204 1.59291 15.2854C1.67425 15.2505 1.74781 15.1997 1.80931 15.136L3.84397 13.1014C5.10082 13.8487 6.53775 14.2389 7.99997 14.23C12.1273 14.23 14.4793 11.4047 15.514 9.72069C15.8336 9.20368 16.0029 8.60786 16.0029 8.00002C16.0029 7.39218 15.8336 6.79636 15.514 6.27935ZM1.62197 9.02269C1.43206 8.71538 1.33147 8.36127 1.33147 8.00002C1.33147 7.63877 1.43206 7.28466 1.62197 6.97735C2.51131 5.53335 4.52131 3.10335 7.99997 3.10335C9.10682 3.09715 10.1981 3.36391 11.1773 3.88002L9.83531 5.22202C9.19526 4.79709 8.42791 4.60669 7.66346 4.68312C6.89901 4.75955 6.18455 5.09811 5.64131 5.64136C5.09807 6.1846 4.7595 6.89906 4.68307 7.66351C4.60664 8.42796 4.79704 9.19531 5.22197 9.83535L3.68197 11.3754C2.86538 10.7152 2.16853 9.91932 1.62197 9.02269ZM9.99997 8.00002C9.99997 8.53045 9.78926 9.03916 9.41419 9.41424C9.03911 9.78931 8.53041 10 7.99997 10C7.70298 9.99887 7.41011 9.9305 7.14331 9.80002L9.79997 7.14335C9.93045 7.41015 9.99882 7.70303 9.99997 8.00002ZM5.99997 8.00002C5.99997 7.46959 6.21069 6.96088 6.58576 6.58581C6.96083 6.21073 7.46954 6.00002 7.99997 6.00002C8.29696 6.00117 8.58984 6.06955 8.85664 6.20002L6.19997 8.85669C6.0695 8.58989 6.00112 8.29701 5.99997 8.00002ZM14.378 9.02269C13.4886 10.4667 11.4786 12.8967 7.99997 12.8967C6.89312 12.9029 5.80182 12.6361 4.82264 12.12L6.16464 10.778C6.80469 11.203 7.57204 11.3934 8.33648 11.3169C9.10093 11.2405 9.8154 10.9019 10.3586 10.3587C10.9019 9.81544 11.2404 9.10098 11.3169 8.33653C11.3933 7.57208 11.2029 6.80473 10.778 6.16469L12.318 4.62469C13.1346 5.28487 13.8314 6.08072 14.378 6.97735C14.5679 7.28466 14.6685 7.63877 14.6685 8.00002C14.6685 8.36127 14.5679 8.71538 14.378 9.02269Z"
                    fill="#878787"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_208_684">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            )}
          </button>
        </span>
      }
      {...props}
    />
  )
}