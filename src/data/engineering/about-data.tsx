import React from 'react';
import { AboutData } from '../types';

export const engineeringAboutData: AboutData = {
    trustedSolutions: {
        badge: "Our Mission",
        title: "Trusted Engineering Solutions For Critical Infrastructure",
        description: "Our mission is to deliver high reliability and specialized engineering solutions that enhance safety, productivity, and sustainability across various industries.",
        cards: [
            {
                title: "Engineering Excellence",
                desc: "We design and deliver high-quality, customized solutions for the most challenging technical obstacles.",
                icon: (
                    <svg width="66" height="69" viewBox="0 0 66 69" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.3491 42.6748H19.3257C18.0725 42.6748 17.0527 41.6556 17.0527 40.4018V38.1593C17.0527 38.0268 16.959 37.9122 16.8203 37.874C15.4253 37.4939 14.0799 36.9349 12.822 36.213C12.7079 36.1476 12.5734 36.1606 12.488 36.246L10.8862 37.8478C10.4569 38.2771 9.88636 38.5131 9.27913 38.5131C8.67242 38.5131 8.10131 38.2771 7.67206 37.8478L4.82697 35.0027C4.39772 34.5735 4.16111 34.0024 4.16111 33.3956C4.16111 32.7884 4.39772 32.2173 4.82697 31.7886L6.42828 30.1867C6.51413 30.1014 6.52722 29.9669 6.46126 29.8528C5.73991 28.5949 5.18084 27.2495 4.80079 25.8545C4.76258 25.7157 4.64794 25.622 4.5155 25.622H2.27293C1.01973 25.622 0 24.6023 0 23.3491V19.3257C0 18.0725 1.01973 17.0527 2.27293 17.0527H4.5155C4.64794 17.0527 4.76258 16.9596 4.80079 16.8203C5.18084 15.4258 5.73991 14.0804 6.46178 12.822C6.52722 12.7079 6.51413 12.5734 6.4288 12.488L4.82697 10.8862C4.39772 10.4575 4.16111 9.88636 4.16111 9.27913C4.16111 8.67242 4.39772 8.10131 4.82697 7.67206L7.67206 4.82697C8.10131 4.39772 8.6719 4.16163 9.27913 4.16163C9.88636 4.16163 10.4575 4.39772 10.8867 4.82749L12.488 6.4288C12.5734 6.51413 12.7074 6.52722 12.822 6.46178C14.0799 5.73991 15.4247 5.18136 16.8198 4.80079C16.9596 4.76258 17.0527 4.64794 17.0527 4.5155V2.27293C17.0527 1.01973 18.0725 0 19.3257 0H23.3491C24.6023 0 25.622 1.01973 25.622 2.27293V4.5155C25.622 4.64794 25.7152 4.76258 25.8545 4.80027C27.249 5.18084 28.5943 5.73991 29.8522 6.46178C29.9669 6.52722 30.1009 6.51413 30.1867 6.4288L31.7881 4.82697C32.6764 3.93915 34.1144 3.93863 35.0027 4.82749L35.3037 5.12849C36.2434 6.06761 34.8232 7.49041 33.8825 6.54973C33.6972 6.38954 33.4595 5.99851 33.2098 6.24873L31.608 7.85004C30.8835 8.57453 29.7502 8.72058 28.8519 8.20496C27.7421 7.56841 26.5554 7.0753 25.3257 6.73975C24.3165 6.46492 23.6114 5.54989 23.6114 4.51498V2.27293C23.6114 2.12793 23.4936 2.01015 23.3486 2.01015H19.3251C19.1807 2.01015 19.0629 2.12793 19.0629 2.27293V4.5155C19.0629 5.55041 18.3578 6.46492 17.3485 6.74027C16.1183 7.07582 14.9316 7.56841 13.8218 8.20496C12.9241 8.72058 11.7908 8.57453 11.0663 7.85004L9.46496 6.24873C9.4011 6.18486 9.32886 6.17178 9.27913 6.17178C9.2294 6.17178 9.15716 6.18486 9.09382 6.24873L6.2482 9.09382C6.18486 9.15716 6.17125 9.22992 6.17125 9.27913C6.17125 9.32886 6.18486 9.40162 6.2482 9.46496L7.85004 11.0668C8.57453 11.7913 8.72058 12.9241 8.20496 13.8224C7.56841 14.9327 7.0753 16.1189 6.73975 17.349C6.46492 18.3583 5.54989 19.0629 4.5155 19.0629H2.27293C2.12793 19.0629 2.01015 19.1812 2.01015 19.3257V23.3491C2.01015 23.4941 2.12793 23.6119 2.27293 23.6119H4.5155C5.54989 23.6119 6.46492 24.3165 6.74027 25.3257C7.0753 26.5564 7.56841 27.7426 8.20496 28.8524C8.72058 29.7507 8.57453 30.8835 7.85004 31.608L6.24873 33.2098C6.18486 33.2732 6.17178 33.3459 6.17178 33.3956C6.17178 33.4449 6.18539 33.5176 6.24873 33.5815L9.09382 36.426C9.19642 36.5286 9.36288 36.5292 9.46549 36.426L11.0668 34.8247C11.7913 34.1002 12.9246 33.9542 13.8229 34.4698C14.9327 35.1064 16.1189 35.5995 17.349 35.935C18.3583 36.2099 19.0634 37.1249 19.0634 38.1598V40.4018C19.0634 40.5468 19.1812 40.6646 19.3257 40.6646H23.3491C23.4941 40.6646 23.6119 40.5468 23.6119 40.4018V38.1598C23.6119 37.1249 24.317 36.2099 25.3263 35.935C26.6104 35.5853 27.137 37.5248 25.855 37.874C25.7157 37.9122 25.622 38.0268 25.622 38.1598V40.4018C25.622 41.655 24.6023 42.6748 23.3491 42.6748Z" fill="url(#paint0_linear_3112_4345)" />
                        <path d="M11.8643 21.3374C11.8643 14.6913 18.5469 10.1355 24.7051 12.4817C25.9463 12.9555 25.2328 14.8342 23.989 14.3605C19.1291 12.5079 13.8739 16.1157 13.8739 21.3374C13.8739 25.5848 17.4513 29.0408 21.7825 28.7869C23.1069 28.7068 23.231 30.7154 21.9009 30.7939C16.4394 31.1154 11.8643 26.76 11.8643 21.3374Z" fill="url(#paint1_linear_3112_4345)" />
                        <path d="M55.6192 44.632L45.4355 42.6517V40.1354C48.2952 38.1844 49.8437 35.4215 50.1808 32.3183C51.6654 32.2005 52.8369 30.9552 52.8369 29.4413V27.3757C55.257 26.3235 54.9303 22.7916 52.37 22.1959V21.3986C52.37 14.2307 46.5589 8.41957 39.3915 8.41957H38.3032C31.1352 8.41957 25.3246 14.2307 25.3246 21.3981V22.1959C22.7653 22.7911 22.4366 26.3235 24.8577 27.3757V29.4413C24.8577 30.9552 26.0292 32.2005 27.5138 32.3183C27.808 35.0257 29.0769 37.5039 31.0787 39.2272C31.4618 39.5575 31.8555 39.86 32.2591 40.1354V42.6517L22.0754 44.632C16.7025 45.6769 12.5146 48.7057 12.5146 54.2944V64.5173C12.5146 66.7792 14.3484 68.613 16.6103 68.613H61.0843C63.3462 68.613 65.18 66.7792 65.18 64.5173V54.2944C65.18 48.724 61.0178 45.6816 55.6192 44.632ZM47.2535 45.0529C46.5238 46.114 45.4083 47.7336 44.2032 49.4779C43.7122 50.1893 42.8312 50.2798 42.4868 50.0736L40.8991 49.1214C42.4475 48.2069 44.5901 46.6364 45.2402 44.6614L47.2535 45.0529ZM38.847 47.9493C37.3206 47.1808 34.2776 45.2822 34.2692 43.4877C34.2692 43.4851 34.2692 43.4825 34.2692 43.4799V41.2452C37.1944 42.5067 40.4965 42.5083 43.4254 41.2452V43.4799C43.4254 45.2775 40.3751 47.1803 38.847 47.9493ZM27.3348 21.3981C27.3348 17.2752 29.6213 13.6763 32.993 11.8033V13.0633C32.993 14.3919 35.0032 14.394 35.0032 13.0633V10.937C35.9051 10.6517 36.8568 10.4805 37.842 10.4397V15.4095C37.842 16.7381 39.8521 16.7402 39.8521 15.4095V10.4397C40.8373 10.4805 41.7895 10.6517 42.6914 10.937V13.0633C42.6914 14.3919 44.7016 14.394 44.7016 13.0633V11.8033C48.0733 13.6763 50.3598 17.2752 50.3598 21.3981V22.1247H27.3348V21.3981ZM25.9455 24.1348H51.7491C52.7123 24.1348 52.7113 25.5906 51.7491 25.5906H25.9455C24.9817 25.5906 24.9828 24.1348 25.9455 24.1348ZM29.4601 31.3007C29.4486 30.7542 29.002 30.3171 28.455 30.3171C28.2875 30.2757 26.8673 30.5783 26.8673 29.4413V27.6013H50.8268V29.4413C50.8268 30.5762 49.3689 30.2851 49.2391 30.3171C48.6926 30.3171 48.246 30.7542 48.234 31.3007C48.1801 33.8134 47.1122 36.147 45.3046 37.7038C41.466 41.0091 36.2286 41.0096 32.39 37.7038C30.5819 36.147 29.514 33.8134 29.4601 31.3007ZM32.4538 44.6614C33.1045 46.6364 35.2466 48.2069 36.7955 49.1214C35.2042 49.9736 35.3167 50.2285 34.5938 50.1432C34.1441 50.0893 33.7405 49.8391 33.483 49.4663C32.2811 47.7263 31.1692 46.1114 30.4405 45.0529L32.453 44.6614ZM20.8573 66.6028H16.6098C15.4582 66.6028 14.5243 65.669 14.5243 64.5173V54.2944C14.5243 51.2823 15.8926 49.1999 18.8942 47.7614C19.0157 48.2964 20.8573 53.295 20.8573 60.2798V66.6028ZM37.842 66.6028H22.8674V60.2798C22.8674 52.7119 20.9567 47.8389 20.7688 47.0139C21.9424 46.6239 21.0709 46.9243 28.2891 45.4712C30.3636 48.4859 34.2352 54.1106 36.5176 57.3546C37.3844 58.5863 37.842 60.0332 37.842 61.5393V66.6028ZM38.847 57.3357C38.6471 56.9437 38.4183 56.5636 38.1618 56.1982C37.3902 55.1021 36.3888 53.6636 35.3439 52.1554C35.6544 52.0869 35.9575 51.9675 36.2417 51.7974L38.847 50.2348L41.4529 51.7974C41.7366 51.9675 42.0402 52.0869 42.3507 52.1554C41.3058 53.6625 40.3044 55.101 39.5328 56.1982C39.2758 56.5636 39.047 56.9437 38.847 57.3357ZM63.1698 64.5173C63.1698 65.669 62.2365 66.6028 61.0843 66.6028H56.8368V62.8108C56.8368 61.4822 54.8267 61.4801 54.8267 62.8108V66.6028H39.8521V61.5393C39.8521 60.0332 40.3102 58.5863 41.1765 57.3551C42.4747 55.5099 47.8199 47.7965 49.4055 45.4712C56.6201 46.9238 55.7501 46.6233 56.9253 47.0139C56.7792 47.6321 55.0879 52.2287 54.8544 58.7491C54.8062 60.0809 56.8153 60.1463 56.863 58.8214C57.0891 52.5114 58.637 48.4513 58.7998 47.7614C61.8014 49.1999 63.1698 51.2823 63.1698 54.2938V64.5173Z" fill="url(#paint2_linear_3112_4345)" />
                        <defs>
                            <linearGradient id="paint0_linear_3112_4345" x1="-9.10979" y1="-1.02581e-06" x2="50.6598" y2="2.94891" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#168DCA" />
                                <stop offset="1" stopColor="#0F2453" />
                            </linearGradient>
                            <linearGradient id="paint1_linear_3112_4345" x1="8.41395" y1="11.8575" x2="31.0665" y2="12.8106" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#168DCA" />
                                <stop offset="1" stopColor="#0F2453" />
                            </linearGradient>
                            <linearGradient id="paint2_linear_3112_4345" x1="-0.957451" y1="8.41957" x2="87.412" y2="12.9908" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#168DCA" />
                                <stop offset="1" stopColor="#0F2453" />
                            </linearGradient>
                        </defs>
                    </svg>
                ),
            },
            {
                title: "Customer-Centric Growth",
                desc: "We look for ways to continuously improve our clients' operations and assist them as a long-standing, trusted partner.",
                icon: (
                    <svg width="64" height="69" viewBox="0 0 64 69" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M59.7812 33.111C59.1372 33.2197 58.7025 33.8301 58.8111 34.4753C59.0678 35.9922 59.1973 37.5184 59.1973 39.0145C59.1973 47.3595 55.4778 54.8919 49.485 59.9073C48.4384 53.1117 43.6136 47.6612 37.2067 45.7107C39.7539 44.0116 41.4382 41.1164 41.4382 37.8305C41.4382 32.6069 37.1892 28.359 31.9667 28.359C26.7442 28.359 22.4952 32.6069 22.4952 37.8305C22.4952 41.1164 24.1794 44.0116 26.7267 45.7107C20.3198 47.6612 15.495 53.1117 14.4483 59.9073C8.45552 54.8919 4.73605 47.3595 4.73605 39.0145C4.73605 37.5184 4.86554 35.9922 5.12221 34.4753C5.2309 33.8301 4.79617 33.2197 4.15217 33.111C3.49314 33 2.89654 33.437 2.78671 34.0822C2.50922 35.7263 2.36816 37.3866 2.36816 39.0145C2.36816 53.5548 12.7531 65.8266 27.061 68.1945C27.1257 68.206 27.1916 68.2107 27.2552 68.2107C27.824 68.2107 28.3258 67.799 28.4218 67.221C28.5293 66.5758 28.0923 65.9653 27.4471 65.859C23.4575 65.1986 19.8077 63.6902 16.647 61.5506C17.2182 53.5159 23.8215 47.3021 31.9667 47.3021C40.1119 47.3021 46.7152 53.5159 47.2864 61.5506C44.1256 63.6902 40.4758 65.1986 36.4862 65.859C35.8411 65.9653 35.404 66.5758 35.5116 67.221C35.6075 67.799 36.1093 68.2107 36.6782 68.2107C36.7418 68.2107 36.8077 68.206 36.8724 68.1945C51.1803 65.8266 61.5652 53.5548 61.5652 39.0145C61.5652 37.3866 61.4241 35.7263 61.1467 34.0822C61.0368 33.437 60.4333 32.9977 59.7812 33.111ZM24.863 37.8305C24.863 33.9134 28.0495 30.7269 31.9667 30.7269C35.8839 30.7269 39.0703 33.9134 39.0703 37.8305C39.0703 41.7477 35.8839 44.9342 31.9667 44.9342C28.0495 44.9342 24.863 41.7477 24.863 37.8305Z" fill="url(#paint0_linear_3112_4351)" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M44.9332 9.36516C44.7933 8.93505 44.4233 8.62288 43.977 8.55813L36.412 7.45975L33.029 0.603532C32.6313 -0.201177 31.304 -0.201177 30.9062 0.603532L27.5232 7.45975L19.9583 8.55813C19.512 8.62288 19.142 8.93505 19.0021 9.36516C18.8634 9.79295 18.979 10.2647 19.3015 10.5792L24.7761 15.9138L23.4835 23.4476C23.4072 23.8939 23.5899 24.3425 23.9541 24.6061C24.3206 24.872 24.8027 24.9113 25.2016 24.6963L31.9676 21.1375L38.7337 24.6963C38.9071 24.7888 39.0967 24.8327 39.2852 24.8327C39.5303 24.8327 39.7742 24.7564 39.9812 24.6061C40.3454 24.3425 40.5281 23.8939 40.4518 23.4476L39.1591 15.9138L44.6337 10.5792C44.9563 10.2647 45.0719 9.79295 44.9332 9.36516ZM37.0607 14.6513C36.782 14.9241 36.6548 15.3149 36.7207 15.7011L37.7128 21.4844L32.5191 18.7534C32.3457 18.6633 32.1572 18.617 31.9676 18.617C31.778 18.617 31.5896 18.6633 31.4161 18.7534L26.2225 21.4844L27.2145 15.7011C27.2804 15.3149 27.1532 14.9241 26.8746 14.6513L22.673 10.5583L28.4794 9.71433C28.8656 9.65652 29.1986 9.41603 29.3708 9.06686L31.9676 3.80387L34.5644 9.06686C34.7367 9.41603 35.0697 9.65652 35.4559 9.71433L41.2623 10.5583L37.0607 14.6513Z" fill="url(#paint1_linear_3112_4351)" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M3.63502 28.4145C3.55871 28.8608 3.74139 29.3094 4.10559 29.5731C4.47326 29.839 4.95654 29.876 5.35312 29.6632L10.6554 26.8745L15.9577 29.6632C16.1311 29.7557 16.3208 29.7997 16.5092 29.7997C16.7543 29.7997 16.9983 29.7234 17.2052 29.5731C17.5694 29.3094 17.7521 28.8608 17.6758 28.4145L16.663 22.511L20.9536 18.3302C21.2762 18.0158 21.3918 17.544 21.2531 17.1162C21.1132 16.6861 20.7432 16.374 20.2969 16.3092L14.3679 15.449L11.7168 10.075C11.3191 9.27032 9.99176 9.27032 9.59403 10.075L6.94288 15.449L1.01393 16.3092C0.567639 16.374 0.197658 16.6861 0.0577588 17.1162C-0.0809844 17.544 0.0346351 18.0158 0.357213 18.3302L4.64784 22.511L3.63502 28.4145ZM3.72867 18.3094L7.89905 17.7036C8.28522 17.6458 8.61821 17.4053 8.79048 17.0561L10.6554 13.2754L12.5204 17.0561C12.6926 17.4053 13.0256 17.6458 13.4118 17.7036L17.5822 18.3094L14.5645 21.2485C14.2859 21.5213 14.1587 21.9121 14.2246 22.2983L14.9368 26.4513L11.2069 24.4904C11.0335 24.4002 10.845 24.354 10.6554 24.354C10.4658 24.354 10.2773 24.4002 10.1039 24.4904L6.37404 26.4513L7.08625 22.2983C7.15215 21.9121 7.02497 21.5213 6.74633 21.2485L3.72867 18.3094Z" fill="url(#paint2_linear_3112_4351)" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M62.9199 16.3092L56.991 15.449L54.3398 10.075C53.9421 9.27032 52.6148 9.27032 52.2171 10.075L49.5659 15.449L43.637 16.3092C43.1907 16.374 42.8207 16.6861 42.6808 17.1162C42.5421 17.544 42.6577 18.0158 42.9803 18.3302L47.2709 22.511L46.2581 28.4145C46.1818 28.8608 46.3644 29.3094 46.7286 29.5731C47.0951 29.839 47.5773 29.876 47.9762 29.6632L53.2785 26.8745L58.5808 29.6632C58.7542 29.7557 58.9438 29.7997 59.1323 29.7997C59.3774 29.7997 59.6213 29.7234 59.8283 29.5731C60.1925 29.3094 60.3752 28.8608 60.2989 28.4145L59.286 22.511L63.5767 18.3302C63.8992 18.0158 64.0149 17.544 63.8761 17.1162C63.7362 16.6861 63.3662 16.374 62.9199 16.3092ZM57.1875 21.2485C56.9089 21.5213 56.7817 21.9121 56.8476 22.2983L57.5598 26.4513L53.83 24.4904C53.6565 24.4002 53.4681 24.354 53.2785 24.354C53.0888 24.354 52.9004 24.4002 52.727 24.4904L48.9971 26.4513L49.7093 22.2983C49.7752 21.9121 49.648 21.5213 49.3694 21.2485L46.3517 18.3094L50.5221 17.7036C50.9083 17.6458 51.2413 17.4053 51.4135 17.0561L53.2785 13.2754L55.1434 17.0561C55.3157 17.4053 55.6487 17.6458 56.0348 17.7036L60.2052 18.3094L57.1875 21.2485Z" fill="url(#paint3_linear_3112_4351)" />
                        <path d="M31.9671 68.613C32.621 68.613 33.1511 68.0829 33.1511 67.429C33.1511 66.7752 32.621 66.2451 31.9671 66.2451C31.3133 66.2451 30.7832 66.7752 30.7832 67.429C30.7832 68.0829 31.3133 68.613 31.9671 68.613Z" fill="url(#paint4_linear_3112_4351)" />
                        <defs>
                            <linearGradient id="paint0_linear_3112_4351" x1="-12.7748" y1="28.359" x2="86.0581" y2="37.0388" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#168DCA" />
                                <stop offset="1" stopColor="#0F2453" />
                            </linearGradient>
                            <linearGradient id="paint1_linear_3112_4351" x1="12.2815" y1="-5.96975e-07" x2="55.9353" y2="2.70688" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#168DCA" />
                                <stop offset="1" stopColor="#0F2453" />
                            </linearGradient>
                            <linearGradient id="paint2_linear_3112_4351" x1="-5.45144" y1="9.4715" x2="30.2655" y2="11.6851" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#168DCA" />
                                <stop offset="1" stopColor="#0F2453" />
                            </linearGradient>
                            <linearGradient id="paint3_linear_3112_4351" x1="37.1716" y1="9.4715" x2="72.8885" y2="11.6851" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#168DCA" />
                                <stop offset="1" stopColor="#0F2453" />
                            </linearGradient>
                            <linearGradient id="paint4_linear_3112_4351" x1="30.1775" y1="66.2451" x2="34.1474" y2="66.4798" gradientUnits="userSpaceOnUse">
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
                Company started in 2007 of industry presence, Catobo has grown into a highly internationalized engineering and technical solutions group. We support critical industries by enhancing productivity, safety, and sustainability through well-integrated systems and expert-led execution.
            </p>,
            <p key="2">
                Our strength lies in a unique management approach, deep technical knowledge, and extensive global experience across diverse business activities. These elements form the foundation of our operational success what we call our Nucleus for Success. Guided by a forward-thinking philosophy, Catobo continuously develops, integrates, and applies knowledge, information, and technology to meet evolving industry demands and improve modern operational environments.
            </p>,
            <p key="3">
                We deliver end-to-end solutions across key domains, including cable containment systems, aircraft warning lights, airfield lighting, helideck and helipad lighting systems, lightning protection systems, and industrial explosion-proof products.
            </p>,
            <p key="4">
                Backed by a strong regional presence and a global engineering network, our teams provide responsive local support while maintaining international standards of quality and compliance. With a diversified portfolio and a strong regional footprint, Catobo continues to build trusted partnerships across industries worldwide.
            </p>
        ]
    },
    ourApproach: {
        badge: "How We Work",
        title: "Our Approach Is Built On Partnership, Precision, And Performance",
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
                designation: "UAS / UTM SME ",
                image: "/profile/user-2.png",
            },
            {
                id: 3,
                company: "SEED Engineering, UAE",
                quote: "We have the pleasure of working with Catobo for more than 15 years Every once in a while, you run across another professional whose standards match your own. Catobo for us has been that kind of great experience. We were able to take our idea from concept",
                author: "SANJU MATHEW",
                designation: "CEO",
                image: "/profile/user-3.png",
            },
        ],
        buttonHref: "/engineering/testimonials",
    }
};
