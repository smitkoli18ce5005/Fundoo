import './FundooHeader.scss'

import FundooLogo from '../Material/FundooLogo/FundooLogo.vue'

export default{
    name: 'FundooHeader',
    props: {
        title: {
            type: String
        },
        subTitle: {
            type: String
        }
    },
    components: {
        FundooLogo
    }
}