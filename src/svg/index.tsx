type TIcon = {
  className?: string;
};

export function LogoIcon({ className }: TIcon) {
  return (
    <svg
      width="80"
      height="30"
      viewBox="0 0 80 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M10.4085 18.504H10.9125C10.9965 17.988 11.2245 17.424 11.6085 16.812C12.3765 15.6 13.9245 14.412 15.2565 14.136V13.632C14.5965 13.488 13.9485 13.188 13.3245 12.744C12.0525 11.844 11.1165 10.5 10.9125 9.288H10.4085C10.2885 9.924 10.0125 10.536 9.58047 11.16C8.72847 12.396 7.39647 13.308 6.04047 13.632V14.136C6.72447 14.28 7.42047 14.616 8.10447 15.132C9.49647 16.176 10.2285 17.472 10.4085 18.504Z"
        fill="currentColor"
      />
      <path
        d="M18.4085 23.7214H18.9125C18.9965 23.2054 19.2245 22.6414 19.6085 22.0294C20.3765 20.8174 21.9245 19.6294 23.2565 19.3534V18.8494C22.5965 18.7054 21.9485 18.4054 21.3245 17.9614C20.0525 17.0614 19.1165 15.7174 18.9125 14.5054H18.4085C18.2885 15.1414 18.0125 15.7534 17.5805 16.3774C16.7285 17.6134 15.3965 18.5254 14.0405 18.8494V19.3534C14.7245 19.4974 15.4205 19.8334 16.1045 20.3494C17.4965 21.3934 18.2285 22.6894 18.4085 23.7214Z"
        fill="currentColor"
      />
      <path
        d="M6.98 26.8518H7.484C7.568 26.3358 7.796 25.7718 8.18 25.1598C8.948 23.9478 10.496 22.7598 11.828 22.4838V21.9798C11.168 21.8358 10.52 21.5358 9.896 21.0918C8.624 20.1918 7.688 18.8478 7.484 17.6358H6.98C6.86 18.2718 6.584 18.8838 6.152 19.5078C5.3 20.7438 3.968 21.6558 2.612 21.9798V22.4838C3.296 22.6278 3.992 22.9638 4.676 23.4798C6.068 24.5238 6.8 25.8198 6.98 26.8518Z"
        fill="currentColor"
      />
      <path
        d="M30.2422 28.7812V25.5586L32.0234 25.582C32.3359 25.582 32.6367 25.5312 32.9258 25.4297C33.2148 25.3281 33.4805 25.1875 33.7227 25.0078C33.9727 24.8281 34.1914 24.6133 34.3789 24.3633C34.5664 24.1211 34.7188 23.8555 34.8359 23.5664C34.4844 23.7148 34.125 23.8633 33.7578 24.0117C33.3984 24.1602 33.0352 24.2344 32.668 24.2344C31.8945 24.2344 31.168 24.0977 30.4883 23.8242C29.8086 23.5508 29.2109 23.1641 28.6953 22.6641C28.1875 22.1562 27.7852 21.543 27.4883 20.8242C27.1992 20.0977 27.0547 19.2852 27.0547 18.3867V11.4492H30.2422V18.3867C30.2422 18.832 30.3047 19.2227 30.4297 19.5586C30.5625 19.8867 30.7383 20.1641 30.957 20.3906C31.1758 20.6094 31.4297 20.7734 31.7188 20.8828C32.0156 20.9922 32.332 21.0469 32.668 21.0469C32.9961 21.0469 33.3047 20.9727 33.5938 20.8242C33.8906 20.668 34.1484 20.4648 34.3672 20.2148C34.5859 19.9648 34.7578 19.6836 34.8828 19.3711C35.0078 19.0508 35.0703 18.7227 35.0703 18.3867V11.4492H38.293V22.418C38.2852 23.3008 38.1133 24.1289 37.7773 24.9023C37.4414 25.6758 36.9805 26.3516 36.3945 26.9297C35.8164 27.5078 35.1406 27.9648 34.3672 28.3008C33.5938 28.6367 32.7656 28.8047 31.8828 28.8047L30.2422 28.7812ZM52.8945 24H52.1211L50.8789 22.2773C50.5742 22.5508 50.25 22.8086 49.9062 23.0508C49.5703 23.2852 49.2148 23.4922 48.8398 23.6719C48.4648 23.8438 48.0781 23.9805 47.6797 24.082C47.2891 24.1836 46.8906 24.2344 46.4844 24.2344C45.6016 24.2344 44.7695 24.0859 43.9883 23.7891C43.2148 23.4922 42.5352 23.0625 41.9492 22.5C41.3711 21.9297 40.9141 21.2344 40.5781 20.4141C40.2422 19.5938 40.0742 18.6602 40.0742 17.6133C40.0742 16.6367 40.2422 15.7422 40.5781 14.9297C40.9141 14.1094 41.3711 13.4062 41.9492 12.8203C42.5352 12.2344 43.2148 11.7812 43.9883 11.4609C44.7695 11.1328 45.6016 10.9688 46.4844 10.9688C46.8906 10.9688 47.293 11.0195 47.6914 11.1211C48.0898 11.2227 48.4766 11.3633 48.8516 11.543C49.2266 11.7227 49.582 11.9336 49.918 12.1758C50.2617 12.418 50.582 12.6797 50.8789 12.9609L52.1211 11.4727H52.8945V24ZM49.6719 17.6133C49.6719 17.1758 49.5859 16.7539 49.4141 16.3477C49.25 15.9336 49.0234 15.5703 48.7344 15.2578C48.4453 14.9375 48.1055 14.6836 47.7148 14.4961C47.332 14.3008 46.9219 14.2031 46.4844 14.2031C46.0469 14.2031 45.6328 14.2773 45.2422 14.4258C44.8594 14.5742 44.5234 14.793 44.2344 15.082C43.9531 15.3711 43.7305 15.7305 43.5664 16.1602C43.4023 16.582 43.3203 17.0664 43.3203 17.6133C43.3203 18.1602 43.4023 18.6484 43.5664 19.0781C43.7305 19.5 43.9531 19.8555 44.2344 20.1445C44.5234 20.4336 44.8594 20.6523 45.2422 20.8008C45.6328 20.9492 46.0469 21.0234 46.4844 21.0234C46.9219 21.0234 47.332 20.9297 47.7148 20.7422C48.1055 20.5469 48.4453 20.293 48.7344 19.9805C49.0234 19.6602 49.25 19.2969 49.4141 18.8906C49.5859 18.4766 49.6719 18.0508 49.6719 17.6133ZM66.3125 13.9453L63.9688 16.3008C63.8516 15.9727 63.6914 15.6797 63.4883 15.4219C63.2852 15.1562 63.0547 14.9336 62.7969 14.7539C62.5469 14.5742 62.2734 14.4375 61.9766 14.3438C61.6797 14.25 61.375 14.2031 61.0625 14.2031C60.625 14.2031 60.2109 14.293 59.8203 14.4727C59.4375 14.6523 59.1016 14.9062 58.8125 15.2344C58.5312 15.5547 58.3086 15.9375 58.1445 16.3828C57.9805 16.8281 57.8984 17.3203 57.8984 17.8594C57.8984 18.2969 57.9805 18.707 58.1445 19.0898C58.3086 19.4727 58.5312 19.8086 58.8125 20.0977C59.1016 20.3867 59.4375 20.6133 59.8203 20.7773C60.2109 20.9414 60.625 21.0234 61.0625 21.0234C61.375 21.0234 61.6758 20.9805 61.9648 20.8945C62.2539 20.8086 62.5234 20.6875 62.7734 20.5312C63.0312 20.3672 63.2578 20.1719 63.4531 19.9453C63.6562 19.7109 63.8203 19.4531 63.9453 19.1719L66.2891 21.5273C65.9922 21.9492 65.6484 22.3281 65.2578 22.6641C64.875 23 64.457 23.2852 64.0039 23.5195C63.5586 23.7539 63.0859 23.9297 62.5859 24.0469C62.0938 24.1719 61.5859 24.2344 61.0625 24.2344C60.1797 24.2344 59.3477 24.0703 58.5664 23.7422C57.793 23.4062 57.1133 22.9492 56.5273 22.3711C55.9492 21.793 55.4922 21.1172 55.1562 20.3438C54.8203 19.5703 54.6523 18.7422 54.6523 17.8594C54.6523 16.8984 54.8203 16 55.1562 15.1641C55.4922 14.3281 55.9492 13.6016 56.5273 12.9844C57.1133 12.3594 57.793 11.8672 58.5664 11.5078C59.3477 11.1484 60.1797 10.9688 61.0625 10.9688C61.5859 10.9688 62.0977 11.0352 62.5977 11.168C63.1055 11.3008 63.5859 11.4961 64.0391 11.7539C64.5 12.0039 64.9219 12.3125 65.3047 12.6797C65.6953 13.0469 66.0312 13.4688 66.3125 13.9453ZM71.1055 24H67.8828V6.45703H71.1055V17.5195L75.875 11.4727H79.5547L75.3945 16.6992L79.5547 24H75.875L73.332 19.4414L71.1055 22.3945V24Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function RightArrow({ className }: TIcon) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
      />
    </svg>
  );
}

export function DownArrow({ className }: TIcon) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
      />
    </svg>
  );
}

export function LeftArrow({ className }: TIcon) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
      />
    </svg>
  );
}

export function CopyIcon({ className }: TIcon) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"
      />
    </svg>
  );
}

export function CheckIcon({ className }: TIcon) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 12.75l6 6 9-13.5"
      />
    </svg>
  );
}
