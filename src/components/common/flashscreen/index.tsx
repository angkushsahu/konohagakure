import styles from "./styles.module.scss";

const FlashScreen = () => {
    return (
        <section className={styles.flash}>
            <svg width="1588" height="1588" viewBox="0 0 1588 1588" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_i_105_16)">
                    <circle cx="794.257" cy="794" r="581" fill="#BA0100" className={styles.primary_circle} />
                </g>
                <circle cx="794.257" cy="794" r="558.5" className={styles.border_circle} />
                <circle
                    cx="793.574"
                    cy="794.183"
                    r="367.5"
                    transform="rotate(120 793.574 794.183)"
                    strokeWidth="20"
                    className={styles.inner_circle}
                />
                <circle cx="481.207" cy="609.219" r="57.5" transform="rotate(120 481.207 609.219)" className={styles.choko_tomoe__circle} />
                <path
                    d="M446.8 595.774L456.2 601.201L465.601 606.629L472.924 606.969L482.128 608.396L474.433 621.724L468.662 631.72L462.891 641.716L458.322 649.629L452.791 659.208L445.271 654.867L433.52 648.082L423.18 642.112L413.342 633.1L402.575 622.442L393.459 612.18L386.233 601.9L379.729 590.37L376.537 578.532L378.078 566.093L380.603 549.78L387.369 534.805L400.529 518.524L402.267 533.967L403.295 549.554L408.356 563.582L415.581 573.863L425.179 583.291L434.579 588.718L446.8 595.774Z"
                    className={styles.choko_tomoe__extended}
                />
                <circle cx="1111.04" cy="611.683" r="57.5" transform="rotate(-120 1111.04 611.683)" className={styles.choko_tomoe__circle} />
                <path
                    d="M1139.89 588.608L1130.49 594.035L1121.09 599.462L1117.13 605.634L1111.29 612.892L1103.6 599.564L1097.83 589.568L1092.05 579.572L1087.49 571.659L1081.96 562.079L1089.48 557.737L1101.23 550.953L1111.57 544.983L1124.29 540.969L1138.9 536.974L1152.35 534.21L1164.86 533.093L1178.1 533.225L1189.95 536.38L1199.95 543.933L1212.82 554.276L1222.4 567.623L1229.92 587.161L1215.68 580.945L1201.67 574.041L1186.99 571.41L1174.47 572.528L1161.51 576.125L1152.11 581.552L1139.89 588.608Z"
                    className={styles.choko_tomoe__extended}
                />
                <circle cx="793.5" cy="1160.5" r="57.5" className={styles.choko_tomoe__circle} />
                <path
                    d="M799.06 1197.02V1186.17V1175.31L795.693 1168.8L792.327 1160.11H807.717H819.259H830.801H839.939H851V1168.8V1182.37V1194.31L848.115 1207.33L844.267 1221.99L839.939 1235.01L834.649 1246.41L827.916 1257.81L819.259 1266.49L807.717 1271.37L792.327 1277.34L775.975 1278.97L755.295 1275.72L767.8 1266.49L780.785 1257.81L790.403 1246.41L795.693 1235.01L799.06 1221.99V1211.13V1197.02Z"
                    className={styles.choko_tomoe__extended}
                />
                <g filter="url(#filter1_d_105_16)">
                    <circle cx="794" cy="794" r="122" className={styles.eyeball} />
                </g>
                <defs>
                    <filter
                        id="filter0_i_105_16"
                        x="213.16"
                        y="212.903"
                        width="1162.19"
                        height="1162.19"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                    >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feMorphology radius="120" operator="erode" in="SourceAlpha" result="effect1_innerShadow_105_16" />
                        <feOffset />
                        <feGaussianBlur stdDeviation="49" />
                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0.65098 0 0 0 0 0.00392157 0 0 0 0 0 0 0 0 1 0" />
                        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_105_16" />
                    </filter>
                    <filter
                        id="filter1_d_105_16"
                        x="412"
                        y="412"
                        width="764"
                        height="764"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                    >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feMorphology radius="130" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_105_16" />
                        <feOffset />
                        <feGaussianBlur stdDeviation="65" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0.509804 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_105_16" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_105_16" result="shape" />
                    </filter>
                </defs>
            </svg>
        </section>
    );
};

export default FlashScreen;
