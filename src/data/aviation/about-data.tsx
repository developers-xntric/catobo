import React from 'react';
import { AboutData } from '../types';

export const aviationAboutData: AboutData = {
    trustedSolutions: {
        badge: "Our Aviation Mission",
        title: "Trusted Engineering Solutions for Critical Infrastructure",
        description: "Our mission is to deliver reliable, innovative, and compliant engineering solutions that enhance safety, productivity, and sustainability across industries. ",
        cards: [
            {
                title: "Engineering Excellence",
                desc: "We design and deliver technically advanced solutions by integrating knowledge, innovation.",
                icon: (
                    <svg width="66" height="69" viewBox="0 0 66 69" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.3491 42.6748H19.3257C18.0725 42.6748 17.0527 41.6556 17.0527 40.4018V38.1593C17.0527 38.0268 16.959 37.9122 16.8203 37.874C15.4253 37.4939 14.0799 36.9349 12.822 36.213C12.7079 36.1476 12.5734 36.1606 12.488 36.246L10.8862 37.8478C10.4569 38.2771 9.88636 38.5131 9.27913 38.5131C8.67242 38.5131 8.10131 38.2771 7.67206 37.8478L4.82697 35.0027C4.39772 34.5735 4.16111 34.0024 4.16111 33.3956C4.16111 32.7884 4.39772 32.2173 4.82697 31.7886L6.42828 30.1867C6.51413 30.1014 6.52722 29.9669 6.46126 29.8528C5.73991 28.5949 5.18084 27.2495 4.80079 25.8545C4.76258 25.7157 4.64794 25.622 4.5155 25.622H2.27293C1.01973 25.622 0 24.6023 0 23.3491V19.3257C0 18.0725 1.01973 17.0527 2.27293 17.0527H4.5155C4.64794 17.0527 4.76258 16.9596 4.80079 16.8203C5.18084 15.4258 5.73991 14.0804 6.46178 12.822C6.52722 12.7079 6.51413 12.5734 6.4288 12.488L4.82697 10.8862C4.39772 10.4575 4.16111 9.88636 4.16111 9.27913C4.16111 8.67242 4.39772 8.10131 4.82697 7.67206L7.67206 4.82697C8.10131 4.39772 8.6719 4.16163 9.27913 4.16163C9.88636 4.16163 10.4575 4.39772 10.8867 4.82749L12.488 6.4288C12.5734 6.51413 12.7074 6.52722 12.822 6.46178C14.0799 5.73991 15.4247 5.18136 16.8198 4.80079C16.9596 4.76258 17.0527 4.64794 17.0527 4.5155V2.27293C17.0527 1.01973 18.0725 0 19.3257 0H23.3491C24.6023 0 25.622 1.01973 25.622 2.27293V4.5155C25.622 4.64794 25.7152 4.76258 25.8545 4.80027C27.249 5.18084 28.5943 5.73991 29.8522 6.46178C29.9669 6.52722 30.1009 6.51413 30.1867 6.4288L31.7881 4.82697C32.6764 3.93915 34.1144 3.93863 35.0027 4.82749L35.3037 5.12849C36.2434 6.06761 34.8232 7.49041 33.8825 6.54973C33.6972 6.38954 33.4595 5.99851 33.2098 6.24873L31.608 7.85004C30.8835 8.57453 29.7502 8.72058 28.8519 8.20496C27.7421 7.56841 26.5554 7.0753 25.3257 6.73975C24.3165 6.46492 23.6114 5.54989 23.6114 4.51498V2.27293C23.6114 2.12793 23.4936 2.01015 23.3486 2.01015H19.3251C19.1807 2.01015 19.0629 2.12793 19.0629 2.27293V4.5155C19.0629 5.55041 18.3578 6.46492 17.3485 6.74027C16.1183 7.07582 14.9316 7.56841 13.8218 8.20496C12.9241 8.72058 11.7908 8.57453 11.0663 7.85004L9.46496 6.24873C9.4011 6.18486 9.32886 6.17178 9.27913 6.17178C9.2294 6.17178 9.15716 6.18486 9.09382 6.24873L6.2482 9.09382C6.18486 9.15716 6.17125 9.22992 6.17125 9.27913C6.17125 9.32886 6.18486 9.40162 6.2482 9.46496L7.85004 11.0668C8.57453 11.7913 8.72058 12.9241 8.20496 13.8224C7.56841 14.9327 7.0753 16.1189 6.73975 17.349C6.46492 18.3583 5.54989 19.0629 4.5155 19.0629H2.27293C2.12793 19.0629 2.01015 19.1812 2.01015 19.3257V23.3491C2.01015 23.4941 2.12793 23.6119 2.27293 23.6119H4.5155C5.54989 23.6119 6.46492 24.3165 6.74027 25.3257C7.0753 26.5564 7.56841 27.7426 8.20496 28.8524C8.72058 29.7507 8.57453 30.8835 7.85004 31.608L6.24873 33.2098C6.18486 33.2732 6.17178 33.3459 6.17178 33.3956C6.17178 33.4449 6.18539 33.5176 6.24873 33.5815L9.09382 36.426C9.19642 36.5286 9.36288 36.5292 9.46549 36.426L11.0668 34.8247C11.7913 34.1002 12.9246 33.9542 13.8229 34.4698C14.9327 35.1064 16.1189 35.5995 17.349 35.935C18.3583 36.2099 19.0634 37.1249 19.0634 38.1598V40.4018C19.0634 40.5468 19.1812 40.6646 19.3257 40.6646H23.3491C23.4941 40.6646 23.6119 40.5468 23.6119 40.4018V38.1598C23.6119 37.1249 24.317 36.2099 25.3263 35.935C26.6104 35.5853 27.137 37.5248 25.855 37.874C25.7157 37.9122 25.622 38.0268 25.622 38.1598V40.4018C25.622 41.655 24.6023 42.6748 23.3491 42.6748Z" fill="url(#paint0_linear_3112_4516)" />
                        <path d="M11.8633 21.3374C11.8633 14.6913 18.546 10.1355 24.7041 12.4817C25.9453 12.9555 25.2318 14.8342 23.988 14.3605C19.1281 12.5079 13.8729 16.1157 13.8729 21.3374C13.8729 25.5848 17.4503 29.0408 21.7816 28.7869C23.106 28.7068 23.23 30.7154 21.8999 30.7939C16.4385 31.1154 11.8633 26.76 11.8633 21.3374Z" fill="url(#paint1_linear_3112_4516)" />
                        <path d="M55.6202 44.632L45.4365 42.6517V40.1354C48.2962 38.1844 49.8447 35.4215 50.1818 32.3183C51.6664 32.2005 52.8379 30.9552 52.8379 29.4413V27.3757C55.2579 26.3235 54.9313 22.7916 52.371 22.1959V21.3986C52.371 14.2307 46.5599 8.41957 39.3924 8.41957H38.3041C31.1362 8.41957 25.3256 14.2307 25.3256 21.3981V22.1959C22.7663 22.7911 22.4376 26.3235 24.8587 27.3757V29.4413C24.8587 30.9552 26.0302 32.2005 27.5148 32.3183C27.809 35.0257 29.0779 37.5039 31.0796 39.2272C31.4628 39.5575 31.8565 39.86 32.2601 40.1354V42.6517L22.0764 44.632C16.7034 45.6769 12.5156 48.7057 12.5156 54.2944V64.5173C12.5156 66.7792 14.3494 68.613 16.6113 68.613H61.0853C63.3472 68.613 65.1809 66.7792 65.1809 64.5173V54.2944C65.1809 48.724 61.0188 45.6816 55.6202 44.632ZM47.2545 45.0529C46.5248 46.114 45.4093 47.7336 44.2042 49.4779C43.7132 50.1893 42.8322 50.2798 42.4877 50.0736L40.9 49.1214C42.4485 48.2069 44.5911 46.6364 45.2412 44.6614L47.2545 45.0529ZM38.848 47.9493C37.3216 47.1808 34.2786 45.2822 34.2702 43.4877C34.2702 43.4851 34.2702 43.4825 34.2702 43.4799V41.2452C37.1954 42.5067 40.4975 42.5083 43.4263 41.2452V43.4799C43.4263 45.2775 40.376 47.1803 38.848 47.9493ZM27.3357 21.3981C27.3357 17.2752 29.6223 13.6763 32.994 11.8033V13.0633C32.994 14.3919 35.0041 14.394 35.0041 13.0633V10.937C35.9061 10.6517 36.8578 10.4805 37.8429 10.4397V15.4095C37.8429 16.7381 39.8531 16.7402 39.8531 15.4095V10.4397C40.8383 10.4805 41.7905 10.6517 42.6924 10.937V13.0633C42.6924 14.3919 44.7026 14.394 44.7026 13.0633V11.8033C48.0743 13.6763 50.3608 17.2752 50.3608 21.3981V22.1247H27.3357V21.3981ZM25.9464 24.1348H51.7501C52.7133 24.1348 52.7123 25.5906 51.7501 25.5906H25.9464C24.9827 25.5906 24.9838 24.1348 25.9464 24.1348ZM29.4611 31.3007C29.4495 30.7542 29.003 30.3171 28.456 30.3171C28.2885 30.2757 26.8683 30.5783 26.8683 29.4413V27.6013H50.8278V29.4413C50.8278 30.5762 49.3699 30.2851 49.2401 30.3171C48.6935 30.3171 48.247 30.7542 48.235 31.3007C48.1811 33.8134 47.1132 36.147 45.3056 37.7038C41.467 41.0091 36.2296 41.0096 32.3909 37.7038C30.5829 36.147 29.515 33.8134 29.4611 31.3007ZM32.4548 44.6614C33.1055 46.6364 35.2476 48.2069 36.7965 49.1214C35.2052 49.9736 35.3177 50.2285 34.5948 50.1432C34.1451 50.0893 33.7415 49.8391 33.484 49.4663C32.2821 47.7263 31.1702 46.1114 30.4415 45.0529L32.4548 44.6614ZM20.8583 66.6028H16.6108C15.4591 66.6028 14.5252 65.669 14.5252 64.5173V54.2944C14.5252 51.2823 15.8936 49.1999 18.8952 47.7614C19.0167 48.2964 20.8583 53.295 20.8583 60.2798V66.6028ZM37.8429 66.6028H22.8684V60.2798C22.8684 52.7119 20.9577 47.8389 20.7698 47.0139C21.9434 46.6239 21.0718 46.9243 28.29 45.4712C30.3646 48.4859 34.2362 54.1106 36.5186 57.3546C37.3854 58.5863 37.8429 60.0332 37.8429 61.5393V66.6028ZM38.848 57.3357C38.6481 56.9437 38.4193 56.5636 38.1628 56.1982C37.3912 55.1021 36.3898 53.6636 35.3449 52.1554C35.6553 52.0869 35.9584 51.9675 36.2427 51.7974L38.848 50.2348L41.4539 51.7974C41.7376 51.9675 42.0412 52.0869 42.3516 52.1554C41.3068 53.6625 40.3054 55.101 39.5338 56.1982C39.2767 56.5636 39.048 56.9437 38.848 57.3357ZM63.1708 64.5173C63.1708 65.669 62.2374 66.6028 61.0853 66.6028H56.8378V62.8108C56.8378 61.4822 54.8276 61.4801 54.8276 62.8108V66.6028H39.8531V61.5393C39.8531 60.0332 40.3111 58.5863 41.1775 57.3551C42.4757 55.5099 47.8209 47.7965 49.4065 45.4712C56.6211 46.9238 55.751 46.6233 56.9262 47.0139C56.7802 47.6321 55.0888 52.2287 54.8554 58.7491C54.8072 60.0809 56.8163 60.1463 56.864 58.8214C57.0901 52.5114 58.638 48.4513 58.8008 47.7614C61.8024 49.1999 63.1708 51.2823 63.1708 54.2938V64.5173Z" fill="url(#paint2_linear_3112_4516)" />
                        <defs>
                            <linearGradient id="paint0_linear_3112_4516" x1="-9.10979" y1="-1.02581e-06" x2="50.6598" y2="2.94891" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#168DCA" />
                                <stop offset="1" stopColor="#0F2453" />
                            </linearGradient>
                            <linearGradient id="paint1_linear_3112_4516" x1="8.41298" y1="11.8575" x2="31.0655" y2="12.8106" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#168DCA" />
                                <stop offset="1" stopColor="#0F2453" />
                            </linearGradient>
                            <linearGradient id="paint2_linear_3112_4516" x1="-0.956474" y1="8.41957" x2="87.413" y2="12.9908" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#168DCA" />
                                <stop offset="1" stopColor="#0F2453" />
                            </linearGradient>
                        </defs>
                    </svg>

                ),
            },
            {
                title: "Customer-Centric Growth",
                desc: "We build long-term partnerships by understanding client needs, providing dependable support",
                icon: (
                    <svg width="64" height="69" viewBox="0 0 64 69" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M59.7802 33.111C59.1362 33.2197 58.7015 33.8301 58.8102 34.4753C59.0668 35.9922 59.1963 37.5184 59.1963 39.0145C59.1963 47.3595 55.4769 54.8919 49.484 59.9073C48.4374 53.1117 43.6126 47.6612 37.2057 45.7107C39.7529 44.0116 41.4372 41.1164 41.4372 37.8305C41.4372 32.6069 37.1882 28.359 31.9657 28.359C26.7432 28.359 22.4942 32.6069 22.4942 37.8305C22.4942 41.1164 24.1785 44.0116 26.7257 45.7107C20.3188 47.6612 15.494 53.1117 14.4474 59.9073C8.45454 54.8919 4.73507 47.3595 4.73507 39.0145C4.73507 37.5184 4.86456 35.9922 5.12124 34.4753C5.22992 33.8301 4.79519 33.2197 4.15119 33.111C3.49216 33 2.89557 33.437 2.78573 34.0822C2.50824 35.7263 2.36719 37.3866 2.36719 39.0145C2.36719 53.5548 12.7521 65.8266 27.06 68.1945C27.1247 68.206 27.1906 68.2107 27.2542 68.2107C27.8231 68.2107 28.3249 67.799 28.4208 67.221C28.5283 66.5758 28.0913 65.9653 27.4461 65.859C23.4566 65.1986 19.8068 63.6902 16.646 61.5506C17.2172 53.5159 23.8205 47.3021 31.9657 47.3021C40.1109 47.3021 46.7142 53.5159 47.2854 61.5506C44.1247 63.6902 40.4748 65.1986 36.4853 65.859C35.8401 65.9653 35.4031 66.5758 35.5106 67.221C35.6066 67.799 36.1083 68.2107 36.6772 68.2107C36.7408 68.2107 36.8067 68.206 36.8714 68.1945C51.1793 65.8266 61.5642 53.5548 61.5642 39.0145C61.5642 37.3866 61.4232 35.7263 61.1457 34.0822C61.0358 33.437 60.4323 32.9977 59.7802 33.111ZM24.8621 37.8305C24.8621 33.9134 28.0485 30.7269 31.9657 30.7269C35.8829 30.7269 39.0693 33.9134 39.0693 37.8305C39.0693 41.7477 35.8829 44.9342 31.9657 44.9342C28.0485 44.9342 24.8621 41.7477 24.8621 37.8305Z" fill="url(#paint0_linear_3112_4522)" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M44.9341 9.36516C44.7942 8.93505 44.4243 8.62288 43.978 8.55813L36.413 7.45975L33.03 0.603532C32.6323 -0.201177 31.305 -0.201177 30.9072 0.603532L27.5242 7.45975L19.9592 8.55813C19.513 8.62288 19.143 8.93505 19.0031 9.36516C18.8643 9.79295 18.9799 10.2647 19.3025 10.5792L24.7771 15.9138L23.4845 23.4476C23.4082 23.8939 23.5908 24.3425 23.955 24.6061C24.3216 24.872 24.8037 24.9113 25.2026 24.6963L31.9686 21.1375L38.7346 24.6963C38.9081 24.7888 39.0977 24.8327 39.2861 24.8327C39.5313 24.8327 39.7752 24.7564 39.9822 24.6061C40.3464 24.3425 40.5291 23.8939 40.4527 23.4476L39.1601 15.9138L44.6347 10.5792C44.9573 10.2647 45.0729 9.79295 44.9341 9.36516ZM37.0616 14.6513C36.783 14.9241 36.6558 15.3149 36.7217 15.7011L37.7137 21.4844L32.5201 18.7534C32.3467 18.6633 32.1582 18.617 31.9686 18.617C31.779 18.617 31.5905 18.6633 31.4171 18.7534L26.2235 21.4844L27.2155 15.7011C27.2814 15.3149 27.1542 14.9241 26.8756 14.6513L22.674 10.5583L28.4804 9.71433C28.8665 9.65652 29.1995 9.41603 29.3718 9.06686L31.9686 3.80387L34.5654 9.06686C34.7377 9.41603 35.0707 9.65652 35.4568 9.71433L41.2632 10.5583L37.0616 14.6513Z" fill="url(#paint1_linear_3112_4522)" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M3.63502 28.4145C3.55871 28.8608 3.74139 29.3094 4.10559 29.5731C4.47326 29.839 4.95654 29.876 5.35312 29.6632L10.6554 26.8745L15.9577 29.6632C16.1311 29.7557 16.3208 29.7997 16.5092 29.7997C16.7543 29.7997 16.9983 29.7234 17.2052 29.5731C17.5694 29.3094 17.7521 28.8608 17.6758 28.4145L16.663 22.511L20.9536 18.3302C21.2762 18.0158 21.3918 17.544 21.2531 17.1162C21.1132 16.6861 20.7432 16.374 20.2969 16.3092L14.3679 15.449L11.7168 10.075C11.3191 9.27032 9.99176 9.27032 9.59403 10.075L6.94288 15.449L1.01393 16.3092C0.567639 16.374 0.197658 16.6861 0.0577588 17.1162C-0.0809844 17.544 0.0346351 18.0158 0.357213 18.3302L4.64784 22.511L3.63502 28.4145ZM3.72867 18.3094L7.89905 17.7036C8.28522 17.6458 8.61821 17.4053 8.79048 17.0561L10.6554 13.2754L12.5204 17.0561C12.6926 17.4053 13.0256 17.6458 13.4118 17.7036L17.5822 18.3094L14.5645 21.2485C14.2859 21.5213 14.1587 21.9121 14.2246 22.2983L14.9368 26.4513L11.2069 24.4904C11.0335 24.4002 10.845 24.354 10.6554 24.354C10.4658 24.354 10.2773 24.4002 10.1039 24.4904L6.37404 26.4513L7.08625 22.2983C7.15215 21.9121 7.02497 21.5213 6.74633 21.2485L3.72867 18.3094Z" fill="url(#paint2_linear_3112_4522)" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M62.918 16.3092L56.989 15.449L54.3379 10.075C53.9402 9.27032 52.6129 9.27032 52.2151 10.075L49.564 15.449L43.635 16.3092C43.1887 16.374 42.8188 16.6861 42.6789 17.1162C42.5401 17.544 42.6557 18.0158 42.9783 18.3302L47.2689 22.511L46.2561 28.4145C46.1798 28.8608 46.3625 29.3094 46.7267 29.5731C47.0932 29.839 47.5753 29.876 47.9742 29.6632L53.2765 26.8745L58.5788 29.6632C58.7522 29.7557 58.9418 29.7997 59.1303 29.7997C59.3754 29.7997 59.6194 29.7234 59.8263 29.5731C60.1905 29.3094 60.3732 28.8608 60.2969 28.4145L59.2841 22.511L63.5747 18.3302C63.8973 18.0158 64.0129 17.544 63.8742 17.1162C63.7343 16.6861 63.3643 16.374 62.918 16.3092ZM57.1856 21.2485C56.907 21.5213 56.7798 21.9121 56.8457 22.2983L57.5579 26.4513L53.828 24.4904C53.6546 24.4002 53.4661 24.354 53.2765 24.354C53.0869 24.354 52.8984 24.4002 52.725 24.4904L48.9951 26.4513L49.7073 22.2983C49.7732 21.9121 49.6461 21.5213 49.3674 21.2485L46.3498 18.3094L50.5201 17.7036C50.9063 17.6458 51.2393 17.4053 51.4116 17.0561L53.2765 13.2754L55.1414 17.0561C55.3137 17.4053 55.6467 17.6458 56.0329 17.7036L60.2033 18.3094L57.1856 21.2485Z" fill="url(#paint3_linear_3112_4522)" />
                        <path d="M31.9691 68.613C32.623 68.613 33.153 68.0829 33.153 67.429C33.153 66.7752 32.623 66.2451 31.9691 66.2451C31.3152 66.2451 30.7852 66.7752 30.7852 67.429C30.7852 68.0829 31.3152 68.613 31.9691 68.613Z" fill="url(#paint4_linear_3112_4522)" />
                        <defs>
                            <linearGradient id="paint0_linear_3112_4522" x1="-12.7758" y1="28.359" x2="86.0571" y2="37.0388" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#168DCA" />
                                <stop offset="1" stopColor="#0F2453" />
                            </linearGradient>
                            <linearGradient id="paint1_linear_3112_4522" x1="12.2824" y1="-5.96975e-07" x2="55.9363" y2="2.70688" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#168DCA" />
                                <stop offset="1" stopColor="#0F2453" />
                            </linearGradient>
                            <linearGradient id="paint2_linear_3112_4522" x1="-5.45144" y1="9.4715" x2="30.2655" y2="11.6851" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#168DCA" />
                                <stop offset="1" stopColor="#0F2453" />
                            </linearGradient>
                            <linearGradient id="paint3_linear_3112_4522" x1="37.1697" y1="9.4715" x2="72.8866" y2="11.6851" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#168DCA" />
                                <stop offset="1" stopColor="#0F2453" />
                            </linearGradient>
                            <linearGradient id="paint4_linear_3112_4522" x1="30.1794" y1="66.2451" x2="34.1494" y2="66.4798" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#168DCA" />
                                <stop offset="1" stopColor="#0F2453" />
                            </linearGradient>
                        </defs>
                    </svg>

                ),
            },
        ]
    },
    engineeringExcellence: {
        badge: "About Us",
        title: "Engineering Excellence That Powers Progress",
        image: "/engr-solutions/about/about.png",
        paragraphs: [
            <p key="1">
                Catobo's Aviation Division was established with a clear vision: to redefine safety and efficiency in aviation infrastructure. Our journey began with a focus on specialized lighting systems and has since expanded to encompass a full suite of technical solutions for the modern airfield.
            </p>,
            <p key="2">
                Our strength lies in a unique management approach, deep technical knowledge, and extensive global experience across diverse business activities. These elements form the foundation of our operational success what we call our Nucleus for Success. Guided by a forward-thinking philosophy, Catobo continuously develops, integrates, and applies knowledge, information, and technology to meet evolving industry demands and improve modern operational environments.
            </p>,
            <p key="3">
                We deliver end-to-end solutions across key domains, including cable containment systems, aircraft warning lights, airfield lighting, helideck and helipad lighting systems, lightning protection systems, and industrial explosion-proof products
            </p>,
            <p key="4">
                Backed by a strong regional presence and a global engineering network, our teams provide responsive local support while maintaining international standards of quality and compliance. With a diversified portfolio and a strong regional footprint, Catobo continues to build trusted partnerships across industries worldwide.
            </p>
        ]
    },
    ourApproach: {
        badge: "How We Work",
        title: "Our approach is built on partnership, precision, and performance",
        description: "We don’t just deliver solutions we collaborate closely with our clients to understand their operational challenges and deliver outcomes that create long-term value.",
        steps: [
            {
                title: "Integrated Engineering Expertise",
                desc: "From concept and design to supply, installation, commissioning, and certification, our multidisciplinary teams manage every stage with technical rigor and compliance at the core.",
                icon: "/engr-solutions/about/1.png"
            },
            {
                title: "Quality Without Compromise",
                desc: "We follow strict quality control processes and international standards to ensure reliability, safety, and durability across all systems we deliver.",
                icon: "/engr-solutions/about/2.png"
            },
            {
                title: "Long-Term Support & Reliability",
                desc: "Our commitment doesn’t end at project completion. We provide ongoing technical support, maintenance guidance, and upgrades to ensure systems perform efficiently over their lifecycle.",
                icon: "/engr-solutions/about/3.png"
            },
            {
                title: "Continuous Improvement",
                desc: "Driven by innovation and knowledge-sharing, we continuously refine our processes, adopt advanced technologies, and strengthen capabilities to meet evolving industry demands.",
                icon: "/engr-solutions/about/4.png"
            }
        ]
    },
    testimonials: {
        badge: "Testimonials",
        title: "Voices of Partnerships",
        buttonHref: "/aviation/testimonials",
        description: "What We've Learned Together.",
        items: [
            {
                id: 1,
                company: "Leads Investments Group L.L.C",
                quote: "We had the pleasure of working with Catobo for more than 7 years. Their team has successfully completed multiple projects with our requirements. Catobo has always been responsive to our needs, very knowledgeable in many engineering topics",
                author: "ATIQ HASSAN MUBARAK ",
                designation: "Intl. Security Safety Aviation Advisor",
                image: "/profile/user-1.png",
            },
            {
                id: 2,
                company: "Dubai Civil Aviation Authority, DCAA",
                quote: "Representing the Dubai Civil Aviation Authority, DCAA, I have had numerous dealings with  CATOBO on many occasions. Predominately in the construction and or rehabilitation of Helipads throughout the entire UAE, CATOBO have set the benchmark",
                author: "MICHEAL RUDOLPH ",
                designation: "UAE / UTM SME ",
                image: "/profile/user-2.png",
            },
            {
                id: 3,
                company: "SEED Engineering,  UAE ",
                quote: "We have the pleasure of working with Catobo for more than 15 years Every once in a while, you run across another professional whose standards match your own. Catobo for us has been that kind of great experience. We were able to take our idea from concept",
                author: "SANU MATHEW ",
                designation: "CEO",
                image: "/profile/user-3.png",
            },
        ]
    }
};
